<template>
<!-- start -->
<div class="flex items-center justify-center h-screen -mt-20">
    <div class="container flex flex-col justify-center items-center mx-auto -mt-20">
        
        <!-- Card -->
        <div class="bg-white -mt-20 shadow-md rounded-lg overflow-hidden md:w-3/6">
            <div class="items-center justify-between py-10 px-5 bg-white shadow-2xl rounded-lg mx-auto text-center">
                <div class="px-2 -mt-6">
                    <div class="text-center">
                        <h4 class="font-normal text-2xl text-grey-800 font-medium leading-loose my-3 w-full">
                        	{{ name }}, ¿cuan rapido quieres cambiarte a RaxEmail?
                        </h4>
                        <div class="w-full text-center"> 
                           <vue-stars
                           		id="myrate"
								name="demo"
								:max="5"
								:readonly="false"
								char="⭐"
								inactive-char="-"
								style="font-size: 35px;"
								class="text-center"
								v-model="myValue"
							/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end card -->

    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { VueStars } from "vue-stars"

export default {

	data() {
        return {
        	myValue: 3
        }
    },

    components: {
    	'vue-stars': VueStars
    },

    mounted(){
        if(this.$store.getters['form/getName'] == null){
            this.$router.push('/form/start')
        }
    },

    methods: {
    	async getRate(){
    		try {
                
				this.$store.commit('form/setRate', this.myValue);
                API.put('apidocker','/form', {
                    body: {
                        id: this.$store.getters['form/getFormId'],
                        name: this.$store.getters['form/getName'],
                        complete: this.$store.getters['form/getComplete'],
                        rate: this.myValue,
                        createdAt: this.$store.getters['form/getCreatedAt']
                    }
                })

				this.$router.push('/form/action')
			} catch (e){
				error({
		            statusCode: 503,
		            message: 'Error al setear nombre'
		        })
			}
    	}
    },

    watch: {
    	myValue(){
    		this.getRate();
    	}
    },

	computed: mapGetters({
		name: 'form/getName'
	})
}	
</script>