package com.tcs.student.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tcs.student.model.Student;
import com.tcs.student.repository.StudentRepository;



@Service
public class StudentService {
	
	@Autowired
	private StudentRepository studentRepository;
	
	public List<Student> getStudentList() {
		return this.studentRepository.findAll();
	}
	
	public String createStudent(Student student) {
		this.studentRepository.save(student);
		return "User saved";
	}
	
	public String deleteStudent(Integer id) {
		Student student = this.studentRepository.findById(id).get();
		if(student != null) {			
			this.studentRepository.delete(student);
			return "Student Deleted";
		}
		else return "No Student Found";
	}
}