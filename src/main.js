import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MTable from 'vue-el-mtable';
import 'vue-el-mtable/lib/MTable.css';
import VueGoodTablePlugin from 'vue-good-table';
// import the styles
import 'vue-good-table/dist/vue-good-table.css'
import vueExcelTable from 'vue-excel-table'
 
// require styles
import 'vue-excel-table/dist/vue-excel-table.min.css';
Vue.use(vueExcelTable)
Vue.use(VueGoodTablePlugin);

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(MTable)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
