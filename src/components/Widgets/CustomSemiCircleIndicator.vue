<template>
  <div class="semi-circle-index">
    <ion-card v-if="withCard" style="padding: 20px; text-align: center">
      <ion-card-title
        v-if="title.length"
        style="
          margin-bottom: 20px;
          text-transform: uppercase;
          font-weight: bold;
        ">
        {{ title }}
      </ion-card-title>
      <div :id="id"></div>
      <ion-grid style="margin-top: 20px; visibility: visible; padding: 0">
        <ion-row>
          <ion-col style="text-align: left">
            <h5 style="margin: 0; color: black">Jernih</h5>
          </ion-col>
          <ion-col style="text-align: right">
            <h5 style="margin: 0; color: black">Keruh</h5>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-card>
    <div style="padding: 20px" v-else :id="id"></div>
  </div>
</template>

<script>
import { IonCard, IonCardTitle, IonRow, IonCol, IonGrid } from '@ionic/vue';
import ProgressBar from 'progressbar.js';

export default {
  name: 'CustomSemiCircleIndicator',
  props: {
    id: {
      required: true,
      type: String,
    },
    withCard: {
      required: false,
      default: false,
      type: Boolean,
    },
    title: {
      required: false,
      default: '',
      type: String,
    },
    value: {
      type: Number,
      required: false,
      default: 0,
    },
    prefix: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      indicatorInstance: null,
    };
  },
  mounted() {
    this.indicatorInstance = new ProgressBar.SemiCircle(`#${this.id}`, {
      trailWidth: 2,
      color: '#3880ff',
      strokeWidth: 8,
      easing: 'easeInOut',
      duration: 800,
      text: {
        className: 'indicator-text',
      },
    });
    this.indicatorInstance.path.style.strokeLinecap = 'round';
    this.setValue(this.value);
    this.setText(0);
  },
  methods: {
    setValue(value = 0) {
      this.indicatorInstance.animate(value / 1000);
      return this;
    },
    setText(text) {
      this.indicatorInstance.setText(text);
    },
  },
  watch: {
    value(val) {
      this.setText(`${val} ppm`);
      this.setValue(val);
    },
  },
  components: {
    IonCard,
    IonCardTitle,
    IonRow,
    IonCol,
    IonGrid,
  },
};
</script>

<style>
.indicator-text {
  color: black !important;
  font-size: 40px !important;
  font-weight: bold;
  /* margin-bottom: 15px !important; */
}
</style>
