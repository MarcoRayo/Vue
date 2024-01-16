<template>
    <div>
        <b-container>
            <b-breadcrumb :items="items"></b-breadcrumb>
        </b-container>
        <section>
            <h2 class="text-center">Ofertar Espacio</h2>
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
                    to: { name: 'RentarEspacio' }
                },
                {
                    text: 'Informacion De Espacio',
                    to: { name: 'Informacion' }
                },
                {
                    text: 'Ofertar Espacio',
                    active: true
                }
            ]
        }
    }
}
</script>
  
<style></style>