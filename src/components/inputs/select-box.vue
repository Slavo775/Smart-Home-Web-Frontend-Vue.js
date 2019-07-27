<template>
    <div>
        <label for="selectBox" aria-label="Select"></label>
        <select class="select"  id="selectBox" v-model = 'selected' v-on:change= "changeSelect()">
            <option v-for="option in options">{{option}}</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'select-box',
        data() {
            return{
                selected: this.options[0],
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
