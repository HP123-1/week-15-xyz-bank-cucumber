
Feature: Add customer
@Smoke @Regression
  Scenario: verify bank manager should be able to add customer successfully
    Given   I am on homepage
    When    I click on bank manager login
    Then    I click on add customer
    And     I add fisrtname"Oscar"
    And     I add lastname"Pandya"
    And     I add postcode"wd25"
    When    I should add customer successfully

@Smoke @Sanity @Regression
    Scenario: verify customer should be able to login and logout successfully
      Given I am on homepage
      When  I click on customer login link
      And  I click on search customer field
      And   I enter previously added first name"Harry Potter"
      And   I click on login button
      Then  I click on log out button

@Sanity @Regression
      Scenario: verify customer should deposite money successfully
        Given   I click on search customer field
        And    I enter previously added first name"Harry Potter"
        And    I click on login button
        And    I click on deposite tab
        And    I entred deposit ammount(100);
        And    I click on deposite button
        Then   I could see message "Deposit Successful"


@Smoke @Sanity @Regression
Scenario: verify customer should be able to withdrow money successfuly
  Given        I click on search customer field
  And          I enter previously added first name"Harry Potter"
  And          I click on login button
  And          I click on witdrow tab
  And          I enter withdrow amount"50"
  Then         I click on witdrow button