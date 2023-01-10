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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});