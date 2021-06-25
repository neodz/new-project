<template>
  <CRow>
    <CCol col="12" xl="8">
      <transition name="slide">
      <CCard>
        <CCardHeader>
            Create Article
        </CCardHeader>
             
        <CCardBody>
          <CAlert
            :show.sync="dismissCountDown"
            color="primary"
            fade
          >
            ({{dismissCountDown}}) {{ message }}
          </CAlert>


        <CInput label="Designation" type="text" placeholder="Designation" v-model="designation"></CInput>
          <CInput label="Prix" type="number" placeholder="Prix" v-model="prix"></CInput>
          <CInput label="Tarif de livraison" type="number" placeholder="Tarif de livraison" v-model="tarif_livraison"></CInput>
          <CInput label="Quantite" type="number" placeholder="Quantite" v-model="quantite"></CInput>
          <CSelect
                label="Type transaction"
                horizontal
                :options="type_transactions"
                placeholder="Please select"
                :value.sync="type_transaction"
           />
           <CTextarea
                label="Adresse"
                placeholder="Adresse..."
                horizontal
                v-model="adresse"
                rows="9"
              />
            <CSelect
                label="Category"
                horizontal
                :options="categories"
                placeholder="Please select"
                :value.sync="category"
           />
            <CSelect
                label="Methode paiment"
                horizontal
                :options="methode_paiements"
                placeholder="Please select"
                :value.sync="methode_paiement"
           />
           <CTextarea
                label="Description"
                placeholder="Description..."
                horizontal
                v-model="description"
                rows="9"
              />
            <CInputFile
                label="Poster"
                horizontal
                :placeholder="photo.name ? photo.name  : 'Choisi photo'"
                custom 
                @change="setPhoto"
              />
              <!-- <input type="file"  @change="processFile"/> -->
          <CButton color="primary" @click="store()">Create</CButton>
          <CButton color="primary" @click="goBack">Back</CButton>
        </CCardBody>
      </CCard>
      </transition>
    </CCol>
     <CCol col="12" lg="4">
       <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center"/>
          <strong> Cuurent Poster</strong>
         
        </CCardHeader>
        <CCardBody>
          <CCarousel
            arrows
            indicators
            animate
            height="400px"
             >
           
            <CCarouselItem
            :image="photo_url"
            />

          </CCarousel>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CreateArticle',
  data: () => {
    return {
      name: '',
      type_transaction : '',
      photo : '',
      description : '',
      methode_paiement : '',
      category : '',
      adresse : '',
      quantite : '',
      tarif_livraison : '',
      prix : '',
      designation : '',
      message: '',
      type_transactions : ['exchange','location','achter'],
      categories : ['Informatique','Téléphone','Voiture','Maisson','Vêtements','Bijoux','appareils électroménagers'],
      methode_paiements : ['Visa card','Master card','Edahabia'],
      showMessage: false,
      dismissSecs: 7,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  paginationProps: {
    align: 'center',
    doubleArrows: false,
    previousButtonHtml: 'prev',
    nextButtonHtml: 'next'
  },
  methods: {
    //    processFile(event) {

    //    this.photo = event.target.files[0];
 
    // },
    setPhoto(value){
        console.log(value);
        try {
        this.photo = value[0];
        this.photo_url =  URL.createObjectURL(value[0]);
        console.log(this.photo);
        } catch (error) {
            console.log(error);
        }
    },
    goBack() {
      this.$router.go(-1)
      // this.$router.replace({path: '/users'})
    },
     store() {
        let self = this;
        let data = {
                type_transaction :   self.type_transaction,
                photo : self.photo,
                description : self.description,
                methode_paiement : self.methode_paiement,
                category : self.category,
                adresse : self.adresse,
                quantite : self.quantite,
                tarif_livraison : self.tarif_livraison,
                prix : self.prix,
                designation : self.designation,
        };
        

        const form = new FormData();
        
        Object.keys(data).forEach(key => form.append(key, data[key]));
      
        axios.post(this.$apiAdress + '/api/articles?token=' + localStorage.getItem("api_token"),
        form,{
                headers:
                    {'content-type': 'multipart/form-data'}
                }
        )
        .then(function (response) {
            self.name = '';
            self.name= '',
            self.type_transaction = '',
            self.photo = '',
            self.description = '',
            self.methode_paiement = '',
            self.category = '',
            self.adresse = '',
            self.quantite = '',
            self.tarif_livraison = '',
            self. prix = '',
            self.designation = '',
            self.message = self.$t('alert.article.created');
            self.showAlert();
        }).catch(function (error) {
            // if(error.response.data.message == 'The given data was invalid.'){
              self.message = '';
              for (let key in error.response.data.errors) {
                if (error.response.data.errors.hasOwnProperty(key)) {
                  self.message += error.response.data.errors[key][0] + '  ';
                }
              }
              self.showAlert();
            // }else{
              console.log(error);
              // self.$router.push({ path: '/login' }); 
            // }
        });
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    getArticles (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/articles?token=' + localStorage.getItem("api_token"))
      .then(function (response) {
        self.items = response.data.articles;
        self.you = response.data.you;
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    }
  },
  mounted: function(){
    this.getArticles();
  }
}
</script>
