package soap.runner;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(features = "soapuiautomation/soap/features", tags = { "not @ignore" }, monochrome = true, plugin = {
		"pretty", "html:target/cucumber-report/soapresult", "json:target/cucumber-report/soapresult.json",
		"rerun:target/soaprerun.txt" }, glue = { "soap/step_definition" }

)
public class SoapRunner extends AbstractTestNGCucumberTests {

}
