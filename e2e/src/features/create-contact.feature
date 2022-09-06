Feature: As a user I expect to be able to create contacts

    @dev
    Scenario: As a user I expect to be able to create a new contact
        Given I am on the "home" page
        And I click the "create" button
        Then I am directed to the "create contact" page
        And the "create contact header" should contain the text "Create Contact"
        And I fill in the "name" input with "Jane Doe"
        And I select the "Female" option from the "gender"
        And I fill in the "phone" input with "8987788965"
        And I fill in the "street" input with "123 Example Rd"
        And I fill in the "city" input with "Exampleville"
        And I click the "save" button