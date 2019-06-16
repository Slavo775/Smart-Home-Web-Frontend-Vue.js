<template>
    <input type="text" :name="this.name" :id="this.id" v-model="vModel">
</template>

<script>
    export default {
        name: "add-button",
        props: ['name', 'id', 'vModel']
    }
</script>

<style scoped>

</style>
