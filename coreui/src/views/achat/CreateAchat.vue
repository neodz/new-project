<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard no-header>
        <CCardBody>
          <CForm>
            <template slot="header">
              Achter Article id : {{ $route.params.id }}
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
                :label="$t('create_achat.amount')"
                horizontal
                :options="quantites"
                placeholder="Please select"
                :value.sync="quantite"
           />

            <CSelect
                :label="$t('create_achat.category')"
                horizontal
                :options="colors"
                placeholder="Please select"
                :value.sync="color"
           />

           <CSelect
                :label="$t('create_achat.payment_method')"
                horizontal
                :options="methode_paiements"
                placeholder="Please select"
                :value.sync="methode_paiement"
           />

          

            <CButton color="primary" @click="update()">{{$t('create_achat.submit')}}</CButton>
            <CButton color="primary" @click="goBack">{{$t('create_achat.back')}}</CButton>
            <!-- <CCol class="float-right"> -->
           <div class="float-right">  Total : <strong>{{total}} DA</strong></div>
          <!-- </CCol> -->
          </CForm>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center" />
          <strong> {{$t('create_achat.current_poster')}}</strong>
        </CCardHeader>
        <CCardBody>
          <CCarousel v-if="article" indicators animate height="500px">
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
      quantite : '',
      photo_url : '',
      article : null,
      colors : ['blanc','rouge','vert','noir'],
      color : null,
      colorFee : {
        blanc : 1,
        noir : 1.2,
        vert : 1.5,
        rouge : 2
      },
      methode_paiements : ['Visa card','Master card','Edahabia'],
      methode_paiement : '',
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
             for (let index = 1; index <= this.article.quantite ; index++)
             qu.push(index);
          } catch (error) {
            
          }
            
            return qu;
    },
    total (){

      let total = 0;

      try {
        total = (this.article.prix * this.quantite) * this.colorFees;
      
      } catch (error) {}

      return total;
    },
    colorFees(){

      let fees = 1;
      try {
        if(!this.color) return 1;

        fees = this.colorFee[this.color];
      } catch (error) {
        
      }
      return fees;
    }
  },
  watch: {
      dismissCountDown (newV,oldV){
        if(newV===0)
        this.$router.push({ path: "/achats" });
      }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    update() {
        let self = this;

        axios.post(  this.$apiAdress + '/api/achats/?token=' + localStorage.getItem("api_token"),
        {
              // _method : "PUT",
              quantite : self.quantite,
              total : self.total,
              couleur : self.color,
              methode_paiement : self.methode_paiement,
              article_id : self.article.id, 
              utilisateur_id : self.auth.utilisateur.id
        }
        )
        .then(function (response) {
            self.message = self.$t('alert.achat.created');
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
  mounted: function(){
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
