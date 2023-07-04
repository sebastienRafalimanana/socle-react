import { api } from "@/shared/api"
import { exampleReducer,exampleSlice } from "@/features/example/state/slice"


const reducers = {
    [exampleSlice.name]:exampleReducer,
    [api.reducerPath]:api.reducer,
}

export default reducers