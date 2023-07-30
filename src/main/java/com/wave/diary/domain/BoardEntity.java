package com.wave.diary.domain;

import com.wave.BaseTimeEntity;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;


@Getter
@Entity
@Table(name = "board")
@NoArgsConstructor
public class BoardEntity extends BaseTimeEntity {

    @Id
    @Column(name = "board_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 100, nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    @Column(name = "created_date")
    private LocalDate createdDate;

    @PrePersist
    public void prePersist() {
        this.createdDate = LocalDate.now();
    }

    @Builder
    public BoardEntity(Long id, String title, String content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }

}