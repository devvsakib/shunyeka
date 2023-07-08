import { Link } from "react-router-dom"
import UserList from "../components/UserList"

const Home = () => {
    return (
        <div className="my-10">
            <h2 className="text-center text-3xl font-bold uppercase bg-gradient-to-tr bg-clip-text text-transparent from-orange-400 ">Users List</h2>
            <Link to="/create" className="btn btn-primary mb-3">
                Add User
            </Link>
            <UserList />
        </div>
    )
}

export default Home