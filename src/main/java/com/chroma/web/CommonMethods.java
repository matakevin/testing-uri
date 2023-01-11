package com.chroma.web;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

public class CommonMethods {

    public static WebElement inspectElement(String webElement) {

        return WebDriverUtils.driver.findElement(By.xpath(webElement));
    }

    public static void handledAssertEquals(String actualValue, String expectedValue) {
        try {
            Assert.assertEquals(actualValue, expectedValue);
        } catch (AssertionError e) {
            e.printStackTrace();
        }
    }

    /**
     * USE THIS METHOD TO SELECT A VALUE FROM A DROPDOWN BY VISIBLE TEXT
     * 
     * @param element
     * @param value
     */
    public static void selectDropDownValue(WebElement element, String visibleText) {

        Select select = new Select(element);
        select.selectByVisibleText(visibleText);
    }

    /**
     * USE THIS METHOD TO SELECT A VALUE FROM A DROPDOWN BY VALUE
     * 
     * @param visibleText
     * @param element
     */
    public static void selectDropDownValue(String visibleText, WebElement element) {

        Select select = new Select(element);
        select.selectByValue(visibleText);
    }

    /**
     * USE THIS METHOD TO SELECT A VALUE FROM A DROPDOWN BY INDEX
     * @param element
     * @param index
     */
    public static void selectDropDownValue(WebElement element, int index) {

        Select select = new Select(element);
        select.selectByIndex(index);
    }

}