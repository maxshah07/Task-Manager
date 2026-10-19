<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

use App\Enums\ProjectStatus;

class Project extends Model
{
    public function tasks(): HasMany
    {
        return $this->hasMany(Task::class);
    }

    protected $fillable = ['title', 'description', 'status'];
}
