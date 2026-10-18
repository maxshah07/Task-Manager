<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use App\Enums\ProjectStatus;

class Project extends Model
{
    public function projects() {
        return $this.hasMany(Task::class);
    }

    protected $fillable = ['title', 'description', 'status'];
}
