function input <T>(iput:T):T{
    return iput;
}

const x = input<string>("Hello World");
const y = input<number>(42);
const z = input<boolean>(true);

interface ApiResult<T> {
    status : string;
    data : T;
}

const apiResponse: ApiResult<string[]> = {
    status: "success",
    data: ["item1", "item2", "item3"]
};

const apiResponse2 : ApiResult< {id:number, name:string}[]> = {
    status: "success",
    data: [
        {id:1, name:"Item 1"},
        {id:2, name:"Item 2"}
    ]
};
console.log(x);
console.log(y);
