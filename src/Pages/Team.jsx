import React from "react";
import pic1 from '../images/team-image-1-646x680.jpg';
import pic2 from '../images/team-image-2-646x680.jpg';
import pic3 from '../images/team-image-3-646x680.jpg';
import pic4 from '../images/team-image-4-646x680.jpg';

const Team=()=>{

    const team_card=[
        {
            image:pic1,
            name:"John Doe",
            designation:"CEO"
        },
        {
            image:pic2,
            name:"Jane Smith",
            designation:"Customer Support"
        },
        {
            image:pic3,
            name:"Kate Johnson",
            designation:"Customer Support"
        },
        {
            image:pic4,
            name:"Mark Green",
            designation:"Customer Support"
        },
    ];

    return (
        <>

    <section class="section section-bg" id="call-to-action" style={{backgroundImage: "url(assets/images/banner-image-1-1920x500.jpg)"}}>
        <div class="container">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <div class="cta-content">
                        <br/>
                        <br/>
                        <h2>Meet our <em>Team</em></h2>
                        <p>Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section" id="trainers">
        <div class="container">
            <br/>
            <br/>
            <div class="row">
            {
                team_card.map((item,index)=>{
                    return (
                        <>
                          <div class="col-md-3 col-sm-6" key={index}>
                    <div class="trainer-item">
                        <div class="image-thumb">
                            <img src={item.image} alt=""/>
                        </div>
                        <div class="down-content">
                            <span>{item.designation}</span>
                            <h4>{item.name}</h4>
                            <p>Vestibulum id est eu felis vulputate hendrerit. Suspendisse dapibus turpis in dui pulvinar imperdiet. Nunc consectetur.</p>
                            <ul class="social-icons">
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i class="fa fa-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                        </>
                    )
                })
            }

              
            </div>
        </div>
    </section>
        </>
    )
}

export default Team