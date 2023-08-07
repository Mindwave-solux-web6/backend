package com.wave.test.service;

import com.wave.test.domain.TestEntity;
import com.wave.test.dto.TestDto;
import com.wave.test.repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestService {
    private final TestRepository testRepository;

    @Autowired
    public TestService(TestRepository testRepository) {
        this.testRepository = testRepository;
    }


    public Long saveTest(TestDto testDto) {
        TestEntity testEntity = testDto.toEntity();
        TestEntity savedTest = testRepository.save(testEntity);
        return savedTest.getId();
    }

    public List<TestEntity> getAllTests() {
        return testRepository.findAll();
    }

    public TestEntity getTestById(Long id) {
        return testRepository.findById(id).orElse(null);
    }

}