import Link from "next/link" 

export default function HomePage() {
 return(
  <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
    <h1 className="text-3xl font-bold">Bem-vindo ao DailyTask!</h1>
    <p className="mt-2 text-lg">Organize suas tarefas de forma simples e eficiente.</p>

    <div className="mt-4 flex space-x-4">
      <Link href="/login">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Login</button>
      </Link>

      <Link href="/register">
        <button className="px-4 py-2 bg-green-500 text-white rounded-md">Registrar</button>
      </Link>

    </div>
  </main>
   
 )
}
