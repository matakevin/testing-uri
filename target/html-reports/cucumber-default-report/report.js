$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/com/chroma/features/Student%20Admission.feature");
formatter.feature({
  "name": "Student Admission Test Scenarios",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Student Admission",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Progression"
    }
  ]
});
formatter.step({
  "name": "a user is on the login page \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user logs in with valid credentials username \"\u003cUSERNAME\u003e\" and password \"\u003cPASSWORD\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "navigates to Student Information Module",
  "keyword": "And "
});
formatter.step({
  "name": "navigates to Student Admission Submodule",
  "keyword": "And "
});
formatter.step({
  "name": "user is directed to Student Admission page with the text \"Student Admission\"",
  "keyword": "Then "
});
formatter.step({
  "name": "enters Student unique Admission Number \"\u003cADMISSION NUMBER\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "selects Class \"\u003cCLASS\u003e\" and Section \"\u003cSECTION\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enters Students first name \"\u003cFIRST NAME\u003e\" and last name \"\u003cLAST NAME\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "selects gender \"\u003cGENDER\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enters Date of Birth \"\u003cDOB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "for Parent Guardian Details enters mothers name \"\u003cMOTHERS NAME\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "for If Guardian Is field clicks on Mother radio button",
  "keyword": "And "
});
formatter.step({
  "name": "enters Guardian Phone number \"\u003cGUARDIAN PHONE NUMBER\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.step({
  "name": "student is succesfully saved and confirmation message displays \"Record Saved Successfully\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user navigates to Bulk Delete submodule",
  "keyword": "When "
});
formatter.step({
  "name": "for Bulk Delete selects Class \"\u003cCLASS\u003e\" and Section \"\u003cSECTION\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "clicks search button",
  "keyword": "And "
});
formatter.step({
  "name": "admitted student with first name \"\u003cFIRST NAME\u003e\" and last name \"\u003cLAST NAME\u003e\" is deleted for testing purposes",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "URL",
        "USERNAME",
        "PASSWORD",
        "ADMISSION NUMBER",
        "CLASS",
        "SECTION",
        "FIRST NAME",
        "LAST NAME",
        "GENDER",
        "DOB",
        "MOTHERS NAME",
        "GUARDIAN PHONE NUMBER"
      ]
    },
    {
      "cells": [
        "https://mexil.it/chroma_tech_academy/dev/site/login",
        "general@teacher.com",
        "123456",
        "65015887",
        "SDET",
        "Testing Fundamentals",
        "CHROMA",
        "TECH",
        "Female",
        "04/01/1990",
        "CHROMA MOM",
        "7036875816"
      ]
    },
    {
      "cells": [
        "https://mexil.it/chroma_tech_academy/dev/site/login",
        "general@teacher.com",
        "123456",
        "65015887",
        "Cyber Security",
        "Networking Fundamentals",
        "DIEGO",
        "TECH",
        "Male",
        "03/10/1990",
        "BEST MOM",
        "7036871234"
      ]
    },
    {
      "cells": [
        "https://mexil.it/chroma_tech_academy/test/site/login",
        "general@teacher.com",
        "123456",
        "65015887",
        "Cyber Security",
        "Networking Fundamentals",
        "SHOMIR",
        "TECH",
        "Male",
        "03/10/1990",
        "WORST MOM",
        "7036871234"
      ]
    },
    {
      "cells": [
        "https://mexil.it/chroma_tech_academy/stage/site/login",
        "general@teacher.com",
        "123456",
        "65015887",
        "Cyber Security",
        "Networking Fundamentals",
        "ANDRES",
        "TECH",
        "Male",
        "03/10/1990",
        "GOOD MOM",
        "7036871234"
      ]
    },
    {
      "cells": [
        "https://chroma.mexil.it/site/login",
        "general@teacher.com",
        "123456",
        "65015887",
        "Cyber Security",
        "Networking Fundamentals",
        "LUIS",
        "TECH",
        "Male",
        "03/10/1990",
        "BETTER MOM",
        "7036871234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Student Admission",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Progression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a user is on the login page \"https://mexil.it/chroma_tech_academy/dev/site/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SampleTestStepDef.a_user_is_on_the_login_page(String)"
});
formatter.embedding("image/png", "embedded0.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials username \"general@teacher.com\" and password \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "SampleTestStepDef.user_logs_in_with_valid_credentials_username_and_password(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027form-username\u0027]\"}\n  (Session info: chrome\u003d109.0.5414.87)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.7.2\u0027, revision: \u00274d4020c3b7\u0027\nSystem info: os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [dd3ff444e4de90eecea34a9b613e7bfc, findElement {using\u003dxpath, value\u003d//input[@id\u003d\u0027form-username\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 109.0.5414.87, chrome: {chromedriverVersion: 109.0.5414.74 (e7c5703604da..., userDataDir: /var/folders/ph/bzj7vj0x6js...}, goog:chromeOptions: {debuggerAddress: localhost:51123}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: MAC, proxy: Proxy(), se:cdp: ws://localhost:51123/devtoo..., se:cdpVersion: 109.0.5414.87, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: dd3ff444e4de90eecea34a9b613e7bfc\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:535)\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:351)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:343)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\n\tat com.sun.proxy.$Proxy20.sendKeys(Unknown Source)\n\tat com.chroma.stepDefinitions.SampleTestStepDef.user_logs_in_with_valid_credentials_username_and_password(SampleTestStepDef.java:27)\n\tat ✽.user logs in with valid credentials username \"general@teacher.com\" and password \"123456\"(file:src/test/java/com/chroma/features/Student%20Admission.feature:6)\n",
  "status": "failed"
});
formatter.step({
  "name": "navigates to Student Information Module",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.navigates_to_Student_Information_Module()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "navigates to Student Admission Submodule",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.navigates_to_Student_Admission_Submodule()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is directed to Student Admission page with the text \"Student Admission\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentAdmissionStepDef.user_is_directed_to_Student_Admission_page_with_the_text(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enters Student unique Admission Number \"65015887\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_Student_unique_Admission_Number(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "selects Class \"SDET\" and Section \"Testing Fundamentals\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.selects_Class_and_Section(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enters Students first name \"CHROMA\" and last name \"TECH\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_Students_first_name_and_last_name(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "selects gender \"Female\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.selects_gender(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enters Date of Birth \"04/01/1990\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_Date_of_Birth(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "for Parent Guardian Details enters mothers name \"CHROMA MOM\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.for_Parent_Guardian_Details_enters_mothers_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "for If Guardian Is field clicks on Mother radio button",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.for_If_Guardian_Is_field_clicks_on_Mother_radio_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enters Guardian Phone number \"7036875816\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_Guardian_Phone_number(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.match({
  "location": "StudentAdmissionStepDef.user_clicks_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "student is succesfully saved and confirmation message displays \"Record Saved Successfully\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentAdmissionStepDef.student_is_succesfully_saved_and_confirmation_message_displays(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to Bulk Delete submodule",
  "keyword": "When "
});
formatter.match({
  "location": "StudentAdmissionStepDef.user_navigates_to_Bulk_Delete_submodule()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "for Bulk Delete selects Class \"SDET\" and Section \"Testing Fundamentals\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.for_Bulk_Delete_selects_Class_and_Section(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks search button",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.clicks_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "admitted student with first name \"CHROMA\" and last name \"TECH\" is deleted for testing purposes",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentAdmissionStepDef.admitted_student_with_first_name_and_last_name_is_deleted_for_testing_purposes(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Student Admission",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Progression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a user is on the login page \"https://mexil.it/chroma_tech_academy/dev/site/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SampleTestStepDef.a_user_is_on_the_login_page(String)"
});
formatter.embedding("image/png", "embedded1.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials username \"general@teacher.com\" and password \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "SampleTestStepDef.user_logs_in_with_valid_credentials_username_and_password(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027form-username\u0027]\"}\n  (Session info: chrome\u003d109.0.5414.87)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.7.2\u0027, revision: \u00274d4020c3b7\u0027\nSystem info: os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [a24e0900c635c64d6572da99b23d4aee, findElement {using\u003dxpath, value\u003d//input[@id\u003d\u0027form-username\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 109.0.5414.87, chrome: {chromedriverVersion: 109.0.5414.74 (e7c5703604da..., userDataDir: /var/folders/ph/bzj7vj0x6js...}, goog:chromeOptions: {debuggerAddress: localhost:51251}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: MAC, proxy: Proxy(), se:cdp: ws://localhost:51251/devtoo..., se:cdpVersion: 109.0.5414.87, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: a24e0900c635c64d6572da99b23d4aee\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:535)\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:351)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:343)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\n\tat com.sun.proxy.$Proxy20.sendKeys(Unknown Source)\n\tat com.chroma.stepDefinitions.SampleTestStepDef.user_logs_in_with_valid_credentials_username_and_password(SampleTestStepDef.java:27)\n\tat ✽.user logs in with valid credentials username \"general@teacher.com\" and password \"123456\"(file:src/test/java/com/chroma/features/Student%20Admission.feature:6)\n",
  "status": "failed"
});
formatter.step({
  "name": "navigates to Student Information Module",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.navigates_to_Student_Information_Module()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "navigates to Student Admission Submodule",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.navigates_to_Student_Admission_Submodule()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is directed to Student Admission page with the text \"Student Admission\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentAdmissionStepDef.user_is_directed_to_Student_Admission_page_with_the_text(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enters Student unique Admission Number \"65015887\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_Student_unique_Admission_Number(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "selects Class \"Cyber Security\" and Section \"Networking Fundamentals\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.selects_Class_and_Section(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enters Students first name \"DIEGO\" and last name \"TECH\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_Students_first_name_and_last_name(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "selects gender \"Male\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.selects_gender(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enters Date of Birth \"03/10/1990\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_Date_of_Birth(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "for Parent Guardian Details enters mothers name \"BEST MOM\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.for_Parent_Guardian_Details_enters_mothers_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "for If Guardian Is field clicks on Mother radio button",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.for_If_Guardian_Is_field_clicks_on_Mother_radio_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enters Guardian Phone number \"7036871234\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_Guardian_Phone_number(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.match({
  "location": "StudentAdmissionStepDef.user_clicks_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "student is succesfully saved and confirmation message displays \"Record Saved Successfully\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentAdmissionStepDef.student_is_succesfully_saved_and_confirmation_message_displays(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to Bulk Delete submodule",
  "keyword": "When "
});
formatter.match({
  "location": "StudentAdmissionStepDef.user_navigates_to_Bulk_Delete_submodule()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "for Bulk Delete selects Class \"Cyber Security\" and Section \"Networking Fundamentals\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.for_Bulk_Delete_selects_Class_and_Section(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks search button",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.clicks_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "admitted student with first name \"DIEGO\" and last name \"TECH\" is deleted for testing purposes",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentAdmissionStepDef.admitted_student_with_first_name_and_last_name_is_deleted_for_testing_purposes(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Student Admission",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Progression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a user is on the login page \"https://mexil.it/chroma_tech_academy/test/site/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SampleTestStepDef.a_user_is_on_the_login_page(String)"
});
formatter.embedding("image/png", "embedded2.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials username \"general@teacher.com\" and password \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "SampleTestStepDef.user_logs_in_with_valid_credentials_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to Student Information Module",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.navigates_to_Student_Information_Module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to Student Admission Submodule",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.navigates_to_Student_Admission_Submodule()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is directed to Student Admission page with the text \"Student Admission\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentAdmissionStepDef.user_is_directed_to_Student_Admission_page_with_the_text(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters Student unique Admission Number \"65015887\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_Student_unique_Admission_Number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selects Class \"Cyber Security\" and Section \"Networking Fundamentals\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.selects_Class_and_Section(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters Students first name \"SHOMIR\" and last name \"TECH\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_Students_first_name_and_last_name(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selects gender \"Male\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.selects_gender(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters Date of Birth \"03/10/1990\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_Date_of_Birth(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "for Parent Guardian Details enters mothers name \"WORST MOM\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.for_Parent_Guardian_Details_enters_mothers_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "for If Guardian Is field clicks on Mother radio button",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.for_If_Guardian_Is_field_clicks_on_Mother_radio_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters Guardian Phone number \"7036871234\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_Guardian_Phone_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.match({
  "location": "StudentAdmissionStepDef.user_clicks_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "student is succesfully saved and confirmation message displays \"Record Saved Successfully\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentAdmissionStepDef.student_is_succesfully_saved_and_confirmation_message_displays(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to Bulk Delete submodule",
  "keyword": "When "
});
formatter.match({
  "location": "StudentAdmissionStepDef.user_navigates_to_Bulk_Delete_submodule()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "for Bulk Delete selects Class \"Cyber Security\" and Section \"Networking Fundamentals\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.for_Bulk_Delete_selects_Class_and_Section(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks search button",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.clicks_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admitted student with first name \"SHOMIR\" and last name \"TECH\" is deleted for testing purposes",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentAdmissionStepDef.admitted_student_with_first_name_and_last_name_is_deleted_for_testing_purposes(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Student Admission",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Progression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a user is on the login page \"https://mexil.it/chroma_tech_academy/stage/site/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SampleTestStepDef.a_user_is_on_the_login_page(String)"
});
formatter.embedding("image/png", "embedded3.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials username \"general@teacher.com\" and password \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "SampleTestStepDef.user_logs_in_with_valid_credentials_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to Student Information Module",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.navigates_to_Student_Information_Module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to Student Admission Submodule",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.navigates_to_Student_Admission_Submodule()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is directed to Student Admission page with the text \"Student Admission\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentAdmissionStepDef.user_is_directed_to_Student_Admission_page_with_the_text(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters Student unique Admission Number \"65015887\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_Student_unique_Admission_Number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selects Class \"Cyber Security\" and Section \"Networking Fundamentals\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.selects_Class_and_Section(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters Students first name \"ANDRES\" and last name \"TECH\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_Students_first_name_and_last_name(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selects gender \"Male\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.selects_gender(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters Date of Birth \"03/10/1990\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_Date_of_Birth(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "for Parent Guardian Details enters mothers name \"GOOD MOM\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.for_Parent_Guardian_Details_enters_mothers_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "for If Guardian Is field clicks on Mother radio button",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.for_If_Guardian_Is_field_clicks_on_Mother_radio_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters Guardian Phone number \"7036871234\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_Guardian_Phone_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.match({
  "location": "StudentAdmissionStepDef.user_clicks_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "student is succesfully saved and confirmation message displays \"Record Saved Successfully\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentAdmissionStepDef.student_is_succesfully_saved_and_confirmation_message_displays(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to Bulk Delete submodule",
  "keyword": "When "
});
formatter.match({
  "location": "StudentAdmissionStepDef.user_navigates_to_Bulk_Delete_submodule()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "for Bulk Delete selects Class \"Cyber Security\" and Section \"Networking Fundamentals\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.for_Bulk_Delete_selects_Class_and_Section(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks search button",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.clicks_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admitted student with first name \"ANDRES\" and last name \"TECH\" is deleted for testing purposes",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentAdmissionStepDef.admitted_student_with_first_name_and_last_name_is_deleted_for_testing_purposes(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Student Admission",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Progression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a user is on the login page \"https://chroma.mexil.it/site/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SampleTestStepDef.a_user_is_on_the_login_page(String)"
});
formatter.embedding("image/png", "embedded4.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials username \"general@teacher.com\" and password \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "SampleTestStepDef.user_logs_in_with_valid_credentials_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to Student Information Module",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.navigates_to_Student_Information_Module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to Student Admission Submodule",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.navigates_to_Student_Admission_Submodule()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is directed to Student Admission page with the text \"Student Admission\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentAdmissionStepDef.user_is_directed_to_Student_Admission_page_with_the_text(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters Student unique Admission Number \"65015887\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_Student_unique_Admission_Number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selects Class \"Cyber Security\" and Section \"Networking Fundamentals\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.selects_Class_and_Section(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters Students first name \"LUIS\" and last name \"TECH\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_Students_first_name_and_last_name(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selects gender \"Male\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.selects_gender(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters Date of Birth \"03/10/1990\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_Date_of_Birth(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "for Parent Guardian Details enters mothers name \"BETTER MOM\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.for_Parent_Guardian_Details_enters_mothers_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "for If Guardian Is field clicks on Mother radio button",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.for_If_Guardian_Is_field_clicks_on_Mother_radio_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters Guardian Phone number \"7036871234\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_Guardian_Phone_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.match({
  "location": "StudentAdmissionStepDef.user_clicks_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "student is succesfully saved and confirmation message displays \"Record Saved Successfully\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentAdmissionStepDef.student_is_succesfully_saved_and_confirmation_message_displays(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to Bulk Delete submodule",
  "keyword": "When "
});
formatter.match({
  "location": "StudentAdmissionStepDef.user_navigates_to_Bulk_Delete_submodule()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "for Bulk Delete selects Class \"Cyber Security\" and Section \"Networking Fundamentals\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.for_Bulk_Delete_selects_Class_and_Section(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks search button",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.clicks_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admitted student with first name \"LUIS\" and last name \"TECH\" is deleted for testing purposes",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentAdmissionStepDef.admitted_student_with_first_name_and_last_name_is_deleted_for_testing_purposes(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});