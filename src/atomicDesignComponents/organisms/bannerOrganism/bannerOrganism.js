import React from "react";
import BatMan from "./../../../assets/images/Batman.jpg";
import SpiderMan from "./../../../assets/images/Spiderman.jpg";
import ImageTagAtom from "./../../atoms/imageTagAtom";
import "./bannerOrganism.scss";

const BannerOrganism = () => {
  return (
    <>
      <section className="banner">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <ImageTagAtom
                src={BatMan}
                alt={"Batman banner"}
                className={"d-block w-100"}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>The Batman</h5>
                <p>
                  When the Riddler, a sadistic serial killer, begins murdering
                  key political figures in Gotham, Batman is forced to
                  investigate the city's hidden corruption and question his
                  family's involvement.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <ImageTagAtom
                src={SpiderMan}
                alt={"Spider man banner"}
                className={"d-block w-100"}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Spiderman - No way Home</h5>
                <p>
                  With Spider-Man's identity now revealed, Peter asks Doctor
                  Strange for help. When a spell goes wrong, dangerous foes from
                  other worlds start to appear, forcing Peter to discover what
                  it truly means to be Spider-Man.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default BannerOrganism;
