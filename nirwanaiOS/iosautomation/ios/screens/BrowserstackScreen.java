package ios.screens;


import io.appium.java_client.MobileElement;
import ios.runner.iOSRunner;

public class BrowserstackScreen extends iOSRunner {

	private MobileElement element;

	public MobileElement getTextButton() {
		element = getDriver().findElementById("Text");
		return element;
	}
	
	public MobileElement getAlertButton() {
		element = getDriver().findElementById("Alert");
		return element;
	}

	public MobileElement getAlertText() {
		element = getDriver().findElementByName("Alert").findElementById("This is a native alert.");
		return element;
	}

	public MobileElement getDismissAlert() {
		element = getDriver().findElementById("OK");
		return element;
	}
	
	public MobileElement getInputTextLabel() {
		element = getDriver().findElementById("Waiting for text input.");
		return element;
	}
	
	public MobileElement getInputText() {
		element = getDriver().findElementByXPath("//XCUIElementTypeTextField");
		return element;
	}
}
