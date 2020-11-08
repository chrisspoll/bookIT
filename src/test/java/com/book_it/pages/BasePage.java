package com.book_it.pages;

import com.book_it.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BasePage {

    public BasePage(){
        PageFactory.initElements(Driver.get(),this);
    }

    @FindBy(xpath = "//a[contains(text(),'map')]")
    public WebElement mapModule;

    @FindBy(xpath = "//a[contains(text(),'schedule')]")
    public WebElement scheduleModule;

    @FindBy(xpath = "//a[contains(text(),'hunt')]")
    public WebElement huntModule;

    @FindBy(xpath = "//body/app-root[1]/div[1]/app-map-page[1]/app-hero[1]/section[1]/div[1]/nav[1]/div[2]/div[1]/div[2]")
    public WebElement myModule;

    @FindBy(xpath = "//body/app-root[1]/div[1]/app-map-page[1]/app-hero[1]/section[1]/div[1]/nav[1]/div[1]/a[1]")
    public WebElement introBookIT_image;

    @FindBy(xpath = "//body/app-root[1]/div[1]/app-map-page[1]/app-footer[1]/footer[1]/div[1]/div[1]/" +
            "a[1]/span[1]/fa[1]/i[1]")
    public WebElement questionCircle;

    public boolean isMapModulePresent(){
        return Driver.get().findElements(By.xpath("//a[contains(text(),'map')]")).size() > 0;
    }

    public boolean isScheduleModulePresent(){
        return Driver.get().findElements(By.xpath("//a[contains(text(),'schedule')]")).size() > 0;
    }

    public boolean isHuntModulePresent(){
        return Driver.get().findElements(By.xpath("//a[contains(text(),'hunt')]")).size() > 0;
    }

    public boolean isMyModulePresent(){
        return Driver.get().findElements(By.xpath("//body/app-root[1]/div[1]/app-map-page[1]/app-hero[1]/section[1]/div[1]/nav[1]/div[2]/div[1]/div[2]")).size() > 0;
    }



}
