package com.application.spring.mongo.api.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
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
	public String savestudent(@RequestBody Registration reg, BindingResult br) {
	   if(br.hasErrors())
	   {
		  
		   return "make correct options...";
	   }
	   else {
		   long n=repository.count();
			  if(n<10)
			  {
				  reg.setId("R-00"+n);
			  }
			  else
			  {
				  reg.setId("R-0"+n);
			  }
		   
		repository.save(reg);
		return "Added " ;
	   }
	}

	@GetMapping("/findAllStudents")
	public List<Registration> getStudents() {
		return repository.findAll(Sort.by(Sort.Direction.ASC,"name"));
	}

	

}
