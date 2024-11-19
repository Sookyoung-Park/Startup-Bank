"use server"

import { auth } from "@/auth"
import { parse } from "path"
import { parseServerActionResponse } from "./utils"

export const createPitch = async(state:any, form:FormData, pitch:string) =>{
    const session = await auth()

    // edge case
    if(!session){
        return parseServerActionResponse({error:'Not signed in', status:'ERROR'})
    }

    const {title, description, category, link} = Object.fromEntries(
        // only keep the pitch
        Array.from(form).filter(([key]) => key !== pitch)
    )

}