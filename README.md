# aframe-audio-analyser

[![Latest NPM release](https://img.shields.io/npm/v/aframe-audio-analyser.svg)](https://www.npmjs.com/package/aframe-audio-analyser)
[![Minzipped size](https://badgen.net/bundlephobia/minzip/aframe-audio-analyser)](https://bundlephobia.com/result?p=aframe-audio-analyser)
[![License](https://img.shields.io/badge/license-MIT-007ec6.svg)](https://github.com/ryota-mitarai/aframe-audio-analyser/blob/master/LICENSE)

An [aframe](https://github.com/aframevr/aframe) component for adding audio visualizations, using Web Audio. This is an updated version of [aframe-audioanalyser-component](https://www.npmjs.com/package/aframe-audioanalyser-component), with various improvements.

Check out the [live demo](https://codesandbox.io/s/aframe-audio-analyser-example-l0i7v).

![Example gif](https://github.com/ryota-mitarai/aframe-audio-analyser/blob/master/examples/levels/preview.gif)

## Properties

| Property              | Description                                                          | Default Value |
| --------------------- | -------------------------------------------------------------------- | ------------- |
| beatStartCutoff       | Parameter for beat detection                                         | 0.8           |
| beatEndCutoff         | Parameter for beat detection                                         | 0.75          |
| cache                 | Whether or not to cache audio buffers.                               | false         |
| enableBeatDetection   | Whether or not to detect beats. Disable if not using.                | true          |
| enableLevels          | Whether or not to store frequency data. Disable if not using.        | true          |
| enableVolume          | Whether or not to calculate average volume. Disable if not using.    | true          |
| enableWaveform        | Whether or not to store waveform data. Disable if not using.         | true          |
| fftSize               | Frequency domain.                                                    | 2048          |
| smoothingTimeConstant | How smooth the frequency data is returned.                           | 0.8           |
| src                   | Selector to an audio element or path to audio file.                  | ''            |
| unique                | Whether to share the audio instance with other visualizing entities. | false         |

### Members

| Member   | Description                                                       | Type         |
| -------- | ----------------------------------------------------------------- | ------------ |
| analyser | Web Audio AnalyserNode                                            | AnalyserNode |
| volume   | Whether or not to store frequency data. Disable if not using.     | number       |
| waveform | Whether or not to calculate average volume. Disable if not using. | Uint8Array   |
| levels   | Whether or not to store waveform data. Disable if not using.      | Uint8Array   |

To access the analyser node:

```
el.components.audioanalyser.analyser;
```

### Events

| Event Name              | Description                                 |
| ----------------------- | ------------------------------------------- |
| audioanalyser-beat-low  | Low beat detected with beat detection.      |
| audioanalyser-beat-mid  | Midrange beat detected with beat detection. |
| audioanalyser-beat-high | High beat detected with beat detection.     |
| audioanalyserready      | AnalyserNode initialized.                   |

## Usage

```html
<head>
  <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-audio-analyser@1.0.0/dist/aframe-audio-analyser.umd.js"></script>
</head>
<body>
  <a-scene>
    <a-assets>
      <audio id="song" src="mysong.mp3" autoplay loop></audio>
    </a-assets>
    <a-entity audioanalyser="src: #song;" component-that-does-stuff-with-audioanalyser-data></a-entity>
  </a-scene>
</body>
```
