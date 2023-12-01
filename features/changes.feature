Feature: Changes
    User wants to see changes made in a product

    Scenario Outline: Product edit
        Given an user wants to view changes for <index>nth product
        When they send a request to view the changes
        Then they should receive at least one change

    Examples:
        | index |
        | 0     |


        