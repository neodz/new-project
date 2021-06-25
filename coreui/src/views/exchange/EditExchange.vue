<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard no-header>
        <CCardBody>
          <CForm>
            <template slot="header">
              Edit Exchange id: {{ $route.params.id }}
            </template>
            <CAlert :show.sync="dismissCountDown" color="primary" fade>
              ({{ dismissCountDown }}) {{ message }}
            </CAlert>
            <CInput
              :label="$t('edit_exchange.name')"
              type="text"
              :placeholder="$t('edit_exchange.name')"
              v-model="element_echange"
            ></CInput>

            <CSelect
              :label="$t('edit_exchange.amount')"
              horizontal
              :options="quantites"
              placeholder="Please select"
              :value.sync="quantite"
            />

            <CTextarea
              :label="$t('edit_exchange.address')"
              :placeholder="$t('edit_exchange.address')"
              horizontal
              v-model="adresse"
              rows="9"
            />

            <CTextarea
              :label="$t('edit_exchange.description')"
              :placeholder="$t('edit_exchange.description')"
              horizontal
              v-model="description"
              rows="9"
            />
            <CInputFile
              label="Photo"
              horizontal
              :placeholder="photo.name ? photo.name : $t('edit_exchange.photo')"
              custom
              @change="setPhoto"
            />

            <CButton color="primary" @click="update()">{{$t('edit_exchange.submit')}}</CButton>
            <CButton color="primary" @click="goBack">{{$t('edit_exchange.back')}}</CButton>
          </CForm>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center" />
          <strong>{{$t('edit_exchange.current_poster')}}</strong>
        </CCardHeader>
        <CCardBody>
          <CCarousel arrows indicators animate height="400px">
            <CCarouselItem :image="photo_url" />
          </CCarousel>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import axios from 'axios'
export default {
  name: 'EditExchange',
  props: {
    caption: {
      type: String,
      default: 'User id'
    },
  },
  data: () => {
    return {
      element_echange : '',
      photo : '',
      photo_url : '',
      description : '',
      quantite : '',
      adresse : '',
      marque : '',
      article : null,
        showMessage: false,
        message: '',
        dismissSecs: 7,
        dismissCountDown: 0,
        showDismissibleAlert: false
    }
  },
   computed: {
     quantites (){
           let qu = [];

          try {
             for (let index = 1; index <= this.article.quantite ; index++)
             qu.push(index);
          } catch (error) {
            
          }
            
            return qu;
    },
   },
  methods: {
   setPhoto(value){
        try {
        this.photo = value[0];
        this.photo_url =  URL.createObjectURL(value[0]);
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
                // type_transaction :   self.type_transaction,
                photo : self.photo,
                description : self.description,
                // methode_paiement : self.methode_paiement,
                // category : self.category,
                adresse : self.adresse,
                quantite : self.quantite,
                // tarif_livraison : self.tarif_livraison,
                // prix : self.prix,
                element_echange : self.element_echange,
                _method: 'PUT',
        };

        
        const form = new FormData();
        Object.keys(data).forEach(key => form.append(key, data[key]));

        axios.post(  this.$apiAdress + '/api/exchanges/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"),
        form,{
                headers:
                    {'content-type': 'multipart/form-data'}
                }
        )
        .then(function (response) {
            self.message = 'Successfully updated exchange.';
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

    axios.get(  this.$apiAdress + '/api/exchanges/' + self.$route.params.id + '/edit?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
                // self.type_transaction =   response.data.type_transaction;
                self.photo = response.data.photo;
                self.photo_url = response.data.photo;
                self.description = response.data.description;
                // self.methode_paiement = response.data.methode_paiement;
                // self.category = response.data.category;
                self.adresse = response.data.adresse;
                self.quantite = response.data.quantite;
                self.article =  response.data.article;
                // self.quantite = response.data.quantite;
                // self.tarif_livraison = response.data.tarif_livraison;
                // self.prix = response.data.prix;
                self.element_echange = response.data.element_echange;

    }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
    });
  }
}


</script>
