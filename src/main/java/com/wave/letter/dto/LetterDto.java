package com.wave.letter.dto;

import com.wave.letter.domain.LetterEntity;
import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class LetterDto {
    private Long id;
    private String content;

    public LetterEntity toEntity(){
        LetterEntity letterEntity = LetterEntity.builder()
                .id(id)
                .content(content)
                .build();
        return letterEntity;
    }

    @Builder
    public LetterDto(Long id, String content) {
        this.id = id;
        this.content = content;
    }

}
