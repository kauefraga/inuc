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
  const response = await fetch(`${baseUrl}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  });
  const json = await response.json();

  console.log(json["token"]);
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
        <h1 class="text-center text-xl text-zinc-900">Crie sua conta</h1>
      </header>

      <div class="flex flex-col gap-2">
        <FormInput
          id="username"
          type="text"
          label="Nome/apelido"
          placeholder="joaosilva"
          v-model="user.name"
        />
        <FormInput
          id="email"
          type="email"
          label="E-mail"
          placeholder="joao.silva@gmail.com"
          v-model="user.email"
        />
        <FormInput
          id="password"
          type="password"
          label="Senha"
          placeholder="senh4mu1t0f0rtedoj040"
          v-model="user.password"
        />
      </div>

      <button
        class="
          border-2 border-transparent p-2 rounded-sm
          bg-indigo-800 text-white hover:border-white active:bg-indigo-700 transition
        "
      >
        Criar conta
      </button>
    </form>
  </main>
</template>
