import Address from "./address";

export default class Customer {
    
    private _id: string;
    private _name: string;
    private _address!: Address;
    private _activate: boolean =false;

    constructor(id: string, name:string) {
        this._id = id;
        this._name = name;
        this.validate();
    }

    get name(): string {
        return this._name;
    }

    validate(){
        
        if(this._id.length === 0){
            throw new Error("Id is required");
        }
        
        if(this._name.length === 0){
            throw new Error("Name is required");
        }
    }

    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    isActive(): boolean {
        return this._activate;
    }

    activate() {
        if (this._address === undefined) {
        throw new Error("Address is mandatory to activate a customer");
        }
        this._activate = true;
    }

    deactivate(){
        this._activate = false;
        this.validate();
    }

    set Address(address: Address) {
        this._address = address;
    }

}

//inciar na aula agregados