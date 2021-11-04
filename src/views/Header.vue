<template>
  <ion-header>
    <ion-toolbar color="primary">
      <ion-title>{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import { appBaseTitle } from '@/constants/config';

export default {
  name: 'Header',
  data() {
    return {
      title: appBaseTitle,
    };
  },
};
</script>
