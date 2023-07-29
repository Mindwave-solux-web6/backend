package com.wave.diary.controller;

import com.wave.diary.dto.BoardDto;
import com.wave.diary.service.BoardService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/diary")
public class BoardController {
    private BoardService boardService;


    /* 일기 작성 */
    @PostMapping("/post")
    public Long savePost(@RequestBody BoardDto boardDto) {
        return boardService.savePost(boardDto);
    }


    /* 일기 수정 */
    @PutMapping("/post/{id}")
    public void updatePost(@PathVariable("id") Long id, @RequestBody BoardDto boardDto) {
        boardDto.setId(id);
        boardService.savePost(boardDto);
    }

    /* 일기 목록 */
    @GetMapping("/list")
    public List<BoardDto> getBoardList(@RequestParam(value = "page", defaultValue = "1") Integer pageNum) {
        return boardService.getBoardlist(pageNum);
    }


    /* 일기 상세 */
    @GetMapping("/post/{id}")
    public BoardDto getPost(@PathVariable("id") Long id) {
        return boardService.getPost(id);
    }


    /*일기 검색*/
    @GetMapping("/search")
    public List<BoardDto> searchPosts(@RequestParam(value = "keyword") String keyword) {
        return boardService.searchPosts(keyword);
    }


    /* 일기 삭제 */
    @DeleteMapping("/post/{id}")
    public void deletePost(@PathVariable("id") Long id) {
        boardService.deletePost(id);
    }

}