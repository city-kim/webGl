<template>
  <div>
    <nav>
      <router-link v-for="(list, index) in links" :key="index" :to="list.name">{{list.title}}</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      links: [
        {name: 'bone', title: '유적'},
        {name: 'hill', title: '교회'},
        // {name: 'box', title: '박스'}
      ]
    }
  },
  beforeCreate () {
  },
  created () {
  },
  mounted () {
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
  body{
    margin:0;
  }
  canvas{display: block;}
  nav{
    width:100%;
    position: fixed;
    top:0;
    left:0;
    z-index:100;
    text-align: center;
    a {
      display: inline-block;
      padding: 0.5rem;
      color:#333;
      background:rgba(255,255,255,0.3);
      text-decoration: none;
      transition-duration: 0.5s;
      & ~ a {
        margin-left:0.5rem;
      }
      &:hover {
        background: #fff;
      }
    }
  }
  .url{
    position: fixed;
    z-index: 1000;
    right:0;
    bottom:0;
    a {
      color:#333;
      text-decoration: none;
    }
  }
</style>