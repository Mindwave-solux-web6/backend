package com.wave.letter.controller;

import com.wave.letter.dto.LetterDto;
import com.wave.letter.service.LetterService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/letter")
public class LetterController {
    private final LetterService letterService;


    @PostMapping
    public ResponseEntity<Long> createLetter(@RequestBody LetterDto request) {
        Long id = letterService.createLetter(request);
        return new ResponseEntity<>(id, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<LetterDto> getLetter(@PathVariable Long id) {
        LetterDto letter = letterService.getLetterById(id);
        return ResponseEntity.ok(letter);
    }

    @GetMapping
    public ResponseEntity<List<LetterDto>> getAllLetters() {
        List<LetterDto> letters = letterService.getAllLetters();
        return ResponseEntity.ok(letters);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updateLetter(@PathVariable Long id, @RequestBody LetterDto request) {
        letterService.updateLetter(id, request);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLetter(@PathVariable Long id) {
        letterService.deleteLetter(id);
        return ResponseEntity.noContent().build();
    }
}
