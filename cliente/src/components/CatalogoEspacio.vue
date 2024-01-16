<template>
    <div>
        <b-container>
            <b-breadcrumb :items="items"></b-breadcrumb>
        </b-container>
        <section>
            <h2 class="text-center">Catalogo De Espacios</h2>
        </section>
        <div class="d-grid gap-2 col-2 mx-auto">
            <router-link to="/Detalle" class="btn btn-outline-secondary">Detalles De Espacio</router-link>
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
                    text: 'Rentar Espacio',
                    to: { name: 'RentaEspacio' }
                },
                {
                    text: 'Catalogo De Espacios',
                    active: true
                }
            ]
        }
    }
}
</script>
  
<style></style>