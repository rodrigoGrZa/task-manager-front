import useTaskStore from "../store/useTaskStore";
import { getTodayStartDate } from "../util/date-utils";

const FILTER_OPTIONS = [
  { label: "Created Today", filter: () => ({ startDate: getTodayStartDate() }) },
  { label: "Show All", filter: () => ({}) },
  { label: "Completed", filter: () => ({ completed: true }) },
  { label: "Not Completed", filter: () => ({ completed: false }) },
];



const TaskFilters = () => {
  const { loadTasks } = useTaskStore();

  const handleFilter = (filterFn) => {
    const filters = filterFn();
    loadTasks(0, 5, filters);
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-4">
      {FILTER_OPTIONS.map((option) => (
        <button
          key={option.label}
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 focus:outline-none cursor-pointer"
          onClick={() => handleFilter(option.filter)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default TaskFilters;

