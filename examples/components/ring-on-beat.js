/**
 * Create expanding ring on audioanalyser beat.
 */
AFRAME.registerComponent('ring-on-beat', {
  schema: {
    analyserEl: { type: 'selector' },
    beat: { default: 'bass' },
  },

  init: function () {
    const analyserEl = this.data.analyserEl || this.el;
    const el = this.el;
    const rings = (this.rings = []);

    analyserEl.addEventListener(`audioanalyser-beat-${this.data.beat}`, function () {
      const ringEl = document.createElement('a-ring');
      ringEl.setAttribute('material', 'opacity', '0.6');
      ringEl.setAttribute('position', '0 0.1 0');
      ringEl.setAttribute('rotation', '-90 0 0');
      el.appendChild(ringEl);

      ringEl.addEventListener('loaded', function () {
        rings.push(ringEl);
        setTimeout(function () {
          el.removeChild(ringEl);
          rings.splice(rings.indexOf(ringEl), 1);
        }, 2000);
      });
    });
  },

  /**
   * Expand ring radii.
   */
  tick: function () {
    this.rings.forEach(function (ringEl) {
      const scale = ringEl.getAttribute('scale');
      ringEl.setAttribute('scale', {
        x: scale.x * 1.06 + 0.05,
        y: scale.y * 1.06 + 0.05,
        z: scale.z,
      });
    });
  },
});
