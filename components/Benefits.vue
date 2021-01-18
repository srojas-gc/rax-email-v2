<template>
<section id="benefits" class="bg-white border-b pt-16 pb-8">
    <div class="container mx-auto">

        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Beneficios de Rackspace Email</h1>
        
        <div class="w-full mb-4">   
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
    
        <div class="flex flex-wrap mt-12">
            <div class="w-5/6 sm:w-1/2 p-6">

                <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3"><i class="fas fa-globe-americas" style="font-size: 40px"></i> Su correo, donde vaya</h3>
                <p class="text-gray-600 text-xl">Su negocio nunca se detiene, y el correo debe ser accesible desde cualquier parte, en cualquier momento. Con Rackspace Email, disfrute acceso IMAP en prácticamente cualquier teléfono móvil o tablet.</p><br />

                <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3"><i class="fas fa-laptop" style="font-size: 40px"></i> Webmail & apps</h3>
                <p class="text-gray-600 text-xl">Rackspace Webmail es lo suficientemente potente para ser su correo de todos los días. Además de sus robustas capacidades, también cuenta con aplicaciones colaborativas y herramientas para ayudar a su negocio a colaborar y comunicar de manera más efectiva.</p><br />

                <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3"><i class="fas fa-shield-alt" style="font-size: 40px"></i> Almacenamiento de archivos en la nube</h3>
                <p class="text-gray-600 text-xl">Al guardar sus archivos en Rackspace Cloud Drive, podrá tener acceso a ellos desde cualquier lugar y mediante cualquier equipo. La sincronización con los elementos del escritorio para Windows y Mac le garantiza que trabaja con las versiones más actualizadas de sus archivos. Además, al tener una copia en la nube, está protegido en caso de que surjan problemas como ransomware, robos o destrucción de discos duros.</p><br />
                
            </div>

            <div class="w-full sm:w-1/2 pt-4">
                <Simulador v-bind:myUrl="'priority'"/>
            </div>
        </div>

    </div>
</section>
</template>