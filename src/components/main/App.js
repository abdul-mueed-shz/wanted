import "./App.css";
import profilePicture from "../../assets/images/user/profilePicture.jpg";
import InfoCard from "../info/InfoCard";
import { DATA } from "../../data/details";
import RatingCard from "../rating/RatingCard";
import CopyRight from "../copyright/CopyRight";
import ContactForm from "../contact/ContactForm";

function App() {
  const {
    ABOUT,
    APP_TITLE,
    NAME,
    PROFESSION,
    TAGLINE,
    EXPERIENCE,
    SERVICES,
    TESTIMONIALS,
    SKILLS,
  } = DATA;
  return (
    <div className="App-background">
      <div className="App-header">
        <h1 className="anton-font text-241px opacity-100">{APP_TITLE}</h1>
      </div>
      <div>
        <div className="flex justify-center pt-16 border-top__2pxDashed ">
          <div className="relative">
            <img
              src={profilePicture}
              alt=""
              className="tilt-left"
              style={{ maxWidth: "340px" }}
            ></img>
            <div className="text-2xl font-medium anton-font p-2 max-w-210px border-radius__3pxSolidAppGray rounded-xl absolute -top-1.25rem -right-1.875rem">
              {TAGLINE}
            </div>
          </div>
        </div>
        <div className="px-7 py-8 my-7 App-header bg-color__hex4d4d4d text-color__hex4d4d4d flex justify-center tilt-right opacity-100">
          <div className="text-center">
            <div className="anton-font text-6xl opacity-100">{NAME}</div>
            <div className="text-lg opacity-100">{PROFESSION}</div>
          </div>
        </div>
        <InfoCard title={"About"} titleDetails={ABOUT} />
        <InfoCard title={"Experience"} infoList={EXPERIENCE} />
        <InfoCard title={"Services"} titleDetails={SERVICES} />
        <RatingCard title={"Stack"} skillsList={SKILLS} />
        <InfoCard title={"Witnesses Statements"} infoList={TESTIMONIALS} />
        <ContactForm />
        <CopyRight copyRightDate="Copyright 2023" creator="Abdul Mueed" />
      </div>
    </div>
  );
}

export default App;
