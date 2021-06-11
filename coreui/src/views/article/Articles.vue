<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
      <CCard>
        <CCardHeader>
            Mes Articles
        </CCardHeader>
             
        <CCardBody>
          <CButton color="primary" @click="addUser()" class="mb-3">Add Article</CButton>
          
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
          <template #status="{item}">
            <td>
              <CBadge :color="getBadge(item.status)">{{ item.status }}</CBadge>
            </td>
          </template>
          <template #show="{item}">
            <td>
              <CButton color="primary" @click="showArticle( item.id )">Show</CButton>
            </td>
          </template>
          <template #edit="{item}">
            <td>
              <CButton color="primary" @click="editArticle( item.id )">Edit</CButton>
            </td>
          </template>
          <template #delete="{item}">
            <td>
              <CButton color="danger" @click="deleteArticle( item.id )">Delete</CButton>
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
  name: 'Articles',
  data: () => {
    return {
      items: [],
      fields: ['id', 'designation', 'etat_article', 'prix', 'category', 'methode_paiement', 'quantite','show', 'edit', 'delete'],
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
    getBadge (status) {
      return status === 'Active' ? 'success'
        : status === 'Inactive' ? 'secondary'
          : status === 'Pending' ? 'warning'
            : status === 'Banned' ? 'danger' : 'primary'
    },
    ArticleLink (id) {
      return `Articles/${id.toString()}`
    },
    addUser (id) {
      this.$router.push({path: '/articles/create'});
    },
    editLink (id) {
      return `articles/${id.toString()}/edit`
    },
    showArticle ( id ) {
      const ArticleLink = this.ArticleLink( id );
      this.$router.push({path: ArticleLink});
    },
    editArticle ( id ) {
      const editLink = this.editLink( id );
      this.$router.push({path: editLink});
    },
    deleteArticle ( id ) {
      let self = this;
      let ArticleId = id;
      axios.post(  this.$apiAdress + '/api/articles/' + id.toString() + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      })
      .then(function (response) {
          self.message = 'Successfully deleted Article.';
          self.showAlert();
          self.getArticles();
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
    getArticles (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/articles?token=' + localStorage.getItem("api_token"))
      .then(function (response) {
        self.items = response.data.articles;
        self.you = response.data.you;
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    }
  },
  mounted: function(){
    this.getArticles();
  }
}
</script>
