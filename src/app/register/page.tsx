"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link" 
import { useRouter } from 'next/navigation';
import Navbar from "@/components/Navbar";



export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username:'',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false); // Estado para verificar se a mensagem é de erro ou sucesso
  
  const router = useRouter(); // Usando o useRouter do Next.js
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validação para senhas correspondentes
    if (formData.password !== formData.confirmPassword) {
      setMessage('As senhas não coincidem.');
      setIsError(true);
      return;
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      setMessage('Por favor, insira um e-mail válido.');
      setIsError(true);
      return;
    }
    if (formData.password.length < 6) {
      setMessage('A senha deve ter no mínimo 6 caracteres.');
      setIsError(true);
      return;
    }
    setMessage('');
    setIsError(false);

    try {
      const response = await axios.post("http://localhost:3006/auth/register", formData);
      if (response.status === 201) {
        const { token } = response.data;
        localStorage.removeItem('token'); // Remover token anterior, se existir
        localStorage.setItem('token', token); // Salvar o token
  
        setMessage('Registrado com sucesso!');
        setIsError(false);
      
        router.push('/dashboard'); // Alterado para redirecionar para a página de dashboard
      }
    } catch (error) {
      alert({error, message:"Erro ao registrar usuário."});
    }
  };

  return (
    <>
    <Navbar />
    <div className="bg-white p-6 rounded-lg shadow-md w-96">
      <h2 className="text-2xl font-bold mb-4">Registro</h2>

      {message && (
        <div
        id="mensagem"
        className="text-center mb-3"
        style={{ color: isError ? 'red' : 'green' }}
        >
              {message}
            </div>
          )}

      <form onSubmit={handleRegister}>
        <input
          type="text"
          name="username"
          placeholder="Nome"
          className="w-full p-2 border rounded mb-2"
          value={formData.username}
          onChange={handleChange}
          required
          />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className="w-full p-2 border rounded mb-2"
          value={formData.email}
          onChange={handleChange}
          required
          />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          className="w-full p-2 border rounded mb-2"
          value={formData.password}
          onChange={handleChange}
          required
          />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirme sua senha"
          className="w-full p-2 border rounded mb-2"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded w-full">Registrar</button>

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
    </>
  );
}
