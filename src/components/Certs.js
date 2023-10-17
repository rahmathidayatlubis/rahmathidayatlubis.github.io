import CertCard from "./CertCard.js";

import hr from "../assets/curve-hr.svg";
import dicodingPw from "../assets/certs/pw-dasar.jpg";
import dicodingJs from "../assets/certs/js-dasar.png";
import dicodingFe from "../assets/certs/fe-dasar.jpg";

// import

export default function Certs() {
  return (
    <div id="certs" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Certifications</h1>
      <p className="font-light text-gray-400">
        Here are some of my Certifications
      </p>

      {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
        <CertCard
          name="Dasar Pemprograman Javascript"
          img={dicodingJs}
          issued="Dicodig Indonesia"
          date="Mei 2021"
        />

        <CertCard
          name="Dasar Pemprograman Web"
          img={dicodingPw}
          issued="Dicodig Indonesia"
          date="Sep 2023"
        />

        <CertCard
          name="Dasar Front-End Web"
          img={dicodingFe}
          issued="Dicodig Indonesia"
          date="Okt 2023"
        />
      </div>
      <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
    </div>
  );
}
