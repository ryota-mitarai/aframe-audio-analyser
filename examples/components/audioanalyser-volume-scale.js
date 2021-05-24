AFRAME.registerComponent('audioanalyser-volume-scale', {
  schema: {
    analyserEl: { type: 'selector' },
    multiplier: { type: 'number', default: 1 },
  },

  tick: function () {
    const analyserEl = this.data.analyserEl || this.el;
    const el = this.el;

    const analyserComponent = analyserEl.components.audioanalyser;
    if (!analyserComponent.analyser) {
      return;
    }

    const volume = analyserComponent.volume * this.data.multiplier;
    el.setAttribute('scale', {
      x: volume,
      y: volume,
      z: volume,
    });
  },
});
