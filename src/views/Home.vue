<template>
    <div class="wrap">
      <button @click="find(item)" v-for="item in 10" :key="item">router{{item}}</button>
    </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    find(id) {
      this.$router.push({path:'/addView',query:{id:id}})
    },
  },
  created(){
  }
}
</script>
<style lang="scss">
  .Layout {
    li {
      padding: 0;
    }
  }
  input {
    border-style: none;
    background-color: #f2f2f2;
  }
  ol ,ul {
    padding-left: 0rem;
  }
  ul li {
    list-style-type: none;
    padding-left: 0px;
  }
  ol, ul, dl {
    margin-top: 0;
    margin-bottom: 0rem;
}
</style>