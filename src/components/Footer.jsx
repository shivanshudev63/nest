import React from "react";
import web from "../images/white_logo.png";
import { NavLink } from "react-router-dom";
import "./Footer.css"

const Footer=()=>{
    return(
        <>
            <footer className="bg-light text-center">
                <section id="foot-contact">


                <div className='container-fluid nav_bg'>
<div className='row'>
<div className='col-10 d-flex fscreen'>
  <div className="col-7 pb-2">
  <NavLink  to="/">
                <img src={web} className="img-fluid pt-5 " alt=""/>
                </NavLink>
                <div className=" mx-auto w-50 p-3">
                1923. LOWER BARDWAN COMPOUND, POST : LALPUR , RANCHI , JHARKHAND, INDIA 834001
                </div>
                <div className="p-1">
                Opening Hours:
Mon – Sat: 10:00 am – 7:00 pm
                </div>
                <div className="p-1">
                Phone: +91-95694-60216
                </div>
                <div className="p-1">
                Email: info@gokulnest.org

                </div>
  </div>
  <div className="col-6 pt-5">
  <div className="pt-5 f1screen"></div>
    <h1 className="pt-5 f1screen">News & Updates</h1>
    <p>The latest Egovt news, articles, and resources sent to your inbox every month.</p>
   <div className="d-flex justify-content-evenly w-50 mx-auto f2screen"> <button type="button" class="btn btn-danger p-1">Subscribe</button><form>
  <div className="form-group p-1 f2screen">
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Your Email" />
  </div>
</form>
</div>
  </div>
</div>
</div>
</div>
<div className='container-fluid nav_bg'>
<div className='row'>
<div className='col-10 mx-auto p-2'>
<h2>
<NavLink className="text-white social-links" to="/">
<i class="fa-brands fa-facebook p-2"></i>
                </NavLink>
                <NavLink className="text-white social-links" to="/">
                <i class="fa-brands fa-twitter p-2"></i>
                </NavLink>
                <NavLink className="text-white social-links" to="/">
                <i class="fa-brands fa-instagram p-2"></i>
                </NavLink>
                <NavLink className="text-white social-links" to="/">
              <i class="fa-brands fa-youtube p-2"></i>
                </NavLink>



</h2>
</div>
</div>
</div>
                </section>
                <section className="col-md-12 d-flex justify-content-center flex-wrap pt-2 py-3 cright-outer border border-secondary">
                <a href="https://personal-website-shivanshudev63.vercel.app/" alt=""><p className="col-md-12 cright">Narayanjee Educational Service Trust © 2022.</p>
                <p className="col-md-12 cright"> All Rights Reserved. Developed by: Shivanshu Dev</p></a>
                </section>
            </footer>
        </>
    )
}

export default Footer;