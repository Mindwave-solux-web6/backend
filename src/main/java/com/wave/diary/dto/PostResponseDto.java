package com.wave.diary.dto;

@Getter
@ToString
public class PostResponseDto {
    private Integer id;
    private String content;
    private String nickname;
    private String profilePath;
    private String createdAt;

    public PostResponseDto(Post entity) {
        this.id = entity.getId();
        this.nickname = entity.getMember().getNickname();
        this.profilePath = entity.getMember().getProfilePath();
        this.content = entity.getContent();
        this.createdAt = entity.getCreated_at().format(DateTimeFormatter.ofPattern("yyyy.MM.dd"));
    }
}
