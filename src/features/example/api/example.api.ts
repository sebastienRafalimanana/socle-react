import { api } from "@/shared/api";
import { UserDto } from "../state/types";

const exampleApi = api.injectEndpoints({
    endpoints: (build)=>({
        getExampleApi:build.query<UserDto,any>({
            query:(payload)=>({
                url:"users",
                method:"GET",
            })
        })
    })
})

export const {useLazyGetExampleApiQuery} = exampleApi



