package com.tcs.student.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.tcs.student.model.Student;

public interface StudentRepository extends MongoRepository<Student, Integer> {

}
