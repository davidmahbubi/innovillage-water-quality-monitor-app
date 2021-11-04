<template>
  <ion-page>
    <Header />
    <ion-content :fullscreen="true">
      <custom-semi-circle-indicator
        :id="'temperature-indicator'"
        :with-card="true"
        title="Suhu Air"
        :value="stats.temperature" />
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
        temperature: 0,
        ph: 0,
      },
    };
  },
  mounted() {
    this.setTemperatureValue();
    this.setPhValue();
  },
  methods: {
    setTemperatureValue() {
      const ctx = this;
      setInterval(() => {
        if (ctx.stats.temperature > 0.9) ctx.stats.temperature = 0.1;
        ctx.stats.temperature += 0.1;
      }, 1000);
    },
    setPhValue() {
      const ctx = this;
      setInterval(() => {
        const ph = Math.round(Math.random() * 14);
        ctx.stats.ph = (ph / 14) * 100;
        ctx.$refs['colorful-line-progress'].setText(ph);
      }, 1000);
    },
    setColor() {},
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
