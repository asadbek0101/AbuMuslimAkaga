<template>
  <v-app>
    <v-app-bar app style="padding: 0 40px">
      <div>
        <h1>
          <v-icon style="font-size: 40px; color: black">mdi-school</v-icon>
        </h1>
      </div>
      <v-spacer></v-spacer>
      <v-btn text class="ma-2" to="/">Malumotnoma</v-btn>
      <v-btn text class="ma-2" to="/tarjimahol">Tarjimai hol</v-btn>
      <v-btn text class="ma-2" to="/metodik">Metodik </v-btn>
      <v-btn text class="ma-2" to="/fanoyligi">Fan oyligi </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script></script>
