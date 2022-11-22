import image1 from "../image1.jpg";
function Card(){
    return(
   <div className="card2">
   <h2>Password set successfully</h2>
   <p> Your Password has been set successfully <br/>
   You can now Sign in with your new password</p>
   <img  className = "img1" src = {image1} />
   </div>
    );
}
export default Card