<template>
   <div class="Invite">
      <Title text="Una celebración íntima" />
      <p class="Text">Hemos preparado estos días para compartirlos con las personas más cercanas a nosotras.</p>
      <div class="Wrapper">
         <div class="TicketWrapper">
            <p>Esta invitación es para </p>
            <div class="Ticket" :style="{ backgroundImage: `url(${require(`@/assets/imgs/icons/ticket.webp`)})` }">
               <div class="TicketContent">
                  <h2>RICARDO & MARY</h2>
               </div>
            </div>
            <p class="Text">únicamente.</p>
         </div>
         <p class="Text">Gracias por comprenderlo y por formar parte de este momento tan especial para nosotras.</p>
      </div>
   </div>
</template>

<script>
import { Title } from '@/components'

export default {
   name: 'Invite',
   components: {
      Title,
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

.Invite {

   .Title {
      text-align: center;
   }

   .Wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
   }

   .TicketWrapper {
      margin: 1rem 0;
   }

   .Ticket {
      width: 100%;
      max-width: 320px;
      min-height: 112px;
      aspect-ratio: 260 / 112;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 8px 0;

      &Content {
         width: 75%;
         padding: 20px;
         text-align: center;
         margin: 0 auto;
         overflow-wrap: anywhere;

         h2 {
            font-size: 2.2rem;
            font-family: $font-family-title;
            font-size: normal;
            margin-bottom: 0;
            line-height: 2.2rem;
            letter-spacing: 2px;
            padding: 20px;
         }
      }
   }

   .Text {
      text-align: center;
      line-height: 1.3rem;
      width: 70%;
      align-self: center;
      margin: 0 auto 20px auto;
   }
}
</style>
