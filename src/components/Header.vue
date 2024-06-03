<script>
export default {};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link :to="{ name: 'home' }">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'projects' }">Progetti</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'about' }">Chi Siamo</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'contacts' }">Contattaci</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
