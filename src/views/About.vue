<template>
  <ion-page>
    <Header />
    <ion-content :fullscreen="true"> </ion-content>
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
