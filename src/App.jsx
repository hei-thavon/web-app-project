import "./App.css";
import profileImg from "./assets/profile.png";

function App() {
  return (
    <div className="menu">

      <div className="container0">
       <button className="home">H.T</button>
       <button className="button1">TEST1</button>
       <button className="button2">TEST2</button>
       <button className="button3">TEST3</button>
      </div>
      <div className="container1">
       <p>This is my container content 1.</p>
       <p>This is my container content 2.</p>
       <p>This is my container content 3.</p>
      </div>
      <div className="container2">
       <img src={profileImg} alt="Profile" className="profile-image" />
      </div>
      <div className="container3">
       <p>This is my container content 1.</p>
       <p>This is my container content 2.</p>
       <p>This is my container content 3.</p>
      </div>

    </div>
    
  );
}
export default App;
