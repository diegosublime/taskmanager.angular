export interface Task {
    id: string;
    listId: string;
    title: string;
    description?: string;
    completed: boolean;
}