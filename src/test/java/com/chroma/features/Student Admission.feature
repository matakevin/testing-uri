Feature: Student Admission Test Scenarios

  @Progression
  Scenario: Student Admission
    Given a user is on the login page "https://mexil.it/chroma_tech_academy/dev/site/login"
    When user logs in with valid credentials username "general@teacher.com" and password "123456"
    And navigates to Student Information Module
    And navigates to Student Admission Submodule