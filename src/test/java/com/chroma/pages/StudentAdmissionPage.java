package com.chroma.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.chroma.web.WebDriverUtils;

public class StudentAdmissionPage {

    /* STUDENT ADMISSION HEADER */
    @FindBy(xpath = "//h4[normalize-space()='Student Admission']")
    public WebElement studentAdmissionHeader;

    /* STUDENT ADMISSION NUMBER TEXT BOX */
    @FindBy(xpath = "//input[@id='admission_no']")
    public WebElement studentAdmissionNumberTextBox;

    /* CLASS DROPDOWN */
    @FindBy(xpath = "//select[@id='class_id']")
    public WebElement classDropDown;

    /* SECTION DROPDOWN */
    @FindBy(xpath = "//select[@id='section_id']")
    public WebElement sectionDropDown;
    
    public StudentAdmissionPage(){
        PageFactory.initElements(WebDriverUtils.driver, this);
    }
    
}