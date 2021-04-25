<template>
  <div id="bone">
    <div id="info">REAMINS</div>
    <div id="url">
      <a href="https://sketchfab.com/3d-models/remains-7663ab71893f44b2b6466db3c625b061" target="_blank">USED: https://sketchfab.com/3d-models/remains-7663ab71893f44b2b6466db3c625b061</a>
    </div>
  </div>
</template>

<script>
import {init, render} from '@/webGl/webGl_model'
export default {
  name: 'app',
  components: {
  },
  data () {
    return {
    }
  },
  beforeCreate () {
  },
  created () {
  },
  mounted () {
    init();
    render();
  },
  beforeDestroy () {
  },
  methods: {
  },
  computed: {
  },
  watch: {
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Tangerine');
body{
  margin:0;
}
canvas{display: block;}
#info {
	display:block;
	width: 100%;
  padding-right:10rem;
  font-family: 'Tangerine', serif;
  font-size:4rem;
  font-weight:900;
  color:rgba(255, 255, 255, 0.2);
  text-align: right;
	position: absolute;
	top: 30rem;
	z-index: 100;
  box-sizing: border-box;
}
#url{
  position: fixed;
  right:0;
  bottom:0;
  a {
    color:#333;
    text-decoration: none;
  }
}
</style>