# vuejs-proj

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

<h3># ReactProject</h3>
<ul><li>React Learning (JSX)
<li>Проект повторяет Todo (с изменениями - не кажется верным всё писать в одном файле)
<li>Были проблемы с todoStorage... (не ясно что это за объект, поэтому пришлось подключить его как в образце)<br>
<li>Можно добавлять/удалять/изменять задания.<br>
<li>Внизу идет подсчет заданий через $refs.<br>
(Будет время доработаю проект чисто для себя.)
</ul>

<h3>#Структура</h3>
<ul><li>main.js - базовый + рендер.
<li>store.js - хранилище браузера (видимо).
<li>App.vue - класс приложения. (Родитель)
  <li>Todos.vue - класс списка дел (обработчики там же)   //также было бы неплохо подумать над классом single элемента из списка
  <li>Footer.vue - класс футера
  <li>Header.vue - соответственно...</ul>

<h3>#Заметки</h3>
<ul>Не очень удобно писать style в каждом классе. (запутаться можно через некоторое время).
Оказалось удобно работать только с проектом, собранном через npm.
Не создавались компоненты через подключение ссылки в js-файле, при работе без проекта.
Vue js нужен ES6</ul>
