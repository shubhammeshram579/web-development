import React from "react";

const SumsungSlider = () => {
  return (
    <div style={{paddingTop:"20px"}}>
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
            <img style={{ height:"55vh", width:"99vw"}}  src="https://scontent.fpnq2-2.fna.fbcdn.net/v/t39.30808-6/295071024_10160254216814374_4842842662075833236_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=U5O_0GZqfywQ7kNvgEtv7g4&_nc_zt=23&_nc_ht=scontent.fpnq2-2.fna&_nc_gid=AkfCxFEJ4tZMkzpBXuLeGsm&oh=00_AYB1jy8tXmzSFiBdGfJgXD_6vjPPXPMuAl5X9QbFKwKWWQ&oe=67917D71" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img style={{ height:"55vh", width:"99vw"}}   src="https://scontent.fpnq13-1.fna.fbcdn.net/v/t39.30808-6/358089017_10161053245174374_3608750446595841565_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=io4WIOX9otwQ7kNvgHtdaPZ&_nc_zt=23&_nc_ht=scontent.fpnq13-1.fna&_nc_gid=ACDABcTuez9uAu_aOUZmXN1&oh=00_AYDWVek6zj2sIDoE2nXM_s5MuQ5gLyYrRWuDMIk6aIg6CQ&oe=67908767" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img style={{ height:"55vh", width:"99vw"}}  src="https://scontent.fpnq2-1.fna.fbcdn.net/v/t39.30808-6/300263515_10160299668609374_4349792212665298147_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=C1-6q4r08PoQ7kNvgFCxikb&_nc_zt=23&_nc_ht=scontent.fpnq2-1.fna&_nc_gid=AjECYuQ9hhvWFEpIutRYn0U&oh=00_AYBfpjqSXh8iXhNK3nX5EBBgI4484klDR6HMKZaluAX04w&oe=679157C2" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-target="#carouselExampleIndicators"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-dark rounded-circle"
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
            className="carousel-control-next-icon bg-dark rounded-circle"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
};

export default SumsungSlider;