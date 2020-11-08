package com.book_it.step_definitions;

import com.book_it.pages.LoginPage;
import com.book_it.pages.MapPage;
import com.book_it.utilities.BrowserUtils;
import com.book_it.utilities.ConfigurationReader;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class LoginWithInvalidStepDefs {

    LoginPage loginPage = new LoginPage();

    @When("user enters invalid username and password")
    public void user_enters_invalid_username_and_password() {
        loginPage.emailInputBox.sendKeys("invalid@gmail.com");
        loginPage.passwordInputBox.sendKeys(ConfigurationReader.get("student_password"));
        loginPage.signInBtn.click();
    }

    @Then("user see popup for invalid credentials")
    public void user_see_popup_for_invalid_credentials() {
        BrowserUtils.waitFor(2);
        Assert.assertEquals("[object ProgressEvent]",loginPage.popUp.getText());
    }

    @When("user enters username and invalid password")
    public void user_enters_username_and_invalid_password() {
        loginPage.emailInputBox.sendKeys(ConfigurationReader.get("student_username"));
        loginPage.passwordInputBox.sendKeys("invalid");
        loginPage.signInBtn.click();
    }

    @When("user enters {string} and {string}")
    public void user_enters_and(String email, String password) {
        loginPage.emailInputBox.sendKeys(email);
        loginPage.passwordInputBox.sendKeys(password);
        loginPage.signInBtn.click();
    }

    @Then("sign in button is NOT clickable")
    public void sign_in_button_is_NOT_clickable() {
        Assert.assertFalse(loginPage.signInBtn.isEnabled());
    }

    @When("user enters invalid username and valid password for {string}")
    public void user_enters_invalid_username_and_valid_password_for(String usertype) {
        String password = ConfigurationReader.get(usertype + "_password");
        System.out.println("password = " + password);
        loginPage.emailInputBox.sendKeys("invalid");
        loginPage.passwordInputBox.sendKeys(password);
        loginPage.signInBtn.click();
    }

    @When("user enters valid username and invalid password for {string}")
    public void user_enters_valid_username_and_invalid_password_for(String usertype) {
        String username = ConfigurationReader.get(usertype + "_username");
        System.out.println("username = " + username);
        loginPage.emailInputBox.sendKeys(username);
        loginPage.passwordInputBox.sendKeys("invalid");
        loginPage.signInBtn.click();


    }
}
