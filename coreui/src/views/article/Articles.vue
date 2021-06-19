<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
        <CCard>
          <CCardHeader>
            Mes Articles

            <!--start search form -->
            <div class="float--right">
              <div class="row">
                <div class="col-6 mt-2">
                  <div class="input-group rounded">
                    <input
                      type="search"
                      class="form-control rounded"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="search-addon"
                      v-model="searchKey"
                    />
                  </div>
                </div>
                <div class="float-right row col-6">
                  <CDropdown
                    :toggler-text="selectedItemCategoryLabelCategory"
                    class="m-2"
                    color="secondary"
                  >
                    <CDropdownHeader>Search by Category</CDropdownHeader>
                    <CDropdownItem
                      v-for="category in categories"
                      :key="category"
                      @click="
                        selectedItemCategory =
                          category !== 'none' ? category : null
                      "
                      >{{ category }}</CDropdownItem
                    >
                    <!-- <CDropdownItem v-model="selectedItemCategory">Second Item</CDropdownItem>
                <CDropdownItem v-model="selectedItemCategory">Third Item</CDropdownItem> -->
                  </CDropdown>
                  <CDropdown
                    :toggler-text="selectedItemCategoryLabelType"
                    class="m-2"
                    color="secondary"
                  >
                    <CDropdownHeader
                      >Search by Type de transaction</CDropdownHeader
                    >
                    <CDropdownItem
                      v-for="type_transaction in type_transactions"
                      :key="type_transaction"
                      @click="
                        selectedItemType =
                          type_transaction !== 'none' ? type_transaction : null
                      "
                      >{{ type_transaction }}</CDropdownItem
                    >
                    <!-- <CDropdownItem v-model="selectedItemCategory">Second Item</CDropdownItem>
                <CDropdownItem v-model="selectedItemCategory">Third Item</CDropdownItem> -->
                  </CDropdown>

                  <CDropdown
                    :toggler-text="selectedItemEtatLabel"
                    class="m-2"
                    color="secondary"
                  >
                    <CDropdownHeader
                      >Search by Etat de l'article</CDropdownHeader
                    >
                    <CDropdownItem
                      v-for="etat_article in etats"
                      :key="etat_article"
                      @click="
                        selectedItemEtat =
                          etat_article !== 'none' ? etat_article : null
                      "
                      >{{ etat_article }}</CDropdownItem
                    >
                    <!-- <CDropdownItem v-model="selectedItemCategory">Second Item</CDropdownItem>
                <CDropdownItem v-model="selectedItemCategory">Third Item</CDropdownItem> -->
                  </CDropdown>
                </div>
              </div>
            </div>
            <!-- end search form -->


          </CCardHeader>

          <CCardBody>
            <CButton v-if="auth && !auth.is_admin" color="primary" @click="addUser()" class="mb-3"
              >Add Article</CButton
            >

            <CAlert :show.sync="dismissCountDown" color="primary" fade>
              ({{ dismissCountDown }}) {{ message }}
            </CAlert>
            <CDataTable
              hover
              striped
              :items="items"
              :fields="fields"
              :items-per-page="5"
              pagination
            >
              <template #quantite="{ item }">
                <td>
                  <CBadge
                    :color="item.dynamique_quantite > 0 ? 'success' : 'danger'"
                    >{{
                      item.dynamique_quantite > 0
                        ? "Disponible : " + item.dynamique_quantite
                        : "Indisponible"
                    }}</CBadge
                  >
                </td>
              </template>
              <template #etat_article="{ item }">
                <td>
                  <CBadge :color="getBadge(item.etat_article)">{{
                    item.etat_article
                  }}</CBadge>
                </td>
              </template>
              <template #show="{ item }">
                <td>
                  <CButton color="primary" @click="showArticle(item.id)"
                    >Show</CButton
                  >
                </td>
              </template>
              <template #edit="{ item }">
                <td>
                  <CButton color="primary" @click="editArticle(item.id)"
                    >Edit</CButton
                  >
                </td>
              </template>
              <template #delete="{ item }">
                <td>
                  <CButton color="danger" @click="deleteArticle(item.id)"
                    >Delete</CButton
                  >
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
import axios from "axios";

import {mapGetters} from 'vuex';

