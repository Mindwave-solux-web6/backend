package com.wave.letter.service;

import com.wave.letter.domain.LetterEntity;
import com.wave.letter.dto.LetterDto;
import com.wave.letter.repository.LetterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class LetterService {

    private final LetterRepository letterRepository;

    @Autowired
    public LetterService(LetterRepository letterRepository) {
        this.letterRepository = letterRepository;
    }

    public Long createLetter(LetterDto request) {
        LetterEntity letter = LetterEntity.builder()
                .content(request.getContent())
                .build();
        letterRepository.save(letter);
        return letter.getId();
    }

    public LetterDto getLetterById(Long id) {
        Optional<LetterEntity> optionalLetter = letterRepository.findById(id);
        return optionalLetter.map(this::convertToDto).orElse(null);
    }

    public List<LetterDto> getAllLetters() {
        List<LetterEntity> letters = letterRepository.findAll();
        return letters.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    public void updateLetter(LocalDate date, LetterDto request) {
        LetterEntity letterEntity = letterRepository.findByCreatedDate(date); // 수정된 부분
        if (letterEntity != null) { // 수정된 부분
            letterEntity = LetterEntity.builder()
                    .id(letterEntity.getId())
                    .content(request.getContent())
                    .build();
            letterRepository.save(letterEntity);
        }
    }

    public void deleteLetter(Long id) {
        letterRepository.deleteById(id);
    }


    public LetterEntity getLetterByDate(LocalDate selectedDate) {
        return letterRepository.findByCreatedDate(selectedDate);
    }



    public LetterDto convertToDto(LetterEntity letter) {
        LetterDto dto = new LetterDto();
        dto.setId(letter.getId());
        dto.setContent(letter.getContent());
        return dto;
    }
}
