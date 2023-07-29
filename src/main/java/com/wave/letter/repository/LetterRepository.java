package com.wave.letter.repository;

import com.wave.letter.domain.LetterEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;

@Repository
public interface LetterRepository extends JpaRepository<LetterEntity, Long> {
    LetterEntity findByCreatedDate(LocalDate createdDate);
}
