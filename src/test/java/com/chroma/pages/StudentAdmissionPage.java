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

    /* FIRST NAME TEXT BOX */
    @FindBy(xpath = "//input[@id='firstname']")
    public WebElement firstNameTextBox;

    /* LAST NAME TEXT BOX */
    @FindBy(xpath = "//input[@id='lastname']")
    public WebElement lastNameTextBox;

    /* GENDER DROPDOWN */
    @FindBy(xpath = "//select[@name='gender']")
    public WebElement genderDropDown;

    /* DATE OF BIRTH CALENDAR */
    @FindBy(xpath = "//input[@id='dob']")
    public WebElement dateOfBirthCalendar;

    /* MOTHERS NAME TEXT BOX */
    @FindBy(xpath = "//input[@id='mother_name']")
    public WebElement mothersNameTextBox;

    /* MOTHER RADIO BUTTON */
    @FindBy(xpath = "//label[normalize-space()='Mother']")
    public WebElement motherRadioButton;

    public StudentAdmissionPage(){
        PageFactory.initElements(WebDriverUtils.driver, this);
    }
}
