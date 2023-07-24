import { useCallback } from "react";
import SimpleInput from "./Working with inputs/SimpleInput";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getTasks = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://fir-practce-99c20-default-rtdb.firebaseio.com/Tasks.json"
      );

      const taskArray = [];

      for (const key in response.data) {
        taskArray.push({
          id: key,
          itemTask: response.data[key].task,
        });
      }

      setTasks(taskArray);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  async function postTasks(task) {
    const response = await axios.post(
      "https://fir-practce-99c20-default-rtdb.firebaseio.com/Tasks.json",
      task
    );
  }

  return (
    <>
      <div className="app">
        <SimpleInput />
      </div>
    </>
  );
}

export default App;
