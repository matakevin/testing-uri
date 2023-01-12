package com.chroma.stepDefinitions;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.ui.Select;

import com.chroma.pages.BulkDeletePage;
import com.chroma.pages.DashboardPage;
import com.chroma.pages.StudentAdmissionPage;
import com.chroma.web.CommonMethods;
import com.chroma.web.WebDriverUtils;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StudentAdmissionStepDef {

    DashboardPage dashboardPage = new DashboardPage();
    StudentAdmissionPage studentAdmissionPage = new StudentAdmissionPage();
    BulkDeletePage bulkDeletePage = new BulkDeletePage();

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

    @Then("enters Guardian Phone number {string}")
    public void enters_Guardian_Phone_number(String phoneNumber) {

        studentAdmissionPage.guardianPhoneNumberTextBox.sendKeys(phoneNumber);
    }

    @When("user clicks on save button")
    public void user_clicks_on_save_button() {

        studentAdmissionPage.saveButton.click();
    }

    @Then("student is succesfully saved and confirmation message displays {string}")
    public void student_is_succesfully_saved_and_confirmation_message_displays(String expectedSuccessMessage) {

        String actualSuccessMessage = studentAdmissionPage.successfullySavedMessage.getText();
        CommonMethods.handledAssertEquals(actualSuccessMessage, expectedSuccessMessage);
    }

    @When("user navigates to Bulk Delete submodule")
    public void user_navigates_to_Bulk_Delete_submodule() {
        dashboardPage.bulkDeleteSubModule.click();
    }

    @When("for Bulk Delete selects Class {string} and Section {string}")
    public void for_Bulk_Delete_selects_Class_and_Section(String className, String sectionName) {

        CommonMethods.selectDropDownValue(bulkDeletePage.classNameDropDown, className);
        CommonMethods.selectDropDownValue(bulkDeletePage.sectionNameDropDown, sectionName);
    }

    @When("clicks search button")
    public void clicks_search_button() {
        bulkDeletePage.searchButton.click();
    }
}
