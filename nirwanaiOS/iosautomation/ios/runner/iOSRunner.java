package ios.runner;

import java.net.MalformedURLException;
import java.net.URL;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;
import common.resources.CignitiProperties;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.ios.IOSDriver;
import io.appium.java_client.service.local.AppiumDriverLocalService;

@CucumberOptions(features = "iosautomation/ios/features", tags = { "@ios" }, monochrome = true, plugin = {
		"pretty", "html:target/cucumber-report/runwebat", "json:target/cucumber-report/runwebat/cucumber.json",
		"rerun:target/cucumber-report/runwebat/rerun.txt" }, glue = { "ios/step_definition" }

)
public class iOSRunner {

	private TestNGCucumberRunner testNGCucumberRunner;
	static CignitiProperties properties;

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

	static ThreadLocal<AppiumDriverLocalService> service = new ThreadLocal<>();
	static AppiumDriver<MobileElement> appiumDriver = null;

	// static ThreadLocal<AppiumDriver> driver = new ThreadLocal<>();

	public AppiumDriver<MobileElement> getDriver() {
		return appiumDriver;
	}

	public AppiumDriverLocalService getService() {
		return service.get();
	}

	@BeforeSuite
	public void initializeiOSDriver() {
		properties = new CignitiProperties();

		String userName = properties.getProperty("userName");
		String accessKey = properties.getProperty("accessKey");

		DesiredCapabilities capabilities = new DesiredCapabilities();
		capabilities.setCapability("platform", "ios");
		capabilities.setCapability("device", "iPhone 8 Plus");
		capabilities.setCapability("os_version", "11");
		capabilities.setCapability("app", "bs://e2c1fab24767dc5ecc1f3702c29edcef34b1dd65");
		capabilities.setCapability("appiumVersion", "1.13.0");

		try {
			appiumDriver = new IOSDriver<MobileElement>(
					new URL("https://" + userName + ":" + accessKey + "@hub-cloud.browserstack.com/wd/hub"),
					capabilities);
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	/*
	 * Stop Appium Server Programmatically before each scenario
	 */
	@AfterSuite
	public void stopServer() {
		if (appiumDriver != null) {
			appiumDriver.quit();
		}
		if (service.get() != null) {
			service.get().stop();
		}
	}

}
