<template>
   <div class="ConfirmForm">
      <LongTitle text="Confirma tu asistencia" />
      <p class="Text">
         Si ya sabes si podrás venir o no, confírmanoslo cuanto antes, por favor. Así podremos ir organizándolo todo en
         función de cuántas personas seamos finalmente.
      </p>
      <p class="Text">
         Necesitamos saber qué días vas a estar en la finca, independientemente de si te alojas ahí ono, para la
         contratación de comida por día.
      </p>
      <div class="Wrapper">
         <div class="BoxContainer">
            <Note>
               <template>
                  <div class="NoteWrapper">
                     <h3 class="Title">
                        Ricardo
                     </h3>
                     <form id="form" @submit.prevent="handleSubmit">
                        ¿Vas a poder venir?
                        Sí, allí estaré!
                        Lo siento, no podré

                        ¿Vas a alojarte en la finca?
                        80€ por persona
                        Sí
                        No

                        ¿Qué días vas a estar?
                        Viernes
                        Sábado
                        Domingo

                        ¿Tienes alguna restricción alimentaria?

                        ¿algo más que debamos tener en cuenta?


                        <!-- <Input v-model="name" name="name" id="name" type="text" placeholder="Nombre *" class="Field" />
            <Input v-model="email" name="email" id="email" type="text" placeholder="Email *" class="Field" /> -->
                        <Textarea v-model="message" name="message" id="message" type="textarea"
                           placeholder="Escribe aquí tu mensaje *" class="Field" />
                        <p v-if="emailSent" class="Notification">¡Tu mensaje ha sido enviado correctamente!</p>
                        <p v-if="emailFailed" class="Notification error">¡Ha fallado el envío de tu mensaje! Inténtalo de
                           nuevo o
                           escríbenos por whatsapp</p>
                        <input type="submit" class="Button" name="button"
                           :value="sendingEmail ? 'ENVIANDO...' : 'Enviar formulario'"
                           :class="{ disabled: disabled || $v.$invalid }" :disabled="disabled || $v.$invalid">
                     </form>

                  </div>
               </template>
            </Note>
         </div>

      </div>
      <p class="Text centered">
         Aquí puedes ver la <a href="#" target="_blank">lista de invitados</a>.
      </p>
      <p class="Text centered">
         podría venir bien para organizar el viaje, compartir coche o ponerte de acuerdo con alguien.
      </p>
   </div>
</template>

<script>
import { LongTitle, Note, Textarea } from '@/components'
import {
   required, minLength, email,
} from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'

export default {
   name: 'ConfirmForm',
   components: {
      LongTitle,
      Note,
      // Input,
      Textarea,
   },
   mixins: [validationMixin],
   validations() {
      return {
         name: { required, minLength: minLength(2) },
         email: { required, email },
         message: { required },
      }
   },

   data() {
      return {
         name: '',
         email: '',
         message: '',
         disabled: false,
         sendingEmail: false,
         emailSent: false,
         emailFailed: false,
      }
   },

   methods: {
      async handleSubmit() {
         this.sendingEmail = true

         window.emailjs.send(
            // "service_empaticos",
            // "template_empaticos",
            { email: this.email, name: this.name, message: this.message },
         )
            .then(() => {
               this.emailSent = true
               this.resetForm()
            }, (err) => {
               this.emailFailed = true
               this.resetForm()
               console.log(err)
            })

      },
      resetForm() {
         this.disabled = false
         this.sendingEmail = false
         this.name = ''
         this.email = ''
         this.message = ''
      },
   }
}
</script>
<style lang="scss" scoped>
@import "@/theme/_variables.scss";
@import '@/theme/_breakpoints.scss';

.ConfirmForm {

   .Note {
      &::v-deep .Tape {
         @media (min-width: $md) {
            width: 200px;
            top: -20px;
            left: 40%;
         }
      }
   }

   .Title {}

   .Text {
      line-height: 1.3rem;

      &.centered {
         text-align: center;
      }

      a {
         text-decoration: underline;
      }

      &.Text {
         margin-top: 1rem;
      }
   }

   .Wrapper {
      display: grid;
      grid-template-columns: 1fr;
      column-gap: 1.5rem;
      margin-top: 2.5rem;
      margin-bottom: 1rem;

      @media (max-width: $md) {
         grid-template-columns: 1fr;
         row-gap: 1.5rem;
      }

      .NoteWrapper {
         display: flex;
         flex-direction: column;
         align-items: center;


      }
   }


}
</style>
