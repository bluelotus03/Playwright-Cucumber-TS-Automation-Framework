Feature: As a user I can interact with stored values

    # Currently can't run this, need to figure out global variables for step-definitions/assertions/verify-stored-value.ts and step-definitions/stored.ts
    # Tutorial skipped over this completely - we had removed GlobalVariables in previous video
    @todo @fix
    Scenario: As a user I can interact and assert on stored values
        Given I am on the "home" page
        And I click the "playground" button
        When I am directed to the "playground" page
        And I retrieve the "first value" text and store it as "first value" in global variables
        And the "second value" should equal "first value" stored in global variables
        And the "fourth value" should not equal "first value" stored in global variables
        And the "fourth value" should contain the "first value" stored in global variables
        And the "fifth value" should contain the "first value" stored in global variables
        And the "third value" should not contain the "first value" stored in global variables