
import { ProdEnvironment } from "./environment.prod";
import { DevEnvironment } from "./environment.dev";

export function getEnvironmanetVariables(){
    if(process.env.NODE_ENV === 'production')
    {
        return ProdEnvironment;
    }
    else{
        return DevEnvironment;
    }
}