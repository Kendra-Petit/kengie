<template>
   <div class="LoveStory">
      <div class="SectionWrapper">
         <LongTitle text=" Nuestra historia" />
         <div class="Paper" :style="{
            '--paper-image': `url(${require('@/assets/imgs/hoja.webp')})`
         }">
            <p>Nos conocíamos desde hacía unos tres años, pero fue en enero de 2025 cuando empezamos a hablar. Lo que
               comenzó
               como
               un favor se convirtió, poco a poco, en algo que no imaginábamos.</p>
            <p>Un pozo de pádel, una quedada, un concierto, una ruta de senderismo, un viaje… Y así, entre planes que
               siempre
               parecían tener una continuación, conversaciones que se alargaban y ganas de volver a vernos, sin buscarlo,
               nos
               fuimos encontrando.
               Poco a poco, la ilusión por compartir un plan se convirtió en las ganas de compartirlo todo.</p>
            <p>Desde entonces, hemos ido construyendo una relación hermosa, en la que nos disfrutamos, nos admiramos y nos
               respetamos. Encontramos ls felicidad tanto en las grandes aventuras como en las cosas más sencillas: una
               buena
               conversación, unas risas, un plan improvisado o simplemente estar juntas.</p>
            <p>Hoy queremos celebrar nuestro amor con todas esas personas a las que tanto hemos incomodado con nuestro
               enamoramiento.</p>
            <p>Porque si hay algo que tenemos claro es que queremos seguir eligiéndonos, cuidándonos y construyendo juntas
               todo
               lo que está por venir.</p>
            <p>Y esta vez, el plan es para toda la vida.</p>
         </div>
      </div>
      <SplidePollaroid :items="venueImages" :autoWidthProp="true" />
   </div>
</template>

<script>
import { LongTitle, SplidePollaroid } from '@/components'
const pathMain = "us";
const ext = ".webp";

export default {
   name: 'LoveStory',
   components: {
      LongTitle,
      SplidePollaroid
   },
   data() {
      return {
         venueImages: [
            { image: "1", ext, path: pathMain, label: '', },
            { image: "2", ext, path: pathMain, label: '', },
            { image: "3", ext, path: pathMain, label: '', },
            { image: "4", ext, path: pathMain, label: '', },
            // { image: "5", ext, path: pathMain, label: '', },
            { image: "6", ext, path: pathMain, label: '', },
            { image: "7", ext, path: pathMain, label: '', },
            { image: "8", ext, path: pathMain, label: '', },
            { image: "9", ext, path: pathMain, label: '', },
            { image: "10", ext, path: pathMain, label: '', },
         ]
      }
   },
}
</script>
<style lang="scss" scoped>
@import "@/theme/_variables.scss";
@import '@/theme/_breakpoints.scss';

.LoveStory {
   .Title {
      margin-bottom: 1rem;
   }

   .Paper {
      padding: 2rem;
      // background-size: cover;
      // background-position-y: top;
      box-shadow: 3px 3px 10px rgba(#333, 0.2);

      position: relative;
      isolation: isolate;
      background: $white;

      &::before {
         content: '';
         position: absolute;
         inset: 0;
         background-image: var(--paper-image);
         background-size: cover;
         background-position: center;
         opacity: 0.7;
         z-index: -1;
      }

   }

   p {
      letter-spacing: .5px;
      line-height: 1.2rem;

      &+p {
         margin-top: 1rem;
      }
   }

   .SplidePollaroid {
      margin-top: 2rem;
   }
}
</style>
