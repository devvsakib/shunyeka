import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectUsers } from '../store/userSlice';
import Title from './Common/Title';

const UserDetails = () => {
  const { userId } = useParams();
  const users = useSelector(selectUsers);
  const user = users.find((u) => u._id === userId);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <Title text="User Details" />
      <div className='grid justify-center mt-20 gap-2'>
        <div>
          <strong>Name:</strong> {user.name}
        </div>
        <div>
          <strong>Email:</strong> {user.email}
        </div>
        <div>
          <strong>Phone:</strong> {user.phone}
        </div>
        <div>
          <strong>ID:</strong> {user._id}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
