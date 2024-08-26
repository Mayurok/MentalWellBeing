package com.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Services.TestServices;
import com.modal.Test;
import com.modal.TestResponse;
import com.modal.Users;
import com.repo.testrepo;
import com.repo.userrepo;
import com.request.Loginrequest;

@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RestController
@RequestMapping("/api")
public class UserController {
 
 @Autowired
 userrepo urepo;
 
 @Autowired
 testrepo trepo;
 
 @Autowired
 TestServices tserv;
 
// @Autowired
// private JavaMailSender javamailsender;
 
 @PostMapping("/register")
 public ResponseEntity<Users> RegisterUser(@RequestBody Users user){
	Users saveduser=urepo.save(user);
	return ResponseEntity.status(HttpStatus.CREATED).body(saveduser);	 
 }
  

 
 @PostMapping("/login")
 public ResponseEntity<?> login(@RequestBody Loginrequest loginRequest) throws Exception {
     String email = loginRequest.getEmail();
     String password = loginRequest.getPassword();

     Users user = urepo.findByEmail(email);
     if (user == null) {
         return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
     }

     if (!user.getPassword().equals(password)) {
         return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
     }

     // Custom response object with message and user data
     Map<String, Object> response = new HashMap<>();
     response.put("message", "Login Successful");
     response.put("user", user);

     return ResponseEntity.ok(response);
 }


 public Optional<Test> getExamById(long id) {
     return trepo.findById(id);
 }
 

 
 @GetMapping("/users/{id}")
 public ResponseEntity<List<Test>> getExamByUserId(@PathVariable long id) {
     List<Test> tests = tserv.getExamByUserId(id);
     return ResponseEntity.ok(tests);  // Spring will automatically convert the List<Test> to JSON
 }

 
 @PostMapping("/posttest")
 public ResponseEntity<Test> createExam(@RequestBody Test test, @RequestParam long userId) {
     return ResponseEntity.ok(tserv.saveExam(test, userId));
 }
 
}

