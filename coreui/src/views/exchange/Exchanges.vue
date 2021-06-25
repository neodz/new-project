<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
      <CCard>
        <CCardHeader>
            {{$t('exchanges.title')}}
        </CCardHeader>
             
        <CCardBody>
          <CButton color="primary" @click="$router.push({ path: '/dashboard' })" class="mb-3">
            {{$t('exchanges.add_exchange')}}</CButton>
          
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
          <template #etat_exchange="{item}">
            <td>
              <CBadge :color="getBadge(item.etat_exchange)">{{ item.etat_exchange }}</CBadge>
            </td>
          </template>
          <template #article_id="{item}">
            <td>
              <p @click="showArticle( item.article.id )">{{ item.article.designation }}</p>
            </td>
          </template>
          <template  #edit="{item}">
            <td >
              <CButton v-if="item.etat!=='accepted'" color="primary" @click="editExchange( item.id )">
            {{$t('exchanges.edit')}}</CButton>
            </td>
          </template>
          <template #delete="{item}">
            <td>
              <CButton color="danger" @click="deleteExchange( item.id )">
            {{$t('exchanges.delete')}}</CButton>
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
  name: 'Exchanges',
  data: () => {
    return {
      items: [],
      fields: ['id', 'element_echange', 'etat_exchange', 'adresse', 'article_id','edit', 'delete'],
      currentPage: 1,
      etat_exchange_class : {
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
      return this.etat_exchange_class[status];

      // return status === 'accepted' ? 'success'
      //       : status === 'Inactive' ? 'secondary'
      //       : status === 'pending' ? 'warning'
      //       : status === 'rejected' ? 'danger' : 'primary'
    },
    ExchangeLink (id) {
      return `exchanges/${id.toString()}`
    },
    addUser (id) {
      this.$router.push({path: '/exchanges/create'});
    },
    editLink (id) {
      return `exchanges/${id.toString()}/edit`
    },
    showExchange ( id ) {
      const ExchangeLink = this.ExchangeLink( id );
      this.$router.push({path: ExchangeLink});
    },
    editExchange ( id ) {
      const editLink = this.editLink( id );
      this.$router.push({path: editLink});
    },
    deleteExchange ( id ) {
      let self = this;
      let ExchangeId = id;
      axios.post(  this.$apiAdress + '/api/exchanges/' + id.toString() + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      })
      .then(function (response) {
          self.message = 'Successfully deleted Exchange.';
          self.showAlert();
          self.getExchanges();
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
    getExchanges (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/exchanges?token=' + localStorage.getItem("api_token"))
      .then(function (response) {
        self.items = response.data.exchanges;
        self.you = response.data.you;
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    }
  },
  mounted: function(){
    this.getExchanges();
  }
}
</script>
