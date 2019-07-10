Feature: EriBank Login Feature

@android
Scenario Outline: EriBank Login Scenario

Given user is already on Login Screen
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on payment home page
Then user clicks on logout button

Examples:
	| username | password |
	| company  | company |