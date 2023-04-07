import React, { useState } from "react";
import Button from "../../Button/Button";
import Accordion from "../../Accordion";
import { NewTask, Task } from "../type";
import AddTaskForm from "../AddTaskForm";

export interface TaskItemProps {
  task: Task;
  handleUpdateTask: (updatedTask: Task) => void;
  handleDeleteTask: (taskId: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  handleUpdateTask,
  handleDeleteTask,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [error, setError] = useState("");
  const [updatedTask, setUpdatedTask] = useState<NewTask>({
    title: task.title,
    dueDate: task.dueDate,
    description: task.description,
    priority: task.priority,
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    if (updatedTask.title === "") {
      setError("Please enter title");
    } else {
      const updatedTaskWithId = { ...updatedTask, id: task.id };
      handleUpdateTask(updatedTaskWithId);
      setIsEditing(false);
      setError("");
    }
  };

  const handleDelete = () => handleDeleteTask(task.id);

  const handleTitleChange = (title: string) =>
    setUpdatedTask({ ...updatedTask, title });

  const handleDueDateChange = (dueDate: string) =>
    setUpdatedTask((prevState) => ({ ...prevState, dueDate }));

  const handlePriorityChange = (priority: string) =>
    setUpdatedTask((prevState) => ({ ...prevState, priority }));

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    const updatedTaskWithId = {
      ...updatedTask,
      id: task.id,
      checked: isChecked,
    };
    handleUpdateTask(updatedTaskWithId);
    setIsEditing(false);
  };

  const AccordionTitle = () => {
    return (
      <>
        <span className="text-primary">
          {" "}
          <input
            className="checkbox-item mr-2"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          {task.title}
        </span>
        <div>
          <Button margin="0px 12px 0 0" size="small" onClick={handleEdit}>
            Detail
          </Button>
          <Button size="small" onClick={handleDelete}>
            Remove
          </Button>
        </div>
      </>
    );
  };

  const AccordionContent = () => {
    return (
      <AddTaskForm
        error={error}
        newTask={updatedTask}
        onTitleChange={handleTitleChange}
        onDueDateChange={handleDueDateChange}
        onPriorityChange={handlePriorityChange}
        onSubmit={handleSaveEdit}
        eventTitle={"Update"}
      />
    );
  };

  return (
    <div key={task.id} className="task-item">
      <Accordion
        title={<AccordionTitle />}
        children={<AccordionContent />}
        isEditing={isEditing}
      />
    </div>
  );
};

export default TaskItem;
