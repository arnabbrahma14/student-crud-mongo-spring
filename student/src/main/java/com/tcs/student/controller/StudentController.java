package com.tcs.student.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.PathVariable;

import com.tcs.student.service.StudentService;
import com.tcs.student.model.Student;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "/api")
public class StudentController {
	
	@Autowired
	private StudentService studentService;

	@RequestMapping(value = "/student" , method = RequestMethod.GET)
	public List<Student> getStudentList() {
		return this.studentService.getStudentList();
	}
	
	@RequestMapping(value = "/student" , method = RequestMethod.POST)
	public String createStudent(@RequestBody Student student) {
		return this.studentService.createStudent(student);
	}
	
	@RequestMapping(value = "/student/{id}" , method = RequestMethod.DELETE) 
	public String deleteStudent(@PathVariable String id ) {
		return this.studentService.deleteStudent(Integer.parseInt(id));
	}
	
	
}
