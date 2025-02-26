"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link" 


export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    try {
      await axios.post("http://localhost:3006/auth/register", { email, password });
      alert("Usuário registrado com sucesso!");
    } catch (error) {
      alert({error, mensage:"Erro ao registrar usuário."});
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-96">
      <h2 className="text-2xl font-bold mb-4">Registro</h2>
      <form onSubmit={handleRegister}>
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
        <input
          type="password"
          placeholder="Confirme sua senha"
          className="w-full p-2 border rounded mb-2"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded w-full">Registrar</button>

      <div className="flex flex-row items-center justify-center">
      <Link href="/login">
        <p className="px-4 py-2 rounded-md">Login</p>        
      </Link>
      <Link href="/">
        <p className="px-4 py-2 rounded-md">Home</p>
      </Link>
      </div>
      </form>
    </div>
  );
}
