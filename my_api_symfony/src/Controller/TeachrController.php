<?php

namespace App\Controller;

use App\Entity\Teachr;
use App\Repository\TeachrRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * Class TeachrController
 * @package App\Controller
 */

class TeachrController extends AbstractController
{
    /**
     * @Route("/api/teachr", name="api_teachr_index", methods={"GET"})
     */
    public function index(TeachrRepository $teachrRepository):Response
    {
        $teachrs = $teachrRepository->findAll();
        return $this->json($teachrs, 200,[], ['groups' => 'teachr:read']);
    }

    /**
     * @Route("/api/teachr", name="api_teachr_createTeachr", methods={"POST"})
     */
    public function createTeachr(Request $request, SerializerInterface $serializer, EntityManagerInterface $entityManager)
    {

        $jsonRecu = $request->getContent();

        try {
            $teachr = $serializer->deserialize($jsonRecu, Teachr::class, 'json');
            $teachr->setDatecreate(new \DateTime());

            $entityManager->persist($teachr);
            $entityManager->flush();

            return $this->json($teachr, 201, [], ['groups' => 'teachr:read']);
        } catch (NotEncodableValueException $e) {
            return $this->json([
                'status' => 400,
                'message' => $e->getMessage()
            ], 400);
        };
    }

    /**
     * @Route("/api/teachr/{id<\d+>?1}", name="api_teachr_updateTeachr", methods={"PUT"})
     */
    public function updateTeachr(TeachrRepository $teachrRepository, int $id, Request $request, SerializerInterface $serializer, EntityManagerInterface $entityManager, ValidatorInterface $validator)
    {

    }
}