import React from 'react'
import Cars from '../Components/Cars'
import { Link } from 'react-router-dom'
import Testing from '../Components/Testing'

const Home = (props) => {
  return (
    <>
     <div class="main-banner" id="top">
        <video autoplay muted loop id="bg-video">
            <source src="assets/images/video.mp4" type="video/mp4" />
        </video>

        <div class="video-overlay header-text">
            <div class="caption">
                <h6>Welcome {props.name} to our Job Portal</h6>
                <h2>Find the perfect <em>Job</em></h2>
                <div class="main-button">
                    <form method="post" class="search-jobs-form">
                        <div class="row mb-5">
                            <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                                <input type="text" class="form-control form-control-lg"
                                    placeholder="Job title, Company..."/>
                            </div>
                            <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                                <div class="dropdown bootstrap-select" style={{width: "100%"}}>
                                    <select class="form-control" data-style="btn-white btn-lg" data-width="100%"
                                        data-live-search="true" title="Select Region" tabindex="-98">
                                        <option>Select Region</option>
                                        <option>Anywhere</option>
                                        <option>San Francisco</option>
                                        <option>Palo Alto</option>
                                        <option>New York</option>
                                        <option>Manhattan</option>
                                        <option>Ontario</option>
                                        <option>Toronto</option>
                                        <option>Kansas</option>
                                        <option>Mountain View</option>
                                    </select>

                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                                <div class="dropdown bootstrap-select" style={{width: "100%"}}>
                                    <select class="form-control" data-style="btn-white btn-lg" data-width="100%"
                                        data-live-search="true" title="Select Job Type" tabindex="-98">
                                        <option>Select Job Type</option>
                                        <option>Part Time</option>
                                        <option>Full Time</option>
                                    </select>

                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                                <button type="submit"
                                    class="btn btn-primary btn-lg btn-block text-white btn-search"><span
                                        class=" mr-2"><i class="fa fa-search" aria-hidden="true"></i></span>Search Job</button>
                            </div>
                        </div>

                    </form>
                    {/* <!-- <a href="contact.html">Contact Us</a> --> */}
                </div>
            </div>
        </div>
    </div>
    {/* <Cars/> */}
    <Testing/>

    <section class="section section-bg" id="schedule"
        style={{backgroundImage: "url(assets/images/about-fullscreen-1-1920x700.jpg)"}}>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="section-heading dark-bg">
                        <h2>Read <em>About Us</em></h2>
                        <img src="assets/images/line-dec.png" alt=""/>
                        <p>Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor,
                            ultricies fermentum massa consequat eu.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="cta-content text-center">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore deleniti voluptas enim!
                            Provident consectetur id earum ducimus facilis, aspernatur hic, alias, harum rerum velit
                            voluptas, voluptate enim! Eos, sunt, quidem.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto nulla quo cum officia
                            laboriosam. Amet tempore, aliquid quia eius commodi, doloremque omnis delectus laudantium
                            dolor reiciendis non nulla! Doloremque maxime quo eum in culpa mollitia similique eius
                            doloribus voluptatem facilis! Voluptatibus, eligendi, illum. Distinctio, non!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section" id="our-classes">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="section-heading">
                        <h2>Read our <em>Blog</em></h2>
                        <img src="assets/images/line-dec.png" alt=""/>
                        <p>Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor,
                            ultricies fermentum massa consequat eu.</p>
                    </div>
                </div>
            </div>
            <div class="row" id="tabs">
                <div class="col-lg-4">
                    <ul>
                        <li><a href='#tabs-1'>Lorem ipsum dolor sit amet, consectetur adipisicing.</a></li>
                        <li><a href='#tabs-2'>Aspernatur excepturi magni, placeat rerum nobis magnam libero! Soluta.</a>
                        </li>
                        <li><a href='#tabs-3'>Sunt hic recusandae vitae explicabo quidem laudantium corrupti non
                                adipisci nihil.</a></li>
                        <div class="main-rounded-button"><Link to="/Blog">Read More</Link></div>
                    </ul>
                </div>
                <div class="col-lg-8">
                    <section class='tabs-content'>
                        <article id='tabs-1'>
                            <img src="assets/images/blog-image-1-940x460.jpg" alt=""/>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing.</h4>

                            <p><i class="fa fa-user"></i> John Doe &nbsp;|&nbsp; <i class="fa fa-calendar"></i>
                                27.07.2020 10:10 &nbsp;|&nbsp; <i class="fa fa-comments"></i> 15 comments</p>

                            <p>Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend
                                hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem
                                tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut,
                                accumsan diam.</p>
                            <div class="main-button">
                                <Link to="/Blog_details">Continue Reading</Link>
                            </div>
                        </article>
                        {/* <article id='tabs-2'>
                            <img src="assets/images/blog-image-2-940x460.jpg" alt=""/>
                            <h4>Aspernatur excepturi magni, placeat rerum nobis magnam libero! Soluta.</h4>
                            <p><i class="fa fa-user"></i> John Doe &nbsp;|&nbsp; <i class="fa fa-calendar"></i>
                                27.07.2020 10:10 &nbsp;|&nbsp; <i class="fa fa-comments"></i> 15 comments</p>
                            <p>Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac pulvinar quam tortor a
                                velit. Praesent ultrices erat ante, in ultricies augue ultricies faucibus. Nam tellus
                                nibh, ullamcorper at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci varius
                                natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                            <div class="main-button">
                                <a href="blog-details.html">Continue Reading</a>
                            </div>
                        </article>
                        <article id='tabs-3'>
                            <img src="assets/images/blog-image-3-940x460.jpg" alt=""/>
                            <h4>Sunt hic recusandae vitae explicabo quidem laudantium corrupti non adipisci nihil.</h4>
                            <p><i class="fa fa-user"></i> John Doe &nbsp;|&nbsp; <i class="fa fa-calendar"></i>
                                27.07.2020 10:10 &nbsp;|&nbsp; <i class="fa fa-comments"></i> 15 comments</p>
                            <p>Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id auctor neque posuere sit
                                amet. Aliquam pharetra, augue vel cursus porta, nisi tortor vulputate sapien, id
                                scelerisque felis magna id felis. Proin neque metus, pellentesque pharetra semper vel,
                                accumsan a neque.</p>
                            <div class="main-button">
                                <a href="blog-details.html">Continue Reading</a>
                            </div>
                        </article> */}
                    </section>
                </div>
            </div>
        </div>
    </section>

    <section class="section section-bg" id="call-to-action"
        style={{backgroundImage: "url(assets/images/banner-image-1-1920x500.jpg)"}}>
        <div class="container">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <div class="cta-content">
                        <h2>Send us a <em>message</em></h2>
                        <p>Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula, sit amet dapibus
                            odio augue eget libero. Morbi tempus mauris a nisi luctus imperdiet.</p>
                        <div class="main-button">
                            <Link to="/Contact">Contact us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section" id="features">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="section-heading">
                        <h2>Read our <em>Testimonials</em></h2>
                        <img src="assets/images/line-dec.png" alt="waves"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem incidunt alias minima
                            tenetur nemo necessitatibus?</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <ul class="features-items">
                        <li class="feature-item">
                            <div class="left-icon">
                                <img src="assets/images/features-first-icon.png" alt="First One"/>
                            </div>
                            <div class="right-content">
                                <h4>John Doe</h4>
                                <p><em>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta numquam maxime
                                        voluptatibus, impedit sed! Necessitatibus repellendus sed deleniti id et!"</em>
                                </p>
                            </div>
                        </li>
                        <li class="feature-item">
                            <div class="left-icon">
                                <img src="assets/images/features-first-icon.png" alt="second one"/>
                            </div>
                            <div class="right-content">
                                <h4>John Doe</h4>
                                <p><em>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta numquam maxime
                                        voluptatibus, impedit sed! Necessitatibus repellendus sed deleniti id et!"</em>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-6">
                    <ul class="features-items">
                        <li class="feature-item">
                            <div class="left-icon">
                                <img src="assets/images/features-first-icon.png" alt="fourth muscle"/>
                            </div>
                            <div class="right-content">
                                <h4>John Doe</h4>
                                <p><em>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta numquam maxime
                                        voluptatibus, impedit sed! Necessitatibus repellendus sed deleniti id et!"</em>
                                </p>
                            </div>
                        </li>
                        <li class="feature-item">
                            <div class="left-icon">
                                <img src="assets/images/features-first-icon.png" alt="training fifth"/>
                            </div>
                            <div class="right-content">
                                <h4>John Doe</h4>
                                <p><em>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta numquam maxime
                                        voluptatibus, impedit sed! Necessitatibus repellendus sed deleniti id et!"</em>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <br/>

            <div class="main-button text-center">
                <a href="testimonials.html">Read More</a>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Home