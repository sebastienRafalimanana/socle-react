export interface UserDto{
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
}
export interface UserState{
    users: UserDto[] | undefined
}