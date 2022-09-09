Feature: As a user I expect to be able to create contacts

    @smoke @regression
    Scenario: As a user I expect to be able to create a new contact
        Given I am on the "home" page
        And I click the "create" button
        Then I am directed to the "create contact" page
        And the "create contact header" should equal the text "Create Contact"
        And I fill in the "name" input with "Jane Doe"
        And I select the "Female" option from the "gender"
        And I fill in the "phone" input with "8987788965"
        And I fill in the "street" input with "123 Example Rd"
        And I fill in the "city" input with "Exampleville"
        And I click the "save" button

        And I am directed to the "home" page
        And I fill in the "search" input with "Jane Doe"
        And the "search" should not equal the text "Jane Does"
        And the "full name label" should contain the text "Name:"
        And the "name" should equal the text "Jane Doe"
        And the "gender label" should contain the text "Gender:"
        And the "gender" should equal the text "Female"
        And the "address label" should contain the text "Address:"
        And the "address" should equal the text "123 Example Rd, Exampleville"
        And the "edit" should be displayed
        And the "delete" should be displayed

    @smoke @regression
    Scenario: As a user I do not expect saved contacts to persist after a page refresh
        Given I am on the "home" page
        And I click the "create" button
        Then I am directed to the "create contact" page
        And the "create contact header" should equal the text "Create Contact"
        And I fill in the "name" input with "John Doe"
        And I select the "Male" option from the "gender"
        And I fill in the "phone" input with "4077788965"
        And I fill in the "street" input with "152 Example St"
        And I fill in the "city" input with "Exampleville"
        And I click the "save" button
        And I am directed to the "home" page

        And I fill in the "search" input with "John Doe"
        And the "contact" should be displayed
        And the "full name label" should contain the text "Name:"
        And the "name" should equal the text "John Doe"
        And the "gender label" should contain the text "Gender:"
        And the "gender" should equal the text "Male"
        And the "address label" should contain the text "Address:"
        And the "address" should equal the text "152 Example St, Exampleville"
        And the "edit" should be displayed
        And the "delete" should be displayed

        And I refresh the "home" page
        And I fill in the "search" input with "John Doe"
        Then the "contact" should not be displayed