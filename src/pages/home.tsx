import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-8 rounded-lg bg-zinc-900 p-8 text-2xl text-white md:flex-row">
        <Link
          to="/user/login"
          className="p-3 decoration-2 underline-offset-2 hover:underline hover:decoration-yellow-400"
        >
          Entrar
        </Link>
        <Link
          to="/user/create"
          className="rounded bg-violet-800 p-3 transition-colors hover:bg-violet-700"
        >
          Criar conta
        </Link>
      </div>
    </main>
  );
}

export default HomePage;
