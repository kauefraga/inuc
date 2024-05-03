<script setup lang="ts">
import type { User } from '@/types/user';
import FormInput from '../components/FormInput.vue';
import { reactive } from 'vue';

const user = reactive<User>({
  email: "",
  password: "",
  name: "",
});

const baseUrl = import.meta.env.PROD
  ? 'https://inus.onrender.com'
  : 'http://localhost:3000';

const handleForm = async () => {
  console.table({
    name: user.name,
    email: user.email,
    password: user.password,
  });

  const response = await fetch(`${baseUrl}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  });
  const json = await response.json();

  console.log(json);
}
</script>

<template>
  <main class="flex justify-center items-center h-screen">
    <form
      class="
        flex flex-col
        bg-indigo-300 p-6 rounded space-y-6
        w-11/12 max-w-xs
      "
      v-on:submit.prevent="handleForm"
    >
      <header>
        <h1 class="text-xl font-medium text-zinc-900">Crie sua conta</h1>
      </header>

      <div class="flex flex-col gap-2">
        <FormInput
          id="username"
          type="text"
          placeholder="Nome de usuário"
          v-model="user.name"
        />
        <FormInput
          id="email"
          type="email"
          placeholder="E-mail"
          v-model="user.email"
        />
        <FormInput
          id="password"
          type="password"
          placeholder="Senha"
          v-model="user.password"
        />
      </div>

      <button
        class="
          bg-indigo-800 hover:bg-indigo-700 active:bg-indigo-600
          p-2 rounded-sm text-white
        "
      >
        Criar conta
      </button>
    </form>
  </main>
</template>
