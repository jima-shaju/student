package com.application.spring.mongo.api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.application.spring.mongo.api.model.Registration;

public interface Registrationrepository extends MongoRepository<Registration, String>{

}