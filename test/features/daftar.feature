Feature: Kasir aja daftar test
    @positive_daftar
    Scenario: daftar Successfully with valid email password format
        Given I open Kasir aja Website daftar page
        When I daftar with valid format
        Then I should be on the Login page

    @Negatif_daftar
    Scenario: daftar failed with nama email password is empty
        Given I open Kasir aja Website daftar page 
        When I daftar with empty name 
        When I daftar with empty email 
        When I daftar with empty password
        Then I should see an error message

    @Negatif_daftar
    Scenario: daftar failed with email invalid format
        Given I open Kasir aja Website daftar page
        When I daftar with email invalid format
        Then I should see an error message