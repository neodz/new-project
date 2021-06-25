<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard no-header>
        <CCardBody>
          <CForm>
            <template class="mb-4" v-if="article">
              Exchange article : <strong>{{ article.designation }}</strong>
            </template>
            <CAlert :show.sync="dismissCountDown" color="primary" fade>
              ({{ dismissCountDown }}) {{ message }}
            </CAlert>





        
            <CInput
              :label="$t('create_exchange.name')"
              type="text"
              placeholder="Element echange"
              v-model="element_echange"
            ></CInput>

                <CSelect
              :label="$t('create_exchange.amount')"
                horizontal
                :options="quantites"
                placeholder="Please select"
                :value.sync="quantite"
           />


            <CTextarea
              :label="$t('create_exchange.address')"
              :placeholder="$t('create_exchange.address')"
              horizontal
              v-model="adresse"
              rows="9"
            />

            <CTextarea
              :label="$t('create_exchange.description')"
              :placeholder="$t('create_exchange.description')"
              horizontal
              v-model="description"
              rows="9"
            />
            <CInputFile
              label="Photo"
              horizontal
              :placeholder="photo.name ? photo.name : $t('create_exchange.photo')"
              custom
              @change="setPhoto"
            />

            <CButton color="primary" @click="update()">{{$t('create_exchange.submit')}}</CButton>
            <CButton color="primary" @click="goBack">{{$t('create_exchange.back')}}</CButton>
          </CForm>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center" />
          <strong>{{$t('create_exchange.current_poster')}}</strong>
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
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "EditExchange",
  props: {
    caption: {
      type: String,
      default: "User id",
    },
  },
  data: () => {
    return {
      element_echange: "",
      photo: "",
      photo_url: "",
      description: "",
      adresse: "",
      marque: "",
      article: null,
      quantite : '',
      showMessage: false,
      message: "",
      dismissSecs: 4,
      dismissCountDown: 0,
      showDismissibleAlert: false,
    };
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
  },
  methods: {
    setPhoto(value) {
      console.log(value);
      try {
        this.photo = value[0];
        this.photo_url = URL.createObjectURL(value[0]);

        // this.imgUrl = URL.createObjectURL(e.target.files[0]);
        // this.myClass.poster = e.target.files[0];
        // this.photo_url = URL.createObjectURL(e.target.files[0]);
        // this.myClass.poster = e.target.files[0];
      } catch (error) {
        console.log(error);
      }
    },

    goBack() {
      this.$router.go(-1);
      // this.$router.replace({path: '/users'})
    },
    update() {
      const self = this;

      let data = {
        // type_transaction :   self.type_transaction,
        photo: self.photo,
        description: self.description,
        // methode_paiement : self.methode_paiement,
        // category : self.category,
        adresse: self.adresse,
        utilisateur_id: self.auth.utilisateur.id,
        article_id: self.article.id,
        quantite : self.quantite,
        // tarif_livraison : self.tarif_livraison,
        // prix : self.prix,
        element_echange: self.element_echange,
        // _method: 'PUT',
      };

      const form = new FormData();
      Object.keys(data).forEach((key) => form.append(key, data[key]));

      axios
        .post(
          this.$apiAdress +
            "/api/exchanges/?token=" +
            localStorage.getItem("api_token"),
          form,
          {
            headers: { "content-type": "multipart/form-data" },
          }
        )
        .then(function (response) {
            self.message = self.$t('alert.exchange.created');
          self.photo = "";
          self.description = "";
          self.adresse = "";
          self.utilisateur_id = "";
          self.article_id = "";
          self.element_echange = "";
          self.showAlert();

          
            // self.$router.push({ path: "/exchanges" });
        })
        .catch(function (error) {
          self.message = "";
          for (let key in error.response.data.errors) {
            if (error.response.data.errors.hasOwnProperty(key)) {
              self.message += error.response.data.errors[key][0] + "  ";
            }
          }
          self.showAlert();

          console.log(error);
        });
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },watch: {
      dismissCountDown (newV,oldV){
        if(newV===0)
        this.$router.push({ path: "/exchanges" });
      }
  },
  mounted: function () {
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
  },
};
</script>
