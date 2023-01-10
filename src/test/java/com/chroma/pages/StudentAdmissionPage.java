package com.chroma.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.chroma.web.WebDriverUtils;

public class StudentAdmissionPage {

    /* STUDENT ADMISSION HEADER */
    @FindBy(xpath = "//h4[normalize-space()='Student Admission']")
    public WebElement studentAdmissionHeader;


    public StudentAdmissionPage(){
        PageFactory.initElements(WebDriverUtils.driver, this);
    }
    
}
