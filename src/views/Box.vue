<template>
  <div id="box">
  </div>
</template>

<script>
// import {init} from '@/webGl/webGl_coin'
import {init} from '@/webGl/webGl_box'
export default {
  name: 'coin',
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
