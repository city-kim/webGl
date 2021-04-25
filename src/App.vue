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
        {name: 'coin', title: '코인'}
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
  nav{
    width:100%;
    position: fixed;
    top:0;
    left:0;
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
</style>