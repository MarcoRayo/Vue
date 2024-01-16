<template>
    <div>
        <b-container>
            <b-breadcrumb :items="items"></b-breadcrumb>
        </b-container>
        <section>
            <h2 class="text-center">Detalles De Espacio</h2>
        </section>
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
                    to: { name: 'Catalogo' }
                },
                {
                    text: 'Detalles De Espacios',
                    active: true
                }
            ]
        }
    }
}
</script>
  
<style></style>