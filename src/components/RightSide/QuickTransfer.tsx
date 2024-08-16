import { SiTelegram } from "react-icons/si";
import user1 from "../../assets/user.jpeg";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
import { useEffect, useState } from "react";

const QuickTransfer = () => {
    const[user, setUser] = useState([])
useEffect(()=>{
const fetchUsers = async()=>{
    const res:any = await axios.get('https://jsonplaceholder.typicode.com/users')
    if(res){
        console.log(res.data1);
        setUser(res.data)
    }
}
    fetchUsers()
},[])

  return (
    <div className=" bg-white py-6 gap-3 rounded-2xl ">
      <div className="flex items-start justify-between">
        <h1 className="my-1 font-bold mx-2">Quick Transfer</h1>
        <div className="mb-4 flex justify-end mx-2">View all</div>
      </div>
      <div className="rounded-2xl my-2 flex flex-row items-center justify-center">
        <div className="w-12 h-24 rounded-full bg-red-300 mx-1">
            {/* {user.map((user)=>(
                <div>
                    <img
            src={user.name}
            alt="account holders"
            className="w-12 h-14 rounded-full p-1"
          />
          <div>
            <h3 className="text-sm mx-2">jahfar</h3>
          </div>
                </div>
            ))} */}
          
        </div>
        <div className="w-12 h-24 rounded-full bg-yellow-100">
          <img
            src={user1}
            alt="account holders"
            className="w-12 h-14 rounded-full p-1"
          />
          <div>
            <h3 className="text-sm mx-2">jahfar</h3>
          </div>
        </div>
        <div className="w-12 h-24 rounded-full bg-green-200 mx-1">
          <img
            src={user1}
            alt="account holders"
            className="w-12 h-14 rounded-full p-1"
          />
          <div>
            <h3 className="text-sm mx-2">jahfar</h3>
          </div>
        </div>
        <div className="w-12 h-24 rounded-full bg-blue-200 mx-1">
          <img
            src={user1}
            alt="account holders"
            className="w-12 h-14 rounded-full p-1"
          />
          <div>
            <h3 className="text-sm mx-2">{}</h3>
          </div>
        </div>
        <div className="w-12 h-24 rounded-full border-dotted border-2 mx-1 flex justify-center items-center">
          <AiOutlinePlus className="w-14 h-14 rounded-full p-3" />
        </div>
      </div>

      <div className="bg-gray-200 p-5 rounded-2xl m-2 flex justify-between">
        <div className="justify-start">🏁$3454</div>
        <div className="justify-end">
          <SiTelegram />
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
