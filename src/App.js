import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { connect } from "react-redux"
import HomeScreen from "./components/HomeScreen";
import { decrement, increment } from "./Redux/Counter/counter-actions";
import {auth} from "./Firebase/firebase.config"
import { redirect, useNavigate } from "react-router-dom";
import { userLogin, userLogOut } from "./Redux/User/user-actions";

function App({userLogin,userLogOut,userData}) {
  const navigate = useNavigate();

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {

    if (user) {
      userLogin({uid:user.uid,email:user.email})
      console.log("user from app",user)
    } else {
      console.log("user signed out")
      navigate("/login")
    }
  });

  return unsubscribe
  },[])

  return (
    <div>
      <HomeScreen/>
    </div>
  );
}

const mapStateToProps = state => ({
  userData:state.user.user
})

const mapDispatchToProps=dispatch=>({
  userLogin:(data)=>dispatch(userLogin(data)),
  userLogOut:()=>dispatch(userLogOut())
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
// export default App;
