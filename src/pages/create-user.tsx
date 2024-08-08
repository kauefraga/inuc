import { FormEvent, useState } from 'react';
import { api } from '../providers/api';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

type User = {
  name: string;
  email: string;
  password: string;
};

function CreateUserPage() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const mutation = useMutation({
    mutationFn: async (user: User) => {
      return api.url('/v1/user/create').json(user).post().res();
    },
    onSuccess: () => navigate('/private'),
    onError: (error) => console.error(error),
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate(user);
  };

  return (
    <main className="flex h-screen items-center justify-center">
      <form
        className="flex w-full max-w-72 flex-col gap-6 rounded-lg bg-zinc-900 p-8 text-white md:max-w-md md:p-12 md:text-xl"
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
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder="beltrano@exemplo.com"
            className="rounded-sm bg-zinc-800 p-3"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
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
            required
          />
        </div>

        <div className="flex justify-end gap-8">
          <button type="reset" className="flex-1">
            Cancelar
          </button>
          <button className="flex-1 rounded bg-violet-800 p-3 transition-colors hover:bg-violet-700">
            Criar
          </button>
        </div>
      </form>
    </main>
  );
}

export default CreateUserPage;
