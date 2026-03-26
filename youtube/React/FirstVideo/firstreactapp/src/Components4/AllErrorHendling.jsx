import React,{Suspense} from "react";
import ApiErrorHendel from "./ErrorHendeling/ApiErrorHendel";
import ErrorBoundary from "./ErrorBoundary";

// import LazyLoading from "./ErrorHendeling/LazyLoading"

const LazyLoading = React.lazy(() => import("./ErrorHendeling/LazyLoading"))




// const AllErrorHendling = () => {
//   return (
//     <div>
//       {/* <ErrorBoundary> */}
//       <ApiErrorHendel />
//       {/* </ErrorBoundary> */}
//     </div>
//   );
// };

// export default AllErrorHendling;




const AllErrorHendling = () => {
  return (
    <div>
    <Suspense  fallback={<div>Loading image....</div>}> 
    <LazyLoading />
    </Suspense>
    </div>
  );
};

export default AllErrorHendling;
