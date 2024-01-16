<script></script>

<template>
  <div>
    <div class="row">
      <header>
        <b-navbar toggleable="lg" type="dark" variant="dark">
          <b-navbar-brand href="#" class="col-md-9">NavBar</b-navbar-brand>

          <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>

              <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                  <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </header>
    </div>
    <div class="row">
      <div class="col-md-2 col-lg-2 min-vh-100 d-flex flex-column justify-content bg-dark">
        <p class="textoSidebar">
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" class="img-responsive" fluid thumbnail></b-img>
      </div>

      <div class="col-md-10">
        <router-view></router-view>
      </div>
    </div>


  </div>
</template>


<style scoped>
.textoSidebar {
  color: aliceblue;
  text-align: center;
}
</style>
