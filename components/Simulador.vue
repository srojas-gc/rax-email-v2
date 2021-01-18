<template>
<div class="w-full rounded overflow-hidden shadow-lg bg-gray-200">
  <div class="px-6 py-4">

  	<h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"><a class="inline-block py-2 text-gray-800 text-2xl md:text-2xl font-bold">
    	Total Estimado
    </a></h1>

    <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
    	<i class="fas fa-dollar-sign"></i>
    	<a class="inline-block text-gray-800 text-6xl md:text-6xl font-bold">
          {{ (accounts.accountsRax * priceRax + accounts.accountsRaxPlus * priceRaxPlus + accounts.accountsExchange * priceExchange).toFixed(2) }}
    	</a>
 	</h1>
    
  
    <div class="flex flex-wrap mt-12 rounded overflow-hidden shadow-lg bg-white">
    	
    	<div class="w-4/6 md:w-4/6 p-6">
		    <h3 class="text-gray-800 text-2xl md:text-2xl font-bold">
	        	<i class="fas fa-envelope"></i> Rax Email
	      	</h3>
	    </div>

	    <div class="w-full md:w-2/6">
            <div class="w-full rounded overflow-hidden shadow-lg py-5 px-5">
			    <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
				    <button v-if="accounts.accountsRax > 0" @click="accounts.accountsRax--" class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
				      <span class="m-auto text-2xl font-thin">−</span>
				    </button>
				    <button v-else disabled class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
				      <span class="m-auto text-2xl font-thin">−</span>
				    </button>
				    <input v-model="accounts.accountsRax" type="number" class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value="0"></input>
					<button @click="accounts.accountsRax++" class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer outline-none">
						<span class="m-auto text-2xl font-thin">+</span>
					</button>
				 </div>
		    </div>
        </div>
	    
	</div>

	<div class="flex flex-wrap mt-5 rounded overflow-hidden shadow-lg bg-white">
    	
    	<div class="w-4/6 md:w-4/6 p-6">
		    <h3 class="text-gray-800 text-2xl md:text-2xl font-bold">
	        	<i class="fas fa-envelope"></i> Rax Email Plus
	      	</h3>
	    </div>

	    <div class="w-full md:w-2/6">
            <div class="w-full rounded overflow-hidden shadow-lg py-5 px-5">
			    <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
				    <button v-if="accounts.accountsRaxPlus > 0" @click="accounts.accountsRaxPlus--" class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
				      <span class="m-auto text-2xl font-thin">−</span>
				    </button>
				    <button v-else disabled class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
				      <span class="m-auto text-2xl font-thin">−</span>
				    </button>
				    <input v-model="accounts.accountsRaxPlus" type="number" class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value="0"></input>
					<button @click="accounts.accountsRaxPlus++" data-action="increment" class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
						<span class="m-auto text-2xl font-thin">+</span>
					</button>
				 </div>
		    </div>
        </div>
	    
	</div>

	<div class="flex flex-wrap mt-5 rounded overflow-hidden shadow-lg bg-white">
    	
    	<div class="w-4/6 md:w-4/6 p-6">
		    <h3 class="text-gray-800 text-2xl md:text-2xl font-bold">
	        	<i class="fas fa-envelope"></i> Microsoft Exchange
	      	</h3>
	    </div>

	    <div class="w-full md:w-2/6">
            <div class="w-full rounded overflow-hidden shadow-lg py-5 px-5">
			    <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
				    <button v-if="accounts.accountsExchange > 0" @click="accounts.accountsExchange--" class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
				      <span class="m-auto text-2xl font-thin">−</span>
				    </button>
				    <button v-else disabled class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
				      <span class="m-auto text-2xl font-thin">−</span>
				    </button>
				    <input v-model="accounts.accountsExchange" type="number" class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value="0"></input>
					<button @click="accounts.accountsExchange++" data-action="increment" class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
						<span class="m-auto text-2xl font-thin">+</span>
					</button>
				 </div>
		    </div>
        </div>
	</div>

	<div class="flex mt-6">
	  <label class="flex items-center ml-2">
	    <input v-model="accounts.archiving" type="checkbox" class="form-checkbox">
	    <span class="ml-2 font-semibold text-md text-gray-700">Email Archiving</span>
	  </label>
	</div>

	<div class="flex items-center h-24">
		<div class="flex-1 text-center px-4"></div>
		<div class="flex-1 text-center px-4 mb-4">
			<a @click="setAccounts()" class="mt-6 mb-12 md:mb-0 md:mt-10 inline-block py-3 px-8 text-white bg-indigo-500 hover:bg-indigo-600 rounded-lg shadow text-xl" style="cursor: pointer;">
                Cotizar
            </a>
		</div>
		<div class="flex-1 text-center px-4"></div>
	</div>

  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {

	props: ['myUrl'],

	data() {
	    return {
	    	priceRax: 2.70,
	    	priceRaxPlus: 3.70,
	    	priceExchange: 9.99,

	    	accounts : {
	    		accountsRax: 0,
		    	accountsRaxPlus: 0,
		    	accountsExchange: 0,
		    	archiving: false
	    	}
	    }
	},

	methods: {
		async setAccounts () {
			
			try {
				await this.$store.commit('form/setAccounts', this.accounts);
				this.$router.push('/form/'+ this.myUrl)
			} catch (e){
				error({
		            statusCode: 503,
		            message: 'Error al setear simulador'
		        })
			}
		}
	}
}
</script>

<style>

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .custom-number-input input:focus {
    outline: none !important;
  }

  .custom-number-input button:focus {
    outline: none !important;
  }
</style>