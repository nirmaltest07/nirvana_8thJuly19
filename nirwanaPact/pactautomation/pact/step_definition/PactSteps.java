package pact.step_definition;

import au.com.dius.pact.consumer.dsl.PactDslJsonBody;
import common.resources.CignitiProperties;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pact.runner.CignitiContractPublisherTestSuite;
import pact.runner.CignitiContractVerifierTestSuite;
import pact.utilities.CustomPACTProvider;
import pact.utilities.PactConsumer;
import pact.utilities.PactState;
import restful.step_definition.APISteps;

import org.junit.runner.JUnitCore;
import org.junit.runner.Result;
import org.junit.runner.notification.Failure;
import org.testng.Assert;
import java.util.Map;
import java.util.Set;

public class PactSteps {

    public String classToRun;
    private Map<String, String> pactParameters = null;
    int status;
    PactDslJsonBody responseBody;
    String path;
    static CignitiProperties properties;

    PactConsumer pactConsumer;

    CustomPACTProvider customPACTProvider;

    @Given("^I have the pact (?:publisher|verification) defined in \"(.*?)\"$")
    public void iHavePacts(String className) {
        classToRun = className;
    }

    @Then("^I will (?:verify|publish) the pacts$")
    public void iVerifyPacts() {
        try {
            Result result = JUnitCore.runClasses(returnClass(classToRun));
            for (Failure failure : result.getFailures()) {
                System.out.println(failure.toString());
            }
            System.out.println("Pact Execution Status: " + result.wasSuccessful());
            Assert.assertTrue(result.wasSuccessful(),result.getFailures().toString());

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public Class returnClass(String className) {
        if (className.equalsIgnoreCase("CignitiContractPublisherTestSuite"))
            return CignitiContractPublisherTestSuite.class;
        if (className.equalsIgnoreCase("CignitiContractVerifierTestSuite"))
            return CignitiContractVerifierTestSuite.class;

        else
            return null;
    }


    @Then("^I have the below pact parameters$")
    public void iHaveThePactParams(Map<String, String> params) {
        pactParameters = params;
    }

    @When("^I have the response body as follows$")
    public void iHaveTheBody(Map<String, String> body) {
        responseBody = new PactDslJsonBody();
        Set<String> keys = body.keySet();
        for(String key : keys) {
            String value = body.get(key);
            if(value.startsWith("Regex")) {
                if(value.endsWith("<number>"))
                    responseBody.numberType(key, 111);
                else if(value.endsWith("<datetime>"))
                    responseBody.stringMatcher(key, "\\d{4}-[0-1]\\d-[0-3]\\dT(.*?)",
                            "2018-01-30T13:35:22.4334833+00:00");
            }
            else
                responseBody.stringValue(key, body.get(key));
        }
    }

    @Then("I have the path as \"(.*?)\"$")
    public void iHaveResponseHeaders(String endpoint) {
        path = endpoint;
    }

    @Then("I have the response status as \"(.*?)\"$")
    public void iHaveResponseHeaders(int statusCode) {
        status = statusCode;
    }

    @When("^I build the contract$")
    public void buildPactVerifyAPIContract() {
        pactConsumer.buildPactForAService(APISteps.currentMessageAsJson, APISteps.headersAsMap,
                pactParameters, path, null, responseBody, status);
    }

    @Then("^I will publish the pacts and verify them$")
    public void iPublishAndVerifyPacts() {
        pactConsumer.publishPactAndVerifyForService(path, APISteps.headersAsMap, pactParameters);
    }

    @When("^I check the pact wth the below parameters$")
    public void iVerifyCustomPactStateAndService(Map<String, String> params) {
        PactState.state = params.get("state");
        PactState.pactPath = params.get("pactLocation");
        PactState.serviceName = params.get("service");
        properties = new CignitiProperties(params.get("service"));
        customPACTProvider.providerURI = properties.getProperty("URI");
        customPACTProvider.verifyAllOfThePactRequest(params.get("pactLocation"), params.get("state"));
    }

    @When("^I compare the response body matches in the pact$")
    public void iCompareResponseBody() {
        customPACTProvider.verifyAllOfThePactResponse(PactState.pactPath, PactState.state);
    }
}
