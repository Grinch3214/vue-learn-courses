<template>
  <div class="article-page">
      <h1>Article Page</h1>
      <p>Value from params: {{ $route.params.id }}</p>
      <p>Value from params: {{ $route.params.userId }}</p>
  </div>
</template>

<script>

export default {
  name: 'ArticlePage',
  // props: ['userId', 'id'],
  created() {
    console.log('ArticlePage: ', this.$route)
  }
}

</script>
