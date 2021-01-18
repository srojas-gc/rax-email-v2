<template>
<section class="border-b pt-16 bg-gray-100">
  <div class="container mx-auto">

    <h1 id="contact" class="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800 pb-4">¿Listo para comenzar?</h1>
    <div class="w-full mb-4">   
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
    </div>

    <h1 class="font-bold text-gray-700 text-2xl md:text-xl mt-10 text-center">
      Complete el formulario para ponerse en contacto con uno de nuestros expertos.
    </h1>

    <div class="w-full mx-auto text-center max-w-xl mt-10 mb-10w">
      <ValidationObserver v-slot="{ handleSubmit  }">
        <form id="myform" @submit.prevent="handleSubmit(onSubmit)" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Nombre/s
              </label>
              <ValidationProvider name="names" rules="required" v-slot="{ errors }">
                <input v-model="names" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Alan">
                <p class="text-red-500 text-xs italic">{{ errors[0] }}</p>
              </ValidationProvider>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Apellido/s
              </label>
              <ValidationProvider name="surnames" rules="required" v-slot="{ errors }">
                <input v-model="surnames" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Leon">
                <p class="text-red-500 text-xs italic">{{ errors[0] }}</p>
              </ValidationProvider>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Empresa
              </label>
              <ValidationProvider name="company" class="relative" rules="required" v-slot="{ errors }">
                <input v-model="company" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Cloudspace">
                <p class="text-red-500 text-xs italic absolute">{{ errors[0] }}</p>
              </ValidationProvider>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Correo electrónico
              </label>
              <ValidationProvider name="myemail" rules="required|email" v-slot="{ errors }">
                <input v-model="email" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="cloudspace@gmail.com">
                <p class="text-red-500 text-xs italic">{{ errors[0] }}</p>
              </ValidationProvider>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Teléfono
              </label>
              <ValidationProvider name="phone" class="relative" rules="required|numeric" v-slot="{ errors }">
                <input v-model="phone" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="011 223344">
                <p class="text-red-500 text-xs italic absolute">{{ errors[0] }}</p>
              </ValidationProvider>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                ¿Cómo podemos ayudarle? 
              </label>
              <ValidationProvider name="help" class="relative" rules="required" v-slot="{ errors }">
                <textarea v-model="help" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Quiero contratar el servicio.." />
                <p class="text-red-500 text-xs italic absolute">{{ errors[0] }}</p>
              </ValidationProvider>
            </div>
          </div>

          <template>
            <vue-recaptcha
              ref="recaptcha"
              @verify="onVerify"
              @expired="onExpired"
              :sitekey="sitekey">
            </vue-recaptcha>
          </template>
        </form>
      </ValidationObserver>
    </div>

    

    <div class="flex items-center h-24">
      <div class="flex-1 text-center px-4"></div>
      <div class="flex-1 text-center px-4 mb-4">
        <button type="submit" form="myform" class="inline-block mx-auto text-white bg-indigo-500 hover:bg-indigo-600 rounded-lg shadow text-xl mb-14 py-4 px-8 shadow-lg">Enviar</button>
      </div>
      <div class="flex-1 text-center px-4"></div>
    </div>

    <transition name="fade">
      <div v-if="boolAlert" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded absolute inset-x-0 shadow-xl bg-white w-3/4 md:w-2/5 mx-auto" role="alert">
        <strong class="font-bold">Campos incompletos!</strong>
        <span class="block sm:inline">Completa la validacion de seguridad.</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg @click="alert = false" class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
        </span>
      </div>
    </transition>

  </div>
</section>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';

export default {

  components: { VueRecaptcha },

  data() {
      return {
        errored: false,
        names: null,
        surnames: null,
        company: null,
        email: null,
        phone: null,
        help: null,
        alert: false,
        verify: null,
        sitekey: '6Lct4PMZAAAAABjLEG7nfEPVGVKiw8VGjiHJrFhr'
      };
  },

  methods:{

    onVerify (response) {

      if(response){
        this.verify = response  
      }
    },
    onExpired () {
      console.log('Expired')
    },

    showError(){
      this.alert = true;
      setTimeout(
        () => { 
          this.alert = false;
        }, 4000
      );
    },

    onSubmit(){
      if (this.verify == null) {

        console.log("data enviada")

        this.$router.push('/form/form-ready')

      } else {
        this.showError();
      }
    }
  },

  computed: {
    boolAlert(){
      return this.alert;
    },

    btnDisabled(){
      if(this.names && this.surnames && this.email && this.rubro){

      } else {

      }
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>