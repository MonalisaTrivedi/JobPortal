import React from "react";
import m1 from "../images/adidas.png";
import m2 from "../images/sprint.jpeg";
import m3 from "../images/amazon.png";
import m4 from "../images/microsoft.png";
import m5 from "../images/puma.png";
import './Cars.css'

const Cars = () => {
  const carData = [
    {
      image: m1,
      designation: "Product Designer",
      company:"Adidas",
      address: " New York, New York",
      time: "Part time",
    },
    {
      image: m2,
      designation: "Digital Marketing Director",
      company:"Sprint",
      address: " Overland Park, Kansas",
      time: "Full Time",
    },
    {
      image: m3,
      designation: "Back-end Engineer (Python)",
      company:"Amazon",
      address: " Overland Park, Kansas",
      time: "Full Time",
    },
    {
      image: m4,
      designation: "Senior Art Director",
      company:"Microsoft",
      address: " Anywhere",
      time: "Full Time",
    },
    {
      image: m5,
      designation: "Product Designer",
      company:"Puma",
      address: "  San Mateo, CA",
      time: "Full Time",
    },
  ];

  return (
    <>
      <div className="container-fluid mb-5">
        <div className="row ">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading">
              <h2>43,167 Job Listed</h2>
            </div>
          </div>
          <div className="row">
            {carData.map((card, index) => (
              <div className="col-10 abc" key={index}>
                <div>
                <img src={card.image} alt="..." className="img"/>
                </div>
                <div>
                  <h4>{card. designation}</h4>
                  <h6><strong>{card.company}</strong></h6>
                </div>
                <div>
                <p>{card. address}</p>
                </div>
                <div>
                <button>{card.time}</button>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Cars;
