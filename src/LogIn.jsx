import axios from "axios";
import React from "react";
import { useLinkedIn } from "react-linkedin-login-oauth2";

// `${window.location.origin}/linkedin`
function LinkedInPage() {
  const { linkedInLogin } = useLinkedIn({
    clientId: "77l2yl9ia652i4",
    redirectUri: "http://localhost:8080/linkedin",
    onSuccess: (code) => {
      console.log(code);
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
  const linkedin = "https://i.stack.imgur.com/mKpeu.png"
  const [code, setCode] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  
  return !code ? (
    <div>
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
        {code}
    </div>
  )
}
export default LinkedInPage;