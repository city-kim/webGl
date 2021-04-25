<template>
  <div id="bone">
    <div class="born-loading" v-show="!ui.fileLoad">LOADING...</div>
    <div id="info">REAMINS</div>
    <div class="url">
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
      ui: {
        fileLoad: false
      }
    }
  },
  beforeCreate () {
  },
  created () {
  },
  async mounted () {
    await init()
    .then((res) => {
      // console.log(res)
      this.ui.fileLoad = true
      render();
    })
    .catch((err) => {
      console.log(err)
    });
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
.born-loading {
  position: fixed;
  width:100%;
  top:20vh;
  left:0;
  z-index:10;
  font-size:30px;
  color:#fff;
  text-align: center;
}
</style>