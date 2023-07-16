package com.wave.diary.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "board_id")
    private Long id;

    private String title;
    private String content;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private Member member;

    private LocalDateTime registerDate;

    @Builder
    public Board(String title, String content, Member member, LocalDateTime registerDate) {
        this.title = title;
        this.content = content;
        this.Member = member;
        //this.registerDate = registerDate;
        this.registerDate = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(registerDate);
    }

    //==생성 메서드==//
    public static Board createBoard(String title, String content, Member member) {
        return Board.builder()
                .title(title).content(content).member(member)
                .registerDate(LocalDateTime.now())
                .build();
    }

    //==비즈니스 메서드==//
    public void update(String title, String content) {
        this.title = title;
        this.content = content;
    }
}