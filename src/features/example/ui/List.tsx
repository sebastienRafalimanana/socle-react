import { FC } from "react";
import { useLazyGetExampleApiQuery } from "../api/example.api";
import { useEffect,useState } from "react";

 
const UserList: FC = () => {
    const [getUserList,{isLoading}] = useLazyGetExampleApiQuery()
    const [userList,setUserList] = useState<any[]>([])
    useEffect(()=>{
        const fetchUserList = async()=>{
            let response = await getUserList({name:'all'}).unwrap()
            console.log(response);
            setUserList([response])
        }
        fetchUserList()
    },[])
    return ( 
        <div>
           <h1> list of users</h1>
           {userList.map((user,index)=>{
            return(
                <h1 key={index}>{user}</h1>
            )
           })}
        </div>
     );
}
 
export default UserList;