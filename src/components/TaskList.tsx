interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export default function TaskList({ tasks, onToggleTask, onDeleteTask }: TaskListProps) {
  return (
    <ul className="divide-y divide-gray-300">
      {tasks.map(task => (
        <li key={task.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-md my-2 shadow">
          <span
            onClick={() => onToggleTask(task.id)}
            className={`cursor-pointer text-lg ${task.completed ? "line-through text-gray-500" : "text-gray-900"}`}
          >
            {task.title}
          </span>
          <button
            onClick={() => onDeleteTask(task.id)}
            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
          >
            Excluir
          </button>
        </li>
      ))}
    </ul>
  );
}
