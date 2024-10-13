Feature: product functional test
    @add_product
    Scenario: add Successfully with valid input data format
        Given I open Kasir aja Website product page
        When I add product with valid format
        Then I should see an passed message

    @edit_product
    Scenario: edit Successfully with valid input data format
        Given I open Kasir aja Website edit product page
        When I edit product with valid format
        Then I should see an passed message

    @hapus_product
    Scenario: hapus Successfully with valid input data format
        Given I open Kasir aja Website hapus product page
        When I hapus product with valid format
        Then I should see an passed message