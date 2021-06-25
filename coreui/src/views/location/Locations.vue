<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
      <CCard>
        <CCardHeader>
            {{$t('locations.title')}}
        </CCardHeader>
             
        <CCardBody>
          <CButton color="primary" @click="$router.push({ path: '/dashboard' })" class="mb-3">{{$t('locations.add_location')}}</CButton>
          
          <CAlert
            :show.sync="dismissCountDown"
            color="primary"
            fade
          >
            ({{dismissCountDown}}) {{ message }}
          </CAlert>
          <CDataTable
            hover
            striped
            :items="items"
            :fields="fields"
            :items-per-page="5"
            pagination
          >
          <template #etat_location="{item}">
            <td>
              <CBadge :color="getBadge(item.etat_location)">{{ item.etat_location }}</CBadge>
            </td>
          </template>
          <template #article_id="{item}">
            <td>
              <p @click="showArticle( item.article.id )">{{ item.article.designation }}</p>
            </td>
          </template>
          <template #edit="{item}">
            <td>
              <CButton v-if="item.etat!=='accepted'" color="primary" @click="editLocation( item.id )">{{$t('locations.edit')}}</CButton>
            </td>
          </template>
          <template #delete="{item}">
            <td>
              <CButton color="danger" @click="deleteLocation( item.id )">{{$t('locations.delete')}}</CButton>
            </td>
          </template>
        </CDataTable>
        </CCardBody>
      </CCard>
      </transition>
    </CCol>
  </CRow>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Locations',
  data: () => {
    return {
      items: [],
      fields: ['id', 'quantite', 'date_entrer', 'date_sortie', 'etat_location', 'article_id','edit', 'delete'],
      currentPage: 1,
      etat_location_class : {
          accepted : 'success',
          rejected : 'danger',
          pending : 'warning'
      },
      perPage: 5,
      totalRows: 0,
      you: null,
      message: '',
      showMessage: false,
      dismissSecs: 7,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  paginationProps: {
    align: 'center',
    doubleArrows: false,
    previousButtonHtml: 'prev',
    nextButtonHtml: 'next'
  },
  methods: {
     ArticleLink (id) {
      return `Articles/${id.toString()}`
    },
     showArticle ( id ) {
      const ArticleLink = this.ArticleLink( id );
      this.$router.push({path: ArticleLink});
    },
    getBadge (status) {
      return this.etat_location_class[status];

      // return status === 'accepted' ? 'success'
      //       : status === 'Inactive' ? 'secondary'
      //       : status === 'pending' ? 'warning'
      //       : status === 'rejected' ? 'danger' : 'primary'
    },
    LocationLink (id) {
      return `locations/${id.toString()}`
    },
    addUser (id) {
      this.$router.push({path: '/locations/create'});
    },
    editLink (id) {
      return `locations/${id.toString()}/edit`
    },
    showLocation ( id ) {
      const LocationLink = this.LocationLink( id );
      this.$router.push({path: LocationLink});
    },
    editLocation ( id ) {
      const editLink = this.editLink( id );
      this.$router.push({path: editLink});
    },
    deleteLocation ( id ) {
      let self = this;
      let LocationId = id;
      axios.post(  this.$apiAdress + '/api/locations/' + id.toString() + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      })
      .then(function (response) {
            self.message = self.$t('alert.location.deleted');
          self.showAlert();
          self.getLocations();
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    getLocations (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/locations?token=' + localStorage.getItem("api_token"))
      .then(function (response) {
        self.items = response.data.locations;
        self.you = response.data.you;
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    }
  },
  mounted: function(){
    this.getLocations();
  }
}
</script>
