import Product from "./product";

describe("Order unit tests", () =>{ 

    it("should throw error with id is empty", () => {
        expect(() => {
            const product = new Product("", "producto 1", 100)
        }).toThrowError("Id is required")
    });

    it("should throw error with name is empty", () => {
        expect(() => {
            const product = new Product("123", "", 100)
        }).toThrowError("Name is required")
    });

    it("should throw error when price is less than zero ", () => {
        expect(() => {
            const product = new Product("123", "product 1", -1)
        }).toThrowError("Price must be greater than zero")
    });

});

    
    
