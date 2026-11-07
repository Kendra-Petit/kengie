<template>
   <div class="Form">
      <LongTitle text="Confirma tu asistencia" />
      <p class="Text">
         Si ya sabes si podrás venir, confírmanoslo cuanto antes, por favor.
      </p>
      <p class="Text">
         Además, necesitamos saber qué días vas a estar en la finca, para poder organizar la comida de cada jornada.
      </p>
      <div class="Wrapper">
         <div class="BoxContainer" v-for="(({ name }), BoxIndex) in guests" :key="BoxIndex">
            <Note>
               <template>
                  <div class="NoteWrapper">
                     <h3 class="Title">
                        {{ name }}
                     </h3>
                     <template v-if="guestsResponse[name]">
                        <form id="form" @submit.prevent="() => handleSubmit(name, code)">

                           <PillSelectorInput v-model="guestsResponse[name].confirm" label="¿Vas a poder venir?"
                              :options="[{ key: 'Y', label: 'Sí, allí estaré!' }, { key: 'N', label: 'Lo siento, no podré' }]"
                              border="primary" />
                           <template v-if="guestsResponse[name].confirm === 'Y'">
                              <PillSelectorInput v-model="guestsResponse[name].days" label="¿Qué días vas a estar?"
                                 :multiple="true"
                                 :options="[{ key: 'viernes', label: 'Viernes' }, { key: 'sabado', label: 'Sábado' }, { key: 'domingo', label: 'Domingo' }]"
                                 border="primary" />

                              <PillSelectorInput v-model="guestsResponse[name].accomodation"
                                 label="¿Vas a alojarte en la finca?" extraLabel="80€ por persona"
                                 :options="[{ key: 'Y', label: 'Sí' }, { key: 'N', label: 'No' }]" border="primary" />
                              <Textarea v-model="guestsResponse[name].dietaryRestrictions" name="dietaryRestrictions"
                                 id="dietaryRestrictions" type="textarea"
                                 placeholder="¿Tienes alguna restricción alimentaria?" class="Field" />
                              <Textarea v-model="guestsResponse[name].notes" name="notes" id="notes" type="textarea"
                                 placeholder="¿Algo más que debamos tener en cuenta?" class="Field" />
                           </template>

                           <input type="submit" class="Button" name="button"
                              :value="guestsResponse[name].sendingEmail ? 'ENVIANDO...' : 'Enviar respuesta'"
                              :class="{ disabled: isFormDisabled(guestsResponse[name]) }"
                              :disabled="isFormDisabled(guestsResponse[name])">
                           <p v-if="guestsResponse[name].emailSent" class="Notification">¡Tu mensaje ha sido enviado
                              correctamente!</p>
                           <p v-if="guestsResponse[name].emailFailed" class="Notification error">
                              ¡Ha fallado el envío de tu
                              mensaje!
                              <span>Inténtalo de nuevo o escríbenos por whatsapp</span>
                           </p>

                        </form>
                     </template>
                  </div>
               </template>
            </Note>
         </div>
      </div>


   </div>
</template>

<script>
import { LongTitle, Note, Textarea, PillSelectorInput, Modal } from '@/components'
import emailjs from '@emailjs/browser'

import VueTypes from 'vue-types'
const EMPTY_FORM = {
   confirm: '',
   days: [],
   accomodation: null,
   dietaryRestrictions: '',
   notes: '',
   sendingEmail: false,
   emailSent: false,
   emailFailed: false,
}

