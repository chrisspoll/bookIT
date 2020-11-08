package com.book_it.pages;


import com.book_it.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends BasePage{

   // public LoginPage(){PageFactory.initElements(Driver.get(),this);}

    @FindBy(xpath ="//input[@name='email']")
    public WebElement emailInputBox;

    @FindBy(xpath = "//input[@name='password']")
    public WebElement passwordInputBox;

    @FindBy(xpath = "//button[.='sign in']")
    public WebElement signInBtn;

    @FindBy(xpath = "(//div)[23]")
    public WebElement popUp;


}
