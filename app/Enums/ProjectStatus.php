<?php

namespace App\Enums;

enum ProjectStatus: string
{
    case UPCOMING = 'upcoming';
    case IN_PROGRESS = 'in_progress';
    case COMPLETE = 'complete';
}
