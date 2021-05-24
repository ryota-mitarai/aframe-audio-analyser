AFRAME.registerComponent('color-on-beat', {
  schema: {
    analyserEl: { type: 'selector' },
    beat: { default: 'bass' },
  },

  init: function () {
    const analyserEl = this.data.analyserEl || this.el;
    const el = this.el;

    analyserEl.addEventListener(`audioanalyser-beat-${this.data.beat}`, function () {
      el.setAttribute(
        'material',
        'color',
        '#' + new THREE.Color(Math.random(), Math.random(), Math.random()).getHexString()
      );
    });
  },
});
