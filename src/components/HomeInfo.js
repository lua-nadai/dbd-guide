import React from 'react';
import { HomeObjectivesSurvivor, HomeObjectivesKiller} from './HomeObjectives.js';

const HomeInfo = () => {
    return (
        <>
            <div className='header-router'>
                <section>
                    <h1>ABOUT DEAD BY DAYLIGHT</h1>
                    <p>Dead by Daylight is an asymmetrical multiplayer horror game where one player takes on the role of a brutal Killer and the other four play as Survivors.</p> 
                    <p>As a Killer, your goal is to sacrifice as many Survivors as possible. As a Survivor, your goal is to escape and avoid being caught and killed.</p>
                </section>

                <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/381210/extras/DeadbyDaylight_anime_Intro_Steam.jpg?t=1629212673' alt='DBD gif'/>
            
                <HomeObjectivesSurvivor/>
                <HomeObjectivesKiller/>

                <section>
                    <h1>ENDGAME COLLAPSE</h1>
                    <p>The two-minute Endgame Collapse is the last phase of a trial and signals the Survivors of their last chance to escape. When time runs out, any Survivor remaining on the map—even those hiding in lockers—fall into the clutches of The Entity and count as regular sacrifices for The Killer.</p>
                </section>

                <section>
                    <h1>BLOODPOINTS AND THE BLOODWEB</h1>
                    <p>Scoring is vital for character progression. Both Killers and Survivors rely on Bloodpoints to unlock items and perks via the Bloodweb. Bloodpoints are awarded based on many different actions during a Trial and are divided into 4 categories for Survivors and 4 categories for Killers.</p>
                    <p>Bloodpoints are the currency of the Bloodweb, a procedurally generated progression system. By unlocking the interconnected nodes of the Bloodweb, players acquire Items, Offerings, Perks, Add-Ons, and other content. The Entity also resides within the Bloodweb, eating up nodes at random. The player must be smart and strategic if they want to avoid losing valuable content to The Entity.</p>
                </section>
                
                <div>
                    <h2>KILLER</h2>
                    <img src='https://deadbydaylight.com/images/game/ranks_killer.gif' alt='Killer Gif'/>
                    <h2>SURVIVOR</h2>
                    <img src='https://deadbydaylight.com/images/game/ranks_survivor.gif' alt='Survivor Gif'/>
                </div>

                <section>
                    <h1>RANKS</h1>
                    <p>The Rank is a personal score used for competitive matches, matchmaking, and ranking on leaderboards. There are 20 Ranks for each role, with Rank 1 being the best. Players go up and down the ladder based on their performance in various aspects of a Trial.</p>
                    <p>A Season lasts for one month. As a new Season begins, the Ranks reset.</p>
                </section>
            
            </div>
        </>
    )
}

export default HomeInfo