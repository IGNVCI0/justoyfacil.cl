<template>
  <v-parallax
    src="/img/pexels-ekaterina-bolovtsova-6077326.jpg"
    height="300"
    class="mx-5 d-flex justify-center align-center" 
    style="object-fit: cover;"
    elevation="10"
  >
  <div class="text-white d-flex justify-center align-center">
    <h1 class="text-h2 font-weight-thin text-center">
        Quienes Somos
    </h1>
  </div>
  </v-parallax>
  <v-container fluid elevation="0" class="pa-8 py-10">
    <v-row align="center" justify="center">
      <v-col v-for="(section, index) in sections" :key="index" cols="12" sm="12" md="6" lg="4">
        <v-card
          class="mx-auto card-hover"
          @mouseover="section.isHovered = true"
          @mouseleave="section.isHovered = false"
          variant="flat"
          elevation="10"
          height="100%"
          :style="{ backgroundColor: section.isHovered ? '#052467' : 'white', color: section.isHovered ? 'white' : '#052467' }"
        >
          <v-card-item class="ma-4 pa-4">
            <v-row align="center" class="text-center">
              <v-col cols="12" class="text-center">
                <v-icon size="32" :style="{ color: section.isHovered ? 'white' : '#052467' }">{{ section.icon }}</v-icon>
              </v-col>
              <v-col cols="12">
                <div>
                  <v-card-title class="text-h6 mb-2" :style="{ color: section.isHovered ? 'white' : '#052467' }">
                    {{ section.title }}
                  </v-card-title>
                  <v-divider
                    :thickness="1"
                    class="border-opacity-75 ma-auto mx-4"
                    :style="{ backgroundColor: section.isHovered ? 'white' : '#052467' }"
                  ></v-divider>
                  <v-card-text class="text-justify ma-4">{{ section.description }}</v-card-text>
                </div>
              </v-col>
            </v-row>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        {
          icon: 'mdi-account-group',
          title: 'Quienes Somos',
          subtitle: 'Subtítulo de la sección 1',
          description: ' Somos una firma legal comprometida con la premisa de proporcionar servicios legales de manera justa y accesible. Nos esforzamos por ofrecer soluciones jurídicas que simplifiquen y faciliten el acceso a la justicia para nuestros clientes. En Justo y Fácil, creemos en la transparencia, la integridad y el servicio al cliente excepcional.',
          isHovered: false,
        },
        {
          icon: 'mdi-eye',
          title: 'Visión',
          subtitle: 'Subtítulo de la sección 2',
          description: 'Aspiramos a ser reconocidos como líderes en la prestación de servicios legales justos y accesibles. Buscamos ser la elección preferida de quienes buscan soluciones legales confiables y comprensibles. Nuestra visión es contribuir a una sociedad donde el acceso a la justicia no sea un obstáculo, sino un derecho para todos.excepcional.',
          isHovered: false,
        },
        {
          icon: 'mdi-target',
          title: 'Misión',
          subtitle: 'Subtítulo de la sección 3',
          description: 'Nuestra misión es proporcionar servicios legales de alta calidad de manera justa y accesible. Nos esforzamos por simplificar el proceso legal, brindando asesoramiento claro y orientación confiable. Buscamos empoderar a nuestros clientes para que tomen decisiones informadas y abogamos por la justicia con ética y profesionalismo.',
          isHovered: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.card-hover:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}
</style>