import Vue from 'vue';
import App from './App.vue';
import router from './router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

// Please after running the testing a seeing the error in the console
// uncomment the commented lines and comment the others and re-run
// the tests the error won't appear and test will pass, thanks :)

import { setValidationLocalization, setValidationRules } from './validation'; //Comment for 2nd trial of tests
// import { extend } from 'vee-validate';
// import * as rules from 'vee-validate/dist/rules';
// import { messages } from 'vee-validate/dist/locale/en.json';

// Object.keys(rules).forEach((rule) => {
// 	extend(rule, {
// 		...rules[rule],
// 		message: messages[rule],
// 	});
// });

Vue.config.productionTip = false;

async function launchApp() {
	const DEFAULT_LANG = 'en'; //Comment for 2nd trial of tests
	setValidationLocalization(DEFAULT_LANG); //Comment for 2nd trial of tests
	setValidationRules(); //Comment for 2nd trial of tests
	new Vue({
		router,
		render: (h) => h(App),
	}).$mount('#app');
}

launchApp();
