package com.chroma.web;

import java.time.Duration;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import com.chroma.utils.ConfigReader;
import com.chroma.utils.FrameworkConstants;

import io.github.bonigarcia.wdm.WebDriverManager;
import io.github.bonigarcia.wdm.config.OperatingSystem;

public class WebDriverUtils {

    public static WebDriver driver;

    public static void setUp() {

        ConfigReader.readProperties(FrameworkConstants.CONFIGURATION_FILEPATH);
        String osName = FrameworkConstants.GET_OS_NAME;
        if (ConfigReader.getPropertyValue("browser").equalsIgnoreCase("chrome")) {

            if (osName.contains("Windows")) {
                WebDriverManager.chromedriver().operatingSystem(OperatingSystem.WIN).setup();
                driver = new ChromeDriver();
                driver.manage().window().maximize();
                driver.manage().deleteAllCookies();
                driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
            } else if (osName.contains("Mac")) {
                WebDriverManager.chromedriver().operatingSystem(OperatingSystem.MAC).setup();
                driver = new ChromeDriver();
                driver.manage().window().maximize();
                driver.manage().deleteAllCookies();
                driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
            } else if (osName.contains("Linux")) {
                WebDriverManager.chromedriver().operatingSystem(OperatingSystem.LINUX).setup();
                driver = new ChromeDriver();
                driver.manage().window().maximize();
                driver.manage().deleteAllCookies();
                driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
            }

        } else if (ConfigReader.getPropertyValue("browser").equalsIgnoreCase("firefox")) {

            if (osName.contains("windows")) {
                WebDriverManager.firefoxdriver().operatingSystem(OperatingSystem.WIN).setup();
                driver = new FirefoxDriver();
                driver.manage().window().maximize();
                driver.manage().deleteAllCookies();
                driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
            } else if (osName.contains("mac")) {
                WebDriverManager.firefoxdriver().operatingSystem(OperatingSystem.MAC).setup();
                driver = new FirefoxDriver();
                driver.manage().window().maximize();
                driver.manage().deleteAllCookies();
                driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
            } else if (osName.contains("Linux")) {
                WebDriverManager.firefoxdriver().operatingSystem(OperatingSystem.LINUX).setup();
                driver = new FirefoxDriver();
                driver.manage().window().maximize();
                driver.manage().deleteAllCookies();
                driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
            }

        } else if (ConfigReader.getPropertyValue("browser").equalsIgnoreCase("edge")) {

            if (osName.contains("windows")) {
                WebDriverManager.edgedriver().operatingSystem(OperatingSystem.WIN).setup();
                driver = new EdgeDriver();
                driver.manage().window().maximize();
                driver.manage().deleteAllCookies();
                driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
            } else if (osName.contains("mac")) {
                WebDriverManager.edgedriver().operatingSystem(OperatingSystem.MAC).setup();
                driver = new EdgeDriver();
                driver.manage().window().maximize();
                driver.manage().deleteAllCookies();
                driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
            } else if (osName.contains("Linux")) {
                WebDriverManager.edgedriver().operatingSystem(OperatingSystem.LINUX).setup();
                driver = new EdgeDriver();
                driver.manage().window().maximize();
                driver.manage().deleteAllCookies();
                driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
            }

        } else {
            throw new RuntimeException("INVALID BROWSER NAME");
        }

    }

    public static void tearDown(){
        driver.quit();
    }

}
