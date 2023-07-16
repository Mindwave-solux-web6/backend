package com.wave.diary.service;

import com.wave.diary.entity.Board;
import com.wave.member.entity.Member;
import com.wave.diary.repository.BoardRepository;
import com.wave.member.repository.MemberRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
class BoardServiceTest {

    @Autowired BoardService boardService;
    @Autowired BoardRepository boardRepository;
    @Autowired EntityManager em;

    @Test
    public void register() {
        //given
        Member member = Member.builder().loginId("userA").build();
        em.persist(Member);

        //when
        Long registerId = boardService.register("AAA", "BBB", member.getId());

        //then
        Board board = boardRepository.findById(registerId).orElseThrow();

        assertThat(board.getTitle()).isEqualTo("AAA");
        assertThat(board.getContent()).isEqualTo("BBB");
        assertThat(board.getUser()).isEqualTo(member);
    }

    @Test
    public void updateBoard() {
        //given
        Member member = Member.builder().loginId("userA").build();
        em.persist(member);
        Long registerId = boardService.register("AAA", "BBB", member.getId());

        //when
        boardService.updateBoard(registerId, "CCC", "DDD");

        //then
        Board board = boardRepository.findById(registerId).orElseThrow();

        assertThat(board.getTitle()).isEqualTo("CCC");
        assertThat(board.getContent()).isEqualTo("DDD");
        assertThat(board.getUser()).isEqualTo(member);
    }
}
