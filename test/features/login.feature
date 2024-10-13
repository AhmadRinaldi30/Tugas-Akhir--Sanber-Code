@login
Feature: Saucedemo Login Test
    Scenario: Login Successfully with valid credentials
        Given I open Kasir aja Website 
        When I Login with valid credentials
        Then I should be on the dashboard page
  
    Scenario: Verify login failed with invalid username
        Given I open Kasir aja Website 
        When I login with invalid username 
        Then I should see an error message

    Scenario: Verify login failed with invalid password
        Given I open Kasir aja Website 
        When I login with invalid password 
        Then I should see an error message