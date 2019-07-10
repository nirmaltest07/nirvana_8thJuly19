$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BrowserstackDemoApp.feature");
formatter.feature({
  "line": 1,
  "name": "Browserstack demo sample application",
  "description": "",
  "id": "browserstack-demo-sample-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Performing action on the Browserstack demo application",
  "description": "",
  "id": "browserstack-demo-sample-application;performing-action-on-the-browserstack-demo-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@ios"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is already on Home Screen",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user clicks on \"Alert\" button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user verifies alert text",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user dismiss the alert",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on \"Text\" button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user verifies input label",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters text as \"This is automation sample test\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BrowserstackDemoApp.user_already_on_home_screen()"
});
formatter.result({
  "duration": 2759352194,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alert",
      "offset": 16
    }
  ],
  "location": "BrowserstackDemoApp.user_clicks_on_button(String)"
});
formatter.result({
  "duration": 1840617852,
  "status": "passed"
});
formatter.match({
  "location": "BrowserstackDemoApp.user_verifies_text()"
});
formatter.result({
  "duration": 2252077218,
  "status": "passed"
});
formatter.match({
  "location": "BrowserstackDemoApp.user_dismiss_the_alert()"
});
formatter.result({
  "duration": 2046173951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Text",
      "offset": 16
    }
  ],
  "location": "BrowserstackDemoApp.user_clicks_on_button(String)"
});
formatter.result({
  "duration": 1944397919,
  "status": "passed"
});
formatter.match({
  "location": "BrowserstackDemoApp.user_verifies_text_input_label()"
});
formatter.result({
  "duration": 1228566104,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is automation sample test",
      "offset": 21
    }
  ],
  "location": "BrowserstackDemoApp.user_enters_text(String)"
});
formatter.result({
  "duration": 3889959719,
  "status": "passed"
});
});