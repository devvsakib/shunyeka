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
  const [error, setError] = useState(null);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userId) {
      dispatch(updateUser({ userId, user: formData }));
    } else {
      try {
        const response = await dispatch(createUser(formData));
        if (response.payload && response.payload.error) {
          setError(response.payload.error);
        } else {
          history('/users');
        }
      } catch (error) {
        console.log('Error:', error);
      }
    }
  };
  
  

  return (
    <div>
      <Title text={userId ? 'Update User' : 'Create User'} />
      <form onSubmit={handleSubmit} className="w-[400px] mx-auto rounded-xl grid justify-center mt-16 bg-table_bg/10 backdrop-blur-sm text-white p-5 sm:p-10">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control w-full py-2 px-3 bg-white/10 rounded mt-2 shadow-lg"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control w-full py-2 px-3 bg-white/10 rounded mt-2 shadow-lg"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {error && <div className="error">{error}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control w-full py-2 px-3 bg-white/10 rounded mt-2 shadow-lg"
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
