export interface Task {
    id: string;
    description: string;
    dueDate: string;
}

export const config = {
   collection_endpoint: 'tasks'
};