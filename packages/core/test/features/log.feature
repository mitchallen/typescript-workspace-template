Feature: Verify log function output

  Scenario: Log function writes to the screen
    Given I have a log function
    When I call the log function
    Then something should be written to the screen
