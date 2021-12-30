<template>
  <div id="app" class="app">
    <!-- <h1>VUE LEARN "lesson 2"</h1> -->

    <h3 :title="posts[0].id">
      {{ posts[0].title }}
    </h3>
    <p v-if="condition">первый <br />{{ posts[0].body }}</p>
    <p v-else-if="!condition">второй <br />{{ posts[1].body }}</p>
    <p v-else>Иначе</p>

    <!-- <div v-for="(post, index) of slicedPosts" :key="index" class="post-item">
      {{ index + 1 }}. {{ post.title }}
      <p v-for="(value, key, index) in post" :key="index" class="post-field">
        {{ key }}: {{ value }}
      </p>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    posts: [
      {
        userId: 1,
        id: 1,
        title: "optio ",
        body: "quo et expedita modi cum officia vel magni\ndolorib…it\nquos veniam quod sed accusamus veritatis error. Quo et expedita modi cum officia vel magni\ndolorib…it\nquos veniam quod sed accusamus veritatis error. Quo et expedita modi cum officia vel magni\ndolorib…it\nquos veniam quod sed accusamus veritatis error",
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehend…aperiam non debitis possimus qui neque nisi nulla. Est rerum tempore vitae\nsequi sint nihil reprehend…aperiam non debitis possimus qui neque nisi nulla.  Est rerum tempore vitae\nsequi sint nihil reprehend…aperiam non debitis possimus qui neque nisi nulla.",
      },
      {
        userId: 2,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis e…\nmolestiae porro eius odio et labore et velit aut. Ea molestias quasi exercitationem repellat qui ipsa sit aut. Et iusto sed quo iure\nvoluptatem occaecati omnis e…\nmolestiae porro eius odio et labore et velit aut. Ea molestias quasi exercitationem repellat qui ipsa sit aut. Et iusto sed quo iure\nvoluptatem occaecati omnis e…\nmolestiae porro eius odio et labore et velit aut.",
      },
      {
        userId: 2,
        id: 4,
        title: "eum et est occaecati",
        body: "ullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velit. Ullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velit. Ullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velit",
      },
      {
        userId: 3,
        id: 5,
        title: "nesciunt quas odio",
        body: "repudiandae veniam quaerat sunt sed\nalias aut fugi…sse voluptatibus quis\nest aut tenetur dolor neque. repudiandae veniam quaerat sunt sed\nalias aut fugi…sse voluptatibus quis\nest aut tenetur dolor neque. repudiandae veniam quaerat sunt sed\nalias aut fugi…sse voluptatibus quis\nest aut tenetur dolor neque",
      },
      {
        userId: 3,
        id: 6,
        title: "dolorem eum magni eos aperiam quia",
        body: "ut aspernatur corporis harum nihil quis provident …s\nvoluptate dolores velit et doloremque molestiae. Ut aspernatur corporis harum nihil quis provident …s\nvoluptate dolores velit et doloremque molestiae. Ut aspernatur corporis harum nihil quis provident …s\nvoluptate dolores velit et doloremque molestiae. Ut aspernatur corporis harum nihil quis provident …s\nvoluptate dolores velit et doloremque molestiae",
      },
      {
        userId: 4,
        id: 7,
        title: "magnam facilis autem",
        body: "dolore placeat quibusdam ea quo vitae\nmagni quis e…t excepturi ut quia\nsunt ut sequi eos ea sed quas. Dolore placeat quibusdam ea quo vitae\nmagni quis e…t excepturi ut quia\nsunt ut sequi eos ea sed quas. Dolore placeat quibusdam ea quo vitae\nmagni quis e…t excepturi ut quia\nsunt ut sequi eos ea sed quas. Dolore placeat quibusdam ea quo vitae\nmagni quis e…t excepturi ut quia\nsunt ut sequi eos ea sed quas",
      },
      {
        userId: 4,
        id: 8,
        title: "dolorem dolore est ipsam",
        body: "dignissimos aperiam dolorem qui eum\nfacilis quibus…\nipsam ut commodi dolor voluptatum modi aut vitae. Dignissimos aperiam dolorem qui eum\nfacilis quibus…\nipsam ut commodi dolor voluptatum modi aut vitae. Dignissimos aperiam dolorem qui eum\nfacilis quibus…\nipsam ut commodi dolor voluptatum modi aut vitae.",
      },
    ],
    condition: true,
  }),
  methods: {},
  computed: {
    slicedPosts() {
      return this.posts.slice(0, 2);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 15px;
}
h1 {
  font-size: 20px;
}
h3 {
  font-size: 18px;
}
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  color: #222622;
}
.post-field {
  color: blue;
}
.app p {
  margin-bottom: 10px;
}
</style>
