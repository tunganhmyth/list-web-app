import { ChangeEvent, FormEvent } from "react";
import { NewTask } from "../type";
import Button from "../../Button/Button";

export interface AddTaskFormProps {
  error?:string;
  newTask: NewTask;
  eventTitle: string;
  onTitleChange: (title: string) => void;
  onDueDateChange: (dueDate: string) => void;
  onPriorityChange: (priority: string) => void;
  onSubmit: () => void;
}

function AddTaskForm({
  error,
  newTask,
  eventTitle,
  onTitleChange,
  onDueDateChange,
  onPriorityChange,
  onSubmit,
}: AddTaskFormProps) {
  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) =>
    onTitleChange(event.target.value);

  const handleDueDateChange = (event: ChangeEvent<HTMLInputElement>) =>
    onDueDateChange(event.target.value);

  const handlePriorityChange = (event: ChangeEvent<HTMLSelectElement>) =>
    onPriorityChange(event.target.value);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new title"
        value={newTask.title}
        onChange={handleTitleChange}
      />
      {error && <span className="danger">{error}</span>}
      <div className="w-100">
        <textarea id="message" name="message" defaultValue={""}>
        </textarea>
      </div>
      <div className="d-flex jc-space-between ">
        <div className="w-75 mr-4">
          <input
            type="date"
            value={newTask.dueDate}
            onChange={handleDueDateChange}
          />
        </div>
        <div className="w-25">
          <select value={newTask.priority} onChange={handlePriorityChange}>
            <option value="high">High</option>
            <option value="normal">Normal</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>
      <Button width={"100%"} size="medium">
        {eventTitle}
      </Button>
    </form>
  );
}

export default AddTaskForm;
