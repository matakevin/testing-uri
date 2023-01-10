Feature: Sample Test Scenarios

  @Smoke @Progression
  Scenario: Home page login
    Given a user is on the login page "https://mexil.it/chroma_tech_academy/dev/site/login"
    When user logs in with valid credentials username "general@teacher.com" and password "123456"
    Then user should see dashboard page with URL "https://mexil.it/chroma_tech_academy/dev/admin/admin/dashboard"

  @Chroma @iAmAwesomeForGeneratingReports
  Scenario: Inspecting Dashboard Module Links
    Given a user is on the login page "https://mexil.it/chroma_tech_academy/dev/site/login"
    When user logs in with valid credentials username "general@teacher.com" and password "123456"
    Then the following modules should be displayed "Student Information", "Fees Collection", "Income", "Expenses", "Academics", "Human Resource", "Homework", "Reports"
