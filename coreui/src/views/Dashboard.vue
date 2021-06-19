<template>
  <div>
    <!--  for admin -->
     <Widgets v-if="(auth && auth.is_admin)"></Widgets>

    <WidgetsBrand v-else-if="(auth && !auth.is_admin) || (auth===null)"/>
   
  </div>
</template>

<script>
import MainChartExample from './charts/MainChartExample'
import WidgetsDropdown from './widgets/WidgetsDropdown'
import WidgetsBrand from './widgets/WidgetsBrand'
import Widgets from './widgets/Widgets'
import {mapGetters} from 'vuex';

export default {
  name: 'Dashboard',
  components: {
    MainChartExample,
    WidgetsDropdown,
    WidgetsBrand,
    Widgets
  },
  
  computed: {
    ...mapGetters({
        auth : 'getAuth'
    }),
  },  
  data () {
    return {
      
    }
  },
  methods: {
    color (value) {
      let $color
      if (value <= 25) {
        $color = 'info'
      } else if (value > 25 && value <= 50) {
        $color = 'success'
      } else if (value > 50 && value <= 75) {
        $color = 'warning'
      } else if (value > 75 && value <= 100) {
        $color = 'danger' 
      }
      return $color
    }
  }
}
</script>
