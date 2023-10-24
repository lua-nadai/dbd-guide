export const HOME_PATH = "/new-home"
export const SURVIVORS_PATH = "/new-survivors"
export const KILLERS_PATH = "/new-killers"
export const PERKS_PATH = "/new-perks"

// Rotas Antigas
// export const HOME_PATH = "/"
// export const SURVIVORS_PATH = "/survivors"
// export const KILLERS_PATH = "/killers"
// export const PERKS_PATH = "/perks"

export const textHomeInfo = [
  {
    title: "About Dead By Daylight",
    imgSrc: "images/dbd-first-gif.gif",
    imgSize: "large",
    p1: "Dead by Daylight is an asymmetrical multiplayer horror game where one player takes on the role of a brutal Killer and the other four play as Survivors.",
    p2: "As a Killer, your goal is to sacrifice as many Survivors as possible. As a Survivor, your goal is to escape and avoid being caught and killed.",
  },
  {
    title: "EndGame Collapse",
    imgSrc: "images/endgame-collapse.jpg",
    imgSize: "medium",
    p1: "The two-minute Endgame Collapse is the last phase of a trial and signals the Survivors of their last chance to escape. When time runs out, any Survivor remaining on the map—even those hiding in lockers—fall into the clutches of The Entity and count as regular sacrifices for The Killer.",
  },
  {
    title: "BloodPoints and The BloodWeb",
    imgSrc: "images/bloodpoints.jpg",
    imgSrc2: "images/bloodweb.jpg",
    imgSize: "medium",
    p1: "Scoring is vital for character progression. Both Killers and Survivors rely on Bloodpoints to unlock items and perks via the Bloodweb. Bloodpoints are awarded based on many different actions during a Trial and are divided into 4 categories for Survivors and 4 categories for Killers.",
    p2: "Bloodpoints are the currency of the Bloodweb, a procedurally generated progression system. By unlocking the interconnected nodes of the Bloodweb, players acquire Items, Offerings, Perks, Add-Ons, and other content. The Entity also resides within the Bloodweb, eating up nodes at random. The player must be smart and strategic if they want to avoid losing valuable content to The Entity.",
  },
  {
    title: "Ranks",
    imgSrc: "images/ranks-killer.gif",
    imgSrc2: "images/ranks-survival.gif",
    imgSize: "small",
    p1: "The Rank is a personal score used for competitive matches, matchmaking, and ranking on leaderboards. There are 20 Ranks for each role, with Rank 1 being the best. Players go up and down the ladder based on their performance in various aspects of a Trial.",
    p2: "A Season lasts for one month. As a new Season begins, the Ranks reset.",
  },
]

