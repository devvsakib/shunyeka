import { Link } from "react-router-dom"
import List from "../components/List"
import Title from "../components/Common/Title"

const Home = () => {
    return (
        <div className="my-10">

            <Title text="Users List" />
            <div className="text-end mt-10">
                <Link to="/users" className="border border-orange-400 rounded-sm px-5 py-2 bg-[#EC3384] hover:bg-[#FA4A6F] text-white mb-5 duration-300 transition-all ease-linear">
                    Add User
                </Link>
            </div>
            <List />
        </div>
    )
}

export default Home