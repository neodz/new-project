<template>
    <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar">
          <img
            src="/images/default/user.png"
            class="c-avatar-img "
          />
        </div>
      </CHeaderNavLink>
    </template>
 
    <CDropdownHeader
      tag="div"
      class="text-center"
      color="light"
    >
      <strong>
      {{$t('nav_bar.settings')}}</strong>
    </CDropdownHeader>
    <CDropdownItem @click="profileUser()" >
      <CIcon name="cil-user" />
      {{$t('nav_bar.profile')}}
    </CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem @click="logout()">
      <CIcon name="cil-lock-locked" /> 
      {{$t('nav_bar.logout')}}
    </CDropdownItem>
  </CDropdown>
</template>

<script>
import axios from 'axios'

import { mapGetters } from "vuex";
export default {
  name: 'TheHeaderDropdownAccnt',
  data () {
    return { 
      itemsCount: 42,
    }
  },
  computed: {
    
    ...mapGetters({
        
    })
  },
  methods:{
    profileUser(){
        const profileLink = this.profileLink();
        this.$router.push({path: profileLink});
    },
     profileLink (id) {
      return `/profile`
      },
    logout(){
      let self = this;

      axios.post(this.$apiAdress + '/api/logout?token=' + localStorage.getItem("api_token"),{})
      .then(function (response) {
        localStorage.setItem('roles', '');
        self.$router.push({ path: '/login' });
      }).catch(function (error) {
        console.log(error); 
      });
    }
  }
}
</script>
<style scoped>
  .c-icon {
    margin-right: 0.3rem;
  }
</style>
