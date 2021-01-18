<template>
<div class="flex items-center justify-center h-screen -mt-20">
	<div class="container flex flex-col justify-center items-center mx-auto">
		
		<!-- Card -->
		<div class="bg-white -mt-20 shadow-md rounded-lg overflow-hidden md:w-3/6">
			<div class="items-center justify-between py-10 px-5 bg-white shadow-2xl rounded-lg mx-auto text-center">
				<div class="px-2 -mt-6">
					<div>
						<h4 class="font-normal text-2xl font-medium my-3 w-full">
							¿Que deseas hacer ahora?
						</h4>

						<div class="container flex items-center text-center">

							<div class="max-w-sm md:w-2/6 rounded overflow-hidden shadow-lg" style="cursor: pointer;">
								<a href="https://inner.grupocloudspace.com/cart.php?gid=15">
									<i class="fas fa-power-off mt-6" style="font-size: 100px"></i>
								  	<div class="px-2 py-2">
										<div class="font-bold text-xl mb-2">Contratar y activar el servicio.</div>
								  	</div>
							  	</a>
							</div>
							
							<div class="max-w-sm md:w-2/6 rounded overflow-hidden shadow-lg" @click="next()" style="cursor: pointer;">
							    <i class="fas fa-clipboard-check mt-6" style="font-size: 100px"></i>
							    <div class="px-2 py-2">
								  <div class="font-bold text-xl mb-2">Recibir una cotizacion.</div>
							    </div>
							</div>

							<div class="max-w-sm md:w-2/6 rounded overflow-hidden shadow-lg" @click="next()" style="cursor: pointer;">
							  	<i class="fas fa-phone mt-6" style="font-size: 100px"></i>
								<div class="px-2 py-2">
									<div class="font-bold text-xl mb-2">Que me llamen. <br><br></div>
								</div>
							</div>

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

export default {

	data() {
		return {
		}
	},

	mounted(){
        if(this.$store.getters['form/getName'] == null){
            this.$router.push('/form/start')
        }
    },

	methods:{
		next(){
			this.$router.push('/form/priority')
		}
	}
}
</script>