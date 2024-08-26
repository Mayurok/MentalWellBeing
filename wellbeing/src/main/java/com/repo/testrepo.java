package com.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.modal.Test;
import com.modal.Users;

public interface testrepo extends JpaRepository<Test,Long>{
  List<Test> findByUser(Users user);

}
