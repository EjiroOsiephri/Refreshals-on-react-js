import { useCallback } from "react";
import Inputs from "./Components/Inputs";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(null);

  const getTasks = useCallback(async () => {
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
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    getTasks();
  }, []);

  async function postTasks(task) {
    const response = await axios.post(
      "https://fir-practce-99c20-default-rtdb.firebaseio.com/Tasks.json",
      task
    );
    console.log(response.data);
  }

  return (
    <>
      <Inputs postTasks={postTasks}></Inputs>
    </>
  );
}

export default App;
