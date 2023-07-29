package com.wave.diary.dto;

import com.wave.diary.domain.BoardEntity;
import lombok.*;



@Getter
@Setter
@ToString
@NoArgsConstructor
public class BoardDto {
    private Long id;

    private String title;

    private String content;

    public BoardEntity toEntity(){
        BoardEntity boardEntity = BoardEntity.builder()
                .id(id)
                .title(title)
                .content(content)
                .build();
        return boardEntity;
    }

    @Builder
    public BoardDto(Long id, String title, String content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }
}