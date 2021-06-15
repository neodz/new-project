<template>
  <CRow>
    <CCol col="12" lg="6" >
      <CCard>
        <CCardHeader v-if="original_items">
           <p>Article id :  {{ $route.params.id }}</p> 
          Utilisateur : <strong @click="$router.push({path: `/profile/${original_items.utilisateur.user_id}`})">{{original_items.utilisateur.name}}</strong>
          <CButton color="primary"  @click="setTransaction()" v-if="original_items.type_transaction==='exchange'" >Toutes exchanges transactions</CButton>
          <CButton color="primary" @click="setTransaction()" v-if="original_items.type_transaction==='location'">Toutes locations transactions</CButton>
          <CButton color="primary" @click="setTransaction()" v-if="original_items.type_transaction==='achter'">Toutes achats transactions</CButton>
        
        </CCardHeader>
        <CCardBody v-if="auth">
          <CDataTable 
            striped 
            small 
            fixed
            :items="items" 
            :fields="fields"
          >
            <template slot="value" slot-scope="data">
              <strong>{{data.item.value}}</strong>
            </template>
          </CDataTable>
        </CCardBody>
        <CCardFooter>
          <CButton color="primary" @click="goBack">Back</CButton>
          <CButton v-if="original_items.etat==='pending'" color="success" @click="updateTransaction('accepted')">Accepter</CButton>
          <CButton v-if="original_items.etat==='pending'" color="danger" @click="updateTransaction('rejected')">Refuser</CButton>
        </CCardFooter>
      </CCard>
     
    </CCol>
    
    <CCol col="12" lg="6">
       <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center"/>
          <strong> Article Exchange Poster</strong>
        </CCardHeader>
        <CCardBody>
          <CCarousel
            indicators
            animate
            height="500px"
             >
           
            <CCarouselItem
            :image="photo"
            />

          </CCarousel>
        </CCardBody>
      </CCard>
    </CCol>
    
  </CRow>
</template>

<script>
import axios from 'axios'

import { mapGetters } from "vuex";
export default {
  name: 'User',
  data: () => {
    return {
      items: [],
      article: [],
      original_items: [],

      except : [
        'article',
        'utilisateur', 
        'utilisateur_id',
        'photo_url',
        'photo',
        'viewer_transaction',
        'etat'
      ],
      fields: [
        {key: 'key'},
        {key: 'value'},
      ],

      showMessage: false,
        message: '',
        dismissSecs: 7,
        dismissCountDown: 0,
        showDismissibleAlert: false
    }
  },
  computed : {
    
    ...mapGetters({
        auth : 'getAuth'
    }),
    photo() {

      if(!this.original_items) return null;

      return this.original_items.photo ? this.original_items.photo : this.article.photo_url;

    }
  },
  methods: {
    
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    // refuserTransaction(){

    //     this.updateTransaction('')
    // },
    // accepterTransaction(){
    // },
    updateTransaction(etat){
        let self = this;
    axios.post(  this.$apiAdress + '/api/articletransactions/'+self.$route.params.id.toString()+'/transaction/?token=' + localStorage.getItem("api_token"),
    {
        _method: 'PUT',
        // id : self.$route.params.id.toString(),
        article_id : self.$route.params.article_id.toString(),
        etat : etat ,
        quantite : self.original_items.quantite
    })
    .then(function (response) {
      self.original_items = response.data.transaction;
      self.article = response.data.article;
      const items = Object.entries(response.data.transaction);
      self.items = items.map(([key, value]) => { return {key: key, value: value}}).filter( item => !self.except.includes(item.key));
      // self.items = self.items;  
      self.message = `Successfully ${etat} article.`;
      self.showAlert();    
    }).catch(function (error) {
      
              self.message = '';
              for (let key in error.response.data.errors) {
                if (error.response.data.errors.hasOwnProperty(key)) {
                  self.message += error.response.data.errors[key][0] + '  ';
                }
              }
              self.showAlert();

              console.log(error);

      self.$router.push({ path: '/login' });
    });
    },
    setAction(action){
           if(action==="exchange")this.$router.push({path: `/exchanges/create/${this.$route.params.id.toString()}`});
           if(action==="location")this.$router.push({path: `/locations/create/${this.$route.params.id.toString()}`});
           if(action==="achat")this.$router.push({path: `/achats/create/${this.$route.params.id.toString()}`});
    },
    setTransaction(){
          //  if(action==="exchange")
           this.$router.push({path: `/articletransactions/${this.$route.params.id.toString()}`});
          //  if(action==="location")this.$router.push({path: `/locations/create/${this.$route.params.id.toString()}`});
          //  if(action==="achat")this.$router.push({path: `/achats/create/${this.$route.params.id.toString()}`});
    },
    setEditAction(action){
           if(action==="exchange")this.$router.push({path: `/exchanges/${this.original_items.viewer_transaction.toString()}/edit`});
           if(action==="location")this.$router.push({path: `/locations/${this.original_items.viewer_transaction.toString()}/edit`});
          //  if(action==="achat")this.$router.push({path: `/locations/${this.original_items.viewer_transaction.toString()}/edit`});
    },
    getUserData (id) {
      const user = usersData.find((user, index) => index + 1 == id)
      const userDetails = user ? Object.entries(user) : [['id', 'Not found']]
      return userDetails.map(([key, value]) => { return { key, value } })
    },
    goBack() {
      this.$router.go(-1)
    }
  },
  mounted: function(){
    let self = this;
    axios.post(  this.$apiAdress + '/api/articletransactions/'+self.$route.params.id.toString()+'/transaction/?token=' + localStorage.getItem("api_token"),
    {
        // id : self.$route.params.id.toString(),
        article_id : self.$route.params.article_id.toString()
    })
    .then(function (response) {
      self.original_items = response.data.transaction;
      self.article = response.data.article;
      const items = Object.entries(response.data.transaction);
      self.items = items.map(([key, value]) => { return {key: key, value: value}}).filter( item => !self.except.includes(item.key));
      // self.items = self.items;      
    }).catch(function (error) {
      console.log(error);
      self.$router.push({ path: '/login' });
    });
  }
}
</script>
