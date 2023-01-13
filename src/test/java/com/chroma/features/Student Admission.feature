Feature: Student Admission Test Scenarios

  @Progression
  Scenario Outline: Student Admission
    Given a user is on the login page "<URL>"
    When user logs in with valid credentials username "<USERNAME>" and password "<PASSWORD>"
    And navigates to Student Information Module
    And navigates to Student Admission Submodule
    Then user is directed to Student Admission page with the text "Student Admission"
    And enters Student unique Admission Number "<ADMISSION NUMBER>"
    And selects Class "<CLASS>" and Section "<SECTION>"
    And enters Students first name "<FIRST NAME>" and last name "<LAST NAME>"
    And selects gender "<GENDER>"
    And enters Date of Birth "<DOB>"
    And for Parent Guardian Details enters mothers name "<MOTHERS NAME>"
    And for If Guardian Is field clicks on Mother radio button
    And enters Guardian Phone number "<GUARDIAN PHONE NUMBER>"
    When user clicks on save button
    Then student is succesfully saved and confirmation message displays "Record Saved Successfully"
    When user navigates to Bulk Delete submodule
    And for Bulk Delete selects Class "<CLASS>" and Section "<SECTION>"
    And clicks search button
    Then admitted student with first name "<FIRST NAME>" and last name "<LAST NAME>" is deleted for testing purposes

    Examples: 
      | URL                                                   | USERNAME            | PASSWORD | ADMISSION NUMBER | CLASS          | SECTION                 | FIRST NAME | LAST NAME | GENDER | DOB        | MOTHERS NAME | GUARDIAN PHONE NUMBER |
      | https://mexil.it/chroma_tech_academy/dev/site/login   | general@teacher.com |   123456 |            12345 | SDET           | Testing Fundamentals    | CHROMA     | TECH      | Female | 04/01/1990 | CHROMA MOM   |            7036875816 |
      | https://mexil.it/chroma_tech_academy/dev/site/login   | general@teacher.com |   123456 |            12345 | Cyber Security | Networking Fundamentals | DIEGO      | TECH      | Male   | 03/10/1990 | BEST MOM     |            7036871234 |
      | https://mexil.it/chroma_tech_academy/test/site/login  | general@teacher.com |   123456 |            12345 | Cyber Security | Networking Fundamentals | DIEGO      | TECH      | Male   | 03/10/1990 | BEST MOM     |            7036871234 |
      | https://mexil.it/chroma_tech_academy/stage/site/login | general@teacher.com |   123456 |            12345 | Cyber Security | Networking Fundamentals | DIEGO      | TECH      | Male   | 03/10/1990 | BEST MOM     |            7036871234 |
      | https://chroma.mexil.it/site/login                    | general@teacher.com |   123456 |            12345 | Cyber Security | Networking Fundamentals | DIEGO      | TECH      | Male   | 03/10/1990 | BEST MOM     |            7036871234 |
