import React from "react";

const SliderPage = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide pt-4"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img style={{ height:"100vh", width:"100%"}}  src="https://worcesterarl.org/wp-content/uploads/2022/04/WARL-Open-Graph-1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img style={{ height:"100vh", width:"100%"}}   src="https://img.freepik.com/free-photo/anime-style-scene-with-people-showing-affection-outdoors-street_23-2151500144.jpg?t=st=1738148801~exp=1738152401~hmac=329a7ed48f5e77e0b582878944c9059b346241e9b9620724a04c24bf0d21f093&w=1060" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img style={{ height:"100vh", width:"100%"}}  src="https://img.freepik.com/free-photo/side-view-anime-girl-hugging-dog_23-2150970947.jpg?t=st=1738148846~exp=1738152446~hmac=947938818bdb16eecdfec2239e85a6226b15d97456177f6bd4c21d155a5055ba&w=1060" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-target="#carouselExampleIndicators"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-target="#carouselExampleIndicators"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
};

export default SliderPage;
