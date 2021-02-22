<?php

namespace App\Entity;

use App\Repository\TeachrRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=TeachrRepository::class)
 */
class Teachr
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups("teachr:read")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("teachr:read")
     */
    private $firstname;

    /**
     * @ORM\Column(type="datetime")
     */
    private $datecreate;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getDatecreate(): ?\DateTimeInterface
    {
        return $this->datecreate;
    }

    public function setDatecreate(\DateTimeInterface $datecreate): self
    {
        // $category->setCreatedTs(new \DateTime())
        // $dateTimeNow = new $datecreate('@'.strtotime('now'));

        $this->datecreate = $datecreate;

        return $this;
    }
}
