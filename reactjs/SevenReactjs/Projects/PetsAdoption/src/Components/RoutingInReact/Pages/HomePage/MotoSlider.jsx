import React from "react";

const MotoSlider = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
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
            <img style={{ height:"55vh", width:"99vw"}}  src="https://img.freepik.com/free-vector/twitter-header-template-international-day-families-celebration_23-2150286337.jpg?t=st=1738144789~exp=1738148389~hmac=881cb688a6873ad6d5cf20e075b2950232820ada165df25d6b087192ff2eeea4&w=1380" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img style={{ height:"55vh", width:"99vw"}}   src="https://img.freepik.com/free-vector/twitter-header-template-international-day-families-celebration_23-2150239378.jpg?t=st=1738144931~exp=1738148531~hmac=c9d7ba1370d2ecc56b6c719a0824130dc6d6605052055b16fcbd8843622752a2&w=1380" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img style={{ height:"55vh", width:"99vw"}}  src="https://img.freepik.com/free-vector/pet-sitting-service-flat-design-social-media-cover-template_23-2149659934.jpg?t=st=1738145064~exp=1738148664~hmac=fdff0e612c1689a2c62ca61e35c7aef9f646f5552c1285c04f9b6a6d893d273a&w=1380" className="d-block w-100" alt="..." />
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

export default MotoSlider;