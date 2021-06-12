<template>
  <CHeader fixed with-subheader light>
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      @click="$store.commit('toggleSidebarMobile')"
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      @click="$store.commit('toggleSidebarDesktop')"
    />
    <CHeaderBrand class="mx-auto d-lg-none" to="/">
      <CIcon name="logo" height="48" alt="Logo"/>
    </CHeaderBrand>

    <CMenu/>

    <CHeaderNav class="mr-4">
      <TheHeaderDropdownAccnt v-if="connected"/>
    </CHeaderNav>
   
  </CHeader>
</template>

<script>
import CMenu from './Menu'
import axios from 'axios'
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'

export default {
  name: 'TheHeader',
  components: {
    TheHeaderDropdownAccnt,
    CMenu
  }
  ,
 data: () => {
    return {
      connected: false,
    }
  },
  methods: {
        isLogin(){
              let self = this; 
            axios.post(this.$apiAdress + '/api/isLogin?token=' + localStorage.getItem("api_token"),{})
            .then(function (response) {
                self.connected = true;
            }).catch(function (error) {
                self.connected = false;
            });
        }
  },
  mounted() {
    this.isLogin();
  },
}
</script>