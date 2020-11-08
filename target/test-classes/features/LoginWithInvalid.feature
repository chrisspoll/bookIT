Feature: User is NOT able to login

  Scenario: User logs in with invalid username
    Given user is on the login page
    When user enters invalid username and password
    Then user see popup for invalid credentials


  Scenario: User logs in with invalid password
    Given user is on the login page
    When user enters username and invalid password
    Then user see popup for invalid credentials


  Scenario Outline: User logs in with invalid username
    Given user is on the login page
    When user enters "<username>" and "<password>"
    Then user see popup for invalid credentials

    Examples:
      | username | password        |
      | invalid  | tabordullingham |
      | invalid  | doniafisby      |
      | invalid  | mikemarcus      |

  Scenario Outline: User logs in with invalid username (ConfigurationReader)
    Given user is on the login page
    When user enters invalid username and valid password for "<usertype>"
    Then user see popup for invalid credentials

    Examples:
      | usertype   |
      | student    |
      | teacher    |
      | teamLeader |

  Scenario Outline: User logs in with invalid password
    Given user is on the login page
    When user enters "<username>" and "<password>"
    Then user see popup for invalid credentials

    Examples:
      | username                      | password |
      | elaye8m@wikipedia.org         | invalid  |
      | wfarrell8n@usnews.com         | invalid  |
      | teachervamikemarcus@gmail.com | invalid  |



  Scenario Outline: User logs in with invalid password (ConfigurationReader)
    Given user is on the login page
    When user enters valid username and invalid password for "<usertype>"
    Then user see popup for invalid credentials

    Examples:
      | usertype   |
      | student    |
      | teacher    |
      | teamLeader |

  Scenario Outline: User logs in with empty username or password
    Given user is on the login page
    When user enters "<username>" and "<password>"
    Then sign in button is NOT clickable

    Examples:
      | username              | password        |
      |                       | tabordullingham |
      |                       | invalid         |
      | wfarrell8n@usnews.com |                 |
      | invalid               |                 |
      |                       |                 |


