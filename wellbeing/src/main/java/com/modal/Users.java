package com.modal;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="users")
@Data
public class Users {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long uid;
	
	String username;
	
	String email;
	
	String password;
	
	
}
