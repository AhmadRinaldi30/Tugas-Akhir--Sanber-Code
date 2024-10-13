Feature: Categori functional test
    @add_categori
    Scenario: add Successfully with valid input data format
        Given I open Kasir aja Website categori page
        When I add categori with valid format
        Then I should see an passed message

    @edit_categori
    Scenario: edit Successfully with valid input data format
        Given I open Kasir aja Website edit categori page
        When I edit categori with valid format
        Then I should see an passed message

    @hapus_categori
    Scenario: hapus Successfully with valid input data format
        Given I open Kasir aja Website hapus categori page
        When I edit categori with valid format
        Then I should see an passed message