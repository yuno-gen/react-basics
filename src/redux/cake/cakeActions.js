import { BUY_CAKE, BAKE_CAKE } from "./cakeTypes";

export const buyCake = (number = 1)=>{
    return{
        type: BUY_CAKE,
        payload: number
    }
}

export const bakeCake = (number = 1)=>{
    return{
        type: BAKE_CAKE,
        payload: number
    }
}
