import { create } from 'zustand';
import { fetchTasks, updateTask, createTask } from '../services/tasks-service';

const useTaskStore = create((set, get) => ({
  tasks: [],
  saving: [],
  pagination: { page: 0, size: 5, totalPages: 0, totalElements: 0 },
  debounceTimers: {},
  error: null,
  filters: {},

  loadTasks: async (
    page = get().pagination.page,
    size = get().pagination.size,
    filters = get().filters
  ) => {
    set({ error: null, filters });
    try {
      const data = await fetchTasks(page, size, filters);
      set({
        tasks: data.content,
        pagination: {
          page: data.pageable.pageNumber,
          size: data.pageable.pageSize,
          totalPages: data.totalPages,
          totalElements: data.totalElements,
        },
      });
    } catch (error) {
      set({ error: error.message });
    }
  },

  goToPage: (page) => {
    const { pagination, loadTasks, filters } = get();
    if (page >= 0 && page < pagination.totalPages) {
      loadTasks(page, pagination.size, filters);
    }
  },

  modifyTask: async (id, updatedFields) => {
    const { tasks, saving, loadTasks, filters } = get();
    set({ saving: [...saving, id] });

    try {
      const updatedTask = await updateTask(id, updatedFields);
      set({
        tasks: tasks.map((task) => (task.id === id ? updatedTask : task)),
      });
    } catch (error) {
      set({ error: error.message });
    } finally {
      setTimeout(() => {
        set({ saving: get().saving.filter((taskId) => taskId !== id) });
        loadTasks(0, get().pagination.size, filters);
      }, Math.random() * (1500 - 500) + 500);
    }
  },

  addTask: async (task) => {
    const { tasks, loadTasks, filters } = get();
    try {
      const newTask = await createTask(task);
      set({ tasks: [newTask, ...tasks] });
      loadTasks(0, get().pagination.size, filters);
    } catch (error) {
      set({ error: error.message });
    }
  },

  editTaskWithDebounce: (id, updatedFields) => {
    const { debounceTimers, modifyTask } = get();
    clearTimeout(debounceTimers[id]);
    const newTimers = { ...debounceTimers };
    newTimers[id] = setTimeout(() => {
      modifyTask(id, updatedFields);
    }, 1500);
    set({ debounceTimers: newTimers });
  },
}));

export default useTaskStore;
