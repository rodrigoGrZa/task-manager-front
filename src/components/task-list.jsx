import useTaskStore from "../store/useTaskStore";
import PlusIcon from "./plus-icon";
import TaskFilters from "./taks-filters";
import TaskCard from "./task-card";

const TaskList = () => {
  const { tasks, addTask } = useTaskStore();

  const handleAddTask = () => {
    const newTask = {
      name: "Nueva tarea",
      text: "Nueva tarea",
      completed: false,
    };
    addTask(newTask);
  };

  return (
    <div className="space-y-4">
      <TaskFilters />
      <div className="flex justify-center">
        <button
          className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none cursor-pointer"
          onClick={handleAddTask}
        >
          <PlusIcon />
        </button>
      </div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
