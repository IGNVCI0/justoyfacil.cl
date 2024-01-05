<template>
  <v-footer
    class="text-center d-flex flex-column"
    color="#052467"
  >
    <!-- Contenido para pantallas grandes -->
    <div class="d-none d-md-flex w-100 align-center px-4">
      <v-text class="text-body-2">Puedes seguirnos a través de nuestras redes sociales!</v-text>
      <v-spacer></v-spacer>
      <v-btn
        v-for="(icon, index) in icons"
        :key="index"
        class="mx-2 my-5"
        :icon="icon.icon"
        variant="plain"
        size="small"
        @click="redirectToLink(icon.link)"
      ></v-btn>
    </div>

    <!-- Contenido para pantallas pequeñas -->
    <div class="d-flex d-md-none flex-column align-center px-4">
      <v-text class="text-body-2 ma-3">Puedes seguirnos a través de nuestras redes sociales!</v-text>
      <div class="d-flex flex-row">
        <v-btn
          v-for="(icon, index) in icons"
          :key="index"
          class="mx-2 my-2"
          :icon="icon.icon"
          variant="plain"
          size="small"
          @click="redirectToLink(icon.link)"
        ></v-btn>
      </div>
    </div>

    <div class="pt-0"></div>

    <v-divider></v-divider>

    <div class="px-4 py-2">
      {{ new Date().getFullYear() }} — <strong>Justo y Facil</strong>
    </div>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        icon: 'mdi-facebook',
        link: 'https://www.facebook.com/justoyfacil.cl/',
      },
      {
        icon: 'mdi-instagram',
        link: 'https://www.instagram.com/justoyfacil.cl/',
      },
      {
        icon: 'mdi-map-marker-outline',
        link: 'https://maps.app.goo.gl/FVvmry7BEsDmEywx6/',
      },
      {
        icon: 'mdi-whatsapp',
        link: 'https://wa.link/wtbk07',
      },
    ],
  }),
  methods: {
    redirectToLink(link) {
      window.open(link, '_blank'); // Abre el enlace en una nueva pestaña
    },
  },
};
</script>
