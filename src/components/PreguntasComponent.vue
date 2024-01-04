<template>
  <v-container fluid class="pa-2 py-10">
    <h1 class="text-center font-weight-light title text">Preguntas Frecuentes</h1>
    <v-divider :thickness="2" length="320" class="border-opacity-75 mx-auto" color="#052467"></v-divider>
    <h2 class="text-center mx-14 my-8 font-weight-light text-md-h5 text-sm-h6">Seleccione una área para ver las preguntas frecuentes</h2>
    <!-- Agregar selección de área -->
    <v-select
      v-model="selectedArea"
      :items="uniqueAreas"
      label="Selecciona un área"
      outlined
      color="#052467"
      class="mx-12 my-8"
    ></v-select>

    <!-- Filtrar y mostrar preguntas según el área seleccionada -->
    <v-row class="mx-12">
      <v-expansion-panels v-if="filteredFAQList.length > 0" variant="popout" class="my-4">
        <v-expansion-panel v-for="question in filteredFAQList" :key="question.id">
          <v-expansion-panel-title >
            {{ question.title }}
            <template v-slot:actions="{ expanded }">
              <v-icon :color="!expanded ? '#052467' : '#c49319'" :icon="expanded ? 'mdi-check' : 'mdi-help'"></v-icon>
            </template>
          </v-expansion-panel-title>
          <v-expansion-panel-text>{{ question.answer }}</v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      faqList: [
        { id: 1, area: 'Derecho Penal', title: '¿Pregunta 1?', answer: 'Respuesta 1' },
        { id: 2, area: 'Derecho Penal', title: '¿Pregunta 1?', answer: 'Respuesta 1' },
        { id: 3, area: 'Derecho Civil', title: '¿Pregunta 1?', answer: 'Respuesta 1' },
        { id: 4, area: 'Derecho Civil', title: '¿Pregunta 2?', answer: 'Respuesta 2' },
        { id: 5, area: 'Derecho Laboral', title: '¿Pregunta 1?', answer: 'Respuesta 1' },
        { id: 6, area: 'Derecho Laboral', title: '¿Pregunta 2?', answer: 'Respuesta 2' },
        { id: 7, area: 'Derecho Familia', title: '¿Pregunta 1?', answer: 'Respuesta 1' },
        { id: 8, area: 'Derecho Familia', title: '¿Pregunta 2?', answer: 'Respuesta 2' },
        { id: 9, area: 'Derecho Administrativo', title: '¿Pregunta 1?', answer: 'Respuesta 1' },
        { id: 10, area: 'Derecho Administrativo', title: '¿Pregunta 2?', answer: 'Respuesta 2' },
        { id: 11, area: 'Derecho Inmobiliario', title: '¿Pregunta 1?', answer: 'Respuesta 1' },
        { id: 12, area: 'Derecho Inmobiliario', title: '¿Pregunta 2?', answer: 'Respuesta 2' },
        { id: 13, area: 'Derecho Migratorio', title: '¿Pregunta 1?', answer: 'Respuesta 1' },
        { id: 14, area: 'Derecho Migratorio', title: '¿Pregunta 2?', answer: 'Respuesta 2' },
      ],
      selectedArea: null,
    };
  },
  computed: {
    uniqueAreas() {
      // Obtener áreas únicas de la lista de preguntas
      return [...new Set(this.faqList.map((question) => question.area))];
    },
    filteredFAQList() {
      // Filtrar preguntas por el área seleccionada
      return this.selectedArea
        ? this.faqList.filter((question) => question.area === this.selectedArea)
        : [];
    },
  },
};
</script>

<style scoped>
</style>
