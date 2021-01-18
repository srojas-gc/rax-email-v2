<template>
<!-- start -->
<div class="flex items-center justify-center h-screen -mt-20">
    
    <div class="flex-1 text-center px-4"></div>
    <div class="flex-1 px-4">
        <Simulador v-bind:myUrl="'finish'" />
    </div>
    <div class="flex-1 text-center px-4"></div>

</div>
</template>

<script>
import { mapState } from 'vuex'

export default {

	data() {
        return {
        	selected: null
        }
    },

    mounted(){
        if(this.$store.getters['form/getName'] == null){

            if(this.$store.getters['form/getAccounts'].accountsRax != null){
                this.$router.push('/form/finish')
            } else {
                this.$router.push('/form/start')
            }
        }
    },

	methods: {
		async setName () {
			this.$router.push('/form/finish')
		}
	}
}
</script>