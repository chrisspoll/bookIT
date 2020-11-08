$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/LoginWithInvalid.feature");
formatter.feature({
  "name": "User is NOT able to login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User logs in with invalid username",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_enters_invalid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see popup for invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_see_popup_for_invalid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User logs in with invalid password",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username and invalid password",
  "keyword": "When "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_enters_username_and_invalid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see popup for invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_see_popup_for_invalid_credentials()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[[object ProgressEvent]]\u003e but was:\u003c[sign in]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.book_it.step_definitions.LoginWithInvalidStepDefs.user_see_popup_for_invalid_credentials(LoginWithInvalidStepDefs.java:24)\r\n\tat ✽.user see popup for invalid credentials(file:///C:/Users/BiLAL/IdeaProjects/Book_It/src/test/resources/features/LoginWithInvalid.feature:12)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User logs in with invalid username",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user see popup for invalid credentials",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "invalid",
        "tabordullingham"
      ]
    },
    {
      "cells": [
        "invalid",
        "doniafisby"
      ]
    },
    {
      "cells": [
        "invalid",
        "mikemarcus"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User logs in with invalid username",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"invalid\" and \"tabordullingham\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see popup for invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_see_popup_for_invalid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User logs in with invalid username",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"invalid\" and \"doniafisby\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see popup for invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_see_popup_for_invalid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User logs in with invalid username",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"invalid\" and \"mikemarcus\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see popup for invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_see_popup_for_invalid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User logs in with invalid username (ConfigurationReader)",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters invalid username and valid password for \"\u003cusertype\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user see popup for invalid credentials",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "usertype"
      ]
    },
    {
      "cells": [
        "student"
      ]
    },
    {
      "cells": [
        "teacher"
      ]
    },
    {
      "cells": [
        "teamLeader"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User logs in with invalid username (ConfigurationReader)",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid username and valid password for \"student\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_enters_invalid_username_and_valid_password_for(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see popup for invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_see_popup_for_invalid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User logs in with invalid username (ConfigurationReader)",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid username and valid password for \"teacher\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_enters_invalid_username_and_valid_password_for(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see popup for invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_see_popup_for_invalid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User logs in with invalid username (ConfigurationReader)",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid username and valid password for \"teamLeader\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_enters_invalid_username_and_valid_password_for(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see popup for invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_see_popup_for_invalid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User logs in with invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user see popup for invalid credentials",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "elaye8m@wikipedia.org",
        "invalid"
      ]
    },
    {
      "cells": [
        "wfarrell8n@usnews.com",
        "invalid"
      ]
    },
    {
      "cells": [
        "teachervamikemarcus@gmail.com",
        "invalid"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User logs in with invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"elaye8m@wikipedia.org\" and \"invalid\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see popup for invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_see_popup_for_invalid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User logs in with invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"wfarrell8n@usnews.com\" and \"invalid\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see popup for invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_see_popup_for_invalid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User logs in with invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"teachervamikemarcus@gmail.com\" and \"invalid\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see popup for invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_see_popup_for_invalid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User logs in with invalid password (ConfigurationReader)",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters valid username and invalid password for \"\u003cusertype\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user see popup for invalid credentials",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "usertype"
      ]
    },
    {
      "cells": [
        "student"
      ]
    },
    {
      "cells": [
        "teacher"
      ]
    },
    {
      "cells": [
        "teamLeader"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User logs in with invalid password (ConfigurationReader)",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid username and invalid password for \"student\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_enters_valid_username_and_invalid_password_for(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see popup for invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_see_popup_for_invalid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User logs in with invalid password (ConfigurationReader)",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid username and invalid password for \"teacher\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_enters_valid_username_and_invalid_password_for(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see popup for invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_see_popup_for_invalid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User logs in with invalid password (ConfigurationReader)",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid username and invalid password for \"teamLeader\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_enters_valid_username_and_invalid_password_for(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see popup for invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_see_popup_for_invalid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User logs in with empty username or password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "sign in button is NOT clickable",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "",
        "tabordullingham"
      ]
    },
    {
      "cells": [
        "",
        "invalid"
      ]
    },
    {
      "cells": [
        "wfarrell8n@usnews.com",
        ""
      ]
    },
    {
      "cells": [
        "invalid",
        ""
      ]
    },
    {
      "cells": [
        "",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "User logs in with empty username or password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"\" and \"tabordullingham\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sign in button is NOT clickable",
  "keyword": "Then "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.sign_in_button_is_NOT_clickable()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User logs in with empty username or password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"\" and \"invalid\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sign in button is NOT clickable",
  "keyword": "Then "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.sign_in_button_is_NOT_clickable()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User logs in with empty username or password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"wfarrell8n@usnews.com\" and \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sign in button is NOT clickable",
  "keyword": "Then "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.sign_in_button_is_NOT_clickable()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User logs in with empty username or password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"invalid\" and \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sign in button is NOT clickable",
  "keyword": "Then "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.sign_in_button_is_NOT_clickable()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User logs in with empty username or password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"\" and \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sign in button is NOT clickable",
  "keyword": "Then "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.sign_in_button_is_NOT_clickable()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/LoginWithValid.feature");
formatter.feature({
  "name": "User is able to login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User logs in as a student with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username  and password",
  "keyword": "When "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_enters_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_should_see_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User logs in with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should see homepage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "elaye8m@wikipedia.org",
        "tabordullingham"
      ]
    },
    {
      "cells": [
        "wfarrell8n@usnews.com",
        "doniafisby"
      ]
    },
    {
      "cells": [
        "teachervamikemarcus@gmail.com",
        "mikemarcus"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User logs in with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"elaye8m@wikipedia.org\" and \"tabordullingham\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_should_see_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User logs in with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"wfarrell8n@usnews.com\" and \"doniafisby\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_should_see_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User logs in with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"teachervamikemarcus@gmail.com\" and \"mikemarcus\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginWithInvalidStepDefs.user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_should_see_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User logs in with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters valid credentials for \"\u003cusertype\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should see homepage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "usertype"
      ]
    },
    {
      "cells": [
        "student"
      ]
    },
    {
      "cells": [
        "teacher"
      ]
    },
    {
      "cells": [
        "teamLeader"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User logs in with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid credentials for \"student\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_enters_valid_credentials_for(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_should_see_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User logs in with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid credentials for \"teacher\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_enters_valid_credentials_for(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_should_see_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User logs in with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid credentials for \"teamLeader\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_enters_valid_credentials_for(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "com.book_it.step_definitions.LoginStepDefs.user_should_see_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});