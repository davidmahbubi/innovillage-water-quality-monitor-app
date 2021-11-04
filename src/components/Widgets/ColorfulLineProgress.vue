<template>
  <div class="colorful-line-progress">
    <ion-card v-if="withCard" style="padding: 20px; text-align: center">
      <ion-card-title>
        <p
          style="
            margin-bottom: 15px;
            text-transform: uppercase;
            font-weight: bold;
          "
          v-if="title">
          {{ title }}
        </p>
        <h1
          style="font-weight: bold; margin-top: 0; margin-bottom: 15px"
          ref="indicator-number">
          0
        </h1>
      </ion-card-title>
      <div ref="progress-container" class="progress-container"></div>
      <div
        class="needle-container"
        ref="progress-needle"
        style="position: relative; margin-bottom: 20px">
        <ion-icon
          :icon="caretUpOutline"
          style="
            font-size: 25px;
            margin-top: 5px;
            position: absolute;
            left: 0%;
          " />
      </div>
    </ion-card>
    <div v-else style="text-align: center" class="without-card">
      <ion-card-title>
        <p
          style="
            margin-bottom: 15px;
            text-transform: uppercase;
            font-weight: bold;
          "
          v-if="title">
          {{ title }}
        </p>
        <h1
          style="font-weight: bold; margin-top: 0; margin-bottom: 15px"
          ref="indicator-number">
          0
        </h1>
      </ion-card-title>
      <div ref="progress-container" class="progress-container"></div>
      <div
        class="needle-container"
        ref="progress-needle"
        style="position: relative; margin-bottom: 20px">
        <ion-icon
          :icon="caretUpOutline"
          style="
            font-size: 25px;
            margin-top: 5px;
            position: absolute;
            left: 0%;
          " />
      </div>
    </div>
  </div>
</template>

<script>
import { IonIcon, IonCard, IonCardTitle } from '@ionic/vue';
import { caretUpOutline } from 'ionicons/icons';

export default {
  name: 'ColorfulLineProgress',
  props: {
    colorPortions: {
      type: Object,
      required: true,
    },
    withCard: {
      type: Boolean,
      required: false,
      default: false,
    },
    value: {
      type: Number,
      required: false,
      default: 0,
    },
    title: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      caretUpOutline,
    };
  },
  mounted() {
    for (const portion in this.colorPortions) {
      const progressEl = document.createElement('div');
      progressEl.style.width = `${this.colorPortions[portion]}%`;
      progressEl.style.height = '100%';
      progressEl.style.display = 'inline-block';
      progressEl.style.backgroundColor = portion;
      this.$refs['progress-container'].append(progressEl);
      this.setValue(0);
    }
  },
  methods: {
    setValue(val) {
      const a = 94 / 100;
      this.$refs['progress-needle'].style.left = `${val * a}%`;
    },
    setText(text) {
      this.$refs['indicator-number'].innerHTML = text;
    },
  },
  watch: {
    value(val) {
      this.setValue(val);
    },
  },
  components: {
    IonIcon,
    IonCard,
    IonCardTitle,
  },
};
</script>

<style scoped>
.progress-container {
  width: 100%;
  height: 20px;
  background-color: #eeeeee;
  border-radius: 10px;
  overflow-x: hidden;
}

.needle-container {
  transition: 0.5s;
}
</style>
