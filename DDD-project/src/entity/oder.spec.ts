import Order from "./order";

describe("Order unit tests", () =>{ 

    it("should throw error with id is empty", () => {
        expect(() => {
            const order = new Order("", "123", [])
        }).toThrowError("Id is required")
    });

});

    
    
