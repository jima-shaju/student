package com.application.spring.mongo.api.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

//@Getter
//@Setter
//@ToString

@Document(collection = "Registration")
public class Registration {

    @Id
    private String id;
    private String name;
    private String dob;
    private String classOption;
    private String divisionOption;
    private String gender;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getClassOption() {
		return classOption;
	}
	public void setClassOption(String classOption) {
		this.classOption = classOption;
	}
	public String getDivisionOption() {
		return divisionOption;
	}
	public void setDivisionOption(String divisionOption) {
		this.divisionOption = divisionOption;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	@Override
	public String toString() {
		return "Registration [id=" + id + ", name=" + name + ", dob=" + dob + ", classOption=" + classOption
				+ ", divisionOption=" + divisionOption + ", gender=" + gender + "]";
	}
    
    
    
}
