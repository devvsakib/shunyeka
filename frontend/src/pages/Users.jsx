import { Link } from "react-router-dom"
import UserList from "../components/UserList"
import Title from "../components/Common/Title"

const Users = () => {
    return (
        <div>
            <Title text="Add/Update User" />
            <div className="text-end my-10">
                <Link to="/create" className="border border-orange-400 rounded-sm px-5 py-2 bg-[#EC3384] hover:bg-[#FA4A6F] text-white mb-5 duration-300 transition-all ease-linear">
                    Create User
                </Link>
            </div>
            <UserList />
        </div>
    )
}

export default Users