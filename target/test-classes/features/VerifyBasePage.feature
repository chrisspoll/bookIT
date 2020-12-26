
Feature: BasePage elements are available

  Scenario: Verify BasePage elements are present and clickable when logged in as teacher
    Given user is on the map page as teacher
    Then BasePage elements are present and clickable

  Scenario: Verify BasePage elements are present and clickable when logged in as student
    Given user is on the map page as student
    Then BasePage elements are present and clickable

  Scenario: Verify BasePage elements are present and clickable when logged in as team leader
    Given user is on the map page as team leader
    Then BasePage elements are present and clickable
