<template>
  <div class="md:max-w-screen-xl md:mx-auto md:flex md:items-center md:justify-between">
    <div class="flex justify-between items-center static">
      <a href="/" class="inline-block" >
        <img class="absolute" style="width: 300px; height: auto;" src="~/assets/img/logo.png">
      </a>
      <div
        class="inline-block cursor-pointer md:hidden">
        <div class="bg-gray-800 w-8 mb-2" style="height: 2px;"></div>
        <div class="bg-gray-800 w-8 mb-2" style="height: 2px;"></div>
        <div class="bg-gray-800 w-8" style="height: 2px;"></div>
      </div>
    </div>
    
    <div class="hidden md:block py-4">
       <a
          href="https://inner.grupocloudspace.com/clientarea.php"
          class="inline-block py-1 md:py-4 text-gray-800 mr-6 font-bold text-xl"
          > <i class="fas fa-user"></i> Mi Cuenta</a
        >
        <a
          href="#benefits"
          class="inline-block py-1 md:py-4 text-gray-800 hover:text-black-100 mr-6 text-xl"
          > <i class="fas fa-star"></i> Beneficios</a
        >
        <a
          href="#contact"
          class="inline-block py-1 md:py-4 text-gray-800 hover:text-black-100 text-xl"
          > <i class="fas fa-comments"></i> Contacto</a
        >

    </div>
  </div>
</template>