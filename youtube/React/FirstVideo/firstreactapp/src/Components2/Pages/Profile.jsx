// import React from "react";

// const Profile = ({ user }) => {
//   console.log(user);

//   if (user === true) {
//     return (
//       <>
//       <div className="min-h-screen flex items-center justify-center bg-gray-900">
//         <div className="text-center mt-10 text-green-700 font-semibold text-2xl">Profile</div>
//         </div>
//       </>
//     );
//   } else {
//     return (
//       <>
//       <div className="min-h-screen flex items-center justify-center bg-gray-900">
//         <div className="text-center mt-10 text-red-700 font-semibold text-2xl">Profile is not found</div>
//         </div>
//       </>
//     );
//   }
// };

// export default Profile;

// import React from "react";

// const Profile = ({ std, user }) => {
//   console.log(std);
//   console.log(user);
//   return (
//     <div className="min-h-screen flex items-center justify-center flex-col bg-gray-900">
//       {user && (
//         <div>
//           {std.length > 0 ? (
//             std.map((item) => (
//               <div
//                 key={item.id}
//                 className="text-center mt-10 text-green-700 font-semibold text-2xl"
//               >
//                 <p>{item.name}</p>
//               </div>
//             ))
//           ) : (
//             <div className="text-red-500">student not found</div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;



import React from 'react'

const Profile = ({user}) => {


  switch(user){
    case true:
       return (<div className='text-center mt-10 text-green-700 font-semibold text-2xl'>profile</div>)
    case false:
      return (<div className='text-center mt-10 text-red-700 font-semibold text-2xl'>not found used</div>)
    default:
          return (<div>both not match</div>)
  }
 
}

export default Profile

