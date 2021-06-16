<template>
  <div>
     <CCardGroup class="mb-4">
      <CWidgetProgressIcon
        :header="totalUsers.toString()"
        text="All Users"
        color="info"
        inverse
      >
        <CIcon name="cil-people" height="36"/>
      </CWidgetProgressIcon>

      <CWidgetProgressIcon
        :header="usersPendingCount.toString()"
        text="New Users"
        color="success"
        inverse
      >
        <CIcon name="cil-userFollow" height="36"/>
      </CWidgetProgressIcon>
      <CWidgetProgressIcon
        :header="usersBannedCount.toString()"
        text="Users Banned"
        color="danger"
        inverse
      >
        <CIcon name="cil-basket" height="36"/>
      </CWidgetProgressIcon>
      <CWidgetProgressIcon
        :header="totalArticles.toString()"
        text="Articles"
        color="primary"
        inverse
      >
        <CIcon name="cil-chartPie" height="36"/>
      </CWidgetProgressIcon>
      <CWidgetProgressIcon
        :header="totalTransactions.toString()"
        text="All Transactions"
        color="warning"
        inverse
      >
        <CIcon name="cil-speedometer" height="36"/>
      </CWidgetProgressIcon>
    </CCardGroup>
    <CRow>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          :header="locationArticlesCount.toString()"
          text="Location Transactions"
          color="info"
        >
          <CIcon name="" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          :header="exchangeArticlesCount.toString()"
          text="Exchange Transactions"
          color="success"
        >
          <CIcon name="" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          :header="achterArticlesCount.toString()"
          text="Achat Transactions"
          color="warning"
        >
          <CIcon name="" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          :header="locationsCount.toString()"
          text="Location Articles"
          color="primary"
        >
          <CIcon name="cil-chartPie" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          :header="exchangesCount.toString()"
          text="Exchange Articles"
          color="danger"
        >
          <CIcon name="cil-speedometer" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          :header="achatsCount.toString()"
          text="Achat Articles"
          color="info"
        >
          <CIcon name="cil-speech" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
    </CRow>
    <CCol lg="12">
        <CTableWrapper
          :items="getShuffledUsersData()"
          striped
          caption="Users Active"
        />
      </CCol>
  </div>
</template>

<script>
import WidgetsBrand from './WidgetsBrand'
import WidgetsDropdown from './WidgetsDropdown'
import { CChartLineSimple, CChartBarSimple } from '../charts/index.js'

import CTableWrapper from './Table.vue';

import axios from 'axios'

// import usersData from '../users/UsersData';

export default {
  name: 'Widgets',
  components: {
    CChartLineSimple,
    CChartBarSimple,
    CTableWrapper,
    WidgetsBrand,
    WidgetsDropdown
  }
  ,
  data() {
    return {
      usersPending : null,
      usersBanned : null,
      usersActive : null,
      locationArticles : null,
      exchangeArticles : null,
      achterArticles : null,
      achats : null,
      exchanges : null,
      locations : null,
      load : false,
    }
  },
  mounted() {
    this.getIndex();
  },
  computed: {
       totalUsers (){
        //  if(!this.load)
         return this.usersPendingCount + this.usersBannedCount + this.usersActiveCount;
        //  return 0; 
       },
       usersPendingCount(){
         if(this.usersPending)
         return this.usersPending.length ;
         return 0;
       },
       usersBannedCount(){
         if(this.usersBanned)
         return this.usersBanned.length ;
         return 0;
       },
       usersActiveCount(){
         if(this.usersActive)
         return this.usersActive.length ;
         return 0;
       },
       
       totalArticles(){
         return this.achterArticlesCount + this.locationArticlesCount + this.exchangeArticlesCount ;
       },
        
       achterArticlesCount(){
         if(this.achterArticles)
         return this.achterArticles.length ;
         return 0;
       },
       exchangeArticlesCount(){
         if(this.exchangeArticles)
         return this.exchangeArticles.length ;
         return 0;
       },
       locationArticlesCount(){
         if(this.locationArticles)
         return this.locationArticles.length ;
         return 0;
       },


       totalTransactions(){
         return this.achatsCount + this.locationsCount + this.exchangesCount ;
       },
        
       achatsCount(){
         if(this.achats)
         return this.achats.length ;
         return 0;
       },
       exchangesCount(){
         if(this.exchanges)
         return this.exchanges.length ;
         return 0;
       },
       locationsCount(){
         if(this.locations)
         return this.locations.length ;
         return 0;
       },



  },
  methods: {
    getIndex(){
        let self = this;
        self.load = !self.load;
      axios.get(  this.$apiAdress + '/api/adminindex?token=' + localStorage.getItem("api_token"))
      .then(function (response) {
        self.usersPending = response.data.usersPending;
        self.usersBanned = response.data.usersBanned;
        self.usersActive = response.data.usersActive;
        self.locationArticles = response.data.locationArticles;
        self.exchangeArticles = response.data.exchangeArticles;
        self.achterArticles = response.data.achterArticles;
        self.achats = response.data.achats;
        self.exchanges = response.data.exchanges;
        self.locations = response.data.locations;
        self.load = !self.load;
      }).catch(function (error) {
        console.log(error);
        self.load = !self.load;
        self.$router.push({ path: '/login' });
      });
    },
    shuffleArray (array) {
      // if(){
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
      // }
      // return [];
    },

    getShuffledUsersData () {
      // return [];
      return this.usersActive ? this.shuffleArray(this.usersActive.slice(0)) : [];
    }
  }
}
</script>
