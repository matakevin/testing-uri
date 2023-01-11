package com.chroma.stepDefinitions;

import org.openqa.selenium.support.ui.Select;

import com.chroma.pages.DashboardPage;
import com.chroma.pages.StudentAdmissionPage;
import com.chroma.web.CommonMethods;

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
    public void enters_Student_unique_Admission_Number(String admissionNumber) throws InterruptedException {

        studentAdmissionPage.studentAdmissionNumberTextBox.sendKeys(admissionNumber);
        Thread.sleep(2000);
    }

    @Then("selects Class {string} and Section {string}")
    public void selects_Class_and_Section(String className, String sectionName) throws InterruptedException {

        Select select = new Select(studentAdmissionPage.classDropDown);
        select.selectByVisibleText(className);

        Select selectTwo = new Select(studentAdmissionPage.sectionDropDown);
        Thread.sleep(2000);
        
    }
}
