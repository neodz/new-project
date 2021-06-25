<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard no-header>
        <CCardBody>
          <CForm>
            <template slot="header">
             {{$t('edit_article.title')}}  :  {{ $route.params.id }}
            </template>
            <CAlert
              :show.sync="dismissCountDown"
              color="primary"
              fade
            >
              ({{dismissCountDown}}) {{ message }}
            </CAlert>
          <CSelect
                v-if="auth && auth.is_admin"
                label="Type transaction"
                horizontal
                :options="etats"
                placeholder="Please select"
                :value.sync="etat_article"
           />
          <CInput :label="$t('edit_article.name')" type="text" :placeholder="$t('edit_article.name')" v-model="designation"></CInput>
          <CInput :label="$t('edit_article.price')" type="number" :placeholder="$t('edit_article.price')" v-model="prix"></CInput>
          <CInput :label="$t('edit_article.delivery_rate')" type="number" :placeholder="$t('edit_article.delivery_rate')" v-model="tarif_livraison"></CInput>
          <CInput :label="$t('edit_article.amount')" type="number" :placeholder="$t('edit_article.amount')" v-model="quantite"></CInput>
          <CSelect
                :label="$t('edit_article.type_transaction')"
                horizontal
                :options="type_transactions"
                placeholder="Please select"
                :value.sync="type_transaction"
           />
           <CTextarea
                :label="$t('edit_article.adresse')"
                placeholder="Adresse..."
                horizontal
                v-model="adresse"
                rows="9"
              />
            <CSelect
                :label="$t('edit_article.category')"
                horizontal
                :options="categories"
                placeholder="Please select"
                :value.sync="category"
           />
            <CSelect
                :label="$t('edit_article.payment_method')"
                horizontal
                :options="methode_paiements"
                placeholder="Please select"
                :value.sync="methode_paiement"
           />
           <CTextarea
                :label="$t('edit_article.description')"
                placeholder="Description..."
                horizontal
                v-model="description"
                rows="9"
              />
            <CInputFile
                :label="$t('edit_article.photo')"
                horizontal
                :placeholder="photo.name ? photo.name  : $t('edit_article.photo')"
                custom 
                @change="setPhoto"
              />
            
            
            
            
            <CButton color="primary" @click="update()">{{$t('edit_article.submit')}}</CButton>
            <CButton color="primary" @click="goBack">{{$t('edit_article.back')}}</CButton>
          </CForm>
        </CCardBody>
      </CCard>
    </CCol>
       <CCol col="12" lg="6">
       <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center"/>
          <strong>{{$t('edit_article.current_poster')}}</strong>
         
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
import {mapGetters} from "vuex";

export default {
  name: 'EditArticle',
  props: {
    caption: {
      type: String,
      default: 'User id'
    },
  },
  data: () => {
    return {
      type_transaction : '',
      photo : '',
      photo_url : '',
      description : '',
      methode_paiement : '',
      category : '',
      adresse : '',
      quantite : '',
      tarif_livraison : '',
      prix : '',
      designation : '',
      etat_article : null,
      type_transactions : ['exchange','location','achter'],
      categories : ['Informatique','Téléphone','Voiture','Maisson','Vêtements','Bijoux','appareils électroménagers'],
      methode_paiements : ['Visa card','Master card','Edahabia'],
      etats : ['pending','accepted','rejected'],
        showMessage: false,
        message: '',
        dismissSecs: 7,
        dismissCountDown: 0,
        showDismissibleAlert: false
    }
  },
  computed: {
      ...mapGetters({
          auth : 'getAuth'
      }),
  },
  methods: {
   setPhoto(value){
        console.log(value);
        try {
        this.photo = value[0];
        this.photo_url =  URL.createObjectURL(value[0]);
        
        } catch (error) {
        
        }
    },

    goBack() {
      this.$router.go(-1)
      // this.$router.replace({path: '/users'})
    },
    update() {

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
                etat_article : self.etat_article,
                _method: 'PUT',
        };


        // if (this.auth.is_admin) 
        //     this.data.etat_article = this.etat_article;

        
        const form = new FormData();
        Object.keys(data).forEach(key => form.append(key, data[key]));

        axios.post(  this.$apiAdress + '/api/articles/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"),
        form,{
                headers:
                    {'content-type': 'multipart/form-data'}
                }
        )
        .then(function (response) {
          
            self.message = self.$t('alert.article.updated');
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
        });
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
  },
  mounted: function(){
    let self = this;

    axios.get(  this.$apiAdress + '/api/articles/' + self.$route.params.id + '/edit?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
                self.type_transaction =   response.data.type_transaction;
                self.photo = response.data.photo;
                self.photo_url = response.data.photo;
                self.description = response.data.description;
                self.methode_paiement = response.data.methode_paiement;
                self.category = response.data.category;
                self.adresse = response.data.adresse;
                self.quantite = response.data.quantite;
                self.tarif_livraison = response.data.tarif_livraison;
                self.prix = response.data.prix;
                self.designation = response.data.designation;
                self.etat_article = response.data.etat_article;
    }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
    });
  }
}


</script>
