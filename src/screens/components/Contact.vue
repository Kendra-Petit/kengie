<template>
   <div class="Contact">
      <div class="Form">
         <p class="Title">
            Contáctanos
         </p>
         <form id="form" @submit.prevent="handleSubmit">
            <Input v-model="name" name="name" id="name" type="text" placeholder="Nombre *" class="Field" />
            <Input v-model="email" name="email" id="email" type="text" placeholder="Email *" class="Field" />
            <Textarea v-model="message" name="message" id="message" type="textarea" placeholder="Escribe aquí tu mensaje *"
               class="Field" />
            <p v-if="emailSent" class="Notification">¡Tu mensaje ha sido enviado correctamente!</p>
            <p v-if="emailFailed" class="Notification error">¡Ha fallado el envío de tu mensaje! Inténtalo de nuevo o
               escríbenos a <b>contacto@empaticos.eu</b></p>
            <input type="submit" class="Button" name="button" :value="sendingEmail ? 'ENVIANDO...' : 'ENVIAR'"
               :class="{ disabled: disabled || $v.$invalid }" :disabled="disabled || $v.$invalid">
         </form>
      </div>
      <div class="Wrapper">
         <p>@empaticoseu</p>
         <div class="SocialMedia">
            <a v-for="social in socialMedia" :key="social.key" :href="social.link" target="_blank" class="Social">
               <div class="Figure">
                  <div class="Diamond" />
                  <Icon class="DiamondIcon" :icon="social.key" :size="26" color="white" />
               </div>
               <p class="Name">{{ social.name }}</p>
            </a>
         </div>
      </div>
   </div>
</template>

<script>
import { Icon, Input, Textarea } from '@/components'
import {
   required, minLength, email,
} from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'

export default {
   name: 'Contact',
   components: {
      Icon,
      Input,
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

         socialMedia: [
            {
               key: 'facebook',
               name: 'Facebook',
               link: 'https://www.facebook.com/empaticoseu'
            },
            {
               key: 'instagram',
               name: 'Instagram',
               link: 'https://www.instagram.com/empaticoseu'
            },
            {
               key: 'youtube',
               name: 'Youtube',
               link: 'https://bit.ly/YouTubeEmpaticoseu'
            },
            {
               key: 'linkedin',
               name: 'Linkedin',
               link: 'https://www.linkedin.com/company/empaticoseu/'
            },
         ],
      }
   },
   methods: {
      async handleSubmit() {
         this.sendingEmail = true

         window.emailjs.send(
            "service_empaticos",
            "template_empaticos",
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

.Contact {
   display: flex;
   width: 100%;

   @media (max-width: $md) {
      flex-direction: column;
   }

   .Form {
      min-width: 400px;

      @media (max-width: $lg) {
         min-width: 300px;
      }

      @media (max-width: $md) {
         min-width: 100%;
      }

      .Title {
         font-size: 2rem;
         font-weight: bold;
         margin-bottom: 30px;

         @media (max-width: $md) {
            font-size: 1.6rem;
         }
      }

      .Field {
         &+.Field {
            margin-top: 15px;
         }
      }

      .Notification {
         margin-bottom: 20px;
         line-height: 1.3rem;

         &.error {
            background: tomato;
            padding: 10px;
            border-radius: 5px;
         }
      }

      .Button {
         padding: 13px 24px 10px 24px;
         border-radius: 10px;
         border: 2px solid transparent;
         background: rgba($black, .1);
         font-size: 1rem;
         font-weight: bold;
         line-height: 1rem;
         outline: none;
         cursor: pointer;
         color: $primary;

         &:hover {
            background: $secondary;
            // box-shadow: 0px 2px 10px rgba(103, 94, 134, 0.3);
         }

         &.disabled {
            background: $gray-04;
            border-color: $gray-04;
            color: $gray-03;

            &:hover {
               cursor: default;
            }
         }
      }
   }

   .Wrapper {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      position: relative;
      width: 100%;
      margin-left: 100px;

      @media (max-width: $lg) {
         margin-left: 50px;
      }

      @media (max-width: $md) {
         margin-left: 0px;
         margin-top: 100px;
      }

      img {
         width: 200px;
         position: absolute;
         top: -30px;
         right: 50px;
         transition: all .5s ease-in-out;

         &:hover {
            transform: translateX(-50px) translateY(-20px) scale(1.05);
         }

         @media (max-width: $md) {
            width: 180px;
            top: -120px;
            right: 0px;
         }

         @media (max-width: $sm) {
            width: 130px;
            top: -110px;
         }
      }

      p {
         font-size: 1.3rem;
         font-weight: bold;
      }

      .SocialMedia {
         // flex: 1;
         width: 100%;
         display: flex;
         justify-content: space-between;
         margin-top: 40px;

         // align-items: flex-end;
         .Social {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: all .5s ease-in-out;

            &:hover {
               transform: scale(1.2);

               .Figure .Diamond {
                  transform: rotate(90deg);
                  background: $secondary;
                  mix-blend-mode: normal;
               }
            }

            .Figure {
               display: flex;
               align-items: center;
               justify-content: center;

               .Diamond {
                  max-width: 70px;
                  max-height: 70px;
                  min-width: 70px;
                  min-height: 70px;

                  @media (max-width: $lg) {
                     max-width: 50px;
                     max-height: 50px;
                     min-width: 50px;
                     min-height: 50px;
                  }

                  border-radius: 5px;
                  transform: rotate(45deg);
                  background: rgba($white, .1);
                  mix-blend-mode: overlay;
                  position: relative;
                  transition: all .5s ease-in-out;

                  &Icon {
                     position: absolute;
                     mix-blend-mode: none;
                  }
               }
            }

            .Name {
               margin-top: 20px;
               font-size: 1rem;
               font-weight: normal;

               @media (max-width: $sm) {
                  font-size: .7rem;
               }
            }
         }
      }
   }
}
</style>
