<template>
  <div>
    <input
      :id="id"
      type="range"
      :name="id"
      min="1"
      :max="max"
      step="1"
      :value="value"
      @change="$emit('change', $event.target.value)"
    />
    <p>
      <label :for="id">{{ labelText }}</label>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Range',

  model: {
    event: 'change',
  },

  props: {
    id: String,
    labelText: String,
    max: String,
    value: String,
  },
};
</script>

<style scoped>
input[type='range'] {
  height: 25px;
  -webkit-appearance: none;
  margin: 0;
  width: 50%;
}

input[type='range']:focus {
  outline: none;
}

input[type='range']::-webkit-slider-runnable-track {
  width: 100%;
  height: 4px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0 0 0 #000000;
  background: #eb6434;
  border-radius: 1px;
  border: 0 solid #000000;
}

input[type='range']::-webkit-slider-thumb {
  box-shadow: 0 0 0 #cccccc;
  border: 2px solid #35495e;
  height: 1.2em;
  width: 1.2em;
  border-radius: 0.6em;
  background: #eb6434;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -0.45em;
}

input[type='range']:focus::-webkit-slider-runnable-track {
  background: #eb6434;
}

input[type='range']::-moz-range-track {
  width: 100%;
  height: 4px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0 0 0 #000000;
  background: #eb6434;
  border-radius: 1px;
  border: 0 solid #000000;
}

input[type='range']::-moz-range-thumb {
  box-shadow: 0 0 0 #cccccc;
  border: 2px solid #35495e;
  height: 1em;
  width: 1em;
  border-radius: 1em;
  background: #eb6434;
  cursor: pointer;
}

input[type='range']::-ms-track {
  width: 100%;
  height: 4px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}

input[type='range']::-ms-fill-lower {
  background: #eb6434;
  border: 0 solid #000000;
  border-radius: 2px;
  box-shadow: 0 0 0 #000000;
}

input[type='range']::-ms-fill-upper {
  background: #eb6434;
  border: 0 solid #000000;
  border-radius: 2px;
  box-shadow: 0 0 0 #000000;
}

input[type='range']::-ms-thumb {
  margin-top: 1px;
  box-shadow: 0 0 0 #cccccc;
  border: 2px solid #35495e;
  height: 1em;
  width: 1em;
  border-radius: 1em;
  background: #eb6434;
  cursor: pointer;
}

input[type='range']:focus::-ms-fill-lower {
  background: #eb6434;
}

input[type='range']:focus::-ms-fill-upper {
  background: #eb6434;
}
</style>
