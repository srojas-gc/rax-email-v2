<template>
<div class="flex items-center justify-center h-screen -mt-20">
    <div class="container flex flex-col justify-center items-center mx-auto -mt-20">
        
        <!-- Card -->
        <div class="bg-white -mt-20 shadow-md rounded-lg overflow-hidden md:w-3/6">
            <div class="items-center text-center justify-between py-10 px-5 bg-white shadow-2xl rounded-lg mx-auto text-center">
                <div class="px-2 -mt-6">
                    <div>
                        <h4 class="font-normal text-2xl font-medium my-3 w-full">
                        	Solicitud enviada!
                        </h4>

                        <img class="w-full w-2/5 md:w-2/5 inline-block align-middle my-5" src="~/assets/img/sent.svg">

                        <h6 class="font-normal mb-8">
                            En breve nos comunicaremos contigo <br>
                            Tambien nos puedes llamar al tel (011) 1234567 <br>
                            Muchas gracias por contactarte!
                        </h6>

                        <a href="/" class="text-white text-base font-semibold rounded-md shadow-md bg-indigo-500 hover:bg-indigo-600 p-3 mt-6">
                            Volver al inicio
                        </a>
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
    
}
</script>