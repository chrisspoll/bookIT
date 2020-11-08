package com.book_it.step_definitions;

import com.book_it.pages.LoginPage;
import com.book_it.pages.MapPage;
import com.book_it.utilities.BrowserUtils;
import com.book_it.utilities.ConfigurationReader;
import com.book_it.utilities.Driver;
import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginStepDefs {

    LoginPage loginPage = new LoginPage();
    MapPage mapPage = new MapPage();

    @Given("user is on the login page")
    public void user_is_on_the_login_page() {
        Driver.get().get(ConfigurationReader.get("url"));
    }

    @When("user enters username  and password")
    public void user_enters_username_and_password() {
        loginPage.emailInputBox.sendKeys(ConfigurationReader.get("student_username"));
        loginPage.passwordInputBox.sendKeys(ConfigurationReader.get("student_password"));
        loginPage.signInBtn.click();
    }

    @Then("user should see homepage")
    public void user_should_see_homepage() {
        BrowserUtils.waitForVisibility(mapPage.subtitle_dark_side,10);
        Assert.assertEquals("dark-side",mapPage.subtitle_dark_side.getText());
    }

    @When("user enters valid credentials for {string}")
    public void user_enters_valid_credentials_for(String usertype) {
        loginPage.emailInputBox.sendKeys(ConfigurationReader.get(usertype + "_username"));
        loginPage.passwordInputBox.sendKeys(ConfigurationReader.get(usertype + "_password"));
        loginPage.signInBtn.click();
    }
}
