package com.wave.diary.controller;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/post")
public class PostController {

    private final PostService postService;

    @PostMapping(value = "/create")
    public String create(@RequestBody PostRequestDto requestDto, @AuthenticationPrincipal SecurityUser principal) {
        // 프론트에서 받은 토큰으로 Member 구분함
        requestDto.setMember(principal.getMember());
        Post post = postService.save(requestDto);

        return "success";
    }

    @GetMapping()
    public List<PostResponseDto> list(@AuthenticationPrincipal SecurityUser principal ,@RequestParam(value = "nickname", required=false) String nickname) {
        return postService.list(principal.getMember(), nickname);
    }

    @GetMapping("/{id}")
    public PostDetailResponseDto get(@AuthenticationPrincipal SecurityUser principal, @PathVariable Integer id) {
        return postService.find(principal.getMember(), id);
    }

    @PutMapping("{id}/update")
    public String update(@PathVariable Integer id, @RequestBody PostRequestDto requestDto, @AuthenticationPrincipal SecurityUser principal) {
        requestDto.setMember(principal.getMember());
        return postService.update(id, requestDto);
    }

    public String delete(@PathVariable Integer id, @AuthenticationPrincipal SecurityUser principal) {
        return postService.delete(id, principal.getMember());
    }
}
