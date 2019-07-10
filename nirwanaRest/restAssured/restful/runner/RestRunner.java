package restful.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = "restAssured/restful/features"
, tags = {"@smoke"}
, monochrome = true
, plugin = {  "pretty", "html:target/cucumber-report/runwebat",
        "json:target/cucumber-report/runwebat/cucumber.json",
        "rerun:target/cucumber-report/runwebat/rerun.txt"}
, glue = {"restful/step_definition"}

)
public class RestRunner extends AbstractTestNGCucumberTests{
	
	
}
