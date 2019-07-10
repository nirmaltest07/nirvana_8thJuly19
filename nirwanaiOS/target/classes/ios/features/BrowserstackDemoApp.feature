Feature: Browserstack demo sample application

@ios
Scenario: Performing action on the Browserstack demo application

Given user is already on Home Screen
When user clicks on "Alert" button
Then user verifies alert text
And user dismiss the alert
When user clicks on "Text" button
Then user verifies input label
Then user enters text as "This is automation sample test"

