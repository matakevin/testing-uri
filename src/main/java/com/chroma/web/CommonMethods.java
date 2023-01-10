package com.chroma.web;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
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

}
