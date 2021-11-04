<template>
  <ion-header>
    <ion-toolbar color="primary">
      <ion-title>{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import { IonHeader, IonToolbar, IonTitle } from '@ionic/vue';
import { appBaseTitle } from '@/constants/config';

export default {
  data() {
    return {
      title: appBaseTitle,
    };
  },
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
  },
};
</script>
