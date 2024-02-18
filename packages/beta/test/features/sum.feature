# features/sum.feature

Feature: Sum function
  Scenario: Sum of three numbers
    Given I have three numbers 10, 20, 30
    When I sum three numbers
    Then I get 60

