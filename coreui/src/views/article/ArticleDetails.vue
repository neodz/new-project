<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader v-if="original_items">
          <p>{{$t('article_details.card.article_id')}} : {{ $route.params.id }}</p>

          <div
            v-if="auth && !auth.is_admin && auth.utilisateur.id === original_items.utilisateur_id"
             >
            <CButton
              color="primary"
              @click="setTransaction()"
              v-if="original_items.type_transaction === 'exchange'"
              >{{$t('article_details.card.all_exchange_transactions')}}</CButton
            >
            <CButton
              color="primary"
              @click="setTransaction()"
              v-if="original_items.type_transaction === 'location'"
              >{{$t('article_details.card.all_rental_transactions')}}</CButton
            >
            <CButton
              color="primary"
              @click="setTransaction()"
              v-if="original_items.type_transaction === 'achter'"
              >{{$t('article_details.card.all_purchase_transactions')}}</CButton
            >
          </div>
          <h3 class="mt-2" v-if="original_items">
            <CBadge
              :color="
                original_items.dynamique_quantite > 0 ? 'success' : 'danger'
              "
              >{{
                original_items.dynamique_quantite > 0
                  ? $t('article_details.card.available')+" : " + original_items.dynamique_quantite +' articles'
                  : $t('article_details.card.unavailable')
              }}</CBadge
            >
          </h3>
        </CCardHeader>
        <CCardBody v-if="auth">
          <CDataTable striped small fixed :items="items" :fields="fields">
            <template slot="value" slot-scope="data">
              <strong>{{ data.item.value }}</strong>
            </template>
          </CDataTable>
        </CCardBody>
        <CCardFooter>
          <CButton color="primary" @click="goBack">{{$t('article_details.card.back')}}</CButton>
        </CCardFooter>
      </CCard>
    </CCol>

    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center" />
          <strong>{{$t('article_details.poster.title')}}</strong>

          <CButton
            v-if="
              auth &&  !auth.is_admin &&
              auth.utilisateur.id !== original_items.utilisateur_id 
              && original_items.type_transaction === 'location' 
              && original_items.dynamique_quantite 
            "
            color="primary"
            @click="setAction('location')"
            class="mb-3 float-right"
            >{{$t('article_details.poster.rent_article')}}</CButton
          >
          <!-- <CButton v-if="auth &&  original_items.viewer_transaction_etat === 'pending' && auth.utilisateur.id!==original_items.utilisateur_id && original_items.type_transaction==='location'" color="primary" @click="setEditAction('location')"  class="mb-3 float-right">Edit location</CButton> -->
          <!-- <CButton v-if="article && article.viewer_transaction && auth && auth.utilisateur.id!==original_items.utilisateur_id && original_items.type_transaction==='location'" color="primary"  class="mb-3 float-right">Louer Article</CButton> -->
          <CButton
            v-if="
              auth && !auth.is_admin &&
              auth.utilisateur.id !== original_items.utilisateur_id &&
              original_items.type_transaction === 'exchange'
              && original_items.dynamique_quantite 
            "
            color="primary"
            @click="setAction('exchange')"
            class="mb-3 float-right"
            >{{$t('article_details.poster.exchange_article')}}</CButton
          >
          <!-- <CButton v-if="auth &&  original_items.viewer_transaction_etat === 'pending'  && auth.utilisateur.id!==original_items.utilisateur_id &&original_items.type_transaction==='exchange'" color="primary" @click="setEditAction('exchange')" class="mb-3 float-right">Edit Exchange</CButton> -->

          <CButton
            v-if="
              auth && !auth.is_admin &&
              auth.utilisateur.id !== original_items.utilisateur_id &&
              original_items.type_transaction === 'achter'
              && original_items.dynamique_quantite 
            "
            color="primary"
            @click="setAction('achat')"
            class="mb-3 float-right"
            >{{$t('article_details.poster.buy_article')}}</CButton
          >
        </CCardHeader>
        <CCardBody>
          <CCarousel indicators animate height="500px">
            <CCarouselItem :image="original_items.photo" />
          </CCarousel>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import axios from "axios";

import { mapGetters } from "vuex";
export default {
  name: "User",
  data: () => {
    return {
      items: [],
      original_items: [],
      except: [
        "achter_income",
        "transaction_achats",
        "achter_income",
        "photo_url",
        "photo",
        "viewer_transaction",
        "viewer_transaction_etat",
        "location_active",
        "dynamique_quantite",
        "updated_at",
        "utilisateur_id",
      ],
      fields: [{ key: "key" }, { key: "value" }],
    };
  },
  computed: {
    ...mapGetters({
      auth: "getAuth",
    }),
    // photo() {
    //   return this.original_items.find(item => (item==="photo"));
    // }
  },
  methods: {
    setAction(action) {
      if (action === "exchange")
        this.$router.push({
          path: `/exchanges/create/${this.$route.params.id.toString()}`,
        });
      if (action === "location")
        this.$router.push({
          path: `/locations/create/${this.$route.params.id.toString()}`,
        });
      if (action === "achat")
        this.$router.push({
          path: `/achats/create/${this.$route.params.id.toString()}`,
        });
    },
    setTransaction() {
      //  if(action==="exchange")
      this.$router.push({
        path: `/articletransactions/${this.$route.params.id.toString()}`,
      });
      //  if(action==="location")this.$router.push({path: `/locations/create/${this.$route.params.id.toString()}`});
      //  if(action==="achat")this.$router.push({path: `/achats/create/${this.$route.params.id.toString()}`});
    },
    setEditAction(action) {
      if (action === "exchange")
        this.$router.push({
          path: `/exchanges/${this.original_items.viewer_transaction.toString()}/edit`,
        });
      if (action === "location")
        this.$router.push({
          path: `/locations/${this.original_items.viewer_transaction.toString()}/edit`,
        });
      //  if(action==="achat")this.$router.push({path: `/locations/${this.original_items.viewer_transaction.toString()}/edit`});
    },
    getUserData(id) {
      const user = usersData.find((user, index) => index + 1 == id);
      const userDetails = user ? Object.entries(user) : [["id", "Not found"]];
      return userDetails.map(([key, value]) => {
        return { key, value };
      });
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  mounted: function () {
    let self = this;
    axios
      .get(
        this.$apiAdress +
          "/api/articles/" +
          self.$route.params.id +
          "?token=" +
          localStorage.getItem("api_token")
      )
      .then(function (response) {
        self.original_items = response.data;
        const items = Object.entries(response.data);
        self.items = items
          .map(([key, value]) => {
            return { key: key, value: value };
          })
          .filter((item) => !self.except.includes(item.key));

          
        // self.items = self.items;
      })
      .catch(function (error) {
        console.log(error);
        self.$router.push({ path: "/login" });
      });
  },
};
</script>
