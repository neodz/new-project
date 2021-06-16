<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader>
          User id:  {{ $route.params.id }}
        </CCardHeader>
        <CCardBody>
          <CDataTable 
            striped 
            small 
            fixed
            :items="items" 
            :fields="fields"
          >
            <template slot="value" slot-scope="data">
              <strong>{{data.item.value}}</strong>
            </template>
          </CDataTable>  
        </CCardBody>
        <CCardFooter>
          <CButton color="primary" @click="goBack">Back</CButton>
        </CCardFooter>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import axios from 'axios'
export default {
  name: 'User',
  data: () => {
    return {
      items: [],
      except: [
        'created_at',
        "roles",
        "evaluations",
        "admin",
        "utilisateur",
        "is_admin",
        "viewer_rate",
        "rate",
        "deleted_at",
        "updated_at",
        "menuroles",
        "email_verified_at",
        "api_token",
      ],
      exceptUtilisateur: [
        'id',
        'user_id',
        'created_at',
        'updated_at',
        'name'
      ],
      fields: [
        {key: 'key'},
        {key: 'value'},
      ],
    }
  },
  methods: {
    getUserData (id) {
      const user = usersData.find((user, index) => index + 1 == id)
      const userDetails = user ? Object.entries(user) : [['id', 'Not found']]
      return userDetails.map(([key, value]) => { return { key, value } })
    },
    goBack() {
      this.$router.go(-1)
    }
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/users/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      const items = Object.entries(response.data);
      self.items = items.map(([key, value]) => {return {key: key, value: value}}).filter((item) => !self.except.includes(item.key));
      
      const itemsUtilisateur = Object.entries(response.data.utilisateur);

      itemsUtilisateur.map((prp) => {
        if(self.exceptUtilisateur.includes(prp[0]))
        return ;
        self.items.push({key: prp[0], value: prp[1]})})
    }).catch(function (error) {
      console.log(error);
      self.$router.push({ path: '/login' });
    });
  }
}
</script>
