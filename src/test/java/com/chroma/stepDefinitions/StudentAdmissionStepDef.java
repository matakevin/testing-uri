package com.chroma.stepDefinitions;

import com.chroma.pages.DashboardPage;
import com.chroma.pages.StudentAdmissionPage;

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
    public void user_is_directed_to_Student_Admission_page_with_the_text(String text) {

    }
}
