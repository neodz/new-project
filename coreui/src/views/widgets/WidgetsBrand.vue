<template>
  <CRow>
    <CCol col="12" md="12">
        <CCard>
          <CCardHeader>
            <CIcon name="cil-justify-center"/>
            <strong>Advanced Search</strong>
          </CCardHeader>
          <CCardBody class="">
            <div class="row ">
            <div class="col-6 mt-2">
                  <div class="input-group rounded">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                  aria-describedby="search-addon"
                  v-model="searchKey"
                   />
  
                    </div>
            </div>
            <div  class="float-right row col-6">
              <CDropdown 
                :toggler-text="selectedItemCategoryLabelCategory" 
                class="m-2"
                color="secondary"
               >
                <CDropdownHeader>Search by Category</CDropdownHeader>
                <CDropdownItem v-for="category in categories" :key="category" @click="selectedItemCategory = category!=='none' ? category : null">{{category}}</CDropdownItem>
                <!-- <CDropdownItem v-model="selectedItemCategory">Second Item</CDropdownItem>
                <CDropdownItem v-model="selectedItemCategory">Third Item</CDropdownItem> -->
              </CDropdown>
              <CDropdown 
                :toggler-text="selectedItemCategoryLabelType" 
                class="m-2"
                color="secondary"
               >
                <CDropdownHeader>Search by Type de transaction</CDropdownHeader>
                <CDropdownItem v-for="type_transaction in type_transactions" :key="type_transaction" @click="selectedItemType = type_transaction!=='none' ? type_transaction : null">{{type_transaction}}</CDropdownItem>
                <!-- <CDropdownItem v-model="selectedItemCategory">Second Item</CDropdownItem>
                <CDropdownItem v-model="selectedItemCategory">Third Item</CDropdownItem> -->
              </CDropdown>
            </div>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    <template >

      <CCol v-for="item in items" :key="item.id" md="3" sm="6">
      <CCard> 
        <CCardHeader>
          <CIcon name="cil-justify-center"/>
          <strong>Article : {{item.designation}}</strong>
          <div class="card-header-actions">
           
              <small @click="showArticle(item.id)" class="text-muted">view article</small>
            
          </div>
        </CCardHeader>
        <CCardBody>
          <p @click="viewProfile(item.utilisateur.user.id)">
          Article Owner : <strong>{{item.utilisateur.user.name}}</strong></p>
          <p>
          Article Transaction : <strong>{{item.type_transaction}}</strong></p>

          <CCarousel
            indicators
            animate
            height="250px"
              >
            <CCarouselItem
            
            :image="item.photo_url"
            />
          </CCarousel>

        </CCardBody>
      </CCard>
        </CCol>
      <!-- <CCol md="3" sm="6">
        <CWidgetBrand
          color="facebook"
          right-header="89k"
          right-footer="friends"
          left-header="459"
          left-footer="feeds"
        >
          <CIcon
            name="cib-facebook"
            height="52"
            class="my-4"
          />
          <CChartLineSimple
            class="c-chart-brand"
            background-color="rgba(255,255,255,.1)"
            :data-points="[65, 59, 84, 84, 51, 55, 40]"
            label="Friends"
            labels="months"
          />
        </CWidgetBrand>
       </CCol>
       <CCol md="3" sm="6">
        <CWidgetBrand
          color="twitter"
          right-header="973k"
          right-footer="followers"
          left-header="1.792"
          left-footer="tweets"
        >
          <CIcon
            name="cib-twitter"
            height="52"
            class="my-4"
          />
          <CChartLineSimple
            class="c-chart-brand"
            background-color="rgba(255,255,255,.1)"
            :data-points="[1, 13, 9, 17, 34, 41, 38]"
            label="Followers"
            labels="months"
          />
        </CWidgetBrand>
       </CCol>
       <CCol md="3" sm="6">
        <CWidgetBrand
          color="linkedin"
          right-header="500+"
          right-footer="contracts"
          left-header="292"
          left-footer="feeds"
        >
          <CIcon
            name="cib-linkedin"
            height="52"
            class="my-4"
          />
          <CChartLineSimple
            class="c-chart-brand"
            background-color="rgba(255,255,255,.1)"
            :data-points="[78, 81, 80, 45, 34, 12, 40]"
            label="Contracts"
            labels="months"
          />
        </CWidgetBrand>
       </CCol>
       <CCol md="3" sm="6">
        <CWidgetBrand
          right-header="12"
          right-footer="events"
          left-header="4"
          left-footer="meetings"
          color="warning"
        >
          <CIcon
            name="cil-calendar"
            height="52"
            class="my-4"
          />
          <CChartLineSimple
            class="c-chart-brand"
            background-color="rgba(255,255,255,.1)"
            :data-points="[35, 23, 56, 22, 97, 23, 64]"
            label="Followers"
            labels="months"
          />
        </CWidgetBrand>
      </CCol> -->
    </template>
  </CRow>
</template>

<script>
import { CChartLineSimple } from '../charts/index.js'

import axios from 'axios'
export default {
  name: 'WidgetsBrand',
  components: {
    CChartLineSimple
  },
  props: {
    noCharts: Boolean
  }
  ,
  data() {
    return {
      items : '',
      selectedItemCategory : null,
      selectedItemType : null,
      searchKey : null,
      categories : ['cat1','cat2','cat3','cat4','none'],
      type_transactions : ['location','exchange','achter','none'],
    }
  },
  computed: {
    selectedItemCategoryLabelCategory(){
          return this.selectedItemCategory !== null ? this.selectedItemCategory : 'Select a Category';

    },
    selectedItemCategoryLabelType(){
          return this.selectedItemType !== null ? this.selectedItemType : 'Type de transaction';

    }
  },
  watch: {
        selectedItemType (){
          this.getSearchedArticles();
        },
        selectedItemCategory (){
          this.getSearchedArticles();
        },
        searchKey (){
          this.getSearchedArticles();
        }
  },
  methods: {
    ArticleLink (id) {
      return `Articles/${id.toString()}`
    },
    profileLink (id) {
      return `profile/${id.toString()}`
    },
    showArticle ( id ) {
      const ArticleLink = this.ArticleLink( id );
      this.$router.push({path: ArticleLink});
    },
    viewProfile ( id ) {
      const profileLink = this.profileLink( id );
      this.$router.push({path: profileLink});
    },
     getArticles (){
      let self = this;
      axios.post(  this.$apiAdress + '/api/acceptedarticles?token=' + localStorage.getItem("api_token"))
      .then(function (response) {
        self.items = response.data.articles;
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    },
     getSearchedArticles (){
      let self = this;
      
      axios.post(  this.$apiAdress + '/api/acceptedarticles?token=' + localStorage.getItem("api_token"),{
            search: {
              type_transaction : self.selectedItemType ? self.selectedItemType : null,
              category : self.selectedItemCategory ? self.selectedItemCategory : null,
              search_key : self.searchKey ? self.searchKey : null
            }
      })
      .then(function (response) {
        self.items = response.data.articles;
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    }
  },
  mounted() {
    this.getArticles();
  },
}
</script>

<style scoped>
.c-chart-brand {
  position: absolute;
  width: 100%;
  height: 100px;
}
</style>
