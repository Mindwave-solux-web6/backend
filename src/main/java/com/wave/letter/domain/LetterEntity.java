package com.wave.letter.domain;

import com.wave.BaseTimeEntity;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Table(name = "letter")
@Entity
public class LetterEntity extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 1000)
    private String content;

    @Column(name = "created_date")
    private LocalDate createdDate;

    @PrePersist
    public void prePersist() {
        this.createdDate = LocalDate.now();
    }

    @Builder
    public LetterEntity(Long id, String content) {
        this.id = id;
        this.content = content;
    }
}