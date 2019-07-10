$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("WebSampleDemo.feature");
formatter.feature({
  "line": 1,
  "name": "Basic Form Validation",
  "description": "",
  "id": "basic-form-validation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Validating the input message displayed correctly or not",
  "description": "",
  "id": "basic-form-validation;validating-the-input-message-displayed-correctly-or-not",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is already on Form",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user inputs the text as \"Hey this is just a demo message\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user clicks on the Show Message button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user verifies the entered message",
  "keyword": "And "
});
formatter.match({
  "location": "WebSampleDemo.user_is_already_on_Form()"
});
formatter.result({
  "duration": 6334822815,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hey this is just a demo message",
      "offset": 25
    }
  ],
  "location": "WebSampleDemo.user_inputs_the_text_as(String)"
});
formatter.result({
  "duration": 174545408,
  "status": "passed"
});
formatter.match({
  "location": "WebSampleDemo.user_clicks_on_the_Show_Message_button()"
});
formatter.result({
  "duration": 79095052,
  "status": "passed"
});
formatter.match({
  "location": "WebSampleDemo.user_verifies_the_entered_message()"
});
formatter.result({
  "duration": 48764842,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Validating sum of the 2 digits",
  "description": "",
  "id": "basic-form-validation;validating-sum-of-the-2-digits",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user is already on Form",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user enters \"\u003cNumber1\u003e\" and \"\u003cNumber2\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user clicks on Show Total button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user confirms the total of the digits",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "basic-form-validation;validating-sum-of-the-2-digits;",
  "rows": [
    {
      "cells": [
        "Number1",
        "Number2"
      ],
      "line": 16,
      "id": "basic-form-validation;validating-sum-of-the-2-digits;;1"
    },
    {
      "cells": [
        "40",
        "67"
      ],
      "line": 17,
      "id": "basic-form-validation;validating-sum-of-the-2-digits;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Validating sum of the 2 digits",
  "description": "",
  "id": "basic-form-validation;validating-sum-of-the-2-digits;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user is already on Form",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user enters \"40\" and \"67\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user clicks on Show Total button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user confirms the total of the digits",
  "keyword": "And "
});
formatter.match({
  "location": "WebSampleDemo.user_is_already_on_Form()"
});
formatter.result({
  "duration": 504405846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 13
    },
    {
      "val": "67",
      "offset": 22
    }
  ],
  "location": "WebSampleDemo.user_enters_and(String,String)"
});
formatter.result({
  "duration": 91804797,
  "status": "passed"
});
formatter.match({
  "location": "WebSampleDemo.user_clicks_on_Show_Total_button()"
});
formatter.result({
  "duration": 62553555,
  "status": "passed"
});
formatter.match({
  "location": "WebSampleDemo.user_confirms_the_total_of_the_digits()"
});
formatter.result({
  "duration": 32682260,
  "status": "passed"
});
});