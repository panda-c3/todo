<template>
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold mb-4">Nuxt Todo App</h1>
      <TodoForm @add-todo="addTodo" :disabled="isLoading" />
      <UCard>
        <TodoList
          :todos="todos"
          @update-todo="updateTodo"
          @delete-todo="deleteTodo"
        />
      </UCard>
    </div>
  </template>
  
  <script setup>
  const todos = ref([]);
  
  const isLoading = ref(false);
  
  const addTodo = (newTodo) => {
    const newId = todos.value.length ? todos.value[todos.value.length - 1].id + 1 : 1;
    todos.value.push({ ...newTodo, id: newId, completed: false });
  };
  
  const updateTodo = (todo) => {
    const todoIndex = todos.value.findIndex((t) => t.id === todo.id);
    if (todoIndex !== -1) {
      todos.value[todoIndex].completed = todo.completed;
    }
  };
  
  const deleteTodo = (id) => {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  };
  
  </script>
  