export default function Login() {
  return (
    <main className="flex-1 flex justify-center items-center h-full px-5">
      <div className="relative bg-indigo-950 px-20 py-10 rounded-2xl w-auto max-w-full ring-2 ring-violet-800 before:absolute before:inset-0 before:-z-10 before:blur-md before:bg-violet-800 before:rounded-2xl">
        <h2 className="font-poppins text-violet-50 mb-8 mt-3 text-2xl">
          E aí, bora meter um <span className="font-shrikhand text-3xl text-violet-600">Treinão</span>?
        </h2>
        <div className="mb-5">
          <label for="usernameInput" className="block mb-2 text-md font-poppins text-violet-50">
            Usuário
          </label>
          <input type="text" id="usernameInput" className="bg-violet-50 border border-violet-300-300 text-black text-md rounded-lg focus:ring-indigo-900 focus:border-indigo-900 block w-full p-2.5" />
        </div>
        <div className="mb-8">
          <label for="passwordInput" className="block mb-2 text-md font-poppins text-violet-50">
            Senha
          </label>
          <input type="password" id="passwordInput" className="bg-violet-50 border border-violet-300-300 text-black text-md rounded-lg focus:ring-indigo-900 focus:border-indigo-900 block w-full p-2.5" />
        </div>
        <div className="flex justify-center items-center">
          <button type="submit" class="font-poppins text-violet-50 bg-violet-800 hover:bg-violet-900 focus:ring-4 focus:ring-violet-950 font-medium rounded-lg text-md px-5 py-2.5 focus:outline-none">
            Log in
          </button>
        </div>
      </div>
    </main>
  );
}
