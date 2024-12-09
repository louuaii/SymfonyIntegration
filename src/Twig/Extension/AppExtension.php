<?php

namespace App\Twig\Extension;

use App\Twig\Runtime\AppExtensionRuntime;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class AppExtension extends AbstractExtension
{
    public function getFunctions(): array
    {
        return [
            new TwigFunction('role_badge', [$this, 'renderRoleBadge'], ['is_safe' => ['html']]),
        ];
    }

    public function renderRoleBadge(string $role): string
    {
        switch ($role) {
            case 'ROLE_STUDENT':
                return '<span class="badge badge-info"><i class="fas fa-user-graduate"></i> Student</span>';
            case 'ROLE_TEACHER':
                return '<span class="badge badge-success"><i class="fas fa-chalkboard-teacher"></i> Teacher</span>';
            default:
                return '';
        }
    }
}
