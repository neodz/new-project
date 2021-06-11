<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader>
          Article id :  {{ $route.params.id }}
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
    
    <CCol col="12" lg="6">
       <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center"/>
          <strong> Article Poster</strong>
         
        </CCardHeader>
        <CCardBody>
          <CCarousel
            arrows
            indicators
            animate
            height="400px"
             >
           
            <CCarouselItem
            :image="original_items.photo"
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
  name: 'User',
  data: () => {
    return {
      items: [],
      original_items: [],
      fields: [
        {key: 'key'},
        {key: 'value'},
      ],
    }
  },
  computed : {
    // photo() {
    //   return this.original_items.find(item => (item==="photo"));
    // }
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
    axios.get(  this.$apiAdress + '/api/articles/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      self.original_items = response.data;
      const items = Object.entries(response.data);
      self.items = items.map(([key, value]) => { return {key: key, value: value}}).filter( item => (item.key !== "photo"));
      // self.items = self.items;      
    }).catch(function (error) {
      console.log(error);
      self.$router.push({ path: '/login' });
    });
  }
}
</script>
