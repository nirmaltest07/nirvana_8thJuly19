package pact.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = "soapuiautomation/soap/features"
, tags = {"~@ignore"}
, monochrome = true
, plugin = {  "pretty", "html:target/cucumber-report/runwebat",
        "json:target/cucumber-report/runwebat/cucumber.json",
        "rerun:target/cucumber-report/runwebat/rerun.txt"}
, glue = {"soap/step_definition"}

)
public class TestRunner extends AbstractTestNGCucumberTests{
	
	
}
