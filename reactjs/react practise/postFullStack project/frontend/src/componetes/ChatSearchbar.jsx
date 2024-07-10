// components/SearchBar.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
// import { useHistory } from 'react-router-dom';
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"

const ChatSearchBar = () => {
  const { register, handleSubmit } = useForm();
//   const history = useHistory();
const navigate = useNavigate()

  const onSubmit = (data) => {
    const query = data.query.trim();
    if (query) {
        navigate(`/posts/getAllpost/search?query=${query}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="search-bar flex items-center">
      <input
        type="text"
        className='w-[1000px] py-3 rounded-s-xl'
        placeholder="Search posts..."
        {...register('query')}
      />
      {/* <button type="submit" className='py-[12px] bg-white rounded-e-xl px-3'>Search</button> */}
      <div className='bg-red-400 py-[12px] px-5 rounded-e-lg font-bold'>
      <Link to="/"><i class="ri-close-large-line"></i></Link>
      </div>
    </form>
  );
};

export default ChatSearchBar;
