<template>
    <div class="back">
        <select-box
        v-bind:options="selectOptions"
        @select="onSelect"
        ></select-box>
    <remote-button
            v-bind:action-url=arduinoIp+samsungRemote+buttonOnOff
            v-bind:icon-name=powerOff
    ></remote-button>
    <remote-button
            v-bind:action-url=arduinoIp+samsungRemote+buttonSource
            v-bind:icon-name=ellipsisH
    ></remote-button></div>
</template>

<script>

    import RemoteButton from '../components/remote-button';
    import SelectBox from '../components/select-box';

    export default {
        name: 'remotes',
        components: {SelectBox, RemoteButton},
        data() {
            return{
                arduinoIp: 'http://192.168.31.14:8080',
                samsungRemote: '/samsung',
                buttonOnOff: '/buttonON',
                buttonSource: '/buttonSource',
                powerOff: 'power-off',
                ellipsisH: 'ellipsis-h',
                selectOptions: [
                    'Samsung TV',
                    'Magio',
                    'Magio GO',
                    'Led pas',
                ],
            };
        },
        methods: {
            onSelect(select) {
                console.log(select);
            },
        },
    };
</script>

<style lang="scss">
.back{
    padding-top: 5rem;
background: #16A085;
}
</style>
