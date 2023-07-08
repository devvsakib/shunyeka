import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, selectError, selectLoading, selectUsers } from "../store/userSlice";
import { useEffect } from "react";

const List = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div className="mt-10 overflow-scroll">
            <table className="mx-auto table bg-table_bg/10 backdrop-blur-sm text-white sm:max-w-3xl">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>ID</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user._id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default List