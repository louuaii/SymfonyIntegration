<?php

namespace App\Controller\admin;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Security;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_USER')]
#[Route('/admin')]
class DashboardController extends AbstractController
{
    #[Route(name: 'app_home_dashboard')]
    public function index(UserRepository $userRepository): Response
    {
        $teachersCount = $userRepository->countUsersWithRole('ROLE_TEACHER');
        $studentsCount = $userRepository->countUsersWithRole('ROLE_STUDENT');

        return $this->render('admin/home.html.twig', [
            'studentsCount' => $studentsCount,
            'teachersCount' => $teachersCount,
        ]);
    }
}
