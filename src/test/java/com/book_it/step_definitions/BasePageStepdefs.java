package com.book_it.step_definitions;

import com.book_it.pages.LoginPage;
import com.book_it.pages.MapPage;
import com.book_it.utilities.BrowserUtils;
import com.book_it.utilities.ConfigurationReader;
import com.book_it.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;

public class BasePageStepdefs {

    LoginPage loginPage = new LoginPage();
    MapPage mapPage = new MapPage();

    @Given("user is on the map page as teacher")
    public void userIsOnTheMapPageAsTeacher() {
        Driver.get().get(ConfigurationReader.get("url"));
        loginPage.emailInputBox.sendKeys(ConfigurationReader.get("teacher_username"));
        loginPage.passwordInputBox.sendKeys(ConfigurationReader.get("teacher_password"));
        loginPage.signInBtn.click();
        BrowserUtils.waitForVisibility(mapPage.subtitle_dark_side,10);
    }

    @Given("user is on the map page as student")
    public void userIsOnTheMapPageAsStudent() {
        Driver.get().get(ConfigurationReader.get("url"));
        loginPage.emailInputBox.sendKeys(ConfigurationReader.get("student_username"));
        loginPage.passwordInputBox.sendKeys(ConfigurationReader.get("student_password"));
        loginPage.signInBtn.click();
        BrowserUtils.waitForVisibility(mapPage.subtitle_dark_side,10);
    }

    @Given("user is on the map page as team leader")
    public void userIsOnTheMapPageAsTeamLeader() {
        Driver.get().get(ConfigurationReader.get("url"));
        loginPage.emailInputBox.sendKeys(ConfigurationReader.get("teamLeader_username"));
        loginPage.passwordInputBox.sendKeys(ConfigurationReader.get("teamLeader_password"));
        loginPage.signInBtn.click();
        BrowserUtils.waitForVisibility(mapPage.subtitle_dark_side,10);
    }

    @Then("Top Menu elements are present and clickable")
    public void topMenuElementsArePresentAndClickable() {
   //     BrowserUtils.waitFor(5);
        Assert.assertTrue(mapPage.isMapModulePresent());
        Assert.assertTrue(mapPage.isScheduleModulePresent());
        Assert.assertTrue(mapPage.isHuntModulePresent());
        Assert.assertTrue(mapPage.isMyModulePresent());

    }
}
