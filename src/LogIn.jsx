import axios from "axios";
import React, { useEffect } from "react";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import Navbar from "./Navbar";
import WelcomeHeader from "./WelcomeHeader";

// `${window.location.origin}/linkedin`
function LinkedInPage() {
  const { linkedInLogin } = useLinkedIn({
    clientId: "77l2yl9ia652i4",
    redirectUri: "http://localhost:8080/linkedin",
    onSuccess: (code) => {
      console.log('code',code);
      setCode(code);
      setErrorMessage("");
    },
    scope: "r_emailaddress r_liteprofile",
    onError: (error) => {
      console.log(error);
      setCode("");
      setErrorMessage(error.errorMessage);
    },
  });
  const [code, setCode] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const linkedin = "https://i.stack.imgur.com/mKpeu.png"
  const inTouch = "https://i.ibb.co/55vQPBN/InTouch.jpg"

  
  return !code ? (
    <div id="signup">
      <img
        src={inTouch}
        alt="In Touch Logo"
        style={{ maxWidth: "180px", border: ".5px solid gray", borderRadius: "2px"}}
      />
      <img
        onClick={linkedInLogin}
        src={linkedin}
        alt="Log in with Linked In"
        style={{ maxWidth: "180px", cursor: "pointer",border: ".5px solid gray",borderRadius: "2px" }}
     />
    </div>
    
  )
  :
  (
    <div>
      <Navbar></Navbar>
      <WelcomeHeader></WelcomeHeader>
      <h1>Welcome to InTouch!</h1>
    </div>
  )
}
export default LinkedInPage;
