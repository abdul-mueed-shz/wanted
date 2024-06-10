import "./App.css";
import profilePicture from "../../assets/images/user/profilePicture.jpg";
function App() {
  return (
    <div className="App-background">
      <div className="App-header">
        <h1 className="anton-font text-241px">WANTED</h1>
      </div>
      <div>
        <div
          className="flex justify-center pt-16"
          style={{ borderTop: "2px dashed" }}
        >
          <div className="relative">
            <img
              src={profilePicture}
              alt=""
              style={{ maxWidth: "340px" }}
            ></img>
            <div className="text-2xl font-medium anton-font p-2 max-w-210px border-radius__3pxSolidAppGray rounded-xl absolute -top-1.25rem -right-1.875rem">
              Available for work
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
