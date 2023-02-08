import React, { useEffect, useState, useCallback } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);

  const transformTasks = useCallback((tasksObj) => {
    const loadedTasks = [];

    for (const taskKey in tasksObj) {
      loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
    }

    setTasks(loadedTasks);
  }, []); // 상태 갱신을 하는 setTasks외에 어떤것도 외부에서 쓰이고 있지 않아서 dependency를 빈 상태로 두어도 됨

  const { isLoading, error, sendRequest: fetchTasks } = useHttp(transformTasks);
  // sendRequest (:)comma-> we can rename to fetchTasks

  useEffect(() => {
    fetchTasks({ url: "https://react-http-8c9e9-default-rtdb.firebaseio.com/tasks.json" });
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
