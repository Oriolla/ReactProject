<template>
  <div>
    <app-header></app-header>


    <todos class="todos"></todos>
    <app-footer></app-footer>

  </div>
</template>

<script>
    import Header from './Components/Header.vue'
    import Todos from './Todos.vue'
    import Footer from './Components/Footer.vue'
    import Store from './store.js'
    /*var lightStorage = {
        storage: {},
        getItem(id) {
            return this.storage[id];
        },
        setItem(id, value) {
            return this.storage[id] = value;
        }
    }
    var keyLocal = 'vue-js'
    var todoStorage = {
        fetch: function() {
            var todos = lightStorage.getItem(keyLocal)
            return (typeof todos !== "undefined") ? JSON.parse(todos) : []
        },
        save: function(todos) {
            lightStorage.setItem(keyLocal, JSON.stringify(todos));
        }
    }*/


export default {
  data() {
    return {
        data: {

            editedTodo: null,
            visibility: 'all'
        }
    }
  },
    methods:{

    },
    components:{
        'todos': Todos,
        'app-header': Header,
        'app-footer': Footer
    }
}
</script>

<style >
  .todos{
    margin: 0 auto;
    padding: 15px;
    width: 100%;
  }
</style>
