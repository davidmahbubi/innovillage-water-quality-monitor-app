<template>
  <ion-page>
    <Header />
    <ion-content :fullscreen="true">
      <custom-semi-circle-indicator
        :id="'temperature-indicator'"
        :with-card="true"
        title="Tingkat Kejernihan Air"
        :value="stats.tds" />
      <colorful-line-progress
        ref="colorful-line-progress"
        :with-card="true"
        :value="stats.ph"
        title="PH Air"
        :color-portions="phMeter.colorPortions" />
    </ion-content>
  </ion-page>
</template>

<script>
import { appBaseTitle } from '@/constants/config';
import CustomSemiCircleIndicator from '../components/Widgets/CustomSemiCircleIndicator.vue';
import ColorfulLineProgress from './../components/Widgets/ColorfulLineProgress.vue';
import Header from '@/components/Header.vue';
import { IonPage, IonContent } from '@ionic/vue';
import { db } from './../storage/realtime-database';

export default {
  name: 'Home',
  data() {
    return {
      title: appBaseTitle,
      phMeter: {
        colorPortions: {
          '#d32f2f': 15,
          '#ffc107': 15,
          '#7cb342': 40,
          '#1e88e5': 15,
          '#5e35b1': 15,
        },
      },
      stats: {
        tds: 0,
        ph: 0,
      },
    };
  },
  mounted() {
    this.getTdsValue();
    this.getPhValue();
  },
  methods: {
    getTdsValue() {
      const ctx = this;
      db.ref('/realtime/tds').on('value', snapshot => {
        ctx.stats.tds = Number(snapshot.val());
      });
    },
    getPhValue() {
      const ctx = this;
      db.ref('/realtime/ph').on('value', snapshot => {
        const ph = Number(snapshot.val());
        ctx.stats.ph = (ph / 14) * 100;
        ctx.$refs['colorful-line-progress'].setText(ph.toFixed(2));
      });
    },
  },
  components: {
    IonContent,
    IonPage,
    CustomSemiCircleIndicator,
    ColorfulLineProgress,
    Header,
  },
};
</script>
