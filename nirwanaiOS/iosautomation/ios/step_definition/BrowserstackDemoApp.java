package ios.step_definition;


import org.testng.Assert;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import ios.screens.BrowserstackScreen;

public class BrowserstackDemoApp {
	BrowserstackScreen browserStackDemo = new BrowserstackScreen();

	@Given("^user is already on Home Screen$")
	public void user_already_on_home_screen() {
		Assert.assertTrue(browserStackDemo.getTextButton().isDisplayed());
		Assert.assertTrue(browserStackDemo.getAlertButton().isDisplayed());
	}

	@When("^user clicks on \"([^\"]*)\" button$")
	public void user_clicks_on_button(String buttonName) {
		if (buttonName.equals("Text"))
			browserStackDemo.getTextButton().click();
		else
			browserStackDemo.getAlertButton().click();
	}

	@Then("^user dismiss the alert$")
	public void user_dismiss_the_alert() {
		browserStackDemo.getDismissAlert().click();
	}

	@Then("^user verifies alert text$")
	public void user_verifies_text() {
		Assert.assertEquals(browserStackDemo.getAlertText().getText(), "This is a native alert.");
	}

	@Then("^user enters text as \"([^\"]*)\"$")
	public void user_enters_text(String inputText) {
		browserStackDemo.getInputText().sendKeys(inputText);
	}

	@Then("^user verifies input label$")
	public void user_verifies_text_input_label() {
		Assert.assertEquals(browserStackDemo.getInputTextLabel().getText(), "Waiting for text input.");
	}

}
