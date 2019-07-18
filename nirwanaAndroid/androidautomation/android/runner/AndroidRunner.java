package android.runner;

import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;

import org.openqa.selenium.Platform;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;
import common.resources.CignitiProperties;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.remote.MobileCapabilityType;
import io.appium.java_client.service.local.AppiumDriverLocalService;
import io.appium.java_client.service.local.AppiumServerHasNotBeenStartedLocallyException;
import io.appium.java_client.service.local.AppiumServiceBuilder;
import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(features = "androidautomation/android/features", tags = { "@android" }, monochrome = true, plugin = {
		"pretty", "html:target/cucumber-report/androidresult", "json:target/cucumber-report/androidresult.json",
		"rerun:target/androidrerun.txt" }, glue = { "android/step_definition" }

)
public class AndroidRunner extends AbstractTestNGCucumberTests {

	static CignitiProperties properties;
	DesiredCapabilities capabilities;
	static AppiumDriver<MobileElement> androidDriver = null;
	static ThreadLocal<AppiumDriverLocalService> service = new ThreadLocal<>();
	// static ThreadLocal<AppiumDriver> androidDriver = new ThreadLocal<>();

	public AppiumDriver<MobileElement> getDriver() {
		return androidDriver;
	}

	public AppiumDriverLocalService getService() {
		return service.get();
	}

	@BeforeSuite
	public void initializeAndroidDriver() {
		properties = new CignitiProperties();
		capabilities = new DesiredCapabilities();

		String userName = properties.getProperty("userName");
		String accessKey = properties.getProperty("accessKey");
		String appiumVersion = properties.getProperty("appiumVersion");
		String androidRunAs = properties.getProperty("androidRunAs");
		String apkPath = properties.getProperty("apkPath");

		if (androidRunAs.trim().equalsIgnoreCase("Local")) {
			/*
			 * Start Appium Server Programmatically before each scenario
			 */

			AppiumServiceBuilder appiumServiceBuilder = new AppiumServiceBuilder()
					.withAppiumJS(new File("/usr/local/lib/node_modules/appium/build/lib/main.js"))
					.withIPAddress("127.0.0.1");
			service.set(appiumServiceBuilder.build());
			service.get().start();

			if (service == null || !service.get().isRunning()) {
				throw new AppiumServerHasNotBeenStartedLocallyException("An appium server node is not started!");
			}

			File app = new File(apkPath);
			DesiredCapabilities capabilities = new DesiredCapabilities();
			capabilities.setPlatform(Platform.ANDROID);
			capabilities.setCapability(MobileCapabilityType.PLATFORM_VERSION, "8.0.0");
			capabilities.setCapability(MobileCapabilityType.DEVICE_NAME, "GalaxyS8");
			capabilities.setCapability(MobileCapabilityType.APP, app.getAbsolutePath());
			capabilities.setCapability(MobileCapabilityType.AUTOMATION_NAME, "UiAutomator2");
			androidDriver = new AndroidDriver<MobileElement>(service.get().getUrl(), capabilities);
		} else {
			capabilities.setCapability("device", "Google Nexus 6");
			capabilities.setCapability("os_version", "6.0");
			capabilities.setCapability(MobileCapabilityType.AUTOMATION_NAME, "UiAutomator2");
			capabilities.setCapability("app", "bs://d658f8e714a52534ede56cc71bdac903556e0227");
			capabilities.setCapability("appiumVersion", appiumVersion);

			try {
				androidDriver = new AndroidDriver<MobileElement>(
						new URL("https://" + userName + ":" + accessKey + "@hub-cloud.browserstack.com/wd/hub"),
						capabilities);
			} catch (MalformedURLException e) {
				e.printStackTrace();
			}
		}
	}

	/*
	 * Quit the Android Driver and stop Appium server if running
	 */
	@AfterSuite
	public void stopServer() {
		if (androidDriver != null) {
			androidDriver.quit();
		}
		if (service.get() != null) {
			service.get().stop();
		}
	}
}
