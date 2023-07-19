package com.wave.diary.service;

@RequiredArgsConstructor
@Service
public class PostService {
    private final PostRepository postRepository;

    // create
    @Transactional
    public Post save(PostRequestDto requestDto) {
        return postRepository.save(requestDto.toEntity());
    }

    public PostDetailResponseDto find(Member member, Integer id) {
        Post post = postRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다."));
        PostDetailResponseDto postDetailResponseDto = new PostDetailResponseDto(post);
    }

    @Transactional
    public String update(Integer id, PostRequestDto requestDto) {
        String message = "fail";
        Post post = postRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다."));

        // 작성자만 수정 가능
        if (postRepository.findById(id).get().getMember().getId().equals(requestDto.getMember().getId())) {
            post.update(requestDto.getContent());
            message = "success";
        }

        return message;

    }

    @Transactional
    public String delete(Integer id, Member member) {
        String message = "fail";
        Post post = postRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다."));

        if (post.getMember().getId().equals(member.getId())) { // 작성자만 삭제 가능
            postRepository.delete(post);
            message = "success";
        }

        return message;

    }
    public List<PostResponseDto> list(Member member, String nickname) {
        List<Post> posts = postRepository.findAll();
        List<PostResponseDto> postList = new ArrayList<>();

        for (Post post : posts) {
            PostResponseDto postResponseDto = new PostResponseDto(post);
            postList.add(postResponseDto);
        }

        return postList;
    }
}
