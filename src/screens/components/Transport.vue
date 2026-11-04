<template>
   <div class="Transport">
      <LongTitle text="¿Cómo llegar?" />

      <div class="opt">
         <h3>Si vienes en transporte público</h3>
         <div class="TransportWrapper">
            <div class="Description">
               <p>Hay un <b>autobús directo</b></p>
               <p>desde Mendez Álvaro hasta Navaluenga.</p>
               <p class="ExtraInfo">La estación de navaluenga está a 15min andando de la finca.</p>
            </div>
            <img class="Illustration" :src="require('@/assets/imgs/icons/bus.webp')" />
         </div>
         <div class="BusSchedule">
            <div class="Left">
               <div class="Itinerary">
                  <p><a href="https://regular.autobusing.com/venta/inicio_info?origen_codigo=0041&destino_codigo=0056&empresa=cevesa"
                        target="_blank"><b>Ida a Navaluenga</b></a></p>
                  <div class="Times">
                     <img class="Illustration" :src="require('@/assets/imgs/icons/calendar.webp')" />
                     <div>
                        <p>Viernes 16:30h</p>
                        <p>Sábado 8:30h</p>
                     </div>
                  </div>
               </div>
               <div class="Itinerary">
                  <p><a href="https://regular.autobusing.com/venta/inicio_info?origen_codigo=0056&destino_codigo=0041&empresa=cevesa"
                        target="_blank"><b>Regreso a Madrid</b></a></p>
                  <div class="Times">
                     <img class="Illustration" :src="require('@/assets/imgs/icons/calendar.webp')" />
                     <p>Domingo 17:55h</p>
                  </div>
               </div>
            </div>
            <!-- MAD-NAV https://regular.autobusing.com/venta/inicio_info?origen_codigo=0041&destino_codigo=0056&empresa=cevesa -->

            <div class="Right">
               <p>tiene un precio de <b>10€ por trayecto</b>.</p>
               <a class="Button" href="https://www.cevesa.es/horario" target="_blank">COMPRAR BILLETES DE BUS</a>
               <p class="Note">Los pasajes salen a la venta 30 días antes de la fecha del viaje.</p>
            </div>

         </div>
      </div>
      <div class="opt">
         <h3>Si vienes en coche</h3>
         <div class="TransportWrapper">
            <div class="Description">
               <p>puedes aparcar en el estacionamiento de la finca, o en el <a
                     href="https://maps.app.goo.gl/wFKxePGjbywGjdXP9" target="_blank">parking público de Navaluenga</a>.
               </p>
            </div>
            <img class="Illustration" :src="require('@/assets/imgs/icons/car.webp')" />

         </div>
      </div>
   </div>
</template>

<script>
import { LongTitle } from '@/components'

export default {
   name: 'Transport',
   components: {
      LongTitle,
   },
   data() {
      return {
      }
   },
}
</script>
<style lang="scss" scoped>
@import "@/theme/_variables.scss";
@import '@/theme/_breakpoints.scss';

.Transport {
   .opt+.opt {
      margin-top: 2rem;
      margin-bottom: 3rem;
   }

   .opt {
      margin-top: 2rem;

      h3 {
         font-family: $font-family-title;
         font-weight: $font-weight-normal;
         font-size: 1.3rem;
         letter-spacing: 1px;
      }

      .TransportWrapper {
         background: #faf7f2;
         border-radius: 2rem 0 0 2rem;
         padding: 12px 120px 12px 40px;
         display: flex;
         position: relative;

         .Description {
            position: relative;
            width: 100%;

            a {
               text-decoration: underline;
            }

            p {

               &.ExtraInfo {
                  position: absolute;
                  bottom: -30px;
                  font-size: .8rem;

               }
            }
         }

         .Illustration {
            height: 5rem;
            position: absolute;
            right: 0;
            top: -10px;
         }
      }

      .BusSchedule {
         margin-top: 2.5rem;
         display: flex;
         background: #faf7f2;
         padding: 20px;
         padding-left: 40px;
         border-radius: .5rem;

         .Left {
            display: flex;
            flex-direction: column;
            min-width: 40%;

            .Itinerary {
               &+.Itinerary {
                  margin-top: 1.5rem;
               }

               a {
                  text-decoration: underline;
               }

               .Times {
                  display: flex;
                  gap: 1rem;
                  margin-top: 1rem;

                  p+p {
                     margin-top: .5rem;
                  }

                  .Illustration {
                     height: 30px;
                     width: auto;
                  }
               }
            }
         }

         .Right {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;

            p+p {
               margin-top: .5rem;
            }

            .Button {
               background: $primary;
               border-radius: 2rem;
               color: $white;
               padding: .5rem 1rem;
               font-weight: bold;
               margin-top: 1rem;
               border: none;
            }

            .Note {
               font-size: .8rem;
               margin-top: 2rem;
            }
         }

      }
   }
}
</style>
