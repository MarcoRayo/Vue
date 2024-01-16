<template>
    <div>
        <b-container>
            <b-breadcrumb :items="items"></b-breadcrumb>
        </b-container>
        <section>
            <h2 class="text-center">Infomación De Espacio</h2>
        </section>
        <div class="d-grid gap-2 col-2 mx-auto">
            <router-link to="/Oferta" class="btn btn-outline-secondary">Ofertar Espacio</router-link>
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
                    text: 'Informacion De Espacio',
                    active: true
                }
            ]
        }
    }
}
</script>

<style></style>