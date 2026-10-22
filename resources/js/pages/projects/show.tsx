import { Badge } from '@/components/ui/badge';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { Task } from '../tasks/Task';
import { Project } from './Project';

interface Props {
    project: Project & {
        tasks: Task[];
    };
}

export default function show({ project }: Props) {
    return (
        <AppLayout
            breadcrumbs={[
                { title: 'Projects', href: route('projects.index') },
                { title: project.title, href: route('projects.show', { project: project.id }) },
            ]}
        >
            <Head title={project.title} />

            <div className="space-y-4 p-4">
                <div className="flex h-16 items-center justify-between">
                    <h1 className="text-2xl font-semibold">{project.title}</h1>
                    <Badge>Status: {project.status}</Badge>
                </div>
                <div className="bg-accent flex flex-col gap-1 rounded-xl p-4">
                    <p className="text-muted-foreground text-sm">Description</p>
                    <p>{project.description}</p>
                </div>

                <div className="bg-accent flex flex-col gap-1 rounded-xl p-4">
                    <p className="text-muted-foreground text-sm">Tasks</p>
                    {project.tasks.length === 0 ? (
                        <p>No tasks yet.</p>
                    ) : (
                        <ul className="space-y-2">
                            {project.tasks.map((task) => (
                                <li key={task.id} className="bg-muted flex items-center justify-between rounded-lg border p-4">
                                    <div className="flex flex-col">
                                        <h2 className="font-semibold">{task.title}</h2>
                                        {task.description && <p>{task.description}</p>}
                                    </div>
                                    <Badge>Status: {task.status}</Badge>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
