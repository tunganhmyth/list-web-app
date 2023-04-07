import React, { useState } from "react";
import TaskItem from "./TaskItem";
import { Task } from "../type";

interface TaskListProps {
  tasks: Task[];
  handleUpdateTask: (updatedTask: Task) => void;
  handleDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  handleUpdateTask,
  handleDelete,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const sortedTasks = tasks.sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
 
  const filteredTasks = sortedTasks.filter((task) =>
  task.title.toLowerCase().includes(searchTerm.toLowerCase())
);
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {filteredTasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <div>
          {filteredTasks.map((task) => {
            return (
              <div key={task.id}>
                <TaskItem
                  key={task.id}
                  task={task}
                  handleUpdateTask={handleUpdateTask}
                  handleDeleteTask={handleDelete}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default TaskList;
