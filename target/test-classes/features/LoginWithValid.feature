Feature: User is able to login

  Scenario: User logs in as a student with valid credentials
    Given user is on the login page
    When user enters username  and password
    Then user should see homepage


  Scenario Outline: User logs in with valid credentials
    Given user is on the login page
    When user enters "<username>" and "<password>"
    Then user should see homepage

    Examples:
      | username                      | password        |
      | elaye8m@wikipedia.org         | tabordullingham |
      | wfarrell8n@usnews.com         | doniafisby      |
      | teachervamikemarcus@gmail.com | mikemarcus      |


  Scenario Outline: User logs in with valid credentials
    Given user is on the login page
    When user enters valid credentials for "<usertype>"
    Then user should see homepage

    Examples:
      | usertype   |
      | student    |
      | teacher    |
      | teamLeader |