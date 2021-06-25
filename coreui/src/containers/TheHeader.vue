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
    
    <a href="#" @click="setLanguage()" class="mt-2 mr-5">{{lang_text}}</a>
    
    <TheHeaderDropdownAccnt v-if="connected"/>
    </CHeaderNav>
    <CSubheader class="px-3">
      <CBreadcrumbRouter class="border-0 mb-0"/>
    </CSubheader>
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
      lang : 'fr',
      languages : {
          fr : 'Francais',
          en : 'English'
      },
      switcher : {
        fr : 'en',
        en : 'fr'
      }
    }
  },
  computed: {
      lang_text (){
        
        return this.languages[this.switcher[this.lang]];

      }
  },
  methods: {
        setLanguage(){
            localStorage.setItem("lang",this.switcher[this.lang]);
            window.location.reload(true) ;
        },
        isLogin(){
              let self = this; 
            axios.post(this.$apiAdress + '/api/isLogin?token=' + localStorage.getItem("api_token"),{})
            .then(function (response) {
                self.connected = true;
                self.$store.dispatch('_setAuth',response.data.user);

            }).catch(function (error) {
                self.connected = false;
                
                self.$store.dispatch('_setAuth',null);
            });
        }
  },
  mounted() {
    this.lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'fr' ;

    //  var der;
// if (localStorage.getItem('dore-direction')==='rtl') {
//                 der='ar';
// }
// if (localStorage.getItem('dore-direction')==='ltr') {
//         der='en';
// }
// if (localStorage.getItem('dore-direction')==='ltrfr') {
//         der='fr';
// }

    this.isLogin();
  },
}
</script>