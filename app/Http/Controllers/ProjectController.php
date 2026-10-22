<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Inertia\Inertia;
use Inertia\Response;

class ProjectController extends Controller
{
    public function index(): Response
    {
        $projects = Project::query()->latest()->get();

        return Inertia::render('projects/index', [
            'projects' => $projects,
        ]);
    }

    public function show(Project $project): Response
    {
        $project->load('tasks');
        
        return Inertia::render('projects/show', [
            'project' => $project,
        ]);
    }
}