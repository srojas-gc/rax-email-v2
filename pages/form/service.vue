<template>
<div class="flex items-center justify-center h-screen -mt-20">
    <div class="container flex flex-col justify-center items-center mx-auto">
        
        <!-- Card -->
        <div class="bg-white -mt-20 shadow-md rounded-lg overflow-hidden md:w-3/6">
            <div class="items-center justify-between py-10 px-5 bg-white shadow-2xl rounded-lg mx-auto text-center">
                <div class="px-2 -mt-6">
                    <div>
                        <h4 class="font-normal text-2xl font-medium my-3 w-full">
                        	Selecciona el servicio para conocer sus principales beneficios: 
                        </h4>

                        <div class="container flex items-center text-center">

                            <div class="max-w-sm md:w-2/6 rounded overflow-hidden shadow-lg" @click="modal1 = true" style="cursor: pointer;">
                              <i class="fas fa-envelope mt-6" style="font-size: 100px"></i>
                              <div class="px-2 py-2">
                                <div class="font-bold text-lg mb-2">Rackspace Email</div>
                              </div>
                            </div>

                            <div class="max-w-sm md:w-2/6 rounded overflow-hidden shadow-lg" @click="modal2 = true" style="cursor: pointer;">
                              <i class="fas fa-envelope mt-6" style="font-size: 100px"></i>
                              <div class="px-2 py-2">
                                <div class="font-bold text-lg mb-2">Rackspace Email Plus</div>
                              </div>
                            </div>

                            <div class="max-w-sm md:w-2/6 rounded overflow-hidden shadow-lg" @click="modal3 = true" style="cursor: pointer;">
                              <i class="fas fa-envelope mt-6" style="font-size: 100px"></i>
                              <div class="px-2 py-2">
                                <div class="font-bold text-lg mb-2">Microsoft Exchange</div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end card -->
    </div>

    <vue-tailwind-modal
      :showing="modal1"
      @close="modal1 = false"
      :showClose="true"
      :backgroundClose="true"
    >
      <div class="items-center justify-between py-5 bg-white shadow-2xl rounded-lg mx-auto text-center">
        <div class="px-2 -mt-6">
          <div>
              <h4 class="font-normal text-2xl font-medium my-3 w-full">
                Rackspace Email te ofrece:
              </h4>
              <p class="font-normal text-grey-800 font-small leading-loose my-3 w-full">
                - 25 GB de capacidad por cada buzon. <br>
                - 99.99% de disponibilidad. <br>
                - Multiplataforma.
              </p>
          </div>
        </div>
        <button @click="next()" class="text-white text-base font-semibold rounded-md shadow-md bg-indigo-500 hover:bg-indigo-600 p-3 mt-4">
          Si me interesa!
        </button>
      </div>
    </vue-tailwind-modal>

    <vue-tailwind-modal
      :showing="modal2"
      @close="modal2 = false"
      :showClose="true"
      :backgroundClose="true"
    >
      <div class="items-center justify-between py-5 bg-white shadow-2xl rounded-lg mx-auto text-center">
        <div class="px-2 -mt-6">
          <div>
              <h4 class="font-normal text-2xl font-medium my-3 w-full">
                Rackspace Email Plus te ofrece:
              </h4>
              <p class="font-normal text-grey-800 font-small leading-loose my-3 w-full">
                - 25 GB de capacidad por cada buzon. <br>
                - 99.99% de disponibilidad. <br>
                - Multiplataforma.
              </p>
          </div>
        </div>
        <button @click="next()" class="text-white text-base font-semibold rounded-md shadow-md bg-indigo-500 hover:bg-indigo-600 p-3 mt-4">
          Si me interesa!
        </button>
      </div>
    </vue-tailwind-modal>

    <vue-tailwind-modal
      :showing="modal3"
      @close="modal3 = false"
      :showClose="true"
      :backgroundClose="true"
    >
      <div class="items-center justify-between py-5 bg-white shadow-2xl rounded-lg mx-auto text-center">
        <div class="px-2 -mt-6">
          <div>
              <h4 class="font-normal text-2xl font-medium my-3 w-full">
                Microsoft Exchange te ofrece:
              </h4>
              <p class="font-normal text-grey-800 font-small leading-loose my-3 w-full">
                - 25 GB de capacidad por cada buzon. <br>
                - 99.99% de disponibilidad. <br>
                - Multiplataforma.
              </p>
          </div>
        </div>
        <button @click="next()" class="text-white text-base font-semibold rounded-md shadow-md bg-indigo-500 hover:bg-indigo-600 p-3 mt-4">
          Si me interesa!
        </button>
      </div>
    </vue-tailwind-modal>
    
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

    data() {
        return {
          modal1: false,
          modal2: false,
          modal3: false
        }
    },

    methods:{
        next(){
            this.$router.push('/form/name')
        }
    },

    mounted(){
        if(this.$store.getters['form/getName'] == null && this.$store.getters['form/getAccounts'].accountsRax == null){
            this.$router.push('/form/start')
        }
    },

    computed: mapGetters({
        name: 'form/getName'
    })
}
</script>