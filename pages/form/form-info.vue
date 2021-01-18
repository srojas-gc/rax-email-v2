<template>
<div class="flex items-center justify-center h-screen -mt-20">
    <div class="container flex flex-col justify-center items-center mx-auto -mt-20">
        
        <!-- Card -->
        <div class="bg-white -mt-20 shadow-md rounded-lg overflow-hidden md:w-3/6">
            <div class="items-center justify-between py-10 px-5 bg-white shadow-2xl rounded-lg mx-auto text-center">
                <div class="px-2 -mt-6">
                    <div>
                        <h4 class="font-normal text-2xl font-medium my-3 w-full">
                        	En pocas horas puedes tener tu servicio de correo funcionando al 100%, para ello necesitas:
                        </h4>
                        <p class="font-normal text-grey-800 font-small leading-loose my-3 w-full">
                        	1) Contar con un nombre de dominio. <br>
                        	2) Modificar los registros en tu DNS <br>
                        	3) Configurar los programas de correo <br> (Outlook, mailmac, IOS, Android, etc) para empezar a recibir y enviar email... y listo
                        </p>

                        <button @click="next()" class="text-white text-base font-semibold rounded-md shadow-md bg-indigo-500 hover:bg-indigo-600 p-3 mt-5">
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
export default {
	methods:{
		next(){
			this.$router.push('/form/action')
		}
	},

    mounted(){
        if(this.$store.getters['form/getName'] == null){
            this.$router.push('/form/start')
        }
    }
}
</script>