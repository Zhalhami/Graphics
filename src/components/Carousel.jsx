import React from "react";
function Carousel(){
    return(
      <section id = "reviews" >
        <div id="carouselExampleIndicators" className="carousel slide carousel-content container-fluid" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
            <h3>He did a great job... I can't wait to work with him again</h3>
            <img  className="carousel-image" src="https://cdn.pixabay.com/photo/2020/03/02/15/17/water-4895991_960_720.jpg" alt="profile-pic" />
            <em>Tunde, Osun</em> 
    </div>
    <div className="carousel-item">
            <h3>He was a very good student of mine, not suprised on how he his doing a great job.</h3>
            <img  className="carousel-image" src="https://i.pinimg.com/736x/7f/ca/40/7fca40c20f002f0b8c8ed773c0785ae6.jpg" alt="profile-pic" />
            <em>Arinfe, Lagos</em>
    </div>
    <div className="carousel-item">
            <h3>Gaucho brought my dream design into reality.</h3>
            <img  className="carousel-image" src="https://cdn.pixabay.com/photo/2020/03/02/15/17/water-4895991_960_720.jpg" alt="profile-pic" />
            <em>Ruth, Ogun </em>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</section>
    )
}
export default Carousel;