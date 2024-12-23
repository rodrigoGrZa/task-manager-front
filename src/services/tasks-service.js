const API_URL = "http://localhost:8080/api/v1/tasks";

export const fetchTasks = async (page, size, filters = {}) => {
  const queryParams = new URLSearchParams({
    page,
    size,
    ...filters,
  });

  const response = await fetch(`${API_URL}?${queryParams.toString()}`);
  if (!response.ok) throw new Error("Failed to fetch tasks");
  return response.json();
};


export const updateTask = async (id, updatedFields) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedFields),
  });
  if (!response.ok) throw new Error("Failed to update task");
  return response.json();
};

export const createTask = async (task) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  if (!response.ok) throw new Error("Failed to create task");
  return response.json();
};