/**
 *
 */
AFRAME.registerComponent('audioanalyser-volume-bind', {
  schema: {
    analyserEl: { type: 'selector' },
    component: { type: 'string' },
    property: { type: 'string' },
    max: { type: 'number' },
    multiplier: { type: 'number' },
  },

  tick: function () {
    const data = this.data;
    const el = this.el;

    const analyserComponent = data.analyserEl.components.audioanalyser;
    if (!analyserComponent.analyser) {
      return;
    }

    const value = Math.min(data.max, analyserComponent.volume * data.multiplier);
    el.setAttribute(data.component, data.property, value);
  },
});
