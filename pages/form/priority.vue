<template>
<div class="flex items-center justify-center h-screen -mt-20">
    <div class="container flex flex-col justify-center items-center mx-auto">
        
        <!-- Card -->
        <div class=" -mt-20 shadow-md rounded-lg overflow-hidden md:w-3/6">
            <div class="items-center justify-between py-10 px-5 bg-white shadow-2xl rounded-lg mx-auto text-center">
                <div class="px-2 -mt-6">
                    <div>
                        <h4 class="font-normal text-2xl font-medium my-3 w-full">
                        	¿ {{ name }}, cuales fueron tus prioridades a solucionar al cambiarte con nosotros? (Elije 1 o mas)
                        </h4>

                        <!--Wave v-if="loaderBool" class="mx-auto flex items-center flex-wrap m-2"></Wave-->

                        <div class="container mx-auto flex items-center flex-wrap m-2">

                            <div class="max-w-sm md:w-1/4 rounded overflow-hidden shadow-lg" :class="cards[0].classCard" @click="pickCard(0)" style="cursor: pointer;">
                                <i class="fas fa-infinity mt-6" style="font-size: 100px"></i>
                                <div class="px-2 py-2">
                                    <div class="font-bold text-md mb-2">Servicio de email siempre activo.</div>
                                </div>
                            </div>

                            <div class="max-w-sm md:w-1/4 rounded overflow-hidden shadow-lg" :class="cards[1].classCard" @click="pickCard(1)" style="cursor: pointer;">
                              <i class="fas fa-paper-plane mt-6" style="font-size: 100px"></i>
                              <div class="px-2 py-2">
                                <div class="font-bold text-md mb-2">Envio y recepcion garantizada.</div>
                              </div>
                            </div>

                            <div class="max-w-sm md:w-1/4 rounded overflow-hidden shadow-lg" :class="cards[2].classCard" @click="pickCard(2)" style="cursor: pointer;">
                              <i class="fas fa-tag mt-6" style="font-size: 100px"></i>
                              <div class="px-2 py-2">
                                <div class="font-bold text-md mb-2">Obtener un mejor precio.</div>
                              </div>
                            </div>

                            <div class="max-w-sm md:w-1/4 rounded overflow-hidden shadow-lg" :class="cards[3].classCard" @click="pickCard(3)" style="cursor: pointer;">
                              <i class="fas fa-clock mt-6" style="font-size: 100px"></i>
                              <div class="px-2 py-2">
                                <div class="font-bold text-md mb-2">Soporte tecnico 24/7.</div>
                              </div>
                            </div>

                            <div class="max-w-sm md:w-1/4 rounded overflow-hidden shadow-lg" :class="cards[4].classCard" @click="pickCard(4)" style="cursor: pointer;">
                              <i class="fas fa-envelope mt-6" style="font-size: 100px"></i>
                              <div class="px-2 py-2">
                                <div class="font-bold text-md mb-2">Mas espacio por buzon de email.</div>
                              </div>
                            </div>

                            <div class="max-w-sm md:w-1/4 rounded overflow-hidden shadow-lg" :class="cards[5].classCard" @click="pickCard(5)" style="cursor: pointer;">
                              <i class="fas fa-bug mt-6" style="font-size: 100px"></i>
                              <div class="px-2 py-2">
                                <div class="font-bold text-md mb-2">Eliminar virus y spam.</div>
                              </div>
                            </div>

                            <div class="max-w-sm md:w-1/4 rounded overflow-hidden shadow-lg" :class="cards[6].classCard" @click="pickCard(6)" style="cursor: pointer;">
                              <i class="fas fa-mobile-alt mt-6" style="font-size: 100px"></i>
                              <div class="px-2 py-2">
                                <div class="font-bold text-md mb-2">Email en todos mis dispositivos.</div>
                              </div>
                            </div>

                            <div class="max-w-sm md:w-1/4 rounded overflow-hidden shadow-lg" :class="cards[7].classCard" @click="pickCard(7)" style="cursor: pointer;">
                              <i class="fas fa-pen mt-6" style="font-size: 100px"></i>
                              <div class="px-2 py-2">
                                <div class="font-bold text-md mb-2">Otro.<br><br></div>
                              </div>
                            </div>

                        </div>

                        <button @click="postPriority()" class="text-white text-base font-semibold rounded-md shadow-md bg-indigo-500 hover:bg-indigo-600 p-3 mt-4">
                            Siguiente
                        </button>
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
import { API } from 'aws-amplify';

export default {

    data() {
        return {
            cards: [
                {
                    cardId: 0,
                    picked: false,
                    classCard: ""
                },
                {
                    cardId: 1,
                    picked: false,
                    classCard: ""
                },
                {
                    cardId: 2,
                    picked: false,
                    classCard: ""
                },
                {
                    cardId: 3,
                    picked: false,
                    classCard: ""
                },
                {
                    cardId: 4,
                    picked: false,
                    classCard: ""
                },
                {
                    cardId: 5,
                    picked: false,
                    classCard: ""
                },
                {
                    cardId: 6,
                    picked: false,
                    classCard: ""
                },
                {
                    cardId: 7,
                    picked: false,
                    classCard: ""
                },
            ],

            loaderBool: true
        }
    },

    mounted(){
        if(this.$store.getters['form/getName'] == null && this.$store.getters['form/getAccounts'].accountsRax == null){
            this.$router.push('/form/start')
        }
    },

    methods:{
      
        pickCard(cardId){

            this.cards[cardId].picked = !this.cards[cardId].picked;
            this.cards[cardId].classCard = (this.cards[cardId].picked == true) ? "bg-blue-200" : "";
        },

        setBool(){
            setTimeout(() => this.loaderBool = true, 2000);
        },

        postPriority() {
            API.put('apidocker','/form', {
                body: {
                    id: this.$store.getters['form/getFormId'],
                    name: this.$store.getters['form/getName'],
                    priorities: this.cards
                }
            })
            .then(res => {
                this.$router.push('/form/service')
            })
            .catch(err => {
                console.log(err);
            })
        }
    },

    computed: mapGetters({
        name: 'form/getName'
    })
}
</script>

<style>
</style>