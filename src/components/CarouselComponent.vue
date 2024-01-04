<template>
  <v-container fluid class="mt-14">
    <v-carousel cycle hide-delimiter-background show-arrows="hover" style="max-width: 100%">
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover>
        <v-row class="fill-height d-flex align-center justify-center">
          <v-col cols="12" sm="8" md="6" lg="4" class="pa-auto">
            <v-card class="text-container pa-12">
              <div class="text-h4 text-h5-sm text-white d-flex justify-left">{{ item.title }}</div>
              <div class="mt-4 text-h6 text-white d-flex justify-left">{{ item.subtitle }}</div>
            <v-card-action>
              <v-btn class="ma-4" rounded="xl" size="large" color="#c38e0c" @click="contactoCarousel">Contactanos</v-btn>
              <v-btn class="ma-4" rounded="xl" size="large" color="white" variant="outlined" @click="serviciosCarousel">Más Info...</v-btn>
            </v-card-action>
            </v-card>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: 'public/carousel4-100.jpg',
          title: '¿Cansad@ de perseguir la pensión de alimentos?',
          subtitle: '¡Tenemos la solución!',
        },
        {
          src: 'public/carousel2-100.jpg',
          title: '¿Malos tratos en el trabajo?',
          subtitle: '¡Tenemos la solución!',
        },
        {
          src: 'public/carousel3-100.jpg',
          title: '¿Quieres divorciarte y tu ex se niega?',
          subtitle: '¡Tenemos la solución!',
        }, 
        {
          src: 'public/carousel1-100.jpg',
          title: 'Justo y Facil',
          subtitle: '¿Necesitas ayuda legal o la representación de un abogado?',
        },
      ],
    };
  },
  methods:{
    contactoCarousel(){
      this.$router.push({ path: '/contactanos' });
    },
    serviciosCarousel(){
      this.$router.push({ path: '/servicios' });
    }
    
  }
};
</script>

<style scoped>
  .text-container {
    background-color: rgba(0, 0, 0, 0.55);
    padding: 10px;
    border-radius: 8px;
    max-width: 700px;
    margin: 0 auto;
  }

  @media screen and (max-width: 600px) {
    .text-container {
      max-width: 300px;
      height: auto; /* Ajustar la altura en pantallas pequeñas */
    }
  }
</style>