export const textsObjectiveSurvivor = [
  {
    title: "HOW TO WIN",
    p: "As a Survivor, your main objective is to escape the map and live another day. To achieve this, you must repair 5 Generators to power the 2 Exit Gates while avoiding the Killer.",
    imgSrc: "https://i.psnprofiles.com/guides/9456/d354fa.png"
  },
  {
    title: "STEALTH",
    p: "Survivors have no means to harm the Killer. To avoid being caught, basic strategies can be used such as crouching behind obstacles, hiding in tall grass, dark corners, or in lockers. The Survivors must be careful when performing fast actions or making loud noises, as these may draw the attention of the Killer.",
    imgSrc: "https://i.psnprofiles.com/guides/6993/212d9b.png"
  },
  {
    title: "SPOTTING THE KILLER",
    p: "When the Killer is nearby, a heartbeat sound becomes audible. This sound, called the Terror Radius, becomes more intense the closer the Killer is to a Survivor. Survivors can see a red conical light that follows the Killer around. This Red Stain shows the direction in which the Killer is looking.",
    imgSrc: "https://i.psnprofiles.com/guides/6993/d04296.png"
  },
  {
    title: "ALTRUISTIC ACTIONS",
    p: "Survivors can rescue each other from Hooks and prevent the Sacrifice from being fully completed. Survivors can also attempt to blind or stun the Killer, which will also make them drop the Survivor they’re carrying. Every Survivor can heal others from the injured or dying state, whether they have a First Aid Kit or not.",
    imgSrc: "https://i.psnprofiles.com/guides/6993/f054a4.png"
  },
  {
    title: "GENERATORS",
    p: "The first step towards escaping the Trial is to repair the 5 Generators spread out across the environment. Repairing takes time and makes noise, which can attract the Killer. The Killer can also see the exact position of all the Generators. Therefore, Survivors need to be on their guard for a patrolling Killer and plan escape routes before starting to work on one. Like many other Survivor interactions, repairing a Generator can trigger Skill Checks.",
    imgSrc: "https://i.psnprofiles.com/guides/6993/065a43.png"
  },
  {
    title: "SKILL CHECKS",
    p: "A Skill Check is a time-based reflex action that requires Survivors to tap a button at the right time or suffer the consequences. Failing a Skill Check warns the Killer with a loud noise notification and regresses the current action's progression. An audio cue can be heard right before the Skill Check appears to help the Survivor anticipate the action.",
    imgSrc: "https://i.psnprofiles.com/guides/6993/517035.png"
  },
  {
    title: "ESCAPING",
    p: "When the Survivors have repaired 5 Generators, the Exit Gates power up. Once opened, the Gate allows the Survivors to run beyond and escape the trial. Survivors choose when to exit the map. They can stay around and save other Survivors that did not make it but must do so before the Endgame Collapse.",
    imgSrc: "https://i.psnprofiles.com/guides/6993/0b98ba.png"
  }
]

export const textsObjectiveKiller = [
  {
    title: "HOW TO WIN",
    p1: "The Killer's main objective is to please The Entity by sacrificing Survivors on Hooks found in the environment. The Killer uses their unique powers and abilities to get as many sacrifices as they can and prevent the Survivors from fleeing.",
    imgSrc: "https://i.psnprofiles.com/guides/6993/a7d53b.png"
  },
  {
    title: "HUNTING",
    p1: "Killers possess heightened senses that help them hunt Survivors:",
    p2: "• The Killer can follow temporary Scratch Marks left behind running Survivors.",
    p3: "• The Killer can track Bloodstains left behind by injured or dying Survivors.",
    p4: "• The Killer receives notifications of Survivor location when they make loud noises.",
    imgSrc: "https://i.psnprofiles.com/guides/6993/7ef0f5.png"
  },
  {
    title: "CHASING SURVIVORS",
    p1: "In a straight line, Killers are faster, but Survivors have many tricks to put objects and distance between themselves and the Killer, like window and pallet vaults. The Killer's goal during a chase is to get into attack range in order to land a devastating hit on the Survivor.",
    imgSrc: "https://i.psnprofiles.com/guides/10790/db47d5.png"
  },
  {
    title: "ATTACKING",
    p1: "https://i.psnprofiles.com/guides/6661/ab7dad.png",
    imgSrc: "All Killers can perform two types of basic attacks: a quick short-ranged attack and a long reach lunge attack. Whether they hit or miss, attacks always trigger a cooldown. Hitting a Survivor twice will down them, allowing the Killer to pick up and carry them to a Sacrificial Hook."
  },
  {
    title: "TRANSPORTING SURVIVORS",
    p1: "The Killer has limited time to transport Survivors to a Hook, as they can eventually wiggle free, stunning the Killer in the process. The Killer must also watch out for other Survivors, as some actions can make the Killer drop their precious cargo.",
    imgSrc: "https://i.psnprofiles.com/guides/10377/6b166c.png"
  },
  {
    title: "SACRIFICE",
    p1: "• Phase 1 - The Summon: Hooked Survivors can either wait to be rescued or attempt to free themselves, speeding up The Entity summoning if they fail.",
    p2: "• Phase 2 - The Struggle: The Survivors must fight The Entity to stay alive. They cannot attempt to free themselves anymore but rescue from others is still possible.",
    p3: "• Phase 3 - The Entity devours the hooked Survivor, ending the sacrifice sequence.",
    imgSrc: "https://i.psnprofiles.com/guides/10377/0df3d8.png"
  },
]