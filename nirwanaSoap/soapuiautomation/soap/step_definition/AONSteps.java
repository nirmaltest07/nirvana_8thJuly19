package soap.step_definition;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import common.utilities.JSONHelper;
import common.utilities.RESTAssuredAPI;
import io.cucumber.java.en.When;

public class AONSteps {

	@When("^I verify the AON response contains the word \"(.*?)\"$")
	public void iVerifyAONResponse(String word) {
		String wordfromresponse = RESTAssuredAPI.globalResponse.asString();
		try {
			wordfromresponse = JSONHelper.xmlAsJson(wordfromresponse).getJSONObject("soap:Envelope")
					.getJSONObject("soap:Body").getJSONObject("DefineResponse").getJSONObject("DefineResult")
					.getString("Word");
			assertThat(wordfromresponse, hasToString(word));
		} catch (Exception e) {
			System.out.println("Unable to find the Envelop in response :" + wordfromresponse);
			e.printStackTrace();
		}
	}
}
