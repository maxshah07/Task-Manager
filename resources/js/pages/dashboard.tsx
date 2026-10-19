import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="size-full bg-white p-6">
                <div id="projects-card" className="size-full rounded-2xl bg-black">
                    <h1 className="p-6 text-2xl font-semibold text-white">Projects</h1>
                </div>
            </div>
        </AppLayout>
    );
}
