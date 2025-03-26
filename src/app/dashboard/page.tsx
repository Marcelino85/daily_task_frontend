"use client";
import { useState } from "react";
import TaskList from "@/components/TaskList";
import TaskForm from "@/components/TaskForm";
import Navbar from "@/components/Navbar";

export default function Dashboard() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Minha primeira tarefa", completed: false },
  ]);

  const addTask = (title: string) => {
    setTasks([...tasks, { id: tasks.length + 1, title, completed: false }]);
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <>
    <Navbar />
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Lista de Tarefas</h1>
        <TaskForm onAddTask={addTask} />
        <TaskList tasks={tasks} onToggleTask={toggleTask} onDeleteTask={deleteTask} />
      </div>
    </div>
    </>
  );
}
