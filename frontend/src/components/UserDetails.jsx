import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectUsers } from '../store/userSlice';

const UserDetails = () => {
  const { userId } = useParams();
  const users = useSelector(selectUsers);
  const user = users.find((u) => u._id === userId);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <div>
        <strong>ID:</strong> {user._id}
      </div>
      <div>
        <strong>Name:</strong> {user.name}
      </div>
      <div>
        <strong>Email:</strong> {user.email}
      </div>
      <div>
        <strong>Phone:</strong> {user.phone}
      </div>
    </div>
  );
};

export default UserDetails;
