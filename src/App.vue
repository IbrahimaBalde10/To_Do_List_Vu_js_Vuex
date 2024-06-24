<template>
  <div id="app" class="container">
    <h1>To-Do Application using Vue.js</h1>
    <!-- // using MyTodoForm component -->
    <MyTodoForm />
    <!-- // using MyTodoList component -->
    <MyTodoList />
  </div>
</template>
<script>
import MyTodoList from "./components/MyTodoList";
import MyTodoForm from "./components/MyTodoForm";

export default {
  name: "App",
  components: {
    MyTodoList, // renders the MyTodoList component
    MyTodoForm, // renders the MyTodoForm component
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
