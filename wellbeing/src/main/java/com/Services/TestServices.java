package com.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.modal.Test;
import com.modal.Users;
import com.repo.testrepo;
import com.repo.userrepo;
@Service
public class TestServices {
	
	@Autowired
	userrepo urepo;
	
	@Autowired
	testrepo trepo;
	
	public Test saveTest(Test test){
	    Users user = urepo.findById(test.getUser().getUid())
	        .orElseThrow(()-> new RuntimeException("User not found"));
	    test.setUser(user);
	    return trepo.save(test);
	}
	
	 public List<Test> getExamByUserId(long id) {
    	 Optional<Users> user = urepo.findById(id);
    	 Users u=null;
    	 if (user.isPresent()) {
    		  u=user.get();   
         }
    	 return trepo.findByUser(u);
    }
	 
	 public Test saveExam(Test exam, long userId) {
	        Optional<Users> user = urepo.findById(userId);
	        if (user.isPresent()) {
	            exam.setUser(user.get());
	            return trepo.save(exam);
	        }
	        throw new RuntimeException("User not found");
	    }
}
