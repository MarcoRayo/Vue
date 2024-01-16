<template>
  <div>
    <b-container>
      <b-breadcrumb :items="items"></b-breadcrumb>
    </b-container>
    <section>
      <h2 class="text-center">Renta Tú Espacio</h2>      
    </section>
    <div class="d-grid gap-2 col-2 mx-auto">      
      <router-link to="/Informacion" class="btn btn-outline-secondary">Información De Espacio</router-link>      
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        items: [
          {
            text: 'Inicio',
            to: { name: 'Inicio' }
          },
          {
            text: 'Renta Tú Espacio',
            active: true
          }
        ]
      }
    }
}
</script>

<style>

</style>