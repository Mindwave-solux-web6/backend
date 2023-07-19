package com.wave.diary.dto;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class PostRequestDto {

    private String content;
    private Member member;

    @Builder
    public PostRequestDto(String content, Member member) {
        this.content = content;
        this.member = member;
    }

    public Post toEntity() {
        return Post.builder()
                .content(content)
                .member(member)
                .build();
    }

}
