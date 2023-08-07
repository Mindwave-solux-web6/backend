package com.wave.test.dto;

import com.wave.test.domain.TestEntity;
import lombok.*;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class TestDto {

    private Long id;

    private String trap_1;

    private String trap_2;

    private String trap_3;

    public static TestDto fromEntity(TestEntity testEntity) {
        return TestDto.builder()
                .id(testEntity.getId())
                .trap_1(testEntity.getTrap_1())
                .trap_2(testEntity.getTrap_2())
                .trap_3(testEntity.getTrap_3())
                .build();
    }

    public static List<TestDto> fromEntityList(List<TestEntity> testEntities) {
        return testEntities.stream()
                .map(TestDto::fromEntity)
                .collect(Collectors.toList());
    }

    public TestEntity toEntity() {
        return TestEntity.builder()
                .id(id)
                .trap_1(trap_1)
                .trap_2(trap_2)
                .trap_3(trap_3)
                .build();
    }

    @Builder
    public TestDto(Long id, String trap_1, String trap_2, String trap_3) {
        this.id = id;
        this.trap_1 = trap_1;
        this.trap_2 = trap_2;
        this.trap_3 = trap_3;
    }
}