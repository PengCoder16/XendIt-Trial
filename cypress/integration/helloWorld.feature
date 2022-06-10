Feature: API Rate Limiter

 Scenario: Make Single Request
    Given I make a POST request to /hello_world
    And I set body to helloWorld
    And I expect response to have the following values
      | body.message | {{helloWorld.action}} {{helloWorld.to}} |
      | status       | 200                                     |

 Scenario: Create Multiple Request Not Exceeding The Limit
    Given I make a POST request to /hello_world
    And I set body to helloWorld
    And I run it for 50 times
    And I expect response to have the following values
      | status  | 200 |
  
 Scenario: Exceed Test Rate Limit
    Given I make a POST request to /hello_world
    And I set body to helloWorld
    And I run it for 220 times
    And I expect response to have the following values
      | status  | 429 |