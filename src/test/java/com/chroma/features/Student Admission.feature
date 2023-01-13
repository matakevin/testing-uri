Feature: Student Admission Test Scenarios

  @Progression
  Scenario: Student Admission
    Given a user is on the login page "https://mexil.it/chroma_tech_academy/dev/site/login"
    When user logs in with valid credentials username "general@teacher.com" and password "123456"
    And navigates to Student Information Module
    #And navigates to Student Admission Submodule
    #Then user is directed to Student Admission page with the text "Student Admission"
    #And enters Student unique Admission Number "12345"
    #And selects Class "SDET" and Section "Testing Fundamentals"  
    #And enters Students first name "Chroma" and last name "Tech"
    #And selects gender "Female"
    #And enters Date of Birth "04/01/1990"
    #And for Parent Guardian Details enters mothers name "Chroma Mom"
    #And for If Guardian Is field clicks on Mother radio button
    #And enters Guardian Phone number "7036875816"
    #When user clicks on save button
    #Then student is succesfully saved and confirmation message displays "Record Saved Successfully"
    When user navigates to Bulk Delete submodule
    And for Bulk Delete selects Class "SDET" and Section "Testing Fundamentals"
    And clicks search button
    Then admitted student "Chroma Tech" is deleted for testing purposes