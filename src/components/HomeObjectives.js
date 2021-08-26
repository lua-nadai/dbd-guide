import React from 'react';

export const HomeObjectivesSurvivor = () => {
    return(
        <section className='center'>
            <div className='objective-title center'>
                <h2>OBJECTIVES</h2>
                <h1>AS A SURVIVOR</h1>
            </div>
            
            <div className='objective-container'>

                <div className='objective-box center'>
                    <h3>HOW TO WIN</h3>
                    <p>As a Survivor, your main objective is to escape the map and live another day. To achieve this, you must repair 5 Generators to power the 2 Exit Gates while avoiding the Killer.</p>
                </div>

                <div className='objective-box center'>
                    <h3>STEALTH</h3>
                    <p>Survivors have no means to harm the Killer. To avoid being caught, basic strategies can be used such as crouching behind obstacles, hiding in tall grass, dark corners, or in lockers. The Survivors must be careful when performing fast actions or making loud noises, as these may draw the attention of the Killer.</p>
                </div>

                <div className='objective-box center'>
                    <h3>SPOTTING THE KILLER</h3>
                    <p>When the Killer is nearby, a heartbeat sound becomes audible. This sound, called the Terror Radius, becomes more intense the closer the Killer is to a Survivor. Survivors can see a red conical light that follows the Killer around. This Red Stain shows the direction in which the Killer is looking.</p>
                </div>

                <div className='objective-box center'>
                    <h3>ALTRUISTIC ACTIONS</h3>
                    <p>Survivors can rescue each other from Hooks and prevent the Sacrifice from being fully completed. Survivors can also attempt to blind or stun the Killer, which will also make them drop the Survivor they’re carrying. Every Survivor can heal others from the injured or dying state, whether they have a First Aid Kit or not.</p>
                </div>

                <div className='objective-box center'>
                    <h3>GENERATORS</h3>
                    <p>The first step towards escaping the Trial is to repair the 5 Generators spread out across the environment. Repairing takes time and makes noise, which can attract the Killer. The Killer can also see the exact position of all the Generators. Therefore, Survivors need to be on their guard for a patrolling Killer and plan escape routes before starting to work on one. Like many other Survivor interactions, repairing a Generator can trigger Skill Checks.</p>
                </div>

                <div className='objective-box center'>
                    <h3>SKILL CHECKS</h3>
                    <p>A Skill Check is a time-based reflex action that requires Survivors to tap a button at the right time or suffer the consequences. Failing a Skill Check warns the Killer with a loud noise notification and regresses the current action's progression. An audio cue can be heard right before the Skill Check appears to help the Survivor anticipate the action.</p>
                </div>

                <div className='objective-box center'>
                    <h3>ESCAPING</h3>
                    <p>When the Survivors have repaired 5 Generators, the Exit Gates power up. Once opened, the Gate allows the Survivors to run beyond and escape the trial. Survivors choose when to exit the map. They can stay around and save other Survivors that did not make it but must do so before the Endgame Collapse.</p>
                </div>
            </div>
        </section>
    ) 
}

export const HomeObjectivesKiller = () => {
    return (
        <section className='center'>

            <div className='objective-title center'>
                <h2>OBJECTIVES</h2>
                <h1>AS A KILLER</h1>
            </div>

            <div className='objective-container'>

                <div className='objective-box center'>
                    <h3>HOW TO WIN</h3>
                    <p>The Killer's main objective is to please The Entity by sacrificing Survivors on Hooks found in the environment. The Killer uses their unique powers and abilities to get as many sacrifices as they can and prevent the Survivors from fleeing.</p>
                </div>

                <div className='objective-box center'>
                    <h3>HUNTING</h3>
                    <p>
                        Killers possess heightened senses that help them hunt Survivors:<br/>
                        <br/>
                        • The Killer can follow temporary Scratch Marks left behind running Survivors.<br/>
                        • The Killer can track Bloodstains left behind by injured or dying Survivors.<br/>
                        • The Killer receives notifications of Survivor location when they make loud noises.<br/>
                    </p>
                </div>

                <div className='objective-box center'>
                    <h3>CHASING SURVIVORS</h3>
                    <p>In a straight line, Killers are faster, but Survivors have many tricks to put objects and distance between themselves and the Killer, like window and pallet vaults. The Killer's goal during a chase is to get into attack range in order to land a devastating hit on the Survivor.</p>
                </div>

                <div className='objective-box center'>
                    <h3>ATTACKING</h3>
                    <p>All Killers can perform two types of basic attacks: a quick short-ranged attack and a long reach lunge attack. Whether they hit or miss, attacks always trigger a cooldown. Hitting a Survivor twice will down them, allowing the Killer to pick up and carry them to a Sacrificial Hook.</p>
                </div>

                <div className='objective-box center'>
                    <h3>TRANSPORTING SURVIVORS</h3>
                    <p>The Killer has limited time to transport Survivors to a Hook, as they can eventually wiggle free, stunning the Killer in the process. The Killer must also watch out for other Survivors, as some actions can make the Killer drop their precious cargo.</p>
                </div>

                <div className='objective-box center'>
                    <h3>SACRIFICE</h3>
                    <p>
                        Phase 1 - The Summon: Hooked Survivors can either wait to be rescued or attempt to free themselves, speeding up The Entity summoning if they fail.<br/>
                        <br/>
                        Phase 2 - The Struggle: The Survivors must fight The Entity to stay alive. They cannot attempt to free themselves anymore but rescue from others is still possible.<br/>
                        <br />
                        Phase 3 - The Entity devours the hooked Survivor, ending the sacrifice sequence.<br/>
                    </p>  
                </div>
            </div>
        </section>
    )
}