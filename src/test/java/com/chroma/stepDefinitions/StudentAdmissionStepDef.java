package com.chroma.stepDefinitions;

import com.chroma.pages.DashboardPage;

import cucumber.api.java.en.When;

public class StudentAdmissionStepDef {

    DashboardPage dashboardPage = new DashboardPage();

    @When("navigates to Student Information Module")
    public void navigates_to_Student_Information_Module() {
        dashboardPage.studentInformationModule.click();
    }

    @When("navigates to Student Admission Submodule")
    public void navigates_to_Student_Admission_Submodule() {
     
    }
}
