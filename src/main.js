import Vue from 'vue'
import App from './App.vue'
// import ChildComponent from './components/ChildComponent.vue'

Vue.config.productionTip = false

Vue.component('child-component', () => import('./components/ChildComponent.vue'))

new Vue({
	render: h => h(App),
}).$mount('#app')
