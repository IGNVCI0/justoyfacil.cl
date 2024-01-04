<template>
    <v-app-bar :elevation="2">
      <v-img
        class="ml-4"
        :width="isSmallScreen ? 80: 90"
        aspect-ratio="16/9"
        src="/public/logoNav.png"
      ></v-img>
      <v-spacer></v-spacer>
        <div class="mr-6">
        <v-btn
          v-for="(item, i) in items"
          :key="i"
          variant="text"
          :to="item.to"
          class="my-6 pa-4 responsive-btn"
          stacked
          prepend-icon
          size="x-small"
        >
          <v-icon class="mb-1" size="large" color="#052467">{{ item.icon }}</v-icon>
          <div class="underline-text text-caption">
            {{ item.text }}
          </div>
        </v-btn>
        </div>
        
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" class="responsive-menu"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      location="right"
      temporary
      floating
      color="#052467"
    >
      <v-list color="white">
        <v-list-item-title class=text-center>
                  Menú 
        </v-list-item-title>
        <v-list color="white">
          <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          class="ma-2 pa-2"
          color="white"
          >
          <v-list-item-content>
					  <v-list-item :prepend-icon="item.icon" class="text-white underline-text-menu"> {{ item.text }} </v-list-item>
				  </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
      isSmallScreen: false,
      items: [
        { text: 'Inicio', icon: 'mdi-home', to: '/' },
        { text: 'Servicios', icon: 'mdi-file-document-check-outline', to: '/servicios' },
        { text: 'Contactanos', icon: 'mdi-web', to: '/contactanos' },
        { text: 'Quienes Somos', icon: 'mdi-account-group-outline', to: '/quienessomos' },
      ],
    };
  },


  watch: {
    '$vuetify.breakpoint.smAndDown': function (val) {
      this.isSmallScreen = val;
    },
    
    group () {
        this.drawer = false
    },
  },
};
</script>

<style scoped>

.underline-text:hover {
  border-bottom: 2px solid #c38e0c;
  padding-bottom: 2px;
  transition: transform 0.3s ease;
  transform: translateY(-2px);
}
.underline-text-menu:hover {
  border-bottom: 2px solid white;
  padding-bottom: 2px;
  transition: transform 0.3s ease;
  transform: translateY(-2px);
}

.responsive-menu{
  display: none;
}


@media only screen and (max-width: 600px) {
  .responsive-btn {
    display: none;
  }

  .responsive-menu{
    display: inline-block;
}
}
</style>