export default {
   name: 'Form',
   components: {
      LongTitle,
      Note,
      PillSelectorInput,
      Textarea,
      Modal,
   },
   props: {
      guests: VueTypes.array,
      code: VueTypes.string,
      guestsList: VueTypes.array,
   },
   data() {
      return {
         sendingEmail: false,
         emailSent: false,
         emailFailed: false,
         guestsResponse: {},
         openModal: false,

      }
   },
   watch: {
      guests: {
         inmediate: true,
         handler(guests) {
            this.initializeGuestsResponse(guests)
         }
      }
   },
   methods: {
      isFormDisabled(form) {
         if (!form.confirm) return true
         else if (form.confirm === 'Y' && (!form.accomodation || form.days.length === 0)) return true
         else return false
      },
      initializeGuestsResponse(guests = []) {
         this.guestsResponse = Object.fromEntries(
            guests.map(({ name }) => [
               name,
               this.guestsResponse[name] ?? { ...EMPTY_FORM }
            ])
         );
      },
      handleSubmit(name, code) {
         this.guestsResponse[name].sendingEmail = true

         emailjs.send(
            "service_kengie",
            "template_kengie",
            { code, name, ...this.guestsResponse[name] },
            { publicKey: 'bkJIjfPp8QkghboJd' }
         )
            .then(() => {
               this.resetForm(name)
               setTimeout(() => this.guestsResponse[name].emailSent = true, 0)
            }, () => {
               this.resetForm(name)
               setTimeout(() => this.guestsResponse[name].emailFailed = true, 0)
            })

      },
      resetForm(name) {
         this.guestsResponse[name] = { ...EMPTY_FORM }
      },
   }
}
</script>
<style lang="scss" scoped>
@import "@/theme/_variables.scss";
@import '@/theme/_breakpoints.scss';

.Form {

   .Note {
      &::v-deep .Tape {
         @media (min-width: $md) {
            width: 200px;
            top: -20px;
            left: 40%;
         }
      }


   }

   form {
      display: flex;
      gap: 2rem;
      margin-top: 2rem;
      flex-wrap: wrap;
      align-items: flex-end;
      padding-bottom: 2rem;
   }

   .Button {
      padding: 10px 24px 10px 24px;
      border-radius: 10px;
      border: 2px solid transparent;
      background: $primary;
      font-size: 1rem;
      font-weight: bold;
      line-height: 1rem;
      outline: none;
      cursor: pointer;
      color: $white;

      &:hover {
         box-shadow: 0px 2px 10px rgba(77, 101, 84, 0.5);
      }

      &.disabled {
         background: rgba(77, 101, 84, 0.1);
         border-color: rgba(77, 101, 84, 0.5);
         color: $primary;

         &:hover {
            cursor: default;
         }
      }
   }

   .PillSelectorInput {
      width: fit-content;
      max-width: 100%;
      transition: all .3s ease-in-out;

      // min-width: 45%;

      &::v-deep .OptionGroup {
         background: transparent;
         width: fit-content;
      }
   }

   .Textarea {
      min-width: 45%;
      flex: 1;
      transition: all .3s ease-in-out;
   }

   .Notification {
      // margin-bottom: 20px;
      line-height: 1.3rem;
      transition: all .3s ease-in-out;


      span {
         display: block;
      }

      &.error {
         color: #EC466E;
         padding: 10px;
         border-radius: 5px;
      }
   }

   .Text {
      line-height: 1.3rem;

      &.centered {
         text-align: center;
      }

      .Link {
         text-decoration: underline;
         cursor: pointer;
      }

      &.Text {
         margin-top: 1rem;
      }
   }

   .Wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 1.5rem;
      margin-top: 2.5rem;
      margin-bottom: 1rem;

      @media (max-width: $lg) {
         grid-template-columns: 1fr;
         row-gap: 1.5rem;
      }

      .NoteWrapper {
         display: flex;
         flex-direction: column;


         .Title {
            font-size: 2.8rem;
            font-family: $font-family-title;
            font-weight: $font-weight-normal;
            letter-spacing: 2px;
            padding-left: 12px;
         }


      }
   }

   .Modal {
      &::v-deep .Body {
         display: flex;
         flex-direction: column;
         align-items: center;
      }

      .ModalText {
         // font-size: 1rem;
         // line-height: 2.5rem;
         // color: $gray;

         @media (max-width: $sm) {
            // font-size: 1.2rem;
            // line-height: 1.6rem;
         }
      }

      .ModalFooterText {
         // text-transform: uppercase;
         // color: $gray;
      }
   }

}
</style>
