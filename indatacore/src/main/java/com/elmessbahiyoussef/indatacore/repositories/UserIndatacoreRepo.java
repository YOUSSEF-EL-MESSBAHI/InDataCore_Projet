package com.elmessbahiyoussef.indatacore.repositories;

import com.elmessbahiyoussef.indatacore.entities.UserIndatacore;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserIndatacoreRepo extends JpaRepository<UserIndatacore, Long> {
    Optional<UserIndatacore>  findByEmail(String email);
}
