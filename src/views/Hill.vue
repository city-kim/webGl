<template>
  <div id="hill">
    <!-- <div style="position:fixed; top:2rem; right:0;">
      <input type="range" min="-150" max="150" v-model="position.x" @change="changePosition()">
      <input type="range" min="-150" max="150" v-model="position.y" @change="changePosition()">
      <input type="range" min="-150" max="150" v-model="position.z" @change="changePosition()">
    </div> -->
    <transition name="fade">
      <article v-show="ui.table" class="view-talbe">
        <h2>TABLE</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel ante placerat, interdum mi non, euismod ante. Nulla ac eros leo. Nulla accumsan nisi ut purus fringilla, porta euismod massa mattis. Mauris ultricies arcu vitae arcu pharetra, vitae laoreet justo facilisis. Sed vitae commodo purus. Vivamus pretium, leo et bibendum molestie, velit turpis fringilla ligula, vel pulvinar ipsum nulla non arcu. Suspendisse id sapien ut arcu sollicitudin lobortis. Fusce sit amet pharetra neque. Proin et pulvinar diam. Etiam luctus, neque vel commodo ornare, erat mi lobortis odio, ac tristique neque lorem vel elit. Duis dignissim arcu id orci laoreet, nec auctor massa pellentesque. Aenean tristique augue eu leo aliquam accumsan.</p>
      </article>
    </transition>
    <transition name="fade">
      <article v-show="ui.whale" class="view-whale">
        <h2>Whale</h2>
        <p>Nulla non sagittis mauris. Curabitur porta, nisi a iaculis varius, purus dui eleifend ipsum, vel finibus odio risus et nulla. Mauris vulputate nibh erat, sit amet consectetur risus pharetra eu. Aliquam rutrum dapibus malesuada. Curabitur non congue ligula. Aenean nec eros non ipsum vulputate vehicula. Proin dictum vehicula leo quis interdum. Donec ut dictum elit.</p>
      </article>
    </transition>
    <transition name="fade">
      <article v-show="ui.statue" class="view-statue">
        <h2>statue</h2>
        <p>Nam lectus nulla, maximus at lobortis accumsan, ultricies eget turpis. Aliquam erat volutpat. Integer a commodo risus. Nulla enim arcu, vulputate vel posuere eget, ultricies sit amet eros. Praesent finibus gravida facilisis. Sed molestie ullamcorper posuere. Nullam elementum ante et dolor blandit porta. Nunc vestibulum nibh ut purus tempus blandit. Pellentesque dignissim rhoncus velit, vel pretium arcu fermentum eget. Mauris maximus ligula est, at rutrum tortor elementum quis.</p>
      </article>
    </transition>
    <div class="url">
      <a href="https://sketchfab.com/3d-models/hintze-hall-nhm-london-surface-model-b2f3e84112d04bf1844e7ac2c4423566" target="_blank">USED: https://sketchfab.com/3d-models/hintze-hall-nhm-london-surface-model-b2f3e84112d04bf1844e7ac2c4423566</a>
    </div>
  </div>
</template>

<script>
import {init, render, changePosition} from '@/webGl/webGl_hill'
export default {
  name: 'hill',
  components: {
  },
  data () {
    return {
      ui: {
        table: false,
        whale: false,
        statue: false
      },
      position: {
        x: 41,
        y: 9,
        z: -89,
      },
      scroller: 0
    }
  },
  beforeCreate () {
  },
  created () {
  },
  mounted () {
    init();
    render();
    window.addEventListener('scroll', this.changePosition);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.changePosition);
  },
  methods: {
    changePosition (e) {
      // console.log(positionChange)
      // 194, -62, -5
      // 50, -48, -9

      // -144, +14, +4
      console.log(window.scrollY)
      if (window.scrollY > 1000 && window.scrollY < 2500) {
        this.ui.table = true
      } else {
        this.ui.table = false
      }
      if (window.scrollY > 3000 && window.scrollY < 5500) {
        this.ui.whale = true
      } else {
        this.ui.whale = false
      }
      if (window.scrollY > 7000) {
        this.ui.statue = true
      } else {
        this.ui.statue = false
      }
      let postData = {
        x: (194 - (window.scrollY * 0.0288)),
        y: (-62 + (window.scrollY * 0.0028)),
        z: (-5 + (window.scrollY * 0.0008))
      }
      // console.log(postData)
      changePosition(postData)
    }
  },
  computed: {
  },
  watch: {
  }
}
</script>
<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#hill {
  height:calc(100vh + 10000px);
  canvas {
    position:fixed;
    width:100%;
    top:0;
    left:0;
  }
  article {
    max-width: 65vw;
    padding:2.5rem;
    position: fixed;
    z-index: 10;
    border:none;
    border-radius: 10px;
    background:rgba(255,255,255,0.7);
    h2, p {
      color:#333;
    }
  }
  .view-talbe {
    top:30rem;
    right:1rem;
  }
  .view-whale {
    bottom: 10rem;
    left: 1rem;
  }
  .view-statue {
    top:20rem;
    left:10rem;
  }
}
body::-webkit-scrollbar {
  display: none;
}
</style>