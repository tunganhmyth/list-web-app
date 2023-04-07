export interface Task {
    id: number;
    title: string;
    dueDate: string;
    priority: string;
    description?: string;
    checked?: boolean;
  }
  
  export interface NewTask {
    title: string;
    dueDate: string;
    description?: string;
    priority: string;
    checked?: boolean;
  }
  