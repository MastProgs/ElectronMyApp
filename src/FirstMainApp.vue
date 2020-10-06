<template>
  <v-app>
    <v-app-bar
      app
      dark
    >

    </v-app-bar>

    <v-main>
      <FirstMainPage/>
    </v-main>
  </v-app>
</template>

<script>
import FirstMainPage from './components/FirstMainPage';

export default {
  name: 'FirstMainPageApp',

  components: {
    FirstMainPage,
  },

  data: () => ({
    //
  }),
};
</script>
