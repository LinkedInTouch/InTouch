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
      getAccessToken(code);
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

  
  return !code ? (
    <div id="signup">
      <img
        onClick={linkedInLogin}
        src={linkedin}
        alt="Log in with Linked In"
        style={{ maxWidth: "180px", cursor: "pointer" }}
     />
    </div>
    
  )
  :
  (
    <div>
      <Navbar></Navbar>
      <WelcomeHeader></WelcomeHeader>

    </div>
  )
}
export default LinkedInPage;
