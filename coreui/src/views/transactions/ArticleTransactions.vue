<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
      <CCard v-if="article">
        <CCardHeader>
            Article <strong>{{article.designation}}</strong> exchanges
        </CCardHeader>
             
        <CCardBody>   
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
            :fields="fields[article.type_transaction]"
            :items-per-page="5"
            pagination
          >
          <template #utilisateur_id="{item}">
            <td>
              <strong @click="$router.push({path: `/profile/${item.utilisateur.user_id}`})">{{ item.utilisateur.name }}</strong>
            </td>
          </template>
          <template #show="{item}">
            <td>
              <CButton color="primary" @click="showTransaction( item.id )">Show</CButton>
            </td>
          </template>
          <template #delete="{item}">
            <td>
              <CButton color="danger" @click="deleteTransaction( item.id )">Delete</CButton>
            </td>
          </template>
        </CDataTable>
        </CCardBody>

        <CFooter v-if="article.type_transaction==='achter'">
           <h5>Total revenue <strong>{{article.achter_income}} DA</strong> </h5>
        </CFooter>
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
      items: null,
      article : null,
      // fields: ['id', 'element_echange', 'adresse', 'description','show','delete'],
      currentPage: 1,
      fields : {
          exchange : ['id', 'element_echange', 'adresse', 'description','show','delete'],
          location : ['id', 'date_entrer', 'date_sortie','show','delete'],
          achter : ['id', 'quantite', 'couleur', 'methode_paiement','utilisateur_id','total','delete'],

      },
      etat_article_class : {
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
  computed: {
  },
  methods: {
    TransactionLink (id) {
      return `/articletransactions/${id.toString()}/transaction/${this.article.id.toString()}`
    },
    addUser (id) {
      this.$router.push({path: '/articles/create'});
    },
    editLink (id) {
      return `articles/${id.toString()}/edit`
    },
    
    // editArticle ( id ) {
    //   const editLink = this.editLink( id );
    //   this.$router.push({path: editLink});
    // },
    showTransaction ( id ) {
      const TransactionLink = this.TransactionLink( id );
      this.$router.push({path: TransactionLink});
    },
    deleteTransaction ( id ) {
      let self = this;
      let TransactionId = id;
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
    getTransations (){
      const self = this;
      axios.post(  this.$apiAdress + '/api/articletransactions?token=' + localStorage.getItem("api_token"),{
          id : self.$route.params.id.toString()
      })
      .then(function (response) {
        self.items = response.data.transactions;
        self.article = response.data.article;
        // self.items.push({
        //   total : self.article.achter_income 
        // })
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' }); 
      });
    }
  },
  mounted: function(){
    this.getTransations();
  }
}
</script>
