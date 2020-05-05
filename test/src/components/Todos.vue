<template>
  <div>
    <h1>hello</h1>
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo',todo.id)" />
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
  name: 'Todos',
  components: {
    TodoItem
  },
  props: ['todos']
}
</script>

<style scoped></style>
