import { Link } from "react-router-dom"
import List from "../components/List"

const Home = () => {
    return (
        <div className="my-10">
            <h2 className="text-center text-3xl font-bold uppercase bg-gradient-to-tr bg-clip-text text-transparent from-orange-400 via-[#EC3384]">Users List</h2>
            <div className="text-end mt-10">
                <Link to="/create" className="border border-orange-400 rounded-sm px-5 py-2 bg-[#EC3384] hover:bg-[#FA4A6F] text-white mb-5 duration-300 transition-all ease-linear">
                    Add User
                </Link>
            </div>
            <List />
        </div>
    )
}

export default Home