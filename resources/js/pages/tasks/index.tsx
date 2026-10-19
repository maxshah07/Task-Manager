type Task = {
    id: number;
    title: string;
    description: string | null;
    status: 'todo' | 'in_progress' | 'done';
    project_id: number;
};

type Props = {
    tasks: Task[];
};

export default function Index({ tasks }: Props) {
    return tasks.map((task) => (
        <div key={task.id} className="space-y-2 rounded-lg border p-4">
            <h2 className="font-semibold">{task.title}</h2>
            {task.description && <p>{task.description}</p>}
            <p className="text-sm">Status: {task.status}</p>
            <p className="text-sm">Project ID: {task.project_id}</p>
        </div>
    ));
}
