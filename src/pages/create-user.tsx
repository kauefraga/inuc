import { FormEvent, useState } from 'react';

function CreateUserPage() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <main className="flex h-screen items-center justify-center">
      <form
        className="flex flex-col gap-5 rounded-lg bg-zinc-900 p-6 text-white md:p-8 md:text-xl"
        onSubmit={onSubmit}
      >
        <h1 className="text-yellow-400 md:text-2xl">Crie sua conta</h1>

        <div className="flex flex-col gap-1">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Beltrano"
            className="rounded-sm bg-zinc-800 p-3"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            placeholder="beltrano@exemplo.com"
            className="rounded-sm bg-zinc-800 p-3"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="beltrano1senha2ultra3segura4"
            className="rounded-sm bg-zinc-800 p-3"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>

        <div className="flex justify-end gap-8">
          <button type="reset">Cancelar</button>
          <button className="rounded bg-violet-800 p-3 transition-colors hover:bg-violet-700">
            Criar
          </button>
        </div>
      </form>
    </main>
  );
}

export default CreateUserPage;
