package com.book_it.pages;

import com.book_it.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MapPage extends BasePage{

//    public MapPage(){PageFactory.initElements(Driver.get(),this);}

    @FindBy(tagName = "h1")
    public WebElement subTitle_1;

    @FindBy(xpath = "//h2[text()='dark-side']")
    public WebElement subtitle_dark_side;

    @FindBy(tagName = "img")
    public WebElement mapImage;

    @FindBy (id = "room-121")
    public WebElement kilimanjaro;


}
