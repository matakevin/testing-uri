package com.chroma.pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.chroma.web.WebDriverUtils;

public class DashboardPage {

    /* Common xpath for all module links */
    @FindBy(xpath = "/html/body/div[1]/aside/div/section/ul[2]/li")
    public List<WebElement> dashboardModuleLinks;

    /* STUDENT INFORMATION MODULE */
    @FindBy(xpath = "//span[contains(text(),'Student Information')]")
    public WebElement studentInformationModule;

    /* FEES COLLECTION MODULE */
    @FindBy(xpath = "//span[contains(text(),'Fees Collection')]")
    public WebElement feesCollectionModule;

    /* INCOME MODULE */
    @FindBy(xpath = "//span[contains(text(),'Income')]")
    public WebElement incomeModule;

    /* EXPENSES MODULE */
    @FindBy(xpath = "//span[contains(text(),'Expenses')]")
    public WebElement expensesModule;

    /* ACADEMICS MODULE */
    @FindBy(xpath = "//span[contains(text(),'Academics')]")
    public WebElement academicsModule;

    /* HUMAN RESOURCE MODULE */
    @FindBy(xpath = "//span[contains(text(),'Human Resource')]")
    public WebElement humanResourceModule;

    /* HOMEWORK MODULE */
    @FindBy(xpath = "//span[contains(text(),'Homework')]")
    public WebElement homeworkModule;

    /* REPORTS MODULE */
    @FindBy(xpath = "//span[contains(text(),'Reports')]")
    public WebElement reportsModule;

    /**
     * USE THIS METHOD TO DYNAMICALLY LOCATE A MODULE
     * 
     * @param moduleText
     * @return
     */
    public static WebElement dynamicModuleLocator(String moduleText) {
        return WebDriverUtils.driver.findElement(By.xpath("//span[contains(text(),'" + moduleText + "')]"));
    }

    public DashboardPage() {
        PageFactory.initElements(WebDriverUtils.driver, this);
    }

}
