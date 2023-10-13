import React from 'react';
import m1 from "../images/adidas.png";
import m2 from "../images/sprint.jpeg";
import m3 from "../images/amazon.png";
import m4 from "../images/microsoft.png";
import m5 from "../images/puma.png";

const Testing = () => {

    const card = [
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

<section class="section" id="trainers">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="section-heading">
                        <h2>43,167 Job Listed</h2>

                    </div>
                </div>
            </div>

            <ul class="job-listings mb-5">

            {
                card.map((item,index)=>{
                return (
                    <>
                          <li class="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center" key={index}>
                    <a href="job-single.html"></a>
                    <div class="job-listing-logo">
                <img src={item.image} alt="Free Website Template by Free-Template.co" class="img-fluid"
                            data-pagespeed-url-hash="1681068810"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);" style={{height:"150px", width:"150px"}}/>
                    </div>
                    <div class="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                        <div class="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                            <h2>{item.designation}</h2>
                            <strong>{item.company}</strong>
                        </div>
                        <div class="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                            <span class="icon-room"></span> {item.address}
                        </div>
                        <div class="job-listing-meta">
                            <span class="badge badge-danger">{item.time}</span>
                        </div>
                    </div>
                </li>
                    </>
                )
              


                })
            }


               
            </ul>
            <br/>

            <div class="row pagination-wrap">
                <div class="col-md-6 text-center text-md-left mb-4 mb-md-0">
                <span>Showing 1-5 Of 43,167 Jobs</span>
                </div>
                <div class="col-md-6 text-center text-md-right">
                <div class="custom-pagination ml-auto">
                <a href="#" class="prev">Prev</a>
                <div class="d-inline-block">
                <a href="#" class="active">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                </div>
                <a href="#" class="next">Next</a>
                </div>
                </div>
            </div>
        </div>
    </section>

</>  )
}

export default Testing