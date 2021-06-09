<template>
 <div>
     aissa bob dani 
 </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'MenuIndex',
  data () {
    return {
      fields: ['name', 'menu_elements', 'edit', 'delete'],
      items: [],
    }
  },
  methods: {
    menuElements(id){
      this.$router.push({path: `menuelement/${id.toString()}/menuelement`});
    },
    addMenu(){
      this.$router.push({path: 'create'});
    },
    editMenu(id){
      this.$router.push({path: `menu/${id.toString()}/edit`});
    },
    deleteMenu(id){
      this.$router.push({path: `menu/${id.toString()}/delete`});
    },
    getMenus () {
      let self = this;
      axios.get(  this.$apiAdress + '/api/menu/menu?token=' + localStorage.getItem("api_token") )
      .then(function (response) {
        self.items = response.data.menulist;
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    }
  },
  mounted(){
    this.getMenus();
  }
}
</script>
