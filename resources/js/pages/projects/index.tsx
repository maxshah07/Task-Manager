import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import { Project } from './Project';

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
                            <li key={project.id} className="flex flex-col gap-4 space-y-2 rounded-lg border p-4">
                                <div className="flex items-center justify-between">
                                    <h2 className="font-semibold">{project.title}</h2>
                                    <Badge className="text-sm">{project.status}</Badge>
                                </div>
                                <div className={`flex ${project.description ? 'justify-between' : 'justify-end'}`}>
                                    {project.description && <p>{project.description}</p>}
                                    <Link href={route('projects.show', { project: project.id })}>
                                        <Button className="flex items-center gap-2 rounded-lg">
                                            View project
                                            <ArrowRight stroke-width="1" />
                                        </Button>
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </AppLayout>
    );
}
