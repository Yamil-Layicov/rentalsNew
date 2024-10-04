import { BsDot } from "react-icons/bs";
import "./buildings.scss";
import { Link } from "react-router-dom";
import React from "react";
import { useBuildings } from "./useBuildings";
  
const Buildings = () => {
  const { buildings } = useBuildings();
  const buildingData = buildings?.data[0];
  

  return (
    <div className="buildings">
      <h1>{buildingData?.address}</h1>
      <Link to="/xerite" className="buildingsBoxes">
        <div className="buildingBox">
          <div className="headerSection">
            <img src="/images/build.png" alt="Building" />
            <p>Connect</p>
          </div>
          <div className="footerSection">
            <div className="titleBox">
              <div className="dotBox">
                <BsDot /> <span>Mərtəbə sayı: 4</span>
              </div>
              <div className="dotBox">
                <BsDot /> <span>Otaq sayı: {buildingData?.number_of_rooms}</span>
              </div>
              <div className="dotBox">
                <BsDot /> <span>Boş otaq sayı: {buildingData?.number_of_empty_rooms}</span>
              </div>
              <div className="dotBox">
                <BsDot /> <span>İcarədə olan otaqların sayı: {buildingData?.number_of_rent_rooms}</span>
              </div>
              <div className="dotBox">
                <BsDot /> <span>Otaqların ümumi sahəsi: {buildingData?.area_of_rooms}</span>
              </div>
              <div className="dotBox">
                <BsDot /> <span>İcarədə olan otaqların sahəsi: {buildingData?.area_of_rent_rooms}</span>
              </div>
              <div className="dotBox">
                <BsDot /> <span>Boş otaların sahəsi: {buildingData?.area_of_empty_rooms}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Buildings;
