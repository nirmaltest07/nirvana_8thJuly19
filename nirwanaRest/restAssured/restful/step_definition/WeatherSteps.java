package restful.step_definition;

import cucumber.api.java.en.When;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.testng.Assert;

import common.utilities.RESTAssuredAPI;
import java.util.Map;
import java.util.Set;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

public class WeatherSteps {

	JSONObject response;
	JSONParser parser = new JSONParser();

	@When("^I verify the response for chester weather$")
	public void iVerifyResponseForWeatherInformation(Map<String, String> keyValuePairs) throws ParseException {
		Set<String> keys = keyValuePairs.keySet();
		response = (JSONObject) parser.parse(RESTAssuredAPI.globalResponse.getBody().print());
		for (String key : keys) {
			assertThat(response.get(key).toString(), hasToString(keyValuePairs.get(key)));
		}
	}
}
