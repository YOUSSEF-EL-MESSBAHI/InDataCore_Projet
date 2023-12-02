package com.elmessbahiyoussef.indatacore.repositories;

import com.elmessbahiyoussef.indatacore.entities.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepo extends JpaRepository<Student, Long> {

    Student findByEmail(String email);
}
