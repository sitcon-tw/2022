<template>
  <div class="map-container">
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
    <div class="attribution" v-html="attribution"></div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const projection = ref('EPSG:4326')
const center = ref([121.6116, 25.0410])
const zoom = ref(15)
const rotation = ref(0)
const attribution = ref('© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors')
</script>
<style lang="sass">
.map-container
  position: relative
  #map
    width: 100%
    aspect-ratio: 21 / 9
    border-radius: 8px
    overflow: hidden
    @media (max-width: 768px)
      width: 100%
      aspect-ratio: 1 / 1
  .attribution
    font-size: 12px
    position: absolute
    bottom: 4px
    right: 4px
    background-color: rgba(255, 255, 255, 0.8)
    padding: 4px 8px
    border-radius: 4px
    backdrop-filter: blur(2px)
    a
      color: #9c27b0
      text-decoration: none
      &:hover
        color: #9c27b0
        text-decoration: underline
</style>