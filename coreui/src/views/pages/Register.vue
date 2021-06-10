<template>
  <div class="d-flex align-items-center min-vh-100">
    <CContainer fluid>
      <CRow class="justify-content-center">
        <CCol md="6">
          <CCard class="mx-4 mb-0">
            <CCardBody class="p-4">
              <CForm @submit.prevent="register" method="POST">
                <h1>S'inscrire</h1>
                <p class="text-muted">Créez votre compte</p>
                <CInput
                  placeholder="Nom"
                  prependHtml="<i class='cui-user'></i>"
                  autocomplete="nom"
                  v-model="name"
                 >
                  <template #prepend-content><CIcon name="cil-user"/></template>
                </CInput>
                <CInput
                  placeholder="Prenom"
                  prependHtml="<i class='cui-user'></i>"
                  autocomplete="Prenom"
                  v-model="prenom"
                 >
                  <template #prepend-content><CIcon name="cil-user"/></template>
                </CInput>
                
                
                <CInput
                  type="date"
                  v-model="date_naissance"
                  prependHtml="<i class='cil-calendar'></i>"
                  horizontal
                >
                 <template #prepend-content><CIcon name="cil-calendar"/></template>
                </CInput>

              <CInput
                  placeholder="Lieu naissance"
                  prependHtml="<i class='cil-house'></i>"
                  autocomplete="Lieu naissance"
                  v-model="lieu_naissance"
                 >
                  <template #prepend-content><CIcon name="cil-house"/></template>
                </CInput>

              <CInput
                  placeholder="adresse"
                  prependHtml="<i class='cil-house'></i>"
                  autocomplete="adresse"
                  v-model="adresse"
                 >
                  <template #prepend-content><CIcon name="cil-house"/></template>
                </CInput>


              <CInput
                  placeholder="Numéro de téléphone"
                  prependHtml="<i class='cil-phone'></i>"
                  autocomplete="Numéro de téléphone"
                  v-model="num_tel"
                 >
                  <template #prepend-content><CIcon name="cil-phone"/></template>
                </CInput>

                <CInput
                  placeholder="Carte identité"
                  prependHtml="<i class='cil-credit-card'></i>"
                  autocomplete="Carte identité"
                  v-model="num_identite"
                 >
                  <template #prepend-content><CIcon name="cil-credit-card"/></template>
                </CInput>


                <CInput
                  placeholder="Email"
                  prepend="@"
                  autocomplete="email"
                  v-model="email"
                />
                <CInput
                  placeholder="Password"
                  type="password"
                  prependHtml="<i class='cui-lock-locked'></i>"
                  autocomplete="new-password"
                  v-model="password"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                <CInput
                  placeholder="Repeat password"
                  type="password"
                  prependHtml="<i class='cui-lock-locked'></i>"
                  autocomplete="new-password"
                  class="mb-4"
                  v-model="password_confirmation"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>

                
                <div class="form-row form-group">
                    
                    
                  <CCol sm="9" :class="'form-inline'" >
                    <CInputRadio
                      v-for="(option) in options"
                      :key="option"
                      :label="option"
                      type="radio"
                      :value="options_value[option]"
                      :custom="true"
                      :name="`option`"
                      :checked="true"
                      :inline="true"
                      @click="sexe = option"
                    />
                  </CCol>


                </div>
                <CButton type="submit" color="success" block>Create Account</CButton>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

  <script>
    import axios from 'axios'
    export default {
      data() {
        return {
          name: '',
          prenom : '',
          date_naissance : '',
          lieu_naissance : '',
          adresse : '',
          num_tel : '',
          num_identite : '',
          sexe : 'Male',
          email: '',
          password: '',
          password_confirmation: '',
      options: ['Female', 'Male'],
      options_value: {Female : 'female', Male : 'male'},
        }
      },    
      methods: {
        register() {
          var self = this;
          axios.post(  this.$apiAdress + '/api/register', {
            name: self.name,
            prenom: self.prenom,
            date_naissance : self.date_naissance,
            lieu_naissance : self.lieu_naissance,
            adresse : self.adresse,
            num_tel : self.num_tel,
            num_identite : self.num_identite,
            sexe : self.options_value[self.sexe],
            email: self.email,
            password: self.password,
            password_confirmation: self.password_confirmation
          }).then(function (response) {
            self.name = '';
            self.prenom = '';
            self.sexe = '';
            self.num_identite = '';
            self.num_tel = '';
            self.adresse = '';
            self.lieu_naissance = '';
            self.date_naissance = '';
            self.email = '';
            self.password = '';
            self.password_confirmation = '';
            console.log(response);
            self.$router.push({ path: '/login' });
          })
          .catch(function (error) {
            console.log(error);
          });
  
        }
      }
    }
  
  </script>
