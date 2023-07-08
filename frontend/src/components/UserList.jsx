// src/components/UserList.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers, deleteUser, selectUsers, selectLoading, selectError } from '../store/userSlice';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDeleteUser = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      dispatch(deleteUser(userId));
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='overflow-x-scroll'>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            users.length === 0 ? <tr><td colSpan="4" className="text-center">No Users Found</td></tr>
              :
              users.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td className='flex items-center'>
                    <Link to={`/${user._id}`} className="py-2 px-3 border-none btn-info me-2">
                      View
                    </Link>
                    <Link to={`/${user._id}/edit`} className="py-2 px-3 border-none btn-primary me-2">
                      Edit
                    </Link>
                    <button
                      className="py-2 px-3 border-none btn-danger"
                      onClick={() => handleDeleteUser(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;