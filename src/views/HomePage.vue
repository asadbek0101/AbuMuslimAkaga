<template>
  <div class="text">
    <h1 style="text-align: center">MA'LUMOTNOMA</h1>
    <h2 style="text-align: center">Men Amonova Nilufar Zayniddinovna</h2>
    <p>2003-yil 15-avgustdan</p>
    <p>
      <strong
        >Navbahor tumanidagi 8- umumiy urta ta’lim maktabida fizika-informatika
        fani o‘qituvchisi</strong
      >
    </p>
    <v-row>
      <v-col md="6">
        <p>
          <strong>Tug‘ilgan yili: </strong><br />
          22. 08. 1976 yil
        </p>
        <p>
          <strong> Millati: </strong><br />
          o‘zbek
        </p>
        <p>
          <strong> Ma'lumoti : </strong><br />
          Oliy
        </p>
      </v-col>
      <v-col md="6">
        <p>
          <strong>Tug‘ilgan joyi: </strong><br />
          Navoiy viloyati, Nurota tumani
        </p>
        <p>
          <strong> Partaviyligi :</strong> <br />
          Yo'q
        </p>
        <p>
          <strong> Tamomlagan : </strong><br />
          2001-yil Navoiy Davlat Pedagogika Instituti
        </p>
      </v-col>
      <v-col md="6"
        ><p><strong>Ma'lumoti bo'yicha mutaxassisligi :</strong></p></v-col
      >
      <v-col md="6"><p>Fizika-informatika fani o'qituvchisi</p></v-col>
      <v-col md="6"
        ><p><strong>Ilmiy darajasi : </strong><br />Yo'q</p></v-col
      ><v-col md="6"
        ><p><strong>Ilmiy unvoni :</strong> <br />Yo'q</p></v-col
      >
      <v-col md="12"
        ><p>
          <strong>Qaysi chet tillarini biladi: </strong><br />Rus tili
        </p></v-col
      ><v-col md="12"
        ><p>
          <strong>Davlat mukofoti bilan taqdirlanganmi(qanaqa)</strong>
          <br />Yo'q
        </p></v-col
      ><v-col md="12"
        ><p>
          <strong
            >Xalq deputatlari, respublika, viloyat, shaxar va tuman Kengashi
            Deputatimi yoki boshqa saylanadigan organlarning a’zosimi (to‘liq
            ko‘rsatilishi lozim) :</strong
          ><br />Yo'q
        </p></v-col
      >
    </v-row>
    <h2 style="text-align: center">
      Amonova Nilufar Zayniddinovnaning yaqinlari haqida
    </h2>
    <h1 style="text-align: center">MA'LUMOTNOMA</h1>
    <v-row class="thead">
      <v-col md="2"><p>Qarindoshligi</p></v-col>
      <v-col md="3"><p>Familiyasi va ismi</p></v-col>
      <v-col md="2"><p>Tug'ilgan yili va joyi</p></v-col>
      <v-col md="3"><p>Ish joyi va lavozimi</p></v-col>
      <v-col md="2"><p>Yashash joyi</p></v-col>
    </v-row>
    <v-row class="tbody" v-for="(item, index) in array" :key="index">
      <v-col md="2"
        ><p>{{ item.qarindoshligi }}</p></v-col
      >
      <v-col md="3"
        ><p>{{ item.familiyaIsmi }}</p></v-col
      >
      <v-col md="2"
        ><p>{{ item.tugilganjoyi }}</p></v-col
      >
      <v-col md="3"
        ><p>{{ item.ishiLavozimi }}</p></v-col
      >
      <v-col md="2"
        ><p>{{ item.yashashJoyi }}</p></v-col
      >
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      array: [
        {
          qarindoshligi: "Otasi",
          familiyaIsmi: "Amonov Zayniddin Fayzullaevich",
          tugilganjoyi: "1945 yil Nurota shaxri",
          ishiLavozimi:
            "Nafakada (Nurota shahri “Dom pioner”da tugarak rahbari)",
          yashashJoyi: "Navoiy viloyati Nurota shaxriS.Hamroeva mahallasi 43",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.text {
  box-sizing: border-box;
  padding: 20px 50px;
  box-shadow: 0 0 1px 1px rgb(190, 182, 182);
  p {
    font-size: 20px;
  }
}
.thead {
  .col {
    border: 1px solid black;
    font-weight: bold;
  }
}
.tbody {
  .col {
    border: 1px solid black;
  }
}
</style>
