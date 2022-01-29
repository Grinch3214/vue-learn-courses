<template>
  <div class="admin-panel-page">
    <div class="admin-panel__header"></div>
    <div class="admin-panel__main">
      <div class="admin-panel__side-bar">
        <ul>
          <li>
            <router-link
              :to="{ name: 'StartAdminPanel' }"
            >
              Start
            </router-link>
          </li>
          <li>
            <router-link
              :to="{
                name: 'articlePage',
                params: {
                  userId: 45,
                  id: 2
                }
              }"
            >
              Posts
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'AutorInfoAdminPanel' }"
            >
              Autor Info
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'UsersAdminPanel' }"
            >
              Users
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ path: '/admin-panel/comments' }"
            >
              Comments
            </router-link>
          </li>
        </ul>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>

export default {
  name: 'AdminPanelPage'
}

</script>

<style>
.admin-panel__main{
  display: flex;
}
.admin-panel__side-bar{
  width: 300px;
}
</style>
