import { useState } from "react";

interface TaskFormProps {
  onAddTask: (title: string) => void;
}

export default function TaskForm({ onAddTask }: TaskFormProps) {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    onAddTask(newTask);
    setNewTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nova tarefa..."
        className="flex-1 border border-gray-300 p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Adicionar
      </button>
    </form>
  );
}
