import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';

type Project = {
    id: number;
    title: string;
    description: string | null;
    status: 'upcoming' | 'in_progress' | 'complete';
};

type Props = {
    projects: Project[];
};

export default function Index({ projects }: Props) {
    return (
        <AppLayout breadcrumbs={[{ title: 'Projects', href: route('projects.index') }]}>
            <Head title="Projects" />

            <div className="space-y-4 p-4">
                <h1 className="text-2xl font-semibold">Projects</h1>

                {projects.length === 0 ? (
                    <p>No projects yet.</p>
                ) : (
                    <ul className="space-y-3">
                        {projects.map((project) => (
                            <li key={project.id} className="space-y-2 rounded-lg border p-4">
                                <h2 className="font-semibold">{project.title}</h2>

                                {project.description && <p>{project.description}</p>}

                                <p className="text-sm">Status: {project.status}</p>

                                <Link href={route('projects.tasks.index', { project: project.id })}>View tasks</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </AppLayout>
    );
}
