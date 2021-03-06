package com.bank.cucumber.steps;

import com.bank.pages.*;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddingCusomerSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
        System.out.println("I am on homepage");
    }

    @When("^I click on bank manager login$")
    public void iClickOnBankManagerLogin() {
        new Homepage().clickOnBankManagerLoginLink();


    }

    @Then("^I click on add customer$")
    public void iClickOnAddCustomer() {

        new AddCustomerPage().clickOnAddCustomerButton();
    }

    @And("^I add fisrtname\"([^\"]*)\"$")
    public void iAddFisrtname(String firstname)  {
        new AddCustomerPage().enterFirstName(firstname);
        // Write code here that turns the phrase above into concrete actions

    }

    @And("^I add lastname\"([^\"]*)\"$")
    public void iAddLastname(String lastname)  {
        new AddCustomerPage().enterLastName(lastname);
        // Write code here that turns the phrase above into concrete actions

    }

    @And("^I add postcode\"([^\"]*)\"$")
    public void iAddPostcode(String postcodee)  {
        new AddCustomerPage().enterPostCode(postcodee);
        // Write code here that turns the phrase above into concrete actions

    }

    @Then("^I should add customer successfully$")
    public void iShouldAddCustomerSuccessfully() {
        new AddCustomerPage().clickOnAddCustomerButton();
    }

    @When("^I click on customer login link$")
    public void iClickOnCustomerLoginLink() {
        new Homepage().clickOnHomeButton();
    }

    @And("^I click on search customer field$")
    public void iClickOnSearchCustomerField() {
        new OpenAccountPage().clickOnSearchCustomerField();
    }

    @And("^I enter previously added first name\"([^\"]*)\"$")
    public void iEnterPreviouslyAddedFirstName(String cusname)  {
        new OpenAccountPage().enterCustomerThatCreatedInFirstTest(cusname);

        // Write code here that turns the phrase above into concrete actions

    }

    @And("^I click on login button$")
   public void iClickOnLoginButton() { new CustomerLginPage().clickOnLoginButton();
    }

    @Then("^I click on log out button$")
    public void iClickOnLogOutButton() { new AccountPage().clickOnLogOutButton();
    }

    @And("^I click on deposite tab$")
    public void iClickOnDepositeTab() { new AccountPage().clickOnDepositeTab();
    }

    @And("^I entred deposit ammount\\((\\d+)\\);$")
    public void iEntredDepositAmmount(int amount) { new AccountPage().enterdDepositAmount100(100);
    }

    @Then("^I could see message \"([^\"]*)\"$")
    public void iCouldSeeMessage(String msg)  { new AccountPage().assertDepositeSuccessfulText(msg);
        // Write code here that turns the phrase above into concrete actions

    }

    @And("^I click on deposite button$")
    public void iClickOnDepositeButton() {
        new AccountPage().clickOnDepositeButton();
    }

    @And("^I click on witdrow tab$")
    public void iClickOnWitdrowTab() {
    }

    @And("^I enter withdrow amount\"([^\"]*)\"$")
    public void iEnterWithdrowAmount(String amt)  {
        new AccountPage().enterWithdrawlAmount50(amt);
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Then("^I click on witdrow button$")
    public void iClickOnWitdrowButton() {new AccountPage().clicOnWithdrawlButton();
    }
}
