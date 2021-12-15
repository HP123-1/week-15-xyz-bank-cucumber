$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("addcustomer.feature");
formatter.feature({
  "line": 2,
  "name": "Add customer",
  "description": "",
  "id": "add-customer",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13749990100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "verify customer should be able to login and logout successfully",
  "description": "",
  "id": "add-customer;verify-customer-should-be-able-to-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Smoke"
    },
    {
      "line": 13,
      "name": "@Sanity"
    },
    {
      "line": 13,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on customer login link",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click on search customer field",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter previously added first name\"Harry Potter\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on log out button",
  "keyword": "Then "
});
formatter.match({
  "location": "AddingCusomerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 169786600,
  "status": "passed"
});
formatter.match({
  "location": "AddingCusomerSteps.iClickOnCustomerLoginLink()"
});
formatter.result({
  "duration": 574735300,
  "status": "passed"
});
formatter.match({
  "location": "AddingCusomerSteps.iClickOnSearchCustomerField()"
});
formatter.result({
  "duration": 14234769400,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d96.0.4664.93)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027TL-HEN-ICTS-01\u0027, ip: \u0027192.168.0.63\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ef3b1a5bbc9acb7a801dfcdf5408d272, findElement {using\u003dxpath, value\u003d//select[@id\u003d\u0027userSelect\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:59035}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59035/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ef3b1a5bbc9acb7a801dfcdf5408d272\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat com.bank.utility.Utility.clickOnElement(Utility.java:54)\r\n\tat com.bank.pages.OpenAccountPage.clickOnSearchCustomerField(OpenAccountPage.java:27)\r\n\tat com.bank.cucumber.steps.AddingCusomerSteps.iClickOnSearchCustomerField(AddingCusomerSteps.java:62)\r\n\tat ✽.And I click on search customer field(addcustomer.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 36
    }
  ],
  "location": "AddingCusomerSteps.iEnterPreviouslyAddedFirstName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddingCusomerSteps.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddingCusomerSteps.iClickOnLogOutButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 77716000,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d96.0.4664.93)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027TL-HEN-ICTS-01\u0027, ip: \u0027192.168.0.63\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ef3b1a5bbc9acb7a801dfcdf5408d272, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:59035}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59035/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ef3b1a5bbc9acb7a801dfcdf5408d272\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:349)\r\n\tat com.bank.utility.Utility.getScreenshot(Utility.java:359)\r\n\tat com.bank.cucumber.Hooks.tearDown(Hooks.java:25)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 7684368400,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "verify customer should deposite money successfully",
  "description": "",
  "id": "add-customer;verify-customer-should-deposite-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@Sanity"
    },
    {
      "line": 22,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I click on search customer field",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I enter previously added first name\"Harry Potter\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on deposite tab",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I entred deposit ammount(100);",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on deposite button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I could see message \"Deposit Successful\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AddingCusomerSteps.iClickOnSearchCustomerField()"
});
formatter.result({
  "duration": 4772865200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 36
    }
  ],
  "location": "AddingCusomerSteps.iEnterPreviouslyAddedFirstName(String)"
});
formatter.result({
  "duration": 355708800,
  "status": "passed"
});
formatter.match({
  "location": "AddingCusomerSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 190652600,
  "status": "passed"
});
formatter.match({
  "location": "AddingCusomerSteps.iClickOnDepositeTab()"
});
formatter.result({
  "duration": 448212300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 25
    }
  ],
  "location": "AddingCusomerSteps.iEntredDepositAmmount(int)"
});
formatter.result({
  "duration": 478403600,
  "status": "passed"
});
formatter.match({
  "location": "AddingCusomerSteps.iClickOnDepositeButton()"
});
formatter.result({
  "duration": 219773600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deposit Successful",
      "offset": 21
    }
  ],
  "location": "AddingCusomerSteps.iCouldSeeMessage(String)"
});
formatter.result({
  "duration": 108422400,
  "status": "passed"
});
formatter.after({
  "duration": 1203706500,
  "status": "passed"
});
formatter.before({
  "duration": 6537578700,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "verify customer should be able to withdrow money successfuly",
  "description": "",
  "id": "add-customer;verify-customer-should-be-able-to-withdrow-money-successfuly",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@Smoke"
    },
    {
      "line": 33,
      "name": "@Sanity"
    },
    {
      "line": 33,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I click on search customer field",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I enter previously added first name\"Harry Potter\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on witdrow tab",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter withdrow amount\"50\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on witdrow button",
  "keyword": "Then "
});
formatter.match({
  "location": "AddingCusomerSteps.iClickOnSearchCustomerField()"
});
formatter.result({
  "duration": 4115080800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 36
    }
  ],
  "location": "AddingCusomerSteps.iEnterPreviouslyAddedFirstName(String)"
});
formatter.result({
  "duration": 322629100,
  "status": "passed"
});
formatter.match({
  "location": "AddingCusomerSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 146725400,
  "status": "passed"
});
formatter.match({
  "location": "AddingCusomerSteps.iClickOnWitdrowTab()"
});
formatter.result({
  "duration": 30100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 24
    }
  ],
  "location": "AddingCusomerSteps.iEnterWithdrowAmount(String)"
});
formatter.result({
  "duration": 3749244700,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.bank.cucumber.steps.AddingCusomerSteps.iEnterWithdrowAmount(AddingCusomerSteps.java:108)\r\n\tat ✽.And I enter withdrow amount\"50\"(addcustomer.feature:39)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "AddingCusomerSteps.iClickOnWitdrowButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1477757500,
  "status": "passed"
});
});