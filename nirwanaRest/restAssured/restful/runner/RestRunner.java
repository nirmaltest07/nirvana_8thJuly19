package restful.runner;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(features = "restAssured/restful/features"
, tags = {"@smoke"}
, monochrome = true
, plugin = {  "pretty", "html:target/cucumber-report/restresult",
        "json:target/cucumber-report/restresult.json",
        "rerun:target/restrerun.txt"}
, glue = {"restful/step_definition"}

)
public class RestRunner extends AbstractTestNGCucumberTests{
	
	
}
