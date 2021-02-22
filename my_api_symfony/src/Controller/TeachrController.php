<?php

namespace App\Controller;

use App\Entity\Teachr;
use App\Repository\TeachrRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
// use Symfony\Component\Serializer\SerializerInterface;

class TeachrController extends AbstractController
{
    /**
     * @Route("/api/teachr", name="api_teachr_index", methods={"GET"})
     */
    public function index(TeachrRepository $teachrRepository): Response
    {
        $teachrs = $teachrRepository->findAll();
        return $this->json($teachrs, 200,[], ["groups" => "teachr:read"]);
    }
    /**
     * @Route("/api/teachr/post", name="api_teachr_createTeachr", methods={"POST"})
     */
    public function createTeachr(): Response
    {
        // you can fetch the EntityManager via $this->getDoctrine()
        // or you can add an argument to the action: createTeachr(EntityManagerInterface $entityManager)
        $entityManager = $this->getDoctrine()->getManager();

        $teachr = new Teachr();
        $teachr->setFirstname('Prof1');
        $teachr->setDatecreate(new \DateTime());

        // tell Doctrine you want to (eventually) save the Teachr (no queries yet)
        $entityManager->persist($teachr);

        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        return new Response('Saved new Teachr with id '.$teachr->getId());
        // return $this->json([
        //     'message' => 'Welcome to your new controller!',
        //     'path' => 'src/Controller/TeachrController.php',
        // ]);
    }
}
