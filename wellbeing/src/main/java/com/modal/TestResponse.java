package com.modal;

import lombok.Data;

@Data
public class TestResponse {
	

	    private Long tid;
	    private String testResult;
	    private int testScore;
	    private String testType;
	    private Long userId;

	    // Constructor
	    public TestResponse(Long tid, String testResult, int testScore, String testType, Long userId) {
	        this.tid = tid;
	        this.testResult = testResult;
	        this.testScore = testScore;
	        this.testType = testType;
	        this.userId = userId;
	    }

	    
	}


