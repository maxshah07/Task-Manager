export type Project = {
    id: number;
    title: string;
    description: string | null;
    status: 'upcoming' | 'in_progress' | 'complete';
};
