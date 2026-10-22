export type Task = {
    id: number;
    title: string;
    description: string | null;
    status: 'todo' | 'in_progress' | 'done';
    project_id: number;
};
