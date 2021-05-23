AFRAME.registerComponent('toggle-on-beat', {
  schema: {
    analyserEl: { type: 'selector' },
    beat: { default: 'bass' },
    component: { default: '' },
    property: { default: 'visible' },
    value1: { default: true },
    value2: { default: false },
  },

  init: function () {
    var analyserEl = this.data.analyserEl || this.el;
    var el = this.el;
    var data = this.data;

    data.toggleState = true;

    analyserEl.addEventListener(`audioanalyser-beat-${this.data.beat}`, function () {
      data.toggleState = !data.toggleState;

      if (data.toggleState == true) {
        if (data.component !== '') {
          el.setAttribute(data.component, data.property, data.value1);
        } else {
          el.setAttribute(data.property, data.value1);
        }
      } else {
        if (data.component !== '') {
          el.setAttribute(data.component, data.property, data.value2);
        } else {
          el.setAttribute(data.property, data.value2);
        }
      }
    });
  },
});
