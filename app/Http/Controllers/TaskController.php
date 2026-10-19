<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Inertia\Inertia;
use Inertia\Response;

class TaskController extends Controller
{
    public function index(Project $project) : Response 
    {
        $projectTasks = $project
            ->tasks()
            ->latest()
            ->get(['id', 'title', 'description', 'status', 'project_id']);

        return Inertia::render('tasks/index', [
            'tasks' => $projectTasks,
        ]);
    }
}
