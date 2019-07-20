<template>
    <div>
        <label for="selectBox"></label>
        <select id="selectBox" v-model = 'selected' v-on:change= "changeSelect()">
            <option v-for="option in options">{{option}}</option>
        </select>
        <div>{{selected}}</div>
    </div>
</template>

<script>
    export default {
        name: 'select-box',
        data() {
            return{
                selected: '',
            };

        },
        props: [
            'options',
        ],
        methods: {
            changeSelect() {
                this.$emit('select', this.selected);
            },
        },
    };
</script>

<style scoped>

</style>
