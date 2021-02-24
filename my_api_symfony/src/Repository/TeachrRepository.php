<?php

namespace App\Repository;

use App\Entity\Teachr;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @method Teachr|null find($id, $lockMode = null, $lockVersion = null)
 * @method Teachr|null findOneBy(array $criteria, array $orderBy = null)
 * @method Teachr[]    findAll()
 * @method Teachr[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TeachrRepository extends ServiceEntityRepository
{
    private $manager;

    public function __construct(ManagerRegistry $registry,EntityManagerInterface $manager)
    {
        parent::__construct($registry, Teachr::class);
        $this->manager = $manager;
    }

    // /**
    //  * @return Teachr[] Returns an array of Teachr objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Teachr
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
    public function updateTeachr(Teachr $teachr, $data)
    {
        empty($data['firstName']) ? true : $teachr->setFirstName($data['firstName']);

        $this->manager->flush();
    }
    public function removeTeachr(Teachr $teachr)
    {
        $this->manager->remove($teachr);
        $this->manager->flush();
    }
}
