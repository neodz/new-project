<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard no-header>
        <CCardBody v-if="user" class="p-4">
          <CForm @submit.prevent="register" method="POST">

            <h1>{{$t('edit_profile.title')}}</h1>
            <p class="text-muted">{{$t('edit_profile.description')}}</p>
             <CAlert
              :show.sync="dismissCountDown"
              color="primary"
              fade
            >
              ({{dismissCountDown}}) {{ message }}
            </CAlert>
            <CInput
              :placeholder="$t('edit_profile.last_name')"
              prependHtml="<i class='cui-user'></i>"
              autocomplete="nom"
              v-model="nom"
            >
              <template #prepend-content><CIcon name="cil-user" /></template>
            </CInput>
            <CInput
              :placeholder="$t('edit_profile.first_name')"
              prependHtml="<i class='cui-user'></i>"
              autocomplete="Prenom"
              v-model="prenom"
            >
              <template #prepend-content><CIcon name="cil-user" /></template>
            </CInput>

            <CInput
              type="date"
              v-model="date_naissance"
              prependHtml="<i class='cil-calendar'></i>"
              horizontal
            >
              <template #prepend-content
                ><CIcon name="cil-calendar"
              /></template>
            </CInput>

            <CInput
              :placeholder="$t('edit_profile.place_of_birth')"
              prependHtml="<i class='cil-house'></i>"
              autocomplete="Lieu naissance"
              v-model="lieu_naissance"
            >
              <template #prepend-content><CIcon name="cil-house" /></template>
            </CInput>

            <CInput
              :placeholder="$t('edit_profile.adresse')"
              prependHtml="<i class='cil-house'></i>"
              autocomplete="adresse"
              v-model="adresse"
            >
              <template #prepend-content><CIcon name="cil-house" /></template>
            </CInput>

            <CInput
              :placeholder="$t('edit_profile.phone')"
              prependHtml="<i class='cil-phone'></i>"
              autocomplete="Numéro de téléphone"
              v-model="num_tel"
            >
              <template #prepend-content><CIcon name="cil-phone" /></template>
            </CInput>

            <CInput
              :placeholder="$t('edit_profile.card_id')"
              prependHtml="<i class='cil-credit-card'></i>"
              autocomplete="Carte identité"
              v-model="num_identite"
            >
              <template #prepend-content
                ><CIcon name="cil-credit-card"
              /></template>
            </CInput>

            <CInput
              :placeholder="$t('edit_profile.email')"
              prepend="@"
              autocomplete="email"
              v-model="email"
            />
            <CInput
              :placeholder="$t('edit_profile.password')"
              type="password"
              prependHtml="<i class='cui-lock-locked'></i>"
              autocomplete="new-password"
              v-model="password"
            >
              <template #prepend-content
                ><CIcon name="cil-lock-locked"
              /></template>
            </CInput>
            <CInput
              :placeholder="$t('edit_profile.repeat_password')"
              type="password"
              prependHtml="<i class='cui-lock-locked'></i>"
              autocomplete="new-password"
              class="mb-4"
              v-model="password_confirmation"
            >
              <template #prepend-content
                ><CIcon name="cil-lock-locked"
              /></template>
            </CInput>

            <div class="form-row form-group">
              <CCol sm="9" :class="'form-inline'">
                <CInputRadio
                  v-for="option in options"
                  :key="option"
                  :label="option"
                  type="radio"
                  :custom="true"
                  :name="`option`"
                  :checked="option === sexe"
                  :inline="true"
                  :value="option"
                  @click="sexe = option"
                />
              </CCol>
            </div>
            <CButton color="primary" @click="update()">{{$t('edit_profile.submit')}}</CButton>
            <CButton color="primary" @click="goBack">{{$t('edit_profile.back')}}</CButton>
          </CForm>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import axios from "axios";
export default {
  name: "EditProfile",
  components: {},
  data() {
    return {
      user: null,
      nom: "",
      prenom: "",
      date_naissance: "",
      lieu_naissance: "",
      adresse: "",
      num_tel: "",
      num_identite: "",
      sexe: "Male",
      email: "",
      password: "",
      password_confirmation: "",
      options: ["female", "male"],
      

      // alert
        message: '',
        dismissSecs: 7,
        dismissCountDown: 0,
        showDismissibleAlert: false
      //   options_value: {Female : 'female', Male : 'male'},
      //   options_value: {female : 'Female', Male : 'male'},
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
      // this.$router.replace({path: '/users'})
    },
    update() {
      var self = this;
      axios
        .post(
          this.$apiAdress +
            "/api/profile/" +
            this.user.id +
            "?token=" +
            localStorage.getItem("api_token"),
          {
            _method: "PUT",
            nom: self.nom,
            prenom: self.prenom,
            date_naissance: self.date_naissance,
            lieu_naissance: self.lieu_naissance,
            adresse: self.adresse,
            num_tel: self.num_tel,
            num_identite: self.num_identite,
            sexe: self.sexe,
            email: self.email,
            password: self.password,
            password_confirmation: self.password_confirmation,
          }
        )
        .then(function (response) {
          self.user = response.data.user;
          self.setUpUser();
            self.message = self.$t('alert.user.updated');
          self.showAlert();
          //   self.name = "";
          //   self.prenom = "";
          //   self.sexe = "";
          //   self.num_identite = "";
          //   self.num_tel = "";
          //   self.adresse = "";
          //   self.lieu_naissance = "";
          //   self.date_naissance = "";
          //   self.email = "";
          //   self.password = "";
          //   self.password_confirmation = "";
          //   console.log(response);
          //   self.$router.push({ path: "/login" });
        })
        .catch(function (error) {




             self.message = '';
              for (let key in error.response.data.errors) {
                if (error.response.data.errors.hasOwnProperty(key)) {
                  self.message += error.response.data.errors[key][0] + '  ';
                }
              }
              self.showAlert();

              console.log(error);
            // }
        });
    },
    setUpUser() {
      this.nom = this.role.nom;
      this.prenom = this.role.prenom;
      this.date_naissance = this.role.date_naissance;
      this.lieu_naissance = this.role.lieu_naissance;
      this.adresse = this.role.adresse;
      this.num_tel = this.role.num_tel;
      this.num_identite = this.role.num_identite;
      this.sexe = this.role.sexe;
      this.email = this.user.email;
      // this.password= this.user.password;
      // this.password_confirmation= this.user.password_confirmation
    },
    setErrorMessage(errors,messsage){
            message = Object.entries(errors).map(([key, value]) => { return value });
    },
    editUser() {
      const editLink = this.editLink(this.user.id);
      this.$router.push({ path: editLink });
    },
    editLink(id) {
      return `/profile/${id.toString()}/edit`;
    },
    getUser() {
      let self = this;
      axios
        .get(
          this.$apiAdress +
            "/api/profile?token=" +
            localStorage.getItem("api_token")
        )
        .then(function (response) {
          self.user = response.data.user;
          self.setUpUser();
        })
        .catch(function (error) {
          console.log(error);
          self.$router.push({ path: "/login" });
        });
    },countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
  },
  mounted() {
    this.getUser();
  },
  computed: {
    utilisateur() {
      let utilisateur = null;
      try {
        utilisateur = this.user.utilisateur;
      } catch (error) {}
      return utilisateur;
    },
    admin() {
      let admin = null;
      try {
        admin = this.user.admin;
      } catch (error) {}
      return admin;
    },
    role() {
      return this.utilisateur ? this.utilisateur : this.admin;
    },
  },
};
</script>

<style scoped>
</style>
