export default function Navbar() {
  return (
    <nav className="bg-indigo-950 py-5 font-poppins">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-violet-50 flex">
          <img className="w-10 mr-3" src="/min_logo.png" alt="Treinão logo" />
          <span className="text-4xl font-bold font-shrikhand text-violet-50">Treinão</span>
        </a>
        <ul className="flex space-x-4 gap-10 text-lg">
          <li>
            <a href="#" className="text-violet-50 hover:text-violet-200">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-violet-50 hover:text-violet-200">
              Meus treinos
            </a>
          </li>
          <li>
            <a href="#" className="text-violet-50 hover:text-violet-200">
              Criar treino
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
