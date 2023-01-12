package com.chroma.stepDefinitions;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.ui.Select;

import com.chroma.pages.DashboardPage;
import com.chroma.pages.StudentAdmissionPage;
import com.chroma.web.CommonMethods;
import com.chroma.web.WebDriverUtils;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StudentAdmissionStepDef {

    DashboardPage dashboardPage = new DashboardPage();
    StudentAdmissionPage studentAdmissionPage = new StudentAdmissionPage();

    @When("navigates to Student Information Module")
    public void navigates_to_Student_Information_Module() {
        dashboardPage.studentInformationModule.click();
    }

    @When("navigates to Student Admission Submodule")
    public void navigates_to_Student_Admission_Submodule() {
        dashboardPage.studentAdmissionSubmodule.click();
    }

    @Then("user is directed to Student Admission page with the text {string}")
    public void user_is_directed_to_Student_Admission_page_with_the_text(String expectedHeaderText) {

        String actualHeaderText = studentAdmissionPage.studentAdmissionHeader.getText();
        CommonMethods.handledAssertEquals(actualHeaderText, expectedHeaderText);
    }

    @Then("enters Student unique Admission Number {string}")
    public void enters_Student_unique_Admission_Number(String admissionNumber) {

        studentAdmissionPage.studentAdmissionNumberTextBox.sendKeys(admissionNumber);
    }

    @Then("selects Class {string} and Section {string}")
    public void selects_Class_and_Section(String className, String sectionName) {

        CommonMethods.selectDropDownValue(studentAdmissionPage.classDropDown, className);
        CommonMethods.selectDropDownValue(studentAdmissionPage.sectionDropDown, sectionName);
    }

    @Then("enters Students first name {string} and last name {string}")
    public void enters_Students_first_name_and_last_name(String firstName, String lastName) {

        studentAdmissionPage.firstNameTextBox.sendKeys(firstName);
        studentAdmissionPage.lastNameTextBox.sendKeys(lastName);
    }

    @Then("selects gender {string}")
    public void selects_gender(String gender) {
        CommonMethods.selectDropDownValue(studentAdmissionPage.genderDropDown, gender);
    }

    @Then("enters Date of Birth {string}")
    public void enters_Date_of_Birth(String dob) {

        JavascriptExecutor js = (JavascriptExecutor) WebDriverUtils.driver;
        js.executeScript("arguments[0].setAttribute('value','" + dob + "');", studentAdmissionPage.dateOfBirthCalendar);
    }

    @Then("for Parent Guardian Details enters mothers name {string}")
    public void for_Parent_Guardian_Details_enters_mothers_name(String mothersName) {

        studentAdmissionPage.mothersNameTextBox.sendKeys(mothersName);
    }

    @Then("for If Guardian Is field clicks on Mother radio button")
    public void for_If_Guardian_Is_field_clicks_on_Mother_radio_button() {
        studentAdmissionPage.motherRadioButton.click();
    }
}
