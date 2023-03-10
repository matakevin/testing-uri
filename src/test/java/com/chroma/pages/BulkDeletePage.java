package com.chroma.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.chroma.web.WebDriverUtils;

public class BulkDeletePage {

    /* CLASS NAME DROPDOWN */
    @FindBy(xpath = "//select[@name='class_id']")
    public WebElement classNameDropDown;

    /* SECTION NAME DROPDOWN */
    @FindBy(xpath = "//select[@name='section_id']")
    public WebElement sectionNameDropDown;

    /* SEARCH BUTTON */
    @FindBy(xpath = "//button[normalize-space()='Search']")
    public WebElement searchButton;

    /* DELETE BUTTON */
    @FindBy(xpath = "//button[normalize-space()='Delete']")
    public WebElement deleteButton;

    public static WebElement studentRecordLocator(String studentRecord) {

       return WebDriverUtils.driver
                .findElement(
                        By.xpath("//a[contains(text(),'" + studentRecord + "')]//parent::td//parent::tr/td/input"));
    }

    public BulkDeletePage() {
        PageFactory.initElements(WebDriverUtils.driver, this);
    }
}
