package com.elmessbahiyoussef.indatacore.repositories;

import com.elmessbahiyoussef.indatacore.entities.Departement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartementRepo extends JpaRepository<Departement, Long> {
    Departement findByCode(String code);

}
