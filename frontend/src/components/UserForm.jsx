import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchUserById, createUser, updateUser, selectUserById } from '../store/userSlice';
import Title from './Common/Title';

const UserForm = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const history = useNavigate();
  const user = useSelector((state) => selectUserById(state, userId));
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserById(userId));
    }
  }, [dispatch, userId]);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        phone: user.phone,
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId) {
      dispatch(updateUser({ userId, user: formData }));
    } else {
      dispatch(createUser(formData));
    }
    history('/users');
  };

  return (
    <div>
      <Title text={userId ? 'Update User' : 'Create User'} />
      <form onSubmit={handleSubmit} className="grid justify-center mt-16">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control w-full"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control w-full"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {userId ? 'Update' : 'Create'}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
