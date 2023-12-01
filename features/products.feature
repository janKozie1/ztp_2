Feature: Products
    User wants to create, edit and delete products

    Scenario Outline: Product creation
        Given an user wants to create a product with name = "<name>", description = "<description>" price = <price>
        When they send a request to create it
        Then they should receive a response with code <code> and body
            """
            <body>
            """

    Examples:
        | name      | description | price   | code   | body                                                      |
        | product1  | desc        | 1.00    | 200    | { "name": "product1", "description": "desc", "price": 1 } |
        | product1  | desc        | -1.00   | 422    | null                                                      |


    Scenario Outline: Product edit
        Given an user wants to edit <index>nth product and set its price to <price>
        When they send a request to set the price to <price>
        Then they should receive a response with code <code> and body
            """
            <body>
            """

    Examples:
        | index | price   | code   | body              |
        | 0     | 6.35    | 200    | { "price": 6.35 } |
        | 0     | -6.35   | 422    | null              |


    Scenario Outline: Product deletion
        Given an user wants to delete <index>nth product
        When they send a request to delete the product
        Then they should receive a response with code <code> and body
            """
            <body>
            """

    Examples:
        | index | code   | body              |
        | 0     | 200    | true              |

        