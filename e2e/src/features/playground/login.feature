Feature: As a user I can interact with login forms

    @smoke @regression 
    Scenario: As a user I can interact and assert on login forms with localhost creds
        Given I am on the "home" page
        And I click the "playground" button
        When I am directed to the "playground" page
        And I fill in the "email" input with "$.TEST_EMAIL"
        And I fill in the "password" input with "$.TEST_PASSWORD"
        And the "email" should contain the value "admin@testingtalkshub.com.au"
        And the "password" should contain the value "Password1234"

    @smoke @regression 
    Scenario: As a user I can interact and assert on login forms with production creds
        Given I am on the "home" page
        And I click the "playground" button
        When I am directed to the "playground" page
        And I fill in the "email" input with "$.TEST_EMAIL"
        And I fill in the "password" input with "$.TEST_PASSWORD"
        And the "email" should contain the value "admin@testingtalkshub.com.au"
        And the "password" should contain the value "A4sf&lefje^yeio"
