package pact.runner;

import java.net.MalformedURLException;
import java.net.URL;
import org.junit.runner.RunWith;
import au.com.dius.pact.consumer.PactFolder;
import au.com.dius.pact.provider.junit.Provider;
import au.com.dius.pact.provider.junit.State;
import au.com.dius.pact.provider.junit.target.Target;
import au.com.dius.pact.provider.junit.target.TestTarget;
import common.resources.CignitiProperties;

@RunWith(PactRunner.class)
@Provider("ReqRes")
@PactFolder("target/pacts")

/**
 * This will verify the pact created by a consumer This can be executed all
 * alone by calling JUnit runner (right click and run as JUnit) But we are
 * currently calling this from a BDD step definition to give a touch of BDD
 */
public class CignitiContractVerifierTestSuite {

	String endPoint = new CignitiProperties("ReqRes").getProperty("URI");

	@TestTarget
	public Target target = null;

	{
		try {
			target = new HttpTarget(new URL(endPoint), true);
		} catch (MalformedURLException e) {
			e.printStackTrace();
		}
	}

	// Verify the pact contract by their states
	@State(value = "POST_user_details")
	public void verifyState() {

	}
}
