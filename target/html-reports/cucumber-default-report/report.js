$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/com/chroma/features/Student%20Admission.feature");
formatter.feature({
  "name": "Student Admission Test Scenarios",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Student Admission",
  "description": "",
  "keyword": "Scenario",
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
  "name": "enters Student unique Admission Number \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_Student_unique_Admission_Number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selects Class \"SDET\" and Section \"Testing Fundamentals\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.selects_Class_and_Section(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters Students first name \"Chroma\" and last name \"Tech\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_Students_first_name_and_last_name(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selects gender \"Female\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.selects_gender(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});