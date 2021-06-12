<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard no-header>
        <CCardBody>
          <CForm>
            <template slot="header">
              Edit Location id:  {{ $route.params.id }}
            </template>
            <CAlert
              :show.sync="dismissCountDown"
              color="primary"
              fade
            >
              ({{dismissCountDown}}) {{ message }}
            </CAlert>
           
            <CInput label="Quantite" type="number" placeholder="Quantite" v-model="quantite"></CInput>
           
                 <CInput
                  label="Date Sortie"
                  type="date"
                  v-model="date_sortie"
                  prependHtml="<i class='cil-calendar'></i>"
                  horizontal
                />
            
          
            <CInput
                  label="Date entrer"
                  type="date"
                  v-model="date_entrer"
                  prependHtml="<i class='cil-calendar'></i>"
                  horizontal
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
          <strong> Curent Article Poster</strong>
         
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
      date_sortie : '',
      date_entrer : '',
      quantite : '',
      photo_url : '',
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
    goBack() {
      this.$router.go(-1)
    },
    update() {
        let self = this;

        axios.post(  this.$apiAdress + '/api/locations/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"),
        {
              _method : "PUT",
              quantite : self.quantite,
              date_entrer : self.date_entrer,
              date_sortie : self.date_sortie
        }
        )
        .then(function (response) {
            self.message = 'Successfully updated location.';
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

    axios.get(  this.$apiAdress + '/api/locations/' + self.$route.params.id + '/edit?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
                self.date_entrer =   response.data.date_entrer;
                self.date_sortie =   response.data.date_sortie;
                self.quantite = response.data.quantite;
                self.photo_url = response.data.article.photo;

    }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
    });
  }
}


</script>
