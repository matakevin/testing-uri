$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/com/chroma/features/Sample%20Test.feature");
formatter.feature({
  "name": "Sample Test Scenarios",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Home page login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@Progression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a user is on the login page \"https://mexil.it/chroma_tech_academy/dev/site/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SampleTestStepDef.a_user_is_on_the_login_page(String)"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class com.chroma.stepDefinitions.SampleTestStepDef\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\n\tat cucumber.runner.Runner.runPickle(Runner.java:49)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:123)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat cucumber.api.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:147)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\n\t... 33 more\nCaused by: java.lang.Error: Unresolved compilation problems: \n\tThe import com.chroma.pages.DashboardPage cannot be resolved\n\tThe import com.chroma.pages.LoginTwoPage cannot be resolved\n\tThe import com.chroma.utils.CucumberLogUtils cannot be resolved\n\tThe import com.chroma.web cannot be resolved\n\tThe import com.chroma.web cannot be resolved\n\tDashboardPage cannot be resolved to a type\n\tDashboardPage cannot be resolved to a type\n\tWebDriverUtils cannot be resolved\n\tCucumberLogUtils cannot be resolved\n\tWebDriverUtils cannot be resolved\n\tDashboardPage cannot be resolved to a type\n\tCommonMethods cannot be resolved\n\tDashboardPage cannot be resolved to a type\n\tCommonMethods cannot be resolved\n\tDashboardPage cannot be resolved to a type\n\tCommonMethods cannot be resolved\n\tDashboardPage cannot be resolved to a type\n\tCommonMethods cannot be resolved\n\tDashboardPage cannot be resolved to a type\n\tCommonMethods cannot be resolved\n\tDashboardPage cannot be resolved to a type\n\tCommonMethods cannot be resolved\n\tDashboardPage cannot be resolved to a type\n\tCommonMethods cannot be resolved\n\tDashboardPage cannot be resolved to a type\n\tCommonMethods cannot be resolved\n\n\tat com.chroma.stepDefinitions.SampleTestStepDef.\u003cinit\u003e(SampleTestStepDef.java:12)\n\t... 39 more\n",
  "status": "failed"
});
formatter.step({
  "name": "user logs in with valid credentials username \"general@teacher.com\" and password \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "SampleTestStepDef.user_logs_in_with_valid_credentials_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see dashboard page with URL \"https://mexil.it/chroma_tech_academy/dev/admin/admin/dashboard\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SampleTestStepDef.user_should_see_dashboard_page_with_URL(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});