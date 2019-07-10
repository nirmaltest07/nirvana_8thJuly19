package android.step_definition;

import org.testng.Assert;

import android.screens.HomePage;
import android.screens.LoginPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Login {
	LoginPage loginPage = new LoginPage();
	HomePage homePage = new HomePage();

	@Given("^user is already on Login Screen$")
	public void user_already_on_login_page() {
		Assert.assertTrue(loginPage.getLoginScreen().isDisplayed());
	}

	// Reg Exp:
	// 1. \"([^\"]*)\"
	// 2. \"(.*)\"

	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username, String password) {
		loginPage.getTxtUsername().sendKeys(username);
		loginPage.getTxtPassword().sendKeys(password);
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() {
		loginPage.getBtnLogin().click();
	}

	@Then("^user is on payment home page$")
	public void user_is_on_hopme_page() {
		Assert.assertTrue(homePage.getBtnLogout().isDisplayed());
	}

	@Then("^user clicks on logout button$")
	public void user_confirms_the_balance() {
		homePage.getBtnLogout().click();
	}

}
