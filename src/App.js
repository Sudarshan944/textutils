import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// changes in html to jsx
// class to className
// tabindex to tabIndex
// for to htmlFor
// whenever we need to use javascript keep it inside curly braces
//return single element <> </> -- single component
// we can install node modules even if it is lost using node install command
// Because while delivering we doesn't include node modules file
function App() {
  // we have to return only one element
  return (
    // Compiled using babel -- babel compiles jsx
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar /> default will take care*/}
      <Navbar title="TextUtils" /> {/*-- One rgument that is required*/}
      <div className="container my-3">
        <TextForm heading="Enter the text below to analyze" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
