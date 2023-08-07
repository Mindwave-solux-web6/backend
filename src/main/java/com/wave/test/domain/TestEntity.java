package com.wave.test.domain;

import com.wave.BaseTimeEntity;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Table(name = "test")
@Entity
public class TestEntity extends BaseTimeEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String trap_1;

    @Column
    private String trap_2;

    @Column
    private String trap_3;


    @Builder
    public TestEntity(Long id, String trap_1, String trap_2, String trap_3) {
        this.id = id;
        this.trap_1 = trap_1;
        this.trap_2 = trap_2;
        this.trap_3 = trap_3;
    }
}