import React from 'react';
import { HomeObjectivesSurvivor, HomeObjectivesKiller} from './HomeObjectives.js';

const HomeInfo = () => {
    return (
        <>
        <div className='background-color'>
            <div className='page'>
                <img className='img-left' src='https://i.pinimg.com/474x/4b/3a/19/4b3a19bf2a3c3b0150361b934eebd294.jpg' alt='background'/>
                <div className='home-page'>
                        
                    <section className='about'>
                        <h1 className='section-title'>ABOUT DEAD BY DAYLIGHT</h1>
                        <div>
                            <p>Dead by Daylight is an asymmetrical multiplayer horror game where one player takes on the role of a brutal Killer and the other four play as Survivors.</p> 
                            <p>As a Killer, your goal is to sacrifice as many Survivors as possible. As a Survivor, your goal is to escape and avoid being caught and killed.</p>
                        </div>
                            <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/381210/extras/DeadbyDaylight_anime_Intro_Steam.jpg?t=1629212673' alt='DBD gif'/>
                    </section>
                    
                    <hr/>
                
                    <HomeObjectivesSurvivor/>
                    <hr/>
                    <HomeObjectivesKiller/>
                    <hr/>

                    <section className='center'>
                        <h1 className='section-title'>ENDGAME COLLAPSE</h1>
                        <div className='section-home'>
                            <img src='https://deadbydaylight.com/images/game/endgame.png' alt='EndGame Collapse'/>
                            <p>The two-minute Endgame Collapse is the last phase of a trial and signals the Survivors of their last chance to escape. When time runs out, any Survivor remaining on the map—even those hiding in lockers—fall into the clutches of The Entity and count as regular sacrifices for The Killer.</p>
                        </div>
                    </section>

                    <hr/>

                    <section className='center'>
                        <h1 className='section-title'>BLOODPOINTS AND THE BLOODWEB</h1>
                        <div className='section-home'>
                            <img src='https://deadbydaylight.com/images/game/bloodweb.png' alt='BloodPoints'/>
                            <div>
                                <p>Scoring is vital for character progression. Both Killers and Survivors rely on Bloodpoints to unlock items and perks via the Bloodweb. Bloodpoints are awarded based on many different actions during a Trial and are divided into 4 categories for Survivors and 4 categories for Killers.</p>
                                <p>Bloodpoints are the currency of the Bloodweb, a procedurally generated progression system. By unlocking the interconnected nodes of the Bloodweb, players acquire Items, Offerings, Perks, Add-Ons, and other content. The Entity also resides within the Bloodweb, eating up nodes at random. The player must be smart and strategic if they want to avoid losing valuable content to The Entity.</p>
                            </div>
                        </div>
                    </section>
                    
                    <hr/>
                    
                    <section className='center'>
                        <h1 className='section-title'>RANKS</h1>
                        <div className='section-container-rank'>
                            <div className='container-rank'>    
                                <div className='section-rank'>
                                    <h2>KILLER</h2>
                                    <img src='https://deadbydaylight.com/images/game/ranks_killer.gif' alt='Killer Gif'/>
                                </div>
                                <div className='section-rank'>
                                    <h2>SURVIVOR</h2>
                                    <img src='https://deadbydaylight.com/images/game/ranks_survivor.gif' alt='Survivor Gif'/>
                                </div>
                            </div>
                            <div >
                                <p>The Rank is a personal score used for competitive matches, matchmaking, and ranking on leaderboards. There are 20 Ranks for each role, with Rank 1 being the best. Players go up and down the ladder based on their performance in various aspects of a Trial.</p>
                                <p>A Season lasts for one month. As a new Season begins, the Ranks reset.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        </>
    )
}

export default HomeInfo