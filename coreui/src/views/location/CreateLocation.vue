<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard no-header>
        <CCardBody>
          <CForm>
            <template slot="header">
              Edit Location id: {{ $route.params.id }}
            </template>
            <CAlert :show.sync="dismissCountDown" color="primary" fade>
              ({{ dismissCountDown }}) {{ message }}
            </CAlert>

            <!-- <CInput
              label="Quantite"
              type="number"
              placeholder="Quantite"
              v-model="quantite"
            ></CInput> -->
               <CSelect
                :label="$t('create_location.amount')"
                horizontal
                :options="quantites"
                placeholder="Please select"
                :value.sync="quantite"
           />

            <CInput
                :label="$t('create_location.date_start')"
              type="date"
              v-model="date_sortie"
              prependHtml="<i class='cil-calendar'></i>"
              horizontal
            />

            <CInput
                :label="$t('create_location.date_end')"
              type="date"
              v-model="date_entrer"
              prependHtml="<i class='cil-calendar'></i>"
              horizontal
            />
            <CButton color="primary" @click="update()">{{$t('create_location.submit')}}</CButton>
            <CButton color="primary" @click="goBack">{{$t('create_location.back')}}</CButton>
          </CForm>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center" />
          <strong>{{$t('create_location.current_poster')}}</strong>
        </CCardHeader>
        <CCardBody>
          <CCarousel v-if="article"  indicators animate height="500px">
            <CCarouselItem :image="article.photo_url" />
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
  name: 'CreateLocation',
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
      article : null,
      type_transactions : ['exchange','location','achter'],
      categories : ['Informatique','Téléphone','Voiture','Maisson','Vêtements','Bijoux','appareils électroménagers'],
      methode_paiements : ['Visa card','Master card','Edahabia'],
        showMessage: false,
        message: '',
        dismissSecs: 4,
        dismissCountDown: 0,
        showDismissibleAlert: false
    }
  }, 
   computed: {
    ...mapGetters({
      auth: "getAuth",
    }),
    quantites (){
           let qu = [];

          try {
             for (let index = 1; index <= this.article.dynamique_quantite ; index++)
             qu.push(index);
          } catch (error) {
            
          }
            
            return qu;
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    update() {
        let self = this;

        axios.post(  this.$apiAdress + '/api/locations/?token=' + localStorage.getItem("api_token"),
        {
              // _method : "PUT",
              quantite : self.quantite,
              date_entrer : self.date_entrer,
              date_sortie : self.date_sortie,
              article_id : self.article.id, 
              utilisateur_id : self.auth.utilisateur.id
        }
        )
        .then(function (response) {
            self.message = self.$t('alert.location.created');
            self.quantite = ""
            self.date_entrer = ""
            self.date_sortie = ""
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
  watch: {
      dismissCountDown (newV,oldV){
        if(newV===0)
        this.$router.push({ path: "/locations" });
      }
  },
  mounted: function(){
    let today = new Date();
    this.date_entrer = today.toISOString().slice(0,10);
    this.date_sortie = today.toISOString().slice(0,10);
    
    let self = this;
    axios
      .get(
        this.$apiAdress +
          "/api/articles/" +
          self.$route.params.id +
          "?token=" +
          localStorage.getItem("api_token")
      )
      .then(function (response) {
        self.article = response.data;

      })
      .catch(function (error) {
        console.log(error);
        self.$router.push({ path: "/login" });
      });
  }
}


</script>