export default {
  name: "Articles",
  data: () => {
    return {
      selectedItemCategory: null,
      selectedItemType: null,
      selectedItemEtat: null,
      searchKey: null,
      categories: ['Informatique','Téléphone','Voiture','Maisson','Vêtements','Bijoux','appareils électroménagers',"none"],
      type_transactions: ["location", "exchange", "achter", "none"],
      etats: ['pending','accepted','rejected',"none"],
      items: [],
      fields: [
        "id",
        "designation",
        "etat_article",
        "type_transaction",
        "prix",
        "category",
        "methode_paiement",
        "quantite",
        "show",
        "edit",
        "delete",
      ],
      currentPage: 1,
      etat_article_class: {
        accepted: "success",
        rejected: "danger",
        pending: "warning",
      },
      perPage: 5,
      totalRows: 0,
      you: null,
      message: "",
      showMessage: false,
      dismissSecs: 7,
      dismissCountDown: 0,
      showDismissibleAlert: false,
    };
  },
  paginationProps: {
    align: "center",
    doubleArrows: false,
    previousButtonHtml: "prev",
    nextButtonHtml: "next",
  },
  computed: {
    ...mapGetters({
        auth : 'getAuth'
    }),
    selectedItemCategoryLabelCategory() {
      return this.selectedItemCategory !== null
        ? this.selectedItemCategory
        : "Select a Category";
    },
    selectedItemCategoryLabelType() {
      return this.selectedItemType !== null
        ? this.selectedItemType
        : "Type de transaction";
    },
    selectedItemEtatLabel() {
      return this.selectedItemEtat !== null
        ? this.selectedItemEtat
        : "Select Etat de l'article";
    },
  },
  watch: {
    selectedItemType() {
      this.getSearchedArticles();
    },
    selectedItemCategory() {
      this.getSearchedArticles();
    },
    searchKey() {
      this.getSearchedArticles();
    },
    selectedItemEtat() {
      this.getSearchedArticles();
    },
  },
  methods: {
    getBadge(status) {
      return this.etat_article_class[status];

      // return status === 'accepted' ? 'success'
      //       : status === 'Inactive' ? 'secondary'
      //       : status === 'pending' ? 'warning'
      //       : status === 'rejected' ? 'danger' : 'primary'
    },
    ArticleLink(id) {
      return `Articles/${id.toString()}`;
    },
    addUser(id) {
      this.$router.push({ path: "/articles/create" });
    },
    editLink(id) {
      return `articles/${id.toString()}/edit`;
    },
    showArticle(id) {
      const ArticleLink = this.ArticleLink(id);
      this.$router.push({ path: ArticleLink });
    },
    editArticle(id) {
      const editLink = this.editLink(id);
      this.$router.push({ path: editLink });
    },
    deleteArticle(id) {
      let self = this;
      let ArticleId = id;
      axios
        .post(
          this.$apiAdress +
            "/api/articles/" +
            id.toString() +
            "?token=" +
            localStorage.getItem("api_token"),
          {
            _method: "DELETE",
          }
        )
        .then(function (response) {
          self.message = "Successfully deleted Article.";
          self.showAlert();
          self.getArticles();
        })
        .catch(function (error) {
          console.log(error);
          self.$router.push({ path: "/login" });
        });
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
    getArticles() {
      let self = this;
      axios
        .get(
          this.$apiAdress +
            "/api/articles?token=" +
            localStorage.getItem("api_token")
        )
        .then(function (response) {
          self.items = response.data.articles;
          self.you = response.data.you;
        })
        .catch(function (error) {
          console.log(error);
          self.$router.push({ path: "/login" });
        });
    },

    getSearchedArticles() {
      let self = this;

      axios
        .post(
          this.$apiAdress +
            "/api/searchedarticles?token=" +
            localStorage.getItem("api_token"),
          {
            search: {
              type_transaction: self.selectedItemType
                ? self.selectedItemType
                : null,
              category: self.selectedItemCategory
                ? self.selectedItemCategory
                : null,
              etat_article: self.selectedItemEtat
                ? self.selectedItemEtat
                : null,
              search_key: self.searchKey ? self.searchKey : null,
            },
          }
        )
        .then(function (response) {
          self.items = response.data.articles;
        })
        .catch(function (error) {
          console.log(error);
          self.$router.push({ path: "/login" });
        });
    },
  },
  mounted: function () {
    this.getArticles();
  },
};
</script>
