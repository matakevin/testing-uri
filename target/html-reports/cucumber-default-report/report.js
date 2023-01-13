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
  "name": "admitted student \"Chroma Tech\" is deleted for testing purposes",
  "keyword": "Then "
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
        "12345",
        "SDET",
        "Testing Fundamentals",
        "CHROMA",
        "TECH",
        "Female",
        "04/01/1990",
        "CHROMA MOM",
        "7036875816"
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
  "status": "skipped"
});
formatter.step({
  "name": "a user is on the login page \"https://mexil.it/chroma_tech_academy/dev/site/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SampleTestStepDef.a_user_is_on_the_login_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logs in with valid credentials username \"general@teacher.com\" and password \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "SampleTestStepDef.user_logs_in_with_valid_credentials_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
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
  "name": "enters Student unique Admission Number \"12345\"",
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
  "name": "admitted student \"Chroma Tech\" is deleted for testing purposes",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentAdmissionStepDef.admitted_student_is_deleted_for_testing_purposes(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "admitted student with first name \"CHROMA\" and last name \"TECH\" is deleted for testing purposes",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});