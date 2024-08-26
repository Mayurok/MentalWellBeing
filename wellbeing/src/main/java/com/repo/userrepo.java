package com.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.modal.Users;

public interface userrepo extends JpaRepository<Users, Long> {
	Users findByEmail(String email);
	
	Users findByUsername(String username);
	
	Users findByUid(long uid);

}
