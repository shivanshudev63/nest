import React from "react";
import { NavLink } from "react-router-dom";

const Comment=()=>{
    return(
        <>
<div className="d-flex justify-content-center">
              <h4>Share Article</h4>
            </div>
<div>
              <h2 className="d-flex justify-content-center">
                <NavLink
                  className=" social-links"
                  to="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.gokulnest.org%2Fova_sev%2Fagro-ecological-services%2F&text=AGRO-ECOLOGICAL%20%20SERVICES"
                  style={{ color: "#00acee" }}
                >
                  <i class="fa-brands fa-twitter p-2"></i>
                </NavLink>
                <NavLink
                  className=" social-links"
                  to="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fwww.gokulnest.org%252Fova_sev%252Fagro-ecological-services%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=kn_IN"
                  style={{ color: "#3b5998" }}
                >
                  <i class="fa-brands fa-facebook p-2"></i>
                </NavLink>
                <NavLink
                  className="social-links"
                  to="https://in.pinterest.com/pin/create/button/?url=https://www.gokulnest.org/ova_sev/agro-ecological-services/"
                  style={{ color: "#c8232c" }}
                >
                  <i class="fa-brands fa-pinterest p-2"></i>
                </NavLink>
                <NavLink
                  className=" social-links"
                  to="https://www.linkedin.com/shareArticle?mini=true&url=https://www.gokulnest.org/ova_sev/agro-ecological-services/"
                  style={{ color: " #0A66C2" }}
                >
                  <i class="fa-brands fa-linkedin p-2"></i>
                </NavLink>
              </h2>
            </div>
<div className=" d-flex justify-content-center">
<form
  className="p-5 mx-5 mt-2 m-5"
  style={{ boxShadow: "1px 2px 9px black",background:"#565387" }}
>
<h4 className="d-flex justify-content-center" style={{color:"white"}}>Leave Your Comment</h4>
  <div class="form-group">
    <label for="exampleFormControlInput1"></label>
    <input
      type="email"
      class="form-control"
      id="exampleFormControlInput1"
      placeholder="Website"
    />
   <div className=" pt-4 d-flex justify-content-center"> <label for="exampleFormControlInput1"></label>
    <input
      type="email"
      class="form-control"
      id="exampleFormControlInput1"
      placeholder="Name"
      
    />
    <label for="exampleFormControlInput1"></label>
    <input
      type="email"
      class="form-control mx-1"
      id="exampleFormControlInput1"
      placeholder="Email address"
    /></div>
   
  </div>
 
  
  <div class="form-group">
    <label for="exampleFormControlTextarea1">
     
    </label>
    <textarea
      class="form-control"
      id="exampleFormControlTextarea1"
      rows="3"
      placeholder="Write your comment..."
    ></textarea>
  </div>
  <div class="form-group mt-4">
    <button type="submit" class="btn btn-primary mb-2" style={{background:"#dc3545",border:" #dc3545"}}>
      POST COMMENT
    </button>
  </div>
</form>
</div>
 </>
    )
}

export default Comment;