import axios from "axios";

export const getTasksRequest = async () => {
  try {
    return await axios.get("http://localhost:4000/tasks");
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export const createTaskRequest = async (task) => {
  try {
    return await axios.post("http://localhost:4000/tasks", task);
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};

export const deleteTaskRequest = async (id) => {
  try {
    return await axios.delete(`http://localhost:4000/tasks/${id}`);
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};

export const getTaskRequest = async (id) => {
  try {
    return await axios.get(`http://localhost:4000/tasks/${id}`);
  } catch (error) {
    console.error("Error getting task:", error);
    throw error;
  }
};

export const updateTaskRequest = async (id, newFields) => {
  try {
    return await axios.put(`http://localhost:4000/tasks/${id}`, newFields);
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

export const toggleTaskDoneRequest = async (id, done) => {
  try {
    return await axios.put(`http://localhost:4000/tasks/${id}`, { done });
  } catch (error) {
    console.error("Error toggling task:", error);
    throw error;
  }
};

