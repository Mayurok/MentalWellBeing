package com.modal;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="test")
@Data
public class Test {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long tid;
	
	String TestResult;
	
	int TestScore;
	
	String TestType;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JsonIgnore
	@JoinColumn(name="user_id",nullable = false)
	Users user;
	
}
