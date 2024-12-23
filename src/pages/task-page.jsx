import { useEffect, useState } from "react";
import PaginationControls from "../components/pagination-controls";
import TaskList from "../components/task-list";
import useTaskStore from "../store/useTaskStore";
import HelpMessage from "../components/help-message";

function TaskPage() {
  const loadTasks = useTaskStore((state) => state.loadTasks);
  const { error } = useTaskStore();

  useEffect(() => {
    loadTasks(0, 5, { completed: false });
  }, [loadTasks]);

  if (error)
    return (
      <div className="text-center text-red-500 font-semibold">
        Error: {error}
      </div>
    );

  return (
    <div className="bg-gray-900 text-white rounded-lg p-8 shadow-lg w-full max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">My Tasks</h1>
      <HelpMessage />
      <main className="flex-grow">
        <TaskList />
      </main>
      <footer className="flex justify-center py-4">
        <PaginationControls />
      </footer>
    </div>
  );
}

export default TaskPage;
