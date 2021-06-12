<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard no-header>
        <CCardBody>
          <CForm>
            <template slot="header">
              Edit Article id:  {{ $route.params.id }}
            </template>
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
            
            
            
            
            <CButton color="primary" @click="update()">Save</CButton>
            <CButton color="primary" @click="goBack">Back</CButton>
          </CForm>
        </CCardBody>
      </CCard>
    </CCol>
       <CCol col="12" lg="6">
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
      type_transactions : ['exchange','location','achter'],
      categories : ['cat1','cat2','cat3','cat4'],
      methode_paiements : ['Visa card','Master card','Edahabia'],
        showMessage: false,
        message: '',
        dismissSecs: 7,
        dismissCountDown: 0,
        showDismissibleAlert: false
    }
  },
  methods: {
   setPhoto(value){
        console.log(value);
        try {
        this.photo = value[0];
        this.photo_url =  URL.createObjectURL(value[0]);
        
      // this.imgUrl = URL.createObjectURL(e.target.files[0]);
      // this.myClass.poster = e.target.files[0];
      // this.photo_url = URL.createObjectURL(e.target.files[0]);
      // this.myClass.poster = e.target.files[0];
        } catch (error) {
            console.log(error);
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
                _method: 'PUT',
        };

        
        const form = new FormData();
        Object.keys(data).forEach(key => form.append(key, data[key]));

        axios.post(  this.$apiAdress + '/api/articles/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"),
        form,{
                headers:
                    {'content-type': 'multipart/form-data'}
                }
        )
        .then(function (response) {
            self.message = 'Successfully updated article.';
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
    }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
    });
  }
}


</script>
