import { connect } from "react-redux"
import HomeScreen from "./components/HomeScreen";
import { decrement, increment } from "./Redux/Counter/counter-actions";
function App() {
  return (
    <div>
      <HomeScreen/>
    </div>
  );
}

// const mapStateToProps = state => ({
//   counter:state.counter.counter
// })

// const mapDispatchToProps=dispatch=>({
//   increment:()=>dispatch(increment()),
//   decrement:()=>dispatch(decrement())
// })


// export default connect(mapStateToProps,mapDispatchToProps)(App);
export default App;
