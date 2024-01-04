<template>
  <v-container fluid class="pt-14 my-6">
    <div>
      <h1 class="text-center my-8 font-weight-light title">Nuestros Contactos
        <v-divider
          :thickness="2"
          length="300"
          class="border-opacity-75 mx-auto"
          color="#052467"
        ></v-divider>
      </h1>
    </div>
     <!-- Alerta de éxito -->
     <v-alert v-if="successMessage" variant="tonal" type="success" class="my-4" closable @input="clearMessages" location="top center">
      {{ successMessage }}
    </v-alert>

    <!-- Alerta de error -->
    <v-alert v-if="errorMessage" variant="tonal" type="error" class="my-4" closable @input="clearMessages" location="top center">
      {{ errorMessage }}
    </v-alert>


    <!--CARD CONTACTO-->
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        variant="flat"
        class="mx-12 pa-4 my-auto card-hover"
        rounded="lg"
        :elevation="isHovering ? 24 : 15"
        v-bind="props"
        :style="{ backgroundColor: isHovering ? '#052467': 'white' , color: isHovering ? 'white' : '#052467' }"
      >
        <v-row justify="center">
          <v-col v-for="(item, index) in leftItems" :key="index" cols="12" sm="6" md="4" lg="2" align="center">
            <v-card-item class="pa-2 my-10 mx-6  text-center">
              <v-col cols="auto">
                <v-btn
                  :icon="item.icon"
                  size="x-large"
                  class="px-4 buttoncontact mb-4 pulse"
                  variant="outlined"
                  style="font-size: 1.4em"
                  :style="{ color: isHovering ? 'white' : '#052467' }"
                  v-if="item.icon === 'mdi-email'"
                  @click="openEmailDialog(index)"
                ></v-btn>
                <v-btn
                  v-else
                  :icon="item.icon"
                  size="x-large"
                  class="px-4 buttoncontact mb-4 pulse"
                  variant="outlined"
                  style="font-size: 1.4em"
                  :style="{ color: isHovering ? 'white' : '#052467' }"
                  :href="item.link"
                  target="_blank"
                ></v-btn>
              </v-col>
              <v-card-title :style="{ color: isHovering ? 'white' : '#052467' }">{{ item.title }}</v-card-title>
              <v-card-subtitle :style="{ color: isHovering ? 'white' : '#052467' }">{{ item.subtitle1 }}</v-card-subtitle>
              <v-card-subtitle v-if="item.subtitle2" :style="{ color: isHovering ? 'white' : '#052467' }">{{ item.subtitle2 }}</v-card-subtitle>
            </v-card-item>
          </v-col>
        </v-row>
        <v-divider
          :thickness="2"
          class="border-opacity-75 ma-auto mb-12 mx-12"
          :style="{ backgroundColor: isHovering ? 'white' : '#052467' }"
        ></v-divider>
        <v-row fluid>
          <!-- Lado Derecho con Mapa -->
          <v-col cols="12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.475365783272!2d-70.6388341!3d-33.5150243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662da915b5a3a2b%3A0xa0017cf69ebbc505!2sTannenbaum%20542%2C%208930703%20San%20Miguel%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1701660067353!5m2!1ses-419!2scl"
              width="100%"
              height="400"
              class="pa-7"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </v-col>
        </v-row>
      </v-card>
    </v-hover>
    
    <!-- Agregamos el diálogo para el correo electrónico -->
    <v-dialog v-model="dialogVisible" max-width="600">
      <v-card variant="flat" class="pa-3" persistent>
        <v-card-title class="text-h5 my-4 text-center">Formulario de Correo
          <v-divider
          :thickness="2"
          length="250"
          class="border-opacity-75 mx-auto"
          color="#052467"
        ></v-divider>
        </v-card-title>
        <v-card-text>
          <!-- Campos del formulario asociados a la plantilla de EmailJS -->
          <v-text-field v-model="selectedEmail.from_name" prepend-icon="mdi-account" clearable :rules="[rules.required]" label="Nombre" @input="validateForm" style="color: #052467;"></v-text-field>
          <v-text-field v-model="selectedEmail.email_id" prepend-icon="mdi-email" clearable :rules="[rules.required, rules.email]" label="Correo Electrónico" @input="validateForm" style="color: #052467;"></v-text-field>
          <v-text-field v-model="selectedEmail.subject" prepend-icon="mdi-pencil" clearable :rules="[rules.required]" label="Asunto" @input="validateForm" style="color: #052467;"></v-text-field>
          <v-textarea v-model="selectedEmail.message" prepend-icon="mdi-text-long" clearable :rules="[rules.required, rules.message]" label="Mensaje" @input="validateForm" style="color: #052467;"></v-textarea>
        </v-card-text>
        <v-card-actions>
          <!-- Botones del formulario -->
          <v-btn @click="sendEmail" color="#052467" variant="text" :disabled="!formValid">Enviar Correo</v-btn>
          <v-btn @click="closeDialog" color="#052467" variant="text">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data: () => ({
    rules: {
        required: value => !!value || 'Este campo es requerido para enviar el correo',
        email: value => {
          const emailRegex = /.+@.+\..+/;
          return emailRegex.test(value) || 'Ingresa un correo electrónico válido';
        },
        message: value => (value && value.length >= 10) || 'El mensaje debe tener al menos 10 caracteres',
      },
    leftItems: [
      {
        icon: "mdi-map-marker-outline",
        title: "Direccion:",
        subtitle1: "Tannembaum 542",
        subtitle2: "San Miguel, Santiago",
        link: "https://maps.app.goo.gl/FVvmry7BEsDmEywx6/",
      },
      {
        icon: "mdi-instagram",
        title: "Instagram:",
        subtitle1: "@justoyfacil.cl",
        link: "https://www.instagram.com/justoyfacil.cl/",
      },
      {
        icon: "mdi-whatsapp",
        title: "Whatsapp:",
        subtitle1: "+569 5632 0147",
        subtitle2: "+569 8743 0285",
        link: "https://wa.link/wtbk07",
      },
      {
        icon: "mdi-facebook",
        title: "Facebook:",
        subtitle1: "facebook.com/justoyfacil.cl",
        link: "https://www.facebook.com/justoyfacil.cl/",
      },
      {
        icon: "mdi-email",
        title: "Gmail:",
        subtitle1: "Haz click y Consultanos.",
      },
    ],
    dialogVisible: false,
    selectedEmail: {
      from_name: '',
      email_id: '',
      subject: '',
      message: '',
    },
    successMessage: '',
    errorMessage: '',
    formValid: false,
  }),
  created() {
    // Configuración de EmailJS con tu ID de usuario
    emailjs.init("UmJQ_fb9_urHNrOc_");
  },

  methods:{

    openEmailDialog(index) {
      if (this.leftItems[index].icon === 'mdi-email') {
        this.selectedEmail.index = index;
        this.selectedEmail.from_name = ''; 
        this.selectedEmail.email_id = '';
        this.selectedEmail.subject = '';   
        this.selectedEmail.message = '';
        this.dialogVisible = true;
      }
    },
    
    sendEmail() {

      const serviceId = 'service_z2v0bku'; 
      const templateId = 'template_vuftido'; 

      // Datos del correo a enviar
      const emailData = {
        from_name: this.selectedEmail.from_name,
        email_id: this.selectedEmail.email_id,
        subject: this.selectedEmail.subject,
        message: this.selectedEmail.message,
      };

      // Envía el correo usando EmailJS
      emailjs.send(serviceId, templateId, emailData)
        .then((response) => {
          console.log('Correo enviado con éxito:', response);
          this.successMessage = 'Correo enviado con éxito';
          // Puedes realizar otras acciones después del envío exitoso
          this.closeDialog();
        })
        .catch((error) => {
          console.error('Error al enviar el correo:', error);
          this.errorMessage = 'Error al enviar el correo';
        });
    },


    closeDialog() {
      this.dialogVisible = false;
    },

    clearMessages() {
      this.successMessage = '';
      this.errorMessage = '';
    },

    validateForm() {
    // Verifica si todos los campos del formulario son válidos
    this.formValid =
      this.rules.required(this.selectedEmail.from_name) === true &&
      this.rules.email(this.selectedEmail.email_id) === true &&
      this.rules.required(this.selectedEmail.subject) === true &&
      this.rules.message(this.selectedEmail.message) === true;
  },
  },  
};
</script>

<style scoped>
.card-hover:hover {
  transform: scale(1.03);
  transition: all 0.6s ease-out;
}

.pulse {
  animation: pulse-animation 1s infinite;
}

@keyframes pulse-animation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.card-hover {
  transition: background-color 0.9s, color 0.9s;
}
</style>


