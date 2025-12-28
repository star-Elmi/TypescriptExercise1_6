interface Products{
    name:string;
    price:number;
    isdescription? : boolean;

}

/// change to type

// type Products{
//     name:string;
//     price:number;
//     isdescription? : boolean;

// }

const Userproducts = (props: Products) => {

    return(

        <>
        <p>name : {props.name}</p>
        <p>price : {props.price}</p>
        <p>description {props.isdescription? "Kusoo dhawaaw qiimo ku raali geliya " : "None"}</p>
        
        </>
    )
}

export default Userproducts;