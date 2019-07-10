package web.step_definition;

import org.testng.Assert;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import web.pages.WebSampleDemoPage;

public class WebSampleDemo {
	WebSampleDemoPage webSamplePage = new WebSampleDemoPage();

	@Given("^user is already on Form$")
	public void user_is_already_on_Form() throws Throwable {
		webSamplePage.getWebDriver().get("https://www.seleniumeasy.com/test/basic-first-form-demo.html");
	}

	@When("^user inputs the text as \"([^\"]*)\"$")
	public void user_inputs_the_text_as(String message) throws Throwable {
		webSamplePage.getMessageInputField().sendKeys(message);
	}

	@Then("^user clicks on the Show Message button$")
	public void user_clicks_on_the_Show_Message_button() throws Throwable {
		webSamplePage.getBtnShowMessage().click();
	}

	@Then("^user verifies the entered message$")
	public void user_verifies_the_entered_message() throws Throwable {
		Assert.assertTrue(webSamplePage.getLblMessage().isDisplayed());
	}

	@When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String firstNum, String secNum) throws Throwable {
		webSamplePage.getFirstInuptText().sendKeys(firstNum);
		webSamplePage.getSecondInuptText().sendKeys(secNum);
	}

	@Then("^user clicks on Show Total button$")
	public void user_clicks_on_Show_Total_button() throws Throwable {
		webSamplePage.getBtnTotal().click();
	}

	@Then("^user confirms the total of the digits$")
	public void user_confirms_the_total_of_the_digits() throws Throwable {
		Assert.assertTrue(webSamplePage.getLblTotal().isDisplayed());
	}

}
