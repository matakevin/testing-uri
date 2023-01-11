Feature: Student Admission Test Scenarios

  @Progression
  Scenario: Student Admission
    Given a user is on the login page "https://mexil.it/chroma_tech_academy/dev/site/login"
    When user logs in with valid credentials username "general@teacher.com" and password "123456"
    And navigates to Student Information Module
    And navigates to Student Admission Submodule
    Then user is directed to Student Admission page with the text "Student Admission"
    And enters Student unique Admission Number "12345"
    And selects Class "SDET" and Section ""  