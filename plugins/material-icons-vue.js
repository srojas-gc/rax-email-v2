import Vue from 'vue';
import VueTailwindModal from "vue-tailwind-modal";
import {Wave} from 'vue-loading-spinner';
import VueSimpleAccordion from 'vue-simple-accordion';

import 'vue-simple-accordion/dist/vue-simple-accordion.css';

Vue.component("VueTailwindModal", VueTailwindModal)
Vue.component("Wave", Wave)

Vue.use(VueSimpleAccordion);