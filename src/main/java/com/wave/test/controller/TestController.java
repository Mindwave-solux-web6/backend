package com.wave.test.controller;

import com.wave.test.domain.TestEntity;
import com.wave.test.dto.TestDto;
import com.wave.test.service.TestService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/test")
public class TestController {

    private final TestService testService;

    @Autowired
    public TestController(TestService testService) {
        this.testService = testService;
    }

    @PostMapping
    public ResponseEntity<Long> saveTest(@RequestBody TestDto testDto) {
        Long id = testService.saveTest(testDto);
        return new ResponseEntity<>(id, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<TestDto>> getAllTests() {
        List<TestEntity> allTests = testService.getAllTests();
        List<TestDto> allTestDtos = TestDto.fromEntityList(allTests);
        return new ResponseEntity<>(allTestDtos, HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public ResponseEntity<TestDto> getTest(@PathVariable Long id) {
        TestEntity test = testService.getTestById(id);
        if (test != null) {
            TestDto testDto = TestDto.fromEntity(test);
            return new ResponseEntity<>(testDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}