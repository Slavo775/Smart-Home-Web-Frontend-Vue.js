<template>
    <div class = "add-form-container">
    <add-form-container
            :inputs="inputData"
            :button-text="'Odoslať'"
            :box-title="'Pridaj používateľa'"
    >
    </add-form-container>
    </div>
</template>

<script>
    import AddFormContainer from "../components/containers/add-form-container";
    export default {
        name: "add-user",
        components: {AddFormContainer},
        data(){
            return{
                inputData: {
                    1: {
                        input_id: 'user_name',
                        labelText: 'Meno',
                        model: 'name',
                    },
                },
            }
        }
    }
</script>

<style lang="scss">
    @import "~@/Shared.scss"
</style>
