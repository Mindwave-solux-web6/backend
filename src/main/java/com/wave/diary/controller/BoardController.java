package com.wave.diary.controller;

import com.wave.diary.domain.BoardEntity;
import com.wave.diary.dto.BoardDto;
import com.wave.diary.service.BoardService;
import lombok.AllArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.NoSuchElementException;

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
    /*@PutMapping("/post/{id}")
    public void updatePost(@PathVariable("id") Long id, @RequestBody BoardDto boardDto) {
        boardDto.setId(id);
        boardService.savePost(boardDto);
    }*/

    @PutMapping("/post")
    public ResponseEntity<BoardDto> updatePostByDate(@RequestParam("date") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date,
                                                     @RequestBody BoardDto boardDto) {
        try {
            // date 기반으로 게시물을 업데이트합니다.
            BoardEntity updatedPost = boardService.updatePostByDate(date, boardDto);

            // 업데이트된 게시물을 BoardDto로 변환합니다.
            BoardDto updatedPostDto = boardService.convertToDto(updatedPost);

            // 업데이트된 결과를 반환합니다.
            return ResponseEntity.ok(updatedPostDto);
        } catch (NoSuchElementException e) {
            // 게시물을 찾을 수 없는 경우 404 Not Found 상태로 응답합니다.
            return ResponseEntity.notFound().build();
        }
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