<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
      <CCard>
        <CCardHeader>
            {{$t('achats.title')}}
        </CCardHeader>
             
        <CCardBody>
          <CButton color="primary" @click="$router.push({ path: '/dashboard' })" class="mb-3">{{$t('achats.buy_article')}}</CButton> 
          
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
          <template #article_id="{item}">
            <td>
              <p @click="showArticle( item.article.id )">{{ item.article.designation }}</p>
            </td>
          </template>
          <template #delete="{item}">
            <td>
              <CButton color="danger" @click="deleteAchat( item.id )">{{$t('achats.delete')}}</CButton>
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
  name: 'Achats',
  data: () => {
    return {
      items: [],
      fields: ['id', 'quantite', 'couleur', 'article_id','total', 'delete'],
      currentPage: 1,
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
      return `/Articles/${id.toString()}`
    },
     showArticle ( id ) {
      const ArticleLink = this.ArticleLink( id );
      this.$router.push({path: ArticleLink});
    },
    AchatLink (id) {
      return `achats/${id.toString()}`
    },
    addUser (id) {
      this.$router.push({path: '/achats/create'});
    },
    editLink (id) {
      return `achats/${id.toString()}/edit`
    },
    showAchat ( id ) {
      const AchatLink = this.AchatLink( id );
      this.$router.push({path: AchatLink});
    },
    editAchat ( id ) {
      const editLink = this.editLink( id );
      this.$router.push({path: editLink});
    },
    deleteAchat ( id ) {
      let self = this;
      let AchatId = id;
      axios.post(  this.$apiAdress + '/api/achats/' + id.toString() + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      })
      .then(function (response) {
          self.message = 'Successfully deleted Achat.';
          self.showAlert();
          self.getAchats();
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
    getAchats (){
      let self = this; 
      axios.get(  this.$apiAdress + '/api/achats?token=' + localStorage.getItem("api_token"))
      .then(function (response) {
        self.items = response.data.achats;
        self.you = response.data.you;
      }).catch(function (error) {
        console.log(error); 
        self.$router.push({ path: '/login' }); 
      });
    } 
  },
  mounted: function(){ 
    this.getAchats();
  }
}
</script>
