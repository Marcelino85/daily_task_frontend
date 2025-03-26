"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link" 
import Navbar from "@/components/Navbar";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
       await axios.post("http://localhost:3006/auth/login", { email, password });
      alert("Login bem-sucedido!");
      router.push("/dashboard");
    } catch (error) {
      alert({error, mensage:"Erro ao fazer login. Verifique suas credenciais"});
    }
  };

  return (
    <>
    <Navbar />
    <div className="bg-white p-6 rounded-lg shadow-md w-96">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="E-mail"
          className="w-full p-2 border rounded mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        <input
          type="password"
          placeholder="Senha"
          className="w-full p-2 border rounded mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">Entrar</button>
      <div className="flex flex-row items-center justify-center">
      <Link href="/register">
        <p className="px-4 py-2 rounded-md">Registrar</p>
      </Link>
      <Link href="/">
        <p className="px-4 py-2 rounded-md">Home</p>
      </Link>
      </div>  
        
      </form>
    </div>
    </>
  );
}
