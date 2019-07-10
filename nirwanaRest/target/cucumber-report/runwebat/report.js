$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ReqRes.feature");
formatter.feature({
  "line": 2,
  "name": "A REST Example using https://reqres.in/",
  "description": "",
  "id": "a-rest-example-using-https://reqres.in/",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@reqres"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#  NOTE : YOU CAN RIGHT CLICK and RUN THE SCENARIOS DIRECTLY (if your IDE supports)"
    },
    {
      "line": 5,
      "value": "#  This demonstrates how you drive your test data within the scenarios as"
    },
    {
      "line": 6,
      "value": "#  inline strings and numbers"
    },
    {
      "line": 7,
      "value": "#  list of data items / single column data"
    },
    {
      "line": 8,
      "value": "#  Single record of key-value pairs"
    }
  ],
  "line": 10,
  "name": "ReqRes 1.0 - Get all the users",
  "description": "",
  "id": "a-rest-example-using-https://reqres.in/;reqres-1.0---get-all-the-users",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I have my \"ReqRes\" API with path \"LIST_USERS\" ready",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I have the request headers defined as follows",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I send a GET request",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I verify the response status code as \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I verify that all users are displayed with below mandatory fields",
  "rows": [
    {
      "cells": [
        "id"
      ],
      "line": 17
    },
    {
      "cells": [
        "first_name"
      ],
      "line": 18
    },
    {
      "cells": [
        "last_name"
      ],
      "line": 19
    },
    {
      "cells": [
        "avatar"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "ReqRes",
      "offset": 11
    },
    {
      "val": "LIST_USERS",
      "offset": 34
    }
  ],
  "location": "APISteps.iGetPathValues(String,String)"
});
formatter.result({
  "duration": 81827571,
  "status": "passed"
});
formatter.match({
  "location": "APISteps.iGetHeaderValues(String,String\u003e)"
});
formatter.result({
  "duration": 864475,
  "status": "passed"
});
formatter.match({
  "location": "APISteps.iSendAGetRequest()"
});
formatter.result({
  "duration": 2864820935,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 38
    }
  ],
  "location": "APISteps.iVerifyTheResponse(int)"
});
formatter.result({
  "duration": 2692480,
  "status": "passed"
});
formatter.match({
  "location": "ReqResSteps.iVerifyUsers(String\u003e)"
});
formatter.result({
  "duration": 17457059,
  "status": "passed"
});
formatter.uri("Weather.feature");
formatter.feature({
  "line": 2,
  "name": "A REST Example using http://restapi.demoqa.com for weather information",
  "description": "",
  "id": "a-rest-example-using-http://restapi.demoqa.com-for-weather-information",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@weather"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#  NOTE : YOU CAN RIGHT CLICK and RUN THE SCENARIOS DIRECTLY (if your IDE supports)"
    },
    {
      "line": 5,
      "value": "#  This demonstrates how you drive your test data within the scenarios as"
    },
    {
      "line": 6,
      "value": "#  inline strings and numbers"
    },
    {
      "line": 7,
      "value": "#  multiple records of key-value pairs"
    },
    {
      "line": 8,
      "value": "#  Note that this scenario may fail as the wind direction comparision fails if the value is different"
    },
    {
      "line": 9,
      "value": "#  If it fails, it gives you an idean on how the failures are handled and reported by Serenity"
    }
  ],
  "line": 11,
  "name": "Weather 1.0 - Get the weather condition of a city and verify te City name",
  "description": "",
  "id": "a-rest-example-using-http://restapi.demoqa.com-for-weather-information;weather-1.0---get-the-weather-condition-of-a-city-and-verify-te-city-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I have my \"Weather\" API ready",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I have the request headers defined as follows",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 14
    },
    {
      "cells": [
        "Authorisation",
        "Jai_Bahubali Jai Chandra"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I have the URL parameter as \"Chester\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I send a GET request",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I verify the response status code as \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I verify the response for chester weather",
  "rows": [
    {
      "cells": [
        "City",
        "Chester"
      ],
      "line": 20
    },
    {
      "cells": [
        "WindDirectionDegree",
        "320 Degree"
      ],
      "line": 21
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Weather",
      "offset": 11
    }
  ],
  "location": "APISteps.iGetPathValues(String)"
});
formatter.result({
  "duration": 278945,
  "status": "passed"
});
formatter.match({
  "location": "APISteps.iGetHeaderValues(String,String\u003e)"
});
formatter.result({
  "duration": 87141,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chester",
      "offset": 29
    }
  ],
  "location": "APISteps.iHaveTeURLParam(String)"
});
formatter.result({
  "duration": 82219,
  "status": "passed"
});
formatter.match({
  "location": "APISteps.iSendAGetRequest()"
});
formatter.result({
  "duration": 670111164,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 38
    }
  ],
  "location": "APISteps.iVerifyTheResponse(int)"
});
formatter.result({
  "duration": 107956,
  "status": "passed"
});
formatter.match({
  "location": "WeatherSteps.iVerifyResponseForWeatherInformation(String,String\u003e)"
});
formatter.result({
  "duration": 4451305,
  "error_message": "java.lang.AssertionError: \nExpected: with toString() \"320 Degree\"\n     but: toString() was \"340 Degree\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:18)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:6)\n\tat restful.step_definition.WeatherSteps.iVerifyResponseForWeatherInformation(WeatherSteps.java:25)\n\tat ✽.And I verify the response for chester weather(Weather.feature:19)\n",
  "status": "failed"
});
});