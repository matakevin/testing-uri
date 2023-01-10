package com.chroma.stepDefinitions;

import com.chroma.utils.CucumberLogUtils;
import com.chroma.web.WebDriverUtils;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends WebDriverUtils{


    @Before
    public void start(Scenario scenario){
        CucumberLogUtils.scenario = scenario;
        setUp();
    }

    @After
    public void end(){
        tearDown();
    }
    
}
