import React from "react";
import Template from "../../assets";
import HomeSectionInfo from "../../components/HomeSectionInfo";
import { HomeSectionInfoLeft } from "../../components/HomeSectionInfo/HomeSectionInfo";

const HomePage = () => {
  const textsInfo = [
    {
      title: "About Dead By Daylight",
      imgSrc: "images/dbd-first-gif.gif",
      p1: "Dead by Daylight is an asymmetrical multiplayer horror game where one player takes on the role of a brutal Killer and the other four play as Survivors.",
      p2: "As a Killer, your goal is to sacrifice as many Survivors as possible. As a Survivor, your goal is to escape and avoid being caught and killed.",
    },
    {
      title: "EndGame Collapse",
      imgSrc: "images/endgame-collapse.jpg",
      p1: "The two-minute Endgame Collapse is the last phase of a trial and signals the Survivors of their last chance to escape. When time runs out, any Survivor remaining on the map—even those hiding in lockers—fall into the clutches of The Entity and count as regular sacrifices for The Killer.",
    },
    {
      title: "BloodPoints and The BloodWeb",
      code: "bloodpoint-web",
      imgSrc: "images/bloodpoints.jpg",
      imgSrc2: "images/bloodweb.jpg",
      p1: "Scoring is vital for character progression. Both Killers and Survivors rely on Bloodpoints to unlock items and perks via the Bloodweb. Bloodpoints are awarded based on many different actions during a Trial and are divided into 4 categories for Survivors and 4 categories for Killers.",
      p2: "Bloodpoints are the currency of the Bloodweb, a procedurally generated progression system. By unlocking the interconnected nodes of the Bloodweb, players acquire Items, Offerings, Perks, Add-Ons, and other content. The Entity also resides within the Bloodweb, eating up nodes at random. The player must be smart and strategic if they want to avoid losing valuable content to The Entity.",
    },
    {
      title: "Ranks",
      code: "ranks",
      imgSrc: "images/ranks-killer.gif",
      imgSrc2: "images/ranks-survival.gif",
      p1: "The Rank is a personal score used for competitive matches, matchmaking, and ranking on leaderboards. There are 20 Ranks for each role, with Rank 1 being the best. Players go up and down the ladder based on their performance in various aspects of a Trial.",
      p2: "A Season lasts for one month. As a new Season begins, the Ranks reset.",
    },
  ]
  
  return (
    <Template>
      <HomeSectionInfo
        data={textsInfo[0]}
      />
      <span></span>
      <HomeSectionInfoLeft
        data={textsInfo[1]}
        sizeImg="left"
      />
      <HomeSectionInfoLeft
        data={textsInfo[2]}
        sizeImg="left"
      />
      <HomeSectionInfoLeft
        data={textsInfo[3]}
        sizeImg="left"
      />
    </Template>
  )
}

export default HomePage
