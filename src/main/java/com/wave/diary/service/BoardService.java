package com.wave.diary.service;

import com.wave.diary.domain.BoardEntity;
import com.wave.diary.repository.BoardRepository;
import com.wave.diary.dto.BoardDto;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@AllArgsConstructor
@Service
public class BoardService {
    private BoardRepository boardRepository;

    private static final int BLOCK_PAGE_NUM_COUNT = 5;  // 블럭에 존재하는 페이지 번호 수
    private static final int PAGE_POST_COUNT = 4;       // 한 페이지에 존재하는 게시글 수

    @Transactional
    public List<BoardDto> getBoardlist(Integer pageNum) {
        Page<BoardEntity> page = boardRepository.findAll(PageRequest.of(pageNum - 1, PAGE_POST_COUNT, Sort.by(Sort.Direction.ASC, "createdDate")));

        List<BoardEntity> boardEntities = page.getContent();
        List<BoardDto> boardDtoList = new ArrayList<>();

        for (BoardEntity boardEntity : boardEntities) {
            boardDtoList.add(this.convertToDto(boardEntity));
        }

        return boardDtoList;
    }

    @Transactional
    public Long getBoardCount() {
        return boardRepository.count();
    }

    @Transactional
    public BoardDto getPost(Long id) {
        Optional<BoardEntity> boardEntityWrapper = boardRepository.findById(id);
        BoardEntity boardEntity = boardEntityWrapper.get();

        return this.convertToDto(boardEntity);
    }

    @Transactional
    public Long savePost(BoardDto boardDto) {
        BoardEntity boardEntity = BoardEntity.builder()
                .title(boardDto.getTitle())
                .content(boardDto.getContent())
                .build();

        return boardRepository.save(boardEntity).getId();
    }

    @Transactional
    public void deletePost(Long id) {
        boardRepository.deleteById(id);
    }

    @Transactional
    public List<BoardDto> searchPosts(String keyword) {
        List<BoardEntity> boardEntities = boardRepository.findByTitleContaining(keyword);
        List<BoardDto> boardDtoList = new ArrayList<>();

        if (boardEntities.isEmpty()) return boardDtoList;

        for (BoardEntity boardEntity : boardEntities) {
            boardDtoList.add(this.convertToDto(boardEntity));
        }

        return boardDtoList;
    }

    public BoardEntity getBoardByDate(LocalDate selectedDate) {
        return boardRepository.findByCreatedDate(selectedDate);
    }

    public Integer[] getPageList(Integer curPageNum) {
        Integer[] pageList = new Integer[BLOCK_PAGE_NUM_COUNT];

        // 총 게시글 갯수
        Double postsTotalCount = Double.valueOf(this.getBoardCount());

        // 총 게시글 기준으로 계산한 마지막 페이지 번호 계산
        Integer totalLastPageNum = (int)(Math.ceil((postsTotalCount/PAGE_POST_COUNT)));

        // 현재 페이지를 기준으로 블럭의 마지막 페이지 번호 계산
        Integer blockLastPageNum = (totalLastPageNum > curPageNum + BLOCK_PAGE_NUM_COUNT)
                ? curPageNum + BLOCK_PAGE_NUM_COUNT
                : totalLastPageNum;

        // 페이지 시작 번호 조정
        curPageNum = (curPageNum <= 3) ? 1 : curPageNum - 2;

        // 페이지 번호 할당
        for (int val = curPageNum, idx = 0; val <= blockLastPageNum; val++, idx++) {
            pageList[idx] = val;
        }

        return pageList;
    }

    @Transactional
    public BoardEntity updatePostByDate(LocalDate date, BoardDto updatedBoardDto) {
        // date 기반으로 저장된 게시물을 가져옵니다.
        BoardEntity boardEntity = boardRepository.findFirstByCreatedDate(date)
                .orElseThrow(() -> new NoSuchElementException("해당 날짜에 게시물을 찾을 수 없습니다."));

        // 기존의 게시물을 수정하고 새로운 BoardEntity 객체를 생성합니다.
        BoardEntity updatedBoardEntity = BoardEntity.builder()
                .title(updatedBoardDto.getTitle())
                .content(updatedBoardDto.getContent())
                .build();

        // 변경된 게시물을 저장합니다.
        return boardRepository.save(updatedBoardEntity);
    }

    public BoardDto convertToDto(BoardEntity boardEntity) {
        return BoardDto.builder()
                .title(boardEntity.getTitle())
                .content(boardEntity.getContent())
                .build();
    }
}