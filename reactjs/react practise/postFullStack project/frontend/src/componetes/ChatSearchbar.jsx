// components/SearchBar.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"

const ChatSearchBar = () => {
  const { register, handleSubmit ,reset } = useForm();
//   const history = useHistory();
const navigate = useNavigate()

  const onSubmit = (data) => {
    const query = data.query.trim();
    if (query) {
        navigate(`/posts/getAllpost/search?query=${query}`);
    }
  };

  // search bar reset butten
  const Inpute = () =>{
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="search-bar flex items-center">
      <input
        type="text"
        className='w-[50vw] py-4 rounded-s-xl bg-orange-50'
        placeholder="Search posts..."
        {...register('query')}
        
      />
      {/* <button type="submit" className='py-[12px] bg-white rounded-e-xl px-3'>Search</button> */}
      <div className='bg-red-400 py-[17px] px-5 rounded-e-lg font-bold'>
      <Link to="/"><i class="ri-close-large-line" onClick={Inpute}></i></Link>
      </div>
    </form>
  );
};

export default ChatSearchBar;
