
import { ProdEnvironment } from "./environment.prod";
import { DevEnvironment } from "./environment.dev";



export interface Environment{
    db_uri: string,
    jwt_secret_key:string

}
export function getEnvironmanetVariables(){
    if(process.env.NODE_ENV === 'production')
    {
        return ProdEnvironment;
    }
    else{
        return DevEnvironment;
    }
}