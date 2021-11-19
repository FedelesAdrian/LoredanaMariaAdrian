import React from "react";
import Cards from "../Cards/Cards";
import corporateHome from "../Images/corporateHome.png";
import donutsHome from "../Images/donutsHome.png";
import gelatoHome from "../Images/gelatoHome.png";

const Home = () => {
  const promoCards = [
    {
      image: gelatoHome,
      title: "ICE CREAM & GELATO",
      buttonName: "Explore options",
    },
    {
      image: donutsHome,
      title: "DELICIOUS DONUTS",
      buttonName: "Explore options",
    },
    {
      image: corporateHome,
      title: "FAMILY / CORPORATE",
      buttonName: "Explore options",
    },
  ];

  return (
    <div className="cards d-flex justify-content-between">
      {promoCards.map((detail) => {
        return (
          <Cards
            title={detail.title}
            image={detail.image}
            btnName={detail.buttonName}
          />
        );
      })}
    </div>
  );
};

export default Home;
