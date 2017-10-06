<template>
    <footer>
        <p>{{copyright}}</p>
    </footer>
</template>

<script>
    export default {
        data() {
            return {
                copyright: 'Copyright 2017 Vue'
            }
        },
        methods:{
        }
    }
</script>

<style scoped>
    footer{
        background: #222;
        padding: 6px;
        bottom: 0;
        position: absolute;
        width: 100%;
    }
    p{
        color: lightgreen;
        text-align: center;
    }
</style>
