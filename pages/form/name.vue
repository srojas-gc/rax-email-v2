<template>
<!-- start -->
<div class="flex items-center justify-center h-screen -mt-20">
    <div class="container flex flex-col justify-center items-center mx-auto -mt-20">
        
        <!-- Card -->
        <div class="bg-white -mt-20 shadow-md rounded-lg overflow-hidden md:w-3/6">
            <div class="items-center justify-between py-10 px-5 bg-white shadow-2xl rounded-lg mx-auto text-center">
                <div class="px-2 -mt-6">
                    <ValidationObserver v-slot="{ handleSubmit }">
                        <form id="myform" @submit.prevent="handleSubmit(setName)">
                            <div class="text-center">
                                <h1 class="text-2xl text-grey-800 font-medium leading-loose my-3 w-full">
                                    Para formalizar un poco, ¿cual es tu nombre completo?
                                </h1>
                                <ValidationProvider name="names" rules="required" v-slot="{ errors }">
                                    <div class="w-full text-center"> 
                                        <div class="max-w-sm mx-auto p-1 pr-0 flex items-center">
                                            <input v-model="fullname" v-on:keyup.enter="handleSubmit(setName)" type="text" placeholder="Ricardo Perez"
                                                class="flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none">
                                            <button type="submit" form="myform" class="text-white text-base font-semibold rounded-md shadow-md bg-indigo-500 hover:bg-indigo-600 p-3">
                                                Siguiente
                                            </button>
                                        </div>
                                        <p class="text-red-500 text-xs italic">{{ errors[0] }}</p>
                                    </div>
                                </ValidationProvider>
                            </div>
                        </form>
                    </ValidationObserver>
                </div>
            </div>
        </div>
        <!-- end card -->

    </div>
    <!-- end -->
</div>
</template>

<script>
import { mapState } from 'vuex'
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {

    components: {
        ValidationObserver: ValidationObserver,
        ValidationProvider: ValidationProvider
    },

	data() {
        return {
        	fullname: null
        }
    },

    mounted(){
        if(this.$store.getters['form/getName'] == null && this.$store.getters['form/getAccounts'].accountsRax == null){
            this.$router.push('/form/start')
        }
    },

	methods: {
		async setName () {
			
            this.$store.commit('form/setFullName', this.fullname);

            API.put('apidocker','/form', {
                body: {
                    id: this.$store.getters['form/getFormId'],
                    name: this.$store.getters['form/getName'],
                    complete: this.$store.getters['form/getComplete'],
                    rate: this.$store.getters['form/getRate'],
                    createdAt: this.$store.getters['form/getCreatedAt'],
                    priorities: this.cards
                }
            })
            .then(res => {
                //this.$router.push('/form/service')
                this.$router.push('/form/phone')
            })
            .catch(err => {
                console.log(err);
            })
		}
	}
}
</script>