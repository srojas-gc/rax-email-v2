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
                                <h1 class="font-normal text-3xl text-grey-800 font-medium leading-loose my-3 w-full">
                                    Comencemos! Como es tu nombre?
                                </h1>
                                <ValidationProvider name="names" rules="required" v-slot="{ errors }">
                                    <div class="w-full text-center"> 
                                        <div class=" max-w-sm mx-auto p-1 pr-0 flex items-center">
                                            <input v-model="name" v-on:keyup.enter="handleSubmit(setName)" type="text" placeholder="Ricardo"
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
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { API } from 'aws-amplify';

export default {

    components: {
        ValidationObserver: ValidationObserver,
        ValidationProvider: ValidationProvider
    },

	data() {
        return {
        	name: null
        }
    },

	methods: {

        getForms() {
            console.log("getForms")
            API.get('apicloudspacemail','/forms')
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        },

        setName () {
			try {
				this.$store.commit('form/setName', this.name);
				this.postName();
			} catch (e){
				error({
		            statusCode: 503,
		            message: 'Error al setear nombre'
		        })
			}
		},
        
        postName() {
            console.log("postNewName")
            API.post('apidocker','/form', {
                body: {
                    name: this.name
                }
            })
            .then(res => {
                
                //Convierto el body de la respuesta en json
                let body = JSON.parse(res.body);

                this.$store.commit('form/setFormId',body.id)
                this.$router.push('/form/rate')
            })
            .catch(err => {
                console.log(err);
            })
        }		
	}
}
</script>