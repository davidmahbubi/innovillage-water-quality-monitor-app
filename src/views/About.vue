<template>
  <ion-page>
    <Header />
    <ion-content :fullscreen="true" style="text-align: center">
      <img
        style="max-width: 250px; width: 100%; margin-top: 80px"
        src="./../assets/logo.png" />
      <h4 style="margin-bottom: 0px; margin-top: 40px">
        Aplikasi Monitoring Kualitas Air
      </h4>
      <p style="margin-top: 8px">&copy; 2021 Tim Jinggo 3</p>
    </ion-content>
  </ion-page>
</template>

<script>
import Header from '@/components/Header.vue';
import { IonPage, IonContent } from '@ionic/vue';

export default {
  name: 'Tab2',
  components: { IonContent, IonPage, Header },
};
</script>
