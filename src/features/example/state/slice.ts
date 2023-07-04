import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UserDto,UserState } from './types'

const initialState: UserState = {
    users: undefined,
}

export const exampleSlice = createSlice({
    name: 'example',
    initialState: initialState,
    reducers: {
        updateUserList(state, action: PayloadAction<UserDto | undefined>) {
            state.users = [{ ...action.payload! }]
        },
    },
})

export const { updateUserList,  } = exampleSlice.actions
export const exampleReducer = exampleSlice.reducer
