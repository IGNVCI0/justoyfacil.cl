<template>
    <v-container fluid class="pa-14">
    <div>
      <h1 class="text-center my-8 font-weight-light title">Nuestros Servicios Legales
        <v-divider
          :thickness="2"
          length="400"
          class="border-opacity-75 mx-auto"
          color="#052467"
        ></v-divider>
      </h1>
    </div>
    <v-row align="center" justify="center">
      <v-col v-for="(card, index) in cards" :key="index" cols="12" sm="12" md="6" lg="3" class="mb-4">
        <v-card
          class="mx-auto pa-4 card-hover"
          @mouseover="card.isHovered = true"
          @mouseleave="card.isHovered = false"
          variant="flat"
          elevation="3"
          :style="{ backgroundColor: card.isHovered ? '#052467' : 'white', color: card.isHovered ? 'white' : '#052467' }"
          max-height="600"
        >
          <v-card-item>
            <v-row align="center" class="text-center">
              <v-col cols="12" class="text-center">
                <v-icon size="32" :style="{ color: card.isHovered ? 'white' : '#052467' }">{{ card.icon }}</v-icon>
              </v-col>
              <v-col cols="12">
                <div>
                  <v-card-title class="text-center" :style="{ color: card.isHovered ? 'white' : '#052467' }">
                    {{ card.title }}
                  </v-card-title>
                  <v-card-subtitle class="text-center" :style="{ color: card.isHovered ? 'white' : '#052467' }">{{ card.subtitle }}</v-card-subtitle>
                  <v-divider
                    :thickness="1"
                    class="border-opacity-75 ma-auto mx-16"
                    :style="{ backgroundColor: card.isHovered ? 'white' : '#052467' }"
                  ></v-divider>
                  <v-card-text class="text-justify description mb-6" >{{ card.description }}</v-card-text>
                </div>
              </v-col>
            </v-row>
          </v-card-item>
          <v-card-actions>
            <v-btn
            variant="outlined"
            prepend-icon="mdi-eye"
            block
            size="large"
            @click="openDialog(card)"
            >
              Ver Más...
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <!-- Dialog para mostrar más información -->
    <v-dialog v-model="dialogVisible" max-width="800" class="mx-auto">
      <v-card variant="flat" class="pa-3 d-flex flex-column">
        <v-img :src="selectedCard.imageUrl" rounded="lg" class="mb-4" cover width="100%"></v-img>
        <v-card-title class="ma-3 text-h6 text-sm-h6" color="#052467">
          <v-icon size="32" class="mr-2" color="#052467">{{ selectedCard.icon }}</v-icon>
          {{ selectedCard.title }}
        </v-card-title>
        <v-card-text class="mx-3 text-subtitle-2 font-weight-thin text-medium-emphasis">{{ selectedCard.subtitle }}</v-card-text>
        <v-card-text class="mx-3 mb-4 text-justify body-2">{{ selectedCard.description }}</v-card-text>
        <v-divider
          :thickness="1"
          class="border-opacity-75 mx-3 my-4"
          color="#052467"
        ></v-divider>
        <v-title class="ml-8 text-h6 text-sm-h6">
          <v-icon size="32" class="mr-2" color="#052467">mdi-account-tie</v-icon>
          Servicios:</v-title>
        <v-card-text class="mx-3">
          <ul>
            <li v-for="service in selectedCard.services" :key="service" 
            class="text-subtitle-2"
            >
              <v-icon size="24" class="mr-2" color="#052467">mdi-check</v-icon> {{ service }}
            </li>
          </ul>
        </v-card-text>
        <v-card-actions class="mt-3 mx-3">
          <v-btn @click="closeDialog" color="#052467" variant="text" size="large">Cerrar</v-btn>
          <v-btn @click="contactanosDialog" color="#c38e0c" variant="text" size="large">Contactanos</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
  </template>
  
    <script>
      export default {
        data: () => ({
          model: null,
          selectedCard: null,
          dialogVisible: false,
          cards: [
          { 
            id: 1,
            show: false,
            icon:'mdi-gavel',
            imageUrl: '/img/pexels-ekaterina-bolovtsova-6077326.jpg',
            title: 'Derecho Penal',
            subtitle: 'Defensa en Casos Criminales.',
            description: 'En el ámbito del Derecho Penal, nos destacamos por brindar una defensa legal incansable. Nuestro equipo de abogados expertos está comprometido con proteger tus derechos y libertades. Ya sea que enfrentes acusaciones penales menores o casos más complejos, estamos aquí para representarte con dedicación y experiencia.',
            services:[
              'Apropiación Indebida',
              'Estafas',
              'Injurias y Calumnias',
              'Manejo en Estado de Ebriedad',
            ]
          },
          { 
            id: 2,
            show: false,
            icon:'mdi-scale-balance',
            imageUrl: '/img/abogados01.jpg',
            title: 'Derecho Civil',
            subtitle: 'Resolviendo Disputas y Protegiendo Intereses.',
            description: 'En el ámbito del Derecho Civil, nuestro objetivo es resolver disputas y proteger tus intereses legales. Ya sea en asuntos contractuales, litigios comerciales o cualquier otro problema civil, nuestro equipo está preparado para ofrecer asesoramiento sólido y representación efectiva para garantizar tus derechos y lograr soluciones justas.',
            services:[
              'Litigios Civiles.',
              'Derechos del Consumidor.',
              'Responsabilidad Civil.',
              'Testamentos y Sucesiones.',
            ]
          },
          { 
            id: 3,
            show: false,
            icon:'mdi-human-male-female-child',
            imageUrl: '/img/abogadofamilia.jpg',
            title: 'Derecho Familia',
            subtitle: 'Apoyo Legal en Asuntos Familiares Sensibles.',
            description: 'En el área del Derecho de Familia, entendemos la sensibilidad de los asuntos relacionados con el hogar y la familia. Brindamos apoyo legal compasivo en casos de divorcio, custodia, adopciones y otros temas familiares. Nuestro compromiso es guiarte a través de estos momentos difíciles y proteger tus intereses y los de tus seres queridos.',
            services:[
              'Divorcios',
              'Compensación económica',
              'Alimentos Mayores y Menores',
              'Separación Judicial',
              'Cumplimiento Alimentos',
              'Violencia Intrafamiliar',
              'Medidas de Protección',
              'Salida del País',
            ]
          },
          {
            id: 4,  
            show: false,
            icon:'mdi-account-tie',
            imageUrl: '/img/pexels-khwanchai-phanthong-4175021.jpg',
            title: 'Derecho Laboral',
            subtitle: 'Protegiendo Tus Derechos en el Entorno Laboral.',
            description: 'En el ámbito del Derecho Laboral, nos dedicamos a defender tus derechos en el entorno laboral. Ya sea enfrentando problemas de discriminación, despidos injustos o conflictos laborales, nuestro equipo de abogados está listo para proporcionar asesoramiento experto y representación sólida para garantizar que tus derechos laborales estén protegidos.',
            services:[
              'Despidos Injustificados.',
              'Autodespidos.',
              'Finiquitos.',
              'Autodespidos.',
              'Acoso Laboral.',
              'Acoso Sexual.',
              'Despidos por Necesidades de la Empresa.',
            ]
          },
          { 
            id: 5,
            show: false,
            icon:'mdi-briefcase-check',
            imageUrl: '/img/derechoadministrativo.jpg',
            title: 'Derecho Administrativo',
            subtitle: 'Asesoramiento Jurídico en Asuntos Administrativos.',
            description: 'En el complejo terreno del derecho administrativo, nuestro equipo legal ofrece asesoramiento especializado para enfrentar desafíos regulatorios y disputas con entidades gubernamentales. Ya sea que necesites orientación en procedimientos administrativos o defensa legal en litigios contra el gobierno, estamos aquí para proporcionarte soluciones efectivas y proteger tus intereses.',
            services:[
              'Asesoramiento en Procedimientos Administrativos.',
              'Contratación Pública.',
              'Sanciones Administrativas.',
              'Expropiaciones.',
            ]
          },
          {
            id: 6,
            show: false,
            icon: 'mdi-home-search',
            imageUrl: '/img/abogado-malaga-inmobiliario-1.jpg',
            title: 'Derecho Inmobiliario',
            subtitle: 'Asesoramiento en Asuntos Inmobiliarios.',
            description: 'En el ámbito del Derecho Inmobiliario, ofrecemos asesoramiento legal integral para cuestiones relacionadas con bienes raíces. Ya sea en transacciones, contratos o disputas, nuestro equipo está preparado para proporcionar soluciones efectivas y proteger tus intereses inmobiliarios.',
            services:[
              'Contratos de Arrendamiento.',
              'Transacciones Inmobiliarias.',
              'Financiamiento Inmobiliario.',
              'Resolución de Disputas de Propiedad',
            ]
          },
          {
            id: 7,
            show: false,
            icon: 'mdi-earth',
            imageUrl: '/img/derecho-migratorio.jpg',
            title: 'Derecho Migratorio',
            subtitle: 'Asesoramiento en Asuntos Migratorios.',
            description: 'En el ámbito del Derecho Migratorio, brindamos asesoramiento legal para cuestiones relacionadas con inmigración y visas. Nuestro equipo está comprometido a ayudarte a navegar por el complejo proceso migratorio, asegurando que comprendas tus derechos y opciones legales.',
            services:[
              'Visas y Permisos de Residencia.',
              'Deportación y Expulsión.',
              'Empleo y Visas de Trabajo.',
            ]
          },
        ]
      }),
      methods: {
        openDialog(card) {
          this.selectedCard = card;
          this.dialogVisible = true;
        },

        closeDialog() {
          this.dialogVisible = false;
        },
        contactanosDialog() {
          this.$router.push({ path: '/contactanos' });
          this.dialogVisible = false;
        },
      },
    };
  </script>
  <style scoped>
  .card-hover:hover {
    transform: scale(1.05);
    transition: all 0.5s ease-in-out;
  }
  
  ul {
  list-style-type: none; /* Elimina los puntos de la lista */
  padding: 0; /* Elimina el relleno predeterminado de la lista */
  }

  li {
    display: flex; /* Utiliza flexbox para alinear icono y texto */
    align-items: center; /* Alinea los elementos verticalmente */
    margin-bottom: 8px; /* Ajusta el espaciado entre elementos de la lista */
  }
  .description {
  max-height: 115px; /* Ajusta según tu preferencia */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}

  </style>