import Vue from 'vue';
import { required, email, numeric } from 'vee-validate/dist/rules';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';

extend("required", {
  ...required,
  message: "Este campo es requerido."
});

extend('email', {
	...email,
	message: 'Ingrese un email.'
});

extend('numeric', {
	...numeric,
	message: 'Solo se admiten números.'
});

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);