<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Inertia\Inertia;
use Inertia\Response;

class ProjectController extends Controller
{
    public function index(): Response
    {
        $projects = Project::query()
            ->latest()
            ->get(['id', 'title', 'description', 'status']);

        return Inertia::render('projects/index', [
            'projects' => $projects,
        ]);
    }
}