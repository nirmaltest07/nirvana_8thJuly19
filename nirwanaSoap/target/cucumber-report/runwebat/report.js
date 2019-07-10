$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AonAware.feature");
formatter.feature({
  "line": 2,
  "name": "A SOAP Example using AonAware",
  "description": "",
  "id": "a-soap-example-using-aonaware",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@aon"
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
      "line": 4,
      "value": "#  This feature is based on a sample web API found in google. It is observed that if we hit"
    },
    {
      "line": 5,
      "value": "#  if it is more often hit then they will return a message as \"Object Moved\" and you will see failures"
    },
    {
      "line": 6,
      "value": "#  This DictService API takes any word as input in envelope and returns definition from the dictionary (same word) as response"
    }
  ],
  "line": 9,
  "name": "AON 1.0 - AON test for status check",
  "description": "",
  "id": "a-soap-example-using-aonaware;aon-1.0---aon-test-for-status-check",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I have my end point as \"http://services.aonaware.com/DictService/DictService.asmx\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I have the request headers defined as follows",
  "rows": [
    {
      "cells": [
        "SOAPAction",
        "Define"
      ],
      "line": 12
    },
    {
      "cells": [
        "Content-Type",
        "application/soap+xml; charset\u003dUTF-8;"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I have the soap envelope defined in \"soapuiautomation/soap/resources/leg.xml\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I post the request body as XML",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I verify the response status code as \"200\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://services.aonaware.com/DictService/DictService.asmx",
      "offset": 24
    }
  ],
  "location": "APISteps.iHaveMyEndPoint(String)"
});
formatter.result({
  "duration": 85645530,
  "status": "passed"
});
formatter.match({
  "location": "APISteps.iGetHeaderValues(String,String\u003e)"
});
formatter.result({
  "duration": 840724,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "soapuiautomation/soap/resources/leg.xml",
      "offset": 37
    }
  ],
  "location": "APISteps.iHaveTheBody(String)"
});
formatter.result({
  "duration": 427692,
  "status": "passed"
});
formatter.match({
  "location": "APISteps.iSendXMLToEndpoint()"
});
formatter.result({
  "duration": 1661669060,
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
  "duration": 2318644,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 18,
      "value": "#  This is an example of Scenario Outline, means repeating the same scenario with varying data"
    },
    {
      "line": 19,
      "value": "#  We are repeating the below scenario with varying PATH and WORD"
    }
  ],
  "line": 21,
  "name": "AON 1.1 - AON test for response comparision",
  "description": "",
  "id": "a-soap-example-using-aonaware;aon-1.1---aon-test-for-response-comparision",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I have my \"AON\" API ready",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I have the request headers defined as follows",
  "rows": [
    {
      "cells": [
        "SOAPAction",
        "Define"
      ],
      "line": 24
    },
    {
      "cells": [
        "Content-Type",
        "application/soap+xml; charset\u003dUTF-8;"
      ],
      "line": 25
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I have the soap envelope defined in \"\u003cpath\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I post the request body as XML",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I verify the AON response contains the word \"\u003cword\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "a-soap-example-using-aonaware;aon-1.1---aon-test-for-response-comparision;",
  "rows": [
    {
      "cells": [
        "path",
        "word"
      ],
      "line": 31,
      "id": "a-soap-example-using-aonaware;aon-1.1---aon-test-for-response-comparision;;1"
    },
    {
      "cells": [
        "soapuiautomation/soap/resources/hand.xml",
        "hand"
      ],
      "line": 32,
      "id": "a-soap-example-using-aonaware;aon-1.1---aon-test-for-response-comparision;;2"
    },
    {
      "cells": [
        "soapuiautomation/soap/resources/leg.xml",
        "leg"
      ],
      "line": 33,
      "id": "a-soap-example-using-aonaware;aon-1.1---aon-test-for-response-comparision;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 32,
  "name": "AON 1.1 - AON test for response comparision",
  "description": "",
  "id": "a-soap-example-using-aonaware;aon-1.1---aon-test-for-response-comparision;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@aon"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I have my \"AON\" API ready",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I have the request headers defined as follows",
  "rows": [
    {
      "cells": [
        "SOAPAction",
        "Define"
      ],
      "line": 24
    },
    {
      "cells": [
        "Content-Type",
        "application/soap+xml; charset\u003dUTF-8;"
      ],
      "line": 25
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I have the soap envelope defined in \"soapuiautomation/soap/resources/hand.xml\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I post the request body as XML",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I verify the AON response contains the word \"hand\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "AON",
      "offset": 11
    }
  ],
  "location": "APISteps.iGetPathValues(String)"
});
formatter.result({
  "duration": 2218632,
  "status": "passed"
});
formatter.match({
  "location": "APISteps.iGetHeaderValues(String,String\u003e)"
});
formatter.result({
  "duration": 85580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "soapuiautomation/soap/resources/hand.xml",
      "offset": 37
    }
  ],
  "location": "APISteps.iHaveTheBody(String)"
});
formatter.result({
  "duration": 522440,
  "status": "passed"
});
formatter.match({
  "location": "APISteps.iSendXMLToEndpoint()"
});
formatter.result({
  "duration": 564612912,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hand",
      "offset": 45
    }
  ],
  "location": "AONSteps.iVerifyAONResponse(String)"
});
formatter.result({
  "duration": 21165219,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "AON 1.1 - AON test for response comparision",
  "description": "",
  "id": "a-soap-example-using-aonaware;aon-1.1---aon-test-for-response-comparision;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@aon"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I have my \"AON\" API ready",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I have the request headers defined as follows",
  "rows": [
    {
      "cells": [
        "SOAPAction",
        "Define"
      ],
      "line": 24
    },
    {
      "cells": [
        "Content-Type",
        "application/soap+xml; charset\u003dUTF-8;"
      ],
      "line": 25
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I have the soap envelope defined in \"soapuiautomation/soap/resources/leg.xml\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I post the request body as XML",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I verify the AON response contains the word \"leg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "AON",
      "offset": 11
    }
  ],
  "location": "APISteps.iGetPathValues(String)"
});
formatter.result({
  "duration": 258431,
  "status": "passed"
});
formatter.match({
  "location": "APISteps.iGetHeaderValues(String,String\u003e)"
});
formatter.result({
  "duration": 39036,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "soapuiautomation/soap/resources/leg.xml",
      "offset": 37
    }
  ],
  "location": "APISteps.iHaveTheBody(String)"
});
formatter.result({
  "duration": 130842,
  "status": "passed"
});
formatter.match({
  "location": "APISteps.iSendXMLToEndpoint()"
});
formatter.result({
  "duration": 793670572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "leg",
      "offset": 45
    }
  ],
  "location": "AONSteps.iVerifyAONResponse(String)"
});
formatter.result({
  "duration": 2346423,
  "status": "passed"
});
formatter.uri("city.feature");
formatter.feature({
  "line": 1,
  "name": "Daily car maintenance",
  "description": "Cars need maintenance",
  "id": "daily-car-maintenance",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Fuelling",
  "description": "",
  "id": "daily-car-maintenance;fuelling",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "a car with an empty gas tank",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "you fill it with 50 litres of fuel",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the tank contains 50 litres",
  "keyword": "Then "
});
formatter.match({
  "location": "City.a_car_with_an_empty_gas_tank()"
});
formatter.result({
  "duration": 73175,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 17
    }
  ],
  "location": "City.you_fill_it_with_litres_of_fuel(String)"
});
formatter.result({
  "duration": 59510,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 18
    }
  ],
  "location": "City.the_tank_contains_litres(String)"
});
formatter.result({
  "duration": 49846,
  "status": "passed"
});
});