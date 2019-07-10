package web.runner;

import java.net.MalformedURLException;
import java.net.URL;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;
import common.resources.CignitiProperties;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;
import io.github.bonigarcia.wdm.WebDriverManager;

@CucumberOptions(features = "webautomation/web/features", tags = { "~@Ignore" }, monochrome = true, plugin = { "pretty",
		"html:target/cucumber-report/runwebat", "json:target/cucumber-report/runwebat/cucumber.json",
		"rerun:target/cucumber-report/runwebat/rerun.txt" }, glue = { "web/step_definition" }

)
public class WebRunner {

	private TestNGCucumberRunner testNGCucumberRunner;
	static CignitiProperties properties;
	static WebDriver webDriver = null;
	DesiredCapabilities capabilities;

	@BeforeClass(alwaysRun = true)
	public void setUpClass() throws Exception {
		testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
	}

	@Test(groups = "cucumber", description = "Runs Cucumber Feature", dataProvider = "features")
	public void feature(CucumberFeatureWrapper cucumberFeature) {
		testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
	}

	@DataProvider
	public Object[][] features() {
		return testNGCucumberRunner.provideFeatures();
	}

	@AfterClass(alwaysRun = true)
	public void tearDownClass() throws Exception {
		testNGCucumberRunner.finish();
	}

	public WebDriver getWebDriver() {
		return webDriver;
	}

	@BeforeSuite
	public void connectToSauceLab() {
		properties = new CignitiProperties();

		String userName = properties.getProperty("userName");
		String accessKey = properties.getProperty("accessKey");
		String browserName = properties.getProperty("browserName");
		String webPlatform = properties.getProperty("webPlatform");
		String runOn = properties.getProperty("runOn");

		capabilities = new DesiredCapabilities();
		capabilities.setBrowserName(browserName);
		capabilities.setCapability("platform", webPlatform);

		if (runOn.trim().equalsIgnoreCase("Local")) {
			WebDriverManager.chromedriver().setup();
			webDriver = new ChromeDriver();
			webDriver.manage().window().maximize();
		} else {
			try {
				webDriver = new RemoteWebDriver(
						new URL("https://" + userName + ":" + accessKey + "@hub-cloud.browserstack.com/wd/hub"),
						capabilities);
			} catch (MalformedURLException e) {
				e.printStackTrace();
			}
		}
	}

	/*
	 * Quit the webdriver
	 */
	@AfterSuite
	public void stopServer() {
		if (webDriver != null) {
			webDriver.quit();
		}
	}
}
