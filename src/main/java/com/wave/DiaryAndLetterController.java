package com.wave;

import com.wave.diary.domain.BoardEntity;
import com.wave.diary.dto.BoardDto;
import com.wave.diary.service.BoardService;
import com.wave.letter.domain.LetterEntity;
import com.wave.letter.dto.LetterDto;
import com.wave.letter.service.LetterService;
import lombok.AllArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping("/api/diary-and-letter")
public class DiaryAndLetterController {

    private final BoardService boardService;
    private final LetterService letterService;


    @GetMapping
    public ResponseEntity<Map<String, Object>> getDiaryAndLetterByDate(@RequestParam("date")
                                                                       @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
        BoardEntity diary = boardService.getBoardByDate(date);
        LetterEntity letter = letterService.getLetterByDate(date);

        Map<String, Object> response = new HashMap<>();
        response.put("selectedDate", date.format(DateTimeFormatter.ofPattern("yyyy-MM-dd")));
        response.put("diary", boardService.convertToDto(diary));
        response.put("letter", letterService.convertToDto(letter));

        return ResponseEntity.ok(response);
    }

    @GetMapping("/diary")
    public ResponseEntity<BoardDto> getDiaryByDate(@RequestParam("date")
                                                   @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
        BoardEntity diary = boardService.getBoardByDate(date);

        if (diary == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(boardService.convertToDto(diary));
    }

    @GetMapping("/letter")
    public ResponseEntity<LetterDto> getLetterByDate(@RequestParam("date")
                                                     @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
        LetterEntity letter = letterService.getLetterByDate(date);

        if (letter == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(letterService.convertToDto(letter));
    }

}
