<template>
  <div>
    <ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" :pixelRatio="2" id="map">

      <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" :projection="projection" />

      <ol-tile-layer>
        <ol-source-osm />
      </ol-tile-layer>

      <ol-vector-layer>
        <ol-source-vector>
          <ol-feature>
            <ol-geom-point :coordinates="center"></ol-geom-point>
            <ol-style>
              <ol-style-icon :src="'/2022/imgs/sitcon-stone.png'" :scale="0.25"></ol-style-icon>
            </ol-style>
          </ol-feature>
        </ol-source-vector>
      </ol-vector-layer>
      <ol-vector-layer>
        <ol-source-vector>
          <ol-feature>
            <ol-geom-point :coordinates="[9.4001631, -66.6639189]"></ol-geom-point>
            <ol-style>
              <ol-style-icon :src="'/2022/imgs/pancake.png'" :scale="0.25"></ol-style-icon>
            </ol-style>
          </ol-feature>
        </ol-source-vector>
      </ol-vector-layer>
    </ol-map>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const projection = ref('EPSG:4326')
const center = ref([121.6116, 25.0410])
const zoom = ref(15)
const rotation = ref(0)
</script>
<style lang="sass">
#map
  height: 400px
  border-radius: 8px
  overflow: hidden
</style>