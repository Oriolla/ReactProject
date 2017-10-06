<template>
    <div>
        <input class="addTodo"
                autofocus autocomplete="off"
               placeholder="What needs to be done?"
               v-model="newTodo"
               @keyup.enter="addTodo">
        <ul>
            <li v-for="todo in todos">
                <div class = "Item">
                    <input class="toggle" type="checkbox" v-model="todo.completed" @click="doneTodo(todo)">
                    <span class="todoLab" @dblclick="editTodo(todo)" v-show="!todo.visibility" >{{todo.title}}</span>
                    <input class="edit" type="text" v-model="todo.title" v-show="todo.visibility"
                           v-todo-focus="todo == editedTodo"
                           @keyup.enter="doneEdit(todo)"
                           @keyup.esc="cancelEdit(todo)">
                    <input class="btn-redo" type="button" @click="removeTodo" value="x">


                </div>

            </li>
        </ul>
        <div class = "labels">
            <label> Всего:
            <label class="todo-count" ref="count">0</label>
             /
            <label class="todo-count" ref="done">0</label>
            </label>
        </div>
    </div>
</template>

<script>

    import Store from './store.js'
    //var done = 0, count = 0;

    export default {

        data() {
            return {
            todos: todoStorage.fetch(),
                newTodo: '',
                editedTodo:'',
                visibility: false,
                beforeEditCache:'',
                completed: false
            }
        },
        methods:{
            addTodo: function(){
                var value = this.newTodo && this.newTodo.trim();
                if (!value) return;
                this.$refs.count.innerHTML++;
                this.todos.push({ title: value, completed: false });
                this.newTodo = '';
            },
            removeTodo: function (todo) {
                this.$refs.count.innerHTML--;
                var index = this.todos.indexOf(todo);
                this.todos.splice(index, 1);
            },
            editTodo: function (todo) {
                todo.visibility=true;
                this.beforeEditCache = todo.title;
                this.editedTodo = todo;
            },
            doneEdit: function(todo){
                todo.visibility=false;
                this.editedTodo = '';
                todo.title = todo.title;
                if (!todo.title) this.removeTodo(todo);
            },
            cancelEdit: function (todo) {
                todo.visibility=false;
                this.editedTodo = '';
                todo.title = this.beforeEditCache;
            },
            doneTodo: function(todo){
                if (todo.completed) this.$refs.done.innerHTML++;
                else this.$refs.done.innerHTML--;
            }
        },
        components:{
        },
        directives: {
            'todo-focus': function (el, binding) {
                if (binding.value) {
                    el.focus();
                }
            }
        },
        computed:{
            remaining: function () {
                return filters.active(this.todos).length;
            },
        }
    }
</script>

<style>
    span{
        width: 200px;
    }
    .btn-redo{
        border-radius: 0;
        background-color: #f44336;
        border: none;
        color: white;
        padding: 5px 5px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
    }
    li{
        list-style-type: none;
    }
    todo-count{
        background-color: red;

    }
    div{
        margin: 0 auto;
        display: block;
    }
    ul{
        margin: auto;
    }
    input, ul,li{
        margin: 0 auto;
    }
    .addTodo{
        display: block;
    }
    .Item{
        margin: 0 auto;
        display: block;
    }
    .labels{
        width: 100px;
    }
</style>
