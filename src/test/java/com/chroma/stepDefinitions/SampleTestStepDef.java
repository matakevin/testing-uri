package com.chroma.stepDefinitions;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import com.chroma.pages.DashboardPage;
import com.chroma.pages.LoginPage;
import com.chroma.pages.LoginTwoPage;
import com.chroma.utils.CucumberLogUtils;
import com.chroma.web.CommonMethods;
import com.chroma.web.WebDriverUtils;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SampleTestStepDef {

    LoginPage loginPage = new LoginPage();
    DashboardPage dashboardPage = new DashboardPage();

    @Given("a user is on the login page {string}")
    public void a_user_is_on_the_login_page(String url) {
        WebDriverUtils.driver.get(url);
        CucumberLogUtils.logScreenShot();
    }

    @When("user logs in with valid credentials username {string} and password {string}")
    public void user_logs_in_with_valid_credentials_username_and_password(String username, String password) {
        loginPage.userNameTextBox.sendKeys(username);
        loginPage.passwordTextBox.sendKeys(password);
        loginPage.signInButton.click();
    }

    @Then("user should see dashboard page with URL {string}")
    public void user_should_see_dashboard_page_with_URL(String url) {
        String actualHomePageURL = WebDriverUtils.driver.getCurrentUrl();
        Assert.assertEquals(actualHomePageURL, url);
    }

    @Then("the following modules should be displayed {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}")
    public void the_following_modules_should_be_displayed(String studentInformation, String feesCollection,
            String income, String expenses,
            String academics, String humanResource, String homework, String reports) {

        String actualStudentInfoText = dashboardPage.studentInformationModule.getText();
        CommonMethods.handledAssertEquals(actualStudentInfoText, studentInformation);

        String actualFeesCollectionText = dashboardPage.feesCollectionModule.getText();
        CommonMethods.handledAssertEquals(actualFeesCollectionText, feesCollection);

        String actualIncomeModuleText = dashboardPage.incomeModule.getText();
        CommonMethods.handledAssertEquals(actualIncomeModuleText, income);

        String actualExpensesModuleText = dashboardPage.expensesModule.getText();
        CommonMethods.handledAssertEquals(actualExpensesModuleText, expenses);

        String actualAcademicsModuleText = dashboardPage.academicsModule.getText();
        CommonMethods.handledAssertEquals(actualAcademicsModuleText, academics);

        String actualHumanResourceModuleText = dashboardPage.humanResourceModule.getText();
        CommonMethods.handledAssertEquals(actualHumanResourceModuleText, humanResource);

        String actualHomeworkModuleText = dashboardPage.homeworkModule.getText();
        CommonMethods.handledAssertEquals(actualHomeworkModuleText, homework);

        String actualReportsModuleText = dashboardPage.reportsModule.getText();
        CommonMethods.handledAssertEquals(actualReportsModuleText, reports);
    }
}
