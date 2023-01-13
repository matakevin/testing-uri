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
  "name": "for Bulk Delete selects Class \"SDET\" and Section \"Testing Fundamentals\"",
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
  "name": "admitted student \"Chroma Tech\" is deleted for testing purposes",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentAdmissionStepDef.admitted_student_is_deleted_for_testing_purposes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});