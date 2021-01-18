<template>
<section id="info" class="bg-white border-b pb-16 pt-20 py-4">
    <div class="container mx-auto">

        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 pb-4">Deseo contratar RAXemail y quisiera saber…</h1>
        <div class="w-full mb-4 pb-10">   
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
    
        <div class="flex flex-wrap mt-12 pb-8">
            <div class="w-5/6 sm:w-3/5">
            	<vsa-list>

				  <vsa-item>
				    <vsa-heading>
				      Instrucciones para migrar mi correo a RaxMail@
				    </vsa-heading>

				    <vsa-content>
				      	El proceso es muy sencillo y rápido. A continuación detallamos los pasos necesarios:<br><br> 

						1) Con el proveedor de registro de tu nombre de dominio (Akky, SuEmpresa, GoDaddy, etc) modifica en los DNS (servidores de nombres) únicamente el valor TTL (Time to Live) a 5 minutos o 600 segundos del registro MX. Esto permitirá que cuando cambies los registros MX a nosotros, la actualización sea inmediata. También puedes solicitar este cambio a tu proveedor copiando y enviándole este mensaje. <br>

						Crea todas las cuentas de email (buzones) en SpaceMail, asignando los usuarios, passwords, alias, grupos, etc. para que tus nuevos buzones estén listo para recibir correo. <br><br>

						2) Si solicitaste nuestro servicio gratuito de migración de email, nosotros moveremos los mensajes de tus cuentas viejas a SpaceMail. <br><br>

						3) Como paso final, debes cambiar el registro MX (ingresar igual que en el paso 1), pero ahora debes agregar dos registros MX:<br><br>

						Tipo de registro/ Record Type: MXMailServer: mx1.emailsrvr.com
						Prioridad/Priority: 10

						Tipo de registro/ Record Type: MX
						MailServer: mx2.emailsrvr.com
						Prioridad/Priority: 20

						Deberán eliminar los viejos records MX para asegurar que el correo electrónico será entregado únicamente a SpaceMail. <br> 

						Para configurar tus dispositivos y/o programs de correo (Outlook, etc, debes ingresar a: Configuración de Cuentas) en donde se te guiará para hacer la configuración necesaria.<br> 

				    </vsa-content>
				  </vsa-item>

				  <vsa-item>
				    <vsa-heading>
				      ¿Ustedes mueven las cuentas del antiguo proveedor?
				    </vsa-heading>

				    <vsa-content>
				      Claro, te ayudamos a mover la información que aún mantengas en tus buzones anteriores sin costo alguno. Este servicio aplica si tus cuentas anteriores son IMAP, ya que en ese caso, el email aún permanece en el servidor. En caso de cuentas POP, el email ya fue descargado a tu computadora.
				    </vsa-content>
				  </vsa-item>

				  <vsa-item>
				    <vsa-heading>
				      ¿Perderé correo electrónico en la transición?
				    </vsa-heading>

				    <vsa-content>
				      No. Tenemos experiencia en cientos de migraciones, y nos aseguramos de que en todo momento el correo electrónico siga fluyendo sin contratiempo.<br><br>
					  Para ello, es necesario realizar algunas configuraciones en el record MX de tu dominio para garantizar que el correo no se pierda o rebote.
				    </vsa-content>
				  </vsa-item>

				  <vsa-item>
				    <vsa-heading>
				      Si no tengo nombre de dominio... ¿que hago?
				    </vsa-heading>

				    <vsa-content>
				      ¿Que crees?…en contrataciones mayores a 10 cuentas, te incluimos el nombre de dominio sin costo alguno.
				    </vsa-content>
				  </vsa-item>

				  <vsa-item>
				    <vsa-heading>
				      Puedo usar RaxMail@ para enviar correo masivo?
				    </vsa-heading>

				    <vsa-content>
				      No es buena idea hacerlo, ya que afectarás a los demás usuarios y nuestro sistema bloqueará automáticamente esa cuenta. El máximo de emails para enviar por cuenta es de 250 en el lapso de una hora.<br><br>
					  Si deseas enviar un mayor volumen, te ofrecemos nuestro servicio de FlowMail, que está diseñado para enviar millones de correos sin pestañear.
				    </vsa-content>
				  </vsa-item>

				  <vsa-item>
				    <vsa-heading>
				      ¿Que tipo de soporte técnico ofrecen?
				    </vsa-heading>

				    <vsa-content>
				      En todo momento nos puedes hablar, enviar un ticket, chatear o twittear... estaremos atentos para ayudarte en todo lo que necesites…y aunque sabemos algo de cocina, la verdad solo podremos auxiliarte acerca de nuestro servicio de email.

						Alta inicial de tus cuentas: Puedes hacerlo tu mismo o nosotros lo haremos por ti. Simplemente deberás enviarnos este archivo con los buzones elegidos.

						Configuración de tus programas de correo y dispositivos: Contamos con una herramienta automática que te ayudará en el proceso.

						Pero si algo se complica, nos llamas y listo.
				    </vsa-content>
				  </vsa-item>

				  <vsa-item>
				    <vsa-heading>
				      ¿Qué formas de pago aceptan?
				    </vsa-heading>

				    <vsa-content>
				      Todas.

						Tarjetas de Crédito (Visa®, MasterCard®, Amex)
						PayPal®
						Depósito en efectivo en tiendas OXXO®
						Transferencia Interbancaria.
						Depósito Bancomer
				    </vsa-content>
				  </vsa-item>

				  <vsa-item>
				    <vsa-heading>
				      Y si quiero cancelar...
				    </vsa-heading>

				    <vsa-content>
				      La verdad…nos dará tristeza que te vayas, pero lo podrás hacer en cualquier momento, sin penalizaciones o cargos extra: nos contrataste desde la libertad y también serás libre de abandonarnos… sniff!!
				    </vsa-content>
				  </vsa-item>

				  <vsa-item>
				    <vsa-heading>
				      Y si no estoy satisfecho...
				    </vsa-heading>

				    <vsa-content>
				      Contamos con una garantía de satisfacción Friendly Provider®, por lo que te devolveremos tu dinero durante los primeros 30 días de contratación del servicio.
				    </vsa-content>
				  </vsa-item>

				</vsa-list>
            </div>

            <div class="w-full sm:w-2/5">
                <div class="w-full rounded overflow-hidden shadow-lg bg-gray-200">
  					<div class="px-6 py-4">

					  	<h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"><a class="inline-block py-2 text-gray-800 text-2xl md:text-2xl font-bold">
					    	Fanatical Experience
					    </a></h1>

					    <p class="text-gray-600 text-md text-center">Tendrá expertos a su lado, que harán todo lo necesario para realizar un trabajo excelente. Desde el asesoramiento inicial hasta las operaciones diarias, combinamos el poder del servicio siempre disponible con lo mejor en cuanto a herramientas y automatización para ofrecerle tecnología como y cuando usted la necesite. Más de 13 años de experiencia con correo electrónico hospedado.</p>

					    <img class="w-full w-2/5 md:w-5/5 inline-block align-middle my-5" src="~/assets/img/support.svg">
					</div>
				</div>
            </div>
        </div>

    </div>
</section>
</template>