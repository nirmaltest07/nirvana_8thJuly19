package pact.runner;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(features = "pactautomation/pact/features", tags = { "not @ignore" }, monochrome = true, plugin = {
		"pretty", "html:target/cucumber-report/pactresult", "json:target/cucumber-report/pactresult.json",
		"rerun:target/pactrerun.txt" }, glue = { "pact/step_definition" }

)
public class TestRunner extends AbstractTestNGCucumberTests {

}
