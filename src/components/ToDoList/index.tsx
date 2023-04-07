import React, { useState, useEffect } from "react";
import BulkAction from "./BulkAction";
import TaskList from "./TaskList";
import AddTaskForm from "./AddTaskForm";
import { NewTask, Task } from "./type";
import { mockTask } from "../configs/fetchData";

const ToDoList = () => {
  const [tasks, setTasks] = useState<Task[]>(mockTask);
  const [error, setError] = useState("");
  const [newTask, setNewTask] = useState<NewTask>({
    title: "",
    description: "",
    dueDate: new Date().toISOString().substring(0, 10),
    priority: "normal",
  });


  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleUpdateTask = (updatedTask: Task) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleClearAll = () => {
    setTasks(tasks.filter((task) => task.checked !== false));
  };

  const handleAddTask = (newTask: NewTask) => {
    if(newTask.title ==="" ){
      setError("Please enter title")
    }else{
      setTasks([...tasks, { ...newTask, id: Date.now() }]);
      setNewTask({
        title: "",
        description: "",
        dueDate: new Date().toISOString().substring(0, 10),
        priority: "normal",
      });
      setError("");
    }
  };

  return (
    <>
      <main>
        {/* New tasks */}
        <section>
          <h1 className="text-primary">New Task</h1>
          <AddTaskForm
            error={error}
            newTask={newTask}
            onTitleChange={(title: string) =>
              setNewTask({ ...newTask, title: title })
            }
            onDueDateChange={(dueDate: string) =>
              setNewTask({ ...newTask, dueDate: dueDate })
            }
            onPriorityChange={(priority: string) =>
              setNewTask({ ...newTask, priority: priority })
            }
            onSubmit={() => handleAddTask(newTask)}
            eventTitle={"Add Task"}
          />
        </section>
        {/* To do list */}
        <section>
          <h1 className="text-primary">List Task</h1>
          <TaskList
            tasks={tasks}
            handleUpdateTask={handleUpdateTask}
            handleDelete={handleDelete}
          />
        </section>
      </main>
      <footer>
        <BulkAction handleClearAll={handleClearAll} />
      </footer>
    </>
  );
};

export default ToDoList;
