package com.application.spring.mongo.api.controller;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.application.spring.mongo.api.model.Registration;
import com.application.spring.mongo.api.repository.Registrationrepository;

@CrossOrigin(origins ="http://localhost:3000/")
@RestController
public class Registrationcontroller {

	@Autowired
	private Registrationrepository repository;

	@PostMapping("/addStudent")
	public String savestudent(@RequestBody Registration reg) {
	    repository.save(reg);
		return "Added " ;
	}

	@GetMapping("/findAllStudents")
	public List<Registration> getStudents() {
		return repository.findAll();
	}

	/*@GetMapping("/findAllStudents/{id}")
	public Optional<Registration> getStudents(@PathVariable int id) {
		return repository.findById(id);
	}*/

	/*@DeleteMapping("/delete/{id}")
	public String deleteBook(@PathVariable int id) {
		repository.deleteById(id);
		return "book deleted with id : " + id;
	}*/

}
