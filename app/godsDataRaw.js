export default godData = [
    {
        "Name": "Achilles",
        "Attributes": {
            "Title:": "Hero of the Trojan War",
            "Pantheon:": "Greek",
            "Type:": "Melee,Physical",
            "Class:": "Warrior",
            "Pros:": "High Single Target Damage, High Mobility",
            "Difficulty:": "Average",
            "Release date:": "February 27, 2018",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Achilles voicelines",
            "Voice actor:": "Ricco Fajardo",
            "Health:": "475 (+85)",
            "Mana:": "205 (+35)",
            "Speed:": "370 (+0)",
            "Range:": "16 (+0)",
            "Attack/Sec:": "0.95 (+1.25%)",
            "Damage:": "38 (+ 2)+ 100% of Physical Power",
            "Progression:": "None",
            "Physical:": "17 (+3)",
            "Magical:": "24 (+1.3)",
            "HP5:": "9 (+0.75)",
            "MP5:": "4.7 (+0.39)",
            "imageURL": require("../assets/images/Achilles.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Gift of the Gods",
                "description": "Achilles adapts to the tide of Battle. While in the Fountain, Achilles can choose to wear armor, granting him bonus Health and Protections, or forgo it, granting him bonus Movement Speed and Physical Power. To swap, use Achilles' Basic Attack while the Passive targeter is active.",
                "imageURL": require("../assets/images/Achilles_ability_0.png"),
                "notes": [
                    "Armor grants 325 Health and 45 Protections (40 Health and 7 Protections at Level 1) at level 20 and no armor grants 33 Physical Power and 6% Movement Speed (4.5 Physical Power and 1.25% Movement Speed at level 1) at level 20.",
                    "Can be cancelled while inside the fountain.",
                    "Health Bonus: 25 +15 per Level",
                    "Protections Bonus: 5 +2 per Level",
                    "Movement Speed Bonus: 1% +.25% per Level",
                    "Physical Power Bonus: 3 +1.5 per Level",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Shield of Achilles",
                "description": "Achilles punches forward with the edge of his Shield, inflicting massive damage and stunning enemy targets hit by the impact. The force of his punch continues to radiate past his initial target area, dealing 70% damage to targets farther away. Lane Minions take an additional 15% damage.",
                "imageURL": require("../assets/images/Achilles_ability_1.png"),
                "notes": [
                    "Can go through walls.",
                    "Has a stun range of 20.",
                    "Deals 70/108/147/185/224 (+56% of your Physical Power) damage to targets on the second half of the cone and 115/178/241/305/368 (+92% of your Physical Power) damage (80.5/124/169/213/258 (+64% of your Physical Power) damage second half on cone) to minions.",
                    "Damage: 100/155/210/265/320 (+80% of your Physical Power)",
                    "Stun Duration: 1s",
                    "Ability Type: Cone, Stun, Damage",
                    "Range: 50",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Radiant Glory",
                "description": "Achilles is blessed by the gods, giving him bonus Physical Power, Protections, and Crowd Control Reduction for 6 seconds. While this blessing is active, Achilles will heal himself upon successfully damaging enemies with abilities.",
                "imageURL": require("../assets/images/Achilles_ability_2.png"),
                "notes": [
                    "Each ability can heal up to 72/84/96/108/120 health if Achilles hits at least 4 enemies (216/252/288/324/360 health total when all abilities hit at least 4 enemies) during the buff's duration.",
                    "Can exceed the protection cap while active.",
                    "Heal: 18/21/24/27/30",
                    "Max Heals per Ability: 4",
                    "Physical Power: +6/7/8/9/10%",
                    "Protections: +10/12.5/15/17.5/20%",
                    "Crowd Control Reduction: 20%",
                    "Ability Type: Buff",
                    "Cost: 40/45/50/55/60 mana",
                    "Cooldown: 9 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Combat Dodge",
                "description": "Achilles dodges his enemies' attacks before striking them in swift response. If Achilles successfully hits an enemy god with this strike, Achilles can use this ability once more before it goes on Cooldown.",
                "imageURL": require("../assets/images/Achilles_ability_3.png"),
                "notes": [
                    "Achilles can use abilities or basic attacks between each dash and strike.",
                    "Dashes have a range of 20 and duration of 4s between each one before going on cooldown.",
                    "This ability costs the same amount of mana used on the first cast on the second cast.",
                    "Deals up to 130/200/270/340/410 (+90% of your Physical Power) damage and costs up to 44/48/52/56/60 mana.",
                    "Strikes are spent even if Achilles misses.",
                    "Damage: 65/100/135/170/205 (+45% of your Physical Power)",
                    "Ability Type: Line, Dash, Damage",
                    "Range: 35",
                    "Cost: 22/24/26/28/30 mana",
                    "Cooldown: 12/11.5/11/10.5/10 seconds"
                ]
            },
            {
                "name": "Ultimate  - Fatal Strike",
                "description": "Achilles dashes forward and attacks. While dashing, Achilles will pass through minions, stop and hit the first enemy god he encounters, dealing damage to all he hits and executing gods below 35% Health. If Achilles kills a god with this ability, he can use it again, up to 5 times. As Achilles successfully Executes his enemies, he becomes more reckless in combat and leaves his heel exposed. Achilles will become more susceptible to damage, stacking up to 5 times.",
                "imageURL": require("../assets/images/Achilles_ability_4.png"),
                "notes": [
                    "Achilles is CC immune while he charges up this ability.",
                    "The execute from this ability also ignores shields,  The Alternate Timeline, Kumbhakarna's and Persephone's passive abilities and Khepri's ultimate.",
                    "Grants Achilles up to 25% increased damage taken.",
                    "The dash portion of the ability occurs after 1s.",
                    "Damage: 180/270/360/450/540 (+100% of your Physical Power)",
                    "Execute Threshold: 35%",
                    "Damage Taken Increase: 5%",
                    "Ability Type: Line, Dash, Damage",
                    "Range: 35",
                    "Cost: 80/85/90/95/100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Agni",
        "Attributes": {
            "Title:": "God of Fire",
            "Pantheon:": "Hindu",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "High Area Damage",
            "Difficulty:": "Hard",
            "Release date:": "May 31, 2012",
            "Favor:": "1,250",
            "Gems:": "200",
            "Voicelines:": "Agni voicelines",
            "Voice actor:": "Scott Freeman",
            "Health:": "360 (+71)",
            "Mana:": "255 (+45)",
            "Speed:": "355 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "1 (+1.2%)",
            "Damage:": "34 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "11 (+2.6)",
            "Magical:": "23 (+1.3)",
            "HP5:": "7 (+0.47)",
            "MP5:": "4.7 (+0.37)",
            "imageURL": require("../assets/images/Agni.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Combustion",
                "description": "Hitting an enemy with a Basic Attack provides 1 stack of Combustion. Hitting an enemy god provides 2. At 4 stacks Agni's next Flame Wave or Rain Fire will ignite all enemies hit, dealing damage every .5s for 3s.",
                "imageURL": require("../assets/images/Agni_ability_0.png"),
                "notes": [
                    "Deals a total of 30 (+36% of your Magical Power) damage.",
                    "The buff is spent even if Flame Wave/Rain Fire (first hit) miss.",
                    "Damage per Tick: 5 (+6% of your Magical Power)",
                    "Ability Type: Damage"
                ]
            },
            {
                "name": "1st Ability  - Noxious Fumes",
                "description": "Agni summons a cloud of noxious fumes at his ground target location, doing damage every second. Firing any of Agni's abilities into the fumes detonates the gas, Stunning and damaging all enemies in the radius.",
                "imageURL": require("../assets/images/Agni_ability_1.png"),
                "notes": [
                    "Can deal up to 100/200/300/400/500 (+50% of your Magical Power) damage to a target that stays in for the full duration.",
                    "Damage per Tick: 10/20/30/40/50 (+5% of your Magical Power)",
                    "Explosion Damage: 20/40/60/80/100 (+20% of your Magical Power)",
                    "Fumes Duration: 10s",
                    "Stun Duration: 1s",
                    "Ability Type: Circle, Stun, Damage",
                    "Range/Radius: 55/20",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 13 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Flame Wave",
                "description": "Agni summons a wave of fire in front of him that scorches all enemies in its path. Ignites Noxious Fumes.",
                "imageURL": require("../assets/images/Agni_ability_2.png"),
                "notes": [
                    "Persists for 1s after reaching max distance.",
                    "Deals 130/185/240/295/350 (+101% of your Magical Power) damage with combustion.",
                    "Damage: 100/155/210/265/320 (+65% of your Magical Power)",
                    "Ability Type: Line, Damage",
                    "Range: 50",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 15/14.5/14/13.5/13 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Path of Flames",
                "description": "Agni blazes a path forward in a quick dash, leaving flames trailing behind him. Any enemies passing through the flames catch fire and burn for damage every .5s for 2s. Ignites Noxious Fumes. Agni is immune to Knockback while dashing.",
                "imageURL": require("../assets/images/Agni_ability_3.png"),
                "notes": [
                    "A target that has stood in the Path of Flames for the entire duration of 3 seconds will take a maximum of 10 ticks for a total of 200/300/400/500/600 (+150% of your Magical Power) damage including the Burn DoT effect.",
                    "The DoT effect refreshes every time the target touches the flame trail for a total time possible of 5 seconds worth of tick damage.",
                    "Damage per Tick: 20/30/40/50/60 (+15% of your Magical Power)",
                    "Path Duration: 3s",
                    "Ability Type: Dash, Damage",
                    "Range: 60",
                    "Cost: 70/75/80/85/90 mana",
                    "Cooldown: 16 seconds"
                ]
            },
            {
                "name": "Ultimate  - Rain Fire",
                "description": "Every 18 seconds, Agni gains a flaming halo that can be expended to summon a giant meteor at his ground target location. He can summon 1 every .8 seconds. Ignites Noxious Fumes.",
                "imageURL": require("../assets/images/Agni_ability_4.png"),
                "notes": [
                    "The halo recharge rate is affected by Cooldown Reduction.",
                    "Deals up to 405/525/645/765/885 (+180% of your Magical Power) damage by default and 435/555/675/795/915 (+226% of your Magical Power) damage with combustion and costs up to 30 mana.",
                    "The first halo deals 165/205/245/285/325 (+96% of your Magical Power) damage with combustion.",
                    "Agni is slowed by 50% while summoning a halo.",
                    "Damage: 135/175/215/255/295 (+60% of your Magical Power)",
                    "Max Halos: 3",
                    "Ability Type: Circle, Damage",
                    "Range/Radius: 65/20",
                    "Cost: 10 mana",
                    "Cooldown: Dependent on Halos"
                ]
            }
        ]
    },
    {
        "Name": "Ah Muzen Cab",
        "Attributes": {
            "Title:": "God of Bees",
            "Pantheon:": "Maya",
            "Type:": "Ranged,Physical",
            "Class:": "Hunter",
            "Pros:": "High Movement Speed, High Attack Speed",
            "Difficulty:": "Average",
            "Release date:": "November 7, 2013",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Ah Muzen Cab voicelines",
            "Voice actor:": "Jason Liebrecht",
            "Health:": "450 (+78)",
            "Mana:": "230 (+40)",
            "Speed:": "365 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.95 (+1.7%)",
            "Damage:": "33 (+ 2.5)+ 100% of Physical Power",
            "Progression:": "None",
            "Physical:": "12 (+3)",
            "Magical:": "23 (+1.3)",
            "HP5:": "7 (+0.71)",
            "MP5:": "4.4 (+0.38)",
            "imageURL": require("../assets/images/Ah_Muzen_Cab.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Bees!",
                "description": "Enemies afflicted by Bees! take damage every .5s for 2s, are revealed on the minimap, and swarm nearby enemies. Basic Attacks refresh and extend the duration of Bees! by 1s. This damage does not trigger Item effects.",
                "imageURL": require("../assets/images/Ah_Muzen_Cab_ability_0.png"),
                "notes": [
                    "The debuff reveals stealthed enemies.",
                    "Deals a total of 36 (+20% of your Physical Power) damage.",
                    "There is no limit to how long Ah Muzen Cab can afflict the target with Bees! when landing basic attacks on the same target.",
                    "Has a radius of 20.",
                    "Damage: 9 (+5% of your Physical Power)",
                    "Ability Type: Damage"
                ]
            },
            {
                "name": "1st Ability  - Hive",
                "description": "Bees swarm at the ground target location, creating a new Hive that provides Movement Speed, Attack Speed and HP5 Buffs to Ah Muzen Cab. Hives reveal enemies within 30 units of them. The Hives can only be destroyed by Basic Attacks.",
                "imageURL": require("../assets/images/Ah_Muzen_Cab_ability_1.png"),
                "notes": [
                    "The buffs from overlapping hive auras do not stack.",
                    "Placing a hive after reaching the limit will destroy the oldest one placed.",
                    "Enemy gods can destroy them with one Basic Attack.",
                    "Has a deploy range of 55.",
                    "HP5: 20/25/30/35/40",
                    "Movement Speed: 10/14/18/22/26%",
                    "Attack Speed: 10/20/30/40/50%",
                    "Max Hives: 7/8/9/10/11",
                    "Ability Type: Circle, Buff",
                    "Radius: 90",
                    "Cost: 40 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Swarm",
                "description": "Ah Muzen Cab summons a large swarm of bees that fly forward in a path in front of him, dealing damage to all enemies hit and applying Bees to them.",
                "imageURL": require("../assets/images/Ah_Muzen_Cab_ability_2.png"),
                "notes": [
                    "Damage: 60/100/140/180/220 (+70% of your Physical Power)",
                    "Ability Type: Line, Damage",
                    "Range: 70",
                    "Cost: 65/70/75/80/85 mana",
                    "Cooldown: 15/14/13/12/11 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Honey",
                "description": "Ah Muzen Cab sprays honey that lasts for 4s at a moveable ground target location, Slowing all enemies in the area. Bees from Hives within 90 units and Swarm will fly over to protect the honey, dealing damage every .5 second and applying Bees! to all enemies as they leave the honey.",
                "imageURL": require("../assets/images/Ah_Muzen_Cab_ability_3.png"),
                "notes": [
                    "Has a maximum honey range of 70.",
                    "Doesn't trigger on ability hit effects unless it deals damage.",
                    "Deals a total of 78/150/222/294/366 (+90% of your Physical Power) damage.",
                    "Damage per Tick: 13/25/37/49/61 (+15% of your Physical Power)",
                    "Slow: 20/22.5/25/27.5/30%",
                    "Ability Type: Area, Slow, Damage",
                    "Range/Radius: 55/10",
                    "Cost: 60 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "Ultimate  - Stinger",
                "description": "Ah Muzen Cab fires off an enormous stinger that deals damage to all enemies in a line, sticking into the first god that is hit, applying Bees!, Slowing, Crippling, and decreasing their Physical Protections for 3 seconds. If the target dies or after 3 seconds, the stinger falls onto the ground for 4 seconds. If Ah Muzen Cab picks up his stinger, he gains a significant reduction to Stinger's Cooldown.",
                "imageURL": require("../assets/images/Ah_Muzen_Cab_ability_4.png"),
                "notes": [
                    "Retrieval's cooldown reduction deducts from the current cooldown, taking into account Cooldown %.",
                    "Damage: 275/355/435/515/595 (+90% of your Physical Power)",
                    "Slow: 20%",
                    "Physical Protection Reduction: 10%",
                    "Retrieval Cooldown Reduction: 60%",
                    "Ability Type: Line, Cripple, Damage",
                    "Range: 70",
                    "Cost: 100 mana",
                    "Cooldown: 100 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Ah Puch",
        "Attributes": {
            "Title:": "Horrific God of Decay",
            "Pantheon:": "Maya",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "High Area Damage",
            "Difficulty:": "Average",
            "Release date:": "April 28, 2015",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Ah Puch voicelines",
            "Voice actor:": "Bruce Carey",
            "Health:": "450 (+75)",
            "Mana:": "265 (+55)",
            "Speed:": "365 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.86 (+0.95%)",
            "Damage:": "35 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "13 (+2.7)",
            "Magical:": "23 (+1.3)",
            "HP5:": "6 (+0.45)",
            "MP5:": "4.9 (+0.42)",
            "imageURL": require("../assets/images/Ah_Puch.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Hollow Ground",
                "description": "Ah Puch is closely attuned with the dead and may exhume corpses at his will. When walking over a decaying corpse, Ah Puch lowers the cooldown of Undead Surge and Corpse Explosion by 1s, restores 4% of his maximum Health and 3% of his maximum Mana.",
                "imageURL": require("../assets/images/Ah_Puch_ability_0.png"),
                "notes": [
                    "Enemy gods and the Fire Giant can destroy the corpses with 2 Basic Attacks.",
                    "Ah Puch can have up to 6 corpses (with a maximum duration of 45s) and placing more than 6 will cause the oldest ones to disappear.",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Undead Surge",
                "description": "Ah Puch raises up to two decaying corpses from the underworld that surge forward exploding on anything they touch, when they reach max distance, or when Ah Puch reactivates Undead Surge dealing damage and slowing targets hit. Enemies hit also have their healing reduced by 40% for 5s. The corpses collapse after exploding remaining behind.",
                "imageURL": require("../assets/images/Ah_Puch_ability_1.png"),
                "notes": [
                    "Damage: 90/110/130/150/170 (+35% of your Magical Power)",
                    "Slow: 20/25/30/35/40%",
                    "Slow Duration: 2s",
                    "Ability Type: Line, Slow, Damage",
                    "Range/Radius: 60/20",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 11 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Corpse Explosion",
                "description": "Ah Puch causes the target area to explode dealing damage. Corpse Explosion also causes any decaying corpses in the area to explode.",
                "imageURL": require("../assets/images/Ah_Puch_ability_2.png"),
                "notes": [
                    "Can deal up to 390/550/710/870/1030 (+180% of your Magical Power) damage with 6 corpses.",
                    "Initial Damage: 60/70/80/90/100 (+30% of your Magical Power)",
                    "Damage per Corpse: 55/80/105/130/155 (+25% of your Magical Power)",
                    "Ability Type: Circle, Damage",
                    "Range/Radius: 55/20, 25",
                    "Cost: 60 mana",
                    "Cooldown: 8 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Fleeting Breath",
                "description": "Ah Puch throws a charm from the underworld which awakens a decaying corpse that applies miasma to targets in an area and falls to the ground, remaining behind. Targets take damage every second. After the duration, targets take additional damage and are stunned if they were healed by an ability during the initial duration.",
                "imageURL": require("../assets/images/Ah_Puch_ability_3.png"),
                "notes": [
                    "Percent Health Regeneration can also trigger the effect.",
                    "The DoT deals a total of 120/160/200/240/280 (+80% of your Magical Power) damage by default and 170/260/350/440/530 (+120% of your Magical Power) damage if the affected unit heals (excluding potions, lifesteal, meditation relics or HP5 heals) during the initial hit.",
                    "Damage per Tick: 30/40/50/60/70 (+20% of your Magical Power)",
                    "Additional Damage: 50/100/150/200/250 (+40% of your Magical Power)",
                    "Stun Duration: 1.5s",
                    "Duration: 4s",
                    "Ability Type: Circle, Stun, Damage",
                    "Range/Radius: 55/13",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 10 seconds"
                ]
            },
            {
                "name": "Ultimate  - Empty the Crypts",
                "description": "Ah Puch unleashes an army of Wraiths from the Ninth Hell that swarm forward, damaging enemies and reducing their Healing and Damage Dealt.",
                "imageURL": require("../assets/images/Ah_Puch_ability_4.png"),
                "notes": [
                    "Has a recovery time of .6s.",
                    "Stacks last 5s and refresh per tick.",
                    "The wraiths are projectiles that move in a straight line and go through everything.",
                    "Applies up to 60% Healing Reduction and 9% Damage Reduction.",
                    "Damage per Wraith: 50/60/70/80/90 (+15% of your Magical Power)",
                    "Duration: 6s",
                    "Damage Reduction: 3% per Stack",
                    "Healing Reduction: 20% per Stack",
                    "Max Stacks: 3",
                    "Ability Type: Area, Damage",
                    "Range: 75",
                    "Cost: 100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Amaterasu",
        "Attributes": {
            "Title:": "The Shining Light",
            "Pantheon:": "Japanese",
            "Type:": "Melee,Physical",
            "Class:": "Warrior",
            "Pros:": "High Mobility, High Area Damage",
            "Difficulty:": "Average",
            "Release date:": "January 12, 2016",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Amaterasu voicelines",
            "Voice actor:": "Cristina Valenzuela",
            "Health:": "480 (+85)",
            "Mana:": "220 (+35)",
            "Speed:": "375 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+1.4%)",
            "Damage:": "39 (+ 2.2)+ 100% of Physical Power",
            "Progression:": "1/.5/1 damage and swing time",
            "Physical:": "18 (+3)",
            "Magical:": "24 (+1.3)",
            "HP5:": "8 (+0.8)",
            "MP5:": "4.8 (+0.4)",
            "imageURL": require("../assets/images/Amaterasu.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Illuminating Strike",
                "description": "Amaterasu illuminates enemies she hits with basic attacks. After 3 hits on the same target the enemy gains an aura, exposing their weaknesses and causing them to take more damage from all sources. Any other enemies that come near the afflicted target are weakened as well.",
                "imageURL": require("../assets/images/Amaterasu_ability_0.png"),
                "notes": [
                    "Stacks up to 30% increased damage taken.",
                    "Weakening Aura: 10% Increased Damage Taken",
                    "Stack/Aura Duration: 6s",
                    "Max Auras Possible: 3",
                    "Ability Type: Circle, Debuff",
                    "Radius: 30"
                ]
            },
            {
                "name": "1st Ability  - Divine Presence",
                "description": "Amaterasu harnesses the power of her jewel, gaining Attack Speed and healing herself every second for 4 seconds. She also creats a persistent aura that buffs nearby allied gods. Every time this ability is activated the aura switches between Valor and Benevolence.",
                "imageURL": require("../assets/images/Amaterasu_ability_1.png"),
                "notes": [
                    "Heals a total of 60/100/140/180/220 health.",
                    "Valor grants both Physical and Magical Power.",
                    "Heal Per Tick: 15/25/35/45/55",
                    "Attack Speed: 15/17.5/20/22.5/25%",
                    "Benevolence Aura: 9/12/15/18/21% Move Speed",
                    "Valor Aura: 14/18/22/26/30 Bonus Power",
                    "Ability Type: Buff",
                    "Radius: 30",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 9 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Heavenly Reflection",
                "description": "Amaterasu charges her mirror for 5 seconds. While the mirror is charging she takes decreased damage. By activating the ability again or at the end of 5 seconds she will fire her mirror straight ahead, dealing damage. The mirror can be charged by successfully attacking enemies or from taking damage, and will deal up to double the base damage when fully charged.",
                "imageURL": require("../assets/images/Amaterasu_ability_2.png"),
                "notes": [
                    "Self Damage Mitigation: 7/9/11/13/15%",
                    "Mirror Damage: 70/105/140/175/210 (+60% of your Physical Power)",
                    "Full Charge Damage: 140/210/280/350/420",
                    "Ability Type: Line, Buff, Damage",
                    "Range: 55",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 12/11.5/11/10.5/10 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Glorious Charge",
                "description": "Amaterasu shines light off of her sacred blade, silencing all enemies in front of her. She then dashes forward while dealing damage, piercing through minions or stopping at the first god hit.",
                "imageURL": require("../assets/images/Amaterasu_ability_3.png"),
                "notes": [
                    "Silence Duration: 1s",
                    "Dash Damage: 80/135/190/245/300 (+60% of your Physical Power)",
                    "Ability Type: Dash, Silence, Damage",
                    "Range: 55",
                    "Cost: 60 mana",
                    "Cooldown: 15 seconds"
                ]
            },
            {
                "name": "Ultimate  - Dazzling Offensive",
                "description": "Amaterasu focuses the power of the heavens into an impressive 3 strike combination attack. The 2nd hit will do 20% more base damage and slow enemies by 30%. The 3rd hit will do 40% more base damage and stun enemies. She must hit an enemy with the 1st hit to receive the increased damage and CC on the 2nd hit. The same rule applies to the 2nd and 3rd hits.",
                "imageURL": require("../assets/images/Amaterasu_ability_4.png"),
                "notes": [
                    "Can deal up to 360/504/648/792/936 (+150% of your Physical Power) damage.",
                    "Plays a distinct sound cue for each of the chain's stages.",
                    "Amaterasu is immune to crowd control while using this ability.",
                    "Damage per Strike: 100/140/180/220/260 (+50% of your Physical Power)",
                    "Slow Duration: 2s",
                    "Stun Duration: 2s",
                    "Ability Type: Cone, Stun, Damage",
                    "Radius: 35",
                    "Cost: 100 mana",
                    "Cooldown: 90/85/80/75/70 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Anhur",
        "Attributes": {
            "Title:": "Slayer of Enemies",
            "Pantheon:": "Egyptian",
            "Type:": "Ranged,Physical",
            "Class:": "Hunter",
            "Pros:": "High Single Target Damage",
            "Difficulty:": "Average",
            "Release date:": "August 3, 2012",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Anhur voicelines",
            "Voice actor:": "Christopher Sabat",
            "Health:": "460 (+78)",
            "Mana:": "220 (+35)",
            "Speed:": "365 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "1 (+1.7%)",
            "Damage:": "35 (+ 2.5)+ 100% of Physical Power",
            "Progression:": "None",
            "Physical:": "11 (+2.8)",
            "Magical:": "23 (+1.3)",
            "HP5:": "8 (+0.69)",
            "MP5:": "4.5 (+0.32)",
            "imageURL": require("../assets/images/Anhur.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Enfeeble",
                "description": "Anhur's spear attacks reduce the enemy target's Physical Protection for 3 seconds.",
                "imageURL": require("../assets/images/Anhur_ability_0.png"),
                "notes": [
                    "The debuff affects Anhur's Basic Attacks, Impale and Desert Fury.",
                    "The debuff duration refreshes per (spear) attack.",
                    "Physical Protection Debuff: 20",
                    "Ability Type: Debuff"
                ]
            },
            {
                "name": "1st Ability  - Shifting Sands",
                "description": "Anhur erects an obelisk from the ground, blocking all player movement. The surrounding sands Slow enemies and increase the damage of Anhur's Basic Attacks against targets in the sands.",
                "imageURL": require("../assets/images/Anhur_ability_1.png"),
                "notes": [
                    "The obelisk can be deployed through map walls.",
                    "With at least 12% bonus movement speed, Anhur is able to walk past his obelisk if placed right at his feet.",
                    "Slow: 15/20/25/30/35%",
                    "Damage Buff: 8/11/14/17/20%",
                    "Lifetime: 7s",
                    "Ability Type: Circle, Debuff",
                    "Range/Radius: 70/30",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Impale",
                "description": "Anhur hurls his spear with great might. If the spear hits a god, they take damage and are knocked back. Gods knocked back into a wall are Stunned. Enemies hit by the pushed god take damage. The spear passes through minions, doing damage to them as well.",
                "imageURL": require("../assets/images/Anhur_ability_2.png"),
                "notes": [
                    "This ability cannot go through walls.",
                    "Has a and knockback distance of 40.",
                    "Can also stun if the enemy god is pushed into player-made deployables, such as Shifting Sands' obelisk.",
                    "Damage: 105/170/235/300/365 (+80% of your Physical Power)",
                    "Stun Duration: 1.1/1.2/1.3/1.4/1.5s",
                    "Ability Type: Line, Crowd Control, Damage",
                    "Range: 55",
                    "Cost: 70/75/80/85/90 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Disperse",
                "description": "Anhur leaps to his ground target location, doing damage and knocking back all enemies in the radius where he lands.",
                "imageURL": require("../assets/images/Anhur_ability_3.png"),
                "notes": [
                    "This ability's knockup and damage can be canceled if hit by CC on landing.",
                    "This ability has a setup time of 0.15s and leap time of 0.85s.",
                    "Damage: 70/110/150/190/230 (+60% of your Physical Power)",
                    "Ability Type: Circle, Leap, Damage",
                    "Range/Radius: 55/15",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 15/14.5/14/13.5/13 seconds"
                ]
            },
            {
                "name": "Ultimate  - Desert Fury",
                "description": "Summoning the fury of the desert, Anhur hunkers down and throws empowered spears that pass through everything, doing damage to all enemies in their path. He is immune to Crowd Control for the duration.",
                "imageURL": require("../assets/images/Anhur_ability_4.png"),
                "notes": [
                    "This ability can go through walls.",
                    "Can deal up to 520/720/920/1120/1320 (+240% of your Physical Power) damage.",
                    "Has a duration of 2s (with a 0.25s prefire and spears thrown every 0.22s).",
                    "Damage per Spear: 65/90/115/140/165 (+30% of your Physical Power)",
                    "Spears Thrown: 8",
                    "Ability Type: Line, Damage",
                    "Range: 80",
                    "Cost: 80/90/100/110/120 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Anubis",
        "Attributes": {
            "Title:": "God of the Dead",
            "Pantheon:": "Egyptian",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "High Area Damage",
            "Difficulty:": "Easy",
            "Release date:": "May 31, 2012",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Anubis voicelines",
            "Voice actor:": "R. Bruce Elliott",
            "Health:": "420 (+72)",
            "Mana:": "280 (+58)",
            "Speed:": "360 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.86 (+0.99%)",
            "Damage:": "35 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "10 (+2.5)",
            "Magical:": "23 (+1.3)",
            "HP5:": "7 (+0.45)",
            "MP5:": "4.8 (+0.36)",
            "imageURL": require("../assets/images/Anubis.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Sorrow",
                "description": "All of Anubis' abilities steal Physical and Magical Protection from the target and increase his Healing obtained from Magical Lifesteal. These effects stack on every tick of Anubis' abilities. Sorrow also grants Anubis an additional 30% reduction to all Crowd Control durations.",
                "imageURL": require("../assets/images/Anubis_ability_0.png"),
                "notes": [
                    "Grants 15 Protections and 60% Lifesteal Healing bonus at max stacks.",
                    "Each tick refreshes the buff's duration.",
                    "Protections Stolen Per Stack: 5",
                    "Increased Healing per Stack: 20%",
                    "Duration: 6s",
                    "Max Stacks: 3",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Plague of Locusts",
                "description": "A plague of locusts bellows forth from Anubis' mouth, smothering all enemies in the area and doing damage every .25s for 3s. Anubis is immune to knockback while channeling and moves at 50% speed.",
                "imageURL": require("../assets/images/Anubis_ability_1.png"),
                "notes": [
                    "Can deal up to 216/312/408/504/600 (+264% of your Magical Power) damage.",
                    "Can be cancelled early.",
                    "Damage per Tick: 18/26/34/42/50 (+22% of your Magical Power)",
                    "Ability Type: Cone, Damage",
                    "Range: 35",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 10 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Mummify",
                "description": "Anubis fires a bandage projectile, mummifying and Stunning his target.",
                "imageURL": require("../assets/images/Anubis_ability_2.png"),
                "notes": [
                    "This ability cannot go through player-made nor map walls.",
                    "Stun Duration: 2s",
                    "Ability Type: Line, Stun",
                    "Range: 70",
                    "Cost: 60 mana",
                    "Cooldown: 17/16/15/14/13 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Grasping Hands",
                "description": "Anubis calls for help from the underworld as hands penetrate the ground and claw at his enemies, doing damage and Slowing every .5s for 2s.",
                "imageURL": require("../assets/images/Anubis_ability_3.png"),
                "notes": [
                    "Can deal up to 100/160/220/280/340 (+140% of your Magical Power) damage.",
                    "Damage per Tick: 25/40/55/70/85 (+35% of your Magical Power)",
                    "Slow: 25%",
                    "Ability Type: Circle, Slow, Damage",
                    "Range/Radius: 55/20",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 14/13.5/13/12.5/12 seconds"
                ]
            },
            {
                "name": "Ultimate  - Death Gaze",
                "description": "Anubis focuses all of his energy into a piercing gaze, doing damage to all enemies in the path, every 0.1 seconds for 3 seconds.",
                "imageURL": require("../assets/images/Anubis_ability_4.png"),
                "notes": [
                    "Has a radius of 1.75.",
                    "Can deal up to 600/750/900/1050/1200 (+390% of your Magical Power) damage.",
                    "Anubis is stationary, CC immune and can rotate while casting this ability.",
                    "Can be cancelled early.",
                    "Damage per Tick: 20/25/30/35/40 (+13% of your Magical Power)",
                    "Ability Type: Line, Damage",
                    "Range: 70",
                    "Cost: 90 mana",
                    "Cooldown: 90/85/80/75/70 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Ao Kuang",
        "Attributes": {
            "Title:": "Dragon King of theEastern Seas",
            "Pantheon:": "Chinese",
            "Type:": "Melee,Magical",
            "Class:": "Mage",
            "Pros:": "High Single Target Damage",
            "Difficulty:": "Hard",
            "Release date:": "November 19, 2014",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Ao Kuang voicelines",
            "Voice actor:": "Kaiji Tang",
            "Health:": "400 (+82)",
            "Mana:": "240 (+38)",
            "Speed:": "375 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+1.95%)",
            "Damage:": "35 (+ 2.4)+ 20% of Magical Power",
            "Progression:": "1/0.7/0.7/1x Damage and 1/0.5/0.5/1x Swing Time",
            "Physical:": "12 (+3)",
            "Magical:": "23 (+1.3)",
            "HP5:": "10 (+0.7)",
            "MP5:": "4.8 (+0.41)",
            "imageURL": require("../assets/images/Ao_Kuang.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Dragon King's Sword",
                "description": "Every 10 seconds Ao Kuang gets a stack of Dragon King's Sword. With a stack available, his next non-ultimate ability that deals damage to an Enemy god has a reduced cooldown and heals Ao Kuang. Successfully executing an Enemy god with King of the Eastern Seas fully charges Dragon King's Sword.",
                "imageURL": require("../assets/images/Ao_Kuang_ability_0.png"),
                "notes": [
                    "Restores up to 9% of max health with three stacks.",
                    "Cooldown Reduction: 2s",
                    "Heal: 3% of maximum Health",
                    "Max Stacks: 3",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Water Illusion",
                "description": "Ao Kuang Teleports forward into Stealth, leaving behind a watery form of himself. He remains in Stealth for 5s or until he attacks or takes damage.Ao Kuang may activate this ability again to detonate the watery form, dealing damage to nearby enemies.",
                "imageURL": require("../assets/images/Ao_Kuang_ability_1.png"),
                "notes": [
                    "Ao Kuang Teleports forward into Stealth, leaving behind a watery form of himself. He remains in Stealth for 5s or until he attacks or takes damage.\nAo Kuang may activate this ability again to detonate the watery form, dealing damage to nearby enemies.",
                    "Entering an enemy structure's attack range while stealthed will temporarily reveal him.",
                    "It won't begin its cooldown until after the watery form is detonated.",
                    "The watery form automatically detonates after 5s regardless of Ao Kuang's status.",
                    "Damage: 70/120/170/220/270 (+70% of your Magical Power)",
                    "Ability Type: Circle, Teleport, Damage",
                    "Range/Radius: 30/20",
                    "Cost: 70 mana",
                    "Cooldown: 15 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Dragon Call",
                "description": "Ao Kuang summons 6 dragons to his side. For every successful Basic Attack Ao Kuang makes, a dragon will dive to the target dealing additional damage. This ability ends after all dragons are used, or after 10s. Ao Kuang may activate this ability again to send forward any remaining dragons in a ranged attack. The dragons damage and Slow the first enemy they hit.",
                "imageURL": require("../assets/images/Ao_Kuang_ability_2.png"),
                "notes": [
                    "Can be used during Water Illusion's stealth without dispelling it.",
                    "The ranged attack will knock back enemy minions or jungle monsters hit.",
                    "Deals up to 210/300/390/480/570 (+180% of your Magical Power) damage through basic attacks and 120/150/180/210/240 (+78% of your Magical Power) damage and slows up to 2.5s as a ranged attack.",
                    "Attack Damage: 35/50/65/80/95 (+30% of your Magical Power) per hit",
                    "Ranged Damage: 20/25/30/35/40 (+13% of your Magical Power) per remaining dragon",
                    "Slow: 30%, for 1s + 0.25s per remaining dragon",
                    "Ability Type: Line, Buff, Damage",
                    "Range: 55",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 15/14/13/12/11 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Wild Storm",
                "description": "Ao Kuang unleashes a storm of lightning from his sword, damaging all enemies in front of him. This hit will send a Dragon from Dragon's Call forth, dealing damage to hit targets.",
                "imageURL": require("../assets/images/Ao_Kuang_ability_3.png"),
                "notes": [
                    "Deals 125/185/245/305/365 (+70% of your Magical Power) damage while Dragon Call is active.",
                    "Damage: 90/135/180/225/270 (+40% of your Magical Power)",
                    "Ability Type: Cone, Damage",
                    "Range: 30",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 6 seconds"
                ]
            },
            {
                "name": "Ultimate  - King of the Eastern Seas",
                "description": "Ao Kuang grabs a single target, damaging and knocking them into the air. If the target is below a Health threshold, Ao Kuang will also reveal his true form, becoming an airborne Dragon and executing them restoring Health. After transforming Ao Kuang then picks a new location to land, dealing damage to enemies within 20 units.",
                "imageURL": require("../assets/images/Ao_Kuang_ability_4.png"),
                "notes": [
                    "The execute from this ability also ignores shields,  The Alternate Timeline, Kumbhakarna's and Persephone's passive abilities and Khepri's ultimate.",
                    "The target can avoid being executed by cleansing the knockup effect before reaching the halfway point of going up into the air.",
                    "Ao Kuang is CC immune while he is grabbing a target, even if the ability does not result in an execute.",
                    "Has a maximum airborne duration of 5s, range of 200 and if there is no valid landing point, Ao Kuang will land to the closest valid point near the targetter.",
                    "Damage: 90/140/190/240/290 (+50% of your Magical Power)",
                    "Execute Threshold: 30%",
                    "Heal: 10/15/20/25/30% of maximum Health",
                    "Landing Damage: 100/150/200/250/300 (+50% of your Magical Power)",
                    "Ability Type: Target, Knockup, Damage",
                    "Range: 15",
                    "Cost: 90/100/110/120/130 mana",
                    "Cooldown: 100 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Aphrodite",
        "Attributes": {
            "Title:": "Goddess of Beauty",
            "Pantheon:": "Greek",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "High Sustain",
            "Difficulty:": "Hard",
            "Release date:": "March 13, 2013",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Aphrodite voicelines",
            "Voice actor:": "Martha Harms",
            "Health:": "380 (+68)",
            "Mana:": "240 (+43)",
            "Speed:": "355 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.87 (+0.95%)",
            "Damage:": "32 (+ 1.45)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "9 (+2.7)",
            "Magical:": "23 (+1.3)",
            "HP5:": "6 (+0.45)",
            "MP5:": "4.8 (+0.41)",
            "imageURL": require("../assets/images/Aphrodite.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Center of Attention",
                "description": "Aphrodite gains 4 Physical Protection and 4 Magical Protection for each friendly or enemy god within 70 feet of her.",
                "imageURL": require("../assets/images/Aphrodite_ability_0.png"),
                "notes": [
                    "Grants up to 36 protections with 9 nearby gods.",
                    "Ability Type: Circle, Buff",
                    "Radius: 70"
                ]
            },
            {
                "name": "1st Ability  - Kiss",
                "description": "Aphrodite blows a kiss to an allied god, making them her soul mate and giving them both increased movement speed. If it hits an ally, it has a reduced 1s cooldown. If the kiss hits an enemy god, they are Damaged, Stunned and Aphrodite's soul mate gets jealous, increasing their damage. Also Aphrodite's soul mate gains 50% of her MP5 and 10% of her Physical and Magical Protections.",
                "imageURL": require("../assets/images/Aphrodite_ability_1.png"),
                "notes": [
                    "This ability goes through the current soul mate.",
                    "If both ally and enemy gods are in the area, it will prioritize and hit the closest allied god.",
                    "If Aphrodite and the linked ally are more than 70 units apart for 2s, the link is broken.",
                    "Damage: 40/60/80/100/120 (+25% of your Magical Power)",
                    "Movement Speed: 6/7/8/9/10%",
                    "Stun Duration: 1s",
                    "Jealousy Damage Increase: 5/7.5/10/12.5/15%",
                    "Jealousy Duration: 5s",
                    "Ability Type: Line, Buff",
                    "Range: 55",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 14/13.5/13/12.5/12 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Back Off!",
                "description": "Agitated by all the attention, Aphrodite commands enemies to get away from her, doing damage around her, slowing them by 25% for 2s and knocking them back to 25 units from her.If Aphrodite has a soul mate, an explosion originates on them in addition, dealing damage as well as slowing enemies.If an enemy would be hit by both blasts, they will only be affected by the one originating from Aphrodite.",
                "imageURL": require("../assets/images/Aphrodite_ability_2.png"),
                "notes": [
                    "Damage: 80/140/200/260/320 (+85% of your Magical Power)",
                    "Soul Mate Damage: 80/140/200/260/320 (+70% of your Magical Power)",
                    "Slow: 25%",
                    "Ability Type: Circle, Knockback, Damage",
                    "Radius: 20",
                    "Cost: 70/75/80/85/90 mana",
                    "Cooldown: 14/13.5/13/12.5/12 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Love Birds",
                "description": "Aphrodite calls forth a flock of beautiful doves that fly forward in the area in front of her. The doves circle around all enemies in the path, damaging enemies every .5s for 3s. Aphrodite and her soul mate receive healing when cast and decreased ability cooldowns.",
                "imageURL": require("../assets/images/Aphrodite_ability_3.png"),
                "notes": [
                    "Deals one additional tick of damage on application.",
                    "Deals a total of 105/175/245/315/385 (+105% of your Magical Power) damage and heals a total of 82/102/118/136/154 health (44/62/80/98/116 health at level 1) at level 20 and decreases ability cooldowns by 1.5s.",
                    "Damage per Tick: 15/25/35/45/55 (+15% of your Magical Power)",
                    "Heal per Tick: 7/10/13/16/19 + 2 per level",
                    "Cooldown Decrease: 0.2s per Tick",
                    "Ability Type: Line, Heal, Damage",
                    "Range: 70",
                    "Cost: 70/75/80/85/90 mana",
                    "Cooldown: 16 seconds"
                ]
            },
            {
                "name": "Ultimate  - Undying Love",
                "description": "Aphrodite pledges undying love to herself and her soul mate, refreshing half of the original cooldown of Love Birds. While this is active, her and her soul mate are invulnerable to all damage and gain the Jealousy effect for a short duration. All Crowd Control effects are also removed when activated.",
                "imageURL": require("../assets/images/Aphrodite_ability_4.png"),
                "notes": [
                    "Can be used while under crowd control.",
                    "Also grants CC immunity for the duration.",
                    "Invulnerability Duration: .8/1.1/1.4/1.7/2s",
                    "Ability Type: Buff",
                    "Cost: 100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Apollo",
        "Attributes": {
            "Title:": "God of Music",
            "Pantheon:": "Greek",
            "Type:": "Ranged,Physical",
            "Class:": "Hunter",
            "Pros:": "High Mobility",
            "Difficulty:": "Easy",
            "Release date:": "March 28, 2013",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Apollo voicelines",
            "Voice actor:": "Phil Parsons",
            "Health:": "450 (+77)",
            "Mana:": "225 (+40)",
            "Speed:": "365 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.95 (+1.7%)",
            "Damage:": "35 (+ 2.6)+ 100% of Physical Power",
            "Progression:": "None",
            "Physical:": "12 (+2.7)",
            "Magical:": "23 (+1.3)",
            "HP5:": "8 (+0.69)",
            "MP5:": "4.6 (+0.4)",
            "imageURL": require("../assets/images/Apollo.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Audacity",
                "description": "After 10 successful Basic Attacks, Apollo gains Audacity, increasing his Attack Speed by 100% and his Basic Attack projectile speed for the next 5 Basic Attacks (hit or miss) he makes. Apollo also gains 1 stack of Audacity for each successful damaging ability on Enemy gods.",
                "imageURL": require("../assets/images/Apollo_ability_0.png"),
                "notes": [
                    "Apollo's basic attacks while the buff is active have +20% projectile speed.",
                    "Attack Speed Buff: 100%",
                    "Buff Duration: 5 Basic Attacks",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - So Beautiful",
                "description": "Apollo strums a single chord on his lyre. It's so beautiful it hurts, and all enemies in a long range line take damage.",
                "imageURL": require("../assets/images/Apollo_ability_1.png"),
                "notes": [
                    "Has a projectile speed of 150.",
                    "Damage: 90/150/210/270/330 (+90% of your Physical Power)",
                    "Ability Type: Line, Damage",
                    "Range: 55",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 11 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Serenade",
                "description": "Apollo uses his amazing voice to Mesmerize all nearby enemies and bolster himself with additional protections. Any damage done breaks the effect.",
                "imageURL": require("../assets/images/Apollo_ability_2.png"),
                "notes": [
                    "Mesmerize only breaks from damage dealt by gods.",
                    "Mesmerize: 1.5/1.7/1.9/2.1/2.3s",
                    "Protections: 10/15/20/25/30",
                    "Buff Lifetime: 5s",
                    "Ability Type: Circle, Mesmerize",
                    "Radius: 20",
                    "Cost: 60 mana",
                    "Cooldown: 15/14.5/14/13.5/13 seconds"
                ]
            },
            {
                "name": "3rd Ability  - The Moves",
                "description": "Apollo runs forward and slides on his knees, dealing damage, knocking aside all enemies and adding a stack of Audacity for each enemy hit. At the end of the slide, the movement speed is decreased for enemies and increased for himself and allies.",
                "imageURL": require("../assets/images/Apollo_ability_3.png"),
                "notes": [
                    "Has a knockback strength of 250, a prefire time of 0.15s and dash time of 0.58s.",
                    "Only the dash portion deals damage.",
                    "Damage: 70/115/160/205/250 (+60% of your Physical Power)",
                    "Movement Speed Buff/Debuff: 15/17.5/20/22.5/25%",
                    "Buff Duration: 5s",
                    "Ability Type: Dash, Buff, Damage",
                    "Range/Radius: 45/20",
                    "Cost: 70 mana",
                    "Cooldown: 15 seconds"
                ]
            },
            {
                "name": "Ultimate  - Across The Sky",
                "description": "Apollo rides his chariot across the sky, choosing when to land, dealing damage every .15s for .6s as he lands. Enemies hit by the last tick of the landing will also be knocked up.",
                "imageURL": require("../assets/images/Apollo_ability_4.png"),
                "notes": [
                    "Apollo is immune to crowd control while channeling and untargetable, but not invulnerable while in the air.",
                    "Won't go on cooldown if Apollo dies before taking off.",
                    "Deals up to 280/380/480/580/680 (+100% of your Physical Power) damage and costs up to 1560/1780/2000/2220/2440 mana for the full duration (44s regardless of remaining mana).",
                    "If current mana is lower than the cost, Apollo will land automatically at the nearest valid point near the targeter.",
                    "Damage per Tick: 70/95/120/145/170 (+25% of your Physical Power)",
                    "Ability Type: Circle, Knockup, Damage",
                    "Range/Radius: 60/20",
                    "Cost: 20 mana + 35/40/45/50/55 mana per second",
                    "Cooldown: 110 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Arachne",
        "Attributes": {
            "Title:": "The Weaver",
            "Pantheon:": "Greek",
            "Type:": "Melee,Physical",
            "Class:": "Assassin",
            "Pros:": "High Single Target Damage, Great Jungler",
            "Difficulty:": "Average",
            "Release date:": "May 31, 2012",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Arachne voicelines",
            "Voice actor:": "Colleen Clinkenbeard",
            "Health:": "445 (+79)",
            "Mana:": "210 (+41)",
            "Speed:": "375 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+2%)",
            "Damage:": "38 (+ 2.2)+ 100% of Physical Power",
            "Progression:": ".5/1/1x damage and swing time",
            "Physical:": "13 (+3)",
            "Magical:": "23 (+1.3)",
            "HP5:": "9 (+0.67)",
            "MP5:": "4.8 (+0.46)",
            "imageURL": require("../assets/images/Arachne.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Predator",
                "description": "Arachne's Basic Attacks gain 1.25% Physical damage for every 5% of a target's missing Health.",
                "imageURL": require("../assets/images/Arachne_ability_0.png"),
                "notes": [
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Venomous Bite",
                "description": "Upon activation, Arachne's next Basic Attack within 5s does additional damage and infects the target with Venom, dealing damage over time, lowering their healing received and healing Arachne every 0.5s for 3s.",
                "imageURL": require("../assets/images/Arachne_ability_1.png"),
                "notes": [
                    "Deals a total of 110/183/256/329/402 (+83% of your Physical Power) damage and heals 48/90/132/174/216 health.",
                    "Initial Damage: 50/75/100/125/150 (+35% of your Physical Power)",
                    "Damage per Tick: 10/18/26/34/42 (+8% of your Physical Power)",
                    "Healing Reduction: 40%",
                    "Healing per Tick: 8/15/22/29/36",
                    "Ability Type: Buff, Damage",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 15/14/13/12/11 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Cocoon",
                "description": "Arachne spindles her webbing, increasing her Attack Speed for 4s. If 3 enhanced Basic Attacks hit the same target, that target is Stunned and have their Cooldowns increased.",
                "imageURL": require("../assets/images/Arachne_ability_2.png"),
                "notes": [
                    "Attack Speed: 20/30/40/50/60%",
                    "Stun Duration: 1/1.1/1.2/1.3/1.4s",
                    "Cooldown Increase: 2s",
                    "Ability Type: Buff, Stun",
                    "Cost: 70 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Web",
                "description": "Arachne shoots a line of Web forward. She is Immune to Slows and moves faster on Web. If the Web reaches max range a Web trap will spawn. Enemy gods who walk through the trap or get hit by the projectile are Slowed by 15%, revealed to Arachne, leave a trail of Web behind them, and are attacked by Pet Broodlings. Arachne can only have 3 Web traps or projectiles active at a time.",
                "imageURL": require("../assets/images/Arachne_ability_3.png"),
                "notes": [
                    "Enemies are revealed to Arachne for 8s.",
                    "The projectile also stops at the first enemy hit and on contact with walls.",
                    "Broodlings will follow their target even if they leave their vision range.",
                    "Cleansing the slow won't remove the web trail effect.",
                    "Placing a web trap after reaching the limit will destroy the oldest one placed.",
                    "Broodlings attack once per second, have a maximum duration of 11s and don't remove backdoor protections from towers and phoenixes.",
                    "Slow Duration: 4/4.5/5/5.5/6s",
                    "Movement Speed: 40%",
                    "Broodlings: 2/2/2/2/3",
                    "Broodling Damage: 20/30/40/50/60 (+20% of your Physical Power) per hit",
                    "Web Lifetime: 240s",
                    "Ability Type: Line, Slow, Damage",
                    "Range: 45",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 14/13.5/13/12.5/12 seconds"
                ]
            },
            {
                "name": "Ultimate  - Night Crawler",
                "description": "Arachne flips up to her infinite web, hanging upside down above the lane and increasing her movement speed. She may leap off the web to deal damage to all enemies in the target area and create a large web around the target area. The web area provides the same slow to enemies and benefit to Arachne as her Web Trail. Arachne may activate Ability 1 and 2 while running on this web.",
                "imageURL": require("../assets/images/Arachne_ability_4.png"),
                "notes": [
                    "Arachne cannot move through walls while on her web but she can leap down through them.",
                    "The web area's effect is the same as the web trap's trail and does not stack.",
                    "Arachne is immune to crowd control and untargetable while using this ability.",
                    "Has a range of 50.",
                    "Damage: 150/250/350/450/550 (110% of your Physical Power)",
                    "Duration on Web: 5s",
                    "Movement Speed: 40%",
                    "Web Radius: 25ft",
                    "Ability Type: Circle, Slow, Damage",
                    "Radius: 15",
                    "Cost: 100 mana",
                    "Cooldown: 90/85/80/75/70 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Ares",
        "Attributes": {
            "Title:": "God of War",
            "Pantheon:": "Greek",
            "Type:": "Melee,Magical",
            "Class:": "Guardian",
            "Pros:": "High Crowd Control, High Defense",
            "Difficulty:": "Easy",
            "Release date:": "October 4, 2012",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Ares voicelines",
            "Voice actor:": "Jason Douglas",
            "Health:": "485 (+90)",
            "Mana:": "200 (+37)",
            "Speed:": "365 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "0.9 (+1.25%)",
            "Damage:": "40 (+ 4)+ 20% of Magical Power",
            "Progression:": "1/.75/1/1.25x damage and swing time",
            "Physical:": "20 (+3)",
            "Magical:": "27 (+1.3)",
            "HP5:": "8 (+0.67)",
            "MP5:": "4.6 (+0.42)",
            "imageURL": require("../assets/images/Ares.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Blessed Presence",
                "description": "Each completed aura item that Ares owns grants him 40 additional Magical Power. Additionally, Ares gains bonus Basic Attack damage per level.",
                "imageURL": require("../assets/images/Ares_ability_0.png"),
                "notes": [
                    "Grants a total of 240 Magical Power when built all T3 aura items.",
                    "All items that grant this effect can be found here: Aura items.",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Shackles",
                "description": "Chains extend from Ares' shield, doing damage to all enemies in its path. Hitting a god shackles them to Ares, Cripples them, preventing movement abilities, dealing the same damage every second while slowing them by 15% and buffing Ares. While shackled, Ares can fire another chain for free within 2s. Jungle Camps take an extra +40% damage.",
                "imageURL": require("../assets/images/Ares_ability_1.png"),
                "notes": [
                    "Deals up to 80/160/240/320/400 (+75% of your Magical Power) damage per shackle with all 3 dealing up to 240/480/720/960/1200 (+180% of your Magical Power) damage to a single target, extending the cripple/slow duration to 12s, grants up to 45% movement speed from 3 shackled gods and deals 98/126/154/182/210 (+21% of your Magical Power) damage to Jungle minions.",
                    "The shackles can go through walls and are lost if either Ares or the shackled enemy move further than 65 units.",
                    "Minion Damage: 70/90/110/130/150 (+15% of your Magical Power)",
                    "God Damage per Tick: 20/40/60/80/100 (+15% of your Magical Power)",
                    "Speed Buff per Target Shackled: 15%",
                    "Duration: 4s",
                    "Max Shackles: 3",
                    "Ability Type: Line, Cripple, Damage",
                    "Range: 55",
                    "Cost: 70/75/80/85/90 mana",
                    "Cooldown: 15/14.5/14/13.5/13 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Bolster Defenses",
                "description": "Ares strengthens the defenses of himself and all nearby allies for 6s, granting Basic Attack Damage, Protections, HP5, and reducing Crowd Control durations. For each shackled enemy, the Protection Buffs are increased.",
                "imageURL": require("../assets/images/Ares_ability_2.png"),
                "notes": [
                    "Grants 41/46/51/56/61 Protections at max stacks.",
                    "Shackling targets after use will still grant additional protections.",
                    "The CC Reduction only affects crowd control applied after activation.",
                    "Cooldown begins as soon as it's been used.",
                    "Protections: 20/25/30/35/40",
                    "CC Reduction: 30%",
                    "Basic Attack Damage: 0/5/10/15/20",
                    "Shackle Bonus: 7",
                    "HP5: 25/30/35/40/45",
                    "Ability Type: Circle, Buff",
                    "Radius: 35",
                    "Cost: 40/45/50/55/60 mana",
                    "Cooldown: 15 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Searing Flesh",
                "description": "Flames pour forth from Ares' shield, engulfing enemies in a cone in front of him causing damage every .5s for 4s. Ares is immune to Knockback for the duration.",
                "imageURL": require("../assets/images/Ares_ability_3.png"),
                "notes": [
                    "Enemy minions hit are slightly knocked back with each tick.",
                    "Deals up to 120/160/200/240/280 (+64% of your Magical Power) +8/8/16/16/24% max health damage to gods and +32% max health damage to minions.",
                    "Won't go into cooldown until the effect ends.",
                    "Damage per Tick: 15/20/25/30/35 (+8% of your Magical Power)",
                    "% Max Health per Tick (Gods): 1/1/2/2/3%",
                    "% Max Health per Tick (Minions): 4%",
                    "Ability Type: Cone, Damage",
                    "Range: 35",
                    "Cost: 55/60/65/70/75 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "Ultimate  - No Escape",
                "description": "Ares throws chains out to all enemy gods in an area around him, gaining Crowd Control immunity and Damage Mitigation. All enemies hit by the chains are pulled to Ares after 2.5s, taking damage and are Stunned.",
                "imageURL": require("../assets/images/Ares_ability_4.png"),
                "notes": [
                    "Chains and pulls targets through walls.",
                    "Ares suffers a 30% Movement Speed Slow while channeling.",
                    "Dying while channeling it will cancel the effect and put it on cooldown.",
                    "Damage: 200/275/350/425/500 (+40% of your Magical Power)",
                    "Stun: 1s",
                    "Damage Mitigation: 20%",
                    "Ability Type: Circle, Stun, Damage",
                    "Radius: 35",
                    "Cost: 80/85/90/95/100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Artemis",
        "Attributes": {
            "Title:": "Goddess of the Hunt",
            "Pantheon:": "Greek",
            "Type:": "Ranged,Physical",
            "Class:": "Hunter",
            "Pros:": "High Single Target Damage",
            "Difficulty:": "Average",
            "Release date:": "May 31, 2012",
            "Favor:": "575",
            "Gems:": "200",
            "Voicelines:": "Artemis voicelines",
            "Voice actor:": "Brina Palencia",
            "Health:": "480 (+78)",
            "Mana:": "205 (+34)",
            "Speed:": "365 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.95 (+1.7%)",
            "Damage:": "30 (+ 2.5)+ 100% of Physical Power",
            "Progression:": "None",
            "Physical:": "12 (+3)",
            "Magical:": "23 (+1.3)",
            "HP5:": "8 (+0.68)",
            "MP5:": "4.4 (+0.25)",
            "imageURL": require("../assets/images/Artemis.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Still Target",
                "description": "Artemis deals 15% increased Basic Attack damage to gods and 30% to minions who are afflicted by Crowd Control.",
                "imageURL": require("../assets/images/Artemis_ability_0.png"),
                "notes": [
                    "Does not include knockbacks/knockups, blinds or grabs.",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Transgressor's Fate",
                "description": "Artemis places a trap on the ground. Enemy gods coming within 5 units of her traps activate them, Rooting, Crippling, and revealing the enemy god while dealing damage every second for 3s.",
                "imageURL": require("../assets/images/Artemis_ability_1.png"),
                "notes": [
                    "Placing a trap after reaching the limit will destroy the oldest one placed.",
                    "Targets can take damage from multiple traps at the same time.",
                    "The last tick of damage is dealt after the animation and root/cripple effect are over (only with no DR stacks).",
                    "Deals a total of 105/144/183/222/261 (+90% of your Physical Power) damage per trap and all 4 dealing a total of 420/576/732/888/1044 (+360% of your Physical Power) damage.",
                    "Damage per Tick: 35/48/61/74/87 (+30% of your Physical Power)",
                    "Root: 2s",
                    "Max Traps: 4",
                    "Ability Type: Circle, Crowd Control, Damage",
                    "Range/Radius: 40/5",
                    "Cost: 45 mana",
                    "Cooldown: 14/13/12/11/10 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Vengeful Assault",
                "description": "Artemis attacks at a furious pace, increasing her Attack and Movement Speed significantly. Additionally, Artemis cleanses herself of slows and becomes immune to Slows for 0.6s when activated.",
                "imageURL": require("../assets/images/Artemis_ability_2.png"),
                "notes": [
                    "Attack Speed: 40/50/60/70/80%",
                    "Movement Speed: 25%",
                    "Duration: 3/3.5/4/4.5/5s",
                    "Ability Type: Buff",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Suppress the Insolent",
                "description": "Artemis fires a volley into a ground target, suppressing all of her enemies. Enemies caught within the volley are damaged and are Slowed.",
                "imageURL": require("../assets/images/Artemis_ability_3.png"),
                "notes": [
                    "Damage: 100/150/200/250/300 (+75% of your Physical Power)",
                    "Slow: 25%",
                    "Slow Duration: 2s",
                    "Ability Type: Circle, Slow, Damage",
                    "Range/Radius: 55/15",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 9 seconds"
                ]
            },
            {
                "name": "Ultimate  - Calydonian Boar",
                "description": "Artemis summons the great Calydonian Boar on her enemies, doing damage to the nearest enemy god and Stunning them, and itself. The boar is immune until it hits the first god and then continues to charge other gods for its lifetime. Artemis is also immune to Crowd Control for 1.5s.",
                "imageURL": require("../assets/images/Artemis_ability_4.png"),
                "notes": [
                    "Has a warmup time of 0.7s and a 40 degree cone in its targeter; the boar will prioritize gods within it.",
                    "The Boar chooses a new target every 0.6s and if no gods are near it, it will basic attack minions instead, doing 22/31/40/49/58 (+18% of your Physical Power) damage.",
                    "Enemies can kill the boar after it becomes vulnerable, to despawn it earlier. It will also despawn if Artemis dies.",
                    "The boar has 350/450/550/650/750 health, 40/50/60/70/80 protections, doesn't remove backdoor protections from towers and phoenixes and procs item effects.",
                    "Damage: 150/220/290/360/430 (+90% of your Physical Power)",
                    "Stun: 1.1/1.2/1.3/1.4/1.5s",
                    "Boar Lifetime: 6s",
                    "Ability Type: Circle, Stun, Damage",
                    "Radius: 60",
                    "Cost: 80/90/100/110/120 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Artio",
        "Attributes": {
            "Title:": "The Bear Goddess",
            "Pantheon:": "Celtic",
            "Type:": "Melee,Magical",
            "Class:": "Guardian",
            "Pros:": "High Crowd Control, High Sustain",
            "Difficulty:": "Average",
            "Release date:": "August 1, 2017",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Artio voicelines",
            "Voice actor:": "Hetty Abbott",
            "Health:": "500 (+95)",
            "Mana:": "210 (+39)",
            "Speed:": "365 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+1.2%)",
            "Damage:": "38 (+ 1.8)+ 20% of Magical Power",
            "Progression:": "1x damage and swing time",
            "Physical:": "20 (+3.2)",
            "Magical:": "27 (+1.3)",
            "HP5:": "8 (+0.9)",
            "MP5:": "4.6 (+0.43)",
            "imageURL": require("../assets/images/Artio.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Decompose",
                "description": "Enemy gods hit by Artio's Druid or Bear damaging abilities will begin to decompose. This effect decreases their Physical and Magical Protections. This effect stacks.",
                "imageURL": require("../assets/images/Artio_ability_0.png"),
                "notes": [
                    "Applies up to 12% Protection reduction.",
                    "Protections Debuff Per Stack: 3%",
                    "Max Stacks: 4",
                    "Duration: 6s",
                    "Ability Type: Debuff"
                ]
            },
            {
                "name": "1st Ability  - Energy Surge (Maul Prey)",
                "description": "Druid: Artio pulses out a strong wave of energy that damages enemies. She will heal herself and allies within 65 units for each enemy god hit by this ability.Bear Form: Artio slashes twice with her claws, damaging enemies with each swipe.",
                "imageURL": require("../assets/images/Artio_ability_1.png"),
                "notes": [
                    "Druid: Artio pulses out a strong wave of energy that damages enemies. She will heal herself and allies within 65 units for each enemy god hit by this ability.\nBear Form: Artio slashes twice with her claws, damaging enemies with each swipe.",
                    "Maul Prey can deal up to 80/140/200/260/320 (+60% of your Magical Power) damage.",
                    "Druid Damage: 70/105/140/175/210 (+35% of your Magical Power)",
                    "Druid Heal: 40/60/80/100/120",
                    "Bear Damage Per Swipe: 40/70/100/130/160 (+30% of your Magical Power)",
                    "Ability Type: Cone, Heal, Damage (Cone, Damage)",
                    "Range: 25",
                    "Cost: 40/45/50/55/60 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Entangling Vines (Ferocious Roar)",
                "description": "Druid Form: Artio creates a thicket of vines around herself that cripples enemy gods and decreases their Magical or Physical Power as long as they are in the area. Bear Form: Artio lets out a ferocious roar that Stuns all nearby enemies and increases her own Physical and Magical Protections for 4s.",
                "imageURL": require("../assets/images/Artio_ability_2.png"),
                "notes": [
                    "Entangling Vines won't go into cooldown until the effect ends.",
                    "Entangling Vines also persists through death.",
                    "Druid Area Duration: 4/4.5/5/5.5/6s",
                    "Druid Power Debuff: 9/10.5/12/13.5/15%",
                    "Bear Stun Duration: 1/1.1/1.2/1.3/1.4s",
                    "Bear Self Buff: 25/30/35/40/45 Protections",
                    "Ability Type: Circle, Cripple (Circle, Stun)",
                    "Radius: 20",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 15 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Life Tap (Heavy Charge)",
                "description": "Druid Form: Artio channels for 2s, draining the life from enemies. While channeling she deals damage up to 5 times and heals herself up to 5 times. Each hit increasingly Slows enemies and enemies hit all 5 times are Rooted for 1s.Bear Form: Artio charges forward at an increased movement speed for 3s. Enemies she charges through take damage and are Slowed for 2s.",
                "imageURL": require("../assets/images/Artio_ability_3.png"),
                "notes": [
                    "Druid Form: Artio channels for 2s, draining the life from enemies. While channeling she deals damage up to 5 times and heals herself up to 5 times. Each hit increasingly Slows enemies and enemies hit all 5 times are Rooted for 1s.\nBear Form: Artio charges forward at an increased movement speed for 3s. Enemies she charges through take damage and are Slowed for 2s.",
                    "Life Tap deals damage and heals every 0.4 seconds while the slow from the ability last 1s and refreshes per tick.",
                    "Life Tap deals up to 75/150/225/300/375 (+75% of your Magical Power) damage, heals up to 50/75/100/125/150 health and slows up to 40%.",
                    "Artio moves 100% faster while using Heavy Charge.",
                    "Druid Damage Per Hit: 15/30/45/60/75 (+15% of your Magical Power)",
                    "Druid Heal Per Hit: 10/15/20/25/30",
                    "Druid Slow: 10%",
                    "Bear Damage: 75/120/165/210/255 (+55% of your Magical Power)",
                    "Bear Slow: 30%",
                    "Ability Type: Line, Crowd Control, Damage (Dash, Damage)",
                    "Range: 55",
                    "Cost: 55 mana",
                    "Cooldown: 15 seconds"
                ]
            },
            {
                "name": "Ultimate  - Shapeshift",
                "description": "Active: Artio Shapeshifts between her Druid stance and Bear stance.Passive: Every time Artio hits at least 1 enemy with an ability she gains 1 stack of Invigoration. Invigoration stacks increase her Movement Speed and MP5. Stacks last 6s, and stack up to 8 times.",
                "imageURL": require("../assets/images/Artio_ability_4.png"),
                "notes": [
                    "Active: Artio Shapeshifts between her Druid stance and Bear stance.\nPassive: Every time Artio hits at least 1 enemy with an ability she gains 1 stack of Invigoration. Invigoration stacks increase her Movement Speed and MP5. Stacks last 6s, and stack up to 8 times.",
                    "Provides a total of 8/12/16/20/24% Movement Speed and 16/32/48/64/80 MP5 with max Invigoration stacks.",
                    "Artio starts in druid stance and respawns in whatever stance she was currently in.",
                    "Movement Speed Per Stack: 1/1.5/2/2.5/3%",
                    "MP5 Per Stack: 2/4/6/8/10",
                    "Ability Type: Buff",
                    "Cost: 0 mana",
                    "Cooldown: 1 second"
                ]
            }
        ]
    },
    {
        "Name": "Athena",
        "Attributes": {
            "Title:": "Goddess of Wisdom",
            "Pantheon:": "Greek",
            "Type:": "Melee,Magical",
            "Class:": "Guardian",
            "Pros:": "High Crowd Control, High Defense",
            "Difficulty:": "Easy",
            "Release date:": "June 5, 2013",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Athena voicelines",
            "Voice actor:": "Lindsey Alena",
            "Health:": "500 (+100)",
            "Mana:": "190 (+34)",
            "Speed:": "365 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+1.2%)",
            "Damage:": "35 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "1/1/2x damage and swing time, hitting in an AoE on the final blow",
            "Physical:": "20 (+3.2)",
            "Magical:": "27 (+1.3)",
            "HP5:": "8 (+0.8)",
            "MP5:": "4.6 (+0.42)",
            "imageURL": require("../assets/images/Athena.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Reach",
                "description": "After using an ability Athena's next Basic Attack is ranged, passes through and hits all enemies, and deals 50% increased damage to the first enemy hit. Reach's damage will trigger Basic Attack Item Effects, but not Ability ones.",
                "imageURL": require("../assets/images/Athena_ability_0.png"),
                "notes": [
                    "The ranged basic attack counts as an AoE attack and thus only benefits from 33% of total Lifesteal.",
                    "The ranged basic attack also doesn't incur the basic attack movement penalty.",
                    "On-hit effects are only applied to the first enemy hit.",
                    "Ability Type: Ranged Basic, Buff",
                    "Range: 55"
                ]
            },
            {
                "name": "1st Ability  - Preemptive Strike",
                "description": "Athena powers up for a dash. While dashing, Athena will pass through minions, stop and hit the first enemy god she encounters, dealing damage. If she hits an enemy, Athena gains one stack (max 3), reducing the next source of Basic Attack damage from any enemy god that hits her. Athena may also gain these stacks by hitting an enemy god with Reach, once per attack.",
                "imageURL": require("../assets/images/Athena_ability_1.png"),
                "notes": [
                    "Athena is knockback immune while dashing.",
                    "Has a 1s delay time before bringing out the targeter.",
                    "Basic Attacks against Athena with a block stack deal 40% damage.",
                    "Damage: 80/130/180/230/280 (+50% of your Magical Power)",
                    "Basic Attack Mitigation: 60%",
                    "Ability Type: Dash, Damage",
                    "Range: 55",
                    "Cost: 60/70/80/90/100 mana",
                    "Cooldown: 15 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Confound",
                "description": "Athena releases a shockwave of power from her shield, Taunting enemy gods and decreasing their Attack Speed as she forces them to fight or chase her.",
                "imageURL": require("../assets/images/Athena_ability_2.png"),
                "notes": [
                    "Taunt Duration: 1.0/1.25/1.5/1.75/2.0s",
                    "Damage: 40/65/90/115/140 (+20% of your Magical Power)",
                    "Attack Speed Slow: 20/22.5/25/27.5/30%",
                    "Ability Type: Cone, Taunt, Damage",
                    "Range: 35",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 18 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Shield Wall",
                "description": "Athena summons a group of Athenian warriors who do damage and Slow upon arrival. After 2s they strike again, dealing additional damage and Slowing.",
                "imageURL": require("../assets/images/Athena_ability_3.png"),
                "notes": [
                    "Can deal up to 140/245/350/455/560 (+100% of your Magical Power) damage.",
                    "The Slow refreshes per hit.",
                    "Initial Damage: 70/110/150/190/230 (+50% of your Magical Power)",
                    "Secondary Damage: 70/135/200/265/330 (+50% of your Magical Power)",
                    "Slow: 15%",
                    "Ability Type: Circle, Damage",
                    "Radius: 15",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 16/15.5/15/14.5/14 seconds"
                ]
            },
            {
                "name": "Ultimate  - Defender of Olympus",
                "description": "Athena picks a single allied god anywhere in the world, and launches herself up into the air, landing next to that god 3.6 seconds later. During that 3.6 seconds, both Athena and the allied god gain Damage Mitigation, and the allied god also gains Movement Speed. Enemies nearby when Athena lands take damage.",
                "imageURL": require("../assets/images/Athena_ability_4.png"),
                "notes": [
                    "If the target dies while channeling, Athena will land at her current location instead.",
                    "Athena gains immunity from crowd control effects after she has selected a friendly god to fly to. The immunity ends after landing.",
                    "If the selected god enters a state where they're either untargetable, banished or at an invalid location, Athena will land underneath or at the target's last valid location.",
                    "Damage: 330/405/480/555/630 (+90% of your Magical Power)",
                    "Mitigation: 10/12.5/15/17.5/20%",
                    "Movement Speed: 10/12.5/15/17.5/20%",
                    "Ability Type: Teleport, Buff, Damage",
                    "Radius: 20",
                    "Cost: 80/90/100/110/120 mana",
                    "Cooldown: 120 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Atlas",
        "Attributes": {
            "Title:": "Titan of the Cosmos",
            "Pantheon:": "Greek",
            "Type:": "Melee,Magical",
            "Class:": "Guardian",
            "Pros:": "High Crowd Control, High Defense",
            "Difficulty:": "Easy",
            "Release date:": "December 14, 2021",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Atlas voicelines",
            "Voice actor:": "Bob Carter",
            "Health:": "510 (+100)",
            "Mana:": "190 (+35)",
            "Speed:": "370 (+0)",
            "Range:": "16 (+0)",
            "Attack/Sec:": "0.95 (+1.2%)",
            "Damage:": "37 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "1.25/1.25/1.25 damage and swing time, hitting in an AoE on the final blow.",
            "Physical:": "20 (+3.4)",
            "Magical:": "27 (+1.3)",
            "HP5:": "8 (+0.8)",
            "MP5:": "5 (+0.4)",
            "imageURL": require("../assets/images/Atlas.png")
        },
        "Abilities": [
            {
                "name": "Passive  - The Astrolabe",
                "description": "As Atlas takes damage from Gods or when he deals damage with his Basic Attacks or Abilities, he accumulates 1.25 Energy in his Astrolabe. Minions provide 1/10th of the Energy. When he reaches 20 Energy his next Basic Attack has 1.5x damage, 1.5s swing time, and deals bonus damage in an area in front of him. Gods hit are Trembled for 2s while minions are stunned. Atlas can store up to 30 Energy.",
                "imageURL": require("../assets/images/Atlas_ability_0.png"),
                "notes": [
                    "The empowered basic attack deals 160 Bonus Damage at level 20.",
                    "Provides 0.125 energy when dealing/taking damage to/from minions.",
                    "The empowered basic attack is spent even if no enemies were hit by it.",
                    "The empowered basic attack counts as two hits on enemy wards, player-made deployables, triggers basic attack item effects and benefit from only 33% Lifesteal.",
                    "Empowered Bonus Damage: 8 * Level",
                    "Ability Type: Area Melee Basic, Tremble",
                    "Radius: 15"
                ]
            },
            {
                "name": "1st Ability  - Unburden",
                "description": "Atlas throws his Astrolabe to a target location, damaging and slowing enemies where it lands. While deployed, his Basic Attack will cause an explosion at the target area. This explosion deals 50% damage to Minions and costs 5 Mana to use. After 5s or when he re-fires this ability, the Astrolabe will return to him. Atlas' second ability changes based on whether his Astrolabe is deployed or held.",
                "imageURL": require("../assets/images/Atlas_ability_1.png"),
                "notes": [
                    "The Basic Explosion deals up to 143 damage per hit to gods and 71.5 damage to minions (29 to gods and 14.5 to minions at level 1) at level 20, can trigger item effects for 50% damage and healing and benefit from only 33% Lifesteal.",
                    "Can cost up to 130/135/140/145/150 mana from the initial cast and the maximum possible (13 total) basic attacks with 2.5% Attack Speed.",
                    "Atlas' animations change while the Astrolabe is deployed.",
                    "Can be refired any time, even while under crowd control or dead.",
                    "Damage: 50/85/120/155/190 (+40% of your Magical Power)",
                    "Slow: 20/22.5/25/27.5/30%",
                    "Slow Duration: 2s",
                    "Basic Explosion: 23 + 6 Per Level",
                    "Ability Type: Circle, Slow, Damage",
                    "Range/Radius: 50/25",
                    "Cost: 65/70/75/80/85 mana",
                    "Cooldown: 14/13/12/11/10 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Gravity Pull",
                "description": "Atlas pulls enemies towards his Astrolabe. Enemy gods who are too close get pulled into the Astrolabe. If Atlas is holding the Astrolabe he becomes immune to knockups, and enemies who get pulled into the Astrolabe get held in front of Atlas. After a brief delay, the held targets get launched in the direction Atlas is facing. If Atlas has thrown the Astrolabe, enemies who get pulled into the Astrolabe will get held at the Astrolabe’s location before being launched towards Atlas.",
                "imageURL": require("../assets/images/Atlas_ability_2.png"),
                "notes": [
                    "Can deal up to 100/160/220/280/340 (+70% of your Magical Power) damage on both versions of the ability.",
                    "The pull occurs 1s after activation and the throw occurs 1.25s after whether the Astrolabe is held or not.",
                    "This ability cannot pull/throw enemies through walls.",
                    "Atlas suffers a 20% Movement Speed slow while using both versions of the ability.",
                    "Has a grab range of 15 and 30 for throw when the Astrolabe is held and 25 to targets outside the center and full CC range of 15 when the Astrolabe is deployed.",
                    "Interrupting the channel of this ability while active will not go on cooldown.",
                    "Pull Damage: 50/80/110/140/170 (+35% of your Magical Power)",
                    "Launch Damage: 50/80/110/140/170 (+35% of your Magical Power)",
                    "Ability Type: Cone, Crowd Control, Damage",
                    "Range: 35",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 16 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Kinetic Charge",
                "description": "Atlas charges forward, damaging minions and cleansing himself of slows. Each allied god he charges near will have their burdens removed, cleansing them of any current slows and increasing their movement speed. While Atlas is charging, he is immune to slows and knockups. When Atlas collides with an enemy god he will release accumulated burdens in an explosion, slowing enemies in a 15 unit radius. For every burden accumulated, the slow is increased by 25% up to a maximum of 75%.",
                "imageURL": require("../assets/images/Atlas_ability_3.png"),
                "notes": [
                    "Has a buff radius of 25 and maximum dash duration of 3s.",
                    "Atlas can turn freely with an increased turn radius during the dash.",
                    "Damage: 80/130/180/230/280 (+40% of your Magical Power)",
                    "Movement Speed: 25/27.5/30/32.5/35%",
                    "Min Slow: 25%",
                    "Max Slow: 75%",
                    "Ability Type: Dash, Buff, Damage",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 16/15.5/15/14.5/14 seconds"
                ]
            },
            {
                "name": "Ultimate  - Gamma - Ray Burst",
                "description": "Atlas tears the sky asunder and calls forth a Gamma-Ray Burst. Enemies in this area are hit every 0.5s and gain a stack of Radiation. Radiation can stack up to 5/5/6/6/7 times and lowers the enemy's Protections and Power. After 5s or upon re-fire the Gamma-Ray Burst will focus in power and begin traveling across the battleground. Enemies hit by this focused ray take heavier damage and gain Focused Radiation, lowering Protections and Power equal to 3 stacks of Radiation.",
                "imageURL": require("../assets/images/Atlas_ability_4.png"),
                "notes": [
                    "The focused ray has an initial radius of 30 while decreasing in size as it travels down to a minimum of 20 and range of 700.",
                    "Deals up to 370/530/690/850/1010 (+140% of your Magical Power) damage, reduces up to 40/40/45/45/50% Protections and 24/24/27/27/30% Power from the AoE and the focused ray.",
                    "The debuff lasts 5s and the duration is refreshed per tick.",
                    "The focused ray will travel in the direction Atlas is currently facing upon refiring the ability.",
                    "Won't go into cooldown until the focused ray disappears.",
                    "Can be refired any time, even while under crowd control or dead.",
                    "Damage: 25/35/45/55/65 (+10% of your Magical Power)",
                    "Protection Reduction: 5%",
                    "Power Reduction: 3%",
                    "Focused Damage: 120/180/240/300/360 (+40% of your Magical Power)",
                    "Ability Type: Circle, Debuff, Damage",
                    "Range/Radius: 55/30",
                    "Cost: 60/70/80/90/100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Awilix",
        "Attributes": {
            "Title:": "Goddess of the Moon",
            "Pantheon:": "Maya",
            "Type:": "Melee,Physical",
            "Class:": "Assassin",
            "Pros:": "High Single Target Damage, High Mobility",
            "Difficulty:": "Hard",
            "Release date:": "December 17, 2014",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Awilix voicelines",
            "Voice actor:": "Bryn Apprill",
            "Health:": "475 (+77)",
            "Mana:": "240 (+38)",
            "Speed:": "370 (+0)",
            "Range:": "16 (+0)",
            "Attack/Sec:": "1 (+1.89%)",
            "Damage:": "38 (+ 2.16)+ 100% of Physical Power",
            "Progression:": "1/0.75/1.25x damage. Range of 16",
            "Physical:": "13 (+3)",
            "Magical:": "23 (+1.3)",
            "HP5:": "10 (+0.68)",
            "MP5:": "3.9 (+0.46)",
            "imageURL": require("../assets/images/Awilix.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Initiative",
                "description": "If Awilix has not taken or dealt damage in the last 5s and she strikes an enemy first, she increases her Physical Power for a short duration.",
                "imageURL": require("../assets/images/Awilix_ability_0.png"),
                "notes": [
                    "Physical Power Increase: 30% for 4s",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Summon Suku",
                "description": "Awilix mounts her Panther Suku, gaining movement speed but decreasing strafe speed. Awilix may leap off of Suku to deal damage to all enemies in the target area.Canceling this ability before leaping will not trigger its Cooldown.",
                "imageURL": require("../assets/images/Awilix_ability_1.png"),
                "notes": [
                    "Awilix mounts her Panther Suku, gaining movement speed but decreasing strafe speed. Awilix may leap off of Suku to deal damage to all enemies in the target area.\nCanceling this ability before leaping will not trigger its Cooldown.",
                    "Canceling it won't refund the mana cost.",
                    "Cannot use relics nor place wards but can use potions while mounted.",
                    "Activates \"on ability cast\" effects even if its cancelled.",
                    "Damage: 80/135/190/245/300 (+80% of your Physical Power)",
                    "Movement Speed: 30%",
                    "Strafe Cap: 275",
                    "Ability Type: Circle, Buff, Damage",
                    "Range/Radius: 55/15",
                    "Cost: 30/35/40/45/50 mana",
                    "Cooldown: 15 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Feather Step",
                "description": "Awilix flips over the last enemy she hit within 1.5s, Rooting, Crippling, and dealing damage as she passes over them. The damage dealt is modified based on the next attack in Awilix's Basic Attack progression.If the next attack is her third attack, then she also hits all targets in the area around her.",
                "imageURL": require("../assets/images/Awilix_ability_2.png"),
                "notes": [
                    "Awilix flips over the last enemy she hit within 1.5s, Rooting, Crippling, and dealing damage as she passes over them. The damage dealt is modified based on the next attack in Awilix's Basic Attack progression.\nIf the next attack is her third attack, then she also hits all targets in the area around her.",
                    "Awilix is briefly untargetable while in the air.",
                    "Deals 75/127.5/180/232.5/285 (+75% of your Physical Power) damage with the second attack from the progression and 100/170/240/310/380 (+100% of your Physical Power) damage with the third.",
                    "Cannot be cast without one target hit.",
                    "The root from this ability is not affected by diminishing returns.",
                    "If this ability collides with a wall Awilix won't flip the full length",
                    "Damage: 50/85/120/155/190 (+50% of your Physical Power)",
                    "Attack Progression Bonus: 1x, 1.5x, 2x",
                    "Root and Cripple Duration: 0.6s",
                    "Ability Type: Circle, Crowd Control, Damage",
                    "Range/Radius: 30/15",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 8 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Moonlight Charge",
                "description": "Suku comes to Awilix's aid, rushing forward and damaging all enemies. If hit from the side or behind, enemies are also knocked up into the air.",
                "imageURL": require("../assets/images/Awilix_ability_3.png"),
                "notes": [
                    "Damage: 90/140/190/240/290 (+80% of your Physical Power)",
                    "Ability Type: Line, Knockup, Damage",
                    "Range: 70",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "Ultimate  - Gravity Surge",
                "description": "Awilix calls upon the power of the moon, immediately pulling to her the closest enemy god she is facing that is either leaping or knocked up into the air. The target god takes damage and is Stunned for 0.8s when they land.Awilix is then bathed in moonlight, gaining bonus Attack Speed and Physical Power, along with protection against Roots, Slows, and Knockbacks for 6s.",
                "imageURL": require("../assets/images/Awilix_ability_4.png"),
                "notes": [
                    "Awilix calls upon the power of the moon, immediately pulling to her the closest enemy god she is facing that is either leaping or knocked up into the air. The target god takes damage and is Stunned for 0.8s when they land.\nAwilix is then bathed in moonlight, gaining bonus Attack Speed and Physical Power, along with protection against Roots, Slows, and Knockbacks for 6s.",
                    "Can also pull targets through walls.",
                    "Can also pull any leaps that travel underground.",
                    "Awilix must be aiming within 90 degrees of her target to pull them.",
                    "Damage: 200/250/300/350/400 (+80% of your Physical Power)",
                    "Attack Speed: 50/55/60/65/70%",
                    "Physical Power: 20/30/40/50/60",
                    "Ability Type: Target, Crowd Control, Damage",
                    "Range: 75",
                    "Cost: 100 mana",
                    "Cooldown: 80/75/70/65/60 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Baba Yaga",
        "Attributes": {
            "Title:": "Witch of the Woods",
            "Pantheon:": "Slavic",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "High Area Damage",
            "Difficulty:": "Average",
            "Release date:": "April 21, 2020",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Baba Yaga voicelines",
            "Voice actor:": "Jenn Wong",
            "Health:": "400 (+73)",
            "Mana:": "280 (+50)",
            "Speed:": "365 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.95 (+1%)",
            "Damage:": "35 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "11 (+2.7)",
            "Magical:": "23 (+1.3)",
            "HP5:": "8 (+0.5)",
            "MP5:": "5 (+0.6)",
            "imageURL": require("../assets/images/Baba_Yaga.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Creeping Cabin",
                "description": "Baba Yaga's Cabin accumulates up to 100 essence over time, when it moves, and if enemy gods get too close. Baba Yaga can approach the Cabin and use this essence to gain evolving item stacks. Items with a low stack count take more energy. If Baba Yaga has no stacking item this essence heals Baba Yaga for 0.6% max health per tick.",
                "imageURL": require("../assets/images/Baba_Yaga_ability_0.png"),
                "notes": [
                    "The cabin has unit collision but projectiles can pass through it.",
                    "The cabin will prioritize healing Baba Yaga if it does not have enough essence to stack a low stack count item.",
                    "Heal ticks occur every 0.25s and certain stacking items have a unique tick duration.",
                    "The cabin will follow Baba Yaga if she is at least 120 units away from it.",
                    "Item Stack Cost: 500 / Item Max Stacks",
                    "Heal Cost: 4",
                    "Ability Type: Buff",
                    "Range: 55"
                ]
            },
            {
                "name": "1st Ability  - Wild Witchcraft",
                "description": "Baba Yaga throws forward magic imbued with chaotic qualities. The magic will travel in the path of a random shape (Left Corner, Right Corner, Split, or Oval) and leave behind a random magical field on the ground it flew over for 4s. The fields can boost friendly Protections, boost friendly Movement Speed, lower enemy Movement Speed, or Silence enemies.",
                "imageURL": require("../assets/images/Baba_Yaga_ability_1.png"),
                "notes": [
                    "The passive meter reveals what shape and effect the next cast will have.",
                    "The oval pattern always travels in a counter-clockwise direction.",
                    "The buff/debuff duration is refreshed per time a unit moves into the field.",
                    "Each variation and shape can be seen here.",
                    "Damage: 100/150/200/250/300 (+70% of your Magical Power)",
                    "Protections: 15/20/25/30/35 for 2s",
                    "Movement Speed: 20/22.5/25/27.5/30% for 2s",
                    "Slow: 20/22.5/25/27.5/30% for 2s",
                    "Ability Type: Area, Crowd Control, Damage",
                    "Width: 60, 60, 90, 60",
                    "Cost: 70/75/80/85/90 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Baba's Brew",
                "description": "Baba Yaga throws together random ingredients to brew a Potion. Each Eye of Newt increases the Potion's Damage by 7.5%. Each Dragon Scale adds a 12.5% slow to enemies hit for 2.5s. Each Wolf Tooth adds a 7.5% Attack Speed slow and Power reduction to enemies hit for 5s. Baba Yaga can store a single Potion in her consumable slot refiring/canceling this ability. She can pull it out at any time to throw it.",
                "imageURL": require("../assets/images/Baba_Yaga_ability_2.png"),
                "notes": [
                    "Has a potion brew pre-fire time of 0.2s and post-fire time of 0.1s while both the potion swap pre-fire and post-fire have a time of 0.1s.",
                    "For information on the consumable item see:  Baba's Brew",
                    "Damage: 85/120/155/190/225 (+70% of your Magical Power)",
                    "Ingredient Count: 3/3/4/4/5",
                    "Ability Type: Circle Crowd Control, Damage",
                    "Range/Radius: 60/15",
                    "Cost: 60 mana",
                    "Cooldown: 10 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Blast Off!",
                "description": "Baba Yaga crawls inside her Mortar for protection. While inside the mortar she gains Damage Mitigation, Knockup Protection, and begins to build up explosive magic. After 1s the magic explodes, launching Baba Yaga and her Mortar in the direction she is facing. Enemies near the Mortar when it explodes take damage.",
                "imageURL": require("../assets/images/Baba_Yaga_ability_3.png"),
                "notes": [
                    "The damage mitigation and knockup protection effects are applied as soon as the ability is used.",
                    "If there is no valid leaping location, Baba Yaga will leap to the closest valid point near the targetter.",
                    "Damage: 80/125/170/215/260 (+85% of your Magical Power)",
                    "Damage Mitigation: 35%",
                    "Ability Type: Circle, Leap, Damage",
                    "Range: 40/20",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "Ultimate  - Home Sweet Home",
                "description": "Baba Yaga calls down her Cabin, causing it to crash onto her and launch nearby enemies away. Baba Yaga commands the cabin for up to 8s, using it as a protective shield to create and throw 4 Witchfire Bolts from the inside. When the thrown Witchfire lands, it explodes dealing damage to enemies in the area while leaving behind a creeping patch of fire that chases nearby enemies. Enemies caught in the creeping fire take burn damage every 0.4s.",
                "imageURL": require("../assets/images/Baba_Yaga_ability_4.png"),
                "notes": [
                    "Has a minimum firing range of 4, maximum of 65, Cabin crash of 15, knockback strength of 400 and a pre-fire time of 0.2s.",
                    "Baba Yaga is immune to crowd control, movement penalties and can move through minions for the duration.",
                    "Each bolt lasts 3s and can deal up to 142/202/262/322/382 (+90% of your Magical Power) damage with all 4 and the cabin crash dealing a total of 668/953/1238/1523/1808 (+410% of your Magical Power) damage.",
                    "The shield doesn't protect from execute effects.",
                    "Landing Damage: 100/145/190/235/280 (+50% of your Magical Power)",
                    "Burst Damage: 70/100/130/160/190 (+30% of your Magical Power)",
                    "Burn Damage: 12/17/22/27/32 (+10% of your Magical Power)",
                    "Shield Health: 160/215/270/325/380 (+30% of your Magical Power)",
                    "Ability Type: Circle, Buff, Damage",
                    "Radius: 15",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Bacchus",
        "Attributes": {
            "Title:": "God of Wine",
            "Pantheon:": "Roman",
            "Type:": "Melee,Magical",
            "Class:": "Guardian",
            "Pros:": "High Crowd Control, High Defense",
            "Difficulty:": "Average",
            "Release date:": "November 19, 2012",
            "Favor:": "(Free) 0",
            "Gems:": "(Free) 0",
            "Voicelines:": "Bacchus voicelines",
            "Voice actor:": "Chris Rager",
            "Health:": "495 (+86)",
            "Mana:": "200 (+40)",
            "Speed:": "365 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "0.88 (+1%)",
            "Damage:": "37 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "19 (+3)",
            "Magical:": "27 (+1.3)",
            "HP5:": "8 (+0.8)",
            "MP5:": "4.8 (+0.4)",
            "imageURL": require("../assets/images/Bacchus.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Drunk - O - Meter",
                "description": "Bacchus loves the drink and as Bacchus drinks from his jug, he becomes more intoxicated, gaining Buffs when he gets Tipsy and Smashed. Bacchus also celebrates when he kills an enemy god, giving him 10% on his meter.",
                "imageURL": require("../assets/images/Bacchus_ability_0.png"),
                "notes": [
                    "The Drunk-O-Meter drains once per second and resets after Bacchus respawns.",
                    "Bacchus becomes Tipsy when the Drunk-O-Meter is at least 30% full and Smashed at 60% or more.",
                    "Tipsy: Gain 10 Magical Power and 5% Damage Mitigation",
                    "Smashed: Gain 30 Magical Power and 10% Damage Mitigation",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Chug",
                "description": "Bacchus takes a drink from his jug, healing him and giving him additional Buffs.",
                "imageURL": require("../assets/images/Bacchus_ability_1.png"),
                "notes": [
                    "Can be used without putting a level in it. 40% Drunk-O-Meter without the healing, protections and power buffs, costs 20 Mana.",
                    "Drunk-O-Meter: 40%",
                    "Protections: 15/20/25/30/35",
                    "Magical Power: 0/7/14/21/28/35",
                    "Duration: 6s",
                    "Heal: 0/22/29/36/43/50",
                    "Ability Type: Buff",
                    "Cost: 20 mana",
                    "Cooldown: 8 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Belly Flop",
                "description": "Bacchus jumps into the air and, not so gracefully, comes slamming to the ground belly first, knocking all enemies into the air and dealing damage. If he is Tipsy, all enemies are also Slowed after they land.",
                "imageURL": require("../assets/images/Bacchus_ability_2.png"),
                "notes": [
                    "Damage: 80/125/170/215/260 (+70% of your Magical Power)",
                    "Slow: 20%",
                    "Slow Duration: 2s",
                    "Ability Type: Circle, Leap, Damage",
                    "Range/Radius: 55/15",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 15 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Belch of the Gods",
                "description": "Bacchus lets out an obnoxiously loud belch, doing damage every .5s for 2s and reducing enemy healing. Lane Minions take a small amount of extra damage. If he is Tipsy, enemies are Stunned for 1s. Bacchus is immune to knockback for the duration.",
                "imageURL": require("../assets/images/Bacchus_ability_3.png"),
                "notes": [
                    "Enemy minions hit are slightly knocked back with each tick.",
                    "Can deal up to 100/160/220/280/340 (+60% of your Magical Power) damage and up to 12/16/20/24/28 bonus damage (112/176/240/304/368 total) to lane minions.",
                    "Damage per Tick: 25/40/55/70/85 (+15% of your Magical Power)",
                    "Minion Damage per Tick: 3/4/5/6/7",
                    "Stun: 1.1/1.2/1.3/1.4/1.5s",
                    "Healing Reduction: 40%",
                    "Healing Reduction Duration: 5s",
                    "Ability Type: Cone, Stun, Damage",
                    "Range: 35",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 14/13.5/13/12.5/12 seconds"
                ]
            },
            {
                "name": "Ultimate  - Intoxicate",
                "description": "Bacchus smashes his jug of wine on the ground, intoxicating all nearby enemies and doing damage. If he is Smashed, Bacchus also gains a Magical Power Buff because of his anger over his lost wine!",
                "imageURL": require("../assets/images/Bacchus_ability_4.png"),
                "notes": [
                    "Due to the increased Magical Power gain when Bacchus is Smashed, he gains a total of 50/60/70/80/90 Magical Power for the duration.",
                    "Damage: 230/300/370/440/510 (+60% of your Magical Power)",
                    "Intoxication Debuff Duration: 6s",
                    "Magical Power Buff: 20/30/40/50/60",
                    "Buff Duration: 5s",
                    "Ability Type: Circle, Intoxicate, Damage",
                    "Radius: 30",
                    "Cost: 95 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Bakasura",
        "Attributes": {
            "Title:": "The Great Devourer",
            "Pantheon:": "Hindu",
            "Type:": "Melee,Physical",
            "Class:": "Assassin",
            "Pros:": "High Single Target Damage",
            "Difficulty:": "Easy",
            "Release date:": "July 20, 2012",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Bakasura voicelines",
            "Voice actor:": "Brad M. Jackson",
            "Health:": "455 (+78)",
            "Mana:": "200 (+39)",
            "Speed:": "370 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+1.6%)",
            "Damage:": "38 (+ 2.2)+ 100% of Physical Power",
            "Progression:": "None",
            "Physical:": "13 (+2.8)",
            "Magical:": "23 (+1.3)",
            "HP5:": "9 (+0.68)",
            "MP5:": "4.8 (+0.46)",
            "imageURL": require("../assets/images/Bakasura.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Insatiable Hunger",
                "description": "Bakasura's attack and movement speed temporarily increases for each enemy that he kills.",
                "imageURL": require("../assets/images/Bakasura_ability_0.png"),
                "notes": [
                    "Gains up to 21% Attack Speed and 15% Movement Speed.",
                    "Attack Speed per Stack: 7%",
                    "Movement Speed per Stack: 5%",
                    "Buff Duration: 10s",
                    "Max Stacks: 3",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Take Down",
                "description": "Bakasura leaps to his ground target location, dealing damage to all enemies in the area, increases the damage they take from all sources by 10% and lowers their healing received for 3s.",
                "imageURL": require("../assets/images/Bakasura_ability_1.png"),
                "notes": [
                    "Damage: 100/160/220/280/340 (+60% of your Physical Power)",
                    "Damage Taken Increase: 10%",
                    "Healing Reduction: 40%",
                    "Duration: 3s",
                    "Ability Type: Circle, Leap, Damage",
                    "Range/Radius: 55/15",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Eat Minion",
                "description": "Bakasura grabs a minion and devours it, healing himself, restoring Mana, reducing His 1st and 3rd ability cooldowns, and gaining a Protections Buff. Large Jungle monsters must be at 33% Health to be eaten, but will provide 2 minions toward Regurgitate. Up to 6 minions can be stored for Regurgitate.",
                "imageURL": require("../assets/images/Bakasura_ability_2.png"),
                "notes": [
                    "Has a postfire of .2s.",
                    "Heal: 60/115/170/225/280",
                    "Mana Restore: 60/65/70/75/80",
                    "Cooldown Decrease: 1.5s",
                    "Protections: 10/15/20/25/30",
                    "Protections Duration: 10s",
                    "Ability Type: Target, Buff",
                    "Range: 12",
                    "Cost: 40 mana",
                    "Cooldown: 10/9.5/9/8.5/8 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Butcher Blades",
                "description": "Bakasura passively gains Physical Power. When activated, he gains additionaltrue damageon each strike for the duration.",
                "imageURL": require("../assets/images/Bakasura_ability_3.png"),
                "notes": [
                    "Bakasura passively gains Physical Power. When activated, he gains additional true damage on each strike for the duration.",
                    "Can deal up to 150/375/600/825/1050 true damage with max (2.5%) attack speed.",
                    "Passive Physical Power: 10/15/20/25/30",
                    "True Damage: 10/25/40/55/70",
                    "Duration: 6s",
                    "Ability Type: Buff",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "Ultimate  - Regurgitate",
                "description": "Bakasura regurgitates all of the minions consumed by his Eat Minion ability at his ground target location that Slows, Cripples, and damages enemy players every 0.5s. This area lasts for 6s. Bakasura's Basic Attacks become cone attacks and he is immune to Crowd Control for a short duration. Bakasura is able to use Eat Minion on his regurgitated minions.",
                "imageURL": require("../assets/images/Bakasura_ability_4.png"),
                "notes": [
                    "Has a projectile speed of 138 and cone attacks have a range of 25 as well as benefit from only 33% Lifesteal.",
                    "The AoE can deal up to 240/300/360/420/480 (+120% of your Physical Power) damage.",
                    "The minions are melee units with 1.5 attack speed, 400 health and inherit Bakasura's penetration.",
                    "Minions have a maximum lifetime of 8s, despawn when Bakasura dies and don't remove backdoor protections from towers and phoenixes.",
                    "Damage: 20/25/30/35/40 (+10% of your Physical Power)",
                    "Slow: 20/25/30/35/40%",
                    "Cone Attack Duration: 6/7/8/9/10s",
                    "CC Immunity Duration: 1.5s",
                    "Minion Damage: 17 (+15% of your Physical Power)",
                    "Ability Type: Circle, Buff, Damage",
                    "Range/Radius: 70/25",
                    "Cost: 80/90/100/110/120 mana",
                    "Cooldown: 90/85/80/75/70 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Bake Kujira",
        "Attributes": {
            "Title:": "Yokai of Despair",
            "Pantheon:": "Japanese",
            "Type:": "Melee,Magical",
            "Class:": "Guardian",
            "Pros:": "High Defense",
            "Difficulty:": "Average",
            "Release date:": "December 12, 2023",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Bake Kujira voicelines",
            "Voice actor:": "Jimmie Yamaguchi",
            "Health:": "500 (+100)",
            "Mana:": "200 (+38)",
            "Speed:": "370 (+0)",
            "Range:": "14 (+0)",
            "Attack/Sec:": "1.25 (+0%)",
            "Damage:": "18 (+ 1.8)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "21 (+3.2)",
            "Magical:": "27 (+1.3)",
            "HP5:": "7 (+0.8)",
            "MP5:": "4.6 (+0.42)",
            "imageURL": require("../assets/images/Bake_Kujira.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Curse of the Ghost Whale",
                "description": "Enemies that hard Crowd Control Bake Kujira are Cursed. If an enemy is already Cursed, the duration is refreshed and increases in strength. Bake Kujira converts Protections from Items and Abilities into Basic Attack damage and converts Attack Speed into Haste. His Basic Attacks do not benefit from Attack Speed and proc item hit effects for 50% damage and healing.",
                "imageURL": require("../assets/images/Bake_Kujira_ability_0.png"),
                "notes": [
                    "Bake Kujira's Basic Attacks benefit from only 33% Lifesteal and cannot go through walls.",
                    "Haste stacks up to 100% Attack Speed Conversion.",
                    "Curse has a duration of 5s.",
                    "Protections Conversion: 25%",
                    "Attack Speed Conversion: 1% Haste per 1% Attack Speed from Items or Abilities",
                    "Curse Application Cooldown: 10s",
                    "Ability Type: Debuff",
                    "Cooldown: 10s"
                ]
            },
            {
                "name": "1st Ability  - Rough Waters",
                "description": "Bake Kujira imbues himself with cursed energy. When activated, Bake Kujira gains increased Basic Attack range and reduced Movement Penalty when Basic Attacking. He also gains a stack of Protections for each enemy hit with his Basic Attacks.",
                "imageURL": require("../assets/images/Bake_Kujira_ability_1.png"),
                "notes": [
                    "Stacks up to 8/16/24/32/40 Protections.",
                    "Can also stack when hitting towers and phoenixes.",
                    "Basic Attack Radius: 20",
                    "Protections per stack: 1/2/3/4/5",
                    "Max Stacks: 8",
                    "Movement Penalty Reduction: 50%",
                    "Duration: 5s",
                    "Ability Type: Buff",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 14/13.5/13/12.5/12s"
                ]
            },
            {
                "name": "2nd Ability  - Sonic Wave",
                "description": "Bake Kujira sends out a wave of cursed energy. Enemies hit are slowed, damaged, and Cursed. Enemies that are Cursed deal reduced damage for 6s. If a Cursed enemy is hit by this ability, the slow is doubled and their Curse becomes amplified. Bake Kujira’s Basic Attacks reduce this ability’s Cooldown by 1s when hitting an enemy god and 0.1s when hitting an enemy minion.",
                "imageURL": require("../assets/images/Bake_Kujira_ability_2.png"),
                "notes": [
                    "Cursed enemies are slowed by 30%.",
                    "The CDR can proc multiple times when hitting more than one enemy while on cooldown.",
                    "Damage: 70/120/170/220/270 (+30% of your Magical Power)",
                    "Curse Damage Reduction: 6/7/8/9/10%",
                    "Amplified Curse Damage Reduction: 12/14/16/18/20%",
                    "Slow: 15% for 2s",
                    "Ability Type: Cone, Damage",
                    "Range: 40",
                    "Cost: 40/45/50/55/60 mana",
                    "Cooldown: 10s"
                ]
            },
            {
                "name": "3rd Ability  - Twisting Dive",
                "description": "Bake Kujira gathers power then dashes straight ahead, damaging enemies around him. Enemies hit by the dash take additional damage and are stunned and pushed to Bake Kujira’s ending location. Bake Kujira is immune to Knockback while using this ability.",
                "imageURL": require("../assets/images/Bake_Kujira_ability_3.png"),
                "notes": [
                    "The splash has a radius of 20.",
                    "Can deal up to 115/190/265/340/415 (+50% of your Magical Power) damage.",
                    "Splash Damage: 55/85/115/145/175 (+20% of your Magical Power)",
                    "Dash Damage: 60/105/150/195/240 (+30% of your Magical Power)",
                    "Stun: 1.5s",
                    "Ability Type: Line, Dash, Damage",
                    "Range: 40",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 14s"
                ]
            },
            {
                "name": "Ultimate  - Yokai's Lament",
                "description": "Bake Kujira begins to sing for the next 5s, gaining bonus Basic Attack Damage, increasing his Basic Attack range to 20, and distorting a large area around himself with the sound waves. Enemies between 20 and 50 units away gain stacks of time dilation every 0.25s, causing all of their actions to happen more slowly. Leaving the time dilation area will cause the stacks of time dilation to decay over time. Enemies within 20 units are not time dilated, but instead take increased damage.",
                "imageURL": require("../assets/images/Bake_Kujira_ability_4.png"),
                "notes": [
                    "Stacks up to 40% time dilation.",
                    "Time dilation stacks decay every 0.25s after leaving the outer AoE.",
                    "The debuff AoE persists after Bake Kujira dies.",
                    "Time Dilation debuff: 10% slower per stack",
                    "Max Stacks: 4",
                    "Bonus Basic Attack Damage: 20/30/40/50/60%",
                    "Nearby Enemy Damage Increase: 6/7/8/9/10%",
                    "Ability Type: Circle, Buff",
                    "Inner/Outer Radius: 20/50",
                    "Cost: 100 mana",
                    "Cooldown: 110/105/100/95/90s"
                ]
            }
        ]
    },
    {
        "Name": "Baron Samedi",
        "Attributes": {
            "Title:": "God of Life and Death",
            "Pantheon:": "Voodoo",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "High Crowd Control, High Sustain, Medium Area Damage",
            "Difficulty:": "Hard",
            "Release date:": "June 26, 2018",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Baron Samedi voicelines",
            "Voice actor:": "Edward Bosco",
            "Health:": "429 (+80)",
            "Mana:": "300 (+44)",
            "Speed:": "360 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.9 (+0.8%)",
            "Damage:": "34 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "18 (+2.6)",
            "Magical:": "23 (+1.3)",
            "HP5:": "7 (+0.6)",
            "MP5:": "5 (+0.45)",
            "imageURL": require("../assets/images/Baron_Samedi.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Hysteria",
                "description": "Baron shares Baron's Brew, a powerful restorative chalice, with his allies from the Item Shop. Enemies hit by Baron will have Hysteria applied to them. Baron's abilities interact with Hysteria to provide bonus effects. Targets at Max Hysteria take 20% additional damage from Baron Samedi.",
                "imageURL": require("../assets/images/Baron_Samedi_ability_0.png"),
                "notes": [
                    "Basic Attacks apply 5 stacks, each ability applies a unique amount of stacks and stacks up to 70.",
                    "Hysteria drains once every 0.5 seconds to enemies not damaged by Baron in the last 5s.",
                    "For information on the consumable item see:  Baron's Brew",
                    "Ability Type: Debuff"
                ]
            },
            {
                "name": "1st Ability  - Vivid Gaze",
                "description": "Baron Samedi animates two skulls, both which briefly warm up before firing two beams of voodoo magic that damage enemies. The beams crossover wherever Baron Samedi was aiming. Enemies hit by both beams take 25% damage on the second hit. If the enemy god hit is above 30 Hysteria, their Physical Power, Magical Power, and Attack Speed are reduced for 3/3.5/4/4.5/5s.",
                "imageURL": require("../assets/images/Baron_Samedi_ability_1.png"),
                "notes": [
                    "Deals 112.5/162.5/212.5/262.5/325 (+87.5% of your Magical Power) damage to and applies up to 30 hysteria to targets hit by both beams.",
                    "The power and attack speed debuff only stack once.",
                    "Damage: 90/130/170/210/250 (+70% of your Magical Power)",
                    "Power Reduction: 30%",
                    "Attack Speed Reduction: 30%",
                    "Hysteria Per Hit: 15",
                    "Ability Type: Area, Debuff, Damage",
                    "Range: 60",
                    "Cost: 55/60/65/70/75 mana",
                    "Cooldown: 9 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Consign Spirits",
                "description": "Baron Samedi guides restless spirits to the ground and buries them. After a brief delay the ground erupts, damaging enemies standing in the area. Minions and jungle camps take an additional 25% damage. If an enemy god is hit, friendly spirits fly from the area and heal allies near the explosion or by Baron Samedi.If the enemy god hit is above 30 Hysteria the friendly spirit applies Slow Immunity for allies, and increases their Movement Speed for 3s.",
                "imageURL": require("../assets/images/Baron_Samedi_ability_2.png"),
                "notes": [
                    "Baron Samedi guides restless spirits to the ground and buries them. After a brief delay the ground erupts, damaging enemies standing in the area. Minions and jungle camps take an additional 25% damage. If an enemy god is hit, friendly spirits fly from the area and heal allies near the explosion or by Baron Samedi.\nIf the enemy god hit is above 30 Hysteria the friendly spirit applies Slow Immunity for allies, and increases their Movement Speed for 3s.",
                    "This ability only heals each ally once regardless of how many targets were hit.",
                    "Deals 87.5/156/225/284/362.5 (+87.5% of your Magical Power) damage to minions and jungle camps.",
                    "Damage: 70/125/180/235/290 (+70% of your Magical Power)",
                    "Flat Heal: 30/55/80/105/130",
                    "Missing Health Heal: 5%",
                    "Ground Speed: 25%",
                    "Hysteria Per Hit: 20",
                    "Ability Type: Circle, Buff, Damage",
                    "Range/Radius: 55/18",
                    "Cost: 60 mana",
                    "Cooldown: 13/12.5/12/11.5/11 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Wrap It Up",
                "description": "Baron Samedi throws his snake forward, wrapping any enemy god hit and dealing damage every .5s for 2.5s and applying a ramp to root. If a god hit is above 30 Hysteria, the snake will also lash out at nearby enemy gods who stand too close after 1s. Enemies hit by this are injected with venom that applies a ramp to root and deals the full damage over time immediately.",
                "imageURL": require("../assets/images/Baron_Samedi_ability_3.png"),
                "notes": [
                    "The DoT deals a total of 50/90/130/170/210 (+40% of your Magical Power) damage and applies up to 25 hysteria to the affected target and same to targets near the afflicted target with at least 30 hysteria.",
                    "Damage Per Tick: 10/18/26/34/42 (+8% of your Magical Power)",
                    "Slow Duration: 1.5s",
                    "Root Duration: 1s",
                    "Hysteria Per Hit: 5",
                    "Ability Type: Line, Crowd Control, Damage",
                    "Range/Radius: 60/25",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "Ultimate  - Life of the Party",
                "description": "Baron Samedi pulls the souls of the living towards his Coffin, becoming immune to Crowd Control and taking 50% reduced damage. Enemy gods within range are caught in a Vortex, dragging them towards the Coffin and taking damage every .33s. When an enemy god reaches the Coffin their soul is ripped out, causing them to be stunned, take a large amount of damage based on their maximum health and gain max Hysteria. This ability persists for 3.5s or until an enemy god is pulled to the Coffin. If targets being pulled are above 30 Hysteria, the pull strength is increased.",
                "imageURL": require("../assets/images/Baron_Samedi_ability_4.png"),
                "notes": [
                    "Baron Samedi suffers a 40% Movement Speed Slow while channeling.",
                    "Enemies will take burst damage/stunned if they're pulled to 8 units in front of Baron Samedi.",
                    "Deals up to 270/410/550/690/830 (+130% of your Magical Power) damage in addition to 10% of the enemy's maximum health and applies up to 50 Hysteria to targets being dragged towards the coffin without touching it.",
                    "Damage Per Tick: 17/24/31/38/45 (+8% of your Magical Power)",
                    "Damage On Hit: 100/170/240/310/380 (+50% of your Magical Power)",
                    "Max Health Damage: 10%",
                    "Stun: 1.5s",
                    "Hysteria Per Hit: 5",
                    "Ability Type: Cone, Vortex, Damage",
                    "Range: 60",
                    "Cost: 70/75/80/85/90 mana",
                    "Cooldown: 90/85/80/75/70 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Bastet",
        "Attributes": {
            "Title:": "Goddess of Cats",
            "Pantheon:": "Egyptian",
            "Type:": "Melee,Physical",
            "Class:": "Assassin",
            "Pros:": "High Single Target Damage",
            "Difficulty:": "Easy",
            "Release date:": "May 31, 2012",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Bastet voicelines",
            "Voice actor:": "Leah Clark",
            "Health:": "415 (+80)",
            "Mana:": "230 (+39)",
            "Speed:": "375 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+1.98%)",
            "Damage:": "37 (+ 2.21)+ 100% of Physical Power",
            "Progression:": "1/.7/1.3x damage",
            "Physical:": "12 (+2.9)",
            "Magical:": "24 (+1.3)",
            "HP5:": "9 (+0.72)",
            "MP5:": "4.4 (+0.25)",
            "imageURL": require("../assets/images/Bastet.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Nightstalker",
                "description": "Bastet gains Physical Lifesteal and Physical Ability Lifesteal when hitting enemies. Additionally enemy gods hit are revealed to Bastet for 6s.",
                "imageURL": require("../assets/images/Bastet_ability_0.png"),
                "notes": [
                    "Grants a total of 18% Physical and Ability Lifesteal against gods (6.6% at level 1) and 9% against minions (6.15% at level 1) at level 20.",
                    "Lifesteal: 6% + 0.6% per level against gods, 0.15% per level against minions",
                    "Ability Lifesteal: 6% + 0.6% per level against gods, 0.15% per level against minions",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Pounce",
                "description": "Bastet pounces to her target location, damaging enemies within the radius. For 4 seconds after pouncing, you can press the button again to pounce back to your initial location. Bastet moves 25% faster while in the return pounce state. Bastet may cancel this ability early to put it on cooldown.",
                "imageURL": require("../assets/images/Bastet_ability_1.png"),
                "notes": [
                    "Damage: 95/150/205/260/315 (+90% of your Physical Power)",
                    "Ability Type: Circle, Leap, Damage",
                    "Range/Radius: 55/20",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 14/13.5/13/12.5/12 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Razor Whip",
                "description": "Bastet swipes at her enemies, causing them to Bleed for damage every 0.66 seconds for the duration.",
                "imageURL": require("../assets/images/Bastet_ability_2.png"),
                "notes": [
                    "Each tick occurs at 0s, 0.66s, 1.33s and 2s and deals a total of 120/180/240/300/360 (+100% of your Physical Power) damage.",
                    "Damage per Tick: 30/45/60/75/90 (+25% of your Physical Power)",
                    "Duration: 2s",
                    "Ability Type: Cone, Damage",
                    "Range: 35",
                    "Cost: 40/45/50/55/60 mana",
                    "Cooldown: 10 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Ensnaring Claw",
                "description": "Bastet sends a cat forward at her enemies. If a cat finds an enemy it ensnares them and all enemies around them, damaging them and rooting them for .5s. The cat persists for 4s or until defeated, continuing to attack nearby enemies. The cats attacks will apply a 2s slow to the enemy.",
                "imageURL": require("../assets/images/Bastet_ability_3.png"),
                "notes": [
                    "The cat attacks once per second and refreshes the slow's duration with each attack.",
                    "The cat is immune until it hits an enemy or reaches max range.",
                    "Takes a total of 10 hits (minions only) to kill the cat.",
                    "The cat doesn't remove backdoor protections from towers and phoenixes.",
                    "Root Damage: 55/90/125/160/195 (+60% of your Physical Power)",
                    "Cat Damage: 20/25/30/35/40 (+30% of your Basic Attack Power)",
                    "Cat Hit Points: 2",
                    "Lane Minion Damage: 1 HP lost per 5 hits",
                    "Slow: 20%",
                    "Ability Type: Line, Root, Damage",
                    "Range/Radius: 70/10",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 16/15.5/15/14.5/14 seconds"
                ]
            },
            {
                "name": "Ultimate  - Huntress of Bast",
                "description": "Bastet becomes CC Immune and conjures a radiant projectile that travels forward in a line damaging and stunning the first enemy god hit. A Huntress of Bast appears near the hit target and a destination is marked at Bastet. The Huntress then picks up and carries the enemy hit to the marked location.On successful capture, a pool of quicksand is formed under the enemy creating a Vortex which drags targets toward the center and deals damage.",
                "imageURL": require("../assets/images/Bastet_ability_4.png"),
                "notes": [
                    "Bastet becomes CC Immune and conjures a radiant projectile that travels forward in a line damaging and stunning the first enemy god hit. A Huntress of Bast appears near the hit target and a destination is marked at Bastet. The Huntress then picks up and carries the enemy hit to the marked location.",
                    "On successful capture, a pool of quicksand is formed under the enemy creating a Vortex which drags targets toward the center and deals damage.",
                    "The melee capture range of 10 units in front of Bastet and the quicksand has a radius of 20.",
                    "Deals up to 280/370/460/550/640 (+180% of your Physical Power) damage to a target grabbed into the quicksand for the entire duration and/or up to 120/150/180/210/240 (+90% of your Physical Power) damage to enemies in the quicksand.",
                    "Can be fired through walls.",
                    "Initial Hit: 160/220/280/340/400 (+90% of your physical power)",
                    "Quicksand Damage: 20/25/30/35/40 (15% of your physical power) every 0.5s for 3s",
                    "Ability Type: Line, Crowd Control, Damage",
                    "Range: 100",
                    "Cost: 80/85/90/95/100 mana",
                    "Cooldown: 110/105/100/95/90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Bellona",
        "Attributes": {
            "Title:": "Goddess of War",
            "Pantheon:": "Roman",
            "Type:": "Melee,Physical",
            "Class:": "Warrior",
            "Pros:": "High Defense",
            "Difficulty:": "Average",
            "Release date:": "February 25, 2015",
            "Favor:": "(Free) 0",
            "Gems:": "(Free) 0",
            "Voicelines:": "Bellona voicelines",
            "Voice actor:": "Laura Post",
            "Health:": "490 (+93)",
            "Mana:": "220 (+35)",
            "Speed:": "375 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+1.2%)",
            "Damage:": "36 (+ 2)+ 100% of Physical Power",
            "Progression:": "Special (1/.5/1.5x damage and swing time)",
            "Physical:": "18 (+3)",
            "Magical:": "24 (+1.3)",
            "HP5:": "8 (+0.8)",
            "MP5:": "4.8 (+0.4)",
            "imageURL": require("../assets/images/Bellona.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Master of War",
                "description": "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks).",
                "imageURL": require("../assets/images/Bellona_ability_0.png"),
                "notes": [
                    "Grants +20 Protections and +12.5% Movement Speed at max stacks.",
                    "Cleaving (hammer) basic attacks only gain one stack regardless of how many enemies were hit.",
                    "Protections: 4 Protections per Stack",
                    "Movement Speed: +2.5% per Stack",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Shield Bash",
                "description": "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her.Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
                "imageURL": require("../assets/images/Bellona_ability_1.png"),
                "notes": [
                    "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her.",
                    "Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
                    "Sword and shield's Basic Attack progression is .5/1/1x damage and swing time.",
                    "Has a dash range of 25.",
                    "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
                    "Block Reflect: 30%",
                    "Slow: 20% for 2s",
                    "Ability Type: Dash, Slow, Damage",
                    "Range: 45",
                    "Cost: 60 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Bludgeon",
                "description": "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack.Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
                "imageURL": require("../assets/images/Bellona_ability_2.png"),
                "notes": [
                    "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack.\nBellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
                    "Hammer's Basic Attack progression is 1.5/1/1.5x damage and swing time, with each attacks hitting all enemies in melee range.",
                    "The spin attack's hitbox moves clockwise around Bellona.",
                    "Deals up to 105/195/285/375/465 (+85% of your Physical Power) damage to non-god sources and 125% bonus damage to the final god hit when hitting 5 gods with the overhand attack.",
                    "Spin Damage: 35/65/95/125/155 (+25% of your Physical Power)",
                    "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
                    "Slam Damage Increase: 25% per Enemy God hit",
                    "Ability Type: Circle, Damage",
                    "Range/Radius: 25/35",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 14/13/12/11/10 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Scourge",
                "description": "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
                "imageURL": require("../assets/images/Bellona_ability_3.png"),
                "notes": [
                    "Scourge's Basic Attack progression is 1/.5/1x damage and swing time and range of 16.",
                    "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
                    "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
                    "Healing: 20/24/28/32/36",
                    "Ability Type: Line, Disarm, Damage",
                    "Range: 55",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 18/17/16/15/14 seconds"
                ]
            },
            {
                "name": "Ultimate  - Eagle's Rally",
                "description": "Bellona plants a Roman flag, granting Protections and increased Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
                "imageURL": require("../assets/images/Bellona_ability_4.png"),
                "notes": [
                    "Has a damage/stun radius of 15.",
                    "Bellona is immune to crowd control while leaping.",
                    "Damage: 150/250/350/450/550 (+50% of your Physical Power)",
                    "Protections: 20/30/40/50/60",
                    "Physical Power: 20/30/40/50/60",
                    "Magical Power: 35/45/55/65/75",
                    "Flag Duration: 8s",
                    "Ability Type: Circle, Stun, Damage",
                    "Range/Radius: 50/40",
                    "Cost: 100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Cabrakan",
        "Attributes": {
            "Title:": "Destroyer of Mountains",
            "Pantheon:": "Maya",
            "Type:": "Melee,Magical",
            "Class:": "Guardian",
            "Pros:": "High Crowd Control, High Defense",
            "Difficulty:": "Average",
            "Release date:": "August 19, 2014",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Cabrakan voicelines",
            "Voice actor:": "Tyson Rinehart",
            "Health:": "490 (+90)",
            "Mana:": "200 (+38)",
            "Speed:": "365 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "0.9 (+1.2%)",
            "Damage:": "40 (+ 3)+ 20%% of Magical Power",
            "Progression:": "None",
            "Physical:": "23 (+3.5)",
            "Magical:": "27 (+1.3)",
            "HP5:": "8 (+0.75)",
            "MP5:": "8 (+0.8)",
            "imageURL": require("../assets/images/Cabrakan.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Shadow Zone",
                "description": "Cabrakan and nearby allies take 5% reduced damage.",
                "imageURL": require("../assets/images/Cabrakan_ability_0.png"),
                "notes": [
                    "The buff only stacks once regardless of how many Cabrakans are present.",
                    "Ability Type: Circle, Buff",
                    "Range: 30"
                ]
            },
            {
                "name": "1st Ability  - Seismic Crush",
                "description": "Cabrakan becomes enraged, increasing his movement speed. While active, Cabrakan gains 70% increased Attack Speed and his next successful Basic Attack will Stun with no diminishing returns and do bonus damage. Additionally, Cabrakan gains Haste and is immune to Slows and Roots while this ability is active.",
                "imageURL": require("../assets/images/Cabrakan_ability_1.png"),
                "notes": [
                    "The empowered basic attack also triggers item effects.",
                    "Has a buff duration of 5s.",
                    "Damage: 80/125/170/215/260 (+50% of your Magical Power)",
                    "Stun Duration: 1s",
                    "Movement Speed Increase: 15/20/25/30/35%",
                    "Ability Type: Stun, Damage",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Refraction Shield",
                "description": "Passive: As Cabrakan's shields take damage they store energy and gain Protection stacks.Active: Cabrakan slams his shields together creating a concussive blast and damaging enemies in front of him, granting him Mana per enemy hit. If his shields have the maximum number of Stacks then the enemy gods hit are Stunned. Stacks are removed.",
                "imageURL": require("../assets/images/Cabrakan_ability_2.png"),
                "notes": [
                    "Passive: As Cabrakan's shields take damage they store energy and gain Protection stacks.\nActive: Cabrakan slams his shields together creating a concussive blast and damaging enemies in front of him, granting him Mana per enemy hit. If his shields have the maximum number of Stacks then the enemy gods hit are Stunned. Stacks are removed.",
                    "Grants up to 20/25/30/35/40 Protections.",
                    "Damage: 80/135/190/245/300 (+50% of your Magical Power)",
                    "Stun Duration: 1.1/1.2/1.3/1.4/1.5s",
                    "Protections per Stack: 4/5/6/7/8 Max 5 Stacks",
                    "Mana: 10/14/18/22/26",
                    "Ability Type: Cone, Stun, Damage",
                    "Range: 20",
                    "Cost: 10 mana",
                    "Cooldown: 10 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Tremors",
                "description": "Cabrakan repeatedly slams the ground with his shields creating an earthquake and causing enemy gods around him to Tremble. Enemies in the earthquake also take damage and are caught in a Vortex which drags them towards Cabrakan. This ability can only be channeled for a maximum amount of 10s.",
                "imageURL": require("../assets/images/Cabrakan_ability_3.png"),
                "notes": [
                    "Deals one additional tick of damage on use.",
                    "Deals up to 420/630/840/1050/1260 (+840% of your Magical Power) damage and costs up to 400/600/800/1000/1200 mana.",
                    "Damage: 20/30/40/50/60 (+40% of your Magical Power) every 0.5s.",
                    "Ability Type: Circle, Tremble, Damage",
                    "Radius: 30",
                    "Cost: 20/30/40/50/60 mana every 0.5s.",
                    "Cooldown: 4 seconds"
                ]
            },
            {
                "name": "Ultimate  - Tectonic Shift",
                "description": "Cabrakan stomps the ground creating a wall of earth and a fissure that travels out in front of him and damages any enemies caught in its path. The walls may be destroyed if they take enough hits. Cabrakan may destroy his own walls with a single Basic Attack.",
                "imageURL": require("../assets/images/Cabrakan_ability_4.png"),
                "notes": [
                    "Has a width of 25.",
                    "The wall is made up of 5 individual segments and can last for up to 15s if not destroyed.",
                    "Damage: 150/250/350/450/550 (+60% of your Magical Power)",
                    "Hits to destroy: 3 hits",
                    "Ability Type: Area, Wall, Damage",
                    "Range: 35",
                    "Cost: 100 mana",
                    "Cooldown: 75 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Camazotz",
        "Attributes": {
            "Title:": "Deadly God of Bats",
            "Pantheon:": "Maya",
            "Type:": "Melee,Physical",
            "Class:": "Assassin",
            "Pros:": "High Sustain, Great Jungler",
            "Difficulty:": "Average",
            "Release date:": "October 11, 2016",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Camazotz voicelines",
            "Voice actor:": "Ricco Fajardo",
            "Health:": "440 (+78)",
            "Mana:": "240 (+35)",
            "Speed:": "375 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+2%)",
            "Damage:": "39 (+ 2.3)+ 100% of Physical Power",
            "Progression:": "1/1/1x damage and swing time; 3rd attack hits all enemies in the melee area",
            "Physical:": "11 (+3)",
            "Magical:": "23 (+1.3)",
            "HP5:": "8 (+0.67)",
            "MP5:": "4.4 (+0.3)",
            "imageURL": require("../assets/images/Camazotz.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Essence Drinker",
                "description": "Camazotz has a passive Essence Drinker bonus for Physical Lifesteal, Physical Ability Lifesteal, and Healing. Also, anytime a god dies they leave behind a pool of their essence in the spot they were slain. Camazotz may stand inside these pools to drink the essence every .5s, replenishing his Health and Mana.",
                "imageURL": require("../assets/images/Camazotz_ability_0.png"),
                "notes": [
                    "The pools are only visible to Camazotz and only one pool spawns per death regardless of how many Camazotz are present.",
                    "Each pool heals up to 10% Max Health and 20% Max Mana.",
                    "Can drink from multiple pools at one time.",
                    "Heal per drink: 1% Max Health",
                    "Mana per drink: 2% Max Mana",
                    "Drinks per pool: 10",
                    "Bonus Lifesteal: 4.5%",
                    "Bonus Healing: 3%",
                    "Ability Type: Buff",
                    "Radius: 10"
                ]
            },
            {
                "name": "1st Ability  - Screech",
                "description": "Camazotz screeches loudly and launches a sound wave that pierces through minions and deals damage.If the screech hits an enemy god, the sound wave will echo. If Camazotz is hit by an echo, his team gains vision of the god that was hit by screech for the next 15s and gains bonus Physical Power for the duration.",
                "imageURL": require("../assets/images/Camazotz_ability_1.png"),
                "notes": [
                    "Camazotz screeches loudly and launches a sound wave that pierces through minions and deals damage.\nIf the screech hits an enemy god, the sound wave will echo. If Camazotz is hit by an echo, his team gains vision of the god that was hit by screech for the next 15s and gains bonus Physical Power for the duration.",
                    "Each echo can bounce off walls up to 2 times and/or up to 4s before disappearing.",
                    "Damage: 100/145/190/235/280 (+85% of your Physical Power)",
                    "Echo Buff: 15/20/25/30/35 Physical Power",
                    "Ability Type: Line, Buff, Damage",
                    "Range: 70",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Vampire Bats",
                "description": "Camazotz commands a swarm of bats to fly out and attack a single target, damaging, slowing them by 40%, lowering their healing received for 3s and then carrying back a heal.If the target was a Buff Holder, Oracle, or Alpha Harpy, they will be marked and Camazotz will receive a heal as well as a stackable Vampirism buff that lasts 300s. Marked monsters will not provide Camazotz with another stack of Vampirism or an additional heal.",
                "imageURL": require("../assets/images/Camazotz_ability_2.png"),
                "notes": [
                    "Camazotz commands a swarm of bats to fly out and attack a single target, damaging, slowing them by 40%, lowering their healing received for 3s and then carrying back a heal.\nIf the target was a Buff Holder, Oracle, or Alpha Harpy, they will be marked and Camazotz will receive a heal as well as a stackable Vampirism buff that lasts 300s. Marked monsters will not provide Camazotz with another stack of Vampirism or an additional heal.",
                    "Deals 70/110/150/190/230 (+80% of your Physical Power) initial damage, then 5/10/15/20/25 (+5% of your Physical Power) damage every .5s for 3s dealing a total of 30/60/90/120/150 (+30% of your Physical Power) DoT damage.",
                    "Cleansing the slow won't remove the DoT.",
                    "Provides up to 6% Physical Lifesteal, Ability Lifesteal and Increased Healing at max stacks.",
                    "The buff persists through death.",
                    "Damage: 100/170/240/310/380 (+110% of your Physical Power)",
                    "Heal: 20/40/60/80/100",
                    "Healing Reduction: 40%",
                    "Buff per Stack: 2% Lifesteal, Ability Lifesteal, and Increased Healing",
                    "Max Buff Stacks: 3",
                    "Ability Type: Line, Slow, Damage",
                    "Range: 55",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 10 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Devour",
                "description": "Camazotz Leaps forward a short distance dealing damage on impact and healing himself per enemy hit.",
                "imageURL": require("../assets/images/Camazotz_ability_3.png"),
                "notes": [
                    "Damage: 80/140/200/260/320 (+75% of your Physical Power)",
                    "Heal Per Hit: 10/20/30/40/50",
                    "Ability Type: Cirlce, Leap, Damage",
                    "Range/Radius: 40/10",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 13 seconds"
                ]
            },
            {
                "name": "Ultimate  - Bat Out of Hell",
                "description": "Camazotz flies into the air for the next 4s. While flying, he may swoop forward to deal damage. He may do this up to 3 times, landing on the 3rd time. Hitting more than one enemy god in a single swoop will deal increased damage per god.",
                "imageURL": require("../assets/images/Camazotz_ability_4.png"),
                "notes": [
                    "Camazotz is immune to damage and crowd control for the duration.",
                    "The attacks go through player made walls but not through map walls.",
                    "Can deal up to 300/405/510/615/720 (+105% of your Physical Power) damage to a single target.",
                    "Each swoop can deal up to 75% increased damage when hitting 5 gods.",
                    "Damage Per Hit: 100/135/170/205/240 (+35% of your Physical Power)",
                    "Bonus Damage: 15% Per God",
                    "Ability Type: Line, Damage",
                    "Range: 35",
                    "Cost: 100 mana",
                    "Cooldown: 120/115/110/105/100 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Cerberus",
        "Attributes": {
            "Title:": "Warden of the Underworld",
            "Pantheon:": "Greek",
            "Type:": "Melee,Magical",
            "Class:": "Guardian",
            "Pros:": "Medium Crowd Control, Medium Area Damage",
            "Difficulty:": "Easy",
            "Release date:": "January 9, 2018",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Cerberus voicelines",
            "Voice actor:": "Bruce DuBose",
            "Health:": "490 (+95)",
            "Mana:": "200 (+35)",
            "Speed:": "360 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+1%)",
            "Damage:": "38 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "1/.8/.8x damage and swing time",
            "Physical:": "19 (+3)",
            "Magical:": "27 (+1.3)",
            "HP5:": "7 (+0.75)",
            "MP5:": "4.6 (+0.4)",
            "imageURL": require("../assets/images/Cerberus.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Spirit of Death",
                "description": "Any time an Enemy God within 40 units of Cerberus is healed, that healing is reduced by 40% and Cerberus receives 80% of the heal. Cerberus reduces all types of healing, and steals from all types except HP5. The amount stolen is based off the heals base effect, and does not include any increase or reduction applied.",
                "imageURL": require("../assets/images/Cerberus_ability_0.png"),
                "notes": [
                    "Heal Steal: 80%",
                    "Ability Type: Circle, Debuff",
                    "Radius: 40"
                ]
            },
            {
                "name": "1st Ability  - Paralyzing Spit",
                "description": "Cerberus's snake tail spits venom that passes through and damages Enemies. If Cerberus's dog heads are Alert, they then also spit venom when the ability is fired. Each head is alerted upon hitting an Enemy with a Basic Attack, and all are alerted after Ghastly Breath. Each projectile that hits the same target deals 20% less damage, but hitting an Enemy with all 4 Stuns them.",
                "imageURL": require("../assets/images/Cerberus_ability_1.png"),
                "notes": [
                    "Can deal up to 140/221/295/369/443 (+56% of your Magical Power) damage.",
                    "Can be fired through walls.",
                    "Damage: 50/75/100/125/150 (+20% of your Magical Power)",
                    "Stun Duration: 1.4/1.5/1.6/1.7/1.8s",
                    "Ability Type: Area, Stun, Damage",
                    "Range: 55",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 13/12.5/12/11.5/11 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Ghastly Breath",
                "description": "Each of Cerberus's 3 heads releases a cone of noxious breath in front of them, damaging all Enemies in range 7 times over 2.4s and reducing their Magical Protection up to three times. Enemies in the center of his breath are also Slowed up to three times. This attack immediately puts all three of Cerberus's heads on Alert for Paralyzing Spit.",
                "imageURL": require("../assets/images/Cerberus_ability_2.png"),
                "notes": [
                    "Deals up to 140/210/280/350/420 (+87.5% of your Magical Power) damage, reduces up to 15/24/33/42/51 protections and slows up to 24/27/30/33/36%.",
                    "Damage per Tick: 20/30/40/50/60 (+12.5% of your Magical Power)",
                    "Slow per Tick: 8/9/10/11/12%",
                    "Protection Reduction: 5/8/11/14/17",
                    "Slow Duration: 2s",
                    "Max Stacks: 3",
                    "Ability Type: Cone, Debuff, Damage",
                    "Range: 35",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Soul Expulsion",
                "description": "Cerberus leaps a short distance forward, dealing damage on impact and severing the souls of Enemies. These souls will not block Cerberus's attacks, and killing the souls heals Cerberus, and for each god soul killed, the cooldown of Soul Expulsion is reduced by 2s.",
                "imageURL": require("../assets/images/Cerberus_ability_3.png"),
                "notes": [
                    "The souls will follow Cerberus, play their fear animation and have a maximum duration of 10s.",
                    "The souls are also visible to other players except darken and more faded.",
                    "Damage: 80/120/160/200/240 (+60% of your Magical Power)",
                    "Soul Health: 50/75/100/125/150",
                    "Heal per Minion: 12/19/26/33/40",
                    "Heal per God: 20/40/60/80/100",
                    "Ability Type: Circle, Leap, Damage",
                    "Range/Radius: 55/15",
                    "Cost: 55 mana",
                    "Cooldown: 16 seconds"
                ]
            },
            {
                "name": "Ultimate  - Stygian Torment",
                "description": "Cerberus's haunting wail summons below him the souls of the damned, which then knockup all Enemy Gods into the air while stretching the link between their bodies and souls, Damaging them. This knockup can be cleansed. A short time later, Cerberus uses this link to pull the Enemies to him. This attack immediately put all three of Cerberus's heads on Alert for Paralyzing Spit.",
                "imageURL": require("../assets/images/Cerberus_ability_4.png"),
                "notes": [
                    "Has a postfire of 0.1s and a pull range of 25 units in front of Cerberus.",
                    "This ability damages enemies from behind a wall but can't pull gods through walls or player-made walls.",
                    "Cerberus becomes knockback/knockup immune for 1.2s after firing.",
                    "Damage: 180/255/330/405/480 (+55% of your Magical Power)",
                    "Ability Type: Circle, Crowd Control, Damage",
                    "Radius: 30",
                    "Cost: 90/95/100/105/110 mana",
                    "Cooldown: 100 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Chaac",
        "Attributes": {
            "Title:": "God of Rain",
            "Pantheon:": "Maya",
            "Type:": "Melee,Physical",
            "Class:": "Warrior",
            "Pros:": "High Sustain",
            "Difficulty:": "Average",
            "Release date:": "December 18, 2013",
            "Favor:": "(Free) 0",
            "Gems:": "(Free) 0",
            "Voicelines:": "Chaac voicelines",
            "Voice actor:": "Patrick Seitz",
            "Health:": "490 (+88)",
            "Mana:": "205 (+35)",
            "Speed:": "375 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+1.2%)",
            "Damage:": "39 (+ 2.1)+ 100% of Physical Power",
            "Progression:": "1/.5/1.5x damage",
            "Physical:": "18 (+3)",
            "Magical:": "24 (+1.3)",
            "HP5:": "7 (+0.8)",
            "MP5:": "4.7 (+0.39)",
            "imageURL": require("../assets/images/Chaac.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Overflow",
                "description": "After 5 successful Basic Attacks, the next ability Chaac uses costs no Mana and has its cooldown reduced by 2s.",
                "imageURL": require("../assets/images/Chaac_ability_0.png"),
                "notes": [
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Thunder Strike",
                "description": "Chaac throws his axe forward, damaging all enemies in a radius around its landing location. The axe remains idle in the ground for 5s or until another ability is used.",
                "imageURL": require("../assets/images/Chaac_ability_1.png"),
                "notes": [
                    "This ability no additional effects when Storm Call is used.",
                    "Damage: 100/160/220/280/340 (+75% of your Physical Power)",
                    "Ability Type: Circle, Damage",
                    "Range/Radius: 60/20",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 10 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Torrent",
                "description": "Chaac spins his axe around him, damaging all enemies, and gaining Protections for each enemy hit (max. 4). Gods hits provide 2 stacks.If his axe is out from Thunder Strike, he will first dash to the axe location, doing 50% base damage to enemies he passes through and then executing his spin attack. This dash can go through walls.",
                "imageURL": require("../assets/images/Chaac_ability_2.png"),
                "notes": [
                    "Chaac spins his axe around him, damaging all enemies, and gaining Protections for each enemy hit (max. 4). Gods hits provide 2 stacks.\nIf his axe is out from Thunder Strike, he will first dash to the axe location, doing 50% base damage to enemies he passes through and then executing his spin attack. This dash can go through walls.",
                    "Grants up to 20/40/60/80/100 Protections.",
                    "The dash deals 50/80/110/140/170 damage.",
                    "The spin's hitbox moves clockwise around Chaac.",
                    "Although this ability is classified as a dash, it actually has properties of a leap.",
                    "Damage: 100/160/220/280/340 (+70% of your Physical Power)",
                    "Protections: 5/10/15/20/25",
                    "Protection Duration: 6s",
                    "Ability Type: Circle, Teleport, Damage",
                    "Range: 20",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 13/12/11/10/9 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Rain Dance",
                "description": "Chaac summons a rainstorm around his current location for 6s. While it rains, he regains Health, and enemies are caught in the mud and have their Movement Speed, Attack Speed, and Power reduced.If his axe is out from Thunder Strike, a rainstorm will also spawn at that location. Enemies caught in the area of both rainstorms will have the Movement Slow and Attack Speed Reduction applied twice.",
                "imageURL": require("../assets/images/Chaac_ability_3.png"),
                "notes": [
                    "Chaac summons a rainstorm around his current location for 6s. While it rains, he regains Health, and enemies are caught in the mud and have their Movement Speed, Attack Speed, and Power reduced.\nIf his axe is out from Thunder Strike, a rainstorm will also spawn at that location. Enemies caught in the area of both rainstorms will have the Movement Slow and Attack Speed Reduction applied twice.",
                    "Heals a total of 96/156/216/276/336 health.",
                    "Has a radius of 30 at the location where Chaac's axe was deployed from Thunder Strike.",
                    "Can reduce up to 40/50/60/70/80% Movement and 30/35/40/45/50% Attack Speed if caught in both rainstorms.",
                    "Slow: 20/25/30/35/40%",
                    "Attack Speed Reduction: 15/17.5/20/22.5/25%",
                    "Power Reduction: 10%",
                    "Healing: 8/13/18/23/28 every 0.5s",
                    "Ability Type: Circle, Slow",
                    "Radius: 20",
                    "Cost: 75 mana",
                    "Cooldown: 15 seconds"
                ]
            },
            {
                "name": "Ultimate  - Storm Call",
                "description": "Chaac charges up his lightning axe for a short duration then unleashes a blast, Silencing, Knocking Up and damaging all enemies around him. While charging up, Chaac has Damage Mitigation and is immune to Crowd Control effects.",
                "imageURL": require("../assets/images/Chaac_ability_4.png"),
                "notes": [
                    "Has a charge-up time of 1s.",
                    "Damage: 300/360/420/480/540 (+120% of your Physical Power)",
                    "Silence Duration: 3s",
                    "Damage Mitigation: 50/55/60/65/70%",
                    "Ability Type: Circle, Crowd Control, Damage",
                    "Radius: 25",
                    "Cost: 80/90/100/110/120 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Chang'e",
        "Attributes": {
            "Title:": "Faerie of the Moon",
            "Pantheon:": "Chinese",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "High Sustain, High Mobility",
            "Difficulty:": "Average",
            "Release date:": "July 24, 2013",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Chang'e voicelines",
            "Voice actor:": "Chang'e: Trina NishimuraJade Rabbit: Ric Spiegel",
            "Health:": "464 (+84)",
            "Mana:": "310 (+48)",
            "Speed:": "355 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "1 (+0.95%)",
            "Damage:": "32 (+ 1.45)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "11 (+2.7)",
            "Magical:": "23 (+1.3)",
            "HP5:": "6 (+0.45)",
            "MP5:": "5.5 (+0.44)",
            "imageURL": require("../assets/images/Chang%27e.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Jade Rabbit",
                "description": "Chang'e can purchase/sell items from anywhere and her Jade Rabbit will fetch them. Only one item can be purchased/sold in this way at a time. Chang'e also gains +40% movement speed with no backpedal penalty when using her dances and her abilities apply a debuff to enemies, causing them to take 3% extra damage from her abilities within the next 5s, stacking 3 times.",
                "imageURL": require("../assets/images/Chang%27e_ability_0.png"),
                "notes": [
                    "The rabbit has 5x Chang'e's Movement Speed.",
                    "The rabbit can't fetch items in the Assault game mode.",
                    "The debuff stacks up to 9% increased damage from abilities.",
                    "Dance Move Speed: +40%",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Crescent Moon Dance",
                "description": "Chang'e flings a crescent moon in an arc, dealing damage to all enemies in its path.",
                "imageURL": require("../assets/images/Chang%27e_ability_1.png"),
                "notes": [
                    "Its hitbox sweeps left to right in a cone in front of Chang'e.",
                    "Damage: 80/115/150/185/220 (+55% of your Magical Power)",
                    "Ability Type: Cone, Damage",
                    "Range: 35",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 6 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Moonlit Waltz",
                "description": "Chang'e performs an evasive spin dance. She is immune to damage and Crowd Control during the action. For each tick of damage from an ability or Basic Attack that was avoided, Chang'e restores Mana to herself and her allies.",
                "imageURL": require("../assets/images/Chang%27e_ability_2.png"),
                "notes": [
                    "Has an immunity duration of 1s.",
                    "Mana Restored: 20/30/40/50/60 per tick avoided",
                    "Ability Type: Circle, Buff",
                    "Radius: 20",
                    "Cost: 60 mana",
                    "Cooldown: 20/18.5/17/15.5/14 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Moonflower Dance",
                "description": "Chang'e twirls, scattering flowers around her, and healing herself and all nearby allies and damaging nearby enemies.",
                "imageURL": require("../assets/images/Chang%27e_ability_3.png"),
                "notes": [
                    "Its hitbox moves clockwise around Chang'e.",
                    "Persists for .7s after use.",
                    "Heal: 40/80/120/160/200",
                    "Damage: 85/110/135/160/185 (+60% of your Magical Power)",
                    "Ability Type: Circle, Heal, Damage",
                    "Radius: 30",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "Ultimate  - Waxing Moon",
                "description": "Chang'e's Waxing Moon dance is captivating, with this dance dealing damage and Stunning enemy gods in front of her. Each subsequent god that gets Stunned is Stunned for longer than the previous one.",
                "imageURL": require("../assets/images/Chang%27e_ability_4.png"),
                "notes": [
                    "Applies up to a 5s stun for the last target hit when stunning 5 gods with the ability.",
                    "Damage: 150/215/280/345/410 (+65% of your Magical Power)",
                    "Stun: 1s + 1s for each god already Stunned",
                    "Ability Type: Line, Stun, Damage",
                    "Range: 70",
                    "Cost: 80/90/100/110/120 mana",
                    "Cooldown: 100 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Charon",
        "Attributes": {
            "Title:": "The Ferryman",
            "Pantheon:": "Greek",
            "Type:": "Ranged,Magical",
            "Class:": "Guardian",
            "Pros:": "High Mobility",
            "Difficulty:": "Average",
            "Release date:": "July 11, 2023",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Charon voicelines",
            "Voice actor:": "Earl Fisher",
            "Health:": "490 (+89)",
            "Mana:": "210 (+38)",
            "Speed:": "370 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "1 (+1.2%)",
            "Damage:": "36 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "19 (+3)",
            "Magical:": "27 (+1.3)",
            "HP5:": "6 (+0.75)",
            "MP5:": "4.6 (+0.42)",
            "imageURL": require("../assets/images/Charon.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Ferryman of Souls",
                "description": "If Charon is in assist range while any friendly lane minion or jungle monster dies, their essence persists for Charon to collect for 8s, granting him 1 gold and a Soul stack each. When Charon returns to base, he loses all Soul stacks and gains a permanent 2 Max Health per stack.",
                "imageURL": require("../assets/images/Charon_ability_0.png"),
                "notes": [
                    "Assist radius is 80 units.",
                    "HP stacks up to 499 times.",
                    "Charon will still collect gold even if he has the maximum number of Soul stacks.",
                    "Collection Range: 20",
                    "Max Stacks: 20",
                    "Max Health: 998",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Spectral Surge",
                "description": "Charon plucks a soul out of the Styx, firing it as a line projectile that damages and Slows all enemies while stopping on the first god hit. If the soul hits an enemy god, it then explodes in a damaging and Silencing area around the target. All enemy gods hit by the explosion leave behind a damaging, Slowing trail of the Styx for the next 3s.",
                "imageURL": require("../assets/images/Charon_ability_1.png"),
                "notes": [
                    "The DoT deals damage every .5s.",
                    "Can deal up to 116/158/200/242/284 (+75% of your Magical Power) damage.",
                    "Soul Damage: 80/110/140/170/200 (+45% of your Magical Power)",
                    "Trail Damage: 6/8/10/12/14 (+5% of your Magical Power)",
                    "Soul Slow: 10/12.5/15/17.5/20%",
                    "Trail Slow: 15%",
                    "Silence Duration: 1s",
                    "Ability Type: Line, Crowd Control, Damage",
                    "Range/Radius: 60/15",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 15 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Damnation",
                "description": "After a short delay, Charon creates a rift to the underworld in an area, dealing damage and marking all enemy gods hit for the next 3s. The marked gods are revealed and have their Attack Speed reduced. Additionally, any time an allied god hits a marked god once per mark per ability or basic attack, that ally gains a shield for 3s. Subsequent shields only grant 25% of the original value.",
                "imageURL": require("../assets/images/Charon_ability_2.png"),
                "notes": [
                    "Subsequent hits on a marked enemy provide 10/16/22/29/35 (+0.3% of Charon's max health) shield health.",
                    "The shield doesn't protect from execute effects.",
                    "Damage: 50/85/120/155/190 (+40% of your Magical Power)",
                    "Attack Speed Slow: 25%",
                    "Shield Health: 40/65/90/115/140 + 2% of Charon’s Max Health",
                    "Shield Cap: 15% of Charon’s Max Health",
                    "Range/Radius: 55/15",
                    "Ability Type: Circle, Debuff, Damage",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 16/15.5/15/14.5/14 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Swift Voyage",
                "description": "Charon forcibly rows at a break-neck pace, charging forward with increased Movement Speed and reduced turn radius for 2.5s. Charon is Slow and Knockback immune while charging. Charon deals damage to and Roots enemies he collides with as well as those directly to his sides in the wake of his boat.",
                "imageURL": require("../assets/images/Charon_ability_3.png"),
                "notes": [
                    "Charon can only hit each enemy once during the ability.",
                    "Can be cancelled early.",
                    "Damage: 65/115/165/215/265 (+40% of your Magical Power)",
                    "Direct Root: 1s",
                    "Wake Root: 0.5s",
                    "Movement Speed: 100%",
                    "Ability Type: Dash, Root, Damage",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 17/16.5/16/15.5/15 seconds"
                ]
            },
            {
                "name": "Ultimate  - Summon Styx",
                "description": "Charon gains Crowd Control immunity and summons a massive tidal wave that he sends forth across the entire battlefield. Enemy gods hit by the wave are Feared, while allied gods gain Protections for 3s. Additionally, if an allied god is within 60 units directly behind the wave, they gain Movement Speed.",
                "imageURL": require("../assets/images/Charon_ability_4.png"),
                "notes": [
                    "The wave is 20 units long, 60 units wide and can only either hit/fear each enemy or provide protections to allies once.",
                    "Charon suffers a 50% movement speed slow while channeling this ability.",
                    "Has a channeling time of 1.5s.",
                    "Damage: 225/290/355/420/495 (+50% of your Magical Power)",
                    "Fear: 0.8/0.9/1/1.1/1.2s",
                    "Protections: 20/25/30/35/40",
                    "Movement Speed: 40%",
                    "Ability Type: Area, Fear, Damage",
                    "Range: Global",
                    "Cost: 100 mana",
                    "Cooldown: 110 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Charybdis",
        "Attributes": {
            "Title:": "The Ceaseless Whirlpool",
            "Pantheon:": "Greek",
            "Type:": "Ranged,Physical",
            "Class:": "Hunter",
            "Pros:": "High Attack Speed",
            "Difficulty:": "Average",
            "Release date:": "August 24, 2021",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Charybdis voicelines",
            "Voice actor:": "Xanthe Huynh",
            "Health:": "440 (+77)",
            "Mana:": "220 (+38)",
            "Speed:": "365 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.95 (+1.6%)",
            "Damage:": "33 (+ 2.6)+ 100% of Physical Power",
            "Progression:": "1/1/.4/.4/.4x damage",
            "Physical:": "11 (+2.9)",
            "Magical:": "23 (+1.3)",
            "HP5:": "7 (+0.69)",
            "MP5:": "4.4 (+0.38)",
            "imageURL": require("../assets/images/Charybdis.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Raging Tides",
                "description": "Charybdis' attack speed increases as her Tide increases. Successful Basic Attack hits increase her Tide.Charybdis deals less damage with item effect procs on only her rapid fire Basic Attacks.",
                "imageURL": require("../assets/images/Charybdis_ability_0.png"),
                "notes": [
                    "Charybdis' attack speed increases as her Tide increases. Successful Basic Attack hits increase her Tide.",
                    "Charybdis deals less damage with item effect procs on only her rapid fire Basic Attacks.",
                    "Provides 25% Attack Speed (10.75% at level 1) at level 20.",
                    "Damage from items deal 80% damage at max tide.",
                    "Takes a total of 33 basic attacks to fully charge the Tide.",
                    "The third basic attack in Charybdis' hit chain can deal up to 120% basic attack damage to a single target as well as benefit from only 33% Lifesteal.",
                    "Tide Attack Speed: Attack speed increases up to 10% +0.75% per level, at max Tide",
                    "Reduction: Item damage reduced by 20%",
                    "Basic Attacks: 3% Tide on Hit",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Spike Shot",
                "description": "Charybdis reveals The Maw as it fires large spikes for a short duration dealing Basic Attack damage. These projectiles pass through minions and are wider and faster than normal Basic Attacks.On hitting enemy gods and walls, the spikes splinter dealing additional damage.",
                "imageURL": require("../assets/images/Charybdis_ability_1.png"),
                "notes": [
                    "Charybdis reveals The Maw as it fires large spikes for a short duration dealing Basic Attack damage. These projectiles pass through minions and are wider and faster than normal Basic Attacks.\nOn hitting enemy gods and walls, the spikes splinter dealing additional damage.",
                    "Splinters have a range of 30 and cannot go through walls or gods.",
                    "Basic attacks that hit gods provide 6% Tide.",
                    "Enemies can only be hit by 1 splinter regardless if all meet.",
                    "Minion Damage: 80/85/90/95/100% scaling",
                    "Splinter Damage: 20/25/30/35/40 (+25% of your Physical Power)",
                    "Splinter Tide: 3% Tide per hit",
                    "Duration: 4s",
                    "Ability Type: Ranged Basic, Buff, Damage",
                    "Range: 55",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 14/13/12/11/10 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Capsize",
                "description": "Charybdis absorbs water from around her before firing a quick blast from The Maw. Enemies are hit by a rapidly decaying Slow and Physical Protection debuff.This ability can be channeled for longer, consuming Tide on fire, to become wider, strengthen the debuff effects and deal more damage.Up to 40% Tide consumed.",
                "imageURL": require("../assets/images/Charybdis_ability_2.png"),
                "notes": [
                    "Charybdis absorbs water from around her before firing a quick blast from The Maw. Enemies are hit by a rapidly decaying Slow and Physical Protection debuff.\nThis ability can be channeled for longer, consuming Tide on fire, to become wider, strengthen the debuff effects and deal more damage. \nUp to 40% Tide consumed.",
                    "Applies a 10% slow/protection shred for 1s with minimal tide and deals 115% Physical Power Scaling with maximum tide.",
                    "Takes 0.75s to fully charge the ability.",
                    "Damage: 90/140/190/240/290 (+85% of your Physical Power)",
                    "Extra Scaling: 30%",
                    "Slow: 40% on max Tide",
                    "Physical Protection Reduction: 40% on max Tide",
                    "Duration: 4s on max Tide",
                    "Ability Type: Cone, Debuff, Damage",
                    "Range: 45",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 14/13.5/13/12.5/12 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Whirlpool Form",
                "description": "Charybdis dives into a whirlpool she creates, expanding and revealing the terrifying Maw. Charybdis deals damage to enemies caught in the area.This ability can be amplified by toggling it again and spending 30% Tide. Doing so increases the damage dealt as well as providing Movement Speed, extra damage, and a knockup on exiting.While submerged, Charybdis is untargetable and immune to damage for up to 3s.",
                "imageURL": require("../assets/images/Charybdis_ability_3.png"),
                "notes": [
                    "Charybdis dives into a whirlpool she creates, expanding and revealing the terrifying Maw. Charybdis deals damage to enemies caught in the area.",
                    "This ability can be amplified by toggling it again and spending 30% Tide. Doing so increases the damage dealt as well as providing Movement Speed, extra damage, and a knockup on exiting.",
                    "While submerged, Charybdis is untargetable and immune to damage for up to 3s.",
                    "Total Damage: 60/90/120/150/180 (+30% of your Physical Power) damage",
                    "Total Amplified Damage: 180/280/380/480/580 (+125% of your Physical Power) damage",
                    "Charybdis can move through player-made walls for the duration, not through map walls.",
                    "Charybdis also gains CC immunity during the prefire.",
                    "Can be cancelled early.",
                    "Damage: 10/15/20/25/30 (+5% of your Physical Power) every 0.5s",
                    "Amplified Damage: 20/30/40/50/60 (+10% of your Physical Power) every 0.5s",
                    "Exit Damage: 60/100/140/180/220 (+65% of your Physical Power)",
                    "Amplified Movement Speed: 25%",
                    "Ability Type: Circle, Knockup, Damage",
                    "Radius: 15",
                    "Cost: 70/75/80/85/90 mana",
                    "Cooldown: 17/16.5/16/15.5/15 seconds"
                ]
            },
            {
                "name": "Ultimate  - The Maw Hungers",
                "description": "Charybdis reveals her true nature, becoming immune to Crowd Control for the next 6s, and gaining movement speed. She may make one powerful attack as The Maw charges forward, damaging and carrying back enemies hit before chomping down, damaging again and stunning.If she kills an enemy god with the attack, she gains another 6s and may attack again.",
                "imageURL": require("../assets/images/Charybdis_ability_4.png"),
                "notes": [
                    "Charybdis reveals her true nature, becoming immune to Crowd Control for the next 6s, and gaining movement speed. She may make one powerful attack as The Maw charges forward, damaging and carrying back enemies hit before chomping down, damaging again and stunning.\nIf she kills an enemy god with the attack, she gains another 6s and may attack again.",
                    "There is no limit to how many additional attacks can be gained per cast.",
                    "Has a minimum/cone range of 30.",
                    "Can deal up to 360/490/620/750/880 (+170% of your Physical Power) damage.",
                    "Can move freely in all directions for the duration.",
                    "Cannot be fired through walls but can through player-made walls.",
                    "Charge Damage: 60/90/120/150/180 (+20% of your Physical Power)",
                    "Bite Damage: 300/400/500/600/700 (+150% of your Physical Power)",
                    "Movement Speed: 35%",
                    "Stun Duration: 1.3s",
                    "Ability Type: Area, Crowd Control, Damage",
                    "Range: 70",
                    "Cost: 100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Chernobog",
        "Attributes": {
            "Title:": "Lord of Darkness",
            "Pantheon:": "Slavic",
            "Type:": "Ranged,Physical",
            "Class:": "Hunter",
            "Pros:": "High Single Target Damage, High Attack Speed",
            "Difficulty:": "Hard",
            "Release date:": "May 15, 2018",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Chernobog voicelines",
            "Voice actor:": "Doug Cockle",
            "Health:": "450 (+80)",
            "Mana:": "220 (+38)",
            "Speed:": "365 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.95 (+1.7%)",
            "Damage:": "31 (+ 2.6)+ 100% of Physical Power",
            "Progression:": "None",
            "Physical:": "11 (+3)",
            "Magical:": "23 (+1.3)",
            "HP5:": "8 (+0.67)",
            "MP5:": "4.4 (+0.35)",
            "imageURL": require("../assets/images/Chernobog.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Heart of Cold",
                "description": "Every successful Basic Attack impales the enemy with a brittle crystal. Upon reaching 3 stacks of Heart of Cold, the enemy explodes for extra damage in an area around them.",
                "imageURL": require("../assets/images/Chernobog_ability_0.png"),
                "notes": [
                    "Deals 35% Basic Attack damage (16% at level 1) at level 20.",
                    "Damage: 15% + (1% per level) of your total Basic Attack Power",
                    "Duration: 5s",
                    "Ability Type: Circle, Damage",
                    "Radius: 10"
                ]
            },
            {
                "name": "1st Ability  - Crystallized Curses",
                "description": "Chernobog conjures a large crystal of curses and hurls it at the target location dealing damage and Slowing enemies on landing. After several seconds the crystalline curses explode dealing damage again and rooting any enemy in the area. The crystal can be detonated early by firing at it with Vicious Barrage.",
                "imageURL": require("../assets/images/Chernobog_ability_1.png"),
                "notes": [
                    "Can deal up to 110/165/220/275/330 (+150% of your Physical Power) damage.",
                    "Damage: 70/95/120/145/170 (+80% of your Physical Power)",
                    "Detonation Damage: 40/70/100/130/160 (+70% of your Physical Power)",
                    "Slow: 20% for 2s",
                    "Root: 1s",
                    "Detonation Duration: 3s",
                    "Ability Type: Circle, Root, Damage",
                    "Range/Radius: 60/20",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 15/14.5/14/13.5/13 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Vicious Barrage",
                "description": "Chernobog fires an enlarged crystal shard that can pierce enemies and deals damage like a Basic Attack. This applies a single stack of Heart of Cold to all enemies it passes through and instantly detonates Crystallized Curses. After firing, Chernobog gains increased Attack Speed for several seconds.",
                "imageURL": require("../assets/images/Chernobog_ability_2.png"),
                "notes": [
                    "The projectile can go through walls and also crit.",
                    "Attack Speed: 30/35/40/45/50%",
                    "Duration: 4s",
                    "Ability Type: Line, Buff, Damage",
                    "Range: 65",
                    "Cost: 30/35/40/45/50 mana",
                    "Cooldown: 8 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Into Darkness",
                "description": "Chernobog dashes forward, dealing damage to any enemy he collides with. If Chernobog comes in contact with a wall, he briefly enters it as a shadow, becoming untargetable and immune to damage for up to 3s. Chernobog can leave the wall early by dashing or just stepping out of the wall. If he remains for the full duration, Chernobog will automatically dash out as his time expires.",
                "imageURL": require("../assets/images/Chernobog_ability_3.png"),
                "notes": [
                    "Can deal up to 150/180/210/240/270 (+90% of your Physical Power) damage.",
                    "Chernobog can also dash into player-made walls but will automatically be ejected out when it disappears.",
                    "Damage: 75/90/105/120/135 (+45% of your Physical Power)",
                    "Ability Type: Dash, Damage",
                    "Range: 40",
                    "Cost: 50 mana",
                    "Cooldown: 16/15.5/15/14.5/14 seconds"
                ]
            },
            {
                "name": "Ultimate  - Living Nightmare",
                "description": "During a brief channeling period, Chernobog summons shadows at the location of all enemies that last for 8s and apply a short stacking Slow. Chernobog can select any of his shadow clones to fly towards. Once he reaches the location he takes the place of his shadow, refreshing his cooldowns, as well as temporarily obtaining damage mitigations and extra movement speed.",
                "imageURL": require("../assets/images/Chernobog_ability_4.png"),
                "notes": [
                    "Has a minimum air time of 1s and a maximum of 2.6s as well as a maximum slow scaling of 9%.",
                    "Chernobog gains immunity from crowd control effects while charging up & using this ability.",
                    "Chernobog will land right where he started (similar to Rama's ultimate landing) if he does not select a target to fly towards before the time runs out (after 6s).",
                    "Buff Duration: 6s",
                    "Damage Mitigation: 5/7.5/10/12.5/15%",
                    "Movement Speed: 15%",
                    "Shadow Slow: 3% Stacking 3 times",
                    "Shadow Clone Speed: 365/380/395/410/425",
                    "Ability Type: Teleport, Debuff",
                    "Cost: 80/90/100/110/120 mana",
                    "Cooldown: 120 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Chiron",
        "Attributes": {
            "Title:": "The Great Teacher",
            "Pantheon:": "Greek",
            "Type:": "Ranged,Physical",
            "Class:": "Hunter",
            "Pros:": "High Sustain, High Movement Speed",
            "Difficulty:": "Easy",
            "Release date:": "November 17, 2015",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Chiron voicelines",
            "Voice actor:": "Phil Parsons",
            "Health:": "460 (+75)",
            "Mana:": "225 (+40)",
            "Speed:": "380 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "1 (+1.4%)",
            "Damage:": "32 (+ 2.35)+ 100% of Physical Power",
            "Progression:": "None",
            "Physical:": "12 (+2.8)",
            "Magical:": "23 (+1.3)",
            "HP5:": "6 (+0.65)",
            "MP5:": "4.4 (+0.38)",
            "imageURL": require("../assets/images/Chiron.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Herbal Medicine",
                "description": "Every 12s Chiron collects herbs for a poultice. Each time he uses an ability, a poultice is consumed to heal himself or an ally within 30 units, based on who has the lowest health. Healed allies also gain Physical and Magical Power.",
                "imageURL": require("../assets/images/Chiron_ability_0.png"),
                "notes": [
                    "Reapplying the effect on the same target does not stack, but will refresh its duration.",
                    "Each stack heals a total of 100 health and grants up to 30 Physical or 65 Magical Power (24 health, 11 Physical or 17 Magical Power at level 1) at level 20.",
                    "The HoT occurs every 1s.",
                    "Healing Per Consumed Stack: 20 + 4 per god level over 5s",
                    "Physical Power: 10 + 1 per level",
                    "Magical Power: 15 + 2 per level",
                    "Max Stacks: 3",
                    "Ability Type: Target, Buff",
                    "Radius: 30"
                ]
            },
            {
                "name": "1st Ability  - Training Exercise",
                "description": "Chiron warns his teammates to evade the area, granting them .5s of Crowd Control Immunity so they can escape before it explodes and does damage to all enemies in the area. Applies Target Mark",
                "imageURL": require("../assets/images/Chiron_ability_1.png"),
                "notes": [
                    "Damage: 100/150/200/250/300 (+80% of your Physical Power)",
                    "Ability Type: Circle, Buff, Damage",
                    "Range/Radius: 55/17.5",
                    "Cost: 55/60/65/70/75 mana",
                    "Cooldown: 13 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Masterful Shot",
                "description": "Chiron passively marks his enemies as targets when he damages them with Basic Attacks, Training Exercise, or Centaurus, reducing their Physical Protections by 10%. He may activate this ability to fire seeking arrows at all marked targets within range, damaging and slowing them.",
                "imageURL": require("../assets/images/Chiron_ability_2.png"),
                "notes": [
                    "Has a maximum range of 135.",
                    "The mark duration is refreshed if Chiron damages the afflicted target (except damage from Giddyup!).",
                    "Cannot be cast without at least one marked target in range.",
                    "Damage: 55/90/125/160/195 (+80% of your Physical Power)",
                    "Mark Duration: 3.5s",
                    "Slow: 25/27.5/30/32.5/35%",
                    "Slow Duration: 2s",
                    "Ability Type: Target, Slow, Damage",
                    "Cost: 65 mana",
                    "Cooldown: 15 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Giddyup!",
                "description": "Chiron gallops forward damaging enemies, knocking up minions, and kicking enemy gods behind him. Chiron is immune to knockups while charging.Chiron may fire Basic Attacks and Masterful Shot while charging.",
                "imageURL": require("../assets/images/Chiron_ability_3.png"),
                "notes": [
                    "Chiron gallops forward damaging enemies, knocking up minions, and kicking enemy gods behind him. Chiron is immune to knockups while charging.",
                    "Chiron may fire Basic Attacks and Masterful Shot while charging.",
                    "The bonus power lasts for as long as Chiron is galloping.",
                    "The dash can last up to 3s and can only hit each enemy once.",
                    "Has a knockback distance of 30.",
                    "Chiron can move and turn freely for the duration.",
                    "Can be cancelled early.",
                    "Damage: 75/105/135/165/195 (+50% of your Physical Power)",
                    "Bonus Power: 10/20/30/40/50",
                    "Ability Type: Dash, Knockback, Damage",
                    "Cost: 70 mana",
                    "Cooldown: 16 seconds"
                ]
            },
            {
                "name": "Ultimate  - Centaurus",
                "description": "Chiron is transformed into a constellation, and can fire three long-distance shots, even through walls.If Chiron would be killed during this ability, he does not die until he runs out of time or shots. Killing an enemy with this ability when Chiron would have died returns him to life with health equal to the damage dealt instead.Applies target mark.",
                "imageURL": require("../assets/images/Chiron_ability_4.png"),
                "notes": [
                    "Chiron is transformed into a constellation, and can fire three long-distance shots, even through walls.",
                    "If Chiron would be killed during this ability, he does not die until he runs out of time or shots. Killing an enemy with this ability when Chiron would have died returns him to life with health equal to the damage dealt instead.",
                    "Applies target mark.",
                    "Has a projectile speed of 175.",
                    "Chiron suffers a 40% Movement Speed Slow while channeling.",
                    "Can deal up to 390/525/660/795/930 (+195% of your Physical Power) damage.",
                    "Chiron becomes rooted when he would die at the end of the ability.",
                    "Damage per Shot: 130/175/220/265/310 (+65% of your Physical Power)",
                    "Ability Type: Line, Damage",
                    "Range: 120",
                    "Cost: 80/90/100/110/120 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Chronos",
        "Attributes": {
            "Title:": "Keeper of Time",
            "Pantheon:": "Greek",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "Medium Crowd Control, High Mobility",
            "Difficulty:": "Hard",
            "Release date:": "July 10, 2013",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Chronos voicelines",
            "Voice actor:": "Stan Robak",
            "Health:": "425 (+75)",
            "Mana:": "240 (+42)",
            "Speed:": "360 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "1.05 (+1.5%)",
            "Damage:": "40 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "13 (+2.9)",
            "Magical:": "23 (+1.3)",
            "HP5:": "7 (+0.48)",
            "MP5:": "4.4 (+0.44)",
            "imageURL": require("../assets/images/Chronos.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Time Lord",
                "description": "Chronos becomes empowered as time flows around him. Every 1.5 minutes he gains a stack that increases his Magical Power. Stacks up to 25 times, stacks are permanent.",
                "imageURL": require("../assets/images/Chronos_ability_0.png"),
                "notes": [
                    "Grants up to 125 Magical Power after 37.5 minutes.",
                    "Magical Power Per Stack: 5",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Time Rift",
                "description": "Chronos creates a rift in time, damaging all enemies in the area.",
                "imageURL": require("../assets/images/Chronos_ability_1.png"),
                "notes": [
                    "Damage: 80/125/170/215/260 (+80% of your Magical Power)",
                    "Ability Type: Circle, Damage",
                    "Range/Radius: 55/10",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 5 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Accelerate",
                "description": "Chronos accelerates himself over time, allowing him to move faster initially and gain speed over time. While active, his Attack Speed is increased. This ability also stops the Wheel of Time.Section I: Heal 1% Max Health Per Second.Section II: 100% Mana Refund On Abilities.Section III: +35% Magical Power.Section IV: +35% Magical Power Contribution to Basic Attacks.",
                "imageURL": require("../assets/images/Chronos_ability_2.png"),
                "notes": [
                    "Chronos accelerates himself over time, allowing him to move faster initially and gain speed over time. While active, his Attack Speed is increased. This ability also stops the Wheel of Time.\nSection I: Heal 1% Max Health Per Second.",
                    "Section II: 100% Mana Refund On Abilities.",
                    "Section III: +35% Magical Power.",
                    "Section IV: +35% Magical Power Contribution to Basic Attacks.",
                    "Section I heals a total of 7% Max Health.",
                    "Abilities still require enough mana to cast to be refunded by Section II.",
                    "Chronos gains extra movement speed (1.7/2/2.3/2.6/2.9%) every 1s.",
                    "Movement Speed: 20% initial + 12/14/16/18/20% over time",
                    "Attack Speed: 25/27.2/30/32.5/35%",
                    "Lifetime: 7s",
                    "Ability Type: Buff",
                    "Cost: 60 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Stop Time",
                "description": "Shooting forward spinning gears of time, any enemies hit by Chronos' attack have their Attack Speed reduced and Ramp to a Stun, taking damage on the initial hit and again when they are stunned.",
                "imageURL": require("../assets/images/Chronos_ability_3.png"),
                "notes": [
                    "Reduces Attack Speed by 20%.",
                    "Deals a total of 100/150/200/250/300 (+90% of your Magical Power) damage.",
                    "Damage (applied twice): 50/75/100/125/150 (+45% of your Magical Power)",
                    "Stun: 1s",
                    "Ability Type: Line, Crowd Control, Damage",
                    "Range: 70",
                    "Cost: 65/70/75/80/85 mana",
                    "Cooldown: 16/15.5/15/14.5/14 seconds"
                ]
            },
            {
                "name": "Ultimate  - Rewind",
                "description": "Chronos travels through time to where he was 8 seconds ago, gaining Health and Mana back to the values of that time. All of his Cooldowns are instantly reset as well.",
                "imageURL": require("../assets/images/Chronos_ability_4.png"),
                "notes": [
                    "Isn't affected by healing reduction.",
                    "Chronos becomes CC immune as he prepares to use this ability.",
                    "Ability Type: Buff",
                    "Cost: 100 mana",
                    "Cooldown: 100/95/90/85/80 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Cliodhna",
        "Attributes": {
            "Title:": "Queen of the Banshees",
            "Pantheon:": "Celtic",
            "Type:": "Melee,Physical",
            "Class:": "Assassin",
            "Pros:": "High Single Target Damage",
            "Difficulty:": "Average",
            "Release date:": "October 19, 2021",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Cliodhna voicelines",
            "Voice actor:": "Elsie Lovelock",
            "Health:": "475 (+77)",
            "Mana:": "225 (+40)",
            "Speed:": "375 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+2.16%)",
            "Damage:": "41 (+ 2.25)+ 100% of Physical Power",
            "Progression:": "1/1/1.5 damage and swing time",
            "Physical:": "12 (+3.1)",
            "Magical:": "23 (+1.3)",
            "HP5:": "9 (+0.85)",
            "MP5:": "4.3 (+0.4)",
            "imageURL": require("../assets/images/Cliodhna.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Phantasmal",
                "description": "Cliodhna can walk into walls once every 12s. While inside a wall she can move freely and use some of her abilities. Every 0.4s she loses 0.12% of her health, stacking in intensity up to 40 times. She cannot enter a wall while below 25% Health or crippled. For 6s after exiting she gains 15% Physical Ability Lifesteal.",
                "imageURL": require("../assets/images/Cliodhna_ability_0.png"),
                "notes": [
                    "There's a 1s delay before entering and 0.5s when exiting a wall.",
                    "Cliodhna cannot enter walls that lead outside the map nor player-made walls.",
                    "Cliodhna is untargetable, immune to damage and CC while inside a wall and most active targeted abilities will be canceled once she enters one.",
                    "While inside a wall, consumable items can be used while relics/shard relics cannot.",
                    "If Cliodhna is one tick away from death while inside a wall, she will automatically eject out from the nearest wall.",
                    "Just like wards, certain god abilities and item passives that provide vision will not reveal Cliodhna while she's inside a wall.",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Banshee's Wail",
                "description": "Cliodhna wails at enemies before her, causing damage 3 times, with the final hit being the strongest. The final hit will also cause enemies to be silenced and deafened for 1.5s. While channeling this scream Cliodhna is immune to knockups. While inside a wall Cliodhna will cause a spectral face to appear and wail in her stead that damages only enemy gods in a wider cone.",
                "imageURL": require("../assets/images/Cliodhna_ability_1.png"),
                "notes": [
                    "Can deal up to 120/190/260/330/400 (+150% of your Physical Power) damage.",
                    "Has a cone angle of 180 if used inside a wall.",
                    "Has a duration of 1.2s (damage is dealt every 0.4s).",
                    "Can be cancelled early.",
                    "Scream Damage: 30/45/60/75/90 (+45% of your Physical Power)",
                    "Final Hit Damage: 60/100/140/180/220 (+60% of your Physical Power)",
                    "Ability Type: Cone, Silence, Damage",
                    "Range: 30",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Flickering Visions",
                "description": "Cliodhna fires a distorting bolt of energy that explodes on contact with a living soul. Enemy gods hit by this explosion lose the ability to perceive Cliodhna for 5s. If Cliodhna attacks or is hit she flickers back into vision before fading back out. As long as one enemy god is debuffed Cliodhna gains a Movement Speed Buff.",
                "imageURL": require("../assets/images/Cliodhna_ability_2.png"),
                "notes": [
                    "Cannot be cast while inside a wall.",
                    "Cliodhna is revealed for 0.25s when dealing/taking damage.",
                    "The buff is only applied once regardless of how many gods were hit by the ability.",
                    "Bolt Damage: 70/125/180/235/290 (+80% of your Physical Power)",
                    "Movement Speed: 25%",
                    "Ability Type: Line, Blind, Damage",
                    "Range/Radius: 60/15",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Lurching Claw",
                "description": "Cliodhna dashes forward, damaging enemies she passes through. At max range, if she cancels this dash, or upon refiring the ability she will unleash a claw swipe that deals heavy damage. Cliodhna can cast this while inside a wall, resulting in the dash traveling further.",
                "imageURL": require("../assets/images/Cliodhna_ability_3.png"),
                "notes": [
                    "Can deal up to 125/200/275/350/425 (+110% of your Physical Power) damage.",
                    "Cliodhna can turn freely in any direction during the dash.",
                    "Dash Damage: 35/60/85/110/135 (+30% of your Physical Power)",
                    "Claw Damage: 90/140/190/240/290 (+80% of your Physical Power)",
                    "Ability Type: Dash, Damage",
                    "Range: 75, 85",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 15/14.5/14/13.5/13 seconds"
                ]
            },
            {
                "name": "Ultimate  - Tearing The Veil",
                "description": "Cliodhna tears the veil between life and death. When the rift first opens it deals heavy damage and then deals rift damage to targets in a line and slows them. Minions take 25% reduced damage, and all enemies hit by subsequent hits take 40% less damage, stacking twice up to 80%. This ability has 2 charges. Rifts can be destroyed by basic attacks. Cliodhna can use this ability while inside a wall. When used this way the veil is not fully torn, instead activating when a target gets too close. Cliodhna can have up to 3 rifts active.",
                "imageURL": require("../assets/images/Cliodhna_ability_4.png"),
                "notes": [
                    "The projectiles can go through walls.",
                    "Placing more than three veils will despawn the oldest one.",
                    "Each charge deals up to 431/683/935/1187/1439 (+216% of your Physical Power) damage (323/512/701/890/1079 (+162% of your Physical Power) damage to minions), slows up to 36% and both charges cost up to 60/70/80/90/100 mana.",
                    "Opened veils have a maximum duration of 5s (rift damage is dealt every 0.25s) and require 3 basic attacks to destroy them.",
                    "Wall veils placed by an enemy Cliodhna are invisible until they activate.",
                    "Opening Damage: 145/215/285/355/425 (+60% of your Physical Power)",
                    "Rift Damage per Tick: 55/90/125/160/195 (+30% of your Physical Power)",
                    "Slow: 6% for 1.5s",
                    "Slow Stacks: 6",
                    "Ability Type: Cone, Slow, Damage",
                    "Range: 85",
                    "Cost: 30/35/40/45/50 mana",
                    "Cooldown: 55/50/45/40/35 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Cthulhu",
        "Attributes": {
            "Title:": "The Great Dreamer",
            "Pantheon:": "Great Old Ones",
            "Type:": "Melee,Magical",
            "Class:": "Guardian",
            "Pros:": "High Area Damage",
            "Difficulty:": "Average",
            "Release date:": "June 16, 2020",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Cthulhu voicelines",
            "Voice actor:": "Adin Rudd",
            "Health:": "500 (+95)",
            "Mana:": "210 (+38)",
            "Speed:": "370 (+0)",
            "Range:": "16 (+0)",
            "Attack/Sec:": "0.9 (+1.2%)",
            "Damage:": "38 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "1/1/1x damage and swing time. Range of 16/20/20+AoE",
            "Physical:": "20 (+3.2)",
            "Magical:": "27 (+1.3)",
            "HP5:": "8 (+0.8)",
            "MP5:": "4.6 (+0.42)",
            "imageURL": require("../assets/images/Cthulhu.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Prey on Fear",
                "description": "Cthulhu breaks down the mental fortitude of enemy gods, applying stacks of Torment with abilities and the final hit of his basic attack chain. On reaching 4 stacks of Torment, enemies are afflicted by Insanity. Additionally, Cthulhu gains Magical Power per nearby enemy god with Insanity.",
                "imageURL": require("../assets/images/Cthulhu_ability_0.png"),
                "notes": [
                    "Gains up to 125 Magical Power.",
                    "Has a buff range of 70.",
                    "Dealing damage to afflicted targets with abilities or the final basic attack of Cthulhu's hit chain will refresh the Insanity/Torment (excluding Sanity Break against targets afflicted by Insanity) duration.",
                    "Torment Duration: 5s",
                    "Insanity Duration: 20s",
                    "Magical Power: 25 per enemy with Insanity",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Sanity Break",
                "description": "Cthulhu sends out a terrifying blast of energy, dealing damage to all enemies hit and reducing their Attack Speed. Enemies hit by this ability also do reduced damage to Cthulhu for 6s.This ability applies 1 stack of Torment, 2 if the enemy hit is facing Cthulhu or Fears them instead if they are afflicted with Insanity.Successfully consuming Insanity permanently increases the base mitigation of this ability.",
                "imageURL": require("../assets/images/Cthulhu_ability_1.png"),
                "notes": [
                    "Cthulhu sends out a terrifying blast of energy, dealing damage to all enemies hit and reducing their Attack Speed. Enemies hit by this ability also do reduced damage to Cthulhu for 6s.",
                    "This ability applies 1 stack of Torment, 2 if the enemy hit is facing Cthulhu or Fears them instead if they are afflicted with Insanity.",
                    "Successfully consuming Insanity permanently increases the base mitigation of this ability.",
                    "Damage Mitigation stacks up to 20 times.",
                    "Damage: 90/140/190/240/290 (+40% of your Magical Power)",
                    "Attack Speed Slow: 20/22.5/25/27.5/30% for 3s",
                    "Fear Duration: 1.5s",
                    "Damage Mitigation: 20% + 0.5% (Max 30%)",
                    "Ability Type: Cone, Fear, Damage",
                    "Range: 32",
                    "Cost: 60 mana",
                    "Cooldown: 14/13/12/11/10 seconds"
                ]
            },
            {
                "name": "2nd Ability  - The Mire",
                "description": "Cthulhu summons a portal creating a slowing field of eldritch mire at the target location. The Mire continues to grow as the portal fires out two masses of corruption that hit and damage all enemies in the field.The first shot also Slows enemies while the second Roots them, both hits applying 1 stack of Torment.",
                "imageURL": require("../assets/images/Cthulhu_ability_2.png"),
                "notes": [
                    "Cthulhu summons a portal creating a slowing field of eldritch mire at the target location. The Mire continues to grow as the portal fires out two masses of corruption that hit and damage all enemies in the field.",
                    "The first shot also Slows enemies while the second Roots them, both hits applying 1 stack of Torment.",
                    "Deals up to 120/210/300/390/480 (+60% of your Magical Power) damage and applies up to 2 stacks of Torment.",
                    "The first hit of the ability slows for a total of 45%.",
                    "Has a minimum radius of 20.",
                    "Damage per shot: 60/105/150/195/240 (+30% of your Magical Power)",
                    "Slow: 10%",
                    "Corruption Slow: 35%",
                    "Corruption Slow/Root Duration: 1s",
                    "Mire Duration: 3s after ability cancel/end",
                    "Ability Type: Circle, Crowd Control, Damage",
                    "Range/Radius: 55/30",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Rushing Terror",
                "description": "Cthulhu creates two twisting projectiles at his sides as he unfurls his wings and charges forwards, damaging, stunning and knocking away enemies hit.The projectiles follow at a slightly slower pace but travel further, damaging enemies as well.Enemies hit by Cthulhu or the projectiles gain 1 stack of Torment.",
                "imageURL": require("../assets/images/Cthulhu_ability_3.png"),
                "notes": [
                    "Cthulhu creates two twisting projectiles at his sides as he unfurls his wings and charges forwards, damaging, stunning and knocking away enemies hit.\nThe projectiles follow at a slightly slower pace but travel further, damaging enemies as well.\nEnemies hit by Cthulhu or the projectiles gain 1 stack of Torment.",
                    "Deals up to 150/250/350/450/550 (+70% of your Magical Power) damage and applies up to 3 stacks of Torment.",
                    "Cthulhu is knockback immune while dashing.",
                    "Enemies will be knocked to the closest side they're currently standing when hit by Cthulhu.",
                    "The projectiles have a range of 70.",
                    "Damage: 70/110/150/190/230 (+30% of your Magical Power)",
                    "Stun Duration: 0.4s",
                    "Projectile Damage: 40/70/100/130/160 (+20% of your Magical Power)",
                    "Ability Type: Dash, Crowd Control, Damage",
                    "Range: 50",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 16 seconds"
                ]
            },
            {
                "name": "Ultimate  - Descend into Madness",
                "description": "Cthulhu reveals his true form as he plunges the battlefield into R'lyeh while any enemies caught nearby are damaged.In this form Cthulhu gains increased Health, becomes immune to Crowd Control and gains access to new abilities. Enemies near Cthulhu gain stacks of Torment, increasing in pace if they are facing him. Enemies also suffer the debuff effects of Sanity Break, causing them to deal less damage to Cthulhu.Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.",
                "imageURL": require("../assets/images/Cthulhu_ability_4.png"),
                "notes": [
                    "Cthulhu reveals his true form as he plunges the battlefield into R'lyeh while any enemies caught nearby are damaged.",
                    "In this form Cthulhu gains increased Health, becomes immune to Crowd Control and gains access to new abilities. Enemies near Cthulhu gain stacks of Torment, increasing in pace if they are facing him. Enemies also suffer the debuff effects of Sanity Break, causing them to deal less damage to Cthulhu.",
                    "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.",
                    "Cannot use relics or consumables for the duration.",
                    "Enemies gain stacks of torment every 1.5s when looking away from Cthulhu and 1s when facing him while applying insanity after 6s to targets looking away from and 4s to targets looking at Cthulhu.",
                    "If Cthulhu uses an ability at the end of the duration, he will finish the ability before the duration expires.",
                    "Can be cancelled early.",
                    "Damage: 145/185/225/265/305 (+50% of your Magical Power)",
                    "Max Health: 20%",
                    "Duration: 10/11/12/13/14s",
                    "Debuff Radius: 50",
                    "Ability Type: Circle, Buff, Damage",
                    "Radius: 40",
                    "Cost: 100 mana",
                    "Cooldown: 120 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Cu Chulainn",
        "Attributes": {
            "Title:": "The Hound of Ulster",
            "Pantheon:": "Celtic",
            "Type:": "Melee,Physical",
            "Class:": "Warrior",
            "Pros:": "High Crowd Control, High Area Damage",
            "Difficulty:": "Average",
            "Release date:": "June 20, 2017",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Cu Chulainn voicelines",
            "Voice actor:": "Jared J. Lee",
            "Health:": "480 (+85)",
            "Mana:": "100 (+0)",
            "Speed:": "370 (+0)",
            "Range:": "16 (+0)",
            "Attack/Sec:": "1 (+1.25%)",
            "Damage:": "39 (+ 2)+ 100% of Physical Power",
            "Progression:": "0.7/0.7/1/ damage and speed; Range of 16",
            "Physical:": "17 (+3)",
            "Magical:": "24 (+1.3)",
            "HP5:": "7 (+0.75)",
            "MP5:": "0 (+0)",
            "imageURL": require("../assets/images/Cu_Chulainn.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Berserk",
                "description": "Cu Chulainn's Mana, MP5, and Mana Heals are applied to his Health pool. Abilities consume Rage, which stops regen at 25, but he gains Rage upon hitting with his Abilities as well as 1 Rage for Basic Attacks and .5 when he or allies take damage. After 2s above 85, he goes Berserk. While Berserk, Cu Chulainn gains Power and a Health Shield.",
                "imageURL": require("../assets/images/Cu_Chulainn_ability_0.png"),
                "notes": [
                    "Berserk's progression is 1.05/1.05/1.5/ damage, speed and range of 16.",
                    "Rage generation is calculated at the end of each ability.",
                    "Basic attacks and abilities must deal at least 1 damage to generate any rage.",
                    "Berserk form provides up to 40 Physical Power and 400 shield health (2 Physical Power and 40 shield health at level 1) at level 20.",
                    "The transformation is canceled if you lose the required rage during the transformation phase.",
                    "Rage resets to 25 when Cu Chulainn goes berserk or respawns.",
                    "Health Conversion: 20% of Mana",
                    "Berserk Threshold: 85",
                    "Berserk Duration: 20s",
                    "Bonus Health: 20+20 per level",
                    "Bonus Power: 2 per level",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Barbed Spear (Ground Slam)",
                "description": "Cu Chulainn thrusts his spear forward, damaging all enemies in front of him and stunning less powerful minions. Successfully hitting an enemy minion with this ability restores 5 Rage, 8 for a god (to a max of 18). Barbs from his spear stick in opponents and reduce their healing received for 5s.In his Berserk Form, Cu Chulainn instead slams his massive arms down, damaging and rooting all enemies in front of him and this ability costs no Rage.",
                "imageURL": require("../assets/images/Cu_Chulainn_ability_1.png"),
                "notes": [
                    "Damage: 80/140/200/260/320 (+55% of your Physical Power)",
                    "Healing Reduction: 40%",
                    "Stun Duration: 2s",
                    "Root Duration: 1/1.1/1.2/1.3/1.4s",
                    "Ability Type: Line, Debuff, Damage",
                    "Range: 45",
                    "Cost: 9 Rage",
                    "Cooldown: 16/15/14/13/12s seconds"
                ]
            },
            {
                "name": "2nd Ability  - Vent Anger",
                "description": "Cu Chulainn vents his anger as superheated steam, increasing his Movement Speed and draining his Rage. Every .5s while in this state, all enemies within range are damaged by the heat. Vent Anger does not return Rage.In his Berserk form, Cu Chulainn Vents Anger automatically and does not drain Rage.",
                "imageURL": require("../assets/images/Cu_Chulainn_ability_2.png"),
                "notes": [
                    "Cu Chulainn vents his anger as superheated steam, increasing his Movement Speed and draining his Rage. Every .5s while in this state, all enemies within range are damaged by the heat. Vent Anger does not return Rage.\nIn his Berserk form, Cu Chulainn Vents Anger automatically and does not drain Rage.",
                    "It will still activate automatically at rank 1 during Berserk if no levels are put into it.",
                    "Can deal up to 120/204/288/372/456 (+60% of your Physical Power) damage.",
                    "Damage per Tick: 10/17/24/31/38 (+5% of your Physical Power)",
                    "Movement Speed: 5/6/7/8/9%",
                    "Duration: 6s",
                    "Ability Type: Circle, Buff, Damage",
                    "Radius: 22.5",
                    "Cost: 16 Rage",
                    "Cooldown: 6 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Salmon's Leap (Furious Charge)",
                "description": "Cu Chulainn vaults over his spear, leaping to a target location and slamming it down to damage enemies around and in front of him. Successfully hitting an enemy minion with this ability restores 5 Rage, 8 for a god (to a max of 18).In his Berserk Form, Cu Chulainn instead charges forward damaging, stunning and driving all enemies back with him and this ability costs no Rage.",
                "imageURL": require("../assets/images/Cu_Chulainn_ability_3.png"),
                "notes": [
                    "Cu Chulainn vaults over his spear, leaping to a target location and slamming it down to damage enemies around and in front of him. Successfully hitting an enemy minion with this ability restores 5 Rage, 8 for a god (to a max of 18).\nIn his Berserk Form, Cu Chulainn instead charges forward damaging, stunning and driving all enemies back with him and this ability costs no Rage.",
                    "Salmon's Leap has a line range of 20.",
                    "Furious Charge's stun duration lasts 1s.",
                    "Cu Chulainn is knockup immune while using Furious Charge and can act immediately after using the ability.",
                    "Damage: 70/125/180/235/290 (+60% of your Physical Power)",
                    "Ability Type: Area, Leap, Damage",
                    "Range/Radius: 35/15",
                    "Cost: 9 Rage",
                    "Cooldown: 15 seconds"
                ]
            },
            {
                "name": "Ultimate  - Spear of Mortal Pain (War Cry)",
                "description": "Cu Chulainn swings his spear Gae Bulg in a circle around him, Damaging and Knocking Up all Enemies. Successfully hitting an enemy minion with this ability restores 10 Rage, 26 for a god (to a max of 36).In his Berserk Form, Cu Chulainn instead gives a terrifying yell, Damaging all Enemies and causing them to Tremble. This yell costs no Rage and has a 35s cooldown.",
                "imageURL": require("../assets/images/Cu_Chulainn_ability_4.png"),
                "notes": [
                    "Cu Chulainn swings his spear Gae Bulg in a circle around him, Damaging and Knocking Up all Enemies. Successfully hitting an enemy minion with this ability restores 10 Rage, 26 for a god (to a max of 36).\nIn his Berserk Form, Cu Chulainn instead gives a terrifying yell, Damaging all Enemies and causing them to Tremble. This yell costs no Rage and has a 35s cooldown.",
                    "Cu Chulainn suffers a 20% Movement Speed Slow while channeling both abilities.",
                    "Cu Chulainn is immune from crowd control effects while using this ability.",
                    "Damage: 175/245/315/385/455 (+65% of your Physical Power)",
                    "Tremble Duration: 1s",
                    "Ability Type: Circle, Knockup, Damage",
                    "Radius: 30",
                    "Cost: 14 Rage",
                    "Cooldown: 105/100/95/90/85 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Cupid",
        "Attributes": {
            "Title:": "God of Love",
            "Pantheon:": "Roman",
            "Type:": "Ranged,Physical",
            "Class:": "Hunter",
            "Pros:": "High Single Target Damage, High Sustain",
            "Difficulty:": "Easy",
            "Release date:": "August 17, 2012",
            "Favor:": "1,500",
            "Gems:": "200",
            "Voicelines:": "Cupid voicelines",
            "Voice actor:": "Brina Palencia",
            "Health:": "445 (+72)",
            "Mana:": "230 (+39)",
            "Speed:": "365 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.95 (+1.8%)",
            "Damage:": "35 (+ 2.5)+ 100% of Physical Power",
            "Progression:": "None",
            "Physical:": "11 (+3)",
            "Magical:": "23 (+1.3)",
            "HP5:": "8 (+0.67)",
            "MP5:": "4.6 (+0.35)",
            "imageURL": require("../assets/images/Cupid.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Lovestruck",
                "description": "Every hit with a Basic Attack gives Cupid a Heart Stack that increases the damage or healing of his abilities. Hitting an enemy god grants an additional stack. Heart Bomb and Fields of Love will always consume the Heart Stacks and at 8 Stacks they will have additional effects.",
                "imageURL": require("../assets/images/Cupid_ability_0.png"),
                "notes": [
                    "Applies up to 16% increased Damage/Healing to Cupid's abilities.",
                    "Damage/Healing per Heart: 2%",
                    "Max Stacks: 8",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Heart Bomb",
                "description": "Cupid fires an arrow of love at the target, causing damage when it hits and Slowing them. After a short time, the targets heart explodes, dealing the damage again to the target and all enemies within the radius. If Cupid has max Heart Stacks then all enemies in the explosion area are Stunned for 1s. Minions take 55% increased damage from Heart Bomb.",
                "imageURL": require("../assets/images/Cupid_ability_1.png"),
                "notes": [
                    "Deals 100/160/220/280/340 (+160% of your Physical Power) damage to the target by default (155/248/341/434/527 (+248% of your Physical Power) damage to minions.",
                    "With max Lovestruck stacks, deals 116/185.6/255.2/324.8/394.4 (+186% of your Physical Power) damage to the target and 58/92.8/127.6/162.4/197.2 (+93% of your Physical Power) damage in an area around it.",
                    "Damage: 50/80/110/140/170 (+80% of your Physical Power)",
                    "Slow: 20%",
                    "Detonation Duration: 3s",
                    "Ability Type: Line, Crowd Control, Damage",
                    "Range/Radius: 55/25",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Share the Love",
                "description": "Cupid places 3 floating hearts at his ground target location that heal himself or allied gods and provide a passive stack when picked up. Cupid regenerates Mana and heals for 60% of the value for each heart that is picked up by an ally.",
                "imageURL": require("../assets/images/Cupid_ability_2.png"),
                "notes": [
                    "Heals a total of 75/150/225/300/375 health to a single ally.",
                    "Each heart heals for 29/58/87/116/145 (87/174/261/348/435 total) health with max Lovestruck stacks.",
                    "Cupid heals for 15/30/45/60/75 health per heart when picked up by allies (45/90/135/180/225 if all 3 hearts picked up by allies).",
                    "Map collision affects the placement of the hearts.",
                    "Heal per Heart: 25/50/75/100/125",
                    "Mana Regen per Heart: 30",
                    "Heart Lifetime: 8s",
                    "Ability Type: Area, Heal",
                    "Range/Radius: 55/20",
                    "Cost: 50 mana",
                    "Cooldown: 13 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Flutter",
                "description": "Passive: Cupid gains increased Attack Speed.Active: Cupid flutters forward quickly, leaving a trail behind him that increases all allies' movement speed. Additionally, after dashing, Cupid doubles the Passive Attack Speed he gains from this ability for 4s.",
                "imageURL": require("../assets/images/Cupid_ability_3.png"),
                "notes": [
                    "Passive: Cupid gains increased Attack Speed.\nActive: Cupid flutters forward quickly, leaving a trail behind him that increases all allies' movement speed. Additionally, after dashing, Cupid doubles the Passive Attack Speed he gains from this ability for 4s.",
                    "Cupid gains 8/16/24/32/40% Attack Speed after using this ability.",
                    "Attack Speed: 4/8/12/16/20%",
                    "Movement Speed: 30%",
                    "Lifetime: 6s",
                    "Ability Type: Dash, Buff",
                    "Range: 55",
                    "Cost: 70 mana",
                    "Cooldown: 16/15/14/13/12 seconds"
                ]
            },
            {
                "name": "Ultimate  - Fields of Love",
                "description": "Cupid fires arrows of love at his ground target location, slowing enemies in the area and crippling them, preventing movement abilities. The arrows grow and explode, dealing damage and Mesmerizing enemies. Any damage done breaks the Mesmerize effect. If Cupid has max Heart Stacks the Mesmerize duration is doubled.",
                "imageURL": require("../assets/images/Cupid_ability_4.png"),
                "notes": [
                    "Has a postfire of 0.4s.",
                    "With max Lovestruck stacks, deals 232/325/417.6/510.4/603.2 (+116% your Physical Power) damage and a mesmerize duration of 2s.",
                    "Damage: 200/280/360/440/520 (+100% of your Physical Power)",
                    "Slow: 30%",
                    "Mesmerize: 1s",
                    "Ability Type: Circle, Crowd Control, Damage",
                    "Range/Radius: 55/35",
                    "Cost: 80/90/100/110/120 mana",
                    "Cooldown: 100 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Da Ji",
        "Attributes": {
            "Title:": "The Nine-Tailed Fox",
            "Pantheon:": "Chinese",
            "Type:": "Melee,Physical",
            "Class:": "Assassin",
            "Pros:": "High Single Target Damage",
            "Difficulty:": "Average",
            "Release date:": "May 24, 2017",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Da Ji voicelines",
            "Voice actor:": "Mallorie Rodak",
            "Health:": "450 (+76)",
            "Mana:": "210 (+40)",
            "Speed:": "375 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+2%)",
            "Damage:": "39 (+ 2.25)+ 100% of Physical Power",
            "Progression:": "1/1/1x damage and swing time",
            "Physical:": "14 (+3)",
            "Magical:": "23 (+1.3)",
            "HP5:": "9 (+0.7)",
            "MP5:": "4.6 (+0.37)",
            "imageURL": require("../assets/images/Da_Ji.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Torture Blades",
                "description": "Da Ji's sharp claws cause her enemies to Bleed when struck by her basic attacks. Bleeding causes the enemy to take additional damage every 1s for 2s (This damage does not trigger Item effects). Bleed can stack any number of times on the same target.",
                "imageURL": require("../assets/images/Da_Ji_ability_0.png"),
                "notes": [
                    "Each basic attack deals a total of 14 (+14% of your Physical Power) damage.",
                    "Damage Per Tick: 7 (+7% of your Physical Power)",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Horrible Burns",
                "description": "Da Ji heats up her claws, causing her next successfully hit Basic Attack to burn the target, dealing instant bonus damage, additional damage every 1s for 3s and Slowing them for 3s. Da Ji gains Haste when this ability activates, which lasts until she hits a target.",
                "imageURL": require("../assets/images/Da_Ji_ability_1.png"),
                "notes": [
                    "Deals a total of 90/144/198/246/300 (+85% of your Physical Power) damage.",
                    "Burst Damage: 30/60/90/120/150 (+25% of your Physical Power)",
                    "Damage Per Tick: 20/28/36/42/50 (+20% of your Physical Power)",
                    "Slow: 15/20/25/30/35%",
                    "Ability Type: Buff, Damage",
                    "Cost: 50 mana",
                    "Cooldown: 9 seconds"
                ]
            },
            {
                "name": "2nd Ability  - One Thousand Cuts",
                "description": "Da Ji lashes out with her claws at nearby enemies, executing 4 strikes that damage all enemies in range and apply the Bleed from Torture Blades.While this ability is channeling Da Ji moves freely in all directions, gains 40% increased Movement Speed, immunity to Slows and Knockups, and her tails mitigate Damage dealt to her by Enemy Gods who are behind her.",
                "imageURL": require("../assets/images/Da_Ji_ability_2.png"),
                "notes": [
                    "Da Ji lashes out with her claws at nearby enemies, executing 4 strikes that damage all enemies in range and apply the Bleed from Torture Blades.\nWhile this ability is channeling Da Ji moves freely in all directions, gains 40% increased Movement Speed, immunity to Slows and Knockups, and her tails mitigate Damage dealt to her by Enemy Gods who are behind her.",
                    "Has a duration of 2s (damage is dealt every .5s).",
                    "Can deal up to 140/220/310/380/460 (+160% of your Physical Power) damage.",
                    "Can be cancelled early.",
                    "Damage Per Hit: 35/55/75/95/115 (+40% of your Physical Power)",
                    "Damage Mitigation: 20/25/30/35/40%",
                    "Ability Type: Area, Buff, Damage",
                    "Range: 20",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 11 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Trickster Spirit",
                "description": "Da Ji selects a single allied or enemy target and teleports to their location after a short delay. Upon arriving at the target, she lashes out with her claws, dealing damage and applying the Bleed from Torture Blades to all enemies around her.",
                "imageURL": require("../assets/images/Da_Ji_ability_3.png"),
                "notes": [
                    "Can be used through walls.",
                    "Da Ji's teleport location is determined by the direction she faces before teleporting and can move freely before teleporting.",
                    "Damage: 80/120/160/200/240 (+80% of your Physical Power)",
                    "Ability Type: Circle, Teleport, Damage",
                    "Range/Radius: 55/10",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 15 seconds"
                ]
            },
            {
                "name": "Ultimate  - Paolao",
                "description": "Da Ji Summons her signature torture device, the Paolao. As she hovers above the device she may fire up to 3 shots. Enemy gods hit take damage and become Chained and Slowed. At the end of her ability Chained enemies are pulled to the Paolao becoming Stunned and then taking damage 3 times over 2s. If a god hit by this ability becomes Crowd Control Immune at any time, they break the Chain on them and cannot be Chained again until this ability ends.",
                "imageURL": require("../assets/images/Da_Ji_ability_4.png"),
                "notes": [
                    "The Paolao lasts for 9s.",
                    "The chains have a travel time of .3s.",
                    "Da Ji will climb down 40 units from the Paolao (at the closest valid point near the targeter) as soon as the 3 chains have been used, or after 5s have passed.",
                    "Da Ji is untargetable for the duration. She also becomes CC immune while charging up the ability & while on top of the Paolao itself.",
                    "Can deal up to 390/490/590/690/790 (+210% of your Physical Power) damage.",
                    "Can be cancelled early.",
                    "Shot Damage: 70/80/90/100/110 (+50% of your Physical Power)",
                    "Chain Slow: 20%",
                    "Pull Damage per Tick: 60/90/120/150/180 (+20% of your Physical Power)",
                    "Pull Stun Duration: 1s",
                    "Ability Type: Circle, Crowd Control, Damage",
                    "Range/Radius: 80/10",
                    "Cost: 100 mana",
                    "Cooldown: 120 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Danzaburou",
        "Attributes": {
            "Title:": "The Legendary Tanuki",
            "Pantheon:": "Japanese",
            "Type:": "Ranged,Physical",
            "Class:": "Hunter",
            "Pros:": "High Area Damage",
            "Difficulty:": "Average",
            "Release date:": "December 15, 2020",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Danzaburou voicelines",
            "Voice actor:": "Dai Tabuchi",
            "Health:": "460 (+78)",
            "Mana:": "230 (+38)",
            "Speed:": "370 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "1 (+1.4%)",
            "Damage:": "35 (+ 2.6)+ 100% of Physical Power",
            "Progression:": "None",
            "Physical:": "13 (+2.9)",
            "Magical:": "23 (+1.3)",
            "HP5:": "7 (+0.69)",
            "MP5:": "4.4 (+0.38)",
            "imageURL": require("../assets/images/Danzaburou.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Dubious Savings",
                "description": "Every time Danzaburou actively gains gold, he stores 10% into one of his money pouches instead. When a pouch is completely filled, Danzaburou gains bonus gold and a permanent Physical Power increase before switching to a larger money pouch.",
                "imageURL": require("../assets/images/Danzaburou_ability_0.png"),
                "notes": [
                    "Requires a total of 720 Gold and gives a total of 1,295 Gold as well as 40 Physical Power.",
                    "Pouch Thresholds: 80/140/200/300 Gold",
                    "Bonus Power: 10 per pouch",
                    "Bonus Gold: 180/265/350/500",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Fool’s Gold",
                "description": "Danzaburou rolls out 3 money bags that pass through and damage Enemy minions but stop on Enemy gods, slowing as they travel. Gods hit are damaged and Intoxicated, dropping a gold coin that Danzaburou or his ally gods can pick up to provide him 10 gold.When a money bag stops moving, it reveals to be an explosive which detonates after a short delay. Subsequent hits of the money bag or explosions deal 15% damage.",
                "imageURL": require("../assets/images/Danzaburou_ability_1.png"),
                "notes": [
                    "Danzaburou rolls out 3 money bags that pass through and damage Enemy minions but stop on Enemy gods, slowing as they travel. Gods hit are damaged and Intoxicated, dropping a gold coin that Danzaburou or his ally gods can pick up to provide him 10 gold.\nWhen a money bag stops moving, it reveals to be an explosive which detonates after a short delay. Subsequent hits of the money bag or explosions deal 15% damage.",
                    "The bags have a delay time of 1s before exploding, can bounce up to 2 times and coins last up to 8s.",
                    "Each initial bag and explosion that hits an enemy deals 125/200/275/350/425 (+105% of your Physical Power) damage and 19/30/41/52/64 (+16% of your Physical Power) damage on subsequent hits/explosions and dealing up to 163/260/357/454/553 (+137% of your Physical Power) damage if all 3 bags/explosions hit the same target and provides up to 30 gold to Danzaburou/allies.",
                    "Intoxications from multiple bags do not stack in duration.",
                    "Damage: 95/145/195/245/295 (+75% of your Physical Power)",
                    "Explosion Damage: 30/55/80/105/130 (+30% of your Physical Power)",
                    "Intoxicate Duration: 0.6/0.8/1/1.2/1.4s",
                    "Ability Type: Line, Intoxicate, Damage",
                    "Range/Radius: 70/12",
                    "Cost: 70/75/80/85/90 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Alluring Spirits",
                "description": "Danzaburou takes a swig of his sake bottle, gaining health, before hurling it in front of him dealing damage to Enemies in the inner circle. Jungle Camps take an extra+40% damage.The bottle of sake applies stacks to Enemy gods in the area slowing, and upon reaching 3 stacks, taunting (with no DR) them towards the sake bottle. Enemies that take more than 30% of their max. Health while taunted are broken out early.",
                "imageURL": require("../assets/images/Danzaburou_ability_2.png"),
                "notes": [
                    "Danzaburou takes a swig of his sake bottle, gaining health, before hurling it in front of him dealing damage to Enemies in the inner circle. Jungle Camps take an extra+40% damage.\nThe bottle of sake applies stacks to Enemy gods in the area slowing, and upon reaching 3 stacks, taunting (with no DR) them towards the sake bottle. Enemies that take more than 30% of their max. Health while taunted are broken out early.",
                    "Deals 112/182/252/322/402 (+98% of your Physical Power) damage to jungle minions.",
                    "Has a damage radius of 13.",
                    "Slows up to 30% (stacks every .33s) and the sake bottle can last up to 4s.",
                    "Healing: 40/65/90/115/140",
                    "Damage: 90/140/190/240/290 (+70% of your Physical Power)",
                    "Slow per stack: 10% for 1.5s (3 stacks max.)",
                    "Taunt Duration: 1s",
                    "Hits to Break: 2/2/3/3/4",
                    "Ability Type: Circle, Crowd Control, Damage",
                    "Range/Radius: 45/18",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 16/15/14/13/12 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Tanuki Trickery",
                "description": "Danzaburou creates a field where he moves faster, is slow immune, takes less damage, and has no basic attack penalty. Enemies are slowed by 20%. If he leaves the field it fades turning him into a leaf with other decoys that mimic his movement. As a leaf his movement speed is increased, he is slow immune and can pass through enemies and allies. After a short delay from transforming, any hit from Enemy gods or if Danzaburou himself attacks, he will revert back.",
                "imageURL": require("../assets/images/Danzaburou_ability_3.png"),
                "notes": [
                    "Unlike other gods who use stealth under a structure's attack radius, if Danzaburou enters it's attack range while invisible, he will not be revealed.",
                    "Movement Speed: 20%",
                    "Leaf Movement Speed: 30/32.5/35/37.5/40%",
                    "Reduced Damage: 15%",
                    "Field Duration: 5s",
                    "Leaf Duration: 4s",
                    "Ability Type: Circle, Buff",
                    "Radius: 24",
                    "Cost: 70 mana",
                    "Cooldown: 16 seconds"
                ]
            },
            {
                "name": "Ultimate  - Uproarious Rocket",
                "description": "Danzaburou summons a magical leaf which transforms into a large bamboo rocket! While preparing, Danzaburou can aim the rocket within 180 degrees to lock onto Enemy gods or he can refire this ability to become the rocket, also becoming damage immune.Once fired the Rocket will pass through and damage Enemy minions, stopping on the first Enemy god hit damaging and stunning them while dealing 75% damage in a larger area.",
                "imageURL": require("../assets/images/Danzaburou_ability_4.png"),
                "notes": [
                    "Danzaburou summons a magical leaf which transforms into a large bamboo rocket! While preparing, Danzaburou can aim the rocket within 180 degrees to lock onto Enemy gods or he can refire this ability to become the rocket, also becoming damage immune.\nOnce fired the Rocket will pass through and damage Enemy minions, stopping on the first Enemy god hit damaging and stunning them while dealing 75% damage in a larger area.",
                    "Danzaburou is immune to crowd control during the prefire while having an increased turn radius and 50% Speed after refiring (up to 5s).",
                    "Deals 225/270/315/360/405 (+75% of your Physical Power) damage to enemies in the AoE.",
                    "Danazburou has up to 1.5s to refire the ability before automatically firing.",
                    "Damage: 300/360/420/480/540 (+100% of your Physical Power)",
                    "Stun Duration: 1/1.1/1.2/1.3/1.4s",
                    "Ability Type: Line, Crowd Control, Damage",
                    "Range/Radius: 120/30",
                    "Cost: 100 mana",
                    "Cooldown: 100 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Discordia",
        "Attributes": {
            "Title:": "Goddess of Strife",
            "Pantheon:": "Roman",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "High Area Damage",
            "Difficulty:": "Average",
            "Release date:": "November 6, 2017",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Discordia voicelines",
            "Voice actor:": "Cristina Valenzuela",
            "Health:": "370 (+68)",
            "Mana:": "280 (+51)",
            "Speed:": "360 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.9 (+1%)",
            "Damage:": "34 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "9 (+2.7)",
            "Magical:": "23 (+1.3)",
            "HP5:": "7 (+0.45)",
            "MP5:": "5 (+0.43)",
            "imageURL": require("../assets/images/Discordia.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Contest of Gods",
                "description": "Discordia is constantly comparing herself and her teammates to see who is the best. Whichever god on her team has the top damage dealt to enemy players will receive a Power buff that scales off Discordia's level.",
                "imageURL": require("../assets/images/Discordia_ability_0.png"),
                "notes": [
                    "Grants up to 35 Physical Power and 50 Magical Power (6.5 Physical Power and 12 Magical Power at level 1) at level 20.",
                    "Physical Power: 5 + 1.5 per level",
                    "Magical Power: 10 + 2 per level",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Unruly Magic",
                "description": "Discordia sends an orb of unruly magic to a location that damages any enemies it hits along the way. At that location it will break down into 6 minor projectiles that fire out in all directions, damaging any enemies hit and bouncing off of walls.",
                "imageURL": require("../assets/images/Discordia_ability_1.png"),
                "notes": [
                    "The projectiles can bounce up to 2 times and have a max range of 75.",
                    "Orb Damage: 85/135/185/235/285 (+75% of your Magical Power)",
                    "Minor Damage: 20/30/40/50/60 (+10% of your Magical Power)",
                    "Ability Type: Line, Damage",
                    "Range: 55",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Strife",
                "description": "Discordia creates an area of Strife that damages all enemies hit. If 2 or more enemy gods are hit at the same time they will be afflicted by Madness for 1s, forcing them to attack each other for additional damage. The same is true for minions. If only a single target of one type is hit then it becomes Rooted for 1s instead.",
                "imageURL": require("../assets/images/Discordia_ability_2.png"),
                "notes": [
                    "Damage: 80/120/160/200/240 (+60% of your Magical Power)",
                    "Madness Damage Per Hit: 10/20/30/40/50 (+10% of your Magical Power)",
                    "Ability Type: Area, Crowd Control, Damage",
                    "Range: 60",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 13 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Erratic Behavior",
                "description": "Discordia leaps a short distance and then creates an area of confusion where she lands that persists for 5s. While inside the area she becomes stealthed, gains bonus movement speed, and Her ability cooldowns are decreased by an additional amount of time every .5s she remains in the area. Attacking from the area will briefly reveal her.",
                "imageURL": require("../assets/images/Discordia_ability_3.png"),
                "notes": [
                    "Unruly Magic/Strife total CDR: 5/7.5/10/12s",
                    "Golden Apple of Discord total CDR: 5s (with no CDR items/buffs).",
                    "Discordia is revealed for 1s when attacking and permanently when entering a structure's attack range.",
                    "Movement Speed Buff: 20/25/30/35/40%",
                    "1 and 2 Cooldown Decrease Per Tick: 0.5/0.75/1/1.25/1.5s",
                    "Ultimate Cooldown Decrease Per Tick: 0.5s",
                    "Ability Type: Circle, Buff, Leap",
                    "Range/Radius: 40/15",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 13 seconds"
                ]
            },
            {
                "name": "Ultimate  - Golden Apple of Discord",
                "description": "Discordia throws her Golden Apple of Discord that damages and passes through minions and bounces off of walls. If the Apple hits an enemy god it will damage them and force them to hold the Apple.Gods holding the apple will become intolerable, causing them to be Crippled, Intoxicated while they constantly boast.At the end of the duration, the Apple will detonate, dealing damage and spreading the effects to nearby gods.",
                "imageURL": require("../assets/images/Discordia_ability_4.png"),
                "notes": [
                    "Discordia throws her Golden Apple of Discord that damages and passes through minions and bounces off of walls. If the Apple hits an enemy god it will damage them and force them to hold the Apple.",
                    "Gods holding the apple will become intolerable, causing them to be Crippled, Intoxicated while they constantly boast.",
                    "At the end of the duration, the Apple will detonate, dealing damage and spreading the effects to nearby gods.",
                    "Discordia is CC immune for the duration she holds the Golden Apple of Discord in her hands.",
                    "Deals a total of 325/400/475/550/625 (+110% of your Magical Power) damage to a single target.",
                    "The projectile can bounce an unlimited number of times during the throw.",
                    "Initial Damage: 125/150/175/200/225 (+50% of your Magical Power)",
                    "Detonate Damage: 200/250/300/350/400 (+60% of your Magical Power)",
                    "1st Target Duration: 2s and AoE",
                    "Spread Targets Duration: 3s and Single Target",
                    "Ability Type: Line, Crowd Control, Damage",
                    "Range: 190/35",
                    "Cost: 100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Erlang Shen",
        "Attributes": {
            "Title:": "The Illustrious Sage",
            "Pantheon:": "Chinese",
            "Type:": "Melee,Physical",
            "Class:": "Warrior",
            "Pros:": "High Single Target Damage, High Attack Speed",
            "Difficulty:": "Average",
            "Release date:": "July 6, 2016",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Erlang Shen voicelines",
            "Voice actor:": "Brandon Mcinnis",
            "Health:": "475 (+82)",
            "Mana:": "220 (+35)",
            "Speed:": "375 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+1%)",
            "Damage:": "39 (+ 2)+ 100% of Physical Power",
            "Progression:": ".75/.75/.75/1.1/.9x damage and swing time; 4th attack hits all enemies in an AoE",
            "Physical:": "17 (+3)",
            "Magical:": "24 (+1.3)",
            "HP5:": "8 (+0.6)",
            "MP5:": "4.7 (+0.3)",
            "imageURL": require("../assets/images/Erlang_Shen.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Howling Celestial Dog",
                "description": "Each time Erlang Shen hits an enemy with a Basic Attack, his dog hits as well for 5% of his Basic Attack power and 2% of the target's max. health. The percentage damage only works against gods and minions.",
                "imageURL": require("../assets/images/Erlang_Shen_ability_0.png"),
                "notes": [
                    "The dog's attacks can also crit and don't proc item effects.",
                    "If Erlang Shen hit multiple enemies with his 4th basic attack, the dog will hit the last enemy hit by the cleave.",
                    "Damage: (+5% of your Basic Attack Power)",
                    "Ability Type: Buff, Damage"
                ]
            },
            {
                "name": "1st Ability  - Spot Weakness",
                "description": "Erlang Shen opens his third eye and analyzes the enemy's strengths and weaknesses. When activated, Erlang Shen gains additional Physical Damage and Lifesteal on each strike. He also applies a stacking debuff to enemy gods, reducing their damage dealt to all sources. Stacks last 3s. If the buff effect has ended and the ability is on Cooldown, successful Basic Attacks reduce the Cooldown of this ability by 1s.",
                "imageURL": require("../assets/images/Erlang_Shen_ability_1.png"),
                "notes": [
                    "Applies up to 15/16.5/18/19.5/21% damage reduction to enemies hit.",
                    "Empowered basic attacks also trigger item effects while active.",
                    "The CDR can proc multiple times when hitting more than one enemy while on cooldown (4th basic attack only).",
                    "Physical Damage: 10/20/30/40/50 (+5% of your Physical Power)",
                    "Lifesteal: 4/8/12/16/20%",
                    "Damage Reduction: 5/5.5/6/6.5/7%",
                    "Max Stacks: 3",
                    "Duration: 5s",
                    "Ability Type: Buff, Damage",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Pin",
                "description": "Erlang Shen launches a spear that damages enemies on impact. Enemies in the dead center of the effect when it lands are Rooted in place.",
                "imageURL": require("../assets/images/Erlang_Shen_ability_2.png"),
                "notes": [
                    "Impact speed is based on distance, from instant at minimum range to .5s at max range.",
                    "The center of the ability has a radius of 8.",
                    "Damage: 85/130/175/220/265 (+55% of your Physical Power)",
                    "Duration: 1.5s",
                    "Ability Type: Circle, Root, Damage",
                    "Range/Radius: 60/20",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 16 seconds"
                ]
            },
            {
                "name": "3rd Ability  - 72 Transformations",
                "description": "Erlang Shen transforms into a Mink or Turtle and charges forward, becoming immune to knock ups and slows. Mink: Damages all enemies, stopping on first god hit and increasing Attack Speed and Movement Speed for 4s. Turtle: Knocks up enemy gods and gains a health shield that is boosted by 75% of your protections from items for 12s.",
                "imageURL": require("../assets/images/Erlang_Shen_ability_3.png"),
                "notes": [
                    "The dash speed of Mink Form is 200% of current movement speed while Turtle Form's is 175% of current movement speed.",
                    "Has a targeter length of 80 which displays as turtle if used below 40 units and mink when above 40 units.",
                    "The shield from turtle form doesn't protect from execute effects.",
                    "Turtle Damage: 55/100/145/190/235 (+40% of your Physical Power)",
                    "Shield Health: 50/100/150/200/250",
                    "Mink Damage: 80/140/200/260/320 (+70% of your Physical Power)",
                    "Mink Attack Speed: 15/20/25/30/35%",
                    "Mink Movement Speed: 15%",
                    "Ability Type: Line, Buff, Damage",
                    "Cost: 65/70/75/80/85 mana",
                    "Cooldown: 16 seconds"
                ]
            },
            {
                "name": "Ultimate  - 9 Turns Blessing",
                "description": "Erlang Shen Taunts nearby Enemy gods, gaining Damage Mitigation for the next 4s. Afterwards, if Erlang Shen is still alive he is Healed for a flat amount plus 12% of his Maximum Health.",
                "imageURL": require("../assets/images/Erlang_Shen_ability_4.png"),
                "notes": [
                    "Heal: 100/150/200/250/300 (+12% of your Maximum Health)",
                    "Damage Mitigation: 35%",
                    "Taunt Duration: 1.5s",
                    "Ability Type: Cone, Taunt",
                    "Range: 30",
                    "Cost: 80/85/90/95/100 mana",
                    "Cooldown: 70 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Eset",
        "Attributes": {
            "Title:": "Goddess of Magic",
            "Pantheon:": "Egyptian",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "High Crowd Control, High Area Damage",
            "Difficulty:": "Average",
            "Release date:": "May 15, 2013",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Eset voicelines",
            "Voice actor:": "Caitlin Glass",
            "Health:": "380 (+72)",
            "Mana:": "280 (+51)",
            "Speed:": "360 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "1 (+0%)",
            "Damage:": "35 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "1/1/1.5x damage and swing time, hitting in a 6ft AoE on the final blow",
            "Physical:": "9 (+2.7)",
            "Magical:": "23 (+1.3)",
            "HP5:": "6 (+0.45)",
            "MP5:": "4.8 (+0.43)",
            "imageURL": require("../assets/images/Eset.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Funeral Rites",
                "description": "Eset shares additional HP5 and MP5 with nearby allies. For every player death within 80 units, her aura gains an additional Stack (max. 10). Upon reaching 10 Stacks, Eset gains an additional 10% Cooldown Reduction. Additionally, Eset's final Basic Attack in her progression has a wider radius (+2).",
                "imageURL": require("../assets/images/Eset_ability_0.png"),
                "notes": [
                    "Grants +20 HP5 and MP5 at max stacks.",
                    "Eset's final basic attack benefits from only 33% Lifesteal when hitting multiple enemies.",
                    "HP5: 2 HP5 per stack",
                    "MP5: 2 MP5 per stack",
                    "Ability Type: Circle, Buff",
                    "Radius: 55"
                ]
            },
            {
                "name": "1st Ability  - Wing Gust",
                "description": "Eset flaps her wings, gaining increased movement speed with no backpedal penalty, and sending forth 4 wing gusts in a line, each dealing Magical Damage to all targets in their path. Eset is immune to Root and Knockback effects while casting.",
                "imageURL": require("../assets/images/Eset_ability_1.png"),
                "notes": [
                    "Can deal up to 180/260/340/420/500 (+180% of your Magical Power) damage.",
                    "Damage: 45/65/85/105/125 (+45% of your Magical Power)",
                    "Gusts Spawned: 4",
                    "Movement Speed: 25%",
                    "Firing Duration: 3s",
                    "Ability Type: Line, Buff, Damage",
                    "Range: 55",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 10 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Spirit Ball",
                "description": "Eset sends forth a ball of spirit energy. As the ball travels, it gains in power up to 1.5x at max. range. At any time, Eset can activate the ability to detonate the ball, dealing Magical Damage and Stunning enemies within 10 units, scaling in duration up to 1.5s at max range.",
                "imageURL": require("../assets/images/Eset_ability_2.png"),
                "notes": [
                    "Deals 105/172.5/240/307.5/375 (+105% of your Magical Power) damage at max range.",
                    "Can be detonated at any time, even while under crowd control or dead.",
                    "Damage: 70/115/160/205/250 (+70% of your Magical Power)",
                    "Stun: 1s",
                    "Ability Type: Line, Stun, Damage",
                    "Range/Radius: 80/10",
                    "Cost: 55/60/65/70/75 mana",
                    "Cooldown: 10 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Dispel Magic",
                "description": "Eset Silences and slows enemy gods at her target location. Enemy gods hit also lose a portion of their Magical Protection. If Eset successfully hits an enemy god, allies near the Dispel Magic or Eset gain a shield. If Eset hits multiple enemy gods, the shield is increased by 30% for each enemy hit after the first up to a maximum of 60%.",
                "imageURL": require("../assets/images/Eset_ability_3.png"),
                "notes": [
                    "Applies up to 80/160/240/320/400 shield health when hitting 3 enemy gods.",
                    "The shield doesn't protect from execute effects.",
                    "Slow: 20/22.5/25/27.5/30%",
                    "Magical Protection Debuff: 10%",
                    "Debuff Duration: 1.5/1.75/2/2.25/2.5s",
                    "Silence: 1.5/1.75/2/2.25/2.5s",
                    "Shield: 50/100/150/200/250",
                    "Ability Type: Circle, Silence, Damage",
                    "Range/Radius: 55/15",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "Ultimate  - Circle of Protection",
                "description": "Eset plants her staff at her target location for 5s. Allies within its radius take less damage. Any damage dealt within the radius charges up the staff. If Eset activates the staff again, it explodes, dealing damage to enemies inside and healing allies.",
                "imageURL": require("../assets/images/Eset_ability_4.png"),
                "notes": [
                    "Can be detonated at any time, even while channeling Wing Gust, under crowd control or dead.",
                    "Deals up to 360/484/625/784/960 (+100%/112.5%/125%/137.5%/150% of your Magical Power) damage and heals up to 150/247.5/362.5/495/645 health when fully charged.",
                    "Damage: 180/215/250/285/320 (+50% of your Magical Power)",
                    "Healing: 75/110/145/180/215",
                    "Damage Mitigation: 30%",
                    "Max Charge: 700/1400/2100/2800/3500",
                    "Max Charge Dmg/Heal Scale: 2/2.25/2.5/2.75/3x",
                    "Ability Type: Circle, Buff, Damage",
                    "Range/Radius: 40/30",
                    "Cost: 80/90/100/110/120 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Fafnir",
        "Attributes": {
            "Title:": "Lord of Glittering Gold",
            "Pantheon:": "Norse",
            "Type:": "Melee,Magical",
            "Class:": "Guardian",
            "Pros:": "High Defense, High Mobility",
            "Difficulty:": "Average",
            "Release date:": "June 7, 2016",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Fafnir voicelines",
            "Voice actor:": "Ari Ross",
            "Health:": "495 (+90)",
            "Mana:": "200 (+40)",
            "Speed:": "365 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "0.9 (+1.2%)",
            "Damage:": "37 (+ 1.55)+ 20% of Magical Power",
            "Progression:": "1/1/1/1x damage and swing time",
            "Physical:": "21 (+3.4)",
            "Magical:": "27 (+1.3)",
            "HP5:": "7 (+0.54)",
            "MP5:": "4.5 (+0.45)",
            "imageURL": require("../assets/images/Fafnir.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Endless Greed",
                "description": "Fafnir gains 2 bonus gold from all enemy kills and assists, including minions. Fafnir also gains 1 gold as a Dwarf and 2 gold as a Dragon each time he hits an enemy god with an ability, once per god per ability. Fafnir gains bonus Protections based on the amount of gold he is currently holding, capped at 1000 gold in hand.",
                "imageURL": require("../assets/images/Fafnir_ability_0.png"),
                "notes": [
                    "Can exceed the physical/magical protection caps of 325 (up to 360 protections).",
                    "Bonus Protections: Up to 35 Magical and Physical Protections",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Cursed Strength",
                "description": "Fafnir hurls his hammer forward, dealing damage to enemies in its path. If Fafnir hits a god the hammer stops short and Stuns them. The Stunned god also radiates out a cursed pulse, Slowing them and nearby enemies by 20% for 3s.In dragon form, this ability deals increased damage that ticks 3 times over 3s. Also, the cursed pulse shreds Protections in addition to Slowing.",
                "imageURL": require("../assets/images/Fafnir_ability_1.png"),
                "notes": [
                    "Fafnir hurls his hammer forward, dealing damage to enemies in its path. If Fafnir hits a god the hammer stops short and Stuns them. The Stunned god also radiates out a cursed pulse, Slowing them and nearby enemies by 20% for 3s.\nIn dragon form, this ability deals increased damage that ticks 3 times over 3s. Also, the cursed pulse shreds Protections in addition to Slowing.",
                    "Can go through walls.",
                    "Dragon form's damage over time effect is dealt at 0s, 1.5s and 3s from application and deals a total of 150/210/270/330/390 (+75% of your Magical Power) damage.",
                    "Damage: 100/140/180/220/260 (+50% of your Magical Power)",
                    "Stun: 1/1.1/1.2/1.3/1.4s",
                    "Dragon Damage Per Tick: 50/70/90/110/130 (+25% of your Magical Power)",
                    "Dragon Protection Debuff: 20%",
                    "Ability Type: Line, Crowd Control, Damage",
                    "Range/Radius: 55/30",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 15/14.5/14/13.5/13 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Coerce",
                "description": "Fafnir coerces his allies into fighting harder, boosting Attack Speed for 5s and healing himself. While Coerce is active Fafnir deals bonus Magic Damage whenever the affected ally damages an enemy.In dragon form, this ability has a larger area of effect and can buff multiple allies.",
                "imageURL": require("../assets/images/Fafnir_ability_2.png"),
                "notes": [
                    "Fafnir coerces his allies into fighting harder, boosting Attack Speed for 5s and healing himself. While Coerce is active Fafnir deals bonus Magic Damage whenever the affected ally damages an enemy.\nIn dragon form, this ability has a larger area of effect and can buff multiple allies.",
                    "The bonus damage is based off the attack or ability that triggered it, and will proc Fafnir's \"on ability hit\" item effects.",
                    "Last hits will always be credited to the god that dealt the killing blow even if the bonus damage is what killed them.",
                    "Attack Speed Buff: 20/22.5/25/27.5/30%",
                    "Bonus Damage: 4/8/12/16/20% of the damage dealt",
                    "Self Heal: 40/60/80/100/120",
                    "Ability Type: Target, Buff, Damage",
                    "Range/Radius: 55/10, 20",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 16/15.5/15/14.5/14 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Underhanded Tactics",
                "description": "Fafnir leaps to a target location and executes a despicable strike, dealing damage and disarming enemies in front of him for 2s.In dragon form, Fafnir can leap much further. Also, this ability deals increased damage that ticks three times over 3s and Fafnir Stuns the enemy god closest to him for 2s in addition to Disarming.",
                "imageURL": require("../assets/images/Fafnir_ability_3.png"),
                "notes": [
                    "Fafnir leaps to a target location and executes a despicable strike, dealing damage and disarming enemies in front of him for 2s.\nIn dragon form, Fafnir can leap much further. Also, this ability deals increased damage that ticks three times over 3s and Fafnir Stuns the enemy god closest to him for 2s in addition to Disarming.",
                    "Leap speed is based on distance, from instant at minimum range to .5s at max range.",
                    "The leap in dwarf form has a range of 55 and dragon form has a range of 70.",
                    "Dragon form's damage over time effect is dealt at 0s, 1.5s and 3s from application and deals a total of 120/180/240/300/360 (+90% of your Magical Power) damage.",
                    "Damage: 80/120/160/200/240 (+60% of your Magical Power)",
                    "Dragon Damage Per Tick: 40/60/80/100/120 (+30% of your Magical Power)",
                    "Ability Type: Cone, Leap, Damage",
                    "Radius: 75, 90",
                    "Cost: 60 mana",
                    "Cooldown: 15 seconds"
                ]
            },
            {
                "name": "Ultimate  - Draconic Corruption",
                "description": "Fafnir transforms into a terrifying dragon and is untargetable during the process. When he emerges in dragon form, he regains 200 Mana and nearby enemies become poisoned, taking damage three times over 3s. He remains in this form for a duration or until the ability is activated again. As a dragon, his abilities have additional effects and his basic attack changes to a Dragon Breath that deals damage 3 times per second. Dragon Breath procs item hit effects for 25% damage and healing.",
                "imageURL": require("../assets/images/Fafnir_ability_4.png"),
                "notes": [
                    "Dragon form abilities have separate cooldowns from their regular counterparts.",
                    "Fafnir is immune to crowd control but targetable while transforming back to normal (takes 2s to do so).",
                    "Dragon breath has a range of 35, is affected by Attack Speed and benefits from only 33% Lifesteal.",
                    "Dragon form's damage over time effect is dealt at 0s, 1.5s and 3s from application and deals a total of 240/300/360/420/480 (+120% of your Magical Power) damage.",
                    "Damage Per Tick: 80/100/120/140/160 (+40% of your Magical Power)",
                    "Duration: 40/45/50/55/60s",
                    "Dragon Breath Damage: 20/30/40/50/60 (+10% of your Magical Power)",
                    "Ability Type: Circle, Buff, Damage",
                    "Radius: 30",
                    "Cost: 70 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Fenrir",
        "Attributes": {
            "Title:": "The Unbound",
            "Pantheon:": "Norse",
            "Type:": "Melee,Physical",
            "Class:": "Assassin",
            "Pros:": "High Single Target Damage, High Mobility",
            "Difficulty:": "Average",
            "Release date:": "May 1, 2013",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Fenrir voicelines",
            "Voice actor:": "Christopher Sabat",
            "Health:": "455 (+78)",
            "Mana:": "230 (+35)",
            "Speed:": "370 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+1.7%)",
            "Damage:": "38 (+ 2.3)+ 100% of Physical Power",
            "Progression:": "None",
            "Physical:": "14 (+3)",
            "Magical:": "23 (+1.3)",
            "HP5:": "8 (+0.73)",
            "MP5:": "4.2 (+0.26)",
            "imageURL": require("../assets/images/Fenrir.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Unbound Runes",
                "description": "Fenrir gains efficiency as he attacks. Every hit from a Basic Attack activates 1 Rune, up to a max. of 5. Unchained, Brutalize, and Ragnarok gain additional benefits when used at maximum Runes and the Runes are consumed. Enemy gods that Fenrir kills will fully activate all of his Runes. Assisting with a kill will grant Fenrir 3 Runes.",
                "imageURL": require("../assets/images/Fenrir_ability_0.png"),
                "notes": [
                    "Runes reset after Fenrir respawns.",
                    "Can also gain runes on damage immune targets.",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Unchained",
                "description": "Fenrir leaps forward, dealing damage to all enemies when he lands. At full Runes, the leap Stuns the enemies hit. If the leap hits a god, the Cooldown is reduced by 30%.",
                "imageURL": require("../assets/images/Fenrir_ability_1.png"),
                "notes": [
                    "The cooldown reduction is directly deducted from the current total cooldown, taking in account Cooldown %.",
                    "Damage: 85/145/205/265/325 (+95% of your Physical Power)",
                    "Stun: 1s",
                    "Ability Type: Circle, Leap, Damage",
                    "Range/Radius: 55/15",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Seething Howl",
                "description": "Fenrir rears back and howls, inspiring himself with a Physical Power, Attack Speed, and Lifesteal Buff. While inspired Fenrir generates 2 runes.",
                "imageURL": require("../assets/images/Fenrir_ability_2.png"),
                "notes": [
                    "Physical Power: 15/25/35/45/55",
                    "Physical Lifesteal: 30%",
                    "Attack Speed: 25%",
                    "Buff Duration: 6s",
                    "Ability Type: Buff",
                    "Cost: 60 mana",
                    "Cooldown: 13 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Brutalize",
                "description": "Fenrir gains increased protections and pounces to his ground target location. If there was an enemy in the radius, he strikes them 4 times, dealing damage with each strike and hits enemies around the target for 75% of the damage. While casting this ability Fenrir is immune to knockups. At full Runes, each strike gains 20% additional Physical Power scaling.",
                "imageURL": require("../assets/images/Fenrir_ability_3.png"),
                "notes": [
                    "Has a single target radius of 10.",
                    "The buff and ability can be channeled for up to 1.35s (damage is dealt every 0.33s) and can be canceled any time.",
                    "Can be channelled through dashes, but not leaps, stealths or teleports.",
                    "Deals up to 180/300/420/540/660 (+200% of your Physical Power) damage (+280% Physical Power scaling with max runes) to the target and up to 135/225/315/405/495 (+150% of your Physical Power) damage to enemies around the target and gains up to +45 Protections (+7 at level 1) at level 20.",
                    "Damage: 45/75/105/135/165 (+50% of your Physical Power)",
                    "Protections: 5 + 2 per level",
                    "Ability Type: Target, Leap, Damage",
                    "Range/Radius: 30/20",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 12/11.5/11/10.5/10 seconds"
                ]
            },
            {
                "name": "Ultimate  - Ragnarok",
                "description": "Upon Ragnarok, Fenrir grows massive in size, becoming immune to Crowd Control while moving faster. Fenrir bites enemy gods, dealing Physical damage and carrying them away. Biting a Crowd Control immune target deals the damage but ends his Ultimate. At full Runes, he gains Protections.",
                "imageURL": require("../assets/images/Fenrir_ability_4.png"),
                "notes": [
                    "Right-clicking will end it early.",
                    "Has a maximum duration of 4s before grabbing a god.",
                    "Damage: 200/275/350/425/500 (+120% of your Physical Power)",
                    "Movement Speed: 75%",
                    "Carry Duration: 1.75s",
                    "Protections: 20/30/40/50/60",
                    "Ability Type: Target, Grab, Damage",
                    "Range: 15",
                    "Cost: 100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Freya",
        "Attributes": {
            "Title:": "Queen of the Valkyries",
            "Pantheon:": "Norse",
            "Type:": "Melee,Magical",
            "Class:": "Mage",
            "Pros:": "Medium Crowd Control, High Area Damage",
            "Difficulty:": "Average",
            "Release date:": "October 18, 2012",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Freya voicelines",
            "Voice actor:": "Jamie Marchi",
            "Health:": "436 (+80)",
            "Mana:": "220 (+37)",
            "Speed:": "370 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "0.95 (+1.95%)",
            "Damage:": "35 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "14 (+2.8)",
            "Magical:": "23 (+1.3)",
            "HP5:": "7 (+0.52)",
            "MP5:": "4.5 (+0.39)",
            "imageURL": require("../assets/images/Freya.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Brisingamen's Blessing",
                "description": "Freya's necklace grants her additional Magical Lifesteal.",
                "imageURL": require("../assets/images/Freya_ability_0.png"),
                "notes": [
                    "Grants a total of 12.5% Magical Lifesteal (6.3% at level 1) at level 20.",
                    "Magical Lifesteal: 6% + 0.3% per Level",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Irradiate",
                "description": "Freya activates a Buff that makes her Basic Attacks do bonus Magical damage. Freya may cancel this ability early to put it on cooldown.",
                "imageURL": require("../assets/images/Freya_ability_1.png"),
                "notes": [
                    "Procs on-hit effects while active.",
                    "Bonus Damage: 35/50/65/80/95 (+20% of your Magical Power)",
                    "Duration: 5s",
                    "Ability Type: Buff, Damage",
                    "Cost: 45/50/55/60/65 mana",
                    "Cooldown: 8 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Pulse",
                "description": "Freya activates a Buff that makes her Basic Attacks ranged, dealing bonus Magical damage and Slowing the target and all nearby enemies. The area effect and slow are lost when Irradiate is active.",
                "imageURL": require("../assets/images/Freya_ability_2.png"),
                "notes": [
                    "The area effect can proc on-hit effects.",
                    "Each shot deals 70/95/120/145/170 (+40% of your Magical Power) damage while Irradiate is active.",
                    "Shots benefit from only 33% Lifesteal without using Irradiate.",
                    "Bonus Damage: 20/30/40/50/60 (+15% of your Magical Power)",
                    "Duration: 6s",
                    "Slow: 15/17.5/20/22.5/25%",
                    "Ability Type: Area, Buff, Damage",
                    "Range/Radius: 55/15",
                    "Cost: 45/50/55/60/65 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Banish",
                "description": "At her ground target location, Freya Banishes her enemies into the air for a short time. The enemies can't be hit or take action while in the air.",
                "imageURL": require("../assets/images/Freya_ability_3.png"),
                "notes": [
                    "Banish Duration: 1.5s",
                    "Ability Type: Circle, Banish",
                    "Range/Radius: 55/10",
                    "Cost: 70/65/60/55/50 mana",
                    "Cooldown: 18/17.5/17/16.5/16 seconds"
                ]
            },
            {
                "name": "Ultimate  - Valkyrie's Discretion",
                "description": "Freya uses her Cloak of Feathers to fly above the battlefield where she fires down blasts of Magical damage up to 4 times while flying. Freya can't be hit when at full ascension and can cancel it anytime.",
                "imageURL": require("../assets/images/Freya_ability_4.png"),
                "notes": [
                    "Can deal up to 360/500/640/780/920 (+140% of your Magical Power) damage.",
                    "Freya gains immunity from damage and crowd control effects while using this ability.",
                    "The projectiles can fire through walls.",
                    "Freya can only move through player-made walls, not map walls during the ability.",
                    "Damage per Blast: 90/125/160/195/230 (+35% of your Magical Power)",
                    "Duration: 3.6s",
                    "Ability Type: Circle, Damage",
                    "Range/Radius: 55/12",
                    "Cost: 90/95/100/105/110 mana",
                    "Cooldown: 110 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Ganesha",
        "Attributes": {
            "Title:": "God of Success",
            "Pantheon:": "Hindu",
            "Type:": "Melee,Magical",
            "Class:": "Guardian",
            "Pros:": "High Crowd Control, High Defense",
            "Difficulty:": "Average",
            "Release date:": "April 25, 2017",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Ganesha voicelines",
            "Voice actor:": "Reagan Murdock",
            "Health:": "495 (+95)",
            "Mana:": "200 (+40)",
            "Speed:": "360 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+1.2%)",
            "Damage:": "38 (+ 1.55)+ 20% of Magical Power",
            "Progression:": "1.05/.8/.8/1.5/.95x damage and swing time",
            "Physical:": "20 (+3.2)",
            "Magical:": "27 (+1.3)",
            "HP5:": "6 (+0.67)",
            "MP5:": "4.6 (+0.42)",
            "imageURL": require("../assets/images/Ganesha.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Good Fortune",
                "description": "Any time Ganesha deals a killing blow, the nearest Friendly God receives credit for the kill and Ganesha receives the rewards for an assist instead. In addition, his assist range is increased by 20 and the time before he loses his assist credit is increased by 5s.",
                "imageURL": require("../assets/images/Ganesha_ability_0.png"),
                "notes": [
                    "Duration: 15s",
                    "Ability Type: Buff",
                    "Radius: 100"
                ]
            },
            {
                "name": "1st Ability  - Turn of Fate",
                "description": "Ganesha curses his Enemies with his considerable willpower, damaging them. For each Enemy he hits (up to a maximum of 4), all Allied Gods within 55 units of Ganesha gain bonus Damage.",
                "imageURL": require("../assets/images/Ganesha_ability_1.png"),
                "notes": [
                    "Each minion hit grants 1 stack, gods grant 2.",
                    "Stacks provide up to 12% bonus damage.",
                    "Damage: 90/150/210/270/330 (+55% of your Magical Power)",
                    "Bonus Damage per Stack: 3%",
                    "Duration: 4s",
                    "Ability Type: Line, Buff, Damage",
                    "Range: 55",
                    "Cost: 65/70/75/80/85 mana",
                    "Cooldown: 14/13.5/13/12.5/12 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Ohm",
                "description": "Ganesha begins chanting and rises into the lotus position, where he is slowed slightly but may travel freely in all directions. While chanting, he silences Enemy gods in a cone in front of him, increasing Physical and Magical Protections for all nearby Allied Gods. He gains an additional 50% of the Protections he provides, and he is knockback immune while channeling this ability.",
                "imageURL": require("../assets/images/Ganesha_ability_2.png"),
                "notes": [
                    "Ganesha gains 30/45/60/75/90 Protections and suffers a 25% movement speed slow while channeling.",
                    "Duration: 1.8s",
                    "Protections: 20/30/40/50/60",
                    "Ability Type: Cone, Silence",
                    "Radius: 35",
                    "Cost: 55/60/65/70/75 mana",
                    "Cooldown: 14/13/12/11/10 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Remove Obstacles",
                "description": "Ganesha charges forward, hooking an enemy with his goad, holding them in place and damaging the enemy before knocking them up. While dashing, Ganesha passes through player-made deployables.",
                "imageURL": require("../assets/images/Ganesha_ability_3.png"),
                "notes": [
                    "The damage is dealt 30/45/60/75/90 (+15% of your Magical Power) damage per hit to gods.",
                    "If Ganesha ends his dash inside a player-made wall, he will teleport outside of it when the dash expires.",
                    "Damage: 90/135/180/225/270 (+45% of your Magical Power)",
                    "Ability Type: Dash, Crowd Control, Damage",
                    "Range: 45",
                    "Cost: 70 mana",
                    "Cooldown: 14/13.5/13/12.5/12 seconds"
                ]
            },
            {
                "name": "Ultimate  - Dharmic Pillars",
                "description": "Ganesha summons the Four Great Pillars of Righteousness to imprison his Enemies. Between each pair of pillars a magical field is created, and Enemies who pass through the field take Damage, are Slowed, and have their Protections reduced for 3s.The first tick of this damage does an additional 60%, and Enemy Minions and Jungle Monsters take 40% of this Damage.",
                "imageURL": require("../assets/images/Ganesha_ability_4.png"),
                "notes": [
                    "Ganesha summons the Four Great Pillars of Righteousness to imprison his Enemies. Between each pair of pillars a magical field is created, and Enemies who pass through the field take Damage, are Slowed, and have their Protections reduced for 3s.\nThe first tick of this damage does an additional 60%, and Enemy Minions and Jungle Monsters take 40% of this Damage.",
                    "Deals 144/208/272/336/400 (+64% of your Magical Power) damage (58/83/109/134/160 (+26% of your Magical Power) damage to minions) on the first tick and 36/52/68/84/100 (+16% of your Magical Power) damage each tick (after the first) to minions.",
                    "Deals up to 1134/1638/2142/2626/3150 (+504% of your Magical Power) damage to gods and up to 454/655/857/1058/1260 (+202% of your Magical Power) damage to minions.",
                    "Damage is dealt every 0.5s and the debuff duration refreshes per tick.",
                    "Duration: 6s",
                    "Damage per Hit: 90/130/170/210/250 (+40% of your Magical Power)",
                    "Slow: 30%",
                    "Protection Reduction: 10/20/30/40/50",
                    "Debuff Duration: 3s",
                    "Ability Type: Area, Slow, Damage",
                    "Range: 40/55",
                    "Cost: 80/85/90/95/100 mana",
                    "Cooldown: 75 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Geb",
        "Attributes": {
            "Title:": "God of Earth",
            "Pantheon:": "Egyptian",
            "Type:": "Melee,Magical",
            "Class:": "Guardian",
            "Pros:": "High Crowd Control, High Defense",
            "Difficulty:": "Average",
            "Release date:": "January 16, 2014",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Geb voicelines",
            "Voice actor:": "Christopher Sabat",
            "Health:": "510 (+90)",
            "Mana:": "190 (+34)",
            "Speed:": "360 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+1.2%)",
            "Damage:": "38 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "1/1/1/1x damage",
            "Physical:": "19 (+3)",
            "Magical:": "27 (+1.3)",
            "HP5:": "8 (+0.8)",
            "MP5:": "4.6 (+0.4)",
            "imageURL": require("../assets/images/Geb.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Hard as Rock",
                "description": "Critical Strike bonus damage taken is decreased by 65%.",
                "imageURL": require("../assets/images/Geb_ability_0.png"),
                "notes": [
                    "Lowers the base critical hit multiplier to 35%; Effects like  Deathbringer's (as well as its glyphs) passive remain unaffected.",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Roll Out",
                "description": "Geb turns into a mass of rolling earth, damaging and Slowing enemies he encounters, stopping at the first god he hits. He increases speed as he travels and his damage increases from 75% to 100% over 3s. Once at his top speed, Geb becomes immune to Crowd Control, and will also Knockback enemy gods.",
                "imageURL": require("../assets/images/Geb_ability_1.png"),
                "notes": [
                    "Geb has a slower turn rate while rolling.",
                    "Roll Out's maximum speed is 754 and can last up to 7s.",
                    "Deals a minimum of 75/112.5/187.5/244/300 (+37.5% of your Magical Power) damage if a unit is hit less than 3s after using the ability.",
                    "Damage: 100/175/250/325/400 (+50% of your Magical Power)",
                    "Slow: 30%",
                    "Slow Duration: 1/1.25/1.5/1.75/2s",
                    "Ability Type: Dash, Knockback, Damage",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 14/13/12/11/10 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Shock Wave",
                "description": "Geb creates a shock wave, which ripples out from him in a cone, causing damage and Knockup to all enemies. The damage decreases the further the enemy is from Geb, down to 80% at the maximum range.",
                "imageURL": require("../assets/images/Geb_ability_2.png"),
                "notes": [
                    "Deals a minimum of 80/132/184/236/288 (+40% of your Magical Power) damage to units at maximum range of the ability.",
                    "Damage: 100/165/230/295/360 (+50% of your Magical Power)",
                    "Ability Type: Cone, Knockup, Damage",
                    "Range: 55",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Stone Shield",
                "description": "Geb targets himself or an ally to put a Shield around. The Shield blocks all damage and lasts until its time expires or it takes enough damage to be destroyed. The Shield also cleanses any Crowd Control when applied.",
                "imageURL": require("../assets/images/Geb_ability_3.png"),
                "notes": [
                    "Does not protect from execute effects, nor Serqet's Last Breath poison.",
                    "Grants up to 530 Shield Health (65 Shield Health at level 1) at level 20.",
                    "If multiple gods are in the radius, it will target the one closest to the center of the ability.",
                    "Shield Health: 50/95/140/185/230 +15 per Geb's Level",
                    "Shield Duration: 3/3.5/4/4.5/5s",
                    "Ability Type: Target, Buff",
                    "Range/Radius: 55/15",
                    "Cost: 60 mana",
                    "Cooldown: 17 seconds"
                ]
            },
            {
                "name": "Ultimate  - Cataclysm",
                "description": "Geb becomes immune to Crowd Control as he pulls apart the earth, dealing Magical Damage and stunning enemy gods hit. Targets take additional damage based on their current Health.",
                "imageURL": require("../assets/images/Geb_ability_4.png"),
                "notes": [
                    "Damage: 120/225/330/435/540",
                    "Additional Damage: 15% of current target's Health",
                    "Stun Duration: 1.6/1.7/1.8/1.9/2s",
                    "Ability Type: Circle, Stun, Damage",
                    "Radius: 30",
                    "Cost: 100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Gilgamesh",
        "Attributes": {
            "Title:": "King of Uruk",
            "Pantheon:": "Babylonian",
            "Type:": "Melee,Physical",
            "Class:": "Warrior",
            "Pros:": "High Defense",
            "Difficulty:": "Average",
            "Release date:": "April 20, 2021",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Gilgamesh voicelines",
            "Voice actor:": "Nazeeh H. Tarsha",
            "Health:": "480 (+85)",
            "Mana:": "210 (+35)",
            "Speed:": "375 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+1.25%)",
            "Damage:": "39 (+ 2.3)+ 100% of Physical Power",
            "Progression:": "None",
            "Physical:": "18 (+3)",
            "Magical:": "24 (+1.3)",
            "HP5:": "10 (+0.8)",
            "MP5:": "4.3 (+0.39)",
            "imageURL": require("../assets/images/Gilgamesh.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Epic of Gilgamesh",
                "description": "Gilgamesh Embarks! At level 5 and 10 Gilgamesh gains a quest. The first quest is to visit a specific location on the map. The second quest is to defeat gods equal to half of an enemy team (rounded up) in a single fight. Each time Gilgamesh completes a quest he is awarded a Tier 1 item or 500 gold if he has a full inventory.",
                "imageURL": require("../assets/images/Gilgamesh_ability_0.png"),
                "notes": [
                    "The marker/minimap icon and sound effect for the first quest are only visible to Gilgamesh.",
                    "There is a 10s timer between each kill/assist during the second quest before resetting.",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Sun - Forged Scimitar",
                "description": "Gilgamesh ignites his sword with the ferocity of the Sun for 3s. Enemies around the ignition take damage and are slowed for 2s. Lane Minions take an extra +40% damage. Gilgamesh's Basic Attack deals bonus damage equal to 3% of his Maximum Health to enemies hit. When Gilgamesh successfully hits an enemy with his Basic Attack the duration of this effect is extended for 0.8s, up to a maximum of 6s. Gilgamesh gains HP5 per rank of this ability.",
                "imageURL": require("../assets/images/Gilgamesh_ability_1.png"),
                "notes": [
                    "Can increase the duration up to 9s.",
                    "Deals 91/133/175/217/259 (+70% of your Physical Power) damage to minions.",
                    "Empowered basic attacks can trigger item effects and count as two hits on wards and player-made deployables while active.",
                    "Damage: 65/95/125/155/185 (+50% of your Physical Power)",
                    "Slow: 15/17.5/20/22.5/25%",
                    "HP5: 10/15/20/25/30",
                    "Ability Type: Circle, Slow, Damage",
                    "Radius: 20",
                    "Cost: 50/55/60/65/70 Mana",
                    "Cooldown: 12/11.5/11/10.5/10 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Drop Kick",
                "description": "Gilgamesh drop kicks an area in front of him. Enemies in the area are damaged while the closest enemy is launched through these enemies. The launched enemy takes bonus damage when hitting a minion or takes burst damage and is stunned if hitting a God or a Wall. If the launched enemy hits the Winds of Shamash they are thrown toward the center of the ring. Minions hit by the launched enemy take bonus damage. Gods hit by the launched enemy take burst damage and are stunned.",
                "imageURL": require("../assets/images/Gilgamesh_ability_2.png"),
                "notes": [
                    "Has a knockback distance of 60.",
                    "Can also stun if the affected target hits a player-made wall.",
                    "Kick Damage: 60/90/120/150/180 (+30% of your Physical Power)",
                    "Bonus Damage: 25/40/55/70/85 (+20% of your Physical Power)",
                    "Burst Damage: 50/95/140/185/230 (+30% of your Physical Power)",
                    "Stun Duration: 1.2s",
                    "Ability Type: Line, Crowd Control, Damage",
                    "Range: 25",
                    "Cost: 60/65/70/75/80 Mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Hero's Advance",
                "description": "Gilgamesh leaps into the air, crashing down at a target location. Enemies around the impact take damage. Gilgamesh infuses the ground with energy, causing a beacon to appear for 5s. Allies who run towards the beacon will gain Movement Speed, halving once they enter the beacon. Allies who enter the beacon will gain bonus Lifesteal, boosted by 10% of Gilgamesh's highest Protection.",
                "imageURL": require("../assets/images/Gilgamesh_ability_3.png"),
                "notes": [
                    "Has a full movement speed range of 110.",
                    "Grants 12.5% Movement Speed and up to 43% Lifesteal to allies inside the radius if Gilgamesh has 325 of either type of protections.",
                    "If Gilgamesh has more Magical Protections, it will be converted to Physical Lifesteal for himself and other physical gods and with more Physical Protection will convert to Magical Lifesteal for magical gods.",
                    "Damage: 70/110/150/190/230 (+40% of your Physical Power)",
                    "Movement Speed: 25%",
                    "Lifesteal: 10.5%",
                    "Ability Type: Circle, Leap, Damage",
                    "Rang/Radius: 55/30",
                    "Cost: 70 Mana",
                    "Cooldown: 16 seconds"
                ]
            },
            {
                "name": "Ultimate  - Winds of Shamash",
                "description": "Gilgamesh calls upon Shamash to create a ring of wind at a target location for 6s. Enemies inside this ring when it starts take damage and are slowed for 2s. Enemies inside the ring take wind damage every .5s. Enemies who try to escape the ring are heavily slowed. If Gilgamesh damages an enemy trying to flee they are thrown back towards the center of the ring. The wind turns into thread over 6s; damaging and Rooting enemies who are still inside the ring.",
                "imageURL": require("../assets/images/Gilgamesh_ability_4.png"),
                "notes": [
                    "Deals up to 432/610/788/966/1144 (+145% of your Physical Power) damage and slows up to 60% if hit by the initial/wind wall ticks.",
                    "The root has a duration of 1.5s.",
                    "Initial Damage: 90/145/200/255/310 (+40% of your Physical Power)",
                    "Initial Slow: 20%",
                    "Wind Damage: 16/20/24/28/32 (+5% of your Physical Power)",
                    "Wind Wall Slow: 40%",
                    "Binding Damage: 150/225/300/375/450 (+50% of your Physical Power)",
                    "Ability Type: Circle, Crowd Control, Damage",
                    "Range/Radius: 45/35",
                    "Cost: 80/85/90/95/100 Mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Guan Yu",
        "Attributes": {
            "Title:": "Saint of War",
            "Pantheon:": "Chinese",
            "Type:": "Melee,Physical",
            "Class:": "Warrior",
            "Pros:": "High Sustain, High Mobility",
            "Difficulty:": "Average",
            "Release date:": "June 29, 2012",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Guan Yu voicelines",
            "Voice actor:": "Mark Stoddard",
            "Health:": "480 (+87)",
            "Mana:": "220 (+39)",
            "Speed:": "375 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+1.2%)",
            "Damage:": "37 (+ 2)+ 100% of Physical Power",
            "Progression:": "1/1/1.3/1.75x damage and swing time",
            "Physical:": "17 (+3)",
            "Magical:": "24 (+1.3)",
            "HP5:": "6 (+0.7)",
            "MP5:": "4.8 (+0.45)",
            "imageURL": require("../assets/images/Guan_Yu.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Painless",
                "description": "Each time Guan Yu takes or deals damage he gains stacks. At max stacks Painless becomes active and all of Guan Yu's abilities gain boosted effects. Once active, stacks will reset if Guan Yu has not taken or dealt damage in the last 5s.",
                "imageURL": require("../assets/images/Guan_Yu_ability_0.png"),
                "notes": [
                    "The 3rd attack in Guan Yu's Basic Attack progression cleaves while the 4th hits in a range of 16.",
                    "Num Hits to Full Charge: 20 Stacks",
                    "Conviction Boost: Healing",
                    "Warrior's Will Boost: Slow",
                    "Taolu Assault Boost: Protection Steal",
                    "Cavalry Charge Boost: Slow and Stun",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Conviction",
                "description": "Guan Yu's courageous leadership is infectious and, when focused, heals himself and his allies. Healing friendly gods reduces all Cooldowns by 2s for Guan Yu and 1s for his allies.",
                "imageURL": require("../assets/images/Guan_Yu_ability_1.png"),
                "notes": [
                    "Heals up to 68/102/136/170/204 Health with full passive stacks.",
                    "The CDR effect affects the ability itself, will proc even if targets are already at full health and only triggers once regardless of how many allies were healed.",
                    "Healing: 40/60/80/100/120",
                    "Boosted Healing: 1.7xNormal Healing",
                    "Ability Type: Circle, Heal",
                    "Radius: 30",
                    "Cost: 45 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Warrior's Will",
                "description": "Guan Yu charges forward, his Green Dragon Crescent Blade extended in front of him. All enemies in his path take damage and are Slowed. Hitting enemy gods lowers all of Guan Yu's Cooldowns by 2s. Guan Yu is immune to Roots, Cripples, and Knockups while dashing.",
                "imageURL": require("../assets/images/Guan_Yu_ability_2.png"),
                "notes": [
                    "The CDR effect affects the ability itself and only triggers once regardless of how many enemies were hit.",
                    "Damage: 80/135/190/245/300 (+60% of your Physical Power)",
                    "Slow: 20%",
                    "Slow Duration: 2s",
                    "Boosted Slow: 40%",
                    "Ability Type: Dash, Slow, Damage",
                    "Range: 30",
                    "Cost: 50 mana",
                    "Cooldown: 13 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Taolu Assault",
                "description": "Guan Yu spins his blade in a controlled but furious display, slicing enemies for damage every .3s for 3s. Each hit steals enemy Protections, giving them to Guan Yu. Guan Yu is immune to Knockback for the duration.",
                "imageURL": require("../assets/images/Guan_Yu_ability_3.png"),
                "notes": [
                    "Each tick refreshes the buff/debuff's duration.",
                    "Only grants 1 Protections stack per tick regardless of how many enemies are hit.",
                    "Deals up to 170/270/370/470/570 (+200% of your Physical Power) damage and steals up to 6/12/18/24/30 Protections (9/18/27/36/45 with full passive stacks).",
                    "Guan Yu can't take any action besides moving while channeling.",
                    "Won't go into cooldown until the effect ends and can be cancelled early.",
                    "Damage per Hit: 17/27/37/47/57 (+20% of your Physical Power)",
                    "Protections Stolen: 2/4/6/8/10 Max. 3 Stacks.",
                    "Protection Duration: 5s",
                    "Boosted Protections Stolen: 3/6/9/12/15 Max. 3 Stacks.",
                    "Ability Type: Line, Debuff, Damage",
                    "Range: 30",
                    "Cost: 55/60/65/70/75 mana",
                    "Cooldown: 13 seconds"
                ]
            },
            {
                "name": "Ultimate  - Cavalry Charge",
                "description": "Guan Yu mounts his warhorse and charges for 4s. While mounted, he can steer and attack and is immune to Crowd Control. Enemies hit take damage and are Slowed. Each hit increases damage from consecutive hits against that target by 20%. Enemies hit on the dismount are Stunned. You can dismount at any time by canceling.",
                "imageURL": require("../assets/images/Guan_Yu_ability_4.png"),
                "notes": [
                    "Movement speed affects the charge's speed and moving backwards slows down the charge.",
                    "Guan Yu can attack every .8s up to 5 times total before dismounting.",
                    "Each attack refreshes the slow's duration.",
                    "Can deal up to 935/1210/1485/1760/2035 (+330% of your Physical Power) damage to the same target.",
                    "Damage: 85/110/135/160/185 (+30% of your Physical Power)",
                    "Damage Escalation: 20% per hit",
                    "Slow: 25% for 2s",
                    "Stun: 1.1/1.2/1.3/1.4/1.5s",
                    "Boosted CC: 40% Slow and 2s Stun",
                    "Ability Type: Circle, Stun, Damage",
                    "Radius: 20",
                    "Cost: 80/90/100/110/120 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Hachiman",
        "Attributes": {
            "Title:": "Lord of the Eight Banners",
            "Pantheon:": "Japanese",
            "Type:": "Ranged,Physical",
            "Class:": "Hunter",
            "Pros:": "High Single Target Damage, High Mobility",
            "Difficulty:": "Easy",
            "Release date:": "September 13, 2017",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Hachiman voicelines",
            "Voice actor:": "Patrick McAlister",
            "Health:": "455 (+77)",
            "Mana:": "230 (+36)",
            "Speed:": "365 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "1 (+1.3%)",
            "Damage:": "31 (+ 2.5)+ 100% of Physical Power",
            "Progression:": "None",
            "Physical:": "11 (+2.8)",
            "Magical:": "23 (+1.3)",
            "HP5:": "7 (+0.69)",
            "MP5:": "4.5 (+0.37)",
            "imageURL": require("../assets/images/Hachiman.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Master of Arms",
                "description": "Hachiman grows stronger as he lands his blows. Hitting enemies with Basic Attacks energizes Hachiman, granting him a stack of Attack Speed and MP5. Stacks up to 5 times, stacks last 8s.",
                "imageURL": require("../assets/images/Hachiman_ability_0.png"),
                "notes": [
                    "Each stack grants +6 MP5 (+2.2, stacking up to 11 with all 5 stacks at level 1) and +3% Attack Speed (+1.1%, stacking up to 5.5% with all 5 stacks at level 1) with all 5 granting up to +30 MP5 and +15% Attack Speed at level 20.",
                    "Each stack refreshes the buff duration.",
                    "Attack Speed: 1% + .1 per level",
                    "MP5: 2 + .2 per level",
                    "Max Stacks: 5",
                    "Duration: 6s",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Eagle Eye",
                "description": "When Hachiman toggles on this ability, instead of Basic Attacking he fires a series of arrows that travel further and deal additional damage. Each hit may trigger item effects for basic attacks, and can critical hit.",
                "imageURL": require("../assets/images/Hachiman_ability_1.png"),
                "notes": [
                    "Empowered basic attacks from this ability do not damage structures, wards nor player-made deployables.",
                    "These basic attacks are spent even when Hachiman misses.",
                    "Bonus Damage: 10/20/30/40/50 + 110% of your Basic Attack Damage",
                    "Distance Bonus: 5% of your Basic Attack Damage",
                    "Ammo: 4",
                    "Ability Type: Ranged Basic, Buff",
                    "Range: 80",
                    "Cost: 50 mana",
                    "Cooldown: 12/11.5/11/10.5/10 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Heavenly Banner",
                "description": "Hachiman calls down sacred banners from heaven, damaging all enemies in range, granting himself Attack Speed, and leaving a banner which buffs his and allied Attack Speed while within range.",
                "imageURL": require("../assets/images/Hachiman_ability_2.png"),
                "notes": [
                    "The banner's aura buff stacks with the one applied on activation to Hachiman for a total of 20/25/30/35/40% Attack Speed.",
                    "Damage: 90/145/200/255/310 (+60% of your Physical Power)",
                    "Attack Speed: 10/12.5/15/17.5/20%",
                    "Duration: 6s",
                    "Ability Type: Area, Buff, Damage",
                    "Range/Radius: 55/20",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Iaijutsu",
                "description": "Hachiman dashes forward, damaging and passing through enemies. Upon reaching his destination, Hachiman swings his blade in a full circle, hitting all enemies in range. If hit by both attacks, enemy Gods are stunned.",
                "imageURL": require("../assets/images/Hachiman_ability_3.png"),
                "notes": [
                    "Can deal up to 100/160/220/280/340 (+80% of your Physical Power) damage.",
                    "Damage per Hit: 50/80/110/140/170 (+40% of your Physical Power)",
                    "Stun Duration: 1s",
                    "Ability Type: Dash, Stun, Damage",
                    "Radius/Range: 35/20",
                    "Cost: 70/75/80/85/90 mana",
                    "Cooldown: 16 seconds"
                ]
            },
            {
                "name": "Ultimate  - Mounted Archery",
                "description": "Hachiman leaps on his horse and charges forward. While mounted, he is immune to Crowd Control and can aim separately from the direction of his horse. He may fire to launch an arrow at every Enemy God within a cone.",
                "imageURL": require("../assets/images/Hachiman_ability_4.png"),
                "notes": [
                    "Movement speed affects the charge's speed and moving backwards slows down the charge.",
                    "This ability doesn't fire through walls.",
                    "If the ability ends and no targets are in range, Hachiman will mount off his horse without firing any arrows.",
                    "Has a max travel time of 3s and post-fire time of 0.4s.",
                    "Can be cancelled early.",
                    "Damage: 225/280/335/390/445 (+95% of your Physical Power)",
                    "Slow: 20/25/30/35/40%",
                    "Slow Duration: 2s",
                    "Ability Type: Cone, Slow, Damage",
                    "Range: 85",
                    "Cost: 80/90/100/110/120 mana",
                    "Cooldown: 110 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Hades",
        "Attributes": {
            "Title:": "King of the Underworld",
            "Pantheon:": "Greek",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "High Defense, High Sustain",
            "Difficulty:": "Easy",
            "Release date:": "May 31, 2012",
            "Favor:": "2,000",
            "Gems:": "200",
            "Voicelines:": "Hades voicelines",
            "Voice actor:": "Patrick Seitz",
            "Health:": "475 (+85)",
            "Mana:": "265 (+53)",
            "Speed:": "365 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.95 (+1.05%)",
            "Damage:": "32 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "18 (+2.6)",
            "Magical:": "23 (+1.3)",
            "HP5:": "5 (+0.54)",
            "MP5:": "5 (+0.36)",
            "imageURL": require("../assets/images/Hades.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Blight",
                "description": "Hades' normal staff attacks apply a Debuff to the enemy, called Blight. This Debuff stays on the target and can be refreshed. If an enemy is afflicted by Blight their Magical and Physical Power is reduced. Also each of Hades' other powers have an additional effect.",
                "imageURL": require("../assets/images/Hades_ability_0.png"),
                "notes": [
                    "Duration: 8s",
                    "Power Debuff: 5%",
                    "Ability Type: Debuff"
                ]
            },
            {
                "name": "1st Ability  - Death From Below",
                "description": "Hades descends into the ground and erupts from below at his ground location, doing damage to all enemies in the area. If the enemy is Blighted, they are also Slowed. Applies Blight.",
                "imageURL": require("../assets/images/Hades_ability_1.png"),
                "notes": [
                    "Despite moving underground, this ability is considered a leap.",
                    "Damage: 70/120/170/220/270 (+60% of your Magical Power)",
                    "Slow: 20/25/30/35/40%",
                    "Slow Duration: 2s",
                    "Ability Type: Circle, Leap, Damage",
                    "Range/Radius: 55/20",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Shroud of Darkness",
                "description": "Hades Silences all enemies in a cone in front of him. If the enemy is Blighted, they are also Feared. Applies Blight.",
                "imageURL": require("../assets/images/Hades_ability_2.png"),
                "notes": [
                    "Silence: 1/1.25/1.5/1.75/2s",
                    "Ability Type: Cone, Crowd Control",
                    "Range: 35",
                    "Cost: 60 mana",
                    "Cooldown: 13/12/11/10/9 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Devour Souls",
                "description": "Hades devours the souls of his enemies, dealing damage in an area around him. Blighted enemies hit by this ability are Detonated, dealing damage to enemies and healing your allies around the Detonated targets. Enemy gods only take 50% of the damage from Detonating Blights.",
                "imageURL": require("../assets/images/Hades_ability_3.png"),
                "notes": [
                    "Detonations from this ability deal 5/7.5/10/12.5/15 (+20% of your Magical Power) damage to gods.",
                    "Deals 80/132.5/185/237.5/290 (+105% of your Magical Power) damage to gods affected by blight and 85/140/195/250/305 (+125% of your Magical Power) damage to non-god sources affected by blight after the initial hit.",
                    "Damage: 75/125/175/225/275 (+85% of your Magical Power)",
                    "Detonated Damage: 10/15/20/25/30 (+40% of your Magical Power)",
                    "Detonated Healing: 20/35/50/65/80",
                    "Detonation Radius: 20",
                    "Ability Type: Circle, Heal, Damage",
                    "Radius: 20",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 10 seconds"
                ]
            },
            {
                "name": "Ultimate  - Pillar of Agony",
                "description": "Hades calls to all enemy souls nearby, creating a Vortex which drags targets toward him, dealing damage every .5s for 4s. For each enemy hit Hades reduces his ability cooldowns by 0.4s. If the enemy is Blighted, their Protections are reduced. Hades also gains Protections and 10% damage mitigation for the duration.",
                "imageURL": require("../assets/images/Hades_ability_4.png"),
                "notes": [
                    "Can deal up to 360/480/600/720/840 (+280% of your Magical Power) damage.",
                    "Hades is CC immune while using this ability.",
                    "The CDR only occurs once per enemy god hit by the ability.",
                    "Damage per Tick: 45/60/75/90/105 (+35% of your Magical Power)",
                    "Protections: 60/85/110/135/160",
                    "Protections Debuff: 10/15/20/25/30 + 10%",
                    "Protections Debuff Lifetime: 4s",
                    "Ability Type: Circle, Vortex, Damage",
                    "Radius: 30",
                    "Cost: 100 mana",
                    "Cooldown: 90/85/80/75/70 seconds"
                ]
            }
        ]
    },
    {
        "Name": "He Bo",
        "Attributes": {
            "Title:": "God of the Yellow River",
            "Pantheon:": "Chinese",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "Medium Crowd Control, High Area Damage",
            "Difficulty:": "Easy",
            "Release date:": "May 31, 2012",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "He Bo voicelines",
            "Voice actor:": "Christopher Sabat",
            "Health:": "425 (+75)",
            "Mana:": "298 (+56)",
            "Speed:": "360 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.86 (+0.9%)",
            "Damage:": "34 (+ 1.45)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "9 (+2.6)",
            "Magical:": "23 (+1.3)",
            "HP5:": "6 (+0.45)",
            "MP5:": "4.9 (+0.4)",
            "imageURL": require("../assets/images/He_Bo.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Steady Flow",
                "description": "Each time He Bo uses an ability, he gains the Steady Flow buff which increases his Magical Power. The timer refreshes when another ability is used.",
                "imageURL": require("../assets/images/He_Bo_ability_0.png"),
                "notes": [
                    "Provides up to 15% Magical Power.",
                    "Magical Power Buff: 5%",
                    "Duration: 5s",
                    "Max Stacks: 3",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Water Cannon",
                "description": "He Bo fires a short burst of water from his hands, damaging all enemies in front of him. Lane Minions and Jungle Camps take an extra 20% damage.",
                "imageURL": require("../assets/images/He_Bo_ability_1.png"),
                "notes": [
                    "Deals 100/150/204/258/312 (+100% of your Magical Power) damage to lane and jungle minions.",
                    "Damage: 80/125/170/215/260 (+80% of your Magical Power)",
                    "Ability Type: Cone, Damage",
                    "Range: 35",
                    "Cost: 40/45/50/55/60 mana",
                    "Cooldown: 4 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Atlas of the Yellow River",
                "description": "He Bo unfurls his scroll in a line, releasing the flood waters. Allies on the water are immune to Slows and move faster, while enemies are Slowed.",
                "imageURL": require("../assets/images/He_Bo_ability_2.png"),
                "notes": [
                    "The scroll on He Bo's back will disappear while active.",
                    "Slow Debuff: 20/25/30/35/40%",
                    "Speed Buff: 20/25/30/35/40%",
                    "Lifetime: 7s",
                    "Ability Type: Line, Buff",
                    "Range: 80",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 14/13.5/13/12.5/12 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Waterspout",
                "description": "He Bo calls forth a geyser, causing it to burst out with tremendous force at his target location, damaging enemies while knocking them into the air.",
                "imageURL": require("../assets/images/He_Bo_ability_3.png"),
                "notes": [
                    "Can move freely in all directions while deploying this ability.",
                    "Damage: 70/120/170/220/270 (+60% of your Magical Power)",
                    "Ability Type: Circle, Knockup, Damage",
                    "Range/Radius: 55/10",
                    "Cost: 65/70/75/80/85 mana",
                    "Cooldown: 10 seconds"
                ]
            },
            {
                "name": "Ultimate  - Crushing Wave",
                "description": "He Bo transforms into a wave and crashes forward, damaging all enemies in his path.",
                "imageURL": require("../assets/images/He_Bo_ability_4.png"),
                "notes": [
                    "He Bo is untargetable and immune to crowd control while channeling this ability.",
                    "He Bo can only hit each enemy once during the ability.",
                    "Damage: 370/450/530/610/690 (+115% of your Magical Power)",
                    "Ability Type: Line, Damage",
                    "Range: 55",
                    "Cost: 100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Heimdallr",
        "Attributes": {
            "Title:": "The Vigilant",
            "Pantheon:": "Norse",
            "Type:": "Ranged,Physical",
            "Class:": "Hunter",
            "Pros:": "High Single Target Damage",
            "Difficulty:": "Hard",
            "Release date:": "December 11, 2019",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Heimdallr voicelines",
            "Voice actor:": "Michael Schwalbe",
            "Health:": "480 (+80)",
            "Mana:": "230 (+34)",
            "Speed:": "365 (+0)",
            "Range:": "56.5 (+0)",
            "Attack/Sec:": "0.96 (+1.5%)",
            "Damage:": "30 (+ 3)+ 100% of Physical Power",
            "Progression:": "1.25/1.25/1.5x damage and 1.3/1.3/1.5 swing time, hitting in a 7.5 AoE on first two hits",
            "Physical:": "16 (+3)",
            "Magical:": "23 (+1.3)",
            "HP5:": "8 (+0.8)",
            "MP5:": "4.5 (+0.4)",
            "imageURL": require("../assets/images/Heimdallr.png")
        },
        "Abilities": [
            {
                "name": "Passive  - The Vigilant",
                "description": "When Heimdallr gains vision of an enemy god he gains Physical Power, up to a maximum of 5 gods. When an enemy god would disappear from vision (including Stealth) Heimdallr continues to see them for 6s. Heimdallr's Critical Strikes only deal 40% bonus damage.",
                "imageURL": require("../assets/images/Heimdallr_ability_0.png"),
                "notes": [
                    "Grants up to 15% Physical Power at full stacks.",
                    "Heimdallr's crit damage is reduced by 60%.",
                    "Physical Power per Stack: 3%",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Piercing Sight",
                "description": "Heimdallr throws his sword, Hofuð, into the air. It shines with brilliant light that reveals enemies within 80 units. Heimdallr can refire this ability to call the sword down, causing it to fly to the target location and damage enemies.",
                "imageURL": require("../assets/images/Heimdallr_ability_1.png"),
                "notes": [
                    "Has an initial deploy range of 55 and a maximum duration of 10s.",
                    "Damage: 90/145/200/255/310 (+85% of your Physical Power)",
                    "Ability Type: Circle, Buff, Damage",
                    "Range/Radius: 60/15",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Gjallarhorn",
                "description": "Heimdallr blows the Gjallarhorn for 2s, causing enemies in front of him to lose Movement and Attack Speed while taking damage every .5s. While blowing his horn Heimdallr is immune to knockups. When Heimdallr ends this cast, either through cancelling it himself or after 2s, he raises the Gjallarhorn for a final blast. This blast damages enemies and knocks them away from Heimdallr.",
                "imageURL": require("../assets/images/Heimdallr_ability_2.png"),
                "notes": [
                    "Can deal up to 82/154/226/298/370 (+210% of your Physical Power) damage.",
                    "Has a knockback strength of 300.",
                    "Each tick refreshes the slow's duration.",
                    "Damage Per Tick: 8/16/24/32/40 (+30% of your Physical Power)",
                    "Knockback Damage: 50/90/130/170/210 (+60% of your Physical Power)",
                    "Slow: 15/17.5/20/22.5/25%",
                    "Slow Duration: 1.5s",
                    "Ability Type: Cone, Crowd Control, Damage",
                    "Range/Radius: 60/20",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "3rd Ability  - The Bifrost",
                "description": "Heimdallr manifests a fragment of the Bifrost at his target location. When two fragments are placed they become linked, allowing Heimdallr to traverse the Bifrost. The greater the distance between the fragments the longer it takes to begin traversing and the longer it takes for it to be usable again. If Heimdallr places a third fragment down, the oldest fragment vanishes. Enemies that walk between two fragments are revealed to Heimdallr.",
                "imageURL": require("../assets/images/Heimdallr_ability_3.png"),
                "notes": [
                    "Has a deploy cooldown of 1.5s.",
                    "Cannot place fragments inside walls or outside the map.",
                    "Heimdallr will unable to traverse the Bifrost if he is either crippled or affected by hard crowd control.",
                    "Distance Scale: 85 to 700 units",
                    "Warmup Scale: 0.8s to 3.5s",
                    "Cooldown Scale: 16s to 210/180/150/120/90s",
                    "Ability Type: Teleport, Buff",
                    "Range/Radius: 45/7",
                    "Cost: 40 mana",
                    "Cooldown: Variable"
                ]
            },
            {
                "name": "Ultimate  - Through the Realms",
                "description": "Heimdallr charges forward, axe ready. If Heimdallr hits an enemy god he stuns them before unleashing a devastating swing of his axe, launching his target into the sky. A Bifrost portal appears and Heimdallr sends the launched foe through the realms of Muspelheim and Niflheim before returning them back to the battleground at a random location in front of him. Muspelheim burns the enemy every .5s for 1.5s while Niflheim slows the enemy for 2.5s.",
                "imageURL": require("../assets/images/Heimdallr_ability_4.png"),
                "notes": [
                    "Heimdallr is immune from crowd control effects during this ability. The immunity ends after the grabbed target is banished.",
                    "Heimdallr can turn freely while grabbing a target (1s stun no DR before banish occurs).",
                    "Deals a total of 265/455/645/835/1025 (+175% of your Physical Power) damage.",
                    "If no valid landing location is in front of Heimdallr after banishing the affected enemy, the target will land at the nearest valid point near him.",
                    "If the affected target would die during the banish, they won't die until the banish duration expires.",
                    "Hit Damage: 120/200/280/360/440 (+70% of your Physical Power)",
                    "Muspelheim Damage: 25/35/45/55/65 (+15% of your Physical Power)",
                    "Wall Hit Damage: 35/75/115/155/195 (+30% of your Physical Power)",
                    "Niflheim Slow: 25%",
                    "Travel Duration: 4s",
                    "Ability Type: Target, Debuff, Damage",
                    "Range: 55",
                    "Cost: 70/75/80/85/90 mana",
                    "Cooldown: 90/85/80/75/70 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Hel",
        "Attributes": {
            "Title:": "Goddess of the Underworld",
            "Pantheon:": "Norse",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "High Sustain, High Area Damage",
            "Difficulty:": "Hard",
            "Release date:": "May 31, 2012",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Hel voicelines",
            "Voice actor:": "Monica Rial",
            "Health:": "477 (+67)",
            "Mana:": "360 (+60)",
            "Speed:": "355 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.87 (+0.9%)",
            "Damage:": "35 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "12 (+2.6)",
            "Magical:": "25 (+1.3)",
            "HP5:": "5.43 (+0.43)",
            "MP5:": "5.45 (+0.45)",
            "imageURL": require("../assets/images/Hel.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Stance Attunement",
                "description": "When Hel is in a stance, she gradually attunes to the strengths of that stance, gaining up to 20% increased damage in the Dark Stance and an Aura that reduces power of enemy Gods within 55 units by up to 12% while in the Light Stance.",
                "imageURL": require("../assets/images/Hel_ability_0.png"),
                "notes": [
                    "Takes 3s to fully charge.",
                    "Only one power debuff can stack regardless of how many Hels (light stance) are present.",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Decay (Restoration)",
                "description": "DECAY (Dark Stance) - Hel fires an orb of decay that deals damage and passes through minions. The orb will explode in a 12 unit radius if it hits a god or reaches max range.RESTORATION (Light Stance) - Hel fires an orb of restoration that damages enemy minions and stops on gods. Hitting an enemy god deals damage. Hitting an allied god provides that god and Hel Health and Mana",
                "imageURL": require("../assets/images/Hel_ability_1.png"),
                "notes": [
                    "DECAY (Dark Stance) - Hel fires an orb of decay that deals damage and passes through minions. The orb will explode in a 12 unit radius if it hits a god or reaches max range.\nRESTORATION (Light Stance) - Hel fires an orb of restoration that damages enemy minions and stops on gods. Hitting an enemy god deals damage. Hitting an allied god provides that god and Hel Health and Mana",
                    "When fully attuned to Dark Stance, Decay deals 84/144/204/264/324 (+72% of your Magical Power) damage.",
                    "Restoration heals a total of 125/140/155/170/185 health at level 20.",
                    "Both abilities can go through walls.",
                    "Dark Damage: 70/120/170/220/270 (+60% of your Magical Power)",
                    "Light Ally Heal: 45/60/75/90/105 + 4 per level",
                    "Light Self Heal: 45/60/75/90/105 + 4 per level",
                    "Light Mana Heal: 55/70/85/100/115",
                    "Light Damage: 70/120/170/220/270 (+50% of your Magical Power)",
                    "Ability Type: Line, Heal, Damage",
                    "Range/Radius: 55/12",
                    "Cost: 45/50/55/60/65 mana",
                    "Cooldown: 8 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Hinder (Cleanse)",
                "description": "HINDER (Dark Stance) - Hel debuffs all enemies in the targeted area, reducing their Magical Protection and slowing them for 3s.CLEANSE (Light Stance) - Hel cleanses all allied gods in the targeted area, removing all Crowd Control effects instantly and protecting them from future ones for a duration.",
                "imageURL": require("../assets/images/Hel_ability_2.png"),
                "notes": [
                    "Dark Protections Debuff: 5/10/15/20/25 + 5%",
                    "Dark Slow: 20/25/30/35/40%",
                    "Light CC Immunity Duration: 1.5s",
                    "Ability Type: Circle, Debuff",
                    "Range/Radius: 55/20",
                    "Cost: 60 mana",
                    "Cooldown: 16/15/14/13/12 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Repulse (Inspire)",
                "description": "REPULSE (Dark Stance) - Hel conjures a burst of dark energy around her, damaging all nearby enemies. INSPIRE (Light Stance) - Hel conjures a burst of light energy around her, healing herself instantly and applying a heal over time to nearby allies that ticks every 1s. This heal is half as effective when healing minions. Hel gains Increased Movement Speed, and allies gain a reduced amount (10%) for the duration. Hel and allies also gain 20% Attack Speed while the buff is active.",
                "imageURL": require("../assets/images/Hel_ability_3.png"),
                "notes": [
                    "When fully attuned to Dark Stance, Repulse deals 84/144/204/264/324 (+102% of your Magical Power) damage.",
                    "Inspire heals a total of 165/180/195/210/225 health to Hel, 70/80/90/100/110 to allies and 35/40/45/50/55 to minions at level 20.",
                    "Dark Damage: 70/120/170/220/270 (+85% of your Magical Power)",
                    "Light Self Heal: 45/60/75/90/105 + 6 per level",
                    "Light Heal per Tick: 10/12/14/16/18 + 1 per level",
                    "Light Movement Speed: 20%",
                    "Light Duration: 5s",
                    "Ability Type: Circle, Heal, Damage",
                    "Radius: 30",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "Ultimate  - Switch Stances",
                "description": "DARK STANCE - Hel's abilities cause damage and she gains increased Magical Power.LIGHT STANCE - Hel's abilities heal and support her allies and she gains increased Protections.Passive - Hel gains increased MP5 and Half of the benefits gained, including Physical Power, from Switch Stances are shared with allied gods within 55 units.",
                "imageURL": require("../assets/images/Hel_ability_4.png"),
                "notes": [
                    "DARK STANCE - Hel's abilities cause damage and she gains increased Magical Power.\nLIGHT STANCE - Hel's abilities heal and support her allies and she gains increased Protections.\nPassive - Hel gains increased MP5 and Half of the benefits gained, including Physical Power, from Switch Stances are shared with allied gods within 55 units.",
                    "Grants 15/20/25/30/35 Magical Power to allies while in Dark Stance, 6.5/8/9.5/11/12.5 Protections while in Light Stance.",
                    "Hel starts in Dark Stance and always respawns in light stance.",
                    "Dark Magical Power: 30/40/50/60/70",
                    "Allied Dark Physical Power: 10/15/20/25/30",
                    "Light Magical and Physical Protections: 13/16/19/22/25",
                    "MP5: 15/20/25/30/35",
                    "Ability Type: Buff",
                    "Radius: 55",
                    "Cost: 0 mana",
                    "Cooldown: 1 second"
                ]
            }
        ]
    },
    {
        "Name": "Hera",
        "Attributes": {
            "Title:": "Queen of the Gods",
            "Pantheon:": "Greek",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "High Area Damage, High Crowd Control",
            "Difficulty:": "Average",
            "Release date:": "October 15, 2018",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Hera voicelines",
            "Voice actor:": "Lydia Mackay",
            "Health:": "380 (+68)",
            "Mana:": "265 (+45)",
            "Speed:": "365 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.9 (+1%)",
            "Damage:": "34 (+ 1.45)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "10 (+2.7)",
            "Magical:": "24 (+1.3)",
            "HP5:": "6 (+0.45)",
            "MP5:": "4.8 (+0.41)",
            "imageURL": require("../assets/images/Hera.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Commanding Presence",
                "description": "Each time Hera deals damage to gods with her Abilities or Basic Attacks Argus, The Defender's cooldown is reduced by 1.5s and Divine Shroud's cooldown is reduced by 0.5s. If Argus is active he is instead healed.",
                "imageURL": require("../assets/images/Hera_ability_0.png"),
                "notes": [
                    "Heals Argus up to 120 Health (25 Health at level 1) at level 20.",
                    "Argus Heal: 20 + 5 per level",
                    "Argus First Hit: 30 (+35% of your Magical Power)",
                    "Argus Second Hit: 30 (+35% of your Magical Power)",
                    "Argus Third Hit: 45 (+45% of your Magical Power)",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Royal Assault",
                "description": "Hera damages enemies in a cone in front of her before opening a portal for Argus to attack through. Enemy minions hit by this cone are knocked into Argus' path. Argus then slams his fists at the target location dealing heavy damage. If both of his fists connects with an enemy, it deals 15% extra damage.",
                "imageURL": require("../assets/images/Hera_ability_1.png"),
                "notes": [
                    "Can deal up to 122/195/268/342/415 (+115% of your Magical Power) damage if a target is hit by all 3 hits.",
                    "Cone Damage: 30/40/50/60/70 (+10% of your Magical Power)",
                    "Fist Damage: 80/135/190/245/300 (+90% of your Magical Power)",
                    "Ability Type: Area, Damage",
                    "Range: 50",
                    "Cost: 55/60/65/70/75 mana",
                    "Cooldown: 8 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Polymorph",
                "description": "Hera weaves magic in front of her before sending it out. Enemies hit by this ability take damage. If this ability hits a god it causes their form to shift into a monster.",
                "imageURL": require("../assets/images/Hera_ability_2.png"),
                "notes": [
                    "Polymorphed targets are unable to use basic attacks or abilities.",
                    "This ability polymorphs gods into jungle monsters that are present in what ever game mode they're currently playing. If on the Assault mode, it will only polymorph them into either a harpy or a cyclops.",
                    "Damage: 90/140/190/240/290 (+85% of your Magical Power)",
                    "Polymorph Duration: 1.6/1.7/1.8/1.9/2s",
                    "Slow: 20%",
                    "Ability Type: Line, Polymorph, Damage",
                    "Range: 80",
                    "Cost: 60 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Divine Shroud",
                "description": "Hera shrouds herself in her divine power, granting her a shield from damage and temporary movement speed that lasts as long as the shield remains.If Argus is active, Argus shines with the same Divine power as Hera, causing him to deal radiant damage and move at an increased rate.",
                "imageURL": require("../assets/images/Hera_ability_3.png"),
                "notes": [
                    "Hera shrouds herself in her divine power, granting her a shield from damage and temporary movement speed that lasts as long as the shield remains.\nIf Argus is active, Argus shines with the same Divine power as Hera, causing him to deal radiant damage and move at an increased rate.",
                    "Grants up to 590 (87 Shield Health at level 1) Shield Health at level 20.",
                    "Damage is dealt every 0.5s, has a damage radius of 25 and can proc item effects while Argus is active.",
                    "Can deal up to 70/110/150/190/230 (+75% of your Magical Power) damage if Argus is active.",
                    "Does not protect from execute effects.",
                    "Shield Health: 70/115/160/205/250 +17 per Hera's Level",
                    "Shield Duration: 5s",
                    "Movement Speed: 15%",
                    "Argus Aura Damage: 7/11/15/19/23 (+7.5% of your Magical Power)",
                    "Argus Speed: 50%",
                    "Ability Type: Buff",
                    "Cost: 45/50/55/60/65 mana",
                    "Cooldown: 16/15.5/15/14.5/14 seconds"
                ]
            },
            {
                "name": "Ultimate  - Argus, the Defender",
                "description": "Hera brings Argus crashing down at a location, damaging and knocking up enemies. On landing Argus will attack the nearest target. Hera can control where Argus moves through refiring this ability onto an enemy or if he has a target, to recall him. While recalled Argus will defend Hera and attack anyone that gets close. Argus has a hit chain that starts with a normal basic attack, into a ground circle AoE slowing enemies by 20% for 1s, into a line attack.",
                "imageURL": require("../assets/images/Hera_ability_4.png"),
                "notes": [
                    "Argus has a leash range of 125 and a manual targeting range of 80.",
                    "The second attack in his hit chain has a radius of 15 (which can proc item effects) and the third has a range of 25.",
                    "Argus suffers a 35% Movement Speed Slow while using his ground slam (second attack).",
                    "Enemies can kill Argus to despawn him earlier. He will also despawn when Hera dies.",
                    "Argus doesn't remove backdoor protections from towers and phoenixes.",
                    "Damage: 100/150/200/250/300 (+55% of your Magical Power)",
                    "Argus Lifetime: 40s",
                    "Argus Health: 700/1400/2100/2800/3500",
                    "Argus Protections: 25/35/45/55/65",
                    "Argus Movement Speed: 440/455/470/485/500",
                    "Ability Type: Circle, Knockup, Damage",
                    "Range/Radius: 65/20",
                    "Cost: 80/85/90/95/100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Hercules",
        "Attributes": {
            "Title:": "Champion of Rome",
            "Pantheon:": "Roman",
            "Type:": "Melee,Physical",
            "Class:": "Warrior",
            "Pros:": "High Single Target Damage, High Sustain",
            "Difficulty:": "Easy",
            "Release date:": "January 9, 2013",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Hercules voicelines",
            "Voice actor:": "J. Michael Tatum",
            "Health:": "490 (+89)",
            "Mana:": "205 (+32)",
            "Speed:": "375 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+1%)",
            "Damage:": "39 (+ 2)+ 100% of Physical Power",
            "Progression:": "1/1/1.5x damage and swing time",
            "Physical:": "18 (+3)",
            "Magical:": "24 (+1.3)",
            "HP5:": "7 (+0.63)",
            "MP5:": "4.3 (+0.4)",
            "imageURL": require("../assets/images/Hercules.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Strength from Pain",
                "description": "Every time Hercules takes damage from an enemy god he gains a stacking self buff that provides increased Physical Power.",
                "imageURL": require("../assets/images/Hercules_ability_0.png"),
                "notes": [
                    "Each stack provides up to 24 Physical Power (5, stacking to 15 at level 1) at level 20 with all 3 stacks providing 72 Power.",
                    "Each stack refreshes the buff duration.",
                    "Physical Power per Stack: 4 +1 per level",
                    "Duration: 5s",
                    "Max Stacks: 3",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Driving Strike",
                "description": "Hercules delivers a mighty strike, driving all enemies back, damaging and Stunning them. Hercules is immune to Knockback during the dash.",
                "imageURL": require("../assets/images/Hercules_ability_1.png"),
                "notes": [
                    "Damage: 100/170/240/310/380 (+90% of your Physical Power)",
                    "Stun: 1.1/1.2/1.3/1.4/1.5s",
                    "Ability Type: Line, Dash, Damage",
                    "Range: 35",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Earthbreaker",
                "description": "Hercules smashes the ground, sending a shockwave forward that does damage to all enemies in the path. Enemies at the end of the shockwave are thrown into the air towards Hercules.",
                "imageURL": require("../assets/images/Hercules_ability_2.png"),
                "notes": [
                    "Has a pull range of at least 25 units in front of Hercules.",
                    "This ability cannot pull players through walls.",
                    "Damage: 90/145/200/255/310 (+70% of your Physical Power)",
                    "Ability Type: Line, Knockback, Damage",
                    "Range: 45",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Mitigate Wounds",
                "description": "Hercules heals himself instantly and gains increased Attack Speed, Magical, and Physical Protections for the next 4s. A percentage of the damage taken during this time is returned to him as an additional heal at the end of the duration.",
                "imageURL": require("../assets/images/Hercules_ability_3.png"),
                "notes": [
                    "Initial Heal: 45/75/105/135/165",
                    "Damage Returned as Healing: 20/26/32/38/44%",
                    "Protections Buff: 20/30/40/50/60",
                    "Attack Speed: 25%",
                    "Ability Type: Buff",
                    "Cost: 60 mana",
                    "Cooldown: 15 seconds"
                ]
            },
            {
                "name": "Ultimate  - Excavate",
                "description": "Hercules rips a huge boulder from the ground. Throwing the boulder does damage where the boulder lands. The boulder continues rolling, doing the same damage to all enemies in its path. Subsequent hits on the same enemy do 50% less damage per hit. Hercules is immune to Crowd Control while casting.",
                "imageURL": require("../assets/images/Hercules_ability_4.png"),
                "notes": [
                    "The boulder will bounce off of any wall it hits.",
                    "Hercules can re-aim this ability during its pre-fire.",
                    "Can deal multiple instances of damage (150/212.5/275/337.5/400 (+50% of your Physical Power) damage after the initial hit) if the target outruns the boulder but stays in its path.",
                    "Damage: 300/425/550/675/800 (+100% of your Physical Power)",
                    "Ability Type: Circle, Damage",
                    "Range/Radius: 45/15",
                    "Cost: 100 mana",
                    "Cooldown: 90/85/80/75/70 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Horus",
        "Attributes": {
            "Title:": "The Rightful Heir",
            "Pantheon:": "Egyptian",
            "Type:": "Melee,Physical",
            "Class:": "Warrior",
            "Pros:": "High Defense, High Sustain",
            "Difficulty:": "Average",
            "Release date:": "April 30, 2019",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Horus voicelines",
            "Voice actor:": "Gavin Hammon",
            "Health:": "498 (+95)",
            "Mana:": "230 (+37)",
            "Speed:": "370 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+1.2%)",
            "Damage:": "37 (+ 2.1)+ 100% of Physical Power",
            "Progression:": "None",
            "Physical:": "17 (+3)",
            "Magical:": "24 (+1.3)",
            "HP5:": "6 (+0.8)",
            "MP5:": "4.7 (+0.45)",
            "imageURL": require("../assets/images/Horus.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Resolute",
                "description": "Each time Horus is damaged by an enemy god, Horus gains a stack of Resolute. If Set is the god damaging Horus, Horus gains 2 stacks. Each stack increases Horus' Protections and CCR. Resolute stacks to a max count of 10 for 3s. When Resolute fades, Horus is healed based on the amount of stacks.",
                "imageURL": require("../assets/images/Horus_ability_0.png"),
                "notes": [
                    "Grants 25 Protections and 15% CCR at max stacks.",
                    "Each stack heals for 20, allowing a total of 200 health (4.08 and 40.8 total health at level 1) at level 20.",
                    "Protections per Stack: 2.5",
                    "CCR per Stack: 1.5%",
                    "Heal per Stack: 4 +0.8 per Level",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Updraft",
                "description": "Horus uses his wings to create an updraft around himself, knocking nearby enemies into the air.Using the currents from the updraft, Horus' next Basic Attack within 5s will create a gust of wind that travels forward, damaging enemies and slowing them for 2.5s. This attack cannot crit. Enemies that are knocked up when hit take bonus damage.",
                "imageURL": require("../assets/images/Horus_ability_1.png"),
                "notes": [
                    "Horus uses his wings to create an updraft around himself, knocking nearby enemies into the air.\nUsing the currents from the updraft, Horus' next Basic Attack within 5s will create a gust of wind that travels forward, damaging enemies and slowing them for 2.5s. This attack cannot crit. Enemies that are knocked up when hit take bonus damage.",
                    "The gust deals 45/60/75/90/105 +150% of your Basic Attack Damage to a unit that's been knocked up by this ability. The gust also triggers item effects and benefits from only 33% Lifesteal.",
                    "The projectile is spent even if Horus misses.",
                    "Damage: 50/95/140/185/230 (+75% of your Physical Power)",
                    "Gust Damage: 30/40/50/60/70 +100% of your Basic Attack Damage",
                    "Gust Bonus Damage: 1.5x",
                    "Gust Slow: 25%",
                    "Ability Type: Circle, Knockup, Damage",
                    "Range/Radius: 55/12",
                    "Cost: 55/60/65/70/75 mana",
                    "Cooldown: 14/13.5/13/12.5/12 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Fracture",
                "description": "Horus dashes forward a short distance, ready to strike with his weapon. If Horus hits a god he stops and stuns the god for 1.25s. He will then wind up a heavy cleave. Enemies hit have their Protections reduced for 3s.",
                "imageURL": require("../assets/images/Horus_ability_2.png"),
                "notes": [
                    "Has a cone range of 15.",
                    "Can deal up to 130/195/260/325/390 (+80% of your Physical Power) damage.",
                    "Horus can move freely in all directions while suffering a 50% movement speed slow during the cleave attack.",
                    "Dash Damage: 70/95/120/145/170 (+30% of your Physical Power)",
                    "Cleave Damage: 60/100/140/180/220 (+50% of your Physical Power)",
                    "Protection Reduction: 5/10/15/20/25",
                    "Ability Type: Line, Dash, Damage",
                    "Range: 40",
                    "Cost: 55/60/65/70/75 mana",
                    "Cooldown: 14/13.5/13/12.5/12 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Protector's Surge",
                "description": "Horus rushes to the aid of an ally. After selecting an ally, Horus will fly to their location before descending. Upon landing, the selected ally and all nearby allies have their health restored and gain protections for 5s.",
                "imageURL": require("../assets/images/Horus_ability_3.png"),
                "notes": [
                    "Has a healing AoE of 15.",
                    "If the selected ally enters a state where they're no longer on the ground or dies, Horus will land either underneath or directly at the targeted ally depending on its last location.",
                    "Heal: 40/70/100/130/160",
                    "Protection Buff: 10/15/20/25/30",
                    "Ability Type: Target, Buff",
                    "Range/Radius: 60/10",
                    "Cost: 45 mana",
                    "Cooldown: 13 seconds"
                ]
            },
            {
                "name": "Ultimate  - To The Skies!",
                "description": "Horus sends a mirror image of himself into the sky that scouts for a location to fly to. Upon selecting a ground location, Horus will begin to channel for 2s. Allies near Horus after these 2 seconds are flown to the location Horus' image chose. Horus and his allies land with such force, enemies take damage and are knocked away from the landing location. Horus and allies at the landing location gain a protective shield for 4s.",
                "imageURL": require("../assets/images/Horus_ability_4.png"),
                "notes": [
                    "Has a range of 100.",
                    "Horus is immobile and immune from crowd control effects while channeling and his mirror image moves at 70% of Horus' Movement Speed.",
                    "Any allies near Horus that use a channeled ability will continue channeling it after teleporting.",
                    "If there is no valid location to teleport, Horus and allies in the radius will teleport to the closest valid point near the targeter.",
                    "Damage: 150/250/350/450/550 (+80% of your Physical Power)",
                    "Shield: 160/240/320/400/480",
                    "Ability Type: Circle, Buff, Damage",
                    "Radius: 20",
                    "Cost: 100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Hou Yi",
        "Attributes": {
            "Title:": "Defender of the Earth",
            "Pantheon:": "Chinese",
            "Type:": "Ranged,Physical",
            "Class:": "Hunter",
            "Pros:": "High Single Target Damage, High Area Damage",
            "Difficulty:": "Hard",
            "Release date:": "January 14, 2015",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Hou Yi voicelines",
            "Voice actor:": "Austin Tindle",
            "Health:": "480 (+78)",
            "Mana:": "240 (+38)",
            "Speed:": "370 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.95 (+1.4%)",
            "Damage:": "35 (+ 2.8)+ 100% of Physical Power",
            "Progression:": "None",
            "Physical:": "13 (+3)",
            "Magical:": "23 (+1.3)",
            "HP5:": "8 (+0.68)",
            "MP5:": "5 (+0.35)",
            "imageURL": require("../assets/images/Hou_Yi.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Suntouched",
                "description": "After taking a critical hit, Hou Yi can't be critically hit again for 3s and his cooldowns are reduced by 2s.",
                "imageURL": require("../assets/images/Hou_Yi_ability_0.png"),
                "notes": [
                    "Doesn't affect Ne Zha's Wind Fire Wheels.",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Ricochet",
                "description": "Hou Yi fires a powerful shot that can ricochet off of walls. After firing, if this arrow bounces off of a wall it will travel 70 units from that point and gain +40% bonus damage to gods per bounce up to a maximum of 2 bounces. This arrow will stun if the target has Mark of the Golden Crow.",
                "imageURL": require("../assets/images/Hou_Yi_ability_1.png"),
                "notes": [
                    "Deals up to 285/435/585/735/885 (+210% of your Physical Power) damage (non-god sources) and 399/609/819/1029/1239 (+294% of your Physical Power) damage (gods) when landing all 3 hits.",
                    "Can also bounce off player-made walls.",
                    "Damage: 95/145/195/245/295 (+70% of your Physical Power)",
                    "Stun Duration: 1s",
                    "Ability Type: Line, Damage",
                    "Range: 70",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 10/9.5/9/8.5/8 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Mark of the Golden Crow",
                "description": "Hou Yi marks an enemy with Mark of the Golden Crow. Marked enemies take extra damage for every 10% of their missing health from Hou Yi's abilities and basic attacks. Also, marked enemies, including stealthed gods, are visible to Hou Yi on the minimap. The mark lasts for 10s.",
                "imageURL": require("../assets/images/Hou_Yi_ability_2.png"),
                "notes": [
                    "If multiple gods are in the radius, it will target the one closest to the center of the ability.",
                    "Damage Increase: 2/3/4/5/6% for every 10% of missing health",
                    "Ability Type: Target, Debuff",
                    "Range/Radius: 55/10",
                    "Cost: 50 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Divebomb",
                "description": "Hou Yi launches into the air, and for a short time may target some distance away to quickly dive towards the ground damaging any enemies in the immediate area. If the target has Mark of the Golden Crow they are knocked back.",
                "imageURL": require("../assets/images/Hou_Yi_ability_3.png"),
                "notes": [
                    "Has a maximum air time of 1.5s.",
                    "If there is no valid landing location, Hou Yi will land at the closest valid point near the targeter.",
                    "Damage: 70/110/150/190/230 (+60% of your Physical Power)",
                    "Ability Type: Circle, Leap, Damage",
                    "Radius: 55/20",
                    "Cost: 70 mana",
                    "Cooldown: 15 seconds"
                ]
            },
            {
                "name": "Ultimate  - Sunbreaker",
                "description": "Hou Yi shoots nine arrows into the sky, striking one sun with each arrow. The nine suns come crashing down one by one, slowing and dealing damage in a target area over time. A target with Mark of the Golden Crow will have their movement speed slowed by an additional 20%.",
                "imageURL": require("../assets/images/Hou_Yi_ability_4.png"),
                "notes": [
                    "Deals up to 720/810/900/990/1080 (+225% of your Physical Power) damage and applies a 40% slow to a target with Mark of the Golden Crow.",
                    "The slow duration refreshes per tick.",
                    "Can move freely in all directions while deploying this ability.",
                    "Damage: 80/90/100/110/120 (+25% of your Physical Power) every 0.5s",
                    "Duration: 4.5s",
                    "Slow: 20%",
                    "Slow Duration: .5s per Hit",
                    "Ability Type: Circle, Slow, Damage",
                    "Range/Radius: 55/30",
                    "Cost: 100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Hun Batz",
        "Attributes": {
            "Title:": "The Howler Monkey God",
            "Pantheon:": "Maya",
            "Type:": "Melee,Physical",
            "Class:": "Assassin",
            "Pros:": "High Single Target Damage",
            "Difficulty:": "Easy",
            "Release date:": "May 31, 2012",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Hun Batz voicelines",
            "Voice actor:": "Brad M. Jackson",
            "Health:": "460 (+75)",
            "Mana:": "220 (+38)",
            "Speed:": "370 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+1.89%)",
            "Damage:": "38 (+ 2.16)+ 100% of Physical Power",
            "Progression:": "1/.75/1.25x damage",
            "Physical:": "13 (+3)",
            "Magical:": "23 (+1.3)",
            "HP5:": "10 (+0.68)",
            "MP5:": "4.4 (+0.38)",
            "imageURL": require("../assets/images/Hun_Batz.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Infused Strikes",
                "description": "After using an ability, Hun Batz's next Basic Attack will deal 20% increased damage.",
                "imageURL": require("../assets/images/Hun_Batz_ability_0.png"),
                "notes": [
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Somersault",
                "description": "Hun Batz flips through the air, crashing down at his target location, doing damage to all nearby enemies and Slowing them.",
                "imageURL": require("../assets/images/Hun_Batz_ability_1.png"),
                "notes": [
                    "Damage: 65/105/145/185/225 (+70% of your Physical Power)",
                    "Slow: 30/32.5/35/37.5/40%",
                    "Slow Duration: 2s",
                    "Ability Type: Circle, Leap, Damage",
                    "Range/Radius: 55/15",
                    "Cost: 60 mana",
                    "Cooldown: 13/12.5/12/11.5/11 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Overhand Smash",
                "description": "Hun Batz smashes his staff to the ground in front of him, doing damage to all enemies. While Hun Batz is channeling, he is immune to knockups.",
                "imageURL": require("../assets/images/Hun_Batz_ability_2.png"),
                "notes": [
                    "Hun Batz suffers no movement penalty while casting.",
                    "Damage: 85/140/195/250/305 (+95% of your Physical Power)",
                    "Ability Type: Cone, Damage",
                    "Range: 35",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 12/11/10/9/8 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Sacred Monkey",
                "description": "Hun Batz commands a monkey through the air that pounces on enemy targets, doing damage on each pounce, hitting each god only once. The monkey can bounce back to minions it has already hit. Pressing the button again teleports Hun Batz to the next target hit.",
                "imageURL": require("../assets/images/Hun_Batz_ability_3.png"),
                "notes": [
                    "If the god who was recently hit enters a state where they're either untargetable, banished or at an invalid location, Hun Batz will teleport to the target's last valid location.",
                    "Has a bounce range of 55.",
                    "Damage per Hit: 80/135/190/245/300 (+70% of your Physical Power)",
                    "Max Targets: 4",
                    "Ability Type: Line, Teleport, Damage",
                    "Range: 55",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 13 seconds"
                ]
            },
            {
                "name": "Ultimate  - Fear No Evil",
                "description": "Hun Batz summons a totem from the ground to ward off all evil. Any enemy caught within the radius is feared directly away from the totem and takes damage every .25s.",
                "imageURL": require("../assets/images/Hun_Batz_ability_4.png"),
                "notes": [
                    "Can be deployed in walls.",
                    "Can deal up to 200/250/300/350/400 (+60/75/90/105/120% of your Physical Power) damage.",
                    "Damage per Tick: 50 (+15% of your Physical Power)",
                    "Lifetime: 1/1.25/1.5/1.75/2s",
                    "Ability Type: Circle, Fear, Damage",
                    "Range/Radius: 45/35",
                    "Cost: 100 mana",
                    "Cooldown: 120/115/110/105/100 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Ishtar",
        "Attributes": {
            "Title:": "Goddess of Love and War",
            "Pantheon:": "Babylonian",
            "Type:": "Physical,Ranged",
            "Class:": "Hunter",
            "Pros:": "Medium Area Damage, High Attack Speed",
            "Difficulty:": "Average",
            "Release date:": "August 23, 2022",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Ishtar voicelines",
            "Voice actor:": "Dalia Ramahi",
            "Health:": "470 (+78)",
            "Mana:": "220 (+38)",
            "Speed:": "365 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "1 (+1.6%)",
            "Damage:": "34 (+ 2.6)+ 100% of Physical Power",
            "Progression:": "None",
            "Physical:": "13 (+2.9)",
            "Magical:": "23 (+1.3)",
            "HP5:": "7 (+0.7)",
            "MP5:": "4.5 (+0.38)",
            "imageURL": require("../assets/images/Ishtar.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Mark of Vengeance",
                "description": "When Ishtar drops below 75% Health, she marks the Enemy God that most recently damaged her for 10s. Each time Ishtar deals damage to the marked God with a Basic Attack, she gains a stacking Attack Speed buff. If Ishtar receives a kill or assist on the marked God, she gains a Movement Speed buff. This passive has a 20 second cooldown.",
                "imageURL": require("../assets/images/Ishtar_ability_0.png"),
                "notes": [
                    "Attack speed stacks up to 30%.",
                    "The mark does not reveal stealthed targets.",
                    "Attack Speed Buff: 5% for 4s",
                    "Max Stacks: 6",
                    "Movement Speed Buff: 20% for 5s",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Imbue Arrows",
                "description": "Ishtar imbues her arrows with heavenly light, enhancing her Basic Attacks in one of three ways for 6s. The three varieties include Strike Shot, a lobbed explosive arrow, Spread Shot, a volley of five arrows, and Storm Shot, a fast-paced long range snipe. Ishtar cannot hit Structures during the duration.",
                "imageURL": require("../assets/images/Ishtar_ability_1.png"),
                "notes": [
                    "Ishtar can cancel the ability selection without triggering it's cooldown and can cancel any of her empowered basic attacks any time.",
                    "Empowered basic attacks also don't damage player-made deployables nor wards while active.",
                    "Duration: 6s",
                    "Ability Type: Buff",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 10 seconds"
                ]
            },
            {
                "name": "1st Ability Variant  - Strike Shot",
                "description": "Ishtar lobs bolts that explode in an area, dealing bonus damage. These shots may also be fired over walls.",
                "imageURL": require("../assets/images/Ishtar_ability_2.png"),
                "notes": [
                    "Crits deal 60% damage while active.",
                    "Basic Attacks trigger item effects and benefit from only 33% Lifesteal while active.",
                    "Bonus Damage: 5/11/17/23/29",
                    "Crit Damage Reduction: 40%",
                    "Ability Type: Area Basic, Buff",
                    "Range/Radius: 47/10"
                ]
            },
            {
                "name": "1st Ability Variant  - Spread Shot",
                "description": "Ishtar notches additional light arrows and fires 5 shots in a cone. Only the center arrow triggers Basic Attack item effects.",
                "imageURL": require("../assets/images/Ishtar_ability_3.png"),
                "notes": [
                    "Deals a total of 124/127/130/133/136% Basic attack damage per basic attack to an enemy hit by all 5 arrows.",
                    "Center Damage: 100% of your Basic Attack Damage",
                    "Side Damage: 6/6.75/7.5/8.25/9% of your Basic Attack Damage",
                    "Ability Type: Area Basic, Buff",
                    "Range: 55"
                ]
            },
            {
                "name": "1st Ability Variant  - Storm Shot",
                "description": "Ishtar enhances her Attack Speed and fires quick, long-range shots that deal reduced damage.",
                "imageURL": require("../assets/images/Ishtar_ability_4.png"),
                "notes": [
                    "Basic attacks deal 80% damage and trigger item effects while active.",
                    "Attack Speed: 20/25/30/35/40%",
                    "Projectile Speed: 120%",
                    "Damage Reduction: 20%",
                    "Ability Type: Area Basic, Buff",
                    "Range: 80"
                ]
            },
            {
                "name": "2nd Ability  - Rolling Thunder",
                "description": "Ishtar calls down four strikes of lightning in a line, damaging Enemies within their area. Ishtar may aim which direction the strikes travel. If an Enemy is hit by more than one strike, they are mesmerized.",
                "imageURL": require("../assets/images/Ishtar_ability_5.png"),
                "notes": [
                    "Can deal up to 240/340/440/540/640 (+160% of your Physical Power) damage.",
                    "Strike Damage: 60/85/110/135/160 (+40% of your Physical Power)",
                    "Mesmerize: 0.75s",
                    "Ability Type: Area, Mesmerize, Damage",
                    "Range/Radius: 70/15",
                    "Cost: 55/60/65/70/75 mana",
                    "Cooldown: 15/14.5/14/13.5/13 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Jolt",
                "description": "Ishtar draws her blades and charges forward, striking all Enemies in her path. If she hits an Enemy God, she stops and roots them for 1s as she backflips off of them. As Ishtar is in the air, she fires her bow, dealing damage in an area around the affected God. This shot may Crit and trigger Basic Attack item effects.",
                "imageURL": require("../assets/images/Ishtar_ability_6.png"),
                "notes": [
                    "The backflip has a range of 25.",
                    "Ishtar cannot backflip through map walls, however she can backflip through player-made walls.",
                    "Charge Damage: 80/120/160/200/240 (+60% of your Physical Power)",
                    "Arrow Damage: 20/30/40/50/60 + 120% of your Basic Attack Power",
                    "Root: 1s",
                    "Ability Type: Dash, Root, Damage",
                    "Range: 55/15",
                    "Cost: 60 mana",
                    "Cooldown: 15/14.5/14/13.5/13 seconds"
                ]
            },
            {
                "name": "Ultimate  - Blades of Retribution",
                "description": "Ishtar becomes CC-immune and summons five swords of light, firing them out in a cone in front of her. Each sword damages and cripples enemies for 1.25s. When the swords reach their destination, Ishtar may recall them to her location within 3s. If an Enemy is hit by both the initial fire and the recall, they are stunned for 1s. Each sword hit after the first deals reduced damage, resetting before recalling.",
                "imageURL": require("../assets/images/Ishtar_ability_7.png"),
                "notes": [
                    "Can deal up to 314/412/510/608/706 (+196% of your Physical Power) damage from both the initial fire and recall.",
                    "Can be refired any time, even while under crowd control or dead.",
                    "If Ishtar dies after refiring this ability, the blades will return to the location where she was killed.",
                    "Sword Damage: 80/105/130/155/180 (+50% of your Physical Power)",
                    "Damage Reduction: 40% per sword, up to a max of 80%",
                    "Cripple: 1.25s",
                    "Stun: 1s",
                    "Ability Type: Cone, Crowd Control, Damage",
                    "Range: 80",
                    "Cost: 100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Ix Chel",
        "Attributes": {
            "Title:": "The Light Weaver",
            "Pantheon:": "Maya",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "High Crowd Control, High Sustain, Medium Area Damage",
            "Difficulty:": "Average",
            "Release date:": "April 18, 2023",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Ix Chel voicelines",
            "Voice actor:": "Pilar Uribe",
            "Health:": "380 (+80)",
            "Mana:": "300 (+44)",
            "Speed:": "360 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.9 (+0.8%)",
            "Damage:": "35 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "12 (+2.8)",
            "Magical:": "23 (+1.3)",
            "HP5:": "7 (+0.6)",
            "MP5:": "5 (+0.45)",
            "imageURL": require("../assets/images/Ix_Chel.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Rainbow Weaver",
                "description": "Every time Ix Chel hits an enemy god or provides an allied god with a beneficial effect she gains one color of the rainbow. On obtaining all 6, her next basic attack has no movement penalty, is increased in size and deals bonus damage.",
                "imageURL": require("../assets/images/Ix_Chel_ability_0.png"),
                "notes": [
                    "The empowered basic attack also triggers item effects, has 10% increased projectile speed, benefits from only 33% lifesteal if multiple enemies are hit and is spent even if Ix Chel misses.",
                    "The empowered basic attack can also hit enemy structures from outside their attack radius.",
                    "Damage: 40% of your magical power",
                    "Ability Type: Ranged Basic, Damage",
                    "Range/Radius: 70/8"
                ]
            },
            {
                "name": "1st Ability  - Gleaming Blast (Threads of Light)",
                "description": "Gleaming Blast - Ix Chel fires a blast of gleaming light ahead of her dealing damage, piercing minions, and stopping on the first enemy god hit. Minions and Jungle Camps take an extra +40% damage. Hitting an enemy causes this ability to change.Threads of Light - Strands of Light illuminate damage enemies in their path. Enemies facing the strands as they illuminate are Blinded. Enemies hit by the tip of the field, take bonus damage.",
                "imageURL": require("../assets/images/Ix_Chel_ability_1.png"),
                "notes": [
                    "Gleaming Blast - Ix Chel fires a blast of gleaming light ahead of her dealing damage, piercing minions, and stopping on the first enemy god hit. Minions and Jungle Camps take an extra +40% damage. Hitting an enemy causes this ability to change.",
                    "Threads of Light - Strands of Light illuminate damage enemies in their path. Enemies facing the strands as they illuminate are Blinded. Enemies hit by the tip of the field, take bonus damage.",
                    "Gleaming Blast deals 84/112/140/168/196 (+56% of your Magical Power) damage to minions and jungle camps.",
                    "Threads of Light deals 75/131/188/244/300 (+69% of your Magical Power) damage to enemies at the second half of the cone.",
                    "The second half of the cone from Threads of Light has a range of 32.5.",
                    "Gleaming Blast switches abilities when only hitting gods with Threads of Light.",
                    "Blast Damage: 60/80/100/120/140 (+40% of your Magical Power)",
                    "Light Damage: 60/105/150/195/240 (+55% of your Magical Power)",
                    "Bonus Damage: 25%",
                    "Blind Duration: 1s",
                    "Ability Type: Line, Damage (Area, Crowd Control, Damage)",
                    "Range: 70 (65)",
                    "Cost: 40/45/50/55/60 (50/55/60/65/70) mana",
                    "Cooldown: 6 (0) seconds"
                ]
            },
            {
                "name": "2nd Ability  - Lunar Invocation",
                "description": "Ix Chel marks an area on the ground invoking it with lunar energy. After a short delay the energy explodes Knocking up and dealing damage to enemies while Healing allies.",
                "imageURL": require("../assets/images/Ix_Chel_ability_2.png"),
                "notes": [
                    "Has a post-fire time of 0.5s and delay time of 1s.",
                    "Damage: 95/145/195/245/295 (+70% of your Magical Power)",
                    "Heal: 50/85/120/155/180",
                    "Ability Type: Circle, Crowd Control, Damage",
                    "Range/Radius: 55/20",
                    "Cost: 65 mana",
                    "Cooldown: 15 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Rainbow Crash",
                "description": "Ix Chel sends out an arcing, weaved rainbow towards a location while gaining a small burst of Movement Speed.On landing the crashing rainbow deals damage and Roots enemies, splitting into smaller orbs of light. These orbs can be picked up by Ix Chel and her allies for increased Movement Speed.",
                "imageURL": require("../assets/images/Ix_Chel_ability_3.png"),
                "notes": [
                    "Ix Chel sends out an arcing, weaved rainbow towards a location while gaining a small burst of Movement Speed.\nOn landing the crashing rainbow deals damage and Roots enemies, splitting into smaller orbs of light. These orbs can be picked up by Ix Chel and her allies for increased Movement Speed.",
                    "Provides up to 40% Movement Speed from the AoE and orbs.",
                    "The orbs can bounce off of walls up to 2 times.",
                    "Allies can only pick up one orb per ability cast.",
                    "Damage: 80/120/160/200/240 (+75% of your Magical Power)",
                    "Root Duration: 1.25s",
                    "Movement Speed: 20% for 3s",
                    "Orb Movement Speed: 20% for 3s",
                    "Ability Type: Circle, Buff, Damage",
                    "Range/Radius: 55/15",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 14/13.5/13/12.5/12 seconds"
                ]
            },
            {
                "name": "Ultimate  - Great End",
                "description": "Ix Chel becomes CC immune as she channels all of her energy into a single intense beam of light. The beam deals damage to enemies and heals allies every 0.2s for 3s, increasing in duration if Ix Chel hits allied and enemy gods at the same time.Enemies take increasing damage per tick which decays rapidly if not hit recently.Healing an ally or damaging an enemy also heals Ix Chel. Ix Chel gains 6 stacks of Rainbow Weaver on firing.",
                "imageURL": require("../assets/images/Ix_Chel_ability_4.png"),
                "notes": [
                    "Ix Chel becomes CC immune as she channels all of her energy into a single intense beam of light. The beam deals damage to enemies and heals allies every 0.2s for 3s, increasing in duration if Ix Chel hits allied and enemy gods at the same time.",
                    "Enemies take increasing damage per tick which decays rapidly if not hit recently.\nHealing an ally or damaging an enemy also heals Ix Chel. Ix Chel gains 6 stacks of Rainbow Weaver on firing.",
                    "Deals up to 375/735/945/1155/1365 (+210% of your Magical Power) when not healing at least one ally while healing up to 30% of their missing HP and up to 1000/1400/1800/2200/2600 (+400% of your Magical Power) damage when healing an ally for the duration and heals allies up to 60% of their missing HP.",
                    "Ix Chel only heals once per tick regardless of how many allies healed/enemies damaged.",
                    "Ix Chel can move freely in all directions and suffers no backpedal penalty for the duration.",
                    "Damage per tick: 20/28/36/44/52 (+8% of your Magical Power)",
                    "Heal per tick: 2% Missing HP",
                    "Subsequent damage increase: 5%",
                    "Maximum Damage Increase Per Target: 100%",
                    "Maximum Duration: 6s",
                    "Ability Type: Line, Heal, Damage",
                    "Range/Radius: 70/2.5",
                    "Cost: 90 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Izanami",
        "Attributes": {
            "Title:": "Matron of the Dead",
            "Pantheon:": "Japanese",
            "Type:": "Ranged,Physical",
            "Class:": "Hunter",
            "Pros:": "Pusher, High Area Damage",
            "Difficulty:": "Average",
            "Release date:": "August 30, 2016",
            "Favor:": "(Free) 0",
            "Gems:": "(Free) 0",
            "Voicelines:": "Izanami voicelines",
            "Voice actor:": "Lisa Ortiz",
            "Health:": "450 (+77)",
            "Mana:": "210 (+35)",
            "Speed:": "365 (+0)",
            "Range:": "52 (+0)",
            "Attack/Sec:": "0.92 (+1.7%)",
            "Damage:": "31 (+ 2.4)+ 75% of Physical Power",
            "Progression:": "None. Kamas return to Izanami after reaching Max Range.",
            "Physical:": "11 (+2.9)",
            "Magical:": "23 (+1.3)",
            "HP5:": "6 (+0.7)",
            "MP5:": "4.4 (+0.38)",
            "imageURL": require("../assets/images/Izanami.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Death Draws Nigh",
                "description": "The closer Izanami gets to death, the more powerful she becomes.Izanami gains 4% Physical Penetration for each 10% of her Health that is missing, up to a maximum of 20%.Izanami's Basic Attacks increase in projectile speed with higher Attack Speed and only trigger Item effects on the first target hit per attack.",
                "imageURL": require("../assets/images/Izanami_ability_0.png"),
                "notes": [
                    "The closer Izanami gets to death, the more powerful she becomes.",
                    "Izanami gains 4% Physical Penetration for each 10% of her Health that is missing, up to a maximum of 20%.",
                    "Izanami's Basic Attacks increase in projectile speed with higher Attack Speed and only trigger Item effects on the first target hit per attack.",
                    "Izanami's basic attacks have a power contribution of 75% when fired and 35% power contribution when returning to her (total scaling of 110% power contribution) and benefit from only 33% Lifesteal.",
                    "Penetration per Stack: 4%",
                    "Max Stacks: 5",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Sickle Storm",
                "description": "For 6s, Izanami throws her kama sickles even faster and more furiously. While active she gains Attack Speed, and her Basic Attacks no longer return to her, instead applying Bonus Damage in addition to 100% of her Basic Attack power per hit. This Bonus Damage applies to all targets, including Structures.",
                "imageURL": require("../assets/images/Izanami_ability_1.png"),
                "notes": [
                    "Won't go into cooldown until the effect ends.",
                    "Right-clicking will end it early.",
                    "Attack Speed: 45/50/55/60/65%",
                    "Bonus Damage: 10/15/20/25/30",
                    "Ability Type: Ranged Basic, Buff",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 10 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Spectral Projection",
                "description": "Izanami sends forth a demonic visage of herself to strike down her enemies, damaging and Slowing all Enemies in a line.If an Enemy God is killed while slowed by this ability, future uses of the slow will be increased by 10% per kill up to twice, for a maximum of 40%.",
                "imageURL": require("../assets/images/Izanami_ability_2.png"),
                "notes": [
                    "Damage: 65/115/165/215/265 (+80% of your Physical Power)",
                    "Slow: 20% + 10% per Kill (Max 40%)",
                    "Slow Duration: 3s",
                    "Ability Type: Line, Slow, Damage",
                    "Range: 70",
                    "Cost: 70 mana",
                    "Cooldown: 14/13.5/13/12.5/12 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Fade Away",
                "description": "Izanami descends into the underworld, becoming Stealthed, and leaps away from her current position.Taking damage, or firing a damaging Ability or Basic Attack breaks her Stealth.",
                "imageURL": require("../assets/images/Izanami_ability_3.png"),
                "notes": [
                    "Izanami descends into the underworld, becoming Stealthed, and leaps away from her current position.\nTaking damage, or firing a damaging Ability or Basic Attack breaks her Stealth.",
                    "Has a prefire of 0.35s.",
                    "Izanami can't be targeted by minions while channeling.",
                    "Despite moving underground, this ability is considered a leap.",
                    "If Izanami enters a structure's attack range while invisible, she will be revealed.",
                    "Duration: 3/3.5/4/4.5/5s",
                    "Ability Type: Leap",
                    "Range: 55",
                    "Cost: 70 mana",
                    "Cooldown: 15 seconds"
                ]
            },
            {
                "name": "Ultimate  - Dark Portal",
                "description": "Izanami summons a dark portal which Damages and Silences all Enemies in range.",
                "imageURL": require("../assets/images/Izanami_ability_4.png"),
                "notes": [
                    "Both the prefire and postfire have a time of 0.6s.",
                    "Damage: 240/340/440/540/640 (+100% of your Physical Power)",
                    "Duration: 1.5/1.75/2/2.25/2.5s",
                    "Ability Type: Circle, Silence, Damage",
                    "Range/Radius: 60/15",
                    "Cost: 100 mana",
                    "Cooldown: 80 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Janus",
        "Attributes": {
            "Title:": "God of Portals and Transitions",
            "Pantheon:": "Roman",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "High Mobility, High Area Damage",
            "Difficulty:": "Average",
            "Release date:": "May 28, 2014",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Janus voicelines",
            "Voice actor:": "Sean Hennigan",
            "Health:": "400 (+70)",
            "Mana:": "350 (+58)",
            "Speed:": "360 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "1 (+0.8%)",
            "Damage:": "34 (+ 1.45)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "10 (+2.8)",
            "Magical:": "23 (+1.3)",
            "HP5:": "6 (+0.45)",
            "MP5:": "5 (+0.45)",
            "imageURL": require("../assets/images/Janus.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Passages",
                "description": "Any time Janus transitions through a Portal or over a Threshold he becomes aged and wizened, gaining additional Magical scaling on his next ability cast.",
                "imageURL": require("../assets/images/Janus_ability_0.png"),
                "notes": [
                    "Damaging abilities are spent even if Janus misses.",
                    "Magical Scaling: 15%",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Portal",
                "description": "Janus creates a portal in the world. If placed on a wall, the portal will create a passage through to the other side of the wall that Janus or any ally may use. The portal may be entered from either side, but closes after 1 use.If placed on the ground, enemies and Janus will fall into the portal, being teleported into the air above it. Enemies take damage upon landing, and are considered banished during the fall.",
                "imageURL": require("../assets/images/Janus_ability_1.png"),
                "notes": [
                    "Janus creates a portal in the world. If placed on a wall, the portal will create a passage through to the other side of the wall that Janus or any ally may use. The portal may be entered from either side, but closes after 1 use.\nIf placed on the ground, enemies and Janus will fall into the portal, being teleported into the air above it. Enemies take damage upon landing, and are considered banished during the fall.",
                    "Phoenix pedestals count as walls.",
                    "Wall portals can't be used by gods who are Stunned, Crippled or Rooted.",
                    "Janus won't fall through his ground portals while immune to Crowd Control.",
                    "Janus cannot place portals on walls that lead to outside the map.",
                    "Damage: 80/135/190/245/300 (+60% of your Magical Power)",
                    "Banish Duration: 1.5s",
                    "Wall Portal Duration: 5s",
                    "Wall Portal Range: 100",
                    "Ability Type: Circle, Banish, Damage",
                    "Radius: 55/10",
                    "Cost: 70 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Unstable Vortex",
                "description": "Janus creates two tethered unstable portals, far too small to fit into, and flings them forward dealing damage to enemies in their path. Enemies hit by both portals take 15% damage on the second hit.",
                "imageURL": require("../assets/images/Janus_ability_2.png"),
                "notes": [
                    "This ability also hits enemies in between the portals for the same damage.",
                    "Deals 115/190/265/341/414 (+92% of your Magical Power) damage if hit by both portals.",
                    "Damage: 100/165/230/295/360 (+80% of your Magical Power)",
                    "Ability Type: Area, Damage",
                    "Range: 70",
                    "Cost: 70/75/80/85/90 mana",
                    "Cooldown: 9 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Threshold",
                "description": "Passive: Janus increases the movement speed of himself and allies each time they go through a portal or over a Threshold (max. 3 Stacks).Active: Janus opens a multi-dimensional rift. Enemies who pass over the rift are slowed, and marked with Phase. Targets in Phase take additional Magical scaling damage when hit by Janus' damaging abilities.",
                "imageURL": require("../assets/images/Janus_ability_3.png"),
                "notes": [
                    "Passive: Janus increases the movement speed of himself and allies each time they go through a portal or over a Threshold (max. 3 Stacks).\nActive: Janus opens a multi-dimensional rift. Enemies who pass over the rift are slowed, and marked with Phase. Targets in Phase take additional Magical scaling damage when hit by Janus' damaging abilities.",
                    "The Phase debuff lasts 3s.",
                    "The buff/debuff is only applied once per cast.",
                    "Grants up to 45% Movement Speed.",
                    "The additional damage is dealt separately from the damage that triggered it.",
                    "Phase Slow: 25%",
                    "Additional Scaling: 15/25/35/45/55",
                    "Rift Duration: 3/3.5/4/4.5/5",
                    "Movement Speed: 15% per Portal.",
                    "Passive Duration: 6s",
                    "Ability Type: Line, Buff",
                    "Range: 55",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "Ultimate  - Through Space and Time",
                "description": "Passive: Janus gains increased % Magical Penetration.Active: Janus becomes CC Immune and blasts a ball of multi-dimensional energy across the battlefield, burning a portal into every surface it encounters within range 500. These portals last 10s, may be used by allies, and do not vanish after the first use.Enemies hit take damage, increasing in Magical scaling the further the energy travels. Enemy gods cannot take more than 75% of their maximum Health as damage.",
                "imageURL": require("../assets/images/Janus_ability_4.png"),
                "notes": [
                    "Passive: Janus gains increased % Magical Penetration.",
                    "Active: Janus becomes CC Immune and blasts a ball of multi-dimensional energy across the battlefield, burning a portal into every surface it encounters within range 500. These portals last 10s, may be used by allies, and do not vanish after the first use.",
                    "Enemies hit take damage, increasing in Magical scaling the further the energy travels. Enemy gods cannot take more than 75% of their maximum Health as damage.",
                    "The portals have no range restriction, but can't be placed on walls that lead outside the map.",
                    "While portals won't close on use, players can only go through each portal once.",
                    "This ability does not damage enemies who are inside their team's fountain.",
                    "Damage: 300/375/450/525/600 (+80% of your Magical Power)",
                    "Distance Scaling: 100% of your Magical Power at distance greater than 800.",
                    "% Magical Penetration: 10/12.5/15/17.5/20%",
                    "Ability Type: Line, Damage",
                    "Range: Global",
                    "Cost: 100 mana",
                    "Cooldown: 110 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Jing Wei",
        "Attributes": {
            "Title:": "The Oathkeeper",
            "Pantheon:": "Chinese",
            "Type:": "Ranged,Physical",
            "Class:": "Hunter",
            "Pros:": "High Mobility",
            "Difficulty:": "Easy",
            "Release date:": "April 12, 2016",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Jing Wei voicelines",
            "Voice actor:": "Alison Viktorin",
            "Health:": "435 (+78)",
            "Mana:": "205 (+36)",
            "Speed:": "370 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "1 (+1.6%)",
            "Damage:": "33 (+ 2.7)+ 100% of Physical Power",
            "Progression:": "None",
            "Physical:": "11 (+2.9)",
            "Magical:": "23 (+1.3)",
            "HP5:": "7 (+0.68)",
            "MP5:": "4.4 (+0.3)",
            "imageURL": require("../assets/images/Jing_Wei.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Rapid Reincarnation",
                "description": "When exiting the fountain, Jing Wei prepares for takeoff and then ascends into the sky, allowing her to fly over obstacles at an increased speed with Crowd Control immunity. Jing Wei can decline to fly by canceling the ability on her way out of the fountain.",
                "imageURL": require("../assets/images/Jing_Wei_ability_0.png"),
                "notes": [
                    "Has a landing range of 55, an airtime of 4s and up to 1s after exiting the fountain before it can be canceled.",
                    "If there is no valid landing location, Jing Wei will land at the closest valid point near the targeter.",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Persistent Gust",
                "description": "Jing Wei creates a gust of wind that damages enemies and knocks up enemy gods when summoned. The gust persists for 6s and continues to knock up and deal additional damage to enemies every 1s. If Jing Wei walks onto the area she is knocked into the air and gains an attack speed buff for 7s.",
                "imageURL": require("../assets/images/Jing_Wei_ability_1.png"),
                "notes": [
                    "The attack speed buff is refreshed when re-entering the area.",
                    "Can deal up to 190/290/390/490/590 (+115% of your Physical Power) damage.",
                    "Initial Damage: 90/140/190/240/290 (+90% of your Physical Power)",
                    "Damage Per Tick: 20/30/40/50/60 (+5% of your Physical Power)",
                    "Attack Speed Buff: 20/25/30/35/40%",
                    "Ability Type: Circle, Knockup, Damage",
                    "Range/Radius: 55/10",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 12/11.5/11/10.5/10 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Explosive Bolts",
                "description": "Jing Wei loads her crossbow with explosive bolts that augment her next 3 Basic Attacks. These attacks are wider, have increased critical chance, and deal area of effect damage.",
                "imageURL": require("../assets/images/Jing_Wei_ability_2.png"),
                "notes": [
                    "If used again before all 3 shots have been used, it will fully re-load back to 3 bolts.",
                    "AoE hits benefit from only 33% Lifesteal.",
                    "Crit Chance: 0/5/10/15/20%",
                    "Damage Per Shot: 110% of Jing Wei's Physical Power",
                    "Ability Type: Area Basic, Buff",
                    "Range/Radius: 55/8",
                    "Cost: 50 mana",
                    "Cooldown: 10 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Agility",
                "description": "Jing Wei dashes straight forward. She may use this ability while knocked into the air for a longer range dash. She also gains a 5s increase to Physical Power and Movement Speed upon using Agility. The effect of this buff is increased if Agility is used from the air.",
                "imageURL": require("../assets/images/Jing_Wei_ability_3.png"),
                "notes": [
                    "Power: 10/15/20/25/30",
                    "Movement Speed: 15%",
                    "Air Power: 30/35/40/45/50",
                    "Air Movement Speed: 25%",
                    "Ability Type: Line, Dash",
                    "Range: 35/55",
                    "Cost: 60 mana",
                    "Cooldown: 16/15.5/15/14.5/14 seconds"
                ]
            },
            {
                "name": "Ultimate  - Air Strike",
                "description": "Jing Wei channels briefly before taking to the sky. She then flies forward and upward while covering the area below her in explosions that damage all enemies in the area. After her attack she hovers for up to 2s before landing at a ground target location.",
                "imageURL": require("../assets/images/Jing_Wei_ability_4.png"),
                "notes": [
                    "Has a prefire of .7s.",
                    "The area has a radius of 30 and the landing while hovering has a range of 45.",
                    "If there is no valid landing location and/or fired into a wall, Jing Wei will teleport outside the wall and/or land at the closest valid point near the targeter.",
                    "Jing Wei is immune from crowd control effects while using this ability.",
                    "Damage: 220/310/400/490/580 (+120% of your Physical Power)",
                    "Ability Type: Line, Damage",
                    "Range: 70",
                    "Cost: 80/90/100/110/120 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Jormungandr",
        "Attributes": {
            "Title:": "The World Serpent",
            "Pantheon:": "Norse",
            "Type:": "Ranged,Magical",
            "Class:": "Guardian",
            "Pros:": "High Area Damage",
            "Difficulty:": "Average",
            "Release date:": "March 5, 2019",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Jormungandr voicelines",
            "Voice actor:": "Kellen Goff",
            "Health:": "495 (+100)",
            "Mana:": "190 (+40)",
            "Speed:": "370 (+0)",
            "Range:": "35 (+0)",
            "Attack/Sec:": "1 (+1%)",
            "Damage:": "11.2 (+ 0.96)+ 8% of Magical Power",
            "Progression:": "5 attacks per sec. decreasing while firing to a minimum of 2 per sec.",
            "Physical:": "21 (+3.5)",
            "Magical:": "27 (+1.3)",
            "HP5:": "7 (+0.9)",
            "MP5:": "4.5 (+0.45)",
            "imageURL": require("../assets/images/Jormungandr.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Immovable",
                "description": "Jormungandr is so large that he cannot be affected by Hard Displacement. Instead, he gets Dazed, a fading, non-cleansable slow that increases the damage he takes for the duration. Any Attack speed past base speeds up the recharge rate of Jormungandr's Basic Attack. Jormungandr's Basic Attacks proc item hit effects for 50% damage and healing.",
                "imageURL": require("../assets/images/Jormungandr_ability_0.png"),
                "notes": [
                    "If hit by a Displacement CC while the debuff is active, the debuff's duration refreshes.",
                    "Jormungandr's basic attacks are not affected by attack speed increase/decrease, benefit from only 33% Lifesteal and cannot go through walls but can through player-made walls.",
                    "If Jormungandr basic attacks for up to 6s without stopping, empties the fire rate meter and the recharge time is dependent based on his current attack speed.",
                    "Slow: 15%",
                    "Increased Damage Taken: 5%",
                    "Duration: 2s",
                    "Attack Speed Conversion: 5%",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Venomous Haze",
                "description": "Jormungandr fires noxious spit at an area that deals damage and creates a large toxic cloud. This field damages and slows Enemies inside of it every second.If Jormungandr interacts with a toxic cloud with Consuming Bellow or Submerge, the duration of the cloud is reduced to 8s.Jormungandr can have a maximum of 9 toxic clouds out at a time.",
                "imageURL": require("../assets/images/Jormungandr_ability_1.png"),
                "notes": [
                    "Jormungandr fires noxious spit at an area that deals damage and creates a large toxic cloud. This field damages and slows Enemies inside of it every second.\nIf Jormungandr interacts with a toxic cloud with Consuming Bellow or Submerge, the duration of the cloud is reduced to 8s.\nJormungandr can have a maximum of 9 toxic clouds out at a time.",
                    "Can deal up to 280/520/760/1000/1240 (+140% of your Magical Power) damage if deployed from the ability itself.",
                    "Damage: 80/120/160/200/240 (+40% of your Magical Power)",
                    "Damage per tick: 10/20/30/40/50 (+5% of your Magical Power)",
                    "Slow: 20%",
                    "Slow Duration: 1s",
                    "Cloud Duration: 20s",
                    "Ability Type: Circle, Slow, Damage",
                    "Range/Radius: 75/10, 15",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 15/14/13/12/11 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Consuming Bellow",
                "description": "Jormungandr draws power from toxic clouds nearby while channeling for 1.2s. At the end of the channel Jormungandr roars dealing damage to all Enemies, trembling and slowing Enemy gods by 30% for 1.5s.Each cloud increases the size of Consuming Bellow and Empowers him up to 3 times while also dealing extra damage to Enemies hit. Extra damage after the first instance is halved.While Empowered, Jormungandr's basic attack fires at its fastest rate.",
                "imageURL": require("../assets/images/Jormungandr_ability_2.png"),
                "notes": [
                    "Jormungandr draws power from toxic clouds nearby while channeling for 1.2s. At the end of the channel Jormungandr roars dealing damage to all Enemies, trembling and slowing Enemy gods by 30% for 1.5s.",
                    "Each cloud increases the size of Consuming Bellow and Empowers him up to 3 times while also dealing extra damage to Enemies hit. Extra damage after the first instance is halved.",
                    "While Empowered, Jormungandr's basic attack fires at its fastest rate.",
                    "Deals up to 160/230/300/370/440 (+62.5% of your Magical Power) damage and can maintain the empowered buff for up to 6s.",
                    "Interrupting the channel of this ability while active will not go on cooldown.",
                    "Damage: 120/180/240/300/360 (+45% of your Magical Power)",
                    "Bonus Damage: 20/25/30/35/40 (+10% of your Magical Power)",
                    "Empowered Buff: 2s",
                    "Ability Type: Circle, Tremble, Damage",
                    "Radius: 20-30",
                    "Cost: 70 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Submerge",
                "description": "Jormungandr submerges into the ground turning invisible as he searches for prey. During this time he moves faster and gains predatory vision, sensing all enemies in a large radius.Firing this ability while invisible reveals Jormungandr as he emerges out of the ground, knocking up Enemies around him.Emerging through a toxic cloud creates two new ones in the direction Jormungandr is facing, with a low duration. Taking damage from Enemy gods breaks Stealth.",
                "imageURL": require("../assets/images/Jormungandr_ability_3.png"),
                "notes": [
                    "Jormungandr submerges into the ground turning invisible as he searches for prey. During this time he moves faster and gains predatory vision, sensing all enemies in a large radius.",
                    "Firing this ability while invisible reveals Jormungandr as he emerges out of the ground, knocking up Enemies around him.",
                    "Emerging through a toxic cloud creates two new ones in the direction Jormungandr is facing, with a low duration. Taking damage from Enemy gods breaks Stealth.",
                    "Has and vision range of 110 and a knockup height of 375.",
                    "Damage: 70/125/180/235/290 (+50% of your Magical Power)",
                    "Movement Speed: 35%",
                    "Duration: 5s",
                    "Ability Type: Circle, Knockup, Damage",
                    "Radius: 20",
                    "Cost: 70/75/80/85/90 mana",
                    "Cooldown: 14/13.5/13/12.5/12 seconds"
                ]
            },
            {
                "name": "Ultimate  - The World Serpent",
                "description": "Jormungandr prepares to enter into the world, enlarging as he prepares a devastating attack.After selecting a target area, Jormungandr flies into the air, diving down and crashing into enemies as his body then slams into the ground. He must travel 2 more times.When Jormungandr Emerges and Submerges during this ability, he knocks up Enemies and with each Submerge he leaves behind a toxic cloud.",
                "imageURL": require("../assets/images/Jormungandr_ability_4.png"),
                "notes": [
                    "Jormungandr prepares to enter into the world, enlarging as he prepares a devastating attack.",
                    "After selecting a target area, Jormungandr flies into the air, diving down and crashing into enemies as his body then slams into the ground. He must travel 2 more times.",
                    "When Jormungandr Emerges and Submerges during this ability, he knocks up Enemies and with each Submerge he leaves behind a toxic cloud.",
                    "Jormungandr is both immune from crowd control effects and untargetable while using this ability.",
                    "Each attack has a minimum travel range of 40.",
                    "Jormungandr has up to 2s to choose a new landing spot with each attack.",
                    "If there is no valid landing location between each attack, Jormungandr will land at the last valid point of the targeter. If there was never a valid point, the ability ends and Jormungandr emerges where he currently is.",
                    "Submerge Damage: 150/200/250/300/350 (+35% of your Magical Power)",
                    "Emerge/Crash Damage: 75/100/125/150/175 (+20% of your Magical Power)",
                    "Ability Type: Area, Knockup, Damage",
                    "Range/Radius: 100/20",
                    "Cost: 100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Kali",
        "Attributes": {
            "Title:": "Goddess of Destruction",
            "Pantheon:": "Hindu",
            "Type:": "Melee,Physical",
            "Class:": "Assassin",
            "Pros:": "High Single Target Damage, High Sustain",
            "Difficulty:": "Average",
            "Release date:": "May 31, 2012",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Kali voicelines",
            "Voice actor:": "Anastasia Munoz",
            "Health:": "470 (+74)",
            "Mana:": "225 (+34)",
            "Speed:": "375 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+2.16%)",
            "Damage:": "37 (+ 2.32)+ 100% of Physical Power",
            "Progression:": "1/.5/.5x damage and swing time",
            "Physical:": "15 (+2.9)",
            "Magical:": "23 (+1.3)",
            "HP5:": "9 (+0.68)",
            "MP5:": "4.3 (+0.21)",
            "imageURL": require("../assets/images/Kali.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Marked for Death",
                "description": "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 40% of her Max Health for killing the god or 15% for assisting. Gold Bounty from that god is increased by 20% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target.",
                "imageURL": require("../assets/images/Kali_ability_0.png"),
                "notes": [
                    "Grants up to +15% Physical Penetration (5.5% at level 1) at level 20.",
                    "Physical Penetration: 5+0.5% per level",
                    "Heal on Kill: 40%",
                    "Heal on Assist: 15%",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Nimble Strike",
                "description": "Kali leaps forward, damaging enemies in the target area. If Kali damages an enemy god, she sets the lowest Current Health target as her Mark. Kali additionally heals herself for a percent of a single enemy's missing Health. Kali always heals from the target that would heal her the most.",
                "imageURL": require("../assets/images/Kali_ability_1.png"),
                "notes": [
                    "Damage: 85/135/185/235/285 (+80% of your Physical Power)",
                    "Heal: 20/40/60/80/100 +10% of target's missing Health",
                    "Ability Type: Circle, Leap, Damage",
                    "Range/Radius: 55/12",
                    "Cost: 60 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Lash",
                "description": "Kali throws several blades, that converge upon the target location. Each does damage and causes bleed. Kali gains Physical Lifesteal against targets affected by this Bleed.",
                "imageURL": require("../assets/images/Kali_ability_2.png"),
                "notes": [
                    "The bleed doesn't stack.",
                    "Can deal up to 141/207/273/349/405 (+90% of your Physical Power) damage with all three blades and the bleed.",
                    "Damage Per Blade: 37/49/61/73/85 (+20% of your Physical Power)",
                    "Bleed Damage: 5/10/15/20/25 (+5% of your Physical Power) every .5s",
                    "Bleed Duration: 3s",
                    "Physical Lifesteal: 12/16.5/21/25.5/30%",
                    "Ability Type: Area, Buff, Damage",
                    "Range: 70",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Incense",
                "description": "Kali hurls her incense at her feet, exploding it. Enemies hit are Stunned, while Kali gains a Physical Power bonus.",
                "imageURL": require("../assets/images/Kali_ability_3.png"),
                "notes": [
                    "Stun Duration: 1.2s",
                    "Physical Power Buff: 15/20/25/30/35",
                    "Buff Duration: 4/4.5/5/5.5/6s",
                    "Ability Type: Circle, Stun",
                    "Radius: 20",
                    "Cost: 60 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "Ultimate  - Destruction",
                "description": "Kali becomes an unstoppable force of destruction, creating a damage aura around her. During this time, she can be reduced to 1 Health, but cannot die. She is Immune to Knockup, Slow effects, and protected from Root, but still vulnerable to Stuns. If Kali is under 15% of her total Health at the end of the duration, she will heal to 15% Health.",
                "imageURL": require("../assets/images/Kali_ability_4.png"),
                "notes": [
                    "Will also protect from execute effects.",
                    "The health restore can be affected by healing buffs/debuffs.",
                    "Can deal up to 175/210/280/320/405 (+70/70/80/80/90% of your Physical Power) damage.",
                    "Damage: 25/30/35/40/45 (+10% of your Physical Power) every 0.5s",
                    "Duration: 3.5/3.75/4/4.25/4.5",
                    "Ability Type: Circle, Buff, Damage",
                    "Radius: 20",
                    "Cost: 60/70/80/90/100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Khepri",
        "Attributes": {
            "Title:": "The Dawn Bringer",
            "Pantheon:": "Egyptian",
            "Type:": "Melee,Magical",
            "Class:": "Guardian",
            "Pros:": "High Crowd Control, High Defense",
            "Difficulty:": "Average",
            "Release date:": "August 4, 2015",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Khepri voicelines",
            "Voice actor:": "Jeremy Schwartz",
            "Health:": "490 (+90)",
            "Mana:": "190 (+34)",
            "Speed:": "365 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+1.2%)",
            "Damage:": "38 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "1x/0.5x/1.5x damage and swing time",
            "Physical:": "19 (+3)",
            "Magical:": "27 (+1.3)",
            "HP5:": "8 (+0.8)",
            "MP5:": "4.6 (+0.4)",
            "imageURL": require("../assets/images/Khepri.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Fortitude",
                "description": "Every 5s, Khepri applies a shield to himself and nearby allied gods for 2% of the target's Maximum Health for 15s. The rate is slowed to every 10s if Khepri has taken or dealt damage in the last 5s. (Max 10%)",
                "imageURL": require("../assets/images/Khepri_ability_0.png"),
                "notes": [
                    "The shield persists for up to 15s to affected allies who move further than 40 units away from Khepri before losing the shield.",
                    "Only one aura stacks regardless of how many Khepris are present.",
                    "The shield doesn't protect from execute effects.",
                    "Shield: 2% of Maximum Health",
                    "Ability Type: Circle, Buff",
                    "Radius: 40"
                ]
            },
            {
                "name": "1st Ability  - Abduct",
                "description": "Khepri lunges forward, dealing damage to enemies he passes through. If he connects with an enemy god he stops, grabs them, and starts pulling them backwards while gaining increased Protections. Enemies are silenced for the duration of the pull.",
                "imageURL": require("../assets/images/Khepri_ability_1.png"),
                "notes": [
                    "Khepri can turn freely in all directions while grabbing an enemy god.",
                    "Can be cancelled early.",
                    "Damage: 80/130/180/230/280 (+40% of your Magical Power)",
                    "Pull Duration: 1.5/1.6/1.7/1.8/1.9s",
                    "Protections: 10/20/30/40/50",
                    "Ability Type: Dash, Crowd Control, Damage",
                    "Range: 40",
                    "Cost: 60 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Rising Dawn",
                "description": "Khepri rolls the sun forward, setting ablaze all enemies it touches, reducing physical protections, and dealing damage over time. Allies that are hit take reduced damage from enemies for the duration.",
                "imageURL": require("../assets/images/Khepri_ability_2.png"),
                "notes": [
                    "Deals a total of 104/156/208/260/312 (+65% of your Magical Power) damage.",
                    "This ability can only apply the DoT/buff to enemies/allies once.",
                    "Damage: 8/12/16/20/24 (+5% of your Magical Power) every 0.3s",
                    "Protection Debuff: 5/10/15/20/25%",
                    "Damage Mitigation: 10/15/20/25/30%",
                    "Duration: 4s",
                    "Ability Type: Line, Buff, Damage",
                    "Range: 70",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Solar Flare",
                "description": "Khepri calls down the sun's ire at the target location, dealing damage and rooting all targets in the area.",
                "imageURL": require("../assets/images/Khepri_ability_3.png"),
                "notes": [
                    "Damage: 60/115/170/225/280 (+30% of your Magical Power)",
                    "Root Duration: 1.5/1.6/1.7/1.8/1.9s",
                    "Ability Type: Circle, Root, Damage",
                    "Range/Radius: 55/15",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "Ultimate  - Scarab's Blessing",
                "description": "Khepri blesses an allied god, immediately cleansing them of all crowd control as well as granting them Movement Speed, and immunity to slow effects. If the marked ally would die while blessed, they are instead revived with a percentage of their maximum Health at Khepri's location. Executed allies do not revive.",
                "imageURL": require("../assets/images/Khepri_ability_4.png"),
                "notes": [
                    "If Khepri is in a state where he's either untargetable, banished or is near a wall, the revived ally that moves to Khepri will move to Khepri's last/nearest valid location and if Khepri dies, the affected ally that dies will be revived at its current location instead.",
                    "Revived Health: 20/25/30/35/40%",
                    "Movement Speed: 20/22.5/25/27.5/30%",
                    "Duration: 5s",
                    "Ability Type: Target, Buff",
                    "Range/Radius: 55/15",
                    "Cost: 80/90/100/110/120 mana",
                    "Cooldown: 110 seconds"
                ]
            }
        ]
    },
    {
        "Name": "King Arthur",
        "Attributes": {
            "Title:": "Wielder of Excalibur",
            "Pantheon:": "Arthurian",
            "Type:": "Melee,Physical",
            "Class:": "Warrior",
            "Pros:": "High Crowd Control, High Area Damage",
            "Difficulty:": "Average",
            "Release date:": "January 7, 2019",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "King Arthur voicelines",
            "Voice actor:": "Xander Mobus",
            "Health:": "485 (+83)",
            "Mana:": "230 (+40)",
            "Speed:": "370 (+0)",
            "Range:": "16 (+0)",
            "Attack/Sec:": "1 (+0%)",
            "Damage:": "39 (+ 2)+ 100% of Physical Power",
            "Progression:": "1x damage, .33x in AoE. Lunge when no target is in range.",
            "Physical:": "17 (+3)",
            "Magical:": "24 (+1.3)",
            "HP5:": "9 (+0.8)",
            "MP5:": "4.4 (+0.4)",
            "imageURL": require("../assets/images/King_Arthur.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Steadfast",
                "description": "Each ability that damages a god results in a stack of Steadfast, reducing damage taken and increasing energy gain. Each time King Arthur uses an ability he swaps between his Standard and Combo Abilities. All abilities are Instant Cast. Attack Speed does not benefit his Basic Attacks, and instead increases his energy gain.",
                "imageURL": require("../assets/images/King_Arthur_ability_0.png"),
                "notes": [
                    "King Arthur dashes 15 units forward (unless if crippled) before basic attacking.",
                    "King Arthur's basic attacks benefit from only 33% Lifesteal.",
                    "Abilities and basic attacks must deal at least 1 damage to gain energy but abilities only apply one stack of Steadfast regardless of how many gods were hit.",
                    "Grants up to 7.5% Damage Mitigation and 80% Energy Gain at max stacks.",
                    "King Arthur's energy meter resets upon respawning.",
                    "Damage Mitigation: 2.5% per Stack",
                    "Bonus Energy Gain: 20% per Stack",
                    "Duration: 10s",
                    "Max Stacks: 3",
                    "Attack Speed Conversion: 33%",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Overhead Slash (Hamstring)",
                "description": "Standard: King Arthur deals a devastating overhead blow in Melee range that creates a slashing attack that travels forwards. Enemies hit by the Melee strike take bonus damage from the Slicing attack. Combo: King Arthur swipes low, crippling and damaging enemies that are struck.",
                "imageURL": require("../assets/images/King_Arthur_ability_1.png"),
                "notes": [
                    "Overhead Slash deals 78/155/238/326/420 (+78/81/84/87/90% of your Physical Power) damage in the melee range (20 units) of the ability.",
                    "Hamstring's hitbox sweeps left to right in a cone infront of King Arthur.",
                    "Slash Damage: 60/110/160/210/260 (+60% of your Physical Power)",
                    "Melee Bonus Damage: 30/35/40/45/50%",
                    "Combo Damage: 70/125/180/235/290 (+60% of your Physical Power)",
                    "Cripple Duration: 1.25s",
                    "Energy Gain: 3",
                    "Ability Type: Line, Damage (Cone, Cripple, Damage)",
                    "Range: 70 (30)",
                    "Cost: 35/40/45/50/55 mana",
                    "Cooldown: 16/15.5/15/14.5/14 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Battle Stomp (Uppercut)",
                "description": "Standard: King Arthur stomps on the ground with heavy force, causing enemies around him to take damage and become slowed. Combo: King Arthur charges forward, stopping on first god hit. At the end of the charge King Arthur unleashes an uppercut, knocking up enemies into the air.",
                "imageURL": require("../assets/images/King_Arthur_ability_2.png"),
                "notes": [
                    "Stomp Damage: 55/80/105/130/155 (+40% of your Physical Power)",
                    "Slow: 30/32.5/35/37.5/40%",
                    "Slow Duration: 2.5s",
                    "Uppercut Damage: 50/95/140/185/230 (+40% of your Physical Power)",
                    "Energy Gain: 4",
                    "Ability Type: Circle, Slow, Damage (Dash, Knockup, Damage)",
                    "Radius/Range: 20 (35)",
                    "Cost: 40/45/50/55/60 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Twin Cleave (Bladestorm)",
                "description": "Standard: King Arthur unleashes two cleave attacks while charging forward. Enemies hit by a cleave take damage and have their protections reduced. Combo: King Arthur swings Excalibur around him, charging forward and damaging enemies 5 times before winding up a final strike that deals more damage. King Arthur is immune to Knockup for the duration.",
                "imageURL": require("../assets/images/King_Arthur_ability_3.png"),
                "notes": [
                    "Twin Cleave deals up to 70/120/170/220/270 (+60% of your Physical Power) damage, reduces up to 20% protections and gains up to 3 energy per target hit.",
                    "Bladestorm deals up to 110/265/420/575/730 (+125% of your Physical Power) damage, and gains up to 9 energy per target hit.",
                    "Bladestorm also grants immunity to pulls, roots and slows for the duration.",
                    "Cleave Damage: 35/60/85/110/135 (+30% of your Physical Power)",
                    "Protection Shred: 10%",
                    "Spin Damage: 15/35/55/75/95 (+15% of your Physical Power)",
                    "Final Damage: 35/90/145/200/255 (+50% of your Physical Power)",
                    "Energy Gain: 1.5",
                    "Ability Type: Dash, Debuff, Damage (Circle, Damage)",
                    "Range/Radius: 30/10 (20)",
                    "Cost: 40/45/50/55/60 mana",
                    "Cooldown: 16 seconds"
                ]
            },
            {
                "name": "Ultimate  - Sundering Strike (Excalibur's Wrath)",
                "description": "35 Energy: King Arthur winds up a massive jab, charging forwards slightly before striking. Enemies hit by this jab are stunned for 1s. 80 Energy: King Arthur charges forward with Excalibur drawn. If King Arthur hits an enemy god, he launches them into the air and unleashes a barrage of 6 attacks, after which he launches them back to the ground dealing damage to the target and any enemy below.",
                "imageURL": require("../assets/images/King_Arthur_ability_4.png"),
                "notes": [
                    "Excalibur glows a distinct color when at 35 and 80 energy.",
                    "Sundering Strike has a dash range of 12.",
                    "Excalibur's Wrath deals a total of 110/250/390/530/670 (+110% of your Physical Power) and 17/18/19/20/21% Max HP damage.",
                    "Excalibur's Wrath also makes King Arthur immune to crowd control and untargetable while grabbing a god.",
                    "Excalibur's Wrath will end early if the target either cleanses the knockup or dies (resulting in less than 6 hits depending on target's HP).",
                    "Jab Damage: 100/155/210/265/320 (+65% of your Physical Power)",
                    "Damage Per Hit: 10/25/40/55/70 (+10% of your Physical Power)",
                    "Max HP Damage: 2% Per Hit",
                    "Landing Damage: 50/100/150/200/250 (+50% of your Physical Power)",
                    "Max HP Damage: 5/6/7/8/9% Landing Hit",
                    "Ability Type: Line, Stun, Damage (Line, Banish, Damage)",
                    "Range: 45 (35)",
                    "Cost: 35 (80) Energy & 40 mana",
                    "Cooldown: 20 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Kukulkan",
        "Attributes": {
            "Title:": "Serpent of the Nine Winds",
            "Pantheon:": "Maya",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "Pusher, High Area Damage",
            "Difficulty:": "Easy",
            "Release date:": "May 31, 2012",
            "Favor:": "(Free) 0",
            "Gems:": "(Free) 0",
            "Voicelines:": "Kukulkan voicelines",
            "Voice actor:": "Clifford Chapin",
            "Health:": "380 (+75)",
            "Mana:": "265 (+45)",
            "Speed:": "360 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.87 (+0.91%)",
            "Damage:": "34 (+ 1.45)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "13 (+3)",
            "Magical:": "23 (+1.3)",
            "HP5:": "7 (+0.46)",
            "MP5:": "5 (+0.45)",
            "imageURL": require("../assets/images/Kukulkan.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Power Of The Wind Jewel",
                "description": "Increases Magical Power by 4% of maximum Mana.",
                "imageURL": require("../assets/images/Kukulkan_ability_0.png"),
                "notes": [
                    "Grants 12.4 Magical Power by default at level 1 and 46.6 Magical Power at level 20.",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Zephyr",
                "description": "Kukulkan fires a projectile breath attack that hits the first enemy in its path, doing damage and Slowing all enemies in the area around the impact.",
                "imageURL": require("../assets/images/Kukulkan_ability_1.png"),
                "notes": [
                    "Has a radius of 7.5.",
                    "Damage: 90/140/190/240/290 (+75% of your Magical Power)",
                    "Slow: 20/25/30/35/40%",
                    "Slow Duration: 3s",
                    "Ability Type: Line, Slow, Damage",
                    "Range: 70",
                    "Cost: 55/60/65/70/75 mana",
                    "Cooldown: 8 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Slipstream",
                "description": "Kukulkan channels the wind, allowing him to move faster and cleansing himself of slows and becomes immune to Slows. This speed boost is strong at first but scales down gradually over the 4s duration.",
                "imageURL": require("../assets/images/Kukulkan_ability_2.png"),
                "notes": [
                    "The movement speed decays 15/16.25/17.5/18.75/20% per second for the duration.",
                    "Speed: 50/55/60/65/70%",
                    "Duration: 4s",
                    "Ability Type: Buff",
                    "Cost: 65 mana",
                    "Cooldown: 15/14.5/14/13.5/13 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Whirlwind",
                "description": "Kukulkan summons a tornado at his ground target location. A smaller tornado branches off onto any enemies that come within the radius, doing damage every .5s for 2.5s and is refreshed if enemies stay within the radius, for a maximum of 12 ticks.",
                "imageURL": require("../assets/images/Kukulkan_ability_3.png"),
                "notes": [
                    "Deals one additional tick of damage on application.",
                    "The AoE reapplies the debuff every .35s.",
                    "Deals up to 48/102/156/210/264 (+90% of your Magical Power) damage without staying inside the AoE and 104/221/338/455/572 (+195% of your Magical Power) damage when staying inside the AoE.",
                    "Damage per Tick: 8/17/26/35/44 (+15% of your Magical Power)",
                    "Tornado Lifetime: 4s",
                    "Ability Type: Circle, Damage",
                    "Range/Radius: 55/20",
                    "Cost: 70/75/80/85/90 mana",
                    "Cooldown: 14/13.5/13/12.5/12 seconds"
                ]
            },
            {
                "name": "Ultimate  - Spirit Of The Nine Winds",
                "description": "Kukulkan summons the Spirit Of The Nine Winds to breathe down destruction onto his enemies in a path in front of him, doing damage and knocking all of the enemies to the side.",
                "imageURL": require("../assets/images/Kukulkan_ability_4.png"),
                "notes": [
                    "Enemies will be knocked to the closest side they're currently standing when hit by the ability.",
                    "Damage: 400/500/600/700/800 (+120% of your Magical Power)",
                    "Ability Type: Line, Knockup, Damage",
                    "Range: 130",
                    "Cost: 100/110/120/130/140 mana",
                    "Cooldown: 100 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Kumbhakarna",
        "Attributes": {
            "Title:": "The Sleeping Giant",
            "Pantheon:": "Hindu",
            "Type:": "Melee,Magical",
            "Class:": "Guardian",
            "Pros:": "High Crowd Control, High Defense",
            "Difficulty:": "Easy",
            "Release date:": "April 16, 2014",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Kumbhakarna voicelines",
            "Voice actor:": "Jeremy Inman",
            "Health:": "490 (+100)",
            "Mana:": "200 (+34)",
            "Speed:": "365 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+1.2%)",
            "Damage:": "38 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "1/0.75/1.25 damage",
            "Physical:": "20 (+3.2)",
            "Magical:": "27 (+1.3)",
            "HP5:": "8 (+0.75)",
            "MP5:": "4.6 (+0.42)",
            "imageURL": require("../assets/images/Kumbhakarna.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Sleepy",
                "description": "Kumbhakarna does not die when he reaches 0 Health, instead he falls asleep. He will awaken after 8s at 40% Health and Mana, unless hit with 6 Basic Attacks (+1 every 5 levels) while sleeping. This passive has a 120s Cooldown. While it is on cooldown, Kumbhakarna gains +20 HP5",
                "imageURL": require("../assets/images/Kumbhakarna_ability_0.png"),
                "notes": [
                    "Execute effects will bypass it, however it won't go into cooldown.",
                    "Kumbhakarna is immune to crowd control effects while asleep.",
                    "Requires 10 Basic Attacks to kill at level 20.",
                    "Kumbhakarna's first two basic attacks in his hit chain cleave.",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Throw Back",
                "description": "Kumbhakarna sleepily runs forward. If he hits an enemy he stops and deals damage. If the enemy is a minion, he throws them, dealing increased damage to each enemy they hit.",
                "imageURL": require("../assets/images/Kumbhakarna_ability_1.png"),
                "notes": [
                    "The dash and flying minion both have a width of around 6.",
                    "The flying minion travels in the direction Kumbhakarna's camera is facing upon contact.",
                    "Damage: 95/160/225/290/355 (+50% of your Magical Power)",
                    "Flying Minion Damage: 95/165/235/305/375 (+60% of your Magical Power)",
                    "Ability Type: Dash, Damage",
                    "Range: 45, 75",
                    "Cost: 55/60/65/70/75 mana",
                    "Cooldown: 10 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Groggy Strike",
                "description": "Kumbhakarna smashes down, damaging all enemies in front of him, Rooting and Crippling them. The Root duration is not affected by Diminishing Returns.",
                "imageURL": require("../assets/images/Kumbhakarna_ability_2.png"),
                "notes": [
                    "Has a width of around 8.",
                    "The damage/cc occurs 2s after using this ability.",
                    "Kumbhakarna is immune to knockbacks while channeling.",
                    "The Root duration also bypasses Tyr's passive.",
                    "Damage: 100/155/210/265/320 (+50% of your Magical Power)",
                    "Duration: 1.5s",
                    "Ability Type: Line, Crowd Control, Damage",
                    "Range: 40",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 10 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Mighty Yawn",
                "description": "Kumbhakarna lets out a mighty yawn that Mesmerizes all enemies in range. If awakened early, enemies are Damaged, have their Attack Speed and Movement Speed Slowed. Kumbhakarna may use this ability while asleep.",
                "imageURL": require("../assets/images/Kumbhakarna_ability_3.png"),
                "notes": [
                    "Mez Duration: 1.5/1.75/2/2.25/2.5s",
                    "Damage: 40/75/110/145/180 (+25% of your Magical Power)",
                    "Slow Duration: 2s",
                    "Slow: 20/22.5/25/27.5/30%",
                    "Attack Speed Debuff: 20/22.5/25/27.5/30%",
                    "Ability Type: Circle, Mesmerize",
                    "Radius: 40",
                    "Cost: 50 mana",
                    "Cooldown: 15 seconds"
                ]
            },
            {
                "name": "Ultimate  - Epic Uppercut",
                "description": "Kumbhakarna moves forward, stops at the first enemy god he encounters, and delivers a massive melee attack that uppercuts the enemy directly into the air. When the enemy lands, it deals area damage and causes Knockup to enemies nearby.",
                "imageURL": require("../assets/images/Kumbhakarna_ability_4.png"),
                "notes": [
                    "The dash lasts 0.4s and has a width of around 6.",
                    "Deals a total of 275/390/505/620/735 (+55% of your Magical Power) damage to a single target.",
                    "Kumbhakarna is immune to crowd control effects while using this ability.",
                    "Initial Damage: 75/100/125/150/175 (+15% of your Magical Power)",
                    "Landing Damage: 200/290/380/470/560 (+40% of your Magical Power)",
                    "Knockup Time: 2.2s",
                    "Ability Type: Dash, Crowd Control, Damage",
                    "Range/Radius: 30/20",
                    "Cost: 100 mana",
                    "Cooldown: 90/85/80/75/70 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Kuzenbo",
        "Attributes": {
            "Title:": "King Kappa",
            "Pantheon:": "Japanese",
            "Type:": "Melee,Magical",
            "Class:": "Guardian",
            "Pros:": "High Crowd Control, High Defense",
            "Difficulty:": "Easy",
            "Release date:": "February 14, 2017",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Kuzenbo voicelines",
            "Voice actor:": "Mike Pollock",
            "Health:": "500 (+100)",
            "Mana:": "200 (+34)",
            "Speed:": "365 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+1.2%)",
            "Damage:": "38 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "1/1/1 damage and swing time",
            "Physical:": "17 (+3.2)",
            "Magical:": "27 (+1.3)",
            "HP5:": "8 (+0.85)",
            "MP5:": "4.6 (+0.42)",
            "imageURL": require("../assets/images/Kuzenbo.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Water Bowl",
                "description": "Each time Kuzenbo takes over 2% of his maximum health worth of damage, pre-mitigation, he is granted stacks of Damage Mitigation as his head fills with water (Max 10 Stacks). Stacks last 30s and refresh when he gains another. If he is affected by True Hard CC, the bowl loses half of its stacks. Kuzenbo may only lose stacks in this way every 1.5s.",
                "imageURL": require("../assets/images/Kuzenbo_ability_0.png"),
                "notes": [
                    "Kuzenbo gains maximum stacks when taken at least 20% maximum health damage before mitigations.",
                    "Will not lose stacks if immune to true hard CC.",
                    "Damage Mitigation: 1.5% per 2% of Maximum Health taken",
                    "Maximum Mitigation: 15%",
                    "Mitigation Lost: 5 stacks",
                    "Duration: 30s",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - NeNe Kappa",
                "description": "Kuzenbo summons and throws the powerful NeNe Kappa, who can ricochet off of walls. After firing, if the NeNe Kappa bounces off of a wall it will travel 70 units from that point up to a maximum of 2 bounces. After reaching maximum range, or if an Enemy God is hit by the NeNe Kappa, it will burst forth from its shell, slowing and attacking them for 6s. Kuzenbo transfers 20% of his Health and Protections to the NeNe Kappa.",
                "imageURL": require("../assets/images/Kuzenbo_ability_1.png"),
                "notes": [
                    "Can deal up to 240/360/480/600/720 (+165% of your Magical Power) damage to minions and jungle monsters.",
                    "The NeNe Kappa can also bounce off player-made walls.",
                    "Kuzenbo can have multiple NeNe Kappas at once.",
                    "NeNe Kappas attacks once per second and don't remove backdoor protections from towers and phoenixes.",
                    "Damage: 80/120/106/200/240 (+55% of your Magical Power)",
                    "Kappa Damage per Hit: 35/45/55/65/75",
                    "Kappa Health: 25/30/35/40/45 (+20% of your Maximum Health)",
                    "Slow: 20/22.5/25/27.5/30%",
                    "Slow Duration: 3s",
                    "Ability Type: Line, Pet, Damage",
                    "Range: 70",
                    "Cost: 70/75/80/85/90 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Shell Spikes",
                "description": "The spikes on Kuzenbo’s back extend out, damaging enemies who attack Kuzenbo. While active, each time Kuzenbo takes damage, the cooldown on NeNe Kappa and Sumo Slam is reduced. Kuzenbo may activate this ability even while under the effects of Crowd Control.",
                "imageURL": require("../assets/images/Kuzenbo_ability_2.png"),
                "notes": [
                    "Damage reflected is calculated using the base damage of the incoming attack, before protections and mitigations.",
                    "This ability does not damage towers and phoenixes nor can proc item effects.",
                    "% of Damage Taken: 15/20/25/30/35%",
                    "Cooldown per Hit: .6/.7/.8/.9/1s",
                    "Duration: 3s",
                    "Ability Type: Buff, Damage",
                    "Cost: 50 mana",
                    "Cooldown: 14/13.5/13/12.5/12 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Sumo Slam",
                "description": "Kuzenbo charges forward, immune to slows, damaging Enemy minions and silencing using his immense strength to push the first Enemy God he hits along with him. Each subsequent Enemy he hits deals damage to both that Enemy and the god Kuzenbo is pushing. Colliding with a wall will also deal damage to the pushed god. Pushed targets can be hit a maximum of 3 times.",
                "imageURL": require("../assets/images/Kuzenbo_ability_3.png"),
                "notes": [
                    "Deals up to 180/285/390/495/600 (+105% of your Magical Power) damage and a maximum grab/silence duration for 1.5s to the pushed god.",
                    "Only the first wall collision will deal damage.",
                    "Kuzenbo can turn freely with an increased turn radius for the duration.",
                    "Damage per Hit: 60/95/130/165/200 (+35% of your Magical Power)",
                    "Ability Type: Dash, Crowd Control, Damage",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "Ultimate  - Watery Grave",
                "description": "Kuzenbo pulls himself inwards under his shell and spins, summoning fierce currents that knock enemies back, increase his Movement Speed, grant him 20% Damage Mitigation, render him immune to Crowd Control, and allow him to move freely in all directions for 2.1s. Each hit after the first on an enemy deals 40% reduced damage.",
                "imageURL": require("../assets/images/Kuzenbo_ability_4.png"),
                "notes": [
                    "Can deal up to 224/364/504/644/784 (+112% of your Magical Power) damage to enemies hit by all 4 hits.",
                    "The damage is dealt every 0.6s.",
                    "Damage first Hit: 80/130/180/230/280 (+40% of your Magical Power)",
                    "Damage per Hit: 40/65/90/115/140 (+20% of your Magical Power)",
                    "Movement Speed: 45%",
                    "Damage Mitigation: 20%",
                    "Ability Type: Circle, Knockup, Damage",
                    "Radius: 22.5",
                    "Cost: 100 mana",
                    "Cooldown: 75 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Lancelot",
        "Attributes": {
            "Title:": "First Knight of the Round Table",
            "Pantheon:": "Arthurian",
            "Type:": "Physical,Melee",
            "Class:": "Assassin",
            "Pros:": "High Mobility",
            "Difficulty:": "Hard",
            "Release date:": "June 14, 2022",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Lancelot voicelines",
            "Voice actor:": "Matt Curtis",
            "Health:": "460 (+77)",
            "Mana:": "230 (+40)",
            "Speed:": "370 (+0)",
            "Range:": "16 (+0)",
            "Attack/Sec:": "1 (+1.9%)",
            "Damage:": "38 (+ 2.3)+ 100% of Physical Power",
            "Progression:": "1/1/1x damage and swing time, hitting in an AoE on the final blow.",
            "Physical:": "14 (+2.9)",
            "Magical:": "23 (+1.3)",
            "HP5:": "9 (+0.7)",
            "MP5:": "4.6 (+0.46)",
            "imageURL": require("../assets/images/Lancelot.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Camelot's Quest",
                "description": "Lancelot receives 1 Stack for a god kill/assist and 1 Stack for every 5 minion kills (max. 40 Stacks).While Mounted, each stack provides increased Movement Speed.While Unmounted, each stack provides reduced basic attack damage received from directly in front.",
                "imageURL": require("../assets/images/Lancelot_ability_0.png"),
                "notes": [
                    "Lancelot receives 1 Stack for a god kill/assist and 1 Stack for every 5 minion kills (max. 40 Stacks).",
                    "While Mounted, each stack provides increased Movement Speed.",
                    "While Unmounted, each stack provides reduced basic attack damage received from directly in front.",
                    "Provides up to 18% movement speed while mounted and 18% reduced damage taken from basic attacks while facing in front while unmounted.",
                    "Movement Speed: 0.45% per stack",
                    "Basic Attack Damage Reduction: 0.45% per stack",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Piercing Thrust",
                "description": "Lancelot does a quick dash and thrust forwards with his lance. He deals damage to enemies in his path and those hit by the extending lance. If he hits an enemy he may dash again within 3s.",
                "imageURL": require("../assets/images/Lancelot_ability_1.png"),
                "notes": [
                    "Each attack is followed up with a 15 unit cone in front of Lancelot after dashing.",
                    "Can deal up to 80/160/240/320/400 (+130% of your Physical Power) damage.",
                    "Lancelot may use abilities and basic attacks between dashes.",
                    "Damage: 40/80/120/160/200 (+65% of your Physical Power)",
                    "Ability Type: Dash, Damage",
                    "Range: 20",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 10 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Skilled Strikes",
                "description": "Lancelot slams his shield into enemies in a small area in front of him, dealing damage and knocking them back. He follows up this attack with a sweep of his lance dealing damage again and bonus damage to enemies that are further away.",
                "imageURL": require("../assets/images/Lancelot_ability_2.png"),
                "notes": [
                    "Deals up to 105/180/255/330/405 (+120% of your Physical Power) damage to targets hit by both attacks and the lance deals 69/115/161/207/253 (+92% of your Physical Power) damage to targets not hit by the shield attack.",
                    "Shield Damage: 45/80/115/150/185 (+40% of your Physical Power)",
                    "Lance Damage: 60/100/140/180/220 (+80% of your Physical Power)",
                    "Bonus Damage: 15%",
                    "Ability Type: Cone, Knockback, Damage",
                    "Range: 15/25",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Mount Up",
                "description": "Lancelot mounts onto his trusty steed charging forwards with increased movement speed. While on his horse Lancelot gains a Health Shield that builds over time and his abilities change.Lancelot can cancel this ability to dismount normally which will not trigger a Cooldown. If Lancelot's Health Shield is depleted, he is forced off his horse.While Mounted, Lancelot is immune to CC effects except Stuns and Time Dilation.",
                "imageURL": require("../assets/images/Lancelot_ability_3.png"),
                "notes": [
                    "Lancelot mounts onto his trusty steed charging forwards with increased movement speed. While on his horse Lancelot gains a Health Shield that builds over time and his abilities change.",
                    "Lancelot can cancel this ability to dismount normally which will not trigger a Cooldown. If Lancelot's Health Shield is depleted, he is forced off his horse.",
                    "While Mounted, Lancelot is immune to CC effects except Stuns and Time Dilation.",
                    "The shield generates every .33s, stacks with other shields before mounting, not after and doesn't protect from execute effects.",
                    "Provides a total of 38% movement speed with full passive stacks and up to 240/385/530/675/820 shield health.",
                    "Moving backwards slows down the charge.",
                    "Cannot use relics, shard relics nor place wards but can use potions while mounted.",
                    "Lancelot cannot go through Janus' portals while mounted.",
                    "Movement Speed: 20%",
                    "Initial Health Shield: 60/80/100/120/140",
                    "Max. Health Shield: 180/305/430/555/680 gained over 3s.",
                    "Ability Type: Buff",
                    "Cost: 50 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "1st Ability (Mounted)  - Shining Gallop",
                "description": "Lancelot sends off his horse to gallop ahead in a line as he dismounts. The horse fades away allowing it to pass through walls, dealing damage and slowing enemies hit along the way.",
                "imageURL": require("../assets/images/Lancelot_ability_4.png"),
                "notes": [
                    "Damage: 80/130/180/230/280 (+70% of your Physical Power)",
                    "Slow: 30% for 2s",
                    "Ability Type: Line, Slow, Damage",
                    "Range: 60",
                    "Cost: 60 mana",
                    "Cooldown: 0 seconds"
                ]
            },
            {
                "name": "2nd Ability (Mounted)  - Crashing Dive",
                "description": "Lancelot surges upwards off his horse, rooting all enemies nearby, before diving back down to deal damage to enemies in a larger area.",
                "imageURL": require("../assets/images/Lancelot_ability_5.png"),
                "notes": [
                    "Lancelot cannot leap through map walls, but he can leap through player-made walls.",
                    "Root Duration: 0.5s",
                    "Damage: 90/145/200/255/310 (+100% of your Physical Power)",
                    "Ability Type: Circle, Root, Damage",
                    "Radius: 15/20",
                    "Cost: 60 mana",
                    "Cooldown: 0 seconds"
                ]
            },
            {
                "name": "3rd Ability (Mounted)  - Quick Turn",
                "description": "Lancelot turns quickly while mounted to face the opposite direction.",
                "imageURL": require("../assets/images/Lancelot_ability_6.png"),
                "notes": [
                    "Ability Type: Buff",
                    "Cost: 30 mana",
                    "Cooldown: 2 seconds"
                ]
            },
            {
                "name": "Ultimate  - The Grand Joust",
                "description": "Lancelot mounts and rears up his horse as a large jousting list is created, crippling enemies in the area. Lancelot charges ahead, dealing damage to all enemies hit and refreshing his mounted Health Shield.",
                "imageURL": require("../assets/images/Lancelot_ability_7.png"),
                "notes": [
                    "Lancelot is immune to Crowd Control and has an increased turn radius during the ability.",
                    "The dash lasts 1.25s and the jousting field lasts 3s.",
                    "Damage: 230/290/350/410/470 (+120% of your Physical Power)",
                    "Ability Type: Line, Cripple, Damage",
                    "Range: 80",
                    "Cost: 80/85/90/95/100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Loki",
        "Attributes": {
            "Title:": "The Trickster God",
            "Pantheon:": "Norse",
            "Type:": "Melee,Physical",
            "Class:": "Assassin",
            "Pros:": "High Single Target Damage",
            "Difficulty:": "Easy",
            "Release date:": "November 2, 2012",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Loki voicelines",
            "Voice actor:": "Alex Ross",
            "Health:": "395 (+75)",
            "Mana:": "210 (+35)",
            "Speed:": "375 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+1.9%)",
            "Damage:": "38 (+ 2.4)+ 100% of Physical Power",
            "Progression:": "1/.5/.5/.5/1.5x damage and 1/.5/.5/.5/1.5x swing time",
            "Physical:": "11 (+2.9)",
            "Magical:": "23 (+1.3)",
            "HP5:": "8 (+0.7)",
            "MP5:": "4.2 (+0.35)",
            "imageURL": require("../assets/images/Loki.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Behind You!",
                "description": "Loki deals more damage from his Basic Attacks when hitting enemies from behind. His Basic Attacks also utilize a 5 swing progressive chain.",
                "imageURL": require("../assets/images/Loki_ability_0.png"),
                "notes": [
                    "Ability Type: Buff",
                    "Bonus Damage: 15%"
                ]
            },
            {
                "name": "1st Ability  - Vanish",
                "description": "Loki disappears in a puff of smoke. While invisible, he moves faster, removes Slow effects, and gains immunity to Slow effects. His next Basic Attack from Stealth (or for 2s after) applies a Bleed to his target, dealing damage every .5s and reveals Loki. If Loki takes damage while in stealth he will be revealed for .33s.",
                "imageURL": require("../assets/images/Loki_ability_1.png"),
                "notes": [
                    "Entering an enemy structures's attack range while stealthed will temporarily reveal him.",
                    "Deals a total of 140/200/260/320/380 (+80% of your Physical Power) damage.",
                    "Damage per Tick: 35/50/65/80/95 (+20% of your Physical Power)",
                    "Damage Duration: 2s",
                    "Stealth Duration: 4s",
                    "Stealth Movement Speed: 35%",
                    "Ability Type: Buff",
                    "Cost: 70/75/80/85/90 mana",
                    "Cooldown: 15 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Agonizing Visions",
                "description": "Loki summons a vision of his tortured past at a target location for 4s. Enemies in range of the vision feel the poison themselves, taking damage and having their Damage Dealt reduced. This effect stacks up to 4 times. If an enemy gets 4 stacks they become Blinded, allowing Loki to benefit from Behind You! from any direction for 3s.",
                "imageURL": require("../assets/images/Loki_ability_2.png"),
                "notes": [
                    "Can be used during Vanish's stealth without dispelling it.",
                    "The decoy has unit collision.",
                    "The damage/debuff is dealt/applied every 0.5 seconds.",
                    "Deals up to 104/144/184/224/264 (+120% of your Physical Power) damage and reduces enemy damage up to 20%.",
                    "Damage: 13/18/23/28/33 (+15% of your Physical Power)",
                    "Damage Dealt: 5% for 3s",
                    "Ability Type: Circle, Blind, Damage",
                    "Range/Radius: 55/25",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Flurry Strike",
                "description": "Loki unleashes a flurry of 5 dagger strikes quickly in front of him, damaging and slowing enemies by 15% for 3s. After this flurry he winds up for a final heavy strike that deals higher damage and slows enemies by 30% for 3s. Loki cannot be knocked up while firing this ability. This ability can benefit from Behind You!",
                "imageURL": require("../assets/images/Loki_ability_3.png"),
                "notes": [
                    "Can deal up to 155/225/295/365/435 (195% of your Physical Power) damage (172.5/247/322/397/471.5 (+224% of your Physical Power) damage if all hits benefit from Behind You!).",
                    "Each strike refreshes the slow's duration.",
                    "Flurry Damage: 20/30/40/50/60 (+25% of your Physical Power)",
                    "Final Damage: 55/75/95/115/135 (+70% of your Physical Power)",
                    "Ability Type: Cone, Slow, Damage",
                    "Range: 20",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "Ultimate  - Assassinate",
                "description": "Upon activation, Loki teleports to his ground target location. If an enemy god is within the radius, Loki will slice that target doing damage and crippling them for 1s. After he teleports he will wind up a heavier strike, damaging all enemies in front of him and stunning them.",
                "imageURL": require("../assets/images/Loki_ability_4.png"),
                "notes": [
                    "Can deal up to 170/250/330/410/490 (+125% of your Physical Power) damage to a single target.",
                    "Cripple Damage: 70/105/140/175/210 (+35% of your Physical Power)",
                    "Heavy Damage: 100/145/190/235/280 (+90% of your Physical Power)",
                    "Stun: 1s",
                    "Ability Type: Target, Crowd Control, Damage",
                    "Range/Radius: 55, 30/10",
                    "Cost: 100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Maman Brigitte",
        "Attributes": {
            "Title:": "Protector of the Dead",
            "Pantheon:": "Voodoo",
            "Type:": "Melee,Magical",
            "Class:": "Mage",
            "Pros:": "High Single Target Damage",
            "Difficulty:": "Average",
            "Release date:": "September 26, 2023",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Maman Brigitte voicelines",
            "Voice actor:": "Zuri Washington",
            "Health:": "407 (+77)",
            "Mana:": "240 (+36)",
            "Speed:": "375 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+1.8%)",
            "Damage:": "35 (+ 2.4)+ 20% of Magical Power",
            "Progression:": "0.5/0.5/1x damage and swing time",
            "Physical:": "12 (+3)",
            "Magical:": "23 (+1.3)",
            "HP5:": "10 (+0.46)",
            "MP5:": "4.8 (+0.4)",
            "imageURL": require("../assets/images/Maman_Brigitte.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Soul Spikes",
                "description": "Damaging an enemy with a basic attack or ability afflicts enemies with Soul Spikes. Upon reaching 5 stacks, Maman Brigitte absorbs a piece of their soul, dealing damage based on their missing Health and gaining a Soul Orb from enemy gods. Soul Orbs last 30s.",
                "imageURL": require("../assets/images/Maman_Brigitte_ability_0.png"),
                "notes": [
                    "The bonus damage does not trigger item effects.",
                    "Damage: (+1% of your Magical Power) per 1% of target's missing Health, up to a max of 60% Magical Power Scaling",
                    "Soul Spikes Duration: 10s",
                    "Ability Type: Damage, Buff"
                ]
            },
            {
                "name": "1st Ability  - Party Trick",
                "description": "Maman Brigitte drinks from her bottle and breathes out fire. Enemies are set aflame, damaged every 0.5s for 1.5s, refreshing if they stay in the area. Maman Brigitte channels the fire for as long as she has Rum and can cancel at any time. When out of Rum or upon reactivation, she slams her bottle on the ground, damaging and stunning enemies. This ability's cooldown is reduced based on Rum remaining when the slam occurs.",
                "imageURL": require("../assets/images/Maman_Brigitte_ability_1.png"),
                "notes": [
                    "This ability can be cast for a total of 2s before depleting all the rum.",
                    "Rum is consumed in units of 5.",
                    "This ability also deals an initial hit separate from the tick damage. Meaning consuming 5 rum will deal 24/56/88/120/152 (+40% of your Magical Power) damage and casting this ability 20 times every 1.5s will deal a total of 520/1200/1880/2560/3240 (+835% of your Magical Power) damage.",
                    "This damage triggers item effects but will only deal 25% of the damage and 100% healing from them.",
                    "Fire Damage Per Tick: 6/14/22/30/38 (+10% of your Magical Power)",
                    "Slam Damage: 40/80/120/160/200 (+35% of your Magical Power)",
                    "Stun Duration: 1.2s",
                    "Maximum Cooldown: 14s (Further reduced by CDR)",
                    "Ability Type: Cone, Damage, Stun",
                    "Range: 30/15",
                    "Cost: 20/30/40/50/60 mana",
                    "Cooldown: 8s"
                ]
            },
            {
                "name": "2nd Ability  - Madame Fangs",
                "description": "Maman Brigitte's tattoo snake, Madame Fangs, slithers off of her arm and becomes a spectral snake that passes through enemies, damaging and applying Madame's Mark to all enemies hit. Subsequent hits from Madame Fangs deal 15% of the initial damage. Enemies with Madame's Mark take additional damage anytime Maman Brigitte damages them. This bonus damage does not trigger Item effects. Soul Spikes and Item effects do not trigger Madame's Mark.",
                "imageURL": require("../assets/images/Maman_Brigitte_ability_2.png"),
                "notes": [
                    "Subsequent hits deal 7.5/11/15/19/22.5 (+6% of your Magical Power) damage.",
                    "Has a minimum range of 27.5.",
                    "After casting this ability, Maman Brigitte's tattoo is removed from her arm and slowly reappears.",
                    "If the player doesn't already have Madame's Mark when this ability applies the mark, then the effect of Madame's Mark will not apply for this ability.",
                    "Madame Fangs Initial Damage: 50/75/100/125/150 (+40% of your Magical Power)",
                    "Madame's Mark Damage: (+2.5% of your Magical Power)",
                    "Madame's Mark Duration: 5s",
                    "Ability Type: Projectile, Damage, Debuff",
                    "Range: 60",
                    "Cost: 55 mana",
                    "Cooldown: 11s"
                ]
            },
            {
                "name": "3rd Ability  - Spirit Seize",
                "description": "Maman Brigitte shrouds herself in ghostly energy as she dashes forward, passing through player made walls and damaging enemies. If she hits an enemy god she possesses them, traveling with them and dealing damage every 0.5s for up to 2s. Maman Brigitte can leave her target early by dashing or canceling to step out. If she remains for the full duration, she will dash out as time expires.",
                "imageURL": require("../assets/images/Maman_Brigitte_ability_3.png"),
                "notes": [
                    "Can deal up to 140/190/240/290/340 (+50% of your Magical Power) damage to a single target.",
                    "Maman Brigitte is untargetable while possessing an enemy.",
                    "If the possessed enemy dies, Maman Brigitte will be forced to step out.",
                    "Maman Brigitte can only possess one enemy god per ability cast.",
                    "If the possessed god is in the air Maman Brigitte will be unable to exit, and if the time expires whilst they are in the air she will be forced to dash out upon landing.",
                    "Initial Hit Damage: 60/90/120/150/180 (+10% of your Magical Power)",
                    "Possession Tick Damage: 20/25/30/35/40 (+10% of your Magical Power)",
                    "Ability Type: Dash, Damage, Banish",
                    "Range: 40",
                    "Cost: 50/60/70/80/90 mana",
                    "Cooldown: 16s"
                ]
            },
            {
                "name": "Ultimate  - Explosion Of Souls",
                "description": "Maman Brigitte gains Crows Control immunity and gathers a large orb of spiritual energy that she throws at the target location. The orb's size is determined by the amount of Soul Orbs that Maman Brigitte has collected through Soul Spikes. Enemies hit are damaged, knocked up, and receive Madame's Mark for 5s. Maman Brigitte loses all Soul Orbs after using Explosion of Souls.",
                "imageURL": require("../assets/images/Maman_Brigitte_ability_4.png"),
                "notes": [
                    "Increases the radius by 1.5 units per Soul Orb.",
                    "Madame's Mark from this ability doesn't stack in duration from Madame's Fangs.",
                    "Maman Brigitte can move freely whilst channeling this ability.",
                    "Damage: 190/235/280/325/370 (+85% of your Magical Power)",
                    "Ability Type: Circle, Damage, Knockup",
                    "Radius: 16.5, 18, 19.5, 21, 22.5, 24",
                    "Range: 45",
                    "Cost: 100 mana",
                    "Cooldown: 90s"
                ]
            }
        ]
    },
    {
        "Name": "Martichoras",
        "Attributes": {
            "Title:": "The Manticore King",
            "Pantheon:": "Greek",
            "Type:": "Ranged,Physical",
            "Class:": "Hunter",
            "Pros:": "Medium Single Target Damage, Medium Area Damage",
            "Difficulty:": "Average",
            "Release date:": "February 21, 2023",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Martichoras voicelines",
            "Voice actor:": "Tim Bick",
            "Health:": "486 (+82)",
            "Mana:": "240 (+38)",
            "Speed:": "365 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.91 (+1.4%)",
            "Damage:": "34 (+ 2.6)+ 90% of physical Power",
            "Progression:": "Basics apply Venom, dealing 5% Basic Attack Power over 2s. Initial hit applies 4 stacks, hits refresh and increase damage by 1 stack, max 8 stacks.",
            "Physical:": "15 (+3.1)",
            "Magical:": "23 (+1.3)",
            "HP5:": "7 (+0.7)",
            "MP5:": "4.5 (+0.4)",
            "imageURL": require("../assets/images/Martichoras.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Monstrosity",
                "description": "Martichoras gains up to 100 stacks of Ferocity for hitting Basics, Abilities, and earning kills or assists. Once maxed, he loses all Ferocity and gains an Attack Speed buff that increases in duration by Basic Attacking gods. He also gains a permanent Monstrosity stack of 0.75% Physical Lifesteal and 0.75% Physical Ability Lifesteal.",
                "imageURL": require("../assets/images/Martichoras_ability_0.png"),
                "notes": [
                    "Martichoras' Basic Attacks deal 1.25% basic attack damage per tick (every 0.5s), stacking for a total of 40% basic attack damage with 8 stacks.",
                    "The DoT doesn't affect towers, phoenixes, player-made deployables nor wards.",
                    "The Attack Speed buff provides 35% Attack Speed (16% at level 1) at level 20 while Monstrosity buff stacks up to 22.5% Physical/Ability Lifesteal.",
                    "Attack Speed: 15% + 1% per level for 6s, up to 12s",
                    "Max Monstrosity Stacks: 30",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Acid Rain",
                "description": "Martichoras fires hundreds of venomous spikes from his wings, creating a circular rain of spikes that deals damage as it rolls forward. As the rain moves, it leaves behind a toxic trail that slows and damages all enemies within the trail.",
                "imageURL": require("../assets/images/Martichoras_ability_1.png"),
                "notes": [
                    "Can deal up to 116/180/244/308/372 (+130% of your Physical Power) damage.",
                    "Initial Damage: 80/120/160/200/240 (+70% of your Physical Power)",
                    "Trail Damage: 6/10/14/18/22 (+10% of your Physical Power every 0.5s)",
                    "Slow: 25/27.5/30/32.5/35%",
                    "Trail Duration: 3s",
                    "Ability Type: Area, Slow, Damage",
                    "Range/Radius: 40,60/11",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Poisoned Barb",
                "description": "Martichoras shoots a stinger, dealing damage, piercing minions, and stopping on the first enemy god hit. The stinger then persists for 3s attached to the enemy god, reducing their healing, or at a point on the ground. Martichoras can explode it by hitting it with a basic attack or ability. The explosion deals damage, reduces healing, and Roots the god who held the stinger.",
                "imageURL": require("../assets/images/Martichoras_ability_2.png"),
                "notes": [
                    "Can deal up to 75/145/215/285/355 (+105% of your Physical Power) damage.",
                    "Also stops upon contact with a wall/player-made wall.",
                    "Projectile Damage: 45/80/115/150/185 (+55% of your Physical Power)",
                    "Explosion Damage: 30/65/100/135/170 (+50% of your Physical Power)",
                    "Root Duration: 1/1.2/1.4/1.6/1.8s",
                    "Healing Reduction: 40% for 5s",
                    "Ability Type: Line, Root, Damage",
                    "Range/Radius: 55/20",
                    "Cost: 40/45/50/55/60 mana",
                    "Cooldown: 13 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Stalk Prey",
                "description": "Martichoras creates a patch of stealth grass in which he and all allied gods may hide. While inside and on exiting the patch, Martichoras gains Movement Speed. Martichoras’ Basic Attacks from stealth apply 8 stacks of Venom. Enemies may reveal anyone hidden in the patch by entering it or by placing a ward inside its range.",
                "imageURL": require("../assets/images/Martichoras_ability_3.png"),
                "notes": [
                    "Buffs from multiple patches do not stack and re-entering a stealth patch refreshes the buff duration.",
                    "If a stealthed unit either enters a structure's attack range or uses abilities/basic attacks while invisible, they'll be revealed.",
                    "Attacking also breaks the stealth effect for 1s.",
                    "Patch Duration: 120s",
                    "Max Patches: 3",
                    "Movement Speed: 10/15/20/25/30% for 3s",
                    "Ability Type: Area, Buff",
                    "Range/Radius: 55/27",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 25/24/23/22//21 seconds"
                ]
            },
            {
                "name": "Ultimate  - Death from Above",
                "description": "Martichoras becomes Crowd Control immune and untargetable as he soars into the air, raining down 12 bursts of damaging toxins over 3s. Each time an enemy is hit with a burst, their Physical Protections are reduced.",
                "imageURL": require("../assets/images/Martichoras_ability_4.png"),
                "notes": [
                    "Deals up to 360/540/720/900/1080 (+144% of your Physical Power) damage and reduces up to 24% Physical Protections.",
                    "Martichoras fires projectiles every 0.25s and can fire through walls during the ability.",
                    "Martichoras can only move through player-made walls, not map walls during the ability.",
                    "Can be cancelled early.",
                    "Damage per Burst: 30/45/60/75/90 (+12% of your Physical Power)",
                    "Protection Reduction: 3% per stack, max 8 stacks",
                    "Debuff Duration: 4s",
                    "Ability Type: Circle, Debuff, Damage",
                    "Range/Radius: 55/10",
                    "Cost: 90 mana",
                    "Cooldown: 110 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Maui",
        "Attributes": {
            "Title:": "Hero of Hawai‘i",
            "Pantheon:": "Polynesian",
            "Type:": "Melee,Magical",
            "Class:": "Guardian",
            "Pros:": "High Crowd Control, High Mobility",
            "Difficulty:": "Average",
            "Release date:": "October 18, 2022",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Maui voicelines",
            "Voice actor:": "Brent Mukai",
            "Health:": "500 (+100)",
            "Mana:": "200 (+36)",
            "Speed:": "370 (+0)",
            "Range:": "25 (+0)",
            "Attack/Sec:": "0.9 (+1.4%)",
            "Damage:": "40 (+ 1.8)+ 20% of magical Power",
            "Progression:": "Maui's basic attacks have 25 range and hit all enemies.",
            "Physical:": "20 (+3.4)",
            "Magical:": "27 (+1.3)",
            "HP5:": "8 (+0.8)",
            "MP5:": "4.5 (+0.42)",
            "imageURL": require("../assets/images/Maui.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Manaiakalani",
                "description": "When an enemy god is Hard Crowd Controlled near Maui, they are marked for the duration of the CC and for an additional 2s. If Maui Basic Attacks a marked enemy, his next Basic Attack becomes enhanced. Maui's enhanced Basic Attack pulls any enemy gods hit to him. This passive has a 10s Cooldown.",
                "imageURL": require("../assets/images/Maui_ability_0.png"),
                "notes": [
                    "The enhanced basic attack is spent even if no gods are hit/pulled by it.",
                    "Has a mark range of 70.",
                    "Marked gods hit by hard CC during the mark's duration refreshes it.",
                    "Maui's basic attacks have a radius of 8, benefit from only 33% Lifesteal and cannot go through walls.",
                    "Ability Type: Area Basic, Knockback",
                    "Range: 25"
                ]
            },
            {
                "name": "1st Ability  - Master Fisherman",
                "description": "Maui charges up, spinning his hook and preparing it to go farther the longer he charges. When he refires, the projectile damages enemies and stops on first god hit. If Maui hits an enemy god he reels them in, crippling and vortexing them towards himself for 1.5s. Maui can cancel this ability at any time.",
                "imageURL": require("../assets/images/Maui_ability_1.png"),
                "notes": [
                    "Maui can move freely in all directions while reeling a god.",
                    "Has a charge time of 1s to reach maximum range.",
                    "This ability cannot go through walls.",
                    "Damage: 100/165/230/285/360 (+50% of your Magical Power)",
                    "Minimum Range: 10",
                    "Maximum Range: 55",
                    "Range: 55",
                    "Ability Type: Line, Vortex, Damage",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 14/13.5/13/12.5/12 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Mystical Ulua",
                "description": "Maui throws an Ulua made of magical water that explodes on landing, giving all allied gods within 35 units Protections and Movement Speed for 5s. The Ulua creates a pillar of water that lasts for 10s. If an allied god stands on the water for 1s, a bubble forms and carries them to Maui's location, where they receive Protections and Movement Speed for 5s. If Maui leaves the aura radius and no ally is on the water, it is destroyed.",
                "imageURL": require("../assets/images/Maui_ability_2.png"),
                "notes": [
                    "If Maui is in a state where he's either untargetable, banished, is near a wall or dead, the affected ally (one ally per Ulua) that teleports to Maui will move to his last/nearest valid location.",
                    "The buff persists if Maui leaves the area.",
                    "Allies cannot move to Maui's location if they're either crippled or affected by hard crowd control.",
                    "Placing another Ulua will despawn the oldest one.",
                    "Protections: 20/25/30/35/40",
                    "Movement Speed: 8/10/12/14/16%",
                    "Aura Radius: 110",
                    "Range/Radius: 55/35",
                    "Ability Type: Circle, Buff",
                    "Cost: 55 mana",
                    "Cooldown: 12/11.5/11/10.5/10 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Solar Swing",
                "description": "Maui leaps, latches his hook onto a ray of sunlight, and swings from it. He swings back and forth before he leaps from the rope and slams his hook into the ground, damaging and stunning all enemies in the area. While he swings, Maui can reactivate this ability at any time to leap early.",
                "imageURL": require("../assets/images/Maui_ability_3.png"),
                "notes": [
                    "Maui leaps 5 units forward from his current location while using this ability.",
                    "This ability can be channeled for a maximum time of 3s.",
                    "If there is no valid landing location, Maui will land at the closest valid point near the targeter.",
                    "Landing damage: 90/145/200/255/315 (+60% of your Magical Power)",
                    "Stun Duration: 1.5s",
                    "Range/Radius: 55/17.5",
                    "Ability Type: Circle, Leap, Damage",
                    "Cost: 60 mana",
                    "Cooldown: 15 seconds"
                ]
            },
            {
                "name": "Ultimate  - Landfall",
                "description": "Maui selects an area, becomes CC immune and leaps into the air. He throws his hook at the target area and pulls up an island, knocking all enemies in the area up into the air and pulls them in front of himself. The island remains on the battleground, blocking player movement for 4s. Maui can reactivate this ability to destroy the island early.",
                "imageURL": require("../assets/images/Maui_ability_4.png"),
                "notes": [
                    "Maui is also untargetable while channeling this ability.",
                    "This ability can be fired through walls but will not pull players through them.",
                    "The island has a radius of 18.",
                    "Can be refired at any time even while under crowd control or dead.",
                    "Damage: 275/375/475/575/675 (+80% of your Magical Power)",
                    "Minimum Range: 20",
                    "Maximum Range: 60",
                    "Range/Radius: 60/22.5",
                    "Ability Type: Circle, Knockup, Damage",
                    "Cost: 100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Medusa",
        "Attributes": {
            "Title:": "The Gorgon",
            "Pantheon:": "Greek",
            "Type:": "Ranged,Physical",
            "Class:": "Hunter",
            "Pros:": "High Single Target Damage",
            "Difficulty:": "Easy",
            "Release date:": "April 1, 2015",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Medusa voicelines",
            "Voice actor:": "Rachel Robinson",
            "Health:": "470 (+77)",
            "Mana:": "220 (+34)",
            "Speed:": "375 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.95 (+1.4%)",
            "Damage:": "35 (+ 2.6)+ 100% of Physical Power",
            "Progression:": "None",
            "Physical:": "12 (+3)",
            "Magical:": "23 (+1.3)",
            "HP5:": "8 (+0.68)",
            "MP5:": "4.4 (+0.25)",
            "imageURL": require("../assets/images/Medusa.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Sidewinder",
                "description": "Medusa suffers no movement penalty when side strafing and half of the movement penalty when moving backward.",
                "imageURL": require("../assets/images/Medusa_ability_0.png"),
                "notes": [
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Viper Shot",
                "description": "Medusa gains increased attack speed and her basic attacks become augmented, shooting Vipers that poison the targets hit dealing damage over time.",
                "imageURL": require("../assets/images/Medusa_ability_1.png"),
                "notes": [
                    "Each viper deals a total of 54/69/84/99/114 (+24% of your Physical Power) damage, with all 4 dealing a total of 216/276/336/396/456 (+96% of your Physical Power) damage.",
                    "Damage: 18/23/28/33/38 (+8% of your Physical Power) every 0.5s for 1.5s per charge",
                    "Attack Speed Increase: 40/50/60/70/80%",
                    "Viper Shots: 4",
                    "Ability Type: Ranged Basic, Buff, Damage",
                    "Range: 55",
                    "Cost: 50 mana",
                    "Cooldown: 12/11.5/11/10.5/10 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Acid Spray",
                "description": "Medusa hurls back and spits out acid that damages the first enemy hit and sprays out acid in a cone behind them. Enemies hit by Acid Spray will have their healing taken reduced. Acid Spray will explode on statues Medusa has created.",
                "imageURL": require("../assets/images/Medusa_ability_2.png"),
                "notes": [
                    "The cone AoE has an angle of 70.",
                    "Damage: 90/145/200/255/310 (+75% of your Physical Power)",
                    "Healing Reduction: 40%",
                    "Healing Reduction Lifetime: 5s",
                    "Ability Type: Line, Debuff, Damage",
                    "Range: 45/35",
                    "Cost: 40/45/50/55/60 mana",
                    "Cooldown: 15/14.5/14/13.5/13 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Lacerate",
                "description": "Medusa quickly slithers forward damaging enemies she passes through. The first enemy god she encounters causes her to stop before she damages and roots the god hit.",
                "imageURL": require("../assets/images/Medusa_ability_3.png"),
                "notes": [
                    "Medusa is knockback immune while dashing.",
                    "Damage: 80/130/180/230/280 (+70% of your Physical Power)",
                    "Root Duration: 1s",
                    "Ability Type: Dash, Root, Damage",
                    "Range: 55",
                    "Cost: 70 mana",
                    "Cooldown: 16/15.5/15/14.5/14 seconds"
                ]
            },
            {
                "name": "Ultimate  - Petrify",
                "description": "Medusa removes her mask revealing her true face, delivering a powerful blast from her horrifying Gorgon gaze. Enemies take damage and are stunned if they are looking at Medusa. Enemies not looking at Medusa take 85% damage and are slowed. Enemy gods that are killed during Medusa's gaze will turn to a stone statue and remain behind as a reminder to others.",
                "imageURL": require("../assets/images/Medusa_ability_4.png"),
                "notes": [
                    "Deals 230/310/391/472/553 (+77% of your Physical Power) to enemies facing away.",
                    "Gods can destroy the statues with 4 basic attacks.",
                    "Damage: 270/365/460/555/650 (+90% of your Physical Power)",
                    "Stun Duration: 2s",
                    "Movement Speed Slow: 20/25/30/35/40%",
                    "Slow Duration: 3s",
                    "Ability Type: Cone, Stun, Damage",
                    "Range: 70",
                    "Cost: 100 mana",
                    "Cooldown: 110 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Mercury",
        "Attributes": {
            "Title:": "Messenger of the Gods",
            "Pantheon:": "Roman",
            "Type:": "Melee,Physical",
            "Class:": "Assassin",
            "Pros:": "High Single Target Damage, High Mobility",
            "Difficulty:": "Average",
            "Release date:": "October 2, 2013",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Mercury voicelines",
            "Voice actor:": "Joel McDonald",
            "Health:": "400 (+75)",
            "Mana:": "200 (+40)",
            "Speed:": "381 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+2.4%)",
            "Damage:": "38 (+ 2.13)+ 100% of Physical Power",
            "Progression:": "1/.75/1.25x damage and swing time",
            "Physical:": "12 (+2.9)",
            "Magical:": "24 (+1.3)",
            "HP5:": "10 (+0.7)",
            "MP5:": "4.4 (+0.35)",
            "imageURL": require("../assets/images/Mercury.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Fastest God Alive",
                "description": "For every 1 unit traveled, Mercury gains a 0.04% Physical Power bonus on his next Basic Attack (max 20%).Mercury also gains additional Physical Power equal to 25% of movement speed from items or abilities, and the passive movement speed gained from levels 1 to 7.",
                "imageURL": require("../assets/images/Mercury_ability_0.png"),
                "notes": [
                    "For every 1 unit traveled, Mercury gains a 0.04% Physical Power bonus on his next Basic Attack (max 20%).\nMercury also gains additional Physical Power equal to 25% of movement speed from items or abilities, and the passive movement speed gained from levels 1 to 7.",
                    "Mercury can gain the maximum Physical Power bonus on his next basic attack after travelling at least 500 units without landing a basic attack.",
                    "Jumping while moving will prevent the charge meter from filling up.",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Made You Look",
                "description": "Mercury moves in the blink of an eye, dealing one melee attack to every enemy within the target area. This ability can Critically Hit, and triggers Ability related Item effects, not Basic Attack related Item effects.",
                "imageURL": require("../assets/images/Mercury_ability_1.png"),
                "notes": [
                    "The critical hits are affected by  Deathbringer.",
                    "Can be used through walls.",
                    "Damage: 80/115/150/185/220 (+70% of your Basic Attack Power)",
                    "Radius: 7.5/9/10.5/12/13.5",
                    "Ability Type: Circle, Damage",
                    "Range: 50",
                    "Cost: 50 mana",
                    "Cooldown: 9 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Maximum Velocity",
                "description": "Passive: Mercury gains increased movement speed.Active: Mercury increases his Attack Speed, cleanses himself of Slows and becomes immune to Slows for the duration.",
                "imageURL": require("../assets/images/Mercury_ability_2.png"),
                "notes": [
                    "Passive: Mercury gains increased movement speed.\nActive: Mercury increases his Attack Speed, cleanses himself of Slows and becomes immune to Slows for the duration.",
                    "Due to Fastest God Alive's effect, it also grants 2.25/4.5/6.75/9/11.25 Physical Power.",
                    "Ground Speed: 2/4/6/8/10%",
                    "Attack Speed: 30/40/50/60/70%",
                    "Duration: 5s",
                    "Ability Type: Buff",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 14/13.5/13/12.5/12 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Special Delivery",
                "description": "Mercury dashes forward, knocking aside minions, grabbing the first enemy god he encounters and spinning them. The enemy god takes damage until the effect ends, and Mercury throws the god in the direction of his choice.",
                "imageURL": require("../assets/images/Mercury_ability_3.png"),
                "notes": [
                    "Has a throw height of 350.",
                    "The dash's movement counts towards Fastest God Alive's charge.",
                    "Can deal up to 60/80/100/120/140 (+80% of your Physical Power) damage to gods.",
                    "Mercury dashes through gods who are immune to the grab.",
                    "Mercury is immune to knockups while dashing.",
                    "Minion Damage: 70/115/160/205/250 (+80% of your Physical Power)",
                    "Damage per Tick: 15/20/25/30/35 (+20% of your Physical Power) every 0.25s",
                    "Duration: 1s",
                    "Ability Type: Dash, Crowd Control, Damage",
                    "Range: 55",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 15 seconds"
                ]
            },
            {
                "name": "Ultimate  - Sonic Boom",
                "description": "Mercury gathers energy for a powerful Dash, with the range extending as he does so. He travels the distance faster than the speed of sound, dealing damage to all enemies, stunning them and spinning them around in a random direction.",
                "imageURL": require("../assets/images/Mercury_ability_4.png"),
                "notes": [
                    "The dash's movement counts towards Fastest God Alive's charge.",
                    "Mercury is immune from crowd control effects while dashing.",
                    "Mercury can cancel the ability at any time while preparing to dash.",
                    "Damage: 200/275/350/425/500 (+100% of your Physical Power)",
                    "Disorient Duration: 1.5s",
                    "Ability Type: Dash, Disorient, Damage",
                    "Range: 300",
                    "Cost: 80/85/90/95/100 mana",
                    "Cooldown: 90/85/80/75/70 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Merlin",
        "Attributes": {
            "Title:": "The Master Wizard",
            "Pantheon:": "Arthurian",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "High Area Damage",
            "Difficulty:": "Hard",
            "Release date:": "February 11, 2019",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Merlin voicelines",
            "Voice actor:": "Adin Rudd",
            "Health:": "370 (+75)",
            "Mana:": "250 (+55)",
            "Speed:": "355 (+0)",
            "Range:": "58 (+0)",
            "Attack/Sec:": "1 (+0.8%)",
            "Damage:": "34 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "10 (+3)",
            "Magical:": "23 (+1.3)",
            "HP5:": "6 (+0.48)",
            "MP5:": "4.8 (+0.44)",
            "imageURL": require("../assets/images/Merlin.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Overload",
                "description": "Every time Merlin casts a spell he gains a stack of Overload. When Merlin next fires a basic attack it will be augmented with lightning, dealing extra damage to the first Enemy.",
                "imageURL": require("../assets/images/Merlin_ability_0.png"),
                "notes": [
                    "Empowered basic attacks are consumed hit or miss and trigger item effects.",
                    "Damage: 20 (+20% of your Magical Power)",
                    "Charges: 3",
                    "Duration: 5s",
                    "Ability Type: Ranged Basic, Damage",
                    "Range: 55"
                ]
            },
            {
                "name": "1st Ability (Arcane)  - Eclipse",
                "description": "Merlin conjures an orb of condensed celestial energy that grows in size as it travels, dealing damage every 0.4s and marking Enemies hit.Enemies marked take additional damage if they stay within the outer range of Eclipse.",
                "imageURL": require("../assets/images/Merlin_ability_1.png"),
                "notes": [
                    "Merlin conjures an orb of condensed celestial energy that grows in size as it travels, dealing damage every 0.4s and marking Enemies hit.\nEnemies marked take additional damage if they stay within the outer range of Eclipse.",
                    "Can deal up to 80/180/280/380/480 (+119% of your Magical Power) damage.",
                    "Ability deals 1 major instance of damage and up to 8 minor instances.",
                    "Initial Damage: 40/60/80/100/120 (+55% of your Magical Power)",
                    "Damage per Tick: 5/15/25/35/45 (+8% of your Magical Power)",
                    "Duration: 3s when fully deployed",
                    "Ability Type: Circle, Damage",
                    "Range/Radius: 60/15, 25",
                    "Cost: 60 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "1st Ability (Fire)  - Radiate",
                "description": "Merlin channels a beam of intense fire for 2s that deals damage every 0.25s. Each time Radiate hits an Enemy, it also applies a Burn, dealing additional damage over time.",
                "imageURL": require("../assets/images/Merlin_ability_2.png"),
                "notes": [
                    "Has a radius of 5.",
                    "Burn ticks every 0.4s and each beam tick refreshes the burn's duration.",
                    "Can deal up to 104/192/280/368/456 (+184% of your Magical Power) damage.",
                    "Ability deals up to 8 instances of damage and burn deals additional 4 instances of damage, refreshing for every instance hit up to maximum of 8.",
                    "Damage per Tick: 8/14/20/26/32 (+18% of your Magical Power)",
                    "Burn Damage: 5/10/15/20/25 (+5% of your Magical Power)",
                    "Duration: 2s",
                    "Ability Type: Line, Damage",
                    "Range: 45",
                    "Cost: 60 mana",
                    "Cooldown: 14/13.5/13/12.5/12 seconds"
                ]
            },
            {
                "name": "1st Ability (Ice)  - Frostbolt",
                "description": "Merlin hurls a Frostbolt that explodes if it hits an Enemy, dealing an additional 15% damage if they are slowed.",
                "imageURL": require("../assets/images/Merlin_ability_3.png"),
                "notes": [
                    "The projectile has a radius of 4.",
                    "Deals 69/109/149/190/230 (+63% of your Magical Power) damage to targets afflicted by a slow.",
                    "Damage: 60/95/130/165/200 (+55% of your Magical Power)",
                    "Ability Type: Line, Damage",
                    "Range/Radius: 70/15",
                    "Cost: 60 mana",
                    "Cooldown: 6 seconds"
                ]
            },
            {
                "name": "2nd Ability (Arcane)  - Vortex",
                "description": "Merlin deploys a field of arcane energy at a location. After a delay, the Vortex deals damage and pulls Enemies towards the center.",
                "imageURL": require("../assets/images/Merlin_ability_4.png"),
                "notes": [
                    "Has a deploy time of 0.5s after casting and the damage/pull activates after 1s from deployment.",
                    "Damage: 50/80/110/140/170 (+60% of your Magical Power)",
                    "Ability Type: Circle, Knockup, Damage",
                    "Range/Radius: 60/20",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 16/15/14/13/12 seconds"
                ]
            },
            {
                "name": "2nd Ability (Fire)  - Dragonfire",
                "description": "Merlin summons forth two ethereal dragons that spout flames towards each other, dealing damage to Enemies every 0.25s.If caught in the center of the area, Enemy gods have their protections reduced. The dragons last for 3s.",
                "imageURL": require("../assets/images/Merlin_ability_5.png"),
                "notes": [
                    "Merlin summons forth two ethereal dragons that spout flames towards each other, dealing damage to Enemies every 0.25s.\nIf caught in the center of the area, Enemy gods have their protections reduced. The dragons last for 3s.",
                    "Has a radius of 30, a cone angle of 80 and a deploy time of 0.5s.",
                    "Each tick refreshes the debuff's duration.",
                    "Deals up to 104/143/182/221/260 (+195% of your Magical Power) damage and shreds up to 16% Protections to gods.",
                    "Ability deals up to 13 instances of damage.",
                    "Damage per Tick: 8/11/14/17/20 (+15% of your Magical Power)",
                    "Protection Reduction: 4%",
                    "Max. Stacks: 4",
                    "Duration: 4s",
                    "Ability Type: Area, Debuff, Damage",
                    "Range: 50",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 16/15.5/15/14.5/14 seconds"
                ]
            },
            {
                "name": "2nd Ability (Ice)  - Blizzard",
                "description": "Merlin creates a Blizzard at a target location that lasts for 4s. After a brief delay, shards of ice start hurling down every 0.5s.Enemies hit take damage and progressively get more slowed while they stay within the area.",
                "imageURL": require("../assets/images/Merlin_ability_6.png"),
                "notes": [
                    "Merlin creates a Blizzard at a target location that lasts for 4s. After a brief delay, shards of ice start hurling down every 0.5s.\nEnemies hit take damage and progressively get more slowed while they stay within the area.",
                    "Has a deploy time of 0.7s.",
                    "Deals up to 80/200/320/440/560 (+120% of your Magical Power) damage and slows up to 40%.",
                    "Each tick refreshes the slow's duration.",
                    "Ability deals up to 8 instances of damage.",
                    "Damage per Tick: 10/25/40/55/70 (+15% of your Magical Power)",
                    "Slow per stack: 8%",
                    "Max. Stacks: 5",
                    "Duration: 2s",
                    "Ability Type: Circle, Slow, Damage",
                    "Range/Radius: 65/20",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 16/15/14/13/12 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Flicker",
                "description": "Merlin quickly teleports a short distance in front of him.",
                "imageURL": require("../assets/images/Merlin_ability_7.png"),
                "notes": [
                    "Cooldown is shared in all stances.",
                    "Ability Type: Teleport",
                    "Range: 30",
                    "Cost: 70 mana",
                    "Cooldown: 24/23/22/21/20 seconds"
                ]
            },
            {
                "name": "Ultimate  - Elemental Mastery",
                "description": "Merlin taps into his inner potential, exploding with energy in the stance he is currently attuned to. During this time Merlin can choose which stance to enter into next.After the explosion reaches its apex, it collapses in on itself. Enemies are dealt damage from the both the explosion and the implosion and suffer different effects depending on which stance's energy they are being hit by.",
                "imageURL": require("../assets/images/Merlin_ability_8.png"),
                "notes": [
                    "Merlin taps into his inner potential, exploding with energy in the stance he is currently attuned to. During this time Merlin can choose which stance to enter into next.\nAfter the explosion reaches its apex, it collapses in on itself. Enemies are dealt damage from the both the explosion and the implosion and suffer different effects depending on which stance's energy they are being hit by.",
                    "Each stance changes Merlin's color scheme and effects.",
                    "Deals up to 160/220/280/340/420 (+30% of your Magical Power) damage by default and 175/250/325/400/495 (+45% of your Magical Power) damage when switching to or from fire stance.",
                    "Arcane has a knockup strength of 100 while fire's DoT deals damage every 0.5s.",
                    "On use, Merlin has 1s to use his 1st, 2nd or 3rd ability to pick a specific stance. If no specific stance is selected, it will cycle between Arcane > Fire > Ice.",
                    "Merlin always starts in Arcane Stance and respawns in whatever stance he was currently in.",
                    "Can be used without putting a level in it. Switches stances without any of the additional effects, costs 40 mana with a cooldown of 32s.",
                    "Damage: 80/110/140/170/210 (+15% of your Magical Power)",
                    "Fire Damage per Tick: 5/10/15/20/25 (+5% of your Magical Power)",
                    "Ice Slow: 20%",
                    "Slow duration: 2s",
                    "Arcane: Knockup",
                    "Ability Type: Circle, Crowd Control, Damage",
                    "Radius: 25",
                    "Cost: 40/50/60/70/80 mana",
                    "Cooldown: 30/27.5/25/22.5/20 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Morgan Le Fay",
        "Attributes": {
            "Title:": "The Dark Enchantress",
            "Pantheon:": "Arthurian",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "High Area Damage",
            "Difficulty:": "Average",
            "Release date:": "June 15, 2021",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Morgan Le Fay voicelines",
            "Voice actor:": "Claire Curtis-Ward",
            "Health:": "430 (+77)",
            "Mana:": "250 (+55)",
            "Speed:": "365 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "1 (+0.8%)",
            "Damage:": "35 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "14 (+3)",
            "Magical:": "23 (+1.3)",
            "HP5:": "8 (+0.48)",
            "MP5:": "4.8 (+0.44)",
            "imageURL": require("../assets/images/Morgan_Le_Fay.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Empowered Blade",
                "description": "Morgan Le Fay's abilities Mark enemy gods also activating the shared Symbol on her sword providing Magical Power. Once her sword has gained all 5 Symbols, Morgan Le Fay becomes empowered, gaining double the Magical Power buff and reducing the cooldown of Consuming Power by 10s before the Symbols are all drained.",
                "imageURL": require("../assets/images/Morgan_Le_Fay_ability_0.png"),
                "notes": [
                    "Each symbol provides 10 Magical Power at level 20 (2.4 at level 1) allowing for a total of 24 (level 1) and 100 (level 20) when empowered.",
                    "Applying the same symbol to the same god hit will not increase that symbol's duration, instead refreshing it.",
                    "Magical Power: 2 + 0.4 per level for each Symbol",
                    "Empowered Duration: 10s",
                    "Mark Duration: 30s",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Sigil Mastery",
                "description": "Morgan Le Fay summons a crashing magical sword, imbued by a sigil of her choice which is briefly carved into the ground. Enemy gods hit are Marked while the Sigil causes secondary effects.Mark of Mind, fearing enemies from the center of the Sigil.Mark of Body, creating a slowing field.Mark of Soul, spawning a decoy that attacks Enemy gods hit for 4s.",
                "imageURL": require("../assets/images/Morgan_Le_Fay_ability_1.png"),
                "notes": [
                    "Morgan Le Fay summons a crashing magical sword, imbued by a sigil of her choice which is briefly carved into the ground. Enemy gods hit are Marked while the Sigil causes secondary effects.\nMark of Mind, fearing enemies from the center of the Sigil.",
                    "Mark of Body, creating a slowing field.",
                    "Mark of Soul, spawning a decoy that attacks Enemy gods hit for 4s.",
                    "Has an inner radius of 12.5.",
                    "Can deal up to 105/150/195/240/285 (+80% of your Magical Power) damage.",
                    "The clones are prioritized as gods by towers and minions.",
                    "The clones has 30% of Morgan Le Fay's max. HP, 75% of her current Magical Power and don't remove backdoor protections from towers and phoenixes.",
                    "Morgan Le Fay can cancel the ability selection without triggering its cooldown.",
                    "Inner Damage: 65/95/125/155/185 (+50% of your Magical Power)",
                    "Area Damage: 40/55/70/85/100 (+30% of your Magical Power)",
                    "Fear Duration: 1s",
                    "Slow Field Duration: 4s",
                    "Slow: 35%",
                    "Ability Type: Circle, Crowd Control, Damage",
                    "Range/Radius: 55/20",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 11 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Dragonflight",
                "description": "Morgan Le Fay summons a dragon apparition which bursts from the ground in front of her, dealing damage and knocking up enemies hit.The dragon then flies forward, dealing damage again and knocking back enemies.Applies Mark of Spirit to enemy gods hit.",
                "imageURL": require("../assets/images/Morgan_Le_Fay_ability_2.png"),
                "notes": [
                    "Morgan Le Fay summons a dragon apparition which bursts from the ground in front of her, dealing damage and knocking up enemies hit.\nThe dragon then flies forward, dealing damage again and knocking back enemies.\nApplies Mark of Spirit to enemy gods hit.",
                    "Has an initial/knockup range of 18.",
                    "Can deal up to 125/170/215/260/305 (+85% of your Magical Power) damage.",
                    "Area Damage: 50/70/90/110/130 (+35% of your Magical Power)",
                    "Dragon Damage: 75/100/125/150/175 (+50% of your Magical Power)",
                    "Ability Type: Area, Crowd Control",
                    "Range: 60",
                    "Cost: 70/75/80/85/90 mana",
                    "Cooldown: 14/13.5/13/12.5/12s seconds"
                ]
            },
            {
                "name": "3rd Ability  - Shroud of Wildfire",
                "description": "Morgan Le Fay dons and sends out a cloak of wildfire, damaging enemies and stopping on enemy gods. On expiration the wildfire explodes, leaving a 4s debuff on enemies that continues to deal damage. While the debuff persists, enemies that use a movement ability combust, taking damage again. Morgan Le Fay gains Movement speed for using this ability and can extend the debuff on enemies with continued basic attacks. Applies Mark of Matter to enemy gods hit.",
                "imageURL": require("../assets/images/Morgan_Le_Fay_ability_3.png"),
                "notes": [
                    "Damage is dealt every 1s and can extend the debuff duration up to 8s.",
                    "Deals a total of 100/150/200/250/300 (+60% of your Magical Power) damage by default and 115/180/245/310/375 (+75% of your Magical Power) damage while extending the debuff duration if the target doesn't use a movement ability.",
                    "Damage: 80/110/140/170/200 (+40% of your Magical Power)",
                    "Damage per Tick: 5/10/15/20/25 (+5% of your Magical Power)",
                    "Bonus Damage: 60/90/120/150/180 (+20% of your Magical Power)",
                    "Movement Speed: 16/18/20/22/24%",
                    "Buff Duration: 4s",
                    "Ability Type: Line, Debuff, Damage",
                    "Range/Radius: 60/12",
                    "Cost: 60 mana",
                    "Cooldown: 13 seconds"
                ]
            },
            {
                "name": "Ultimate  - Consuming Power",
                "description": "Morgan Le Fay rises into the air, consuming the Marks on enemies in front of her, dealing damage and empowering her next strikes.For a short duration after Morgan Le fay can fire out 3 devastating strikes of dark energy, dealing damage and providing a Missing Health Heal per enemy god hit.Initial Marks consumed increase the width of the energy projectiles. Subsequent heals per projectile is reduced by 50%.",
                "imageURL": require("../assets/images/Morgan_Le_Fay_ability_4.png"),
                "notes": [
                    "Morgan Le Fay rises into the air, consuming the Marks on enemies in front of her, dealing damage and empowering her next strikes.\nFor a short duration after Morgan Le fay can fire out 3 devastating strikes of dark energy, dealing damage and providing a Missing Health Heal per enemy god hit.",
                    "Initial Marks consumed increase the width of the energy projectiles. Subsequent heals per projectile is reduced by 50%.",
                    "The projectiles have a width of 12 with no consumed marks and scale up to 20 with 5 different consumed marks.",
                    "Deals up to 395/590/785/980/1175 (+185% of your Magical Power) damage to a god with all 5 marks/projectiles and heals up to 87.5/122.5/167.5/192.5/227.5 (+8/9/9.6/10.5/11.4% of Morgan Le Fay's missing HP) health.",
                    "Morgan Le Fay is immune to crowd control effects and ignores all movement penalties for the duration.",
                    "Mark Damage: 25/40/55/70/85 (+10% of your Magical Power)",
                    "Projectile Damage: 90/130/170/210/250 (+45% of your Magical Power)",
                    "Heal: 50/70/90/110/130",
                    "Missing Health Heal: 4.5/5/5.5/6/6.5%",
                    "Duration: 4s",
                    "Ability Type: Area, Heal, Damage",
                    "Range: 70/100",
                    "Cost: 80/85/90/95/100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Mulan",
        "Attributes": {
            "Title:": "The Ascendant Warrior",
            "Pantheon:": "Chinese",
            "Type:": "Melee,Physical",
            "Class:": "Warrior",
            "Pros:": "High Area Damage",
            "Difficulty:": "Average",
            "Release date:": "February 25, 2020",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Mulan voicelines",
            "Voice actor:": "Molly Zhang",
            "Health:": "490 (+84)",
            "Mana:": "220 (+38)",
            "Speed:": "375 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+1%)",
            "Damage:": "39 (+ 2.2)+ 100% of Physical Power",
            "Progression:": "1/1/1.25x damage and swing time, hitting in an AoE on the final blow",
            "Physical:": "18 (+3)",
            "Magical:": "24 (+1.3)",
            "HP5:": "9 (+0.7)",
            "MP5:": "4.7 (+0.4)",
            "imageURL": require("../assets/images/Mulan.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Training Arc",
                "description": "Mulan utilizes a Sword, Spear and Bow with her abilities and can gain Skill towards them by damaging enemy gods. Her expertise in each weapon provides different bonuses. Mulan also gains a buff every 10 seconds that reduces the cooldown of the next non-ultimate ability used by 2 seconds.",
                "imageURL": require("../assets/images/Mulan_ability_0.png"),
                "notes": [
                    "Requires a total of 8500 damage dealt (sword & spear) to gods and/or 5950 damage done (sword & spear) to minions after mitigations to fully master the Sword & Spear and 2700 damage dealt (bow) to gods after mitigations to fully master the Bow.",
                    "Sword Skill: 500, 1500, 6500 damage done",
                    "Spear Skill: 500, 1500, 6500 damage done",
                    "Bow Skill: 200, 500, 2000 damage done",
                    "Skill gain for Minions: 30%",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Cross Strike",
                "description": "Mulan swings her sword with precision, striking twice and dealing damage to all enemies hit.Skilled - Mulan gains an Attack Speed increase after using this ability.Adept - Mulan strikes a third time in a large cone in front of her.Mastered - Mulan gains 10% Attack Speed.",
                "imageURL": require("../assets/images/Mulan_ability_1.png"),
                "notes": [
                    "Mulan swings her sword with precision, striking twice and dealing damage to all enemies hit.\nSkilled - Mulan gains an Attack Speed increase after using this ability.",
                    "Adept - Mulan strikes a third time in a large cone in front of her.",
                    "Mastered - Mulan gains 10% Attack Speed.",
                    "Deals up to 150/190/230/270/310 (+60% of your Physical Power) damage by default and 225/285/345/405/465 (+90% of your Physical Power) damage when Adept.",
                    "The final cone has a range of 30 when this ability is at least Adept.",
                    "Damage per Hit: 75/95/115/135/155 (+30% of your Physical Power)",
                    "Attack Speed: 25%",
                    "Duration: 6s",
                    "Ability Type: Area, Buff, Damage",
                    "Radius: 25",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 14/13.5/13/12.5/12 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Spear Thrust",
                "description": "Mulan brings forth her spear striking in front of her, dealing damage and slowing all enemies hit.Skilled - Mulan heals for up to 3 enemies hit.Adept - Mulan strikes a second time further in front of her, dealing bonus damage if she hits the same enemy.Mastered - Mulan gains 5% Power.",
                "imageURL": require("../assets/images/Mulan_ability_2.png"),
                "notes": [
                    "Mulan brings forth her spear striking in front of her, dealing damage and slowing all enemies hit.\nSkilled - Mulan heals for up to 3 enemies hit.",
                    "Adept - Mulan strikes a second time further in front of her, dealing bonus damage if she hits the same enemy.",
                    "Mastered - Mulan gains 5% Power.",
                    "Skilled heals up to 36/69/102/135/160 health and Adept deals a total of 190/270/350/430/510 (+80% of your Physical Power) damage to targets hit twice.",
                    "Damage per Hit: 90/125/160/195/230 (+35% of your Physical Power)",
                    "Slow: 25%",
                    "Duration: 3s",
                    "Heal: 12/23/34/45/56",
                    "Bonus Damage: 10/20/30/40/50 (+10% of your Physical Power)",
                    "Ability Type: Line, Slow, Damage",
                    "Range: 25/35",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Grapple",
                "description": "Mulan readies herself and fires an arrow with a rope attached to it. If she hits an enemy god she stuns them, dealing damage and pulling them towards her while dashing and hitting them again for extra damage.Skilled - Mulan gains a Protection buff after hitting an enemy god.Adept - Mulan is able to dash to walls.Mastered - Mulan gains 5% Movement Speed & 5% Protections.",
                "imageURL": require("../assets/images/Mulan_ability_3.png"),
                "notes": [
                    "Mulan readies herself and fires an arrow with a rope attached to it. If she hits an enemy god she stuns them, dealing damage and pulling them towards her while dashing and hitting them again for extra damage.\nSkilled - Mulan gains a Protection buff after hitting an enemy god.",
                    "Adept - Mulan is able to dash to walls.",
                    "Mastered - Mulan gains 5% Movement Speed & 5% Protections.",
                    "Can deal up to of 130/185/240/295/350 (+70% of your Physical Power) damage to gods hit by the arrow and bonus damage.",
                    "The stun from this ability is not affected by diminishing returns.",
                    "Mulan is immune from crowd control effects while pulling a god.",
                    "Mulan can also grapple to player-made walls when this ability is at least Adept.",
                    "Mulan can rotate during the prefire.",
                    "Arrow Damage: 90/135/180/225/270 (+50% of your Physical Power)",
                    "Stun Duration: 1s",
                    "Bonus Damage: 40/50/60/70/80 (+20% of your Physical Power)",
                    "Protection Increase: 25/30/35/40/45",
                    "Duration: 6s",
                    "Ability Type: Line, Stun, Damage",
                    "Range: 60",
                    "Cost: 60 mana",
                    "Cooldown: 16/15.5/15/14.5/14 seconds"
                ]
            },
            {
                "name": "Ultimate  - Divine Mastery",
                "description": "Mulan brings forth her entire arsenal dashing forwards with sword slashes, dealing damage and rooting enemies for 1s, then Mulan uses her new divine energy to knock up enemies with her spear before firing a large projectile attack with her bow.Dealing damage with any part of this ability gains Skill towards the weapon used. Mulan also gains Protections for the duration.",
                "imageURL": require("../assets/images/Mulan_ability_4.png"),
                "notes": [
                    "Mulan brings forth her entire arsenal dashing forwards with sword slashes, dealing damage and rooting enemies for 1s, then Mulan uses her new divine energy to knock up enemies with her spear before firing a large projectile attack with her bow.",
                    "Dealing damage with any part of this ability gains Skill towards the weapon used. Mulan also gains Protections for the duration.",
                    "Can deal up to 355/495/635/775/915 (+160% of your Physical Power) damage.",
                    "Mulan is immune from crowd control effects while using this ability.",
                    "Can be cancelled early.",
                    "Sword Damage: 80/130/180/230/280 (+60% of your Physical Power)",
                    "Spear Damage: 100/140/180/220/260 (+40% of your Physical Power)",
                    "Arrow Damage: 175/225/275/325/375 (+60% of your Physical Power)",
                    "Protection Increase: 30%",
                    "Ability Type: Area, Crowd Control, Damage",
                    "Range: 65/65/85",
                    "Cost: 100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Ne Zha",
        "Attributes": {
            "Title:": "The Third Lotus Prince",
            "Pantheon:": "Chinese",
            "Type:": "Melee,Physical",
            "Class:": "Assassin",
            "Pros:": "High Single Target Damage, Medium Crowd Control",
            "Difficulty:": "Average",
            "Release date:": "April 17, 2013",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Ne Zha voicelines",
            "Voice actor:": "Colleen Clinkenbeard",
            "Health:": "400 (+75)",
            "Mana:": "200 (+35)",
            "Speed:": "375 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+2.1%)",
            "Damage:": "39 (+ 2.2)+ 100% of Physical Power",
            "Progression:": "1/1/1.5/2x damage and swing time, hitting in an AoE on the final blow",
            "Physical:": "12 (+2.9)",
            "Magical:": "23 (+1.3)",
            "HP5:": "10 (+0.71)",
            "MP5:": "3.9 (+0.27)",
            "imageURL": require("../assets/images/Ne_Zha.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Righteous Spirit",
                "description": "Ne Zha's spirit is strengthened as he successfully hits enemies with abilities and basic attacks. Each hit provides 1 stack and each Critical Hit provides 2 stacks. Stacks reset if Ne Zha has not taken or dealt damage in the last 12s.",
                "imageURL": require("../assets/images/Ne_Zha_ability_0.png"),
                "notes": [
                    "Grants up to 10% Movement Speed at max stacks.",
                    "Maximum Stacks: 20",
                    "Movement Speed: 0.5% per stack",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Universe Ring Toss",
                "description": "Ne Zha throws the Universe Ring, bouncing several times, dealing damage, applying a Physical Protection Debuff for 3s and Slowing by 12.5% for 1s. Each hit also stacks a movement speed buff on Ne Zha for 2s. Subsequent hits on the same target deal 35% less damage and double the Slow's effectiveness.",
                "imageURL": require("../assets/images/Ne_Zha_ability_1.png"),
                "notes": [
                    "Prioritizes targets that haven't been hit.",
                    "Grants up to 20/25/30/35/40% Movement Speed and can potentially reduce up to 10/21/27/44/52 Protections to one target and slows up to 25% to a single target and 50% when hitting the same target more than twice.",
                    "Each hit refreshes the buff/debuff duration.",
                    "Deals 49/65/81/97/114 (+13% of your Physical Power) damage on subsequent hits.",
                    "Initial Damage: 80/110/140/170/200 (+40% of your Physical Power)",
                    "Damage: 75/100/125/150/175 (+20% of your Physical Power)",
                    "Bounces: 4/5/6/7/8",
                    "Protections Debuff: 5/7/9/11/13 per hit",
                    "Movement Speed: 5% per hit",
                    "Ability Type: Line, Slow, Damage",
                    "Range: 55",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Flaming Spear",
                "description": "Ne Zha empowers himself with fighting spirit, igniting his spear for increased Attack Speed and Critical Strike Chance for a short duration. Upon activation, Ne Zha also heals himself based on each stack of his passive ability.",
                "imageURL": require("../assets/images/Ne_Zha_ability_2.png"),
                "notes": [
                    "Can heal up to 80/120/160/200/240 health with maximum passive stacks.",
                    "Attack Speed: 25/32.5/40/47.5/55%",
                    "Critical Strike Chance: 20%",
                    "Duration: 4/4.5/5/5.5/6s",
                    "Healing: 4/6/8/10/12 per stack",
                    "Ability Type: Buff",
                    "Cost: 55/60/65/70/75 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Armillary Sash",
                "description": "Ne Zha throws out his Armillary Sash hitting the first enemy god in its path. The target is Stunned as Ne Zha yanks himself toward the target, dealing a powerful blow to all enemies in the area as he arrives.",
                "imageURL": require("../assets/images/Ne_Zha_ability_3.png"),
                "notes": [
                    "Is considered a leap for gameplay purposes.",
                    "There is a short immunity frame while Ne Zha is pulled to his target.",
                    "The stun isn't affected by diminishing returns.",
                    "Has a radius of 10.",
                    "Damage: 90/140/190/240/290 (+150% of your Physical Power)",
                    "Stun: 1s",
                    "Ability Type: Line, Stun, Damage",
                    "Range: 70",
                    "Cost: 75 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "Ultimate  - Wind Fire Wheels",
                "description": "Ne Zha dashes forward, gaining bonus Protections for 4s and becoming CC immune. If he hits an enemy god he lifts them into the sky for 4s, unleashing a 3-hit combo. Successfully timed attacks during the combo result in these hits dealing Critical Damage. They are then smashed back to Earth, slightly knocking up and damaging the target and enemies around the landing location. When Ne Zha lands he gains bonus Protections for 5s and dashes back to where he cast this ability.",
                "imageURL": require("../assets/images/Ne_Zha_ability_4.png"),
                "notes": [
                    "The critical hits are affected by Deathbringer as well as bypass Hou Yi's passive ability.",
                    "Has a crashing radius of 20.",
                    "The timed attacks are performed by pressing the Basic Attack button at the right moment.",
                    "Deals a total of 169/330/511/652/813 (+265% of your Physical Power) damage to the affected target.",
                    "Wind Fire Wheels will end early if the target dies (resulting in less than 3 hits depending on damage dealt).",
                    "Has a time window of .4s for an enemy to cleanse this ability.",
                    "Damage per Hit: 23/40/57/74/91 (+45% of your Physical Power)",
                    "Damage (Initial/Landing): 50/105/160/215/270 (+65% of your Physical Power)",
                    "Protections: 30/35/40/45/50",
                    "Ability Type: Dash, Crowd Control, Damage",
                    "Range: 55",
                    "Cost: 80/90/100/110/120 mana",
                    "Cooldown: 90/85/80/75/70 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Neith",
        "Attributes": {
            "Title:": "Weaver of Fate",
            "Pantheon:": "Egyptian",
            "Type:": "Ranged,Physical",
            "Class:": "Hunter",
            "Pros:": "High Crowd Control, High Sustain",
            "Difficulty:": "Easy",
            "Release date:": "February 13, 2013",
            "Favor:": "(Free) 0",
            "Gems:": "(Free) 0",
            "Voicelines:": "Neith voicelines",
            "Voice actor:": "Lindsay Seidel",
            "Health:": "457 (+75)",
            "Mana:": "230 (+39)",
            "Speed:": "365 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "1 (+1.6%)",
            "Damage:": "33 (+ 2.5)+ 100% of Physical Power",
            "Progression:": "None",
            "Physical:": "12 (+3)",
            "Magical:": "23 (+1.3)",
            "HP5:": "6 (+0.54)",
            "MP5:": "4.4 (+0.35)",
            "imageURL": require("../assets/images/Neith.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Broken Weave",
                "description": "A Broken Weave appears at the last location that each enemy god dies. The Broken Weaves give her abilities secondary effects when used on the Broken Weaves. These weaves last for 2 minutes.",
                "imageURL": require("../assets/images/Neith_ability_0.png"),
                "notes": [
                    "Each use of Spirit Arrow and Unravel will only apply one additional effect regardless of how many weaves have been hit.",
                    "Only one weave spawns per death regardless of how many Neiths are present.",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Spirit Arrow",
                "description": "Neith fires a shot that passes through everything. Each enemy hit takes damage and is Rooted. If the Spirit Arrow hits a Broken Weave, the Weave detonates, dealing an additional 100% of the damage and applying the Root to all enemies in the area.",
                "imageURL": require("../assets/images/Neith_ability_1.png"),
                "notes": [
                    "Can deal up to 180/310/440/570/700 (+180% of your Physical Power) damage if hit by both the weave and arrow.",
                    "Damage: 90/155/220/285/350 (+90% of your Physical Power)",
                    "Root: 1.6/1.7/1.8/1.9/2s",
                    "Ability Type: Line, Root, Damage",
                    "Radius/Range: 70/25",
                    "Cost: 40/45/50/55/60 mana",
                    "Cooldown: 13/12.5/12/11.5/11 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Unravel",
                "description": "Neith neatly unravels the world weaves, damaging all enemies in the target area, reducing their Attack Speed while increasing her own, and healing Neith for each enemy hit, up to 3. Any Broken Weaves in the area are removed, healing Neith an additional amount.",
                "imageURL": require("../assets/images/Neith_ability_2.png"),
                "notes": [
                    "Hitting multiple gods will debuff them all, but only apply 1 stack of the buff to Neith.",
                    "Can heal up to 60/105/150/195/240 health without hitting a weave and 80/140/200/260/320 health if a weave is in its area.",
                    "Damage: 70/110/150/190/230 (+100% of your Physical Power)",
                    "Attack Speed Buff/Debuff: 30%",
                    "Debuff Lifetime: 4s",
                    "Heal: 20/35/50/65/80",
                    "Weave Heal: 40/70/100/130/160",
                    "Ability Type: Circle, Heal, Damage",
                    "Range/Radius: 55/20",
                    "Cost: 70 mana",
                    "Cooldown: 14/13.5/13/12.5/12 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Back Flip",
                "description": "Neith backflips through the air, creating a Broken Weave as she leaps while damaging and Slowing enemies in the area in front of her.",
                "imageURL": require("../assets/images/Neith_ability_3.png"),
                "notes": [
                    "Neith cannot back flip over map walls, but she can back flip through player-made walls.",
                    "Damage: 80/120/160/200/240 (+80% of your Physical Power)",
                    "Slow: 30%",
                    "Slow Duration: 2.5/3/3.5/4/4.5s",
                    "Ability Type: Cone, Leap, Damage",
                    "Range: 35/60",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 16 seconds"
                ]
            },
            {
                "name": "Ultimate  - World Weaver",
                "description": "Neith charges up and fires an arrow across the world, seeking its target through obstacles. Enemy gods take damage and are Stunned. The arrow can be fired quicker for diminished results.",
                "imageURL": require("../assets/images/Neith_ability_4.png"),
                "notes": [
                    "Must be channeled for at least 2s for it to deal full damage and stun duration.",
                    "If fired instantly, it will only do 50% damage and stun duration, 65% damage and stun duration if channeled for 1s.",
                    "Can be cancelled without triggering its cooldown nor cost.",
                    "Damage: 235/300/365/430/495 (+115% of your Physical Power)",
                    "Stun: 1.5s",
                    "Ability Type: Target, Stun, Damage",
                    "Range: Global",
                    "Cost: 80/90/100/110/120 mana",
                    "Cooldown: 100 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Nemesis",
        "Attributes": {
            "Title:": "Goddess of Vengeance",
            "Pantheon:": "Greek",
            "Type:": "Melee,Physical",
            "Class:": "Assassin",
            "Pros:": "High Mobility",
            "Difficulty:": "Average",
            "Release date:": "February 6, 2014",
            "Favor:": "(Free) 0",
            "Gems:": "(Free) 0",
            "Voicelines:": "Nemesis voicelines",
            "Voice actor:": "Amanda Doskocil",
            "Health:": "470 (+76)",
            "Mana:": "210 (+38)",
            "Speed:": "375 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+2.16%)",
            "Damage:": "39 (+ 2.25)+ 100% of Physical Power",
            "Progression:": "1/1/.75/1.25x damage and swing time",
            "Physical:": "11 (+3)",
            "Magical:": "23 (+1.3)",
            "HP5:": "8 (+0.7)",
            "MP5:": "4.3 (+0.4)",
            "imageURL": require("../assets/images/Nemesis.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Scales of Fate",
                "description": "Nemesis holds the scales of balance. Hitting enemies with Basic Attacks tips the scales in her favor, reducing her target's Physical and Magical power and increasing hers (Stacking).",
                "imageURL": require("../assets/images/Nemesis_ability_0.png"),
                "notes": [
                    "Steals 21% Power at max stacks.",
                    "Power Gain: 7% per hit",
                    "Power Loss: 7% per hit",
                    "Max Stacks: 3",
                    "Duration: 5s",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Swift Vengeance",
                "description": "Nemesis dashes in a line, dealing damage to enemies in her path and may dash again within 2s. She may use Basic Attacks and Abilities between the dashes.",
                "imageURL": require("../assets/images/Nemesis_ability_1.png"),
                "notes": [
                    "Can deal up to 100/160/220/280/340 (+70% of your Physical Power) damage.",
                    "Damage: 50/80/110/140/170 (+35% of your Physical Power)",
                    "Ability Type: Dash, Damage",
                    "Range: 30",
                    "Cost: 50 mana",
                    "Cooldown: 13/12.5/12/11.5/11 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Slice and Dice",
                "description": "Nemesis swings her blade, dealing damage in an area in front of her. Enemies in the center of her swing are struck for 2x damage and Slowed for 2s.",
                "imageURL": require("../assets/images/Nemesis_ability_2.png"),
                "notes": [
                    "Deals 110/170/230/290/350 (+80% of your Physical Power) damage to enemies in the center.",
                    "Damage: 55/85/115/145/175 (+40% of your Physical Power)",
                    "Slow: 30%",
                    "Ability Type: Cone, Slow, Damage",
                    "Range: 35",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 11 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Retribution",
                "description": "Nemesis activates a temporary Shield around herself that protects her from a set amount of damage, or until time expires. A percentage of incoming damage from gods is healed and reflected back to the source. Hard Crowd Control effects remove the Shield.",
                "imageURL": require("../assets/images/Nemesis_ability_3.png"),
                "notes": [
                    "Does not protect from execute effects.",
                    "Nemesis cannot heal or reflect damage if taken damage from towers and phoenixes while the shield is active.",
                    "Damage Reflect: 50% of damage received",
                    "Healing: 70% of damage received",
                    "Shield Health: 150/225/300/375/450",
                    "Duration: 2s",
                    "Ability Type: Buff, Damage",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 14/13.5/13/12.5/12 seconds"
                ]
            },
            {
                "name": "Ultimate  - Divine Judgement",
                "description": "Nemesis chooses a single enemy god, reducing their Health and movement speed and stealing a portion of their Protections for a time period. Her movement speed is also increased during this time.",
                "imageURL": require("../assets/images/Nemesis_ability_4.png"),
                "notes": [
                    "If multiple gods are in the radius, it will target the one closest to the center of the ability.",
                    "Damage: 15/17.5/20/22.5/25% of current HP (+20% of your Physical Power)",
                    "Protections: 25%",
                    "Move Speed: 10/12.5/15/17.5/20%",
                    "Target Debuff Duration: 5s",
                    "Nemesis Buff Duration: 5s",
                    "Ability Type: Target, Debuff, Damage",
                    "Range/Radius: 55/10",
                    "Cost: 90/95/100/105/110 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Nike",
        "Attributes": {
            "Title:": "Goddess of Victory",
            "Pantheon:": "Greek",
            "Type:": "Melee,Physical",
            "Class:": "Warrior",
            "Pros:": "High Defense, Medium Crowd Control",
            "Difficulty:": "Easy",
            "Release date:": "December 6, 2016",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Nike voicelines",
            "Voice actor:": "Elizabeth Maxwell",
            "Health:": "500 (+87)",
            "Mana:": "220 (+38)",
            "Speed:": "375 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+1.2%)",
            "Damage:": "37 (+ 2)+ 100% of Physical Power",
            "Progression:": "1/1/1.5x damage and swing time",
            "Physical:": "15 (+3)",
            "Magical:": "24 (+1.3)",
            "HP5:": "10 (+0.8)",
            "MP5:": "4.6 (+0.39)",
            "imageURL": require("../assets/images/Nike.png")
        },
        "Abilities": [
            {
                "name": "Passive  - To Victory!",
                "description": "Nike sets three goals that the team can achieve to gain increased strength. Upon completing a goal, Nike's team gains a Laurel that increases Power and Movement Speed. This Laurel can increase up to 3 times.",
                "imageURL": require("../assets/images/Nike_ability_0.png"),
                "notes": [
                    "Laurels provide 1% Power and 1% Movement Speed, stacking for a total of 6% Power and 4% Movement Speed.",
                    "Laurels despawn when Nike dies and respawn when she respawns.",
                    "Goal #1: Eliminate 10 Gods as a team.",
                    "Goal #2: Eliminate 250 minions as a team.",
                    "Goal #3: At least two allies are level 20.",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Rend",
                "description": "Nike slams the ground three times, sending out fissures that deal damage. If a target is hit twice, that target loses protections for 5 seconds. If a target is hit three times, that target is disarmed. Nike is immune to Knockback for the duration.",
                "imageURL": require("../assets/images/Nike_ability_1.png"),
                "notes": [
                    "Can deal up to 180/270/360/450/540 (+120% of your Physical Power) damage.",
                    "Damage: 60/90/120/150/180 (+40% of your Physical Power)",
                    "Protections Shred: 8/12/16/20/24",
                    "Disarm Duration: 1/1.25/1.5/1.75/2s",
                    "Ability Type: Line, Disarm, Damage",
                    "Range: 50",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 13 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Barrier Formation",
                "description": "Nike conjures a protective barrier in front of her that blocks ranged Basic Attacks. While focused on the barrier Nike's ability to turn is limited and she is knockback immune. Enemies who get near the barrier are repelled. At any point, Nike can re-fire the ability to collapse the barrier and deal damage to enemies in front of the barrier.",
                "imageURL": require("../assets/images/Nike_ability_2.png"),
                "notes": [
                    "Can deal up to 160/260/360/460/560 (+90% of your Physical Power) damage.",
                    "Nike suffers a 50% Movement Speed Slow while channeling.",
                    "Doesn't block AoE ranged basic attacks.",
                    "Damage: 80/140/200/260/320 (+50% of your Physical Power)",
                    "Repel Damage: 10/15/20/25/30 (+5% of your Physical Power)",
                    "Duration: 4s",
                    "Ability Type: Cone, Knockback, Damage",
                    "Radius: 25",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 15/14.5/14/13.5/13 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Valiant Leap",
                "description": "Nike leaps into the air, then crashes down at a location dealing damage and knocking up enemies.",
                "imageURL": require("../assets/images/Nike_ability_3.png"),
                "notes": [
                    "This ability's knockup and damage can be canceled if hit by CC on landing.",
                    "Damage: 80/130/180/230/280 (+60% of your Physical Power)",
                    "Ability Type: Circle, Leap, Damage",
                    "Range/Radius: 55/15",
                    "Cost: 55/60/65/70/75 mana",
                    "Cooldown: 16 seconds"
                ]
            },
            {
                "name": "Ultimate  - Sentinel of Zeus",
                "description": "Nike transforms into an armored sentinel and sends out a shockwave that damages and slows enemies around her. While in this form, she gains a percentage of her max health as a shield that lasts for 10 seconds.",
                "imageURL": require("../assets/images/Nike_ability_4.png"),
                "notes": [
                    "Nike is immune from crowd control effects for a brief duration immediately after using this ability.",
                    "Does not protect from execute effects.",
                    "Damage: 200/250/300/350/400 (+70% of your Physical Power)",
                    "Slow: 40%",
                    "Shield: 25/27.5/30/32.5/35% of Max Health",
                    "Slow Duration: 4s",
                    "Ability Type: Circle, Slow, Damage",
                    "Radius: 40",
                    "Cost: 90/95/100/105/110 mana",
                    "Cooldown: 90/85/80/75/70 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Nox",
        "Attributes": {
            "Title:": "Goddess of Night",
            "Pantheon:": "Roman",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "High Crowd Control",
            "Difficulty:": "Average",
            "Release date:": "October 29, 2014",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Nox voicelines",
            "Voice actor:": "Laura Post",
            "Health:": "365 (+75)",
            "Mana:": "250 (+38)",
            "Speed:": "360 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "1 (+0.8%)",
            "Damage:": "34 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "18 (+2.6)",
            "Magical:": "23 (+1.3)",
            "HP5:": "8 (+0.6)",
            "MP5:": "5 (+0.4)",
            "imageURL": require("../assets/images/Nox.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Flame of the Night",
                "description": "Nox’s candles gather energy from all abilities she uses. For every ability Nox casts, a candle is lit. For every candle lit Nox gains +5% magical power. When Nox takes damage from an enemy god one of her candles is blown out.",
                "imageURL": require("../assets/images/Nox_ability_0.png"),
                "notes": [
                    "Stacks up to 4 times for a total of 20% bonus Magical Power.",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Shadow Lock",
                "description": "Nox extends her shadow forward, damaging enemies. If this shadow hits an enemy god it stops, rooting and crippling them in place and dealing damage over time instead. Nox must channel and stay within range to maintain hold on the target, but may cancel this ability early. Nox will continue to channel this ability even if she is hit by Crowd Control effects. While channeling this ability Nox suffers no directional movement penalty.",
                "imageURL": require("../assets/images/Nox_ability_1.png"),
                "notes": [
                    "It isn't affected by crowd control reduction or diminishing returns.",
                    "Nox can move while channeling, but she'll be facing her target for the duration.",
                    "Instant cast relics can be used without interrupting it.",
                    "Can deal up to 120/160/200/240/280 (+80% of your Magical Power) damage to gods.",
                    "Minion Damage: 80/125/170/215/260 (+60% of your Magical Power)",
                    "Damage Over Time: 30/40/50/60/70 (+20% of your Magical Power) every 0.5s",
                    "Duration: 2s",
                    "Ability Type: Line, Crowd Control, Damage",
                    "Range: 65",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 10 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Siphon Darkness",
                "description": "Nox creates a void of darkness that silences all enemies within. After a short duration it explodes, dealing damage.",
                "imageURL": require("../assets/images/Nox_ability_2.png"),
                "notes": [
                    "Damage: 90/160/230/300/370 (+110% of your Magical Power)",
                    "Duration: 2s",
                    "Ability Type: Circle, Silence, Damage",
                    "Range/Radius: 55/20",
                    "Cost: 70/75/80/85/90 mana",
                    "Cooldown: 13 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Shadow Step",
                "description": "Nox dashes forward, dealing damage to all enemies. If she hits an allied god, she leaps into their shadow, traveling with them. When Nox exits a shadow, she deals damage again in a radius around her. Nox may cancel this ability early to exit shadows.",
                "imageURL": require("../assets/images/Nox_ability_3.png"),
                "notes": [
                    "Nox is untargetable while hidden and can stay hidden for up to 8s.",
                    "If the targeted ally enters a state where they are no longer on the ground, Nox will be unable to leave them until they land even if the 8s are up.",
                    "If the targeted ally dies while Nox is hidden, she will automatically eject out.",
                    "Can deal up to 140/220/300/380/460 (+140% of your Magical Power) damage.",
                    "Has a secondary damage radius of 25.",
                    "Damage: 70/110/150/190/230 (+70% of your Magical Power)",
                    "Ability Type: Dash, Damage",
                    "Range: 55",
                    "Cost: 75 mana",
                    "Cooldown: 15 seconds"
                ]
            },
            {
                "name": "Ultimate  - Night Terror",
                "description": "Nox unleashes a vortex of dark energy that explodes on contact with an enemy god, dealing damage to all enemies in range 20 and applying damage over time. Enemies hit are also weakened, dealing less damage for the duration.",
                "imageURL": require("../assets/images/Nox_ability_4.png"),
                "notes": [
                    "It will also explode on contact with terrain and player made walls.",
                    "Deals a total of 300/375/450/525/600 (+100% of your Magical Power) damage.",
                    "Nox is CC immune while casting this ability.",
                    "Initial Damage: 200/250/300/350/400 (+75% of your Magical Power)",
                    "Damage: 20/25/30/35/40 (+5% of your Magical Power) every 1s for 5s",
                    "Damage Reduction: 30% for 5s",
                    "Ability Type: Line, Debuff, Damage",
                    "Range: 120/20",
                    "Cost: 100 mana",
                    "Cooldown: 90/85/80/75/70 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Nu Wa",
        "Attributes": {
            "Title:": "Guardian of Heaven",
            "Pantheon:": "Chinese",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "Pusher",
            "Difficulty:": "Easy",
            "Release date:": "December 5, 2013",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Nu Wa voicelines",
            "Voice actor:": "Stephanie Young",
            "Health:": "400 (+75)",
            "Mana:": "265 (+43)",
            "Speed:": "355 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "1 (+1.7%)",
            "Damage:": "35 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "9 (+2.7)",
            "Magical:": "23 (+1.3)",
            "HP5:": "7 (+0.45)",
            "MP5:": "4.6 (+0.43)",
            "imageURL": require("../assets/images/Nu_Wa.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Strength of Wood",
                "description": "After 5 successful Basic Attacks, Nu Wa's next Basic Attack will Root enemies.",
                "imageURL": require("../assets/images/Nu_Wa_ability_0.png"),
                "notes": [
                    "The buff is spent even if the basic attack misses.",
                    "Root Duration: 1.5s",
                    "Ability Type: Ranged Basic, Root",
                    "Range: 65"
                ]
            },
            {
                "name": "1st Ability  - Mysterious Fog",
                "description": "Nu Wa condenses moisture into fog at her location which then rolls forward away from her. She and all allies are Stealthed while inside the fog, and have increased movement speed. Attacking breaks the Stealth effect for 1s.Enemies that run into the fog take damage, and continue to take additional damage again every second they are in the fog.",
                "imageURL": require("../assets/images/Nu_Wa_ability_1.png"),
                "notes": [
                    "Nu Wa condenses moisture into fog at her location which then rolls forward away from her. She and all allies are Stealthed while inside the fog, and have increased movement speed. Attacking breaks the Stealth effect for 1s.\nEnemies that run into the fog take damage, and continue to take additional damage again every second they are in the fog.",
                    "If a stealthed unit enters an enemy structure's attack range, they'll be revealed.",
                    "Can deal up to 100/175/250/325/400 (+100% of your Magical Power) damage.",
                    "Damage: 50/75/100/125/150 (+50% of your Magical Power)",
                    "Damage per Tick: 10/20/30/40/50 (+10% of your Magical Power)",
                    "Lifetime: 6s",
                    "Movement Speed: 10%",
                    "Ability Type: Circle, Buff, Damage",
                    "Range/Radius: 110/20",
                    "Fog Movement Speed: 300/320/340/360/380",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 13 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Clay Soldiers",
                "description": "Nu Wa conjures Clay Soldiers from the Earth. If she marked a target while summoning them, they will pursue that target until it dies. If she summoned them with no target, they will attack enemy gods who damage Nu Wa, or closest enemies.Soldiers live for 10s. First they will dash at enemies within 30 units, dealing damage and applying a stack of protection reduction. Stacks up to 3 times, stacks last 2s. They will basic attack after that.",
                "imageURL": require("../assets/images/Nu_Wa_ability_2.png"),
                "notes": [
                    "Nu Wa conjures Clay Soldiers from the Earth. If she marked a target while summoning them, they will pursue that target until it dies. If she summoned them with no target, they will attack enemy gods who damage Nu Wa, or closest enemies.\nSoldiers live for 10s. First they will dash at enemies within 30 units, dealing damage and applying a stack of protection reduction. Stacks up to 3 times, stacks last 2s. They will basic attack after that.",
                    "The soldiers have a base Movement Speed of 365/380/395/410/425, reduce up to 8/14/20/26/48 Magical Protections and don't remove backdoor protections from towers and phoenixes.",
                    "The soldiers' dash attacks can apply item effects but their basic attacks don't.",
                    "If there are no enemies nearby, the soldiers will march down the lane.",
                    "Summoning soldiers while the previous ones are still active will destroy the oldest ones.",
                    "Number Conjured: 2/2/2/2/3 Soldiers",
                    "Soldier's Health: 200 (+20% of your Maximum Health)",
                    "Dash Magical Protection Reduction Per Stack: 4/7/10/13/16",
                    "Basic Attack Damage: 20/30/40/50/60 Per Hit",
                    "Ability Type: Circle, Pet, Damage",
                    "Range/Radius: 40/10",
                    "Cost: 60/70/80/90/100 mana",
                    "Cooldown: 16 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Shining Metal",
                "description": "Nu Wa launches a mass of shining metal, damaging all enemies it hits. If it hits one of her Clay Soldiers, it explodes, dealing additional damage and Stunning enemies.",
                "imageURL": require("../assets/images/Nu_Wa_ability_3.png"),
                "notes": [
                    "Has an explosion radius of 20.",
                    "Targets hit by multiple exploding minions will only be affected by one of the explosions.",
                    "Any effects boosting the initial projectile's damage will also affect the explosions'.",
                    "Deals 120/190/260/330/400 (+100% of your Magical Power) damage if it hits at least one soldier.",
                    "The projectile isn't consumed upon impact with the soldiers, and will continue moving the full distance.",
                    "Damage: 90/130/170/210/250 (+75% of your Magical Power)",
                    "Minion Explode: 30/60/90/120/150 (+25% of your Magical Power)",
                    "Minion Stun: 1/1.1/1.2/1.3/1.4s",
                    "Ability Type: Line, Damage",
                    "Range: 55",
                    "Cost: 50 mana",
                    "Cooldown: 9 seconds"
                ]
            },
            {
                "name": "Ultimate  - Fire Shards",
                "description": "Nu Wa flies up into the clouds, gaining visibility on all enemy gods, and summoning fire shards from the sky to damage each of them. As she lifts off the ground, she can pass through player-made deployables.",
                "imageURL": require("../assets/images/Nu_Wa_ability_4.png"),
                "notes": [
                    "Nu Wa dashes 40 units forward before becoming untargetable as well as becoming immune to crowd control during the ability.",
                    "Enemy gods that die while being revealed by it will grant an assist to Nu Wa, even if the damage portion doesn't hit them.",
                    "Damage: 100/170/240/310/380 (+25% of your Magical Power)",
                    "Ability Type: Damage",
                    "Cost: 100 mana",
                    "Cooldown: 120 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Nut",
        "Attributes": {
            "Title:": "Goddess of the Sky",
            "Pantheon:": "Egyptian",
            "Type:": "Ranged,Physical",
            "Class:": "Hunter",
            "Pros:": "Medium Area Damage. High Attack Speed",
            "Difficulty:": "Average",
            "Release date:": "February 20, 2024",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Nut voicelines",
            "Voice actor:": "Suehyla El-Attar Young",
            "Health:": "480 (+76)",
            "Mana:": "230 (+37)",
            "Speed:": "370 (+0)",
            "Range:": "52.2 (+0)",
            "Attack/Sec:": "1 (+1.7%)",
            "Damage:": "35 (+ 2.7)+ 100% of Physical Power",
            "Progression:": "None",
            "Physical:": "13 (+2.9)",
            "Magical:": "23 (+1.3)",
            "HP5:": "7 (+0.71)",
            "MP5:": "4.5 (+0.4)",
            "imageURL": require("../assets/images/Nut.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Flux",
                "description": "When Nut hits an enemy god with a damaging ability, she gains a stacking Attack Speed buff for 5s. Nut may gain multiple stacks from a single ability.",
                "imageURL": require("../assets/images/Nut_ability_0.png"),
                "notes": [
                    "Each stack provides 4% attack speed (2.1% at level 1) while all stacks provide 40% attack speed (21% at level 1) at level 20.",
                    "Each stack refreshes the buff's duration.",
                    "Attack Speed Buff: 2% + 0.1% per level",
                    "Max Stacks: 10",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Convergence",
                "description": "Nut enhances her Basic Attacks, firing 2 additional damaging projectiles from her sides at a converging angle. All projectiles pierce enemies but not walls, with the center dealing Basic Attack damage and the sides dealing ability damage. Nut always shoots at least once, but may fire up to an additional 4 shots by gaining stacks when damaging enemies with Basic Attacks. Nut gains 2 stacks for damaging enemy gods. Nut may cancel this ability to refund unused shots as stacks.",
                "imageURL": require("../assets/images/Nut_ability_1.png"),
                "notes": [
                    "The projectiles can deal up to 30/70/110/150/190 (+150% of your Physical Power) damage with all possible enhanced basic attacks (5 total).",
                    "Basic Attacks deal 45/50/55/60/65% damage, can proc item effects, benefit from only 33% lifesteal and can crit while active.",
                    "Center Damage Reduction: 55/50/45/40/35%",
                    "Side Damage: 3/7/11/15/19 (+15% of your Physical Power)",
                    "Stacks per Shot: 4",
                    "Ability Type: Area Basic, Buff",
                    "Range: 55",
                    "Cost: 45/50/55/60/65 mana",
                    "Cooldown: 13 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Crashing Comet",
                "description": "Nut calls down a comet from the sky, which crashes in a circular area, dealing damage. After it lands, it sends out a damaging shockwave in a larger area. Enemies hit by the comet take a second instance of damage and are Rooted, while enemies in the shockwave are Trembled.",
                "imageURL": require("../assets/images/Nut_ability_2.png"),
                "notes": [
                    "Can deal up to 100/150/200/250/300 (+80% of your Physical Power) damage.",
                    "Damage: 50/75/100/125/150 (+40% of your Physical Power)",
                    "Root: 0.9/1/1.1/1.2/1.3s",
                    "Tremble: 0.25s",
                    "Ability Type: Circle, Crowd Control, Damage",
                    "Range/Radius: 55/25, 10",
                    "Cost: 65 mana",
                    "Cooldown: 15 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Warp",
                "description": "Nut warps in the direction she is currently traveling. After she warps, she automatically fires 3 homing projectiles that spread out among nearby enemies, prioritizing gods. These projectiles deal damage and apply a stacking Slow to enemies. Additionally, Nut resets the cooldown of Convergence after using this ability.",
                "imageURL": require("../assets/images/Nut_ability_3.png"),
                "notes": [
                    "Deals up to 45/75/105/135/165 (+60% of your Physical Power) damage and applies up to a 30% slow to a single target.",
                    "Damage: 15/25/35/45/55 (+20% of your Physical Power)",
                    "Slow: 10%",
                    "Duration: 3s",
                    "Ability Type: Circle, Teleport, Damage",
                    "Range/Radius: 15/45",
                    "Cost: 40/45/50/55/60 mana",
                    "Cooldown: 12/11.5/11/10.5/10 seconds"
                ]
            },
            {
                "name": "Ultimate  - Skyfall",
                "description": "Nut becomes Crowd Control immune and gathers all her energy, flying high into the air and becoming untargetable for 3s. Nut then may move and aim before firing a massive black hole toward the battleground that lands after a short delay, dealing damage to all enemies. After the black hole lands, a gravity surge extends outward, damaging and pulling all enemies toward the center. Nut then lands, returning to her initial location.",
                "imageURL": require("../assets/images/Nut_ability_4.png"),
                "notes": [
                    "Can deal up to 280/360/440/520/600 (+120% of your Physical Power) damage.",
                    "Has a deploy range of 70.",
                    "Nut is self rooted during the pre-fire (1s).",
                    "Initial Damage: 200/260/320/380/440 (+80% of your Physical Power)",
                    "Surge Damage: 80/100/120/140/160 (+40% of your Physical Power)",
                    "Ability Type: Circle, Knockup, Damage",
                    "Radius: 20, 40",
                    "Cost: 100 mana",
                    "Cooldown: 100 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Odin",
        "Attributes": {
            "Title:": "The Allfather",
            "Pantheon:": "Norse",
            "Type:": "Melee,Physical",
            "Class:": "Warrior",
            "Pros:": "High Crowd Control, High Area Damage",
            "Difficulty:": "Easy",
            "Release date:": "May 31, 2012",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Odin voicelines",
            "Voice actor:": "Bob Carter",
            "Health:": "470 (+83)",
            "Mana:": "200 (+35)",
            "Speed:": "370 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+1.1%)",
            "Damage:": "38 (+ 2)+ 100% of Physical Power",
            "Progression:": "1/1/1/1.5x damage and swing time",
            "Physical:": "16 (+3)",
            "Magical:": "24 (+1.3)",
            "HP5:": "9 (+0.63)",
            "MP5:": "4.1 (+0.4)",
            "imageURL": require("../assets/images/Odin.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Path to Valhalla",
                "description": "Odin is empowered as he escorts fallen warriors to Valhalla. Whenever any god dies on the battleground, Odin gains a bonus to Movement Speed and Power. This effect can stack up to 4 times.",
                "imageURL": require("../assets/images/Odin_ability_0.png"),
                "notes": [
                    "Grants up to 40% Physical Power and 20% Movement Speed.",
                    "Duration: 8s",
                    "Movement Speed per stack: 5%",
                    "Power per stack: 10%",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Lunge",
                "description": "Odin lunges to his target location, doing damage to all nearby enemies.",
                "imageURL": require("../assets/images/Odin_ability_1.png"),
                "notes": [
                    "Damage: 120/165/210/255/300 (+70% of your Physical Power)",
                    "Ability Type: Circle, Leap, Damage",
                    "Range/Radius: 55/20",
                    "Cost: 45/50/55/60/65 mana",
                    "Cooldown: 14/13.5/13/12.5/12 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Raven Shout",
                "description": "Odin summons a flock of Ravens that create a Shield around him. When the Shield expires it explodes outward, dealing damage to nearby enemies based on how much Health it had remaining. The Shield will not expire while Odin is using Lunge, and will always detonate upon landing, dealing bonus damage.",
                "imageURL": require("../assets/images/Odin_ability_2.png"),
                "notes": [
                    "Does not protect from execute effects.",
                    "Deals 115/201/287/374/460 (+57% of your Physical Power) bonus damage when using Lunge.",
                    "Shield Health: 100/160/220/280/340 (+50% of your Physical Power)",
                    "Duration: 4s",
                    "Bonus Damage: 15%",
                    "Ability Type: Circle, Buff, Damage",
                    "Radius: 20",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 14/13.5/13/12.5/12 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Gungnir's Might",
                "description": "Odin begins empowering Gungnir with Runic Magic, becoming immune to knockbacks. Every second, Gungnir changes runes and Odin pulses out damage around him, slowing enemies for 2s. When Odin releases Gungnir it travels forward, damaging enemies and stopping on the first god hit. The first rune causes allies around Odin to gain Attack Speed for 3s. The second allows Gungnir to stun.",
                "imageURL": require("../assets/images/Odin_ability_3.png"),
                "notes": [
                    "Can deal up to 130/245/360/475/590 (+120% of your Physical Power) damage.",
                    "Pulse Damage: 35/65/95/125/155 (+30% of your Physical Power)",
                    "Pulse Slow: 20%",
                    "Gungnir Damage: 60/115/170/225/280 (+60% of your Physical Power)",
                    "Attack Speed: 30%",
                    "Stun Duration: 1.2s",
                    "Ability Type: Line, Crowd Control, Damage",
                    "Range/Radius: 60/20",
                    "Cost: 70/75/80/85/90 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "Ultimate  - Ring of Spears",
                "description": "Odin summons a wall of spears. Enemies inside the ring cannot heal and have their power reduced by 15%. Odin is immune to Slows and Roots while in his Ring. A portion of the wall can be destroyed when hit by 5 Basic Attacks. Enemies that leave the ring through or over a wall are chased by Gungnir, taking damage and becoming slowed for 2.5s. Enemies that die inside Ring of Spears grant Odin a permanent bonus to Physical Power.",
                "imageURL": require("../assets/images/Odin_ability_4.png"),
                "notes": [
                    "Odin doesn't need to land the killing blow to gain a stack.",
                    "Grants up to 50 Physical Power.",
                    "Damage: 120/190/260/330/400 (+75% of your Physical Power)",
                    "Duration: 5s",
                    "Physical Power: 5 Power per stack, max 10 stacks.",
                    "Healing Reduction: All Healing",
                    "Slow: 25%",
                    "Ability Type: Area, Buff, Damage",
                    "Radius: 30",
                    "Cost: 100 mana",
                    "Cooldown: 110/105/100/95/90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Olorun",
        "Attributes": {
            "Title:": "Ruler of the Heavens",
            "Pantheon:": "Yoruba",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "High Attack Speed",
            "Difficulty:": "Average",
            "Release date:": "June 25, 2019",
            "Favor:": "(Free) 0",
            "Gems:": "(Free) 0",
            "Voicelines:": "Olorun voicelines",
            "Voice actor:": "Bob Carter",
            "Health:": "450 (+75)",
            "Mana:": "240 (+58)",
            "Speed:": "370 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "1.05 (+1.5%)",
            "Damage:": "40 (+ 2.38)+ 25% of Magical Power",
            "Progression:": "None",
            "Physical:": "13 (+3)",
            "Magical:": "23 (+1.3)",
            "HP5:": "7 (+0.45)",
            "MP5:": "5 (+0.4)",
            "imageURL": require("../assets/images/Olorun.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Touch of Fate",
                "description": "Upon reaching 100 Magical Power from Items, Olorun gains 20% Critical Hit Chance and a further 2% per 12 Magical Power from Items.Olorun's Critical hits only deal 40% increased damage.Additionally Olorun gains 5% extra scaling on his basic attacks.",
                "imageURL": require("../assets/images/Olorun_ability_0.png"),
                "notes": [
                    "Upon reaching 100 Magical Power from Items, Olorun gains 20% Critical Hit Chance and a further 2% per 12 Magical Power from Items.",
                    "Olorun's Critical hits only deal 40% increased damage.",
                    "Additionally Olorun gains 5% extra scaling on his basic attacks.",
                    "Requires a total of 580 Magical Power to reach the max (100%) Crit Chance.",
                    "Critical Hit Chance: 2% per 12 Magical Power from Items",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Focused Light",
                "description": "Olorun charges an orb of pure energy for up to 2s before firing it in front of him. Charging the ability increases the range and damage of the orb. This ability passes through and damages Enemy minions but stops and collides with Enemy gods.This ability can Critically Hit and can provide stacks of Overflowing Divinity.",
                "imageURL": require("../assets/images/Olorun_ability_1.png"),
                "notes": [
                    "Olorun charges an orb of pure energy for up to 2s before firing it in front of him. Charging the ability increases the range and damage of the orb. This ability passes through and damages Enemy minions but stops and collides with Enemy gods.\nThis ability can Critically Hit and can provide stacks of Overflowing Divinity.",
                    "Has a minimum range of 45 and can extend up to 200 while in Sanctified Field.",
                    "Deals up to 132/186/240/294/348 (+66% of your Magical Power) at full charge.",
                    "Damage: 110/155/200/245/290 (+55% of your Magical Power)",
                    "Damage Increase: 20%",
                    "Ability Type: Line, Damage",
                    "Range: 110",
                    "Cost: 50/60/70/80/90 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Overflowing Divinity",
                "description": "Olorun gains amplified Attack Speed. Every successful attack on an Enemy during the buff provides his inner Sun with energy, to a cap of 20 stacks.During the buff or for 4s after, Olorun can refire this ability to conjure the Sun to damage Enemies in an area. The Sun emits projectiles faster and more randomly with higher ammo. Hitting the same Enemy deals 20% less damage each time, to a maximum of 90% reduction.",
                "imageURL": require("../assets/images/Olorun_ability_2.png"),
                "notes": [
                    "Olorun gains amplified Attack Speed. Every successful attack on an Enemy during the buff provides his inner Sun with energy, to a cap of 20 stacks.",
                    "During the buff or for 4s after, Olorun can refire this ability to conjure the Sun to damage Enemies in an area. The Sun emits projectiles faster and more randomly with higher ammo. Hitting the same Enemy deals 20% less damage each time, to a maximum of 90% reduction.",
                    "Can deal up to 225/315/405/495/585 (+100% of your Magical Power) damage with 20 stacks.",
                    "Attack Speed: 40%",
                    "Duration: 4/4.5/5/5.5/6s",
                    "Damage: 50/70/90/110/130 (+25% of your Magical Power)",
                    "Ability Type: Circle, Buff, Damage",
                    "Range/Radius: 65/15",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Consecration",
                "description": "Olorun expends the light within himself knocking back and damaging nearby Enemies as well as slowing them for 2s.Olorun and allies are bathed in the light, gaining a heal over time that ticks every second for 5s. For every ally god healed, Olorun gains Physical and Magical protections.",
                "imageURL": require("../assets/images/Olorun_ability_3.png"),
                "notes": [
                    "Olorun expends the light within himself knocking back and damaging nearby Enemies as well as slowing them for 2s.\nOlorun and allies are bathed in the light, gaining a heal over time that ticks every second for 5s. For every ally god healed, Olorun gains Physical and Magical protections.",
                    "Heals a total of 60/90/120/150/180 health and provides up to 32/40/48/56/64 protections if 4 allies are healed from this ability.",
                    "This damage does not stack Overflowing Divinity.",
                    "Damage: 60/80/100/120/140 (+20% of your Magical Power)",
                    "Heal per Tick: 10/15/20/25/30",
                    "Protections: 8/10/12/14/16 per ally god healed",
                    "Slow: 30%",
                    "Ability Type: Circle, Knockback, Damage",
                    "Radius: 20",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "Ultimate  - Sanctified Field",
                "description": "Olorun brings forth Olodumare and Olofi who travel outwards, creating a large area of divine energy that distorts the flow of time within.All Enemies caught in the area are negatively affected by the time dilation, attacking, casting and even animating more slowly.Olorun himself benefits from the Sanctified Field in a similar way.The strength of the divine field also impacts the effect of buffs, debuffs, projectiles and deployables.",
                "imageURL": require("../assets/images/Olorun_ability_4.png"),
                "notes": [
                    "Olorun brings forth Olodumare and Olofi who travel outwards, creating a large area of divine energy that distorts the flow of time within.",
                    "All Enemies caught in the area are negatively affected by the time dilation, attacking, casting and even animating more slowly.",
                    "Olorun himself benefits from the Sanctified Field in a similar way.",
                    "The strength of the divine field also impacts the effect of buffs, debuffs, projectiles and deployables.",
                    "Olorun also gains 40% Crowd Control Reduction while in the area.",
                    "Enemy Debuff: 40% slower",
                    "Self Buff: 30% faster",
                    "Area Duration: 5s",
                    "Ability Type: Line, Buff",
                    "Range: 85",
                    "Cost: 100 mana",
                    "Cooldown: 120/115/110/105/100 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Osiris",
        "Attributes": {
            "Title:": "Broken God of the Afterlife",
            "Pantheon:": "Egyptian",
            "Type:": "Melee,Physical",
            "Class:": "Warrior",
            "Pros:": "High Defense, High Attack Speed",
            "Difficulty:": "Hard",
            "Release date:": "May 6, 2014",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Osiris voicelines",
            "Voice actor:": "Mike McFarland",
            "Health:": "485 (+88)",
            "Mana:": "230 (+40)",
            "Speed:": "375 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+1.3%)",
            "Damage:": "39 (+ 2.25)+ 100% of Physical Power",
            "Progression:": "0.5/1/0.5/1x damage. The last two attacks hit all enemies in the melee area.",
            "Physical:": "17 (+3)",
            "Magical:": "23 (+1.3)",
            "HP5:": "9 (+0.8)",
            "MP5:": "4.7 (+0.39)",
            "imageURL": require("../assets/images/Osiris.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Fragmented",
                "description": "Each time Osiris uses an ability he burns away a fragment of his body, gaining Damage Mitigation for each missing fragment. After losing 8 fragments, he becomes his spirit form. He may walk through enemies and enemy blockers, he gains additional Attack Speed, and his Basic Attacks do not incur a movement penalty. This effect lasts for 6 successful Basic Attacks.",
                "imageURL": require("../assets/images/Osiris_ability_0.png"),
                "notes": [
                    "Grants up to 16% Damage Mitigation.",
                    "Damage Mitigation: 2% per missing fragment",
                    "Attack Speed: 30%",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Sickle Strike",
                "description": "Osiris throws his Sickle forward. It passes through minions and stops on the first god hit, dealing damage and Slowing them. If the sickle hits a god, it remains for the duration of the slow. Additionally, the Sickle only deals 75% damage to minions.",
                "imageURL": require("../assets/images/Osiris_ability_1.png"),
                "notes": [
                    "Damage: 80/130/180/230/280 (+45% of your Physical Power)",
                    "Slow Duration: 3s",
                    "Slow: 20%",
                    "Ability Type: Line, Slow, Damage",
                    "Range: 55",
                    "Cost: 30 mana",
                    "Cooldown: 6 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Spirit Flail",
                "description": "Osiris imbues his flail with spiritual energy, striking at the target ground location. Enemies hit take damage, and Osiris gains movement speed. If an enemy is under the effect of Sickle Strike, the target's Slow is increased in power and duration.",
                "imageURL": require("../assets/images/Osiris_ability_2.png"),
                "notes": [
                    "This ability can be fired in walls.",
                    "Damage: 90/145/200/255/310 (+75% of your Physical Power)",
                    "Sickle Slow Increase: 40% for 3s.",
                    "Speed Buff: 20% for 3s.",
                    "Ability Type: Circle, Slow, Damage",
                    "Range/Radius: 55/15",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 11 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Judgement Tether",
                "description": "Osiris flings out mummy wraps, tethering himself to all nearby enemy gods. Targets hit have their Attack Speed reduced and deal reduced damage over the next 4s. The tether can be broken by targets moving far enough away from Osiris. Targets still in range when the duration expires are Stunned.",
                "imageURL": require("../assets/images/Osiris_ability_3.png"),
                "notes": [
                    "Cannot tether gods through walls on the initial cast but gods can remain tethered if Osiris moves to behind a wall afterwards.",
                    "Damage Reduction: 10/12.5/15/17.5/20%",
                    "Attack Speed Reduction: 20/22.5/25/27.5/30%",
                    "Stun Duration: 1.4s",
                    "Ability Type: Circle, Stun",
                    "Radius: 35",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 15 seconds"
                ]
            },
            {
                "name": "Ultimate  - Lord of the Afterlife",
                "description": "Osiris sheds any remaining fragments, gaining the benefit of his Passive, and leaps forward. Osiris targets all enemy gods in the landing area, and rips a fragment of their spirits out, dealing damage, afflicting them with negative Cooldown Reduction, and preventing them from healing. Targets are Rooted for 0.8s during the attack. Enemy minions in the target area also take damage.",
                "imageURL": require("../assets/images/Osiris_ability_4.png"),
                "notes": [
                    "Osiris is immune to Crowd Control effects while leaping.",
                    "Damage: 220/320/420/520/620 (+80% of your Physical Power)",
                    "Negative CDR: -20%",
                    "Healing Reduction: All Healing",
                    "Duration: 6s",
                    "Ability Type: Circle, Leap, Damage",
                    "Area: 60/15",
                    "Cost: 100 mana",
                    "Cooldown: 70 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Pele",
        "Attributes": {
            "Title:": "Goddess of Volcanoes",
            "Pantheon:": "Polynesian",
            "Type:": "Melee,Physical",
            "Class:": "Assassin",
            "Pros:": "High Single Target Damage",
            "Difficulty:": "Average",
            "Release date:": "August 6, 2018",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Pele voicelines",
            "Voice actor:": "Nicole Gose",
            "Health:": "460 (+77)",
            "Mana:": "240 (+40)",
            "Speed:": "375 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+2%)",
            "Damage:": "39 (+ 2.25)+ 100% of Physical Power",
            "Progression:": "1/1/1x damage and swing time",
            "Physical:": "12 (+2.9)",
            "Magical:": "23 (+1.3)",
            "HP5:": "9 (+0.7)",
            "MP5:": "4.3 (+0.4)",
            "imageURL": require("../assets/images/Pele.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Everlasting Flame",
                "description": "When Pele drops below 50% health her flame is set alight, and she gains increased Physical Power, Lifesteal and Ability Lifesteal. This passive has a 20s cooldown.",
                "imageURL": require("../assets/images/Pele_ability_0.png"),
                "notes": [
                    "Provides 50 Physical Power (12 at level 1) at level 20.",
                    "Power: 10+2 per level",
                    "Lifesteal: 45%",
                    "Ability Lifesteal: 15%",
                    "Duration: 6s",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Pyroclast",
                "description": "Pele flourishes and fires out a magma orb ahead of her in a line, dealing damage and granting fuel per enemy hit. Once the fiery projectile reaches maximum distance it hovers for a brief instant, solidifies, and then returns back in pieces, dealing damage to enemies on the way back. The number of shards returning is dependent on the rank of this ability.Pele has 2 charges of this ability.",
                "imageURL": require("../assets/images/Pele_ability_1.png"),
                "notes": [
                    "Pele flourishes and fires out a magma orb ahead of her in a line, dealing damage and granting fuel per enemy hit. Once the fiery projectile reaches maximum distance it hovers for a brief instant, solidifies, and then returns back in pieces, dealing damage to enemies on the way back. The number of shards returning is dependent on the rank of this ability.\nPele has 2 charges of this ability.",
                    "Can deal up to 90/160/230/300/370 (+75%/90%/105%/120%/135% of your Physical Power) damage and costs up to 80/90/100/110/120 mana with both charges.",
                    "Damage: 60/100/140/180/220 (+60% of your Physical Power)",
                    "Return Damage: 30 (+15% of your Physical Power)",
                    "Fuel Gain: 5",
                    "Ability Type: Line, Damage",
                    "Range: 60",
                    "Cost: 40/45/50/55/60 mana",
                    "Cooldown: 15 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Eruption",
                "description": "Pele fiercely erupts energy into the ground, exploding in an area around her, causing damage and Knockup to all enemies.At ranks 3 and 5 the area expands again at a delay, dealing less damage and a smaller Knockup.",
                "imageURL": require("../assets/images/Pele_ability_2.png"),
                "notes": [
                    "Pele fiercely erupts energy into the ground, exploding in an area around her, causing damage and Knockup to all enemies.\nAt ranks 3 and 5 the area expands again at a delay, dealing less damage and a smaller Knockup.",
                    "Has a knockup strength of 280/240/200.",
                    "Enemies can only be damaged and knocked up once regardless of how many rings they were by.",
                    "Inner Damage: 70/115/160/205/250 (+80% of your Physical Power)",
                    "Outer Damage: 140/180/220 (+60% of your Physical Power)",
                    "Ability Type: Circle, Knockup, Damage",
                    "Radius: 15/25/35",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 15 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Magma Rush",
                "description": "Pele churns the land around her, dealing damage to nearby enemies and providing constant movement speed while this ability is active.Toggle this ability again to enter an amplified state, expending more fuel but dealing more damage and providing additional movement speed.This ability has no cooldown but uses fuel and cannot be activated when below 10 fuel.This damage does not trigger Item effects.",
                "imageURL": require("../assets/images/Pele_ability_3.png"),
                "notes": [
                    "Pele churns the land around her, dealing damage to nearby enemies and providing constant movement speed while this ability is active.",
                    "Toggle this ability again to enter an amplified state, expending more fuel but dealing more damage and providing additional movement speed.",
                    "This ability has no cooldown but uses fuel and cannot be activated when below 10 fuel.",
                    "This damage does not trigger Item effects.",
                    "Total Damage: 200/300/400/500/600 (+100% of your Physical Power) damage.",
                    "Total Amplified Damage: 200/350/500/650/800 (+200% of your Physical Power) damage.",
                    "Damage is dealt every 0.5s while active and fuel generates every 1s while inactive.",
                    "Amplified state costs 10 fuel every 0.5s and costs up to 100 fuel.",
                    "Can be used for 10s total by default and 5s in amplified.",
                    "Damage: 10/15/20/25/30 (+5% of your Physical Power)",
                    "Speed: 30%",
                    "Amplified Damage: 20/35/50/65/80 (+20% of your Physical Power)",
                    "Amplified Speed: 60%",
                    "Initial Fuel Cost: 5",
                    "Ability Type: Circle, Buff, Damage",
                    "Radius: 10",
                    "Cost: 10 mana",
                    "Cooldown: 0 seconds"
                ]
            },
            {
                "name": "Ultimate  - Volcanic Lightning",
                "description": "After a short warm up, Pele dashes forwards dealing massive damage and a slow to the first enemy God hit, and dealing additional damage to enemies behind in a cone.For the next 10 seconds or 4 attacks, every time Pele hits an enemy with a basic attack, she instead deals ability damage in a cone originating from that enemy. During this time Pele's basic attacks deal 50% reduced damage.",
                "imageURL": require("../assets/images/Pele_ability_4.png"),
                "notes": [
                    "After a short warm up, Pele dashes forwards dealing massive damage and a slow to the first enemy God hit, and dealing additional damage to enemies behind in a cone.\nFor the next 10 seconds or 4 attacks, every time Pele hits an enemy with a basic attack, she instead deals ability damage in a cone originating from that enemy. During this time Pele's basic attacks deal 50% reduced damage.",
                    "Pele is immune from crowd control effects while dashing.",
                    "Can deal up to 580/825/1070/1315/1560 (+220% of your Physical Power) damage to a single target.",
                    "Damage: 180/265/350/435/520 (+60% of your Physical Power)",
                    "Cone Damage: 100/140/180/220/260 (+40% of your Physical Power)",
                    "Slow: 20/25/30/35/40%",
                    "Slow Duration: 3s",
                    "Ability Type: Cone, Slow, Damage",
                    "Range: 60/35",
                    "Cost: 100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Persephone",
        "Attributes": {
            "Title:": "Queen of the Underworld",
            "Pantheon:": "Greek",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "High Area Damage",
            "Difficulty:": "Hard",
            "Release date:": "August 20, 2019",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Persephone voicelines",
            "Voice actor:": "Allegra Clark",
            "Health:": "370 (+75)",
            "Mana:": "280 (+55)",
            "Speed:": "360 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.95 (+0.95%)",
            "Damage:": "34 (+ 1.7)+ 20% of Magical Power",
            "Progression:": "7.5 AoE Harvest Activation",
            "Physical:": "9 (+2.7)",
            "Magical:": "23 (+1.3)",
            "HP5:": "7 (+0.45)",
            "MP5:": "5 (+0.42)",
            "imageURL": require("../assets/images/Persephone.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Pomegranate Seeds",
                "description": "When Persephone dies she travels to the plane of death where she can place 6 Harvest Seeds that will sprout when she respawns. Additionally, each time one of her Harvest plants wither she gains a Pomegranate Seed which can be sold at the fountain for 3g. Persephone can hold 100 seeds.",
                "imageURL": require("../assets/images/Persephone_ability_0.png"),
                "notes": [
                    "Persephone's ghost state duration is the same as her respawn time and may cancel it at any time to return to the normal death state.",
                    "Seeds have a deploy range of 30 and can be sold for a maximum of 300 gold with 100 seeds.",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Bone Rush",
                "description": "Persephone calls forth a Skeletal Warrior from the underworld. This warrior charges forward, damaging minions and stopping on gods. Enemy gods hit are slowed for 2.5s. Wherever it stops its skull falls, becoming a Harvest Skull.",
                "imageURL": require("../assets/images/Persephone_ability_1.png"),
                "notes": [
                    "Damage: 100/150/200/250/300 (+90% of your Magical Power)",
                    "Slow: 20/22.5/25/27.5/30%",
                    "Ability Type: Line, Slow, Damage",
                    "Range: 65",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 12/11.5/11/10.5/10 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Harvest",
                "description": "Persephone summons an explosion at a target location that places 3 Harvest Skulls. She can activate these Harvest plants with her Basic Attacks. When the Skulls are activated she restores health to herself. After 4s the Skulls turn into Harvest Flowers. When activated these Flowers charge forward in the direction hit, biting any target that gets close. Enemies recently bitten take reduced damage from other bites, stacking 3 times. She can have up to (5/5/6/6/7) Harvest Plants out at any time.",
                "imageURL": require("../assets/images/Persephone_ability_2.png"),
                "notes": [
                    "Has a prefire of 0.1s.",
                    "Flowers have a base movement speed of 540, an AoE radius of 20 and duration of 3s.",
                    "If the skulls are placed on top of other harvest plants, they will leave a gap of at least 2.5 units before being placed.",
                    "Explosion: 90/140/190/240/290 (+70% of your Magical Power)",
                    "Heal: 18/30/42/54/66",
                    "Bite: 40/57/110/145/180 (+30% of your Magical Power)",
                    "Reduced Damage: 50/75/87.5%",
                    "Ability Type: Circle, Damage",
                    "Range/Radius: 50/12.5",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 13 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Flourish",
                "description": "Persephone floods the ground with necrotic energy that propels her from the ground directly forwards or backwards; based on the direction she is moving. Harvest plants inside the area immediately become Harvest Flowers and activate, charging in the direction Persephone is facing. Enemies caught in this area take damage.",
                "imageURL": require("../assets/images/Persephone_ability_3.png"),
                "notes": [
                    "Explosion: 65/105/145/185/225 (+55% of your Magical Power)",
                    "Range: 45",
                    "Ability Type: Circle, Leap, Damage",
                    "Range/Radius: 45/20",
                    "Cost: 70 mana",
                    "Cooldown: 15/14.5/14/13.5/13 seconds"
                ]
            },
            {
                "name": "Ultimate  - Grasp of Death",
                "description": "Persephone conjures Entrapping Vines that she throws forwards, entrapping the first enemy god or wall it touches. Entrapped gods are crippled and rooted. Vines then spawn from the Entrapped target, seeking nearby enemy gods. Gods bound are crippled, can no longer further than 55 units away, and are slowed while running away from the center. Entrapping Vines are destroyed if hit by 5 Basic Attacks (3 if it trapped a Wall), ending all effects.",
                "imageURL": require("../assets/images/Persephone_ability_4.png"),
                "notes": [
                    "Persephone is CC immune while casting this ability.",
                    "Has a projectile speed of 120.",
                    "Will also stop if the projectile hits a player-made wall.",
                    "The vines cannot bind gods through walls but affected targets can still be debuffed by the cc if they move to behind a wall.",
                    "The entrap duration is not affected by diminishing returns.",
                    "Damage: 175/245/315/385/455 (+85% of your Magical Power)",
                    "Vine Damage: 65/90/115/140/165 (+30% of your Magical Power)",
                    "Slow: 15/17.5/20/22.5/25%",
                    "Duration: 5s",
                    "Ability Type: Line, Crowd Control, Damage",
                    "Range/Radius: Global/55",
                    "Cost: 100/110/120/130/140 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Poseidon",
        "Attributes": {
            "Title:": "God of the Oceans",
            "Pantheon:": "Greek",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "High Area Damage",
            "Difficulty:": "Easy",
            "Release date:": "February 28, 2013",
            "Favor:": "(Free) 0",
            "Gems:": "(Free) 0",
            "Voicelines:": "Poseidon voicelines",
            "Voice actor:": "Richard Epcar",
            "Health:": "380 (+67)",
            "Mana:": "245 (+40)",
            "Speed:": "360 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.95 (+1.2%)",
            "Damage:": "35 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "8 (+2.6)",
            "Magical:": "23 (+1.3)",
            "HP5:": "6 (+0.5)",
            "MP5:": "4.6 (+0.4)",
            "imageURL": require("../assets/images/Poseidon.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Changing Tides",
                "description": "Poseidon's movement speed increases and his abilities do additional damage as his Tide Level increases. Successful Basic Attack hits increase his Tide, and using abilities decreases it.",
                "imageURL": require("../assets/images/Poseidon_ability_0.png"),
                "notes": [
                    "Takes a total of 10 basic attacks to fully charge the Tide.",
                    "High Tide Damage: Abilities deal up to 15% additional damage at max Tide Level",
                    "High Tide Speed: Movement speed increases up to 10% at max Tide Level",
                    "Basic Attacks: +10% Tide Level on Hit",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Tidal Surge",
                "description": "Poseidon summons forth a wave that travels in a line, dealing damage and pushing back all enemies in its path.",
                "imageURL": require("../assets/images/Poseidon_ability_1.png"),
                "notes": [
                    "Deals 115/161/207/253/299 (+80.5% of your Magical Power) damage at max Tide Level.",
                    "Damage: 100/140/180/220/260 (+70% of your Magical Power)",
                    "Tidal Meter: -15% Tide",
                    "Ability Type: Line, Knockback, Damage",
                    "Range: 80",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 10 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Trident",
                "description": "Poseidon activates his Trident, granting additional Attack Speed, Movement Speed and increases his Basic Attack damage by 25% for for 6s. While this effect is active, Poseidon's Basic Attacks also fire two additional shots that apply ability damage and trigger ability on-hit effects. All shots increase Poseidon's Tide on successful hit.",
                "imageURL": require("../assets/images/Poseidon_ability_2.png"),
                "notes": [
                    "Projectiles cannot damage structures, wards nor player-made deployables for the duration.",
                    "Base Damage per Hit: 20/30/40/50/60",
                    "Movement Speed: 10/12.5/15/17.5/20%",
                    "Attack Speed: 10/12.5/15/17.5/20%",
                    "Lifetime: 6s",
                    "Ability Type: Ranged Basic, Buff",
                    "Range: 55",
                    "Cost: 55/60/65/70/75 mana",
                    "Cooldown: 15 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Whirlpool",
                "description": "Poseidon summons a whirlpool at his ground target location that Cripples targets, preventing movement abilities, and creating a Vortex which drags targets toward the center dealing damage every .5s for 3s.",
                "imageURL": require("../assets/images/Poseidon_ability_3.png"),
                "notes": [
                    "Deals up to 90/150/210/270/330 (+120% of your Magical Power) damage by default and 103.5/175.5/241.5/310.5/379.5 (+138% of your Magical Power) damage at max Tide Level.",
                    "Damage: 15/25/35/45/55 (+20% of your Magical Power)",
                    "Tidal Meter: -15% Tide",
                    "Ability Type: Circle, Crowd Control, Damage",
                    "Range/Radius: 55/20",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 15/14/13/12/11 seconds"
                ]
            },
            {
                "name": "Ultimate  - Release the Kraken!",
                "description": "Poseidon releases the Kraken, damaging and Slowing targets in its radius. Enemies in the center of the effect when it spawns take additional damage, are Knocked Up and Stunned.",
                "imageURL": require("../assets/images/Poseidon_ability_4.png"),
                "notes": [
                    "The center of the effect has a radius of 15 and knockup strength of 375.",
                    "Deals a total of 350/420/490/560/630 (+100% of your Magical Power) damage (402.5/483/563.5/644/724.5 (+115% of your Magical Power) damage at max Tide Level) to enemies in the center.",
                    "Damage: 175/210/245/280/315 (+45% of your Magical Power)",
                    "Damage (Center): 175/210/245/280/315 (+55% of your Magical Power)",
                    "Slow: 30%",
                    "Stun (Center): 1/1.25/1.5/1.75/2s",
                    "Tidal Meter: -20% Tide",
                    "Ability Type: Circle, Crowd Control, Damage",
                    "Range/Radius: 45/30",
                    "Cost: 100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Ra",
        "Attributes": {
            "Title:": "Sun God",
            "Pantheon:": "Egyptian",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "High Sustain, Pusher",
            "Difficulty:": "Average",
            "Release date:": "May 31, 2012",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Ra voicelines",
            "Voice actor:": "Chuck Huber",
            "Health:": "385 (+75)",
            "Mana:": "255 (+48)",
            "Speed:": "360 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.88 (+1%)",
            "Damage:": "34 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "10 (+3)",
            "Magical:": "23 (+1.3)",
            "HP5:": "7 (+0.48)",
            "MP5:": "4.8 (+0.44)",
            "imageURL": require("../assets/images/Ra.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Speed of Light",
                "description": "Every time Ra uses an ability, his movement speed is increased.",
                "imageURL": require("../assets/images/Ra_ability_0.png"),
                "notes": [
                    "Provides up to 15% movement speed.",
                    "Each stack refreshes the duration.",
                    "Movement Speed: 5%",
                    "Max Stacks: 3",
                    "Lifetime: 15s",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Celestial Beam",
                "description": "Ra summons a moving beam of intense light from the sky, doing damage to anyone caught under the beam.",
                "imageURL": require("../assets/images/Ra_ability_1.png"),
                "notes": [
                    "Damage: 95/155/215/275/335 (+100% of your Magical Power)",
                    "Ability Type: Line, Damage",
                    "Range: 80",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 10 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Divine Light",
                "description": "Light starts to emanate from Ra, Stacking a Slow every .5s on enemies near him, and twice as fast on enemies facing him. After 2s, the light detonates, doing damage, applying another Slow stack, and increasing the Slow duration. Any enemies facing Ra at the time of the explosion are also Blinded. Additionally, Ra cleanses himself of slows and becomes immune to Slows for 0.6s when activated.",
                "imageURL": require("../assets/images/Ra_ability_2.png"),
                "notes": [
                    "Slows up to 25% to targets looking away from Ra and up to 50% to targets looking at Ra for its full duration.",
                    "Enemies looking at Ra while channeling this ability gain slow stacks every 0.25s.",
                    "Damage: 70/120/170/220/270 (+70% of your Magical Power)",
                    "Slow per Stack: 5%",
                    "Detonate Lifetime: 3s",
                    "Ability Type: Circle, Crowd Control, Damage",
                    "Radius: 30",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Solar Blessing",
                "description": "Ra summons a pillar of blessed light that persists for 6s. Allies inside the blessing have increased Protections and Power and are Healed every second. Enemies are damaged every second.",
                "imageURL": require("../assets/images/Ra_ability_3.png"),
                "notes": [
                    "Deals up to 120/192/264/336/408 (+150% of your Magical Power) damage and heals up to 72/144/216/288/360 health.",
                    "The pillar will despawn when Ra dies.",
                    "Damage per Tick: 20/32/44/56/68 (+25% of your Magical Power)",
                    "Heal per Tick: 12/24/36/48/60",
                    "Protections: 10/15/20/25/30",
                    "Physical Power: 10/15/20/25/30",
                    "Magical Power: 20/25/30/35/40",
                    "Ability Type: Circle, Buff, Damage",
                    "Range/Radius: 55/20",
                    "Cost: 65/75/85/95/105 mana",
                    "Cooldown: 15/14.5/14/13.5/13 seconds"
                ]
            },
            {
                "name": "Ultimate  - Searing Pain",
                "description": "Ra calls on the power of the sun to decimate his foes in an extreme blast of heat in front of him, doing damage to all enemies unlucky enough to find themselves in the path. Enemy gods take additional damage based on their maximum Health as True Damage.",
                "imageURL": require("../assets/images/Ra_ability_4.png"),
                "notes": [
                    "Ra is immune from crowd control effects while using this ability.",
                    "Damage: 400/475/550/625/700 (+110% of your Magical Power)",
                    "Additional Damage: 5% of target's maximum health",
                    "Ability Type: Line, Damage",
                    "Range: 120",
                    "Cost: 90 mana",
                    "Cooldown: 80/75/70/65/60 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Raijin",
        "Attributes": {
            "Title:": "Master of Thunder",
            "Pantheon:": "Japanese",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "Pusher, High Mobility",
            "Difficulty:": "Average",
            "Release date:": "February 16, 2016",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Raijin voicelines",
            "Voice actor:": "Ray Hurd",
            "Health:": "385 (+80)",
            "Mana:": "255 (+43)",
            "Speed:": "355 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.87 (+0.9%)",
            "Damage:": "34 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "9 (+3.1)",
            "Magical:": "23 (+1.3)",
            "HP5:": "6 (+0.45)",
            "MP5:": "4.6 (+0.46)",
            "imageURL": require("../assets/images/Raijin.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Charged Tempo",
                "description": "For every 5 abilities cast, Raijin reduces the cooldown of all abilities currently on cooldown (including the one just cast) by 1.5s. Additionally, Raijin's Basic Attacks have a wider radius (+2) and reduce his non-ultimate cooldowns by 0.2s.",
                "imageURL": require("../assets/images/Raijin_ability_0.png"),
                "notes": [
                    "Raijin's basic attacks have a radius of 4.5.",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Percussive Storm",
                "description": "Raijin pounds his drums sending forth a peal of thunder in a line, then another, then two at once, each growing wider as it travels. The thunder deals Magical Damage to Enemies it hits.",
                "imageURL": require("../assets/images/Raijin_ability_1.png"),
                "notes": [
                    "Has a shot radius of 4.5 and projectile speed of 115.",
                    "Can deal up to 120/180/240/300/360 (+120% of your Magical Power) damage.",
                    "Damage per Shot: 30/45/60/75/90 (+30% of your Magical Power)",
                    "Ability Type: Line, Damage",
                    "Range: 65",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 10 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Raiju",
                "description": "Raijin marks a target enemy by dismissing his ally Raiju, who deals damage as hides in the enemy's navel. While asleep, Raiju slows and reveals the target to Raijin's team on the minimap. The next time Raijin hits the target, Raiju awakens and claws his way out, doubling the slow and damaging the target and 5 nearby enemies every .5s for 2.5s in his attempt to flee. Enemies hit by the bouncing Raiju take decreased damage.",
                "imageURL": require("../assets/images/Raijin_ability_2.png"),
                "notes": [
                    "The debuff reveals stealthed enemies.",
                    "If multiple targets are in the targeter, it will target the one closest to the center of the ability.",
                    "Deals a total of 120/180/240/300/360 (+90% of your Magical Power) damage and applies a 30% slow to the marked target when damaged.",
                    "Initial Damage: 20/30/40/50/60 (+15% of your Magical Power)",
                    "Damage per Tick: 20/30/40/50/60 (+15% of your Magical Power)",
                    "Bounce Damage per Tick: 14/21/28/53/42 (+10% of your Magical Power)",
                    "Mark Duration: 4s",
                    "Slow: 15%",
                    "Ability Type: Target, Slow, Damage",
                    "Range/Radius: 55/12.5",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 15/14/13/12/11 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Thunder Crash",
                "description": "Raijin sends a bolt of lightning crashing down at his ground target location mesmerizing enemies, while Raijin himself ascends into the sky. Shortly thereafter he crashes down at that location, doing a burst of damage to all enemies in the area.",
                "imageURL": require("../assets/images/Raijin_ability_3.png"),
                "notes": [
                    "Has a mesmerize radius of 15.",
                    "Raijin is briefly untargetable while in the sky.",
                    "Raijin can move freely before teleporting to the selected location.",
                    "Thunder Damage: 60/75/90/105/120 (+50% of your Magical Power)",
                    "Mesmerize Duration: .3s",
                    "Ability Type: Circle, Mesmerize, Damage",
                    "Range/Radius: 60/25",
                    "Cost: 70/75/80/85/90 mana",
                    "Cooldown: 17/16.5/16/15.5/15 seconds"
                ]
            },
            {
                "name": "Ultimate  - Taiko Drums",
                "description": "Passive: Raijin gains increased Attack Speed.Active: Raijin flies above the battlefield, beating his drums 4 times to summon peals of thunder. With each hit, he has a choice of three beats:Beat one: 100% damage.Beat two: Taunt and 50% DamageBeat three: Fear and 50% DamageWhile in the air, Raijin suffers a 20% Movement Speed Slow.",
                "imageURL": require("../assets/images/Raijin_ability_4.png"),
                "notes": [
                    "Passive: Raijin gains increased Attack Speed.",
                    "Active: Raijin flies above the battlefield, beating his drums 4 times to summon peals of thunder. With each hit, he has a choice of three beats:\nBeat one: 100% damage.",
                    "Beat two: Taunt and 50% Damage",
                    "Beat three: Fear and 50% Damage\nWhile in the air, Raijin suffers a 20% Movement Speed Slow.",
                    "Has a projectile speed of 100.",
                    "Will end as soon as the 4 peals have been used or after 7s have passed, whatever comes first.",
                    "Raijin is CC immune while using this ability.",
                    "Beats with taunt/fear included deal 50/67.5/85/102.5/120 (+20% of your Magical Power) damage.",
                    "Damage per Hit: 100/135/170/205/240 (+40% of your Magical Power)",
                    "Taunt Duration per Hit: .5s",
                    "Fear Duration per Hit: .5s",
                    "Attack Speed: 5/10/15/20/25%",
                    "Ability Type: Line, Crowd Control, Damage",
                    "Radius: 100",
                    "Cost: 90 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Rama",
        "Attributes": {
            "Title:": "Seventh Avatar of Vishnu",
            "Pantheon:": "Hindu",
            "Type:": "Ranged,Physical",
            "Class:": "Hunter",
            "Pros:": "High Mobility, High Attack Speed",
            "Difficulty:": "Average",
            "Release date:": "June 24, 2014",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Rama voicelines",
            "Voice actor:": "Nick Landis",
            "Health:": "460 (+76)",
            "Mana:": "205 (+34)",
            "Speed:": "370 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.95 (+1.7%)",
            "Damage:": "35 (+ 2.5)+ 100% of Physical Power",
            "Progression:": "None",
            "Physical:": "12 (+2.8)",
            "Magical:": "23 (+1.3)",
            "HP5:": "8 (+0.65)",
            "MP5:": "4.5 (+0.25)",
            "imageURL": require("../assets/images/Rama.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Astral Quiver",
                "description": "Rama's Astral Quiver generates an Astral Arrow every 12s. Each Basic Attack hit reduces the time to generate an Astral Arrow by 2s. The first time a fired Astral Arrow hits an enemy it has a chance to drop to the ground. Picking up an Astral Arrow restores 10 Mana.",
                "imageURL": require("../assets/images/Rama_ability_0.png"),
                "notes": [
                    "Can hold up to 5 arrows.",
                    "Rama always starts the match and respawns with a full quiver.",
                    "Has an arrow drop chance of 50% (31% at level 1) at level 20.",
                    "Drop Chance: 30% + 1% per Level",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Astral Strike",
                "description": "Rama switches to a more powerful arrow that Pierces and Slows enemies. This ability consumes 1 of Rama's Astral Arrows and deals bonus damage with every shot. Damage from this ability is reduced to 80% for each enemy hit after the first. Rama cannot toggle this ability if he has no Astral Arrows. The Slow can be Stacked up to 3 times.",
                "imageURL": require("../assets/images/Rama_ability_1.png"),
                "notes": [
                    "Slows up to 30% and costs up to 75 mana with all 5 arrows.",
                    "Basic Attacks from this ability are spent even when Rama misses.",
                    "Subsequent Basic Attacks after the first deal 8/16/24/32/40 Bonus Damage.",
                    "Slow %: 10%",
                    "Time Slowed: 1.5s",
                    "Bonus Damage: 10/20/30/40/50",
                    "Ability Type: Line, Slow, Damage",
                    "Range: 55",
                    "Cost: 15 mana + 1 arrow per shot"
                ]
            },
            {
                "name": "2nd Ability  - Infinite Arrows",
                "description": "Rama focuses his mind and gains increased Attack Speed. While this buff is active, every 3rd successful hit on an enemy god will immediately generate an Astral Arrow.",
                "imageURL": require("../assets/images/Rama_ability_2.png"),
                "notes": [
                    "Attack Speed Increase: 40/45/50/55/60% for 5s.",
                    "Ability Type: Buff",
                    "Cost: 40/45/50/55/60 mana",
                    "Cooldown: 15/14/13/12/11 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Rolling Assault",
                "description": "Rama performs a roll in the direction he is currently traveling. After performing a dodge roll, for 5s Rama's next Basic Attack will consume an Astral Arrow that Cripples the target and deals bonus damage. Rama incurs no movement penalty during this shot.",
                "imageURL": require("../assets/images/Rama_ability_3.png"),
                "notes": [
                    "Has a dash range of 55.",
                    "The Basic Attack from this ability is spent even when Rama misses.",
                    "Can also be used with no astral arrows but will not deal bonus damage/cripple nor haste.",
                    "Cripple Duration: 1/1.25/1.5/1.75/2s",
                    "Bonus Damage: 20/40/60/80/100 (+30% of your Physical Power)",
                    "Ability Type: Dash, Cripple",
                    "Range: 45",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 11 seconds"
                ]
            },
            {
                "name": "Ultimate  - Astral Barrage",
                "description": "Rama launches into the air and shoots 3 powerful arrows at the ground, each successive shot increasing in damage (70%, 85%, 100%) and decreasing in AoE size (15, 10, 7.5). Every time Rama generates or picks up an Astral Arrow the cooldown of this ability is reduced by 0.4s.",
                "imageURL": require("../assets/images/Rama_ability_4.png"),
                "notes": [
                    "Rama will fall down as soon as the 3 arrows have been used, or after 5s have passed.",
                    "Rama is untargetable and immune to crowd control effects for the duration.",
                    "Can deal up to 484/714/943/1173/1402 (+135% of your Physical Power) damage.",
                    "Damage: 190/280/370/460/550 (+55% of your Physical Power)",
                    "Ability Type: Circle, Damage",
                    "Range/Radius: 200/15, 10, 7.5",
                    "Cost: 80 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Ratatoskr",
        "Attributes": {
            "Title:": "The Sly Messenger",
            "Pantheon:": "Norse",
            "Type:": "Melee,Physical",
            "Class:": "Assassin",
            "Pros:": "Great Jungler, High Mobility",
            "Difficulty:": "Easy",
            "Release date:": "June 2, 2015",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Ratatoskr voicelines",
            "Voice actor:": "Holly Franklin",
            "Health:": "420 (+73)",
            "Mana:": "240 (+41)",
            "Speed:": "375 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+2%)",
            "Damage:": "39 (+ 2.25)+ 100% of Physical Power",
            "Progression:": "1/0.5/0.5/1.25x damage and swing time, hitting in an AoE on the final blow",
            "Physical:": "12 (+3)",
            "Magical:": "23 (+1.3)",
            "HP5:": "9 (+0.7)",
            "MP5:": "4.6 (+0.46)",
            "imageURL": require("../assets/images/Ratatoskr.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Acorn of Yggdrasil",
                "description": "Ratatoskr spawns with a powerful Magic Acorn from the World Tree in his inventory. He can upgrade this acorn through the item store from anywhere on the map. Each Acorn provides different bonuses to Ratatoskr.",
                "imageURL": require("../assets/images/Ratatoskr_ability_0.png"),
                "notes": [
                    "Ratatoskr must remain immobile for a short time to upgrade his acorn.",
                    "For information on every acorn variant, see Acorns.",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Dart",
                "description": "Ratatoskr dashes forward, damaging and slowing enemies for 3s. Dart pierces through minions and stops at the first god hit. Also, Dart's cooldown is reduced by 1s for each enemy god hit by Flurry or Acorn Blast.",
                "imageURL": require("../assets/images/Ratatoskr_ability_1.png"),
                "notes": [
                    "Deals 95/142/189/23/284 (+95% of your Physical Power) damage with Bristlebush Acorn.",
                    "Damage: 70/105/140/175/210 (+70% of your Physical Power)",
                    "Slow: 20/25/30/35/40%",
                    "Ability Type: Dash, Slow, Damage",
                    "Range: 55",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Flurry",
                "description": "Ratatoskr spins around in a flurry of attacks, damaging nearby enemies and reducing their Physical Protections up to 4 times.",
                "imageURL": require("../assets/images/Ratatoskr_ability_2.png"),
                "notes": [
                    "Deals up to 100/160/220/280/340 (+100% of your Physical Power) damage and reduces physical protection by up to 8/12/16/20/24.",
                    "This ability gains another charge with Thickbark Acorn.",
                    "Damage Per Hit: 25/40/55/70/85 (+25% of your Physical Power)",
                    "Physical Protection Reduced Per Stack: 2/3/4/5/6",
                    "Ability Type: Circle, Debuff, Damage",
                    "Radius: 20",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Acorn Blast",
                "description": "Ratatoskr shoots a blast of three acorns forward in a cone, each dealing damage. Enemies hit by multiple acorns take 40% less damage on each acorn, down to a minimum of 20% damage. Enemies hit by 3 acorns are stunned.",
                "imageURL": require("../assets/images/Ratatoskr_ability_3.png"),
                "notes": [
                    "Can deal up to 126/162/198/234/270 (+99% of your Physical Power) damage by itself and 140/198/242/286/330 (+121% of your Physical Power) damage with Thistlethorn Acorn.",
                    "The stun duration lasts 1s.",
                    "Damage Per Acorn: 70/90/110/130/150 (+55% of your Physical Power)",
                    "Ability Type: Cone, Stun, Damage",
                    "Range: 55",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "Ultimate  - Through the Cosmos",
                "description": "Ratatoskr charges up then leaps from the ground to a branch above his head. He may jump to 2 more branches before choosing a landing location. Upon landing he deals damage and Knocks up enemies. Through the Cosmos can be canceled or timed out from any of the branches, causing Ratatoskr to strike down at the current target location.",
                "imageURL": require("../assets/images/Ratatoskr_ability_4.png"),
                "notes": [
                    "Has a prefire of 1.5s.",
                    "Ratatoskr can stand on each branch for up to 3s (9s total with all branches).",
                    "Ratatoskr is immune from crowd control effects and untargetable while using this ability.",
                    "If there is no valid jumping/landing location, Ratatoskr will jump/land at the closest valid point near the targeter.",
                    "Damage: 200/260/320/380/440 (+90% of your Physical Power)",
                    "Ability Type: Circle, Knockup, Damage",
                    "Range/Radius: 90/20",
                    "Cost: 100 mana",
                    "Cooldown: 110/105/100/95/90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Ravana",
        "Attributes": {
            "Title:": "Demon King of Lanka",
            "Pantheon:": "Hindu",
            "Type:": "Melee,Physical",
            "Class:": "Assassin",
            "Pros:": "High Single Target Damage, High Sustain",
            "Difficulty:": "Average",
            "Release date:": "June 30, 2015",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Ravana voicelines",
            "Voice actor:": "Leo Fabian",
            "Health:": "400 (+75)",
            "Mana:": "230 (+35)",
            "Speed:": "370 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+1.7%)",
            "Damage:": "39 (+ 2.2)+ 100% of Physical Power",
            "Progression:": "0.75/.5/1.25x damage",
            "Physical:": "13 (+2.9)",
            "Magical:": "23 (+1.3)",
            "HP5:": "8 (+0.7)",
            "MP5:": "4.4 (+0.35)",
            "imageURL": require("../assets/images/Ravana.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Chain of Blows",
                "description": "Successful Basic Attacks and abilities against an Enemy add to Ravana's Combo Chain. Each time his Chain reaches 8 he receives a Shield equal to 7% of his Maximum Health as well as 3% Movement Speed and 5 Physical Power. This may stack up to 3 times.",
                "imageURL": require("../assets/images/Ravana_ability_0.png"),
                "notes": [
                    "Applies up to 21% of your max Health as a shield, 9% Movement Speed and 15 Physical Power.",
                    "Shield doesn't protect from execute effects.",
                    "Also stacks on damaging structures.",
                    "Maximum Stacks: 3",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Prana Onslaught",
                "description": "Ravana throws a powerful punch, projecting his prana with it to damage and slow all enemies in front of him.",
                "imageURL": require("../assets/images/Ravana_ability_1.png"),
                "notes": [
                    "Damage: 90/145/200/255/310 (+95% of your Physical Power)",
                    "Slow Percentage: 25%",
                    "Slow Duration: 2.5s",
                    "Ability Type: Cone, Slow, Damage",
                    "Range: 20",
                    "Cost: 30/38/45/53/60 mana",
                    "Cooldown: 9 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Overhead Kick",
                "description": "Ravana performs a high kick, sending a shockwave forward to damage all enemies in a line, increasing his Movement Speed and rendering him CC and damage immune for the duration.",
                "imageURL": require("../assets/images/Ravana_ability_2.png"),
                "notes": [
                    "Also cleanses CC currently applied (as long as the ability is usable ex: while under the effect of displacement CC).",
                    "Damage: 70/105/140/175/210 (+70% of your Physical Power)",
                    "Movement Speed: 50%",
                    "Lifetime: 1s",
                    "Ability Type: Line, Buff, Damage",
                    "Range: 35",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 16/15.5/15/14.5/14 seconds"
                ]
            },
            {
                "name": "3rd Ability  - 10 - Hand Shadow Fist",
                "description": "Ravana's fists fly forward, damaging and passing through minions and damaging and rooting the first god hit. Ravana heals for each enemy hit - with maximum damage sources of one god and up to three minions.",
                "imageURL": require("../assets/images/Ravana_ability_3.png"),
                "notes": [
                    "Heals up to 24/68/112/156/200 when all damage sources are met.",
                    "Damage: 90/130/170/210/250 (+85% of your Physical Power)",
                    "Root Duration: 1.25s",
                    "Healing: 6/17/28/39/50",
                    "Ability Type: Line, Root, Damage",
                    "Range: 45",
                    "Cost: 55/60/65/70/75 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "Ultimate  - Mystic Rush",
                "description": "Ravana leaps to a target location, damaging all enemies in the area and applying a debuff to enemy gods that increases the damage they take from all sources. After landing, Ravana receives a buff that reduces the damage he takes from all sources.",
                "imageURL": require("../assets/images/Ravana_ability_4.png"),
                "notes": [
                    "Ravana is immune from crowd control effects during the pre-fire and leap.",
                    "Damage: 200/275/350/425/500 (+110% of your Physical Power)",
                    "Damage Increase: 10%",
                    "Damage Mitigation: 10/15/20/25/30%",
                    "Duration: 5s",
                    "Ability Type: Circle, Buff, Damage",
                    "Range/Radius: 55/15",
                    "Range: 55",
                    "Cost: 80/90/100/110/120 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Scylla",
        "Attributes": {
            "Title:": "Horror of the Sea",
            "Pantheon:": "Greek",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "High Area Damage",
            "Difficulty:": "Easy",
            "Release date:": "March 5, 2014",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Scylla voicelines",
            "Voice actor:": "Carrie Savage",
            "Health:": "365 (+75)",
            "Mana:": "298 (+56)",
            "Speed:": "355 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "1 (+0.8%)",
            "Damage:": "34 (+ 1.45)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "9 (+2.6)",
            "Magical:": "23 (+1.3)",
            "HP5:": "6 (+0.45)",
            "MP5:": "4.9 (+0.4)",
            "imageURL": require("../assets/images/Scylla.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Quick Learner",
                "description": "Each of Scylla's abilities gain an additional effect at max rank. In addition, Scylla gains 25 Magical Power for each max rank ability.",
                "imageURL": require("../assets/images/Scylla_ability_0.png"),
                "notes": [
                    "Gains up to 100 Magical Power.",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Sic 'Em",
                "description": "Scylla sends two hounds forward, damaging, Rooting, and Crippling the first enemy hit.At max rank, two additional enemies nearby the first target will also be hit.",
                "imageURL": require("../assets/images/Scylla_ability_1.png"),
                "notes": [
                    "Damage: 60/110/160/210/260 (+75% of your Magical Power)",
                    "Root Duration: 1.75s",
                    "Ability Type: Line, Crowd Control, Damage",
                    "Range/Radius: 65/15",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 10 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Crush",
                "description": "Scylla creates a Magical field that Slows enemies. After 5s it detonates and damages enemies, dealing 30% increased damage to Minions and Jungle Camps. Scylla may activate the ability again to detonate it early.At max rank, enemies in the area also have their Magical Protection reduced, and targets hit by the damage retain the debuff and are Slowed for 1s.",
                "imageURL": require("../assets/images/Scylla_ability_2.png"),
                "notes": [
                    "Scylla creates a Magical field that Slows enemies. After 5s it detonates and damages enemies, dealing 30% increased damage to Minions and Jungle Camps. Scylla may activate the ability again to detonate it early.\nAt max rank, enemies in the area also have their Magical Protection reduced, and targets hit by the damage retain the debuff and are Slowed for 1s.",
                    "Deals 130/201.5/273/344.5/416 (+110.5% of your Magical Power) damage to minions and jungle camps.",
                    "Can be detonated at any time even while under crowd control or dead.",
                    "Damage: 100/155/210/265/320 (+85% of your Magical Power)",
                    "Slow: 30%",
                    "Max Rank Debuff: 15% Magical Protection Reduced",
                    "Ability Type: Circle, Slow, Damage",
                    "Range/Radius: 55/20",
                    "Cost: 70/75/80/85/90 mana",
                    "Cooldown: 10 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Sentinel",
                "description": "Passive: Scylla gains MP5.Active: Scylla summons a sentinel to the target area, granting vision of enemies for 5s. Scylla may activate the ability again within 5s to move to the sentinel location.At max rank, the vision is granted through line of sight blockers.",
                "imageURL": require("../assets/images/Scylla_ability_3.png"),
                "notes": [
                    "Passive: Scylla gains MP5.\nActive: Scylla summons a sentinel to the target area, granting vision of enemies for 5s. Scylla may activate the ability again within 5s to move to the sentinel location.\nAt max rank, the vision is granted through line of sight blockers.",
                    "Despite moving underground, this ability is considered a leap.",
                    "Passive MP5: 8/10/12/14/16",
                    "Vision Range: 40/50/60/70/80",
                    "Ability Type: Teleport, Buff",
                    "Range: 70",
                    "Cost: 70/75/80/85/90 mana",
                    "Cooldown: 15 seconds"
                ]
            },
            {
                "name": "Ultimate  - I'm a Monster",
                "description": "Scylla reveals her true nature, becoming immune to Crowd Control for the next 6s, and gaining movement speed. She may make one powerful attack during this time. If she kills an enemy god with the attack, she gains another 6s and may attack again.At max rank, the movement speed bonus doubles.",
                "imageURL": require("../assets/images/Scylla_ability_4.png"),
                "notes": [
                    "Scylla reveals her true nature, becoming immune to Crowd Control for the next 6s, and gaining movement speed. She may make one powerful attack during this time. If she kills an enemy god with the attack, she gains another 6s and may attack again.\nAt max rank, the movement speed bonus doubles.",
                    "There is no limit to how many additional attacks can be gained per cast.",
                    "Can move freely in all directions for the duration.",
                    "Can be fired through walls.",
                    "Damage per Hit: 400/500/600/700/800 (+120% of your Magical Power)",
                    "Movement Speed: 35/35/35/35/70%",
                    "Ability Type: Circle, Buff, Damage",
                    "Range: 60/15",
                    "Cost: 100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Serqet",
        "Attributes": {
            "Title:": "Goddess of Venom",
            "Pantheon:": "Egyptian",
            "Type:": "Melee,Physical",
            "Class:": "Assassin",
            "Pros:": "High Single Target Damage, High Mobility",
            "Difficulty:": "Average",
            "Release date:": "July 15, 2014",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Serqet voicelines",
            "Voice actor:": "Kristin Sutton",
            "Health:": "414 (+76)",
            "Mana:": "240 (+40)",
            "Speed:": "370 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+2.16%)",
            "Damage:": "39 (+ 2.25)+ 100% of Physical Power",
            "Progression:": "1/.75/1.25x damage; 3rd attack hit all enemies in the melee area",
            "Physical:": "14 (+2.9)",
            "Magical:": "23 (+1.3)",
            "HP5:": "9 (+0.7)",
            "MP5:": "4.3 (+0.29)",
            "imageURL": require("../assets/images/Serqet.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Catalyst",
                "description": "Serqet's damaging Basic Attacks apply Catalyst, which consumes her lingering poisons from Deathbane and Cobra's Kiss. If the target is affected by two or three different poisons, they take additional damage.",
                "imageURL": require("../assets/images/Serqet_ability_0.png"),
                "notes": [
                    "2 Poisons: (+70% of your Physical Power) +5% of target's maximum Health as Physical Damage.",
                    "3 Poisons: (+100% of your Physical Power) +10% of target's maximum Health as Physical Damage.",
                    "Ability Type: Debuff"
                ]
            },
            {
                "name": "1st Ability  - Deathbane",
                "description": "Serqet dashes three times from side to side, dealing damage and applying Deathbane Poison to each enemy hit. This ability can Critical Hit, and Serqet is immune to Knockup while dashing.Deathbane Poison reduces a target's Physical Protection for a short time, and remains in a lingering dormant state for 20s.",
                "imageURL": require("../assets/images/Serqet_ability_1.png"),
                "notes": [
                    "Serqet dashes three times from side to side, dealing damage and applying Deathbane Poison to each enemy hit. This ability can Critical Hit, and Serqet is immune to Knockup while dashing.\nDeathbane Poison reduces a target's Physical Protection for a short time, and remains in a lingering dormant state for 20s.",
                    "The critical hits are affected by  Deathbringer.",
                    "The debuff doesn't stack, but the duration is refreshed on each application.",
                    "Has a minimum distance of 5.",
                    "Can deal up to 150/210/270/330/390 (+150% of your Physical Power) damage if hit by all 3 hits.",
                    "Damage: 50/70/90/110/130 (+50% of your Physical Power)",
                    "Protection Reduction: 5% for 3s.",
                    "Ability Type: Dash, Debuff, Damage",
                    "Range: 50",
                    "Cost: 60 mana",
                    "Cooldown: 13 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Cobra's Kiss",
                "description": "Serqet launches her two blades forward, dealing damage and applying the Cobra's Kiss Poison. Cobra's Kiss Poison drives gods to madness, forcing them to attack nearby allies dealing this damage again, or walk harmlessly towards Serqet. Cobra's Kiss remains in a lingering dormant state for 20s.",
                "imageURL": require("../assets/images/Serqet_ability_2.png"),
                "notes": [
                    "The blades are individual projectiles fired one after the other, and the second one can be re-aimed by turning before it goes out.",
                    "Can deal up to 80/110/140/170/200 (+150% of your Physical Power) damage to a single target.",
                    "The madness duration refreshes on the second hit to a single target.",
                    "Damage: 40/55/70/85/100 (+75% of your Physical Power)",
                    "Madness Duration: 1.2s",
                    "Ability Type: Line, Crowd Control, Damage",
                    "Range: 40",
                    "Cost: 70/75/80/85/90 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Ambush",
                "description": "Serqet vanishes, Rooting herself in place. She may leap once, revealing herself and dealing damage to enemies. She will stay hidden until she leaps or cancels this ability. Enemy gods within range 12.5 will also reveal her.",
                "imageURL": require("../assets/images/Serqet_ability_3.png"),
                "notes": [
                    "If Serqet turns invisible while inside an enemy structure's attack range, she'll be revealed.",
                    "Won't begin its cooldown until after leaping or is cancelled.",
                    "Damage: 80/125/170/215/260 (+100% of your Physical Power)",
                    "Ability Type: Circle, Leap, Damage",
                    "Range/Radius: 65/15",
                    "Cost: 70 mana",
                    "Cooldown: 16 seconds"
                ]
            },
            {
                "name": "Ultimate  - Last Breath",
                "description": "Passive: Serqet gains increased Critical Strike Chance.Active: Serqet leaps to an enemy, Stunning them and gaining 50% damage mitigation. She then applies the Last Breath poison and pushes them 30 units away. The poison deals true damage to the target over the next 5s, and prevents them from healing. If an enemy dies while infected with Last Breath, they will explode, applying the poison to all enemies within 20 units.",
                "imageURL": require("../assets/images/Serqet_ability_4.png"),
                "notes": [
                    "Passive: Serqet gains increased Critical Strike Chance.",
                    "Active: Serqet leaps to an enemy, Stunning them and gaining 50% damage mitigation. She then applies the Last Breath poison and pushes them 30 units away. The poison deals true damage to the target over the next 5s, and prevents them from healing. If an enemy dies while infected with Last Breath, they will explode, applying the poison to all enemies within 20 units.",
                    "Can also be used on minions and jungle monsters.",
                    "Does not go into cooldown if it fails to hit a target.",
                    "Serqet is immune from crowd control effects while using this ability.",
                    "The damage from this ability is dealt 17/25/33/42/50 (+22% of your Physical Power as True Damage) every 1s.",
                    "Has a pre-fire time of 0.1s.",
                    "Damage: 102/150/198/252/300 (+130% of your Physical Power as True Damage)",
                    "Stun Duration: 1s",
                    "Healing Reduction: All Healing",
                    "Critical Strike Chance: 0/5/10/15/20%",
                    "Ability Type: Target, Debuff, Damage",
                    "Radius: 10",
                    "Cost: 100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Set",
        "Attributes": {
            "Title:": "The Usurper",
            "Pantheon:": "Egyptian",
            "Type:": "Melee,Physical",
            "Class:": "Assassin",
            "Pros:": "High Single Target Damage",
            "Difficulty:": "Average",
            "Release date:": "April 30, 2019",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Set voicelines",
            "Voice actor:": "Chris Tergliafera",
            "Health:": "450 (+75)",
            "Mana:": "210 (+38)",
            "Speed:": "375 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+1.9%)",
            "Damage:": "39 (+ 2.3)+ 100% of Physical Power",
            "Progression:": "None",
            "Physical:": "13 (+2.9)",
            "Magical:": "23 (+1.3)",
            "HP5:": "9 (+0.7)",
            "MP5:": "4.2 (+0.38)",
            "imageURL": require("../assets/images/Set.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Relentless",
                "description": "Each time Set damages an enemy, Set gains a stack of Relentless. If Horus is the enemy being damaged, Set gains 2 stacks. Each stack increases Set's Attack Speed. Relentless stacks to a max count of 10 for 6s. While Kingslayer is active, Relentless has no maximum stack count.",
                "imageURL": require("../assets/images/Set_ability_0.png"),
                "notes": [
                    "Grants up to 30% Attack Speed.",
                    "Can also gain stacks by hitting wards and player-made deployables.",
                    "Attack Speed: 3%",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Skewer",
                "description": "Set amasses his hatred, throwing it forward. Enemies caught in its path are damaged and slowed for 3s.Set's spawn are commanded when Set fires this attack, dashing towards a location Set determines. Enemies hit by a Spawn's dash take damage and are slowed for 3s. Any dash after the first will deal 40% damage.",
                "imageURL": require("../assets/images/Set_ability_1.png"),
                "notes": [
                    "Set amasses his hatred, throwing it forward. Enemies caught in its path are damaged and slowed for 3s.\nSet's spawn are commanded when Set fires this attack, dashing towards a location Set determines. Enemies hit by a Spawn's dash take damage and are slowed for 3s. Any dash after the first will deal 40% damage.",
                    "The slow from this ability doesn't stack but refreshes regardless of how many spawn an enemy was hit by.",
                    "Damage: 75/120/165/210/255 (+85% of your Physical Power)",
                    "Slow: 25%",
                    "Dash Range: 60 ft",
                    "Ability Type: Line, Slow, Damage",
                    "Range: 60",
                    "Cost: 40/45/50/55/60 mana",
                    "Cooldown: 9 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Spawn of Set",
                "description": "Set conjures a Spawn of himself made of sand. These spawn will stand where summoned and attack nearby enemies. Set can have up to 2 charges of this ability, allowing him to conjure spawn in quick succession. Set can interact with these Spawn with his other abilities, commanding them to attack or teleporting to them. Set can only have 8 Spawn at any given time. This ability does not trigger Item effects.",
                "imageURL": require("../assets/images/Set_ability_2.png"),
                "notes": [
                    "Spawn have a vision range of 55, are untargetable and attack once per second.",
                    "The spawn count as units and have an assist radius, granting experience from nearby kills to Set regardless of distance.",
                    "The initial dash will deal 30/54/82/115/153 (+63% of your Physical Power) damage and subsequent dashes will deal 12/22/33/46/61 (+25% of your Physical Power) damage.",
                    "Placing more than 8 spawn will despawn the oldest ones placed.",
                    "Can cost up to 60 mana with both charges.",
                    "Damage: 20 (+25% of your Physical Power)",
                    "Attack Range: 12 ft",
                    "Dash Damage: 40/45/50/55/60% of Skewer",
                    "Duration: 8/9/10/11/12s",
                    "Ability Type: Pet, Damage",
                    "Range/Radius: 70/12",
                    "Cost: 30 mana",
                    "Cooldown: 11/10.5/10/9.5/9 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Sandstorm",
                "description": "Set conjures a Sandstorm around him, protecting him from Damage and causing him to be immune to Slows. Enemies near Set are damaged every .3s for 6s and have their vision obscured by the sands.If Set is targeting a spawn when this ability is cast he will immediately teleport to the spawn. Otherwise, he can reactivate this ability to teleport. Set can only teleport once per Sandstorm.",
                "imageURL": require("../assets/images/Set_ability_3.png"),
                "notes": [
                    "Set conjures a Sandstorm around him, protecting him from Damage and causing him to be immune to Slows. Enemies near Set are damaged every .3s for 6s and have their vision obscured by the sands.\nIf Set is targeting a spawn when this ability is cast he will immediately teleport to the spawn. Otherwise, he can reactivate this ability to teleport. Set can only teleport once per Sandstorm.",
                    "Can deal up to 120/180/240/300/360 (+120% of your Physical Power) damage.",
                    "Won't go on cooldown until the ability ends.",
                    "Damage: 6/9/12/15/18 (+6% of your Physical Power)",
                    "Damage Reduction: 15%",
                    "Teleport Range: 65 ft",
                    "Ability Type: Circle, Teleport, Damage",
                    "Range/Radius: 65/16",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 10 seconds"
                ]
            },
            {
                "name": "Ultimate  - Kingslayer",
                "description": "Set enrages, channeling his rage towards his enemies, gaining increased Movement Speed. Each time Set's attacks damage a god they gain a Mark of Set. At 4 Marks the target erupts. Enemies take a burst of damage on each explosion while Set becomes empowered, restoring Health and immediately gaining a charge of Spawn of Set. Excess charges are immediately consumed, causing a Spawn to appear near Set.",
                "imageURL": require("../assets/images/Set_ability_4.png"),
                "notes": [
                    "Despite the unlimited stack count while the ability is active, Attack speed still caps at 2.5 but will still count towards stacking items like Silverbranch Bow and Stormseeker.",
                    "Damage: 25/35/45/55/65 (+30% of your Physical Power)",
                    "Heal: 25/40/55/70/85",
                    "Movement Speed: 20/22.5/25/27.5/30%",
                    "Duration: 12s",
                    "Ability Type: Buff",
                    "Cost: 80/85/90/95/100 mana",
                    "Cooldown: 90/85/80/75/70 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Shiva",
        "Attributes": {
            "Title:": "The Destroyer",
            "Pantheon:": "Hindu",
            "Type:": "Melee,Physical",
            "Class:": "Warrior",
            "Pros:": "High Crowd Control",
            "Difficulty:": "Average",
            "Release date:": "February 22, 2022",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Shiva voicelines",
            "Voice actor:": "Harish Bhimani",
            "Health:": "475 (+83)",
            "Mana:": "210 (+36)",
            "Speed:": "375 (+0)",
            "Range:": "16 (+0)",
            "Attack/Sec:": "1 (+1.2%)",
            "Damage:": "39 (+ 2)+ 100% of Physical Power",
            "Progression:": "1/.75/1.25 damage and swing time",
            "Physical:": "16 (+3)",
            "Magical:": "24 (+1.3)",
            "HP5:": "8 (+0.7)",
            "MP5:": "4.5 (+0.39)",
            "imageURL": require("../assets/images/Shiva.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Samsara",
                "description": "Shiva cycles between the states of Bliss and Destruction by dealing damage to enemy gods with attacks and abilities. Each state provides benefits to himself and allies or hindrances to enemies. On switching between states Shiva's non-ultimate ability cooldowns are reduced by 2s.",
                "imageURL": require("../assets/images/Shiva_ability_0.png"),
                "notes": [
                    "Provides a 32 HP5/MP5 buff to Shiva/allies and 16 HP5/MP5 debuff to enemies (12.5 HP5/MP5 buff and 6.5 HP5/MP5 debuff at level 1) at level 20.",
                    "Allies and enemies can only be effected by one aura regardless of how many Shivas are in range.",
                    "Shiva always starts the match and respawns in Bliss state.",
                    "Each state changes Shiva's color scheme and effects (blue for Bliss and orange for Destruction).",
                    "HP5/MP5 Buff Aura: 12 + 0.5 Per Level",
                    "HP5/MP5 Debuff Aura: 6 + 0.5 Per Level",
                    "Ability Type: Buff",
                    "Radius: 55"
                ]
            },
            {
                "name": "1st Ability  - Emblazoned Sweep",
                "description": "Shiva's trident is emblazoned with the fire of Agni as he spins it around dealing damage, pulling in enemies and leaving behind a firewall at the edge.Bliss – Allies gain a Movement Speed buff on passing the firewall.Destruction – Enemies suffer a Protection Reduction debuff on passing the firewall.",
                "imageURL": require("../assets/images/Shiva_ability_1.png"),
                "notes": [
                    "Shiva's trident is emblazoned with the fire of Agni as he spins it around dealing damage, pulling in enemies and leaving behind a firewall at the edge.\nBliss – Allies gain a Movement Speed buff on passing the firewall.",
                    "Destruction – Enemies suffer a Protection Reduction debuff on passing the firewall.",
                    "Can deal up to 155/300/445/590/735 (+100% of your Physical Power) damage while the buff/debuff duration while within the firewall refreshes per tick.",
                    "The Fire Damage ticks are dealt every 0.5s.",
                    "Deals one additional tick of damage on the initial hit.",
                    "Spin Damage: 65/120/175/230/285 (+55% of your Physical Power)",
                    "Fire Damage: 10/20/30/40/50 (+5% of your Physical Power)",
                    "Movement Speed Buff: 25% for 3s",
                    "Protection Reduction: 5/10/15/20/25 for 3s",
                    "Fire Persist Time: 4s",
                    "Ability Type: Circle, Knockback, Damage",
                    "Radius: 20",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Damaru's Tempo",
                "description": "Shiva hits the butt of his trident down into the ground, shaking the damaru drum and causing energy to dissipate and damage enemies. Depending on the selection, enemies in the chosen segment are knocked up as well.Bliss – Allies gain an Attack Speed buff if the energy passes through them.Destruction – Enemies suffer an Attack Speed debuff if the energy passes through them.",
                "imageURL": require("../assets/images/Shiva_ability_2.png"),
                "notes": [
                    "Shiva hits the butt of his trident down into the ground, shaking the damaru drum and causing energy to dissipate and damage enemies. Depending on the selection, enemies in the chosen segment are knocked up as well.\nBliss – Allies gain an Attack Speed buff if the energy passes through them.",
                    "Destruction – Enemies suffer an Attack Speed debuff if the energy passes through them.",
                    "Has a knockup height of 225 and each segment has a range of 15.",
                    "Damage: 100/150/200/250/300 (+65% of your Physical Power)",
                    "Attack Speed Buff: 30% for 4s",
                    "Attack Speed Debuff: 30% for 4s",
                    "Ability Type: Cone, Knockup, Damage",
                    "Range: 45",
                    "Cost: 70/75/80/85/90 mana",
                    "Cooldown: 13 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Pillar of Dawn",
                "description": "Shiva dashes into a pillar of fire where he meditates for a short duration, taking reduced damage and becoming immune to CC except for Stuns and Time Dilation, before being able to dash out again. Each dash deals damage to enemies and as he meditates the pillar emits an aura.Bliss – Allies in the aura gain a block stack while Shiva gains up to 3 after leaving.Destruction – Enemies in the aura suffer constant damage.",
                "imageURL": require("../assets/images/Shiva_ability_3.png"),
                "notes": [
                    "Shiva dashes into a pillar of fire where he meditates for a short duration, taking reduced damage and becoming immune to CC except for Stuns and Time Dilation, before being able to dash out again. Each dash deals damage to enemies and as he meditates the pillar emits an aura.\nBliss – Allies in the aura gain a block stack while Shiva gains up to 3 after leaving.",
                    "Destruction – Enemies in the aura suffer constant damage.",
                    "Bliss total damage: 130/190/250/310/370 (+60% of your Physical Power) damage",
                    "Destruction total damage: 242/366/490/614/738 (+124% of your Physical Power) damage",
                    "The buff/DoT can last up to 4s and after the 4s have passed, Shiva will not be able to use the second dash.",
                    "Only the first dash applies progress between states.",
                    "Shiva gains block stacks every 1s in Bliss state.",
                    "Shiva also gains Damage Mitigation while dashing.",
                    "Damage: 65/95/125/155/185 (+30% of your Physical Power)",
                    "Aura Damage: 7/11/15/19/23 (+4% of your Physical Power) every 0.25s",
                    "Damage Mitigation: 40%",
                    "Ability Type: Dash, Buff, Damage",
                    "Range/Radius: 30/30",
                    "Cost: 65/70/75/80/85 mana",
                    "Cooldown: 18/17/16/15/14 seconds"
                ]
            },
            {
                "name": "Ultimate  - Shiva Tandava",
                "description": "Shiva performs his Tandava, channeling for the next 6 seconds with CC Immunity. Every 1.5s he performs a step that can be preselected.Step one – Ally Healing and Mana restore.Step two – 50% Damage and Healing and also amplification of next step radius and effects.Step three – Damage and Shield reduction to Enemies.",
                "imageURL": require("../assets/images/Shiva_ability_4.png"),
                "notes": [
                    "Shiva performs his Tandava, channeling for the next 6 seconds with CC Immunity. Every 1.5s he performs a step that can be preselected.\nStep one – Ally Healing and Mana restore.",
                    "Step two – 50% Damage and Healing and also amplification of next step radius and effects.",
                    "Step three – Damage and Shield reduction to Enemies.",
                    "Amplified Step 1 restores 105/127.5/150/172.5/195 health while amplified Step 3 deals 202.5/277.5/352.5/427.5/502.5 (+75% of your Physical Power) damage and 75% damage to shields.  Deals up to 540/740/940/1140/1340 (+200% of your Physical Power) damage (3/3/3/3 and 2/3/2/3 both deal similar damage) and heals up to 280/340/400/460/520 health and 60% mana (4 steps total) (1/1/1/1 and 2/1/2/1 both heal the same amount, although the latter combo restores only 30% mana because Step two neither restores mana nor amplifies percentage of restored mana from Step one).",
                    "If no step is selected after the initial cast, Shiva will automatically use step 1 and/or whatever step was selected.",
                    "Shiva will cycle between Bliss state if step 1 is selected last or Destruction if step 3 is last.",
                    "Healing: 70/85/100/115/130",
                    "Mana Restore: 15%",
                    "Amplification Effects: 50%",
                    "Damage: 135/185/235/285/335 (+50% of your Physical power)",
                    "Shield Damage: 50%",
                    "Ability Type: Circle, Buff, Damage",
                    "Radius: 25/35",
                    "Cost: 100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Skadi",
        "Attributes": {
            "Title:": "Goddess of Winter",
            "Pantheon:": "Norse",
            "Type:": "Ranged,Physical",
            "Class:": "Hunter",
            "Pros:": "High Crowd Control, Pusher",
            "Difficulty:": "Hard",
            "Release date:": "March 15, 2016",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Skadi voicelines",
            "Voice actor:": "Martha Harms",
            "Health:": "470 (+78)",
            "Mana:": "220 (+35)",
            "Speed:": "375 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.95 (+1.6%)",
            "Damage:": "30 (+ 2.5)+ 100% of Physical Power",
            "Progression:": "None",
            "Physical:": "11 (+2.8)",
            "Magical:": "23 (+1.3)",
            "HP5:": "8 (+0.69)",
            "MP5:": "4.5 (+0.32)",
            "imageURL": require("../assets/images/Skadi.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Kaldr, The Winter Wolf",
                "description": "Kaldr has 2 forms: Beast and Elemental. While in Beast form he can attack enemies and be attacked. While Elemental he is immune to attacks and gains 1 HP every 4s. He can be controlled with Rune of the Hunt but will revert into Elemental form if he loses all HP. Skadi also gains 10% Physical Power when Kaldr has no HP.",
                "imageURL": require("../assets/images/Skadi_ability_0.png"),
                "notes": [
                    "The physical power buff is called \"Lone Wolf\".",
                    "Kaldr has 50% of Skadi's Attack Speed as well as 110% of Skadi's Movement Speed.",
                    "Takes a total of 25 hits from minions before Kaldr is reverted to elemental form and a maximum time of 24s for him to fully heal (max 5 hit points).",
                    "Kaldr doesn't remove backdoor protections from towers and phoenixes.",
                    "Minion Damage: 1 HP lost per 5 hits",
                    "Other Source Damage: 1 HP lost from any attack or ability",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Piercing Cold",
                "description": "Skadi throws an icy spear forward, dealing damage to enemies and Slowing them for 3s. Kaldr's basic attacks deal double damage to targets afflicted by Piercing Cold.",
                "imageURL": require("../assets/images/Skadi_ability_1.png"),
                "notes": [
                    "Kaldr's basic attacks deal 100/115/130/145/160% of Skadi's basic attack damage to targets afflicted by the ability.",
                    "Damage: 90/145/200/255/310 (+80% of your Physical Power)",
                    "Slow: 20/25/30/35/40%",
                    "Ability Type: Line, Slow, Damage",
                    "Range: 55",
                    "Cost: 70/75/80/85/90 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Rune of the Hunt",
                "description": "Toggle: Skadi marks an enemy for Kaldr to hunt. While toggled on, Kaldr assumes Beast form, chasing and attacking the marked enemy. If a marked enemy dies Kaldr attacks other enemies nearby. When toggled off, Kaldr stops attacking and returns to Skadi, reverting to his Elemental form on the way. This ability can be activated at rank 0 and Kaldr gains new skills as it ranks up.",
                "imageURL": require("../assets/images/Skadi_ability_2.png"),
                "notes": [
                    "Kaldr deals 50% of Skadi's Basic Attack damage by default.",
                    "Kaldr's dash attack has a 5s cooldown, a range of 20 and can proc item effects.",
                    "The movement speed buff lasts 3s and refreshes each time Kaldr hits an enemy.",
                    "Basic Attack: 50/57.5/65/72.5/80% of Skadi's",
                    "Rank 1: Kaldr gains a dash attack dealing 70/80/90/100/110% Basic Attack Damage",
                    "Rank 3: Kaldr's kills heal him",
                    "Rank 5: Kaldr's attacks give Skadi 10% increased movement speed",
                    "Ability Type: Target, Debuff",
                    "Range/Radius: 70/10",
                    "Cost: None",
                    "Cooldown: .5 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Permafrost",
                "description": "Skadi freezes the ground for 5s at a target location. The icy area deals damage to enemies that touch it and continues to deal additional damage every .5s they stay on it. Gods who step on the ice are slowed and lose control of their movement while sliding across. Also, Skadi gains Movement Speed and Slow immunity while standing on the area and persists for 3s after it fades or she leaves.",
                "imageURL": require("../assets/images/Skadi_ability_3.png"),
                "notes": [
                    "Can deal up to 170/250/330/410/490 (+95% of your Physical Power) damage.",
                    "Initial Damage: 70/100/130/160/190 (+50% of your Physical Power)",
                    "Damage Per Tick: 10/15/20/25/30 (+5% of your Physical Power)",
                    "Movement Speed: 20/25/30/35/40%",
                    "Slow: 15%",
                    "Radius: 16/16/18/18/20",
                    "Ability Type: Circle, Crowd Control, Damage",
                    "Range/Radius: 55/20",
                    "Cost: 55/60/665/70/75 mana",
                    "Cooldown: 16 seconds"
                ]
            },
            {
                "name": "Ultimate  - Winter's Grasp",
                "description": "A snowstorm surrounds Skadi as she chooses a location for Kaldr to attack. If Kaldr is too far he will leap there.Upon reaching the location a snowstorm also surrounds Kaldr. The initial hit of either snowstorm Roots enemies in the area and Kaldr is restored to full health. The storms persist for 4s while dealing damage to enemies every .5s.",
                "imageURL": require("../assets/images/Skadi_ability_4.png"),
                "notes": [
                    "A snowstorm surrounds Skadi as she chooses a location for Kaldr to attack. If Kaldr is too far he will leap there.\nUpon reaching the location a snowstorm also surrounds Kaldr. The initial hit of either snowstorm Roots enemies in the area and Kaldr is restored to full health. The storms persist for 4s while dealing damage to enemies every .5s.",
                    "Each snowstorm deals up to 85/165/245/325/405 (+115% of your Physical Power) damage and with both dealing 170/330/490/650/810 (+230% of your Physical Power) total damage.",
                    "The snowstorms despawn when Skadi dies.",
                    "Initial Damage: 45/85/125/165/205 (+35% of your Physical Power)",
                    "Damage Per Tick: 5/10/15/20/25 (+10% of your Physical Power)",
                    "Root Duration: 1/1.25/1.5/1.75/2s",
                    "Ability Type: Circle, Root, Damage",
                    "Range/Radius: 70/20",
                    "Cost: 80/90/00/110/120 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Sobek",
        "Attributes": {
            "Title:": "God of the Nile",
            "Pantheon:": "Egyptian",
            "Type:": "Melee,Magical",
            "Class:": "Guardian",
            "Pros:": "High Crowd Control, High Defense",
            "Difficulty:": "Easy",
            "Release date:": "May 31, 2012",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Sobek voicelines",
            "Voice actor:": "Brandon Potter",
            "Health:": "490 (+95)",
            "Mana:": "210 (+35)",
            "Speed:": "365 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "0.85 (+1.4%)",
            "Damage:": "38 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "19 (+3)",
            "Magical:": "27 (+1.3)",
            "HP5:": "6 (+0.75)",
            "MP5:": "4.5 (+0.43)",
            "imageURL": require("../assets/images/Sobek.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Blessing of the Nile",
                "description": "Sobek's Basic Attacks and abilities that hit an enemy grant him Protections for a short time.",
                "imageURL": require("../assets/images/Sobek_ability_0.png"),
                "notes": [
                    "Each stack grants 4.3 protections (12.9 total) at level 1 and 10 (30 total) at level 20.",
                    "Attacks must deal at least 1 damage to gain stacks and only provide 1 stack per ability/basic attack regardless of how many targets were hit.",
                    "Each stack refreshes the buff duration.",
                    "Protections: 4 +.3 per Level",
                    "Lifetime: 6s",
                    "Max Stacks: 3",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Charge Prey",
                "description": "Sobek charges forward at a frenzied pace. If Sobek hits an enemy, he does damage, becomes briefly CC Immune, and throws the enemy behind him. Sobek is immune to Knockups while dashing.",
                "imageURL": require("../assets/images/Sobek_ability_1.png"),
                "notes": [
                    "Has a cc immunity duration of 0.5s.",
                    "Damage: 70/110/150/190/230 (+50% of your Magical Power)",
                    "Ability Type: Dash, Crowd Control, Damage",
                    "Range: 55",
                    "Cost: 70/75/80/85/90 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Tail Whip",
                "description": "Sobek whips around in a circle, knocking enemies back and doing damage.",
                "imageURL": require("../assets/images/Sobek_ability_2.png"),
                "notes": [
                    "Sobek can move freely in all direction while using this ability.",
                    "Damage: 90/135/180/225/270 (+40% of your Magical Power)",
                    "Ability Type: Circle, Knockup, Damage",
                    "Radius: 20",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Sickening Strike",
                "description": "Sobek does an axe attack that damages all enemies in front of him and lowers their healing received. In addition, Sobek heals for each enemy hit, up to 4.",
                "imageURL": require("../assets/images/Sobek_ability_3.png"),
                "notes": [
                    "Can heal up to 88/116/144/172/200 health.",
                    "Damage: 90/125/160/195/230 (+30% of your Magical Power)",
                    "Healing Reduction: 40%",
                    "Healing Reduction Lifetime: 5s",
                    "Heal: 22/29/36/43/50",
                    "Ability Type: Cone, Heal, Damage",
                    "Range: 35",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 12/11.5/11/10.5/10 seconds"
                ]
            },
            {
                "name": "Ultimate  - Lurking in the Waters",
                "description": "Sobek submerges himself, where he gains 20% protections, regenerates Mana, is immune to Crowd Control, may passthrough player-made walls, and he Slows all enemies. When Sobek emerges, he damages all enemies in the radius. Cancelling the ability decreases the damage.",
                "imageURL": require("../assets/images/Sobek_ability_4.png"),
                "notes": [
                    "Deals a minimum of 75/113/150/188/225 (+20% of your Magical Power) damage and generates up to 50% mana.",
                    "Ability must be channeled for at least 1s before it can be cancelled.",
                    "Damage: 300/450/600/750/900 (+80% of your Magical Power)",
                    "Submerge Slow: 30/35/40/45/50%",
                    "Submerge Lifetime: 5s",
                    "Submerge Mana Regen: 10% per second",
                    "Ability Type: Circle, Debuff, Damage",
                    "Radius: 30",
                    "Cost: 80/90/100/110/120 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Sol",
        "Attributes": {
            "Title:": "Goddess of the Sun",
            "Pantheon:": "Norse",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "High Single Target Damage, High Mobility",
            "Difficulty:": "Hard",
            "Release date:": "October 6, 2015",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Sol voicelines",
            "Voice actor:": "Jeannie Tirado",
            "Health:": "400 (+75)",
            "Mana:": "300 (+57)",
            "Speed:": "370 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "1 (+1.8%)",
            "Damage:": "34 (+ 1.45)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "9 (+2.6)",
            "Magical:": "23 (+1.3)",
            "HP5:": "6 (+0.45)",
            "MP5:": "4.9 (+0.4)",
            "imageURL": require("../assets/images/Sol.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Unstable Manifestation",
                "description": "Sol gains Heat as she uses abilities and hits with basic attacks. She gains +1% Magical Power and +1.2% Attack Speed for every 4% Heat. At 100% Heat, Sol's basic attacks gain +15% Damage. Heat decreases over time.",
                "imageURL": require("../assets/images/Sol_ability_0.png"),
                "notes": [
                    "Grants +25% Magical Power and +30% Attack Speed at 100% Heat.",
                    "Heat takes 6s to decay when not dealing damage with abilities or basic attacks and decays every 0.33s.",
                    "Sol will not gain Heat if abilities/autos hit damage immune targets.",
                    "Basic Attack: 5% Heat",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Radiance",
                "description": "Sol burns bright, gaining a large amount of Heat, Healing herself over time, and igniting the ground around her. Enemies that walk onto the fire take damage over time. The damaging area persists for 3s.",
                "imageURL": require("../assets/images/Sol_ability_1.png"),
                "notes": [
                    "Can deal up to 90/150/210/270/330 (+75% of your Magical Power) damage.",
                    "The HoT heals 3.6% of Sol's missing health per tick and heal ticks every 1s.",
                    "Damage: 30/50/70/90/110 (+25% of your Magical Power) every 1s",
                    "Heal: 18% of missing Health over 5s",
                    "Heat: 30/40/50/60/70%",
                    "Ability Type: Circle, Heal, Damage",
                    "Radius: 15",
                    "Cost: 60/70/80/90/100 mana",
                    "Cooldown: 11 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Stellar Burst",
                "description": "Sol's next basic attack explodes, creating a shockwave that travels out, dealing damage. At full size, the wave retracts, dealing damage again and slowing enemies.",
                "imageURL": require("../assets/images/Sol_ability_2.png"),
                "notes": [
                    "It counts as ability damage and won't trigger Basic Attack effects.",
                    "Can deal up to 80/130/180/230/280 (+80% of your Magical Power) damage.",
                    "Damage: 40/65/90/115/140 (+40% of your Magical Power)",
                    "Slow: 15/20/25/30/35% for 1.5s",
                    "Heat: 10%",
                    "Ability Type: Area Basic, Slow, Damage",
                    "Range/Radius: 55/20",
                    "Cost: 70/75/80/85/90 mana",
                    "Cooldown: 10 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Disapparate",
                "description": "Sol burns down her manifestation, gaining movement speed and immunity to Slows while leaving a trail of fire behind her that damages enemies.After 3s Sol loses corporeal form for a short time. Sol may leave her incorporeal form early.",
                "imageURL": require("../assets/images/Sol_ability_3.png"),
                "notes": [
                    "Sol burns down her manifestation, gaining movement speed and immunity to Slows while leaving a trail of fire behind her that damages enemies.\nAfter 3s Sol loses corporeal form for a short time. Sol may leave her incorporeal form early.",
                    "While incorporeal, Sol can pass through units, gods and player deployables.",
                    "Can deal up to 120/240/360/480/600 (+150% of your Magical Power) damage.",
                    "Damage: 20/40/60/80/100 (+25% of your Magical Power) every 0.5s",
                    "Movement Speed: 20/22.5/25/27.5/30%",
                    "Heat: 10%",
                    "Ability Type: Line, Buff, Damage",
                    "Cost: 60 mana",
                    "Cooldown: 16 seconds"
                ]
            },
            {
                "name": "Ultimate  - Supernova",
                "description": "Sol unleashes all her flame and fury from the sky, striking 8 times along a moveable ground target location. Enemies hit are knocked back on the first strike, and take only 30% damage on successive hits.",
                "imageURL": require("../assets/images/Sol_ability_4.png"),
                "notes": [
                    "The strikes have a delay time of 0.18s.",
                    "Sol is immune to Crowd Control while channeling.",
                    "Can deal up to 465/620/775/930/1085 (+155% of your Magical Power) damage.",
                    "Damage: 150/200/250/300/350 (+50% of your Magical Power)",
                    "Heat: 40%",
                    "Ability Type: Circle, Knockup, Damage",
                    "Range/Radius: 55/12",
                    "Cost: 100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Sun Wukong",
        "Attributes": {
            "Title:": "The Monkey King",
            "Pantheon:": "Chinese",
            "Type:": "Melee,Physical",
            "Class:": "Warrior",
            "Pros:": "High Defense, High Mobility",
            "Difficulty:": "Average",
            "Release date:": "October 23, 2013",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Sun Wukong voicelines",
            "Voice actor:": "Sean Schemmel",
            "Health:": "480 (+85)",
            "Mana:": "205 (+35)",
            "Speed:": "370 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+0.9%)",
            "Damage:": "39 (+ 2)+ 100% of Physical Power",
            "Progression:": "1/.75/1/1.25x damage",
            "Physical:": "18 (+3)",
            "Magical:": "24 (+1.3)",
            "HP5:": "8 (+0.8)",
            "MP5:": "4.3 (+0.38)",
            "imageURL": require("../assets/images/Sun_Wukong.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Undefeated Body",
                "description": "When Sun Wukong is below 60% Health, he gains +10 Physical Power and +10 Protections, plus another 1.5 Physical Power and 2 Protections for his current level. While Undefeated Body is active, if Sun Wukong goes above 50% Health, he maintains the buff for 8s.",
                "imageURL": require("../assets/images/Sun_Wukong_ability_0.png"),
                "notes": [
                    "Grants 40 Physical Power and 50 Protections (11.5 Physical Power and 12 Protections at level 1) at level 20.",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - The Magic Cudgel",
                "description": "Sun Wukong's Magic Cudgel grows in length, and he slams it down, damaging all enemies in front of him. Minions and Jungle Camps take an extra +20% damage.",
                "imageURL": require("../assets/images/Sun_Wukong_ability_1.png"),
                "notes": [
                    "Sun Wukong can move and turn during the windup.",
                    "Deals 120/158/216/264/312 (+72% of your Physical Power) damage to lane and jungle minions.",
                    "Damage: 100/140/180/220/260 (+60% of your Physical Power)",
                    "Ability Type: Line, Damage",
                    "Range: 55",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Master's Will",
                "description": "Sun Wukong strikes around him, damaging, Slowing, and Slowing the Attack Speed of all enemies hit.",
                "imageURL": require("../assets/images/Sun_Wukong_ability_2.png"),
                "notes": [
                    "Damage: 90/140/190/240/290 (+65% of your Physical Power)",
                    "Movement Slow: 20/22.5/25/27.5/30% for 3s",
                    "Attack Speed Slow: 20/22.5/25/27.5/30% for 3s",
                    "Ability Type: Circle, Slow, Damage",
                    "Radius: 20",
                    "Cost: 60 mana",
                    "Cooldown: 11 seconds"
                ]
            },
            {
                "name": "3rd Ability  - 72 Transformations",
                "description": "Sun Wukong transforms into an Eagle, Tiger, or Ox, and charges forward. Eagle: Is the fastest of the three forms. Immune to Slow and Root effects. Tiger: Mauls the first enemy runs into, Stunning and causing damage. Ox: Knocks aside all enemies in his path and causes damage. Immune to Slow, Root, and Knockup effects.",
                "imageURL": require("../assets/images/Sun_Wukong_ability_3.png"),
                "notes": [
                    "Sun Wukong has a slower turn rate while transformed.",
                    "Has a targeter length of 75 which displays as ox if used below 20 units, tiger if between 20 and 50 units and eagle when above 50 units.",
                    "Tiger Damage: 100/170/240/310/380 (+80% of your Physical Power)",
                    "Tiger Stun: 1.4s",
                    "Ox Damage: 70/105/140/175/210 (+60% of your Physical Power)",
                    "Ability Type: Dash, Crowd Control, Damage",
                    "Cost: 65/70/75/80/85 mana",
                    "Cooldown: 16/15.5/15/14.5/14 seconds"
                ]
            },
            {
                "name": "Ultimate  - Somersault Cloud",
                "description": "Sun Wukong leaps onto his cloud for up to 5s, leaving a Pet behind to fight. While on the cloud Sun Wukong is invisible, and regenerates Health. He may leap off before the duration expires, dealing damage. The Pet inherits 100% of Sun Wukong's Health and Protections and 50% of his Basic Attack Power. The Pet is killed instantly if hit by a hard Crowd Control excluding Banishes and Knockbacks. If the Pet dies, Sun Wukong is revealed on his cloud.",
                "imageURL": require("../assets/images/Sun_Wukong_ability_4.png"),
                "notes": [
                    "Sun Wukong is immune to crowd control for the duration.",
                    "Heals up to 17.5% health for the duration and the decoy can last up to 10s.",
                    "The pet is prioritized as a god by towers and minions.",
                    "The decoy doesn't remove backdoor protections from towers and phoenixes.",
                    "If there is no valid landing location, Sun Wukong will land at the closest valid point near the targeter.",
                    "Damage: 200/275/350/425/500 (+100% of your Physical Power)",
                    "Healing: 3.5% per second",
                    "Ability Type: Circle, Heal, Damage",
                    "Range/Radius: 60/25",
                    "Cost: 100 mana",
                    "Cooldown: 110/105/100/95/90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Surtr",
        "Attributes": {
            "Title:": "The Fire Giant",
            "Pantheon:": "Norse",
            "Type:": "Melee,Physical",
            "Class:": "Warrior",
            "Pros:": "High Single Target Damage",
            "Difficulty:": "Average",
            "Release date:": "January 24, 2023",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Surtr voicelines",
            "Voice actor:": "Marc Graue",
            "Health:": "479 (+84)",
            "Mana:": "230 (+35)",
            "Speed:": "375 (+0)",
            "Range:": "16 (+0)",
            "Attack/Sec:": "1 (+1.2)",
            "Damage:": "39 (+ 2.2)+ 100% of Physical Power",
            "Progression:": "1/0.75/1/1.5x damage and swing time, hitting in an AoE on the second and third attacks",
            "Physical:": "18 (+3)",
            "Magical:": "24 (+1.3)",
            "HP5:": "9 (+0.8)",
            "MP5:": "4.6 (+0.38)",
            "imageURL": require("../assets/images/Surtr.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Obsidian Flesh",
                "description": "Surtr's flesh cracks into fragments after he loses enough health. On picking these up Surtr gains a percentage of his Max. Health over time and Protections for 3s (max. 3 stacks). Enemies can destroy these fragments by walking over them.",
                "imageURL": require("../assets/images/Surtr_ability_0.png"),
                "notes": [
                    "Each fragment heals Surtr for a total of 1.8% of his max health and provides 26 protections (7 at level 1) at level 20 with all 3 providing a total of 78 protections (21 at level 1) at level 20.",
                    "Multiple fragments do not increase the buff duration, instead refreshes it.",
                    "The fragments last up to 5s.",
                    "Heal per tick: 0.6%",
                    "Protections: 6 + 1 Per level",
                    "Health Threshold: 15%",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Flames of Muspell",
                "description": "Surtr sets his sword ablaze gaining Haste while this buff is active. Surtr's next successful Basic Attack will deal bonus magical damage, ignite the target causing them to take damage over time as well as spawning a Fiery Imp.This ability's bonus damage increases per stack (max. of 999). Surtr gains 1 stack when hitting an enemy, or 3 if the target is a god. Surtr also gains 2 stacks when killing an enemy, or 5 if the target is a god.",
                "imageURL": require("../assets/images/Surtr_ability_1.png"),
                "notes": [
                    "Surtr sets his sword ablaze gaining Haste while this buff is active. Surtr's next successful Basic Attack will deal bonus magical damage, ignite the target causing them to take damage over time as well as spawning a Fiery Imp.\nThis ability's bonus damage increases per stack (max. of 999). Surtr gains 1 stack when hitting an enemy, or 3 if the target is a god. Surtr also gains 2 stacks when killing an enemy, or 5 if the target is a god.",
                    "The DoT deals 30/75/120/165/210 (+30% of your Physical Power) damage and up to 1035 bonus magical damage with full stacks.",
                    "The empowered basic attack triggers item effects.",
                    "If multiple enemies are hit by either Surtr's 2nd or 3rd basic attacks while the ability is active, the DoT/Imp spawn will only affect the first target hit (or in the center) and doesn't affect structures, player-made deployables nor wards.",
                    "Fiery Imps have up to 300 HP at rank 5, attack once per second and don't remove backdoor protections from towers and phoenixes.",
                    "Damage per tick: 10/25/40/55/70 (+10% of your Physical Power) every second for 3s.",
                    "Bonus Damage: 35 + 1 per stack (Magical Damage)",
                    "Imp Damage: 10/15/20/25/30 (+10% of your Physical Power)",
                    "Imp Health: 50 + 50 per rank",
                    "Imp Lifetime: 10s",
                    "Ability Type: Buff",
                    "Duration: 5s",
                    "Cost: 50 mana",
                    "Cooldown: 14/13/12/11/10 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Giant's Grasp",
                "description": "Surtr pulls the closest target to him, either an enemy lane minion, a Fiery Imp or a magma rock if neither are in range. Surtr then hurls the object forwards, dealing damage and stunning enemies ahead.Magma Rock - Stops on first enemyLane Minion - Passes through minions, stopping on first enemy god.Fiery Imp - Passes through minions, stopping on first enemy god and exploding in an area",
                "imageURL": require("../assets/images/Surtr_ability_2.png"),
                "notes": [
                    "Surtr pulls the closest target to him, either an enemy lane minion, a Fiery Imp or a magma rock if neither are in range. Surtr then hurls the object forwards, dealing damage and stunning enemies ahead.\nMagma Rock - Stops on first enemy",
                    "Lane Minion - Passes through minions, stopping on first enemy god.",
                    "Fiery Imp - Passes through minions, stopping on first enemy god and exploding in an area",
                    "Has a minion grab range of 20 and AoE when throwing an Imp of 15.",
                    "If 5s are passed and Surtr has not thrown the object currently held when the ability expires, Surtr will automatically hurl the object forward.",
                    "Damage: 90/145/200/255/310 (+70% of your Physical Power)",
                    "AoE Damage: 30/60/90/120/150 (+30% of your Physical Power)",
                    "Stun Duration: 1.2s",
                    "Ability Type: Circle & Line",
                    "Range: 55",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 13 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Emberwalk",
                "description": "Surtr's fury creates a ring of embers around him providing a Movement Speed buff that increases for hitting enemies, while the ability is active.The ring deals damage and slows enemies once as it expands or when fully formed and again when it contracts.While formed, the outer ring deals continuous damage to enemies inside. The ring also picks up Obsidian Flesh fragments.",
                "imageURL": require("../assets/images/Surtr_ability_3.png"),
                "notes": [
                    "Surtr's fury creates a ring of embers around him providing a Movement Speed buff that increases for hitting enemies, while the ability is active.",
                    "The ring deals damage and slows enemies once as it expands or when fully formed and again when it contracts.",
                    "While formed, the outer ring deals continuous damage to enemies inside. The ring also picks up Obsidian Flesh fragments.",
                    "Deals up to 150/230/310/390/470 (+60% of your Physical Power) damage and provides up to 25% movement speed when hitting 3 enemies with this ability.",
                    "The slow's duration is refreshed upon re-entering the radius of the ability.",
                    "The bonus damage from the outer ring ticks every 0.5s.",
                    "Re-activating the ability while active will cancel it.",
                    "Damage: 35/55/75/95/115 (+20% of your Physical Power)",
                    "Bonus Damage: 10/15/20/25/30 (+5% of your Physical Power)",
                    "Movement Speed: 10% + 5% per enemy hit (max. 3 stacks)",
                    "Slow: 15% for 2s",
                    "Duration: 4s",
                    "Ability Type: Buff",
                    "Radius: 25",
                    "Cost: 65/70/75/80/85 mana",
                    "Cooldown: 15 seconds"
                ]
            },
            {
                "name": "Ultimate  - End of Days",
                "description": "After a short buildup, Surtr surges into the air infusing into a large Meteor. While in the air, Surtr is immune to damage and can choose where to come crashing down.Before landing, Meteorites split off, targeting enemies on the ground, dealing damage and spawning Fiery Imps.Surtr's Meteor deals increased damage and knocks up enemies hit.",
                "imageURL": require("../assets/images/Surtr_ability_4.png"),
                "notes": [
                    "After a short buildup, Surtr surges into the air infusing into a large Meteor. While in the air, Surtr is immune to damage and can choose where to come crashing down.\nBefore landing, Meteorites split off, targeting enemies on the ground, dealing damage and spawning Fiery Imps.\nSurtr's Meteor deals increased damage and knocks up enemies hit.",
                    "Surtr is immune to crowd control during this ability.",
                    "Has a delay time of 2s before becoming untargetable and an air time of 4s.",
                    "Spawns a total of 5 Fiery Imps during the ability.",
                    "Meteorites have a radius of 15.",
                    "If there is no valid landing point, Surtr will land at the closest valid point near the targeter and the same goes for Fiery Imps.",
                    "Damage: 210/285/360/435/510 (+60% of your Physical Power)",
                    "Meteorite Damage: 50/75/100/125/150 (+15% of your Physical Power)",
                    "Ability Type: Ground Target",
                    "Radius: 20",
                    "Cost: 100 mana",
                    "Cooldown: 100 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Susano",
        "Attributes": {
            "Title:": "God of the Summer Storm",
            "Pantheon:": "Japanese",
            "Type:": "Melee,Physical",
            "Class:": "Assassin",
            "Pros:": "High Crowd Control, High Mobility",
            "Difficulty:": "Hard",
            "Release date:": "May 10, 2016",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Susano voicelines",
            "Voice actor:": "Jim Foronda",
            "Health:": "435 (+76)",
            "Mana:": "225 (+38)",
            "Speed:": "370 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+2.16%)",
            "Damage:": "38 (+ 2.2)+ 100% of Physical Power",
            "Progression:": "1/1/1.25x damage and swing time",
            "Physical:": "14 (+2.9)",
            "Magical:": "23 (+1.3)",
            "HP5:": "9 (+0.7)",
            "MP5:": "4.2 (+0.27)",
            "imageURL": require("../assets/images/Susano.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Gathering Storm",
                "description": "Each time Susano successfully deals damage to at least one enemy god with an ability he gains a stack. At 4 stacks, his next ability within 5 seconds that hits an enemy god will deal bonus damage.",
                "imageURL": require("../assets/images/Susano_ability_0.png"),
                "notes": [
                    "If either Storm Kata or Jet Stream trigger the bonus damage, it will only be applied on the first hit/tick of damage.",
                    "Bonus Damage: 25 (+30% of your Physical Power)",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Storm Kata",
                "description": "Susano moves thrice in quick succession; after each attack he has up to 3s to fire the next one. First Attack: 100% Damage to all Enemies in a cone. Second Attack: 100% Damage to all Enemies in a circle. Third Attack: 50% Damage while Dashing forward.",
                "imageURL": require("../assets/images/Susano_ability_1.png"),
                "notes": [
                    "The first attack has a prefire of .1s.",
                    "Susano may use Basic Attacks and other Abilities between each attack.",
                    "The third attack deals 20/32.5/45/57.5/70 (+25% of your Physical Power) damage.",
                    "Can deal up to 100/163/225/278/350 (+125% of your Physical Power) damage.",
                    "The ability will end early if no attack is selected after 3s.",
                    "Damage per Hit: 40/65/90/115/140 (+50% of your Physical Power)",
                    "Ability Type: Area, Damage",
                    "Range: 30, 40/30",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 16/15/14/13/12 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Wind Siphon",
                "description": "Susano commands the winds to blow, dealing damage in a cone in front of him. Enemies in the center of the attack are pulled towards him.",
                "imageURL": require("../assets/images/Susano_ability_2.png"),
                "notes": [
                    "This ability cannot pull players through walls.",
                    "Damage: 80/110/140/170/200 (+70% of your Physical Power)",
                    "Ability Type: Cone, Knockback, Damage",
                    "Radius: 35",
                    "Cost: 80/75/70/65/60 mana",
                    "Cooldown: 16 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Jet Stream",
                "description": "Susano throws forward a gust of air which creates a whirlwind, dealing damage every .75s for 3s. He may activate this ability again to teleport to the whirlwind. If the initial gust hits an Enemy, the whirlwind surrounds and travels with them, and teleporting to the Enemy reduces this cooldown to 10s.",
                "imageURL": require("../assets/images/Susano_ability_3.png"),
                "notes": [
                    "The projectile will stop on contact with a wall/player-made wall or deployable.",
                    "Can deal up to 80/120/160/200/240 (+80% of your Physical Power) damage.",
                    "If the ability is reactivated when at 10s on cooldown or less will not lower the cooldown.",
                    "Damage per Tick: 20/30/40/50/60 (+20% of your Physical Power)",
                    "Ability Type: Circle, Teleport, Damage",
                    "Range/Radius: 45/10",
                    "Cost: 45/50/55/60/65 mana",
                    "Cooldown: 16 seconds"
                ]
            },
            {
                "name": "Ultimate  - Typhoon",
                "description": "Susano summons a hurricane at his location, creating a Vortex that drags enemies towards the center while growing to up to twice its size, increasing the damage as it grows. Upon reaching full size, the storm is launched in the direction he is facing, knocking up opponents in its path. Susano may re-activate this ability early to fire the storm at it's current size for reduced damage. If fired at less than half of its maximum size, he also foregoes the knock-up.",
                "imageURL": require("../assets/images/Susano_ability_4.png"),
                "notes": [
                    "The hurricane has a pull strength of 88 and applies a 10% slow to enemies in the area and takes 2s for it to reach full size.",
                    "Deals a minimum of 209/255/308/365/416 (+108% of your Physical Power) damage.",
                    "Can be refired at any time even while under crowd control or dead.",
                    "Max Damage: 235/300/365/430/495 (+115% of your Physical Power)",
                    "Ability Type: Circle, Knockup, Damage",
                    "Range/Radius: 70/15-30",
                    "Cost: 80/85/90/95/100 mana",
                    "Cooldown: 100 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Sylvanus",
        "Attributes": {
            "Title:": "Keeper of the Wild",
            "Pantheon:": "Roman",
            "Type:": "Ranged,Magical",
            "Class:": "Guardian",
            "Pros:": "High Crowd Control, High Sustain",
            "Difficulty:": "Average",
            "Release date:": "October 1, 2014",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Sylvanus voicelines",
            "Voice actor:": "Sylvanus: Bob ReedGrover: Christopher Sabat",
            "Health:": "510 (+95)",
            "Mana:": "190 (+34)",
            "Speed:": "370 (+0)",
            "Range:": "40 (+0)",
            "Attack/Sec:": "0.9 (+0.8%)",
            "Damage:": "38 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "21 (+3.4)",
            "Magical:": "27 (+1.3)",
            "HP5:": "8 (+0.8)",
            "MP5:": "4.6 (+0.4)",
            "imageURL": require("../assets/images/Sylvanus.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Nature's Bounty",
                "description": "When Sylvanus’ abilities hit or are deployed a seed pod appears. When Sylvanus picks up this seed pod he restores 2.5% of his Mana as well as lowers his cooldowns by 0.5s. At level 15 this Cooldown Reduction is increased to 1s.",
                "imageURL": require("../assets/images/Sylvanus_ability_0.png"),
                "notes": [
                    "Sylvanus' Basic Attacks have a radius of 10, benefit from only 33% Lifesteal and cannot go through walls.",
                    "The seeds have a maximum duration of 10s.",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Verdant Growth",
                "description": "Sylvanus throws a seed to a target location. If it hits an enemy they will take damage, lose Protections, and become Rooted. If the seed lands on the ground, after 5s it will grow into a flower providing MP5 to nearby allies. The pod can be destroyed by Basic Attacks (maximum 3 pods), exploding and releasing poisonous spores that reduce Protections of nearby enemies.",
                "imageURL": require("../assets/images/Sylvanus_ability_1.png"),
                "notes": [
                    "Can be used through walls.",
                    "Has an MP5/Penetration radius of 30.",
                    "Multiple MP5 auras do not stack.",
                    "Placing more than 3 pods will cause the oldest one to be destroyed.",
                    "Can reduce up to 15/30/45/60/75 Protections.",
                    "Damage: 80/120/160/200/240 (+50% of your Magical Power)",
                    "MP5 Increase: 20",
                    "Protections Reduced: 5/10/15/20/25 + 5% for 5s",
                    "Root Duration: 1.5s",
                    "Ability Type: Circle, Root, Damage",
                    "Range/Radius: 45/10",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 15/14/13/12/11 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Wisps",
                "description": "Sylvanus releases wisps that seek out nearby allies and enemies. Allied gods are Protected and all allies are Healed while enemies take damage over time.The initial wisp heals allied gods and damages enemies for twice the normal amount. This ability does not create seed pods when hitting minions.",
                "imageURL": require("../assets/images/Sylvanus_ability_2.png"),
                "notes": [
                    "Sylvanus releases wisps that seek out nearby allies and enemies. Allied gods are Protected and all allies are Healed while enemies take damage over time.\nThe initial wisp heals allied gods and damages enemies for twice the normal amount. This ability does not create seed pods when hitting minions.",
                    "Deals a total of 84/120/156/192/228 (+60% of your Magical Power) damage (29/42/55/67/80 (+21% of your Magical Power) damage to minions) and heals a total of 50/75/100/125/150 health (17.5/26/35/44/52.5 health to minions).",
                    "Damage: 14/20/26/32/38 (+10% of your Magical Power) every 1s for 5s",
                    "Heal: 10/14/18/22/26 every 1s for 5s",
                    "Protections Gained: 10/15/20/25/30 for 5s",
                    "Ability Type: Target, Heal, Damage",
                    "Minion Effectiveness: 35% Healing and Damage",
                    "Radius: 30",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Nature's Grasp",
                "description": "Sylvanus's treant launches his rooty hand out in front of him. The hand stops at the first enemy god hit, Stunning them with no diminishing returns and pulling them back towards Sylvanus.",
                "imageURL": require("../assets/images/Sylvanus_ability_3.png"),
                "notes": [
                    "Can go/pull enemies through walls.",
                    "Stun Duration: 1s",
                    "Ability Type: Line, Grab",
                    "Range: 60",
                    "Cost: 70/65/60/55/50 mana",
                    "Cooldown: 14/13/12/11/10s seconds"
                ]
            },
            {
                "name": "Ultimate  - Wrath of Terra",
                "description": "Sylvanus's treant slams his large trunks into the ground causing large thorny roots to break out of the ground around him. Enemies hit are knocked up and poisoned.",
                "imageURL": require("../assets/images/Sylvanus_ability_4.png"),
                "notes": [
                    "Sylvanus is immune to crowd control for a short duration on use.",
                    "Deals a total of 300/375/450/525/600 (+125% of your Magical Power) damage.",
                    "Damage: 60/75/90/105/120 (+25% of your Magical Power) every 1s for 5s",
                    "Ability Type: Circle, Knockup, Damage",
                    "Radius: 35",
                    "Cost: 100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Terra",
        "Attributes": {
            "Title:": "The Earth Mother",
            "Pantheon:": "Roman",
            "Type:": "Melee,Magical",
            "Class:": "Guardian",
            "Pros:": "High Sustain, High Area Damage",
            "Difficulty:": "Hard",
            "Release date:": "August 2, 2016",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Terra voicelines",
            "Voice actor:": "Erica Lindbeck",
            "Health:": "500 (+95)",
            "Mana:": "200 (+35)",
            "Speed:": "365 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "0.9 (+1.4%)",
            "Damage:": "38 (+ 1.55)+ 20% of Magical Power",
            "Progression:": "1/1/1/1x damage and swing time",
            "Physical:": "19 (+3.2)",
            "Magical:": "27 (+1.3)",
            "HP5:": "8 (+0.8)",
            "MP5:": "4.6 (+0.4)",
            "imageURL": require("../assets/images/Terra.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Standing Stones",
                "description": "Terra's abilities create Standing Stones. While any Standing Stones are active Terra is Knockup immune. Additionally her Basic Attacks will cleave, slow, and deal bonus damage to enemies. This Bonus Damage does not trigger item effects. If Terra Shatters any stones she will retain this buff for 3s after all of the stones are gone.",
                "imageURL": require("../assets/images/Terra_ability_0.png"),
                "notes": [
                    "The stones have unit collision.",
                    "The stones show a cracked texture when they are about to disappear.",
                    "The slow's duration refreshes after each successful basic attack.",
                    "Slow: 30% for 1.25s",
                    "Bonus Damage: 7 (+10% of your Magical Power)",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Force of Nature",
                "description": "Terra gains momentum, causing her to charge forward and deal damage to enemies she passes through.Terra may charge through her own Standing Stones to Shatter them. If she does she may charge one more time within the next 3s. Terra may use this ability without putting a point into it, but it deals no damage and has a 20s cooldown.",
                "imageURL": require("../assets/images/Terra_ability_1.png"),
                "notes": [
                    "Terra gains momentum, causing her to charge forward and deal damage to enemies she passes through.\nTerra may charge through her own Standing Stones to Shatter them. If she does she may charge one more time within the next 3s. Terra may use this ability without putting a point into it, but it deals no damage and has a 20s cooldown.",
                    "Can deal up to 120/220/320/420/520 (+60% of your Magical Power) damage with both dashes.",
                    "Terra can use basic attacks and abilities between dashes if shattered at least one stone.",
                    "Damage: 60/110/160/210/260 (+30% of your Magical Power)",
                    "Ability Type: Dash, Damage",
                    "Range: 35",
                    "Cost: 50 mana",
                    "Cooldown: 11 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Crushing Earth",
                "description": "Terra raises up two Standing Stone walls on either side of a target location. As long as both stones stand, Terra may activate this ability again to slam the stones together, damaging and Stunning enemies in between for 1.5s.These stones can be Shattered into a cone of shrapnel with Force of Nature, damaging enemies in the area.",
                "imageURL": require("../assets/images/Terra_ability_2.png"),
                "notes": [
                    "Terra raises up two Standing Stone walls on either side of a target location. As long as both stones stand, Terra may activate this ability again to slam the stones together, damaging and Stunning enemies in between for 1.5s.\nThese stones can be Shattered into a cone of shrapnel with Force of Nature, damaging enemies in the area.",
                    "Has a prefire of 0.7s.",
                    "The walls can be deployed through map walls.",
                    "Damage is dealt when the moving walls touch the target.",
                    "The wall slam can deal up to 100/170/240/310/370 (+70% of your Magical Power) damage and 120/220/320/420/520 (+70% of your Magical Power) damage when shattered.",
                    "The cones from the shatter have a range of 50.",
                    "Can only either be re-fired or shattered with a single use of the ability.",
                    "Can be refired at any time even while under crowd control or dead.",
                    "Wall Duration: 5s",
                    "Damage Per Wall: 50/85/120/155/190 (+35% of your Magical Power)",
                    "Shatter Damage: 60/110/160/210/260 (+35% of your Magical Power)",
                    "Ability Type: Area, Stun, Damage",
                    "Range: 55",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 15/14.5/14/13.5/13 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Monolith",
                "description": "Terra summons a Standing Stone monolith that presists for up to 10. The monolith heals nearby allied gods every .5s for the duration and provides Protections but can be destroyed early if hit by 5 enemy basic attacks.Terra can Shatter this stone with Force of Nature to Root enemies in the area for 1s and create a damaging area that lasts 5s.",
                "imageURL": require("../assets/images/Terra_ability_3.png"),
                "notes": [
                    "Terra summons a Standing Stone monolith that presists for up to 10. The monolith heals nearby allied gods every .5s for the duration and provides Protections but can be destroyed early if hit by 5 enemy basic attacks.\nTerra can Shatter this stone with Force of Nature to Root enemies in the area for 1s and create a damaging area that lasts 5s.",
                    "Heals up to 80/160/240/320/400 health and deals up to 210/260/310/360/410 (+100% of your Magical Power) damage.",
                    "Monolith Duration: 10s",
                    "Heal Per Tick: 4/8/12/16/20",
                    "Shatter Damage: 90/120/150/180/210 (+50% of your Magical Power)",
                    "Root: 1s",
                    "Damage Per Tick: 12/14/16/18/20 (+5% of your Magical Power)",
                    "Ability Type: Circle, Heal, Damage",
                    "Range/Radius: 55/30",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 16 seconds"
                ]
            },
            {
                "name": "Ultimate  - Earthen Fury",
                "description": "Terra channels her strength into the world around her, buffing her allies and debuffing enemies for 10s.Allies gain 10% damage mitigation and protective stones that heal the ally if all 4 are activated.Enemies receive 5% more damage from all sources and harmful stones that damage the enemy if all 4 are activated.Stones are activated when an ally or enemy receives damage.",
                "imageURL": require("../assets/images/Terra_ability_4.png"),
                "notes": [
                    "Heal: 75/105/140/175/210",
                    "Damage: 200/250/300/350/400 (+60% of your Magical Power)",
                    "Ability Type: Circle, Buff, Damage",
                    "Radius: 55",
                    "Cost: 100 mana",
                    "Cooldown: 90/85/80/75/70 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Thanatos",
        "Attributes": {
            "Title:": "Hand of Death",
            "Pantheon:": "Greek",
            "Type:": "Melee,Physical",
            "Class:": "Assassin",
            "Pros:": "High Sustain",
            "Difficulty:": "Average",
            "Release date:": "September 18, 2013",
            "Favor:": "(Free) 0",
            "Gems:": "(Free) 0",
            "Voicelines:": "Thanatos voicelines",
            "Voice actor:": "Scott Freeman",
            "Health:": "390 (+75)",
            "Mana:": "240 (+38)",
            "Speed:": "370 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+1.7%)",
            "Damage:": "39 (+ 2.3)+ 100% of Physical Power",
            "Progression:": "1/.75/1.5x damage and swing time, hitting in an AoE on the final blow",
            "Physical:": "14 (+2.9)",
            "Magical:": "23 (+1.3)",
            "HP5:": "8 (+0.67)",
            "MP5:": "4.4 (+0.38)",
            "imageURL": require("../assets/images/Thanatos.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Harvester of Souls",
                "description": "Enemy gods within his ultimate's execute Health threshold are revealed to Thanatos. Dealing the killing blow to enemies also empowers Thanatos, healing him based on the max HP of his target and reducing his active cooldowns. Additionally, all of Thanatos' abilities cost Health and Mana to use.",
                "imageURL": require("../assets/images/Thanatos_ability_0.png"),
                "notes": [
                    "Doesn't reveal stealthed gods.",
                    "If Thanatos casts an ability while below 4% or 8% of his current HP depending of the ability chosen, that ability will still consume Thanatos' HP however it cannot go below 1 HP.",
                    "HP Restore (Gods): 15% of target's max HP",
                    "HP Restore (Minions): 7% of target's max HP",
                    "Cooldown Reduction (Gods): 5s",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Death Scythe",
                "description": "Thanatos flings his scythe at an enemy, dealing damage and an additional 10% of the target's maximum Health against enemy gods. Enemies hit are slowed for 3s and heal Thanatos based on damage dealt. Consumes 4% of Thanatos' current HP when used.",
                "imageURL": require("../assets/images/Thanatos_ability_1.png"),
                "notes": [
                    "Heals for 47.5/82.5/117.5/152.5/187.5 health when hitting non-god sources.",
                    "Damage: 95/165/235/305/375 (+60% of your Physical Power)",
                    "Bonus Damage (Gods): 10% of max HP",
                    "Healing: 50% of damage dealt",
                    "Slow: 20%",
                    "Ability Type: Line, Slow, Damage",
                    "Range: 70",
                    "Cost: 25/35/45/55/65 mana",
                    "Cooldown: 14/13.5/13/12.5/12 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Scent of Death",
                "description": "Thanatos senses death, gaining immunity to Slow effects and additional move speed and Physical Penetration for 6s. His speed bonus increases up to double when moving toward an enemy god within the instant kill Health threshold of his Ultimate. Consumes 4% of Thanatos' current HP when used.",
                "imageURL": require("../assets/images/Thanatos_ability_2.png"),
                "notes": [
                    "Gains 16/24/32/40/48% Movement Speed when moving towards targets below the execute threshold.",
                    "Penetration: 5/10/15/20/25",
                    "Move Speed: 8/12/16/20/24%",
                    "Bonus Speed (Low Health): 8/12/16/20/24%",
                    "Ability Type: Buff",
                    "Cost: 20/25/30/35/40 mana",
                    "Cooldown: 13 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Soul Reap",
                "description": "Thanatos swings his scythe, dealing Physical damage and Silencing enemies he hits. Thanatos moves at a reduced rate while swinging. Consumes 4% of Thanatos' current HP when used.",
                "imageURL": require("../assets/images/Thanatos_ability_3.png"),
                "notes": [
                    "Its hitbox sweeps right to left in a cone in front of Thanatos.",
                    "Damage: 100/150/200/250/300 (+70% of your Physical Power)",
                    "Silence Duration: 1s",
                    "Ability Type: Cone, Silence, Damage",
                    "Range: 35",
                    "Cost: 25/30/35/40/45 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "Ultimate  - Hovering Death",
                "description": "Thanatos flaps his wings and ascends for 5s, unable to be hit. While airborne, he moves unimpeded at an increased speed before diving to his target location, dealing damage. Enemies below a Health threshold are instantly killed. All others are Stunned. Consumes 8% of Thanatos' current HP when used.",
                "imageURL": require("../assets/images/Thanatos_ability_4.png"),
                "notes": [
                    "The bonus Movement Speed buff is affected by Scent of Death's low health target boost.",
                    "The execute from this ability also ignores shields,  The Alternate Timeline, Kumbhakarna's and Persephone's passive abilities and Khepri's ultimate.",
                    "Thanatos is immune from crowd control effects while using this ability.",
                    "If there is no valid landing location, Thanatos will land at the closest valid point near the targeter.",
                    "Damage: 110/145/180/215/250 (+80% of your Physical Power)",
                    "Kill HP Threshold: 24/28/32/36/40%",
                    "Stun Duration: 1.5s",
                    "Bonus Move Speed: 150%",
                    "Ability Type: Circle, Stun, Damage",
                    "Range/Radius: 55/15",
                    "Cost: 40/50/60/70/80 mana",
                    "Cooldown: 110/105/100/95/90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "The Morrigan",
        "Attributes": {
            "Title:": "Phantom Queen",
            "Pantheon:": "Celtic",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "High Area Damage",
            "Difficulty:": "Very Hard",
            "Release date:": "January 10, 2017",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "The Morrigan voicelines",
            "Voice actor:": "Elizabeth Maxwell",
            "Health:": "450 (+75)",
            "Mana:": "250 (+38)",
            "Speed:": "365 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.87 (+1%)",
            "Damage:": "34 (+ 2.4)+ 20% of Magical Power",
            "Progression:": "1/1/1x damage and swing time; 3rd attack hits all enemies in a 10 unit area",
            "Physical:": "14 (+3)",
            "Magical:": "25 (+1.3)",
            "HP5:": "10 (+0.7)",
            "MP5:": "4.5 (+0.4)",
            "imageURL": require("../assets/images/The_Morrigan.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Doomsayer",
                "description": "The 3rd hit of The Morrigan's hit chain will explode, dealing damage to all enemies within range and Dooming all enemies hit. Doomed Enemies will take additional Basic Attack damage over time.",
                "imageURL": require("../assets/images/The_Morrigan_ability_0.png"),
                "notes": [
                    "Deals 3% of the target's Max HP per tick.",
                    "The AoE from the final basic attack in The Morrigan's hit chain also benefits from only 33% Lifesteal.",
                    "Damage: 9% of the target's Max HP",
                    "Duration: 3s",
                    "Ability Type: Area Basic, Damage",
                    "Radius: 10"
                ]
            },
            {
                "name": "1st Ability  - Deadly Aspects",
                "description": "When activated, The Morrigan begins combining the power from all three of her forms. When activated again, they simultaneously damage and stun enemies in front of them. Jungle Camps take an extra +15% damage.",
                "imageURL": require("../assets/images/The_Morrigan_ability_1.png"),
                "notes": [
                    "Can be used during Confusion's stealth without dispelling it.",
                    "Deals 92/155/218.5/282/345 (+86% of your Magical Power) damage to Jungle minions.",
                    "Damage: 80/135/190/245/300 (+75% of your Magical Power)",
                    "Stun Duration: 1s",
                    "Ability Type: Cone, Stun, Damage",
                    "Range: 30",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Dark Omen",
                "description": "The Morrigan launches a wave of dark magic at her enemies that deals damage, deals bonus damage to minions, and applies an Omen to enemy gods for 8 seconds. Gods with an Omen will take bonus damage the next time they are hit by any damaging ability.",
                "imageURL": require("../assets/images/The_Morrigan_ability_2.png"),
                "notes": [
                    "Can deal up to 80/140/200/260/320 (+80% of your Magical Power) damage to gods hit by a damaging ability during the Omen's duration.",
                    "Initial Damage: 40/70/100/130/160 (+40% of your Magical Power)",
                    "Minion Bonus Damage: 40/70/100/130/160 (+20% of your Magical Power)",
                    "God Bonus Damage: 40/70/100/130/160 (+40% of your Magical Power)",
                    "Ability Type: Line, Damage",
                    "Range: 70",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 7 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Confusion",
                "description": "The Morrigan creates a phantom of herself while becoming stealthed and increasing her Movement Speed. The phantom runs to the targeted area, deals no damage, and will die if it takes any damage. If The Morrigan attacks or takes damage, she will be revealed and lose her increased Movement Speed.",
                "imageURL": require("../assets/images/The_Morrigan_ability_3.png"),
                "notes": [
                    "Entering an enemy structure's attack range while stealthed will reveal her.",
                    "The pet is prioritized as a god by towers and minions.",
                    "Duration: 3/3.5/4/4.5/5s",
                    "Movement Speed: 30/32.5/35/37.5/40%",
                    "Ability Type: Buff",
                    "Range: 80",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 15 seconds"
                ]
            },
            {
                "name": "Ultimate  - Changeling",
                "description": "The Morrigan selects a God from the current match to become a copy of and cleanses herself of all effects. She copies all of their current stats and may use all of their abilities for the duration. She retains her own Relics and cannot use Consumables.The Rank of her abilities will transfer to the skills of the god she copies. This ability's cooldown will be increased to match the target God's ultimate ability cooldown. You may hover over a target and cancel to pre-select them, so you do not need to use the cursor on activation.",
                "imageURL": require("../assets/images/The_Morrigan_ability_4.png"),
                "notes": [
                    "The Morrigan selects a God from the current match to become a copy of and cleanses herself of all effects. She copies all of their current stats and may use all of their abilities for the duration. She retains her own Relics and cannot use Consumables.\nThe Rank of her abilities will transfer to the skills of the god she copies. This ability's cooldown will be increased to match the target God's ultimate ability cooldown. You may hover over a target and cancel to pre-select them, so you do not need to use the cursor on activation.",
                    "While transformed, The Morrigan gains the number of stacks from stacking items, jungle buffs and consumable effects from the god she transforms into in addition to her own buff effects.",
                    "Kills/Assists while transformed won't be displayed but are credited until after the transformation is finished and grant normal amount of gold to The Morrigan regardless of the god she transforms into.",
                    "While The Morrigan is transformed and uses an ability that makes the transformed god either untargetable, an increased delay time or affected by a banish cc when the duration expires, she will finish that ability/banish cc expires before reverting to normal.",
                    "The Morrigan cannot level-up, purchase/sell items but can upgrade abilities during the transformation.",
                    "Even with maximum CDR, this ability still copies the selected gods ultimate cooldowns to a minimum of 54s regardless on cdr/initial ult cd.",
                    "Duration: 10s",
                    "Ability Type: Buff",
                    "Cost: 100 mana",
                    "Cooldown: 140/130/120/110/100 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Thor",
        "Attributes": {
            "Title:": "God of Thunder",
            "Pantheon:": "Norse",
            "Type:": "Melee,Physical",
            "Class:": "Assassin",
            "Pros:": "High Single Target Damage, Medium Crowd Control",
            "Difficulty:": "Hard",
            "Release date:": "September 6, 2012",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Thor voicelines",
            "Voice actor:": "Bruce DuBose",
            "Health:": "460 (+76)",
            "Mana:": "240 (+38)",
            "Speed:": "370 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+1.45%)",
            "Damage:": "39 (+ 2.4)+ 100% of Physical Power",
            "Progression:": "None",
            "Physical:": "14 (+2.9)",
            "Magical:": "23 (+1.3)",
            "HP5:": "9 (+0.69)",
            "MP5:": "4.4 (+0.29)",
            "imageURL": require("../assets/images/Thor.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Warrior's Madness",
                "description": "Thor gains Physical Power for each enemy god within 55 units of him.",
                "imageURL": require("../assets/images/Thor_ability_0.png"),
                "notes": [
                    "Stacks up to 21 Physical Power.",
                    "Physical Power: 7",
                    "Max Stacks: 3",
                    "Ability Type: Buff",
                    "Radius: 55"
                ]
            },
            {
                "name": "1st Ability  - Mjolnir's Attunement",
                "description": "Thor throws Mjolnir forward, doing damage to all enemies in its path. If hit twice, minions will take 100% damage while gods take 200% damage from the return. While the hammer is flying, pressing the button again will teleport Thor to his hammer.",
                "imageURL": require("../assets/images/Thor_ability_1.png"),
                "notes": [
                    "Deals up to 120/240/360/480/600 (+90% of your Physical Power) damage to gods and 80/160/240/320/400 (+60% of your Physical Power) damage to minions.",
                    "Throwing the hammer into an invalid location, Thor will not be able to teleport to that location.",
                    "Damage: 40/80/120/160/200 (+30% of your Physical Power)",
                    "Ability Type: Line, Teleport, Damage",
                    "Range: 70",
                    "Cost: 55/60/65/70/75 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Tectonic Rift",
                "description": "Thor slams his hammer on the ground, causing a fissure to appear in front of him, Stunning and damaging enemies, and blocking movement.",
                "imageURL": require("../assets/images/Thor_ability_2.png"),
                "notes": [
                    "Damage: 30/50/70/90/110 (+20% of your Physical Power)",
                    "Stun: 1.2/1.3/1.4/1.5/1.6s",
                    "Fissure Lifetime: 3.7s",
                    "Ability Type: Line, Stun, Damage",
                    "Range: 70",
                    "Cost: 60 mana",
                    "Cooldown: 17/16.5/16/15.5/15 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Berserker Barrage",
                "description": "Thor spins his hammer around him dealing damage to Enemies in front of him up to 3 times and those behind him up to 2 times. The final swing deals extra damage. Thor is immune to Knockup for the duration.",
                "imageURL": require("../assets/images/Thor_ability_3.png"),
                "notes": [
                    "Damage is dealt in 5 hits, each with a cone angle of 180 in very quick succession, starting and ending with a frontal attack.",
                    "Deals up to 105/165/225/285/345 (+140% of your Physical Power) damage to enemies in front and 60/100/140/180/220 (+80% of your Physical Power) damage to enemies behind Thor.",
                    "Damage per Tick: 30/50/70/90/110 (+40% of your Physical Power)",
                    "Final swing Damage: 45/65/85/105/125 (+60% of your Physical Power)",
                    "Ability Type: Circle, Damage",
                    "Radius: 20",
                    "Cost: 55/60/65/70/75 mana",
                    "Cooldown: 12/11.5/11/10.5/10 seconds"
                ]
            },
            {
                "name": "Ultimate  - Anvil of Dawn",
                "description": "After a short buildup, Thor leaps into the air. While in the air, Thor can target a great distance away to come crashing down in the area, dealing damage and Stunning all enemies in the radius. For 6 seconds after landing, when Thor deals damage to a god lightning will arc, damaging the enemy hit and up to two additional enemies within 35 units. Subsequent lighting hits deal 50% damage.",
                "imageURL": require("../assets/images/Thor_ability_4.png"),
                "notes": [
                    "Thor is CC immune while charging up this ability.",
                    "Subsequent lightning hits deal 5/7.5/10/12.5/15 (+5% of your Physical Power) damage.",
                    "Lightning does not arc to towers and phoenixes.",
                    "If there is no valid landing location, Thor will land at the closest valid point near the targeter.",
                    "Damage: 100/160/220/270/340 (+85% of your Physical Power)",
                    "Stun: 1.5s",
                    "Arc Damage: 10/15/20/25/30 (+10% of your Physical Power)",
                    "Ability Type: Circle, Stun, Damage",
                    "Range/Radius: 200/20",
                    "Cost: 80/90/100/110/120 mana",
                    "Cooldown: 110/105/100/95/90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Thoth",
        "Attributes": {
            "Title:": "Arbiter of the Damned",
            "Pantheon:": "Egyptian",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "High Area Damage",
            "Difficulty:": "Average",
            "Release date:": "November 8, 2016",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Thoth voicelines",
            "Voice actor:": "Chris Guerrero",
            "Health:": "365 (+75)",
            "Mana:": "245 (+49)",
            "Speed:": "355 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "1 (+1.2%)",
            "Damage:": "32 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "9 (+2.6)",
            "Magical:": "23 (+1.3)",
            "HP5:": "6 (+0.45)",
            "MP5:": "4.6 (+0.44)",
            "imageURL": require("../assets/images/Thoth.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Dead Reckoning",
                "description": "Thoth pens the names of his fallen opponents in his book, recording their weaknesses. After killing 20 Enemies, Thoth gains a stack of 3 Flat Magical Penetration and 1% Magical Penetration, and killing an Enemy God will complete the current stack. He unlocks a new stack every 4 levels, up to a maximum of 5 stacks at level 17.",
                "imageURL": require("../assets/images/Thoth_ability_0.png"),
                "notes": [
                    "Kills for One Stack: 20",
                    "Penetration: 3 & 1% per Stack",
                    "Max Penetration: 15 & 5% at 5 Stacks",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Hieroglyphic Assault",
                "description": "Thoth conjures three Hieroglyphs around him, ignoring the Basic Attack Movement penalty. His next 3 Basic Attacks pass through Enemies and apply Ability Damage instead. Additionally, these Basic Attacks deal an additional 25% damage to jungle minions. If these attacks pass through the Glyph of Pain, their range is increased by 30. Hitting an Enemy God with this ability increases the damage they take from each subsequent shot by 10% and reduces the cooldown by 0.5s (this can only occur once per shot).",
                "imageURL": require("../assets/images/Thoth_ability_1.png"),
                "notes": [
                    "The damage bonus to gods is additive, so 3 consecutive hits deals 1x, 1.2x, and 1.4x per hit (148.5/214.5/280.5/341.5/412.5 (+82.5% of your Magical Power) damage total).",
                    "Deals up to 135/195/255/315/375 (+75% of your Magical Power) (169/244/319/394/469 (+94% of your Magical Power) damage to jungle minions) damage to minions and reduces the cooldown by a maximum of 1.5s.",
                    "Each hieroglyph deals 55/85/115/145/175 (+30% of your Magical Power) damage if they pass through the Glyph of Pain.",
                    "Damage per Shot: 45/65/85/105/125 (+25% of your Magical Power)",
                    "Glyphs Spawned: 3",
                    "Ability Type: Line, Damage",
                    "Range: 55/85",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 10 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Evade and Punish",
                "description": "Thoth dashes in the direction he is currently traveling. After dashing, for 5s Thoth's next basic attack is enhanced.This projectile roots the first Enemy god hit while slowing all other Enemies, and also deals Ability Damage.If either the Dash or Attack passes through the Glyph of Pain, their respective range is increased by 30.",
                "imageURL": require("../assets/images/Thoth_ability_2.png"),
                "notes": [
                    "Thoth dashes in the direction he is currently traveling. After dashing, for 5s Thoth's next basic attack is enhanced.\nThis projectile roots the first Enemy god hit while slowing all other Enemies, and also deals Ability Damage.\nIf either the Dash or Attack passes through the Glyph of Pain, their respective range is increased by 30.",
                    "The attack deals 80/130/180/230/280 (+65% of your Magical Power) damage through Glyph of Pain.",
                    "Won't go on cooldown until the enhanced attack is fired or expires.",
                    "This basic attack is spent even if Thoth misses.",
                    "Damage: 70/110/150/190/230 (+60% of your Magical Power)",
                    "Root Duration: 1.5s",
                    "Slow: 30%",
                    "Slow Duration: 1.5s",
                    "Ability Type: Dash, Root, Damage",
                    "Range: 45, 55/75, 85",
                    "Cost: 70/75/80/85/90 mana",
                    "Cooldown: 16/15/14/13/12 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Glyph of Pain",
                "description": "From his book, Thoth conjures forth a Hieroglyph in front of him. Thoth's ability projectiles passing through the glyph receive increased damage, and a range increase of 30. This damage does not trigger Item effects.Thoth and allies' Basic Attack projectiles also receive a lesser damage bonus, but no range increase.",
                "imageURL": require("../assets/images/Thoth_ability_3.png"),
                "notes": [
                    "From his book, Thoth conjures forth a Hieroglyph in front of him. Thoth's ability projectiles passing through the glyph receive increased damage, and a range increase of 30. This damage does not trigger Item effects.\nThoth and allies' Basic Attack projectiles also receive a lesser damage bonus, but no range increase.",
                    "Hieroglyphs from this ability last 8s.",
                    "Placing more than one Hieroglyph will not cause the oldest one to despawn, but bonus damage from Thoth's abilities and ranged basic attacks only stack once.",
                    "Empowered basic attacks count as two hits on enemy wards and player-made deployables.",
                    "Ability Bonus Damage: 10/20/30/40/50 (+5% of your Magical Power)",
                    "Basic Attack Damage: 30/35/40/45/50 (+5% of your Magical Power)",
                    "Ability Type: Area, Buff, Damage",
                    "Range: 55",
                    "Cost: 25/30/35/40/45 mana",
                    "Cooldown: 5 seconds"
                ]
            },
            {
                "name": "Ultimate  - Final Judgement",
                "description": "Thoth conjures a large glyph from his book, and then inscribes three more at its corners. When all four have been summoned, he sends them forward damaging all Enemies in their path.Thoth may activate this ability again to fire the ability early, doing a reduced amount of damage based on the number of glyphs currently summoned. Alternately he may cancel this ability at a cost of 30 mana.",
                "imageURL": require("../assets/images/Thoth_ability_4.png"),
                "notes": [
                    "Thoth conjures a large glyph from his book, and then inscribes three more at its corners. When all four have been summoned, he sends them forward damaging all Enemies in their path.\nThoth may activate this ability again to fire the ability early, doing a reduced amount of damage based on the number of glyphs currently summoned. Alternately he may cancel this ability at a cost of 30 mana.",
                    "Can be channeled for up to 3s while adding a page every 1s.",
                    "Deals 40% of the damage with just the large glyph, adding 20% for each extra glyph.",
                    "Deals up to 430/500/570/640/710 (+125% of your Magical Power) damage if ability passes through the Glyph of Pain.",
                    "Damage: 420/480/540/600/660 (+120% of your Magical Power)",
                    "Ability Type: Line, Damage",
                    "Range: 100, 130",
                    "Cost: 100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Tiamat",
        "Attributes": {
            "Title:": "Goddess of the Salt Sea",
            "Pantheon:": "Babylonian",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "High Area Damage",
            "Difficulty:": "Hard",
            "Release date:": "February 23, 2021",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Tiamat voicelines",
            "Voice actor:": "Sheshe Azizi",
            "Health:": "400 (+77)",
            "Mana:": "300 (+55)",
            "Speed:": "360 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.88 (+1%)",
            "Damage:": "34 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "13 (+2.7)",
            "Magical:": "23 (+1.3)",
            "HP5:": "7 (+0.5)",
            "MP5:": "5 (+0.44)",
            "imageURL": require("../assets/images/Tiamat.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Death Begets Life",
                "description": "While in Flying stance Tiamat heals from nearby ally and enemy deaths, less from minions. In Ground stance she gains up to 5 Hardened Scales, damage mitigation that breaks after a certain amount of damage is taken. Normal minions do not provide Hardened Scales. Passive Healing does not proc item effects.",
                "imageURL": require("../assets/images/Tiamat_ability_0.png"),
                "notes": [
                    "Tiamat heals up to 110 health after a god death and up to 10 after a minion death (24.5 after god death and 4.3 after minion death at level 1) at level 20 in flying stance.",
                    "Grants up to 250 health for each scale up to a maximum of 1250 with all 5 (60 per scale and 300 with all 5 at level 1) at level 20 in ground stance.",
                    "Tiamat starts the match and respawns in flying stance.",
                    "Large heal: 20 + 4.5 per level",
                    "Small heal: 4 + 0.3 per level",
                    "Scale Mitigation: 25 + 6% of Magical Power from items (Up to 30%)",
                    "Shield value: 50 + 10 per level",
                    "Ability Type: Buff",
                    "Radius: 55"
                ]
            },
            {
                "name": "1st Ability (Flying)  - Primordial Onslaught",
                "description": "Tiamat gathers power, allowing her to fire orbs of energy at the end of the channel. Each orb damages enemies and stops on enemy gods.Hitting the same enemy deals 15% less damage each time, to a minimum of 70% reduction.This ability can fire additional projectiles at ranks 3 and 5.",
                "imageURL": require("../assets/images/Tiamat_ability_1.png"),
                "notes": [
                    "Tiamat gathers power, allowing her to fire orbs of energy at the end of the channel. Each orb damages enemies and stops on enemy gods.\nHitting the same enemy deals 15% less damage each time, to a minimum of 70% reduction.\nThis ability can fire additional projectiles at ranks 3 and 5.",
                    "Deals up to 148/166/280/310/380 (+65% / +97% / +103% of your Magical Power) damage, with scaling increasing at ranks 3 and 5 and channeled for up to 1.5s at ranks 1 & 2 and up to 2.5s at rank 5.",
                    "Damage: 80/90/90/100/100 (+35% of your Magical Power)",
                    "Ability Type: Line, Damage",
                    "Range: 70",
                    "Cost: 55/60/65/70/75 mana",
                    "Cooldown: 10 seconds"
                ]
            },
            {
                "name": "2nd Ability (Flying)  - Ruination",
                "description": "Tiamat creates an energy field dealing low damage to enemies in the entire area and then a larger amount in the inner area. The inner area of the field also stuns enemies for a short duration.",
                "imageURL": require("../assets/images/Tiamat_ability_2.png"),
                "notes": [
                    "Can deal up to 100/150/200/250/300 (+90% of your Magical Power) damage.",
                    "Area Damage: 40/55/70/85/100 (+40% of your Magical Power)",
                    "Inner Damage: 60/95/130/165/200 (+50% of your Magical Power)",
                    "Stun Duration: 1s",
                    "Ability Type: Area, Stun, Damage",
                    "Range: 55",
                    "Cost: 65/70/75/80/85 mana",
                    "Cooldown: 16/15/14/13/12 seconds"
                ]
            },
            {
                "name": "3rd Ability (Flying)  - Grounding Dive",
                "description": "Tiamat dives into the fight landing on all fours, dealing damage and switching to her Ground stance. This ability also provides Tiamat one Hardened Scale.",
                "imageURL": require("../assets/images/Tiamat_ability_3.png"),
                "notes": [
                    "Damage: 40/80/120/160/200 (+40% of your Magical Power)",
                    "Ability Type: Circle, Leap, Damage",
                    "Range/Radius: 50/15",
                    "Cost: 40 mana",
                    "Cooldown: 20/18.5/17/15.5/14 seconds"
                ]
            },
            {
                "name": "Ultimate (Flying)  - Children of Creation",
                "description": "Tiamat is able to summon one of her children onto the battlefield.Summon Serpents: Serpents that travel down lanes and act as minions.Summon Beast: Kusarikku who stands guard waiting for enemy gods.Summon Storm: Umu Dabrutu, the storm that chases enemies.",
                "imageURL": require("../assets/images/Tiamat_ability_4.png"),
                "notes": [
                    "Tiamat is able to summon one of her children onto the battlefield.\nSummon Serpents: Serpents that travel down lanes and act as minions.\nSummon Beast: Kusarikku who stands guard waiting for enemy gods.\nSummon Storm: Umu Dabrutu, the storm that chases enemies.",
                    "Tiamat can cancel the ability selection without triggering it's cooldown.",
                    "Ability Type: Pet, Damage",
                    "Range: 50",
                    "Cost: 0 mana",
                    "Cooldown: 0 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Tsukuyomi",
        "Attributes": {
            "Title:": "God of the Moon",
            "Pantheon:": "Japanese",
            "Type:": "Melee,Physical",
            "Class:": "Assassin",
            "Pros:": "High Single Target Damage",
            "Difficulty:": "Average",
            "Release date:": "August 11, 2020",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Tsukuyomi voicelines",
            "Voice actor:": "Bill Millsap",
            "Health:": "455 (+78)",
            "Mana:": "205 (+35)",
            "Speed:": "375 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+1.3%)",
            "Damage:": "35 (+ 2.4)+ 100% of Physical Power",
            "Progression:": "None",
            "Physical:": "13 (+2.8)",
            "Magical:": "23 (+1.3)",
            "HP5:": "8 (+0.68)",
            "MP5:": "4.5 (+0.46)",
            "imageURL": require("../assets/images/Tsukuyomi.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Shingetsu & Mangetsu",
                "description": "Tsukuyomi wields Shingetsu in his left hand and Mangetsu in his right hand. When these weapons damage an enemy they become empowered.Empowered Shingetsu gains a 50% cleave and restores mana.Empowered Mangetsu deals bonus damage and restores health.",
                "imageURL": require("../assets/images/Tsukuyomi_ability_0.png"),
                "notes": [
                    "Tsukuyomi wields Shingetsu in his left hand and Mangetsu in his right hand. When these weapons damage an enemy they become empowered. Empowered Shingetsu gains a 50% cleave and restores mana. Empowered Mangetsu deals bonus damage and restores health.",
                    "Empowered weapons revert to normal after 5 seconds out of combat.",
                    "The mana restore only triggers on the first enemy hit with empowered Shingetsu.",
                    "Empowered Mangetsu heals for 36 health (7.15 at level 1) at level 20.",
                    "Ranged basic attacks from both empowered weapons will not apply the additional effects. They also have a range of 65, trigger item effects and count as two hits on enemy wards and player-made deployables.",
                    "Mana Heal: 3 (+20% of your Physical Power)",
                    "Health Heal: 6 + 1.5 per level",
                    "Bonus Damage: 2 (+15% of your Physical Power)",
                    "Ability Type: Buff, Damage"
                ]
            },
            {
                "name": "1st Ability  - Dark Moon Shuriken",
                "description": "Tsukuyomi throws a Dark Moon Shuriken that damages enemies and stops on gods, sticking into them. If Tsukuyomi gets close to the god he retrieves the Shuriken and reduces its cooldown.After casting this ability Shingetsu's next Basic Attack becomes ranged. This attack steals Movement Speed from the enemy hit.",
                "imageURL": require("../assets/images/Tsukuyomi_ability_1.png"),
                "notes": [
                    "Tsukuyomi throws a Dark Moon Shuriken that damages enemies and stops on gods, sticking into them. If Tsukuyomi gets close to the god he retrieves the Shuriken and reduces its cooldown. After casting this ability Shingetsu's next Basic Attack becomes ranged. This attack steals Movement Speed from the enemy hit.",
                    "Has a retrieval range of 10 units and up to 4s to retrieve the Shuriken.",
                    "Retrieval's cooldown reduction deducts from the current cooldown, taking into account Cooldown %.",
                    "The movement speed steal lasts 4s after landing a basic attack from this ability.",
                    "Shuriken Damage: 85/135/185/235/285 (+80% of your Physical Power)",
                    "Cooldown Reduction: 4s",
                    "Movement Speed Steal: 25%",
                    "Ability Type: Line, Slow, Damage",
                    "Range: 65",
                    "Cost: 50/60/70/80/90 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Kusarigama",
                "description": "Shingetsu and Mangetsu form themselves into a Kusarigama. Tsukuyomi swings the weapon to his left and right, damaging and disarming enemies hit. He then swings the weapon forward with more force stunning enemies hit. While channeling Tsukuyomi gains 25% Movement Speed and is immune to Knockups.",
                "imageURL": require("../assets/images/Tsukuyomi_ability_2.png"),
                "notes": [
                    "The disarm duration refreshes on each hit.",
                    "Can deal up to 130/235/340/445/550 (+160% of your Physical Power) damage.",
                    "Swing Damage: 35/60/85/110/135 (+40% of your Physical Power)",
                    "Disarm Duration: 1s",
                    "Final Damage: 60/115/170/225/280 (+80% of your Physical Power)",
                    "Stun Duration: 1/1.1/1.2/1.3/1.4s",
                    "Ability Type: Area, Crowd Control, Damage",
                    "Range/Radius: 30/20",
                    "Cost: 70/75/80/85/90 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Silver Moon Caltrops",
                "description": "Tsukuyomi scatters Caltrops onto the ground which damage enemies in the area and slow them for 1.5s. Enemies who move inside this Caltrop field take damage and are slowed again.After casting this ability Mangetsu's next Basic Attack becomes ranged. This attack deals bonus Physical Damage.",
                "imageURL": require("../assets/images/Tsukuyomi_ability_3.png"),
                "notes": [
                    "Tsukuyomi scatters Caltrops onto the ground which damage enemies in the area and slow them for 1.5s. Enemies who move inside this Caltrop field take damage and are slowed again. After casting this ability Mangetsu's next Basic Attack becomes ranged. This attack deals bonus Physical Damage.",
                    "Damage is dealt every 0.25s and the caltrops persist for 6s.",
                    "Can deal up to 480/840/1200/1560/1920 (+360% of your Physical Power) damage if a target moves inside the caltrop field for it's entire duration.",
                    "The slow's duration refreshes per tick.",
                    "Damage: 20/35/50/65/80 (+15% of your Physical Power)",
                    "Slow: 20/22.5/25/27.5/30%",
                    "Damage: 5 (+30% of your Physical power)",
                    "Ability Type: Area, Slow, Damage",
                    "Range: 55",
                    "Cost: 40/45/50/55/60 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "Ultimate  - Piercing Moonlight",
                "description": "Tsukuyomi channels the power of the Full Moon, gaining Crowd Control immunity and 20% Damage Reduction. He fires forward 4 powerful piercing beams of moonlight. Enemy gods damaged become marked. Each beam can hit up to 3 enemy gods. After firing all beams Tsukuyomi charges forward at light speed, dashing through all enemies in the order they were hit, dealing heavy damage. Tsukuyomi will end his dashing at the final enemy hit. If Tsukuyomi kills an enemy god with this ability Tsukuyomi he will gain both of his ranged basic attacks.",
                "imageURL": require("../assets/images/Tsukuyomi_ability_4.png"),
                "notes": [
                    "Can deal up to 400/600/800/1000/1200 (+260% of your Physical Power) damage to a single target.",
                    "Gods who use a form of damage immunity while marked will not remove the mark.",
                    "Any gods marked by the beams during the dashing that become untargetable, banished or damage immune, Tsukuyomi will still follow/damage that target.",
                    "The dashes go through walls which means that Tsukuyomi still follows Cliodhna while inside a wall but won't damage her and also affected enemies that move through Janus' portals while doing damage to them if marked.",
                    "Tsukuyomi will teleport outside a wall if the final target marked is inside/through a wall during the dashing.",
                    "Beam Damage: 30/50/70/90/110 (+15% of your Physical Power)",
                    "Dash Damage: 70/100/130/160/190 (+50% of your Physical Power)",
                    "Ability Type: Line, Buff, Damage",
                    "Range: 90",
                    "Cost: 80/90/100/110/120 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Tyr",
        "Attributes": {
            "Title:": "The Lawgiver",
            "Pantheon:": "Norse",
            "Type:": "Melee,Physical",
            "Class:": "Warrior",
            "Pros:": "High Defense, Medium Crowd Control",
            "Difficulty:": "Hard",
            "Release date:": "August 7, 2013",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Tyr voicelines",
            "Voice actor:": "Ian Sinclair",
            "Health:": "485 (+83)",
            "Mana:": "230 (+40)",
            "Speed:": "375 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+0.9%)",
            "Damage:": "39 (+ 2)+ 100% of Physical Power",
            "Progression:": "1/.5/1.5x damage",
            "Physical:": "18 (+3)",
            "Magical:": "24 (+1.3)",
            "HP5:": "8 (+0.72)",
            "MP5:": "4.4 (+0.29)",
            "imageURL": require("../assets/images/Tyr.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Unyielding",
                "description": "Stuns, Taunts, Fears, Roots, and Mesmerize cannot affect Tyr for longer than 1s.",
                "imageURL": require("../assets/images/Tyr_ability_0.png"),
                "notes": [
                    "Crowd control reduction stacks with this effect, lowering their duration to less than a second.",
                    "Roots with Cripples that last longer than 1s (and/or with no DR) will still last their full duration.",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Fearless",
                "description": "Tyr charges forward, immune to Knockup, damaging enemies. Assault Stance: Tyr pushes all enemies along with him, hitting them 2 times and knocking them up in the air. Guard Stance: Tyr hits each enemy only once, passing through and knocking them up in the air.",
                "imageURL": require("../assets/images/Tyr_ability_1.png"),
                "notes": [
                    "Assault Stance can deal up to 80/180/280/380/480 (+110% of your Physical Power) damage.",
                    "Assault Damage: 40/90/140/190/240 (+55% of your Physical Power)",
                    "Guard Damage: 70/120/170/220/270 (+50% of your Physical Power)",
                    "Ability Type: Dash, Knockup, Damage",
                    "Range: 40",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 15/14.5/14/13.5/13 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Power Cleave",
                "description": "Tyr makes a massive melee attack, hitting all enemies within a 180 degree cone.Assault Stance: Enemies that are knocked up in the air are knocked away.Guard Stance: Tyr heals himself for each enemy hit (max 3).",
                "imageURL": require("../assets/images/Tyr_ability_2.png"),
                "notes": [
                    "Tyr makes a massive melee attack, hitting all enemies within a 180 degree cone.\nAssault Stance: Enemies that are knocked up in the air are knocked away.\nGuard Stance: Tyr heals himself for each enemy hit (max 3).",
                    "Can be used while Fearless is active to interrupt it.",
                    "Guard stance can heal up to 45/105/165/225/285 health.",
                    "Damage: 80/115/150/185/220 (+65% of your Physical Power)",
                    "Healing: 15/35/55/75/95",
                    "Ability Type: Area, Heal, Damage",
                    "Range: 15",
                    "Cost: 50 mana",
                    "Cooldown: 12/11/10/9/8 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Change Stance",
                "description": "Tyr changes between Assault and Guard stances. Changing stances refreshes the cooldown on Fearless and Power Cleave. Tyr gains benefits depending on his current stance, and also gains half the benefits of the opposing stance.Assault Stance: Gain Physical Power.Guard Stance: Gain Protections.",
                "imageURL": require("../assets/images/Tyr_ability_3.png"),
                "notes": [
                    "Tyr changes between Assault and Guard stances. Changing stances refreshes the cooldown on Fearless and Power Cleave. Tyr gains benefits depending on his current stance, and also gains half the benefits of the opposing stance.\nAssault Stance: Gain Physical Power.\nGuard Stance: Gain Protections.",
                    "This ability can be activated without being leveled once, and has the base level 1 cooldown whilst unleveled.",
                    "In Assault Stance, Tyr gains 0/6/10/14/18/22 Protections and 0/6/10/14/18/22 Physical Power in Guard Stance.",
                    "Tyr starts in Assault stance and respawns in whatever stance he was currently in.",
                    "Assault Stance: 12/20/28/36/44 Physical Power",
                    "Defense Stance: 12/20/28/36/44 Protections",
                    "Ability Type: Buff",
                    "Cost: 0 mana",
                    "Cooldown: 9 seconds"
                ]
            },
            {
                "name": "Ultimate  - Lawbringer",
                "description": "Tyr leaps through the air, bringing indiscriminate justice upon all enemies in the target area, and Slowing them with additional effects depending on what stance he is in.Assault Stance: Deal additional damage.Guard Stance: Stun enemies hit.",
                "imageURL": require("../assets/images/Tyr_ability_4.png"),
                "notes": [
                    "Tyr leaps through the air, bringing indiscriminate justice upon all enemies in the target area, and Slowing them with additional effects depending on what stance he is in.\nAssault Stance: Deal additional damage.\nGuard Stance: Stun enemies hit.",
                    "Has a range of 70.",
                    "Tyr is immune to crowd control while leaping.",
                    "Assault Damage: 250/375/500/625/750 (+120% of your Physical Power)",
                    "Guard Damage: 200/300/400/500/600 (+120% of your Physical Power)",
                    "Slow: 30%",
                    "Slow Duration: 3s",
                    "Guard Stun: 1.5s",
                    "Ability Type: Leap",
                    "Range: 25",
                    "Cost: 80/90/100/110/120 mana",
                    "Cooldown: 90/85/80/75/70 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Ullr",
        "Attributes": {
            "Title:": "The Glorious One",
            "Pantheon:": "Norse",
            "Type:": "Ranged,Physical",
            "Class:": "Hunter",
            "Pros:": "High Sustain",
            "Difficulty:": "Hard",
            "Release date:": "March 19, 2014",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Ullr voicelines",
            "Voice actor:": "Bill Jenkins",
            "Health:": "480 (+80)",
            "Mana:": "230 (+40)",
            "Speed:": "360 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.95 (+1.5%)",
            "Damage:": "33 (+ 2.4)+ 100% of Physical Power",
            "Progression:": "None",
            "Physical:": "13 (+3)",
            "Magical:": "23 (+1.3)",
            "HP5:": "8 (+0.71)",
            "MP5:": "4.4 (+0.38)",
            "imageURL": require("../assets/images/Ullr.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Weapon Master",
                "description": "When Ullr uses an ability in either stance his Cooldowns in the opposite stance are reduced.",
                "imageURL": require("../assets/images/Ullr_ability_0.png"),
                "notes": [
                    "Cooldown Reduction: 1s",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Bladed Arrow (Thrown Axe)",
                "description": "Ranged: Ullr fires a bladed arrow in a line, dealing damage and passing through all targets it hits. Melee: Ullr throws an axe in a line, hitting a single target dealing damage and Stunning it.",
                "imageURL": require("../assets/images/Ullr_ability_1.png"),
                "notes": [
                    "Thrown Axe has a prefire of 0.2s.",
                    "Damage (Bow): 70/120/170/220/270 (+75% of your Physical Power)",
                    "Damage (Axe): 50/80/100/140/170 (+70% of your Physical Power)",
                    "Stun Duration (Axe): 1/1.1/1.2/1.3/1.4s",
                    "Ability Type: Line, Stun, Damage",
                    "Range: 70",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Expose Weakness (Invigorate)",
                "description": "Ranged: Ullr gains bonus Attack Speed for 5s.Melee: Ullr gains bonus move speed for 5s.",
                "imageURL": require("../assets/images/Ullr_ability_2.png"),
                "notes": [
                    "Ranged: Ullr gains bonus Attack Speed for 5s.\nMelee: Ullr gains bonus move speed for 5s.",
                    "The buffs persist after switching stances.",
                    "Attack Speed (Bow): 20/25/30/35/40%",
                    "Move Speed (Axe): 20/22.5/25/27.5/30%",
                    "Ability Type: Buff",
                    "Duration: 5s",
                    "Cost: 50 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Hail of Arrows (Glory Bound)",
                "description": "Ranged: Ullr fires a volley at his target location, dealing damage.Melee: Ullr leaps to his target location, dealing damage in an AoE on arrival.",
                "imageURL": require("../assets/images/Ullr_ability_3.png"),
                "notes": [
                    "Damage (Bow): 80/120/160/200/240 (+100% of your Physical Power)",
                    "Damage (Axe): 50/80/110/140/170 (+55% of your Physical Power)",
                    "Ability Type: Circle, Leap, Damage",
                    "Range/Radius: 80, 55/10, 15",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "Ultimate  - Wield Axes (Wield Bow)",
                "description": "Ullr changes stance and gains benefits depending on which stance he is in. Ullr also gains half the benefits of the opposing stance.Ranged: Ullr uses his yew bow, removing Disarms and gaining additional Physical Power.Melee: Ullr uses his axes, removing Disarms and gaining additional Physical Lifesteal.",
                "imageURL": require("../assets/images/Ullr_ability_4.png"),
                "notes": [
                    "Ullr changes stance and gains benefits depending on which stance he is in. Ullr also gains half the benefits of the opposing stance.\nRanged: Ullr uses his yew bow, removing Disarms and gaining additional Physical Power.\nMelee: Ullr uses his axes, removing Disarms and gaining additional Physical Lifesteal.",
                    "Has a prefire of 0.2s.",
                    "Ullr gains 10/13.5/16/19.5/22 Physical Power in axe stance and 5/7.5/10/12.5/15% Physical Lifesteal in bow stance.",
                    "Ullr always starts and respawns in bow stance.",
                    "Physical Power (Bow): 20/26/32/38/44",
                    "Physical Lifesteal (Axe): 15/22.5/30/37.5/45%",
                    "Ability Type: Buff",
                    "Cost: 0 mana",
                    "Cooldown: 1 second"
                ]
            }
        ]
    },
    {
        "Name": "Vamana",
        "Attributes": {
            "Title:": "Fifth Avatar of Vishnu",
            "Pantheon:": "Hindu",
            "Type:": "Melee,Physical",
            "Class:": "Warrior",
            "Pros:": "High Defense, High Sustain",
            "Difficulty:": "Average",
            "Release date:": "May 31, 2012",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Vamana voicelines",
            "Voice actor:": "Sean Chiplock",
            "Health:": "490 (+88)",
            "Mana:": "200 (+39)",
            "Speed:": "375 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "1 (+1.4%)",
            "Damage:": "37 (+ 2)+ 100% of Physical Power",
            "Progression:": "None",
            "Physical:": "18 (+2.9)",
            "Magical:": "24 (+1.3)",
            "HP5:": "8 (+0.5)",
            "MP5:": "4.7 (+0.41)",
            "imageURL": require("../assets/images/Vamana.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Sleeping Giant",
                "description": "Vamana gains Physical Power and Attack Speed equal to a percentage of his Physical Protections.",
                "imageURL": require("../assets/images/Vamana_ability_0.png"),
                "notes": [
                    "Grants 5.6 Physical Power by default at level 1 and 17.4 Physical Power at level 20.",
                    "Grants 4.2% Attack Speed by default at level 1 and 13.4% Attack Speed at level 20.",
                    "Physical Protection Conversion: 20%",
                    "Attack Speed Conversion: 15%",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Clear the Path",
                "description": "Vamana opens his umbrella in front of him and sprints forward, doing damage to all enemies and knocking them into the air.",
                "imageURL": require("../assets/images/Vamana_ability_1.png"),
                "notes": [
                    "Will only hit each target once per cast.",
                    "The dash can last up to 4s.",
                    "Damage: 70/110/150/190/230 (+60% of your Physical Power)",
                    "Ability Type: Dash, Knockup, Damage",
                    "Cost: 70 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Armored Umbrella",
                "description": "Vamana infuses his umbrella with his armor, reinforcing it while he strikes forth, doing damage to all enemies in a cone.",
                "imageURL": require("../assets/images/Vamana_ability_2.png"),
                "notes": [
                    "Damage: 85/135/185/235/285 (+70% of your Physical Power)",
                    "Ability Type: Cone, Damage",
                    "Range: 35",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 13/12.5/12/11.5/11 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Umbrellarang",
                "description": "Vamana spins an umbrella out in front of him, hitting everyone in its path for damage and slowing your enemies' attack and movement speeds. After reaching its destination, the umbrella returns back to Vamana, hitting everyone in its path again.",
                "imageURL": require("../assets/images/Vamana_ability_3.png"),
                "notes": [
                    "The debuff doesn't stack, but the duration is refreshed on each application.",
                    "Can deal up to 110/180/250/320/390 (+100% of your Physical Power) damage.",
                    "Damage: 55/90/125/160/195 (+50% of your Physical Power)",
                    "Attack / Movement Speed Slow: 25%",
                    "Speed Slow Duration: 3s",
                    "Ability Type: Line, Slow, Damage",
                    "Range: 70",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 13 seconds"
                ]
            },
            {
                "name": "Ultimate  - Colossal Fury",
                "description": "Vamana grows to an enormous giant for 5s gaining immunity to Crowd Control, Protections, Physical Power, Physical lifesteal, a stacking shield that cannot exceed 1000 Health, and his Basic Attacks now damage all nearby enemies. His Movement Penalty for Attacking, Backpedaling, and Strafing are reduced by 20% while in this state.Successful attacks on enemies also provide stacking Movement Speed for 3s. When Vamana is in Colossal form, taking damage from gods increases the duration and Vamana can pass through player made walls.You may cancel his giant form early.",
                "imageURL": require("../assets/images/Vamana_ability_4.png"),
                "notes": [
                    "Vamana grows to an enormous giant for 5s gaining immunity to Crowd Control, Protections, Physical Power, Physical lifesteal, a stacking shield that cannot exceed 1000 Health, and his Basic Attacks now damage all nearby enemies. His Movement Penalty for Attacking, Backpedaling, and Strafing are reduced by 20% while in this state.",
                    "Successful attacks on enemies also provide stacking Movement Speed for 3s. When Vamana is in Colossal form, taking damage from gods increases the duration and Vamana can pass through player made walls.",
                    "You may cancel his giant form early.",
                    "Each tick of damage taken increases the duration by 0.5s, to a maximum of 9s.",
                    "Due to Sleeping Giant's Physical Protection conversion, it actually provides 30/36/42/48/54 Physical Power and 3.75/4.5/5.25/6/6.75% attack speed.",
                    "His cone basic attacks can trigger item effects normally, such as Qin's Sais or Hastened Fatalis.",
                    "Can apply up to 15% Movement Speed.",
                    "Protections: 25/30/35/40/45",
                    "Physical Power: 25/30/35/40/45",
                    "Physical Lifesteal: 30%",
                    "Shield: 0.9% of Max. Health per .2 second",
                    "Movement Speed: 3% stacking 5 times",
                    "Ability Type: Area Basic, Buff",
                    "Range: 16",
                    "Cost: 100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Vulcan",
        "Attributes": {
            "Title:": "Smith of the Gods",
            "Pantheon:": "Roman",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "Pusher, High Area Damage",
            "Difficulty:": "Average",
            "Release date:": "January 30, 2013",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Vulcan voicelines",
            "Voice actor:": "Rick Robertson",
            "Health:": "380 (+71)",
            "Mana:": "245 (+40)",
            "Speed:": "360 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.9 (+1.1%)",
            "Damage:": "34 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "13 (+3)",
            "Magical:": "23 (+1.3)",
            "HP5:": "7 (+0.48)",
            "MP5:": "4.8 (+0.45)",
            "imageURL": require("../assets/images/Vulcan.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Master Craftsman",
                "description": "Whenever Vulcan successfully hits an enemy god with an ability he gains bonuses to Movement Speed and MP5 for 5s.",
                "imageURL": require("../assets/images/Vulcan_ability_0.png"),
                "notes": [
                    "The buff doesn't stack, instead the duration refreshes.",
                    "Movement Speed: 15%",
                    "MP5: 15",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Backfire",
                "description": "Vulcan blasts a fireball out of his Forge, pushing him back and dealing damage to all enemies in its path, marking the first god that is hit. The Inferno Cannon prioritizes the marked target and deals 15% more damage to that god.",
                "imageURL": require("../assets/images/Vulcan_ability_1.png"),
                "notes": [
                    "This ability can fire through walls.",
                    "Despite counting as a dash, this ability can be used while crippled.",
                    "Damage: 90/130/170/210/250 (+70% of your Magical Power)",
                    "Mark Lifetime: 4s",
                    "Ability Type: Line, Damage",
                    "Range: 55/20",
                    "Cost: 40/45/50/55/60 mana",
                    "Cooldown: 9/8.5/8/7.5/7 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Inferno Cannon",
                "description": "Vulcan constructs an Inferno Cannon that shoots fireballs in a cone that deal damage to the target every second. The Inferno Cannon lasts until destroyed or another is placed. This inherits Vulcan's penetrations but does not apply on-hit effects. Inferno Cannon takes 50% additional damage from non-god sources. Inferno Cannon ignores 25% of the target's Magical Protection.",
                "imageURL": require("../assets/images/Vulcan_ability_2.png"),
                "notes": [
                    "The cannon has 220/300/380/460/540 Health, 5/15/25/35/45 Protections, doesn't remove backdoor protections from towers and phoenixes, can proc item effects and also despawns when Vulcan dies.",
                    "The cannon deals 52/80.5/109/138/166 (+46% of your Magical Power) damage per shot to a god marked by Backfire.",
                    "The cannon doesn't fire through map walls but can through player-made walls.",
                    "Damage: 45/70/95/120/145 (+40% of your Magical Power)",
                    "Ability Type: Cone, Pet, Damage",
                    "Range: 60",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Magma Bomb",
                "description": "Vulcan tosses a bomb that explodes in a radius on impact with the ground, damaging and knocking back nearby enemies.",
                "imageURL": require("../assets/images/Vulcan_ability_3.png"),
                "notes": [
                    "Has a ground target warning indicator visible to enemy players 0.5s before it hits.",
                    "Damage: 80/130/180/230/280 (+80% of your Magical Power)",
                    "Ability Type: Circle, Knockup, Damage",
                    "Range/Radius: 60/15",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 10 seconds"
                ]
            },
            {
                "name": "Ultimate  - Earthshaker",
                "description": "Vulcan launches a rocket that explodes on impact with the ground. The rocket starts at 80% strength, and increases damage the further it travels from Vulcan.",
                "imageURL": require("../assets/images/Vulcan_ability_4.png"),
                "notes": [
                    "Gains +0.33% damage per unit traveled.",
                    "Deals 320/416/512/608/704 (+104% of your Magical Power) damage at minimum range.",
                    "Has a ground target warning indicator visible to enemy players 0.5s before it hits.",
                    "Damage: 400/520/640/760/880 (+130% of your Magical Power)",
                    "Ability Type: Circle, Damage",
                    "Range/Radius: 120/30",
                    "Cost: 80/90/100/110/120 mana",
                    "Cooldown: 90/85/80/75/70 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Xbalanque",
        "Attributes": {
            "Title:": "Hidden Jaguar Sun",
            "Pantheon:": "Maya",
            "Type:": "Ranged,Physical",
            "Class:": "Hunter",
            "Pros:": "High Single Target Damage, Medium Area Damage",
            "Difficulty:": "Average",
            "Release date:": "December 21, 2012",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Xbalanque voicelines",
            "Voice actor:": "Jessie James Grelle",
            "Health:": "455 (+75)",
            "Mana:": "220 (+37)",
            "Speed:": "365 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.95 (+1.5%)",
            "Damage:": "35 (+ 2.5)+ 100% of Physical Power",
            "Progression:": "None",
            "Physical:": "12 (+2.9)",
            "Magical:": "23 (+1.3)",
            "HP5:": "8 (+0.68)",
            "MP5:": "4.4 (+0.4)",
            "imageURL": require("../assets/images/Xbalanque.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Dead of Night",
                "description": "As Xbalanque deals damage to enemy Gods he gains stacks of Dead of Night which increases his Physical Power permanently. For every 1500 damage dealt, after mitigations, Xbalanque gets 1 stack, up to 6 stacks.",
                "imageURL": require("../assets/images/Xbalanque_ability_0.png"),
                "notes": [
                    "Requires a total of 9000 damage dealt to gods after mitigations to obtain a maximum of 30 Physical Power.",
                    "Physical Power: 5",
                    "Max Stacks: 6",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Branching Bola",
                "description": "When Xbalanque toggles on this ability, his Basic Attacks deal additional damage. When the bola hits, it splits into 2 that hit enemies up to 30 units behind the target for 37.5% damage (on-hit effects do not apply). Pressing the ability again cancels toggle.",
                "imageURL": require("../assets/images/Xbalanque_ability_1.png"),
                "notes": [
                    "It's added directly onto basic attack damage and can critically hit.",
                    "Deals 3.75/7.5/11.25/15/18.75 Bonus Damage to enemies hit by the splits from the Bola.",
                    "Damage: 10/20/30/40/50",
                    "Ability Type: Area Basic, Damage",
                    "Range: 55/30",
                    "Cost: 4/7/10/13/16 mana per shot",
                    "Cooldown: .5 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Poison Darts",
                "description": "Xbalanque shoots 15 darts in a cone in front of him, dealing damage with each one. An enemy can be hit by 7 darts, with the other 4 doing 30% damage. Enemies hit are poisoned, taking additional damage every .5s and are Slowed.",
                "imageURL": require("../assets/images/Xbalanque_ability_2.png"),
                "notes": [
                    "The poison from multiple darts does not stack.",
                    "Can deal up to 205/293/381/469/557 (+258% of your Physical Power) with 7 darts.",
                    "Won't go into cooldown or consume mana if its interrupted before any darts are fired.",
                    "Damage per Dart: 25/35/45/55/65 (+40% of your Physical Power)",
                    "Poison Damage: 10/15/20/25/30 (+15% of your Physical Power)",
                    "Poison Slow: 20/22.5/25/27.5/30%",
                    "Poison Duration: 3s",
                    "Ability Type: Cone, Slow, Damage",
                    "Range: 55",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Rising Jaguar",
                "description": "Xbalanque rushes forward and then jumps into the air, becoming immune to Crowd Control. While in the air, he fires darts at all nearby enemies, dealing damage to all in the area. Any enemies that were poisoned by Xbalanque take additional damage.",
                "imageURL": require("../assets/images/Xbalanque_ability_3.png"),
                "notes": [
                    "Deals 112/182/252/322/392 (+70% of your Physical Power) damage against poisoned targets.",
                    "Damage: 80/130/180/230/280 (+50% of your Physical Power)",
                    "Additional Poisoned Damage: 40%",
                    "Ability Type: Dash, Damage",
                    "Range/Radius: 25/30",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 16 seconds"
                ]
            },
            {
                "name": "Ultimate  - Darkest of Nights",
                "description": "Xbalanque shrouds enemies in darkness for 3s. During this time, Xbalanque's Basic Attack range, Attack Speed, and Movement Speed are increased.",
                "imageURL": require("../assets/images/Xbalanque_ability_4.png"),
                "notes": [
                    "Also prevents enemy wards, minions and structures from detecting hostiles in their line of sight.",
                    "This ability also allows Xbalanque to basic attack structures from outside their radius.",
                    "Attack Speed: 20/30/40/50/60%",
                    "Movement Speed: 20/30/40/50/60%",
                    "Basic Attack Range Increase: 40ft",
                    "Ability Type: Buff",
                    "Range/Radius: 95/35",
                    "Cost: 100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Xing Tian",
        "Attributes": {
            "Title:": "The Relentless",
            "Pantheon:": "Chinese",
            "Type:": "Melee,Magical",
            "Class:": "Guardian",
            "Pros:": "High Crowd Control",
            "Difficulty:": "Average",
            "Release date:": "September 1, 2015",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Xing Tian voicelines",
            "Voice actor:": "Leo Fabian",
            "Health:": "495 (+90)",
            "Mana:": "200 (+40)",
            "Speed:": "360 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "0.9 (+1.2%)",
            "Damage:": "35 (+ 1.55)+ 20% of Magical Power",
            "Progression:": "1/1/1/1x damage and swing time",
            "Physical:": "20 (+3.4)",
            "Magical:": "27 (+1.3)",
            "HP5:": "5 (+0.54)",
            "MP5:": "4.5 (+0.45)",
            "imageURL": require("../assets/images/Xing_Tian.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Smouldering Rage",
                "description": "Xing Tian gains stacks of Smouldering Rage each time he hits an enemy with an ability. For each stack of rage Xing Tian has, he gains HP5 and temporary maximum Health for 18s. Xing Tian's HP5 has no cap.",
                "imageURL": require("../assets/images/Xing_Tian_ability_0.png"),
                "notes": [
                    "Grants up to 36 HP5 and 300 Health with all stacks 25 per stack (72 at max stacks with 6 per stack at level 1) at level 20.",
                    "The buff duration refreshes per hit.",
                    "Max Stacks: 12",
                    "HP5 / Stack: 3",
                    "Health / Stack: 5 + 1 per level",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Furious Roar",
                "description": "Xing Tian shouts from his chest with great force, damaging enemies and reducing their Basic Attack damage. Enemies also take damage over time based on their maximum health.",
                "imageURL": require("../assets/images/Xing_Tian_ability_1.png"),
                "notes": [
                    "The DoT deals a total of 6/8/10/12/14% of the target's max health as damage.",
                    "Damage: 80/115/150/185/220 (+60% of you Magical Power)",
                    "DoT Damage: 1.5/2/2.5/3/3.5% per second",
                    "Damage Reduction: 30/35/40/45/50%",
                    "Duration: 4s",
                    "Ability Type: Line, Debuff, Damage",
                    "Range: 45",
                    "Cost: 55/60/65/70/75 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Hook Slam",
                "description": "Xing Tian first launches an attack with his axe, knocking the opponents into the air before slamming them into the ground and rooting them.",
                "imageURL": require("../assets/images/Xing_Tian_ability_2.png"),
                "notes": [
                    "Can deal up to 85/130/175/220/265 (+70% of your Magical Power) damage.",
                    "Axe Damage: 35/50/65/80/95 (+25% of your Magical Power)",
                    "Slam Damage: 50/80/110/140/170 (+45% of your Magical Power)",
                    "Root Duration: 1.6/1.7/1.8/1.9/2s",
                    "Ability Type: Area, Crowd Control, Damage",
                    "Range/Radius: 25/20",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 14/13.5/13/12.5/12 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Sky - Cutting Axe",
                "description": "Xing Tian leaps forward, dealing damage to enemies when he lands, and he may leap again within 4s. While in the air, Xing Tian has increased protections, which are refreshed if he connects with a target.",
                "imageURL": require("../assets/images/Xing_Tian_ability_3.png"),
                "notes": [
                    "Xing Tian may use Basic Attacks and other Abilities between the leaps.",
                    "Can deal up to 120/160/200/240/280 (+60% of your Magical Power) damage.",
                    "The protections buff is only refreshed when hitting gods.",
                    "Damage: 60/80/100/120/140 (+30% of your Magical Power)",
                    "Protections: 20/25/30/35/40",
                    "Duration on hit: 6s",
                    "Ability Type: Leap, Circle, Damage",
                    "Range/Radius: 35/12",
                    "Cost: 60 mana",
                    "Cooldown: 15 seconds"
                ]
            },
            {
                "name": "Ultimate  - Whirlwind of Rage and Steel",
                "description": "Xing Tian spins grabbing and hitting enemies with his axe before throwing them in the direction he is facing.Damage is dealt to enemies once each on the grab and throw as well as three times during the spin.",
                "imageURL": require("../assets/images/Xing_Tian_ability_4.png"),
                "notes": [
                    "Xing Tian spins grabbing and hitting enemies with his axe before throwing them in the direction he is facing.\nDamage is dealt to enemies once each on the grab and throw as well as three times during the spin.",
                    "Has a prefire of 1s.",
                    "Deals up to 225/300/375/450/525 (+175% of your Magical Power) damage to targets that are grabbed for the full duration (5 ticks) and up to 135/180/225/270/315 (+105% of your Magical Power) damage to targets who fail to get grabbed (3 ticks).",
                    "Xing Tian is briefly immune from crowd control effects immediately after using the ability as well as gaining 25% Movement Speed while channeling.",
                    "Damage: 45/60/75/90/105 (+35% of your Magical Power)",
                    "Ability Type: Circle, Knockup, Damage",
                    "Radius: 20",
                    "Cost: 70/80/90/100/110 mana",
                    "Cooldown: 90/85/80/75/70 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Yemoja",
        "Attributes": {
            "Title:": "Goddess of Rivers",
            "Pantheon:": "Yoruba",
            "Type:": "Ranged,Magical",
            "Class:": "Guardian",
            "Pros:": "High Sustain",
            "Difficulty:": "Average",
            "Release date:": "October 15, 2019",
            "Favor:": "(Free) 0",
            "Gems:": "(Free) 0",
            "Voicelines:": "Yemoja voicelines",
            "Voice actor:": "Cassie Ewulu",
            "Health:": "490 (+95)",
            "Mana:": "0 (+0)",
            "Speed:": "365 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "1 (+1.2%)",
            "Damage:": "34 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "Projectile hits allies in a larger radius and passes through them",
            "Physical:": "19 (+3)",
            "Magical:": "27 (+1.3)",
            "HP5:": "6 (+0.7)",
            "MP5:": "0 (+0)",
            "imageURL": require("../assets/images/Yemoja.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Omi",
                "description": "Yemoja uses Omi to cast spells instead of Mana. She starts with 7, earning up to 10. Yemoja gains 1 Omi (+.01 per level) every 5 seconds and Cooldown Reduction increases Omi regeneration. Yemoja's Basic Attack healing only affects gods and does not proc item effects. Mana, MP5, and Mana Heals are applied to Yemoja's Health pool.",
                "imageURL": require("../assets/images/Yemoja_ability_0.png"),
                "notes": [
                    "Yemoja's basic attacks have a radius of 7.5.",
                    "Grants 1.2 base Omi regen and 9 healing per tick (1.01 Omi regen and 1.4 healing per tick at level 1) stacking to a total of 126 health (19.6 at level 1) at level 20.",
                    "Unlock additional Omi at: Reaching level 5, 10 and 15.",
                    "Basic attack Healing: 1 (+0.4 per level) every 0.5s for 7s",
                    "Health Conversion: 20% of Mana",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Bouncing Bubble (Moonstrike)",
                "description": "Bubble: Yemoja tosses out a bubble that bounces twice, dealing damage and slowing enemies by 30% before exploding into smaller bubbles that deal 50% damage. Enemies hit by both bubble bounces take 50% damage on the second hit.Moonstrike: Yemoja calls upon the Moon to deal damage to enemies below. The inner strike is the largest, dealing full damage and stunning all enemies and enemy structures hit.",
                "imageURL": require("../assets/images/Yemoja_ability_1.png"),
                "notes": [
                    "Bubble: Yemoja tosses out a bubble that bounces twice, dealing damage and slowing enemies by 30% before exploding into smaller bubbles that deal 50% damage. Enemies hit by both bubble bounces take 50% damage on the second hit.\nMoonstrike: Yemoja calls upon the Moon to deal damage to enemies below. The inner strike is the largest, dealing full damage and stunning all enemies and enemy structures hit.",
                    "The small bubbles from Bouncing Bubble have a radius of 7.5 and deal 22.5/40/57.5/75/92.5 (+15% of your Magical Power) damage.",
                    "The bubble has a maximum bounce range of 35 on the first.",
                    "Bouncing Bubble Deals 67.5/120/182.5/225/277.5 (+45% of your Magical Power) damage when hit by the bubble twice and Moonstrike deals up to 105/195/285/375/465 (+70% of your Magical Power) damage.",
                    "Moonstrike has a minimum radius of 10.",
                    "There is a small delay between casting Moonstrike and Bouncing Bubble.",
                    "Bubble Damage: 45/80/125/150/185 (+30% of your Magical Power)",
                    "Slow Duration: 1s",
                    "Inner Damage: 55/95/135/175/215 (+40% of your Magical Power)",
                    "Outer Damage: 25/50/75/100/125 (+15% of your Magical Power)",
                    "Stun Duration: 1s",
                    "Ability Type: Area, Slow, Damage (Area, Stun, Damage)",
                    "Range/Radius: 70/14 (60/15)",
                    "Cost: 2 Omi"
                ]
            },
            {
                "name": "2nd Ability  - Mending Waters",
                "description": "Yemoja sends out a wave of water that damages all enemies it passes through, dealing extra unmitigated damage to their shields. Once the wave reaches an ally it bounces to all nearby allies healing and shielding them for 3s.",
                "imageURL": require("../assets/images/Yemoja_ability_2.png"),
                "notes": [
                    "Deals 130/180/250/310/540 (+80%/80%/80%/80%/120% of your Magical Power) damage to shields.",
                    "Has a bounce radius of 40.",
                    "Shields from this ability will not stack but instead refresh and don't protect from execute effects.",
                    "Damage: 65/95/125/155/180 (+40% of your Magical Power)",
                    "Bonus Damage to Shields: 2x/2x/2x/2x/3x",
                    "Heal: 20/40/60/80/100",
                    "Shield: 30/60/90/120/150 (+15% of your Magical Power)",
                    "Ability Type: Line, Heal, Damage",
                    "Range: 60",
                    "Cost: 3 Omi"
                ]
            },
            {
                "name": "3rd Ability  - Riptide",
                "description": "Yemoja creates a water ring that Knocks Up everyone that enters it. Allies are pushed further and gain both Movement Speed and Protections for 3s. Enemies go a shorter distance and are Slowed. After entering a ring you are briefly locked out of entering another. Yemoja can place the ring at a maximum distance to reverse the direction.",
                "imageURL": require("../assets/images/Yemoja_ability_3.png"),
                "notes": [
                    "The ability has a maximum deploy range of 60 and radius of 7.5 and the knockback has a range of 40 for allies and 20 for enemies.",
                    "The direction is reversed if placed at least 45 units away.  Has a delay time of 1s before entering another ring.",
                    "Movement Speed: 10/12.5/15/17.5/20%",
                    "Protections: 20/25/30/35/40 Physical and Magical Protections",
                    "Slow: 15% for 2s",
                    "Ring Duration: 3s",
                    "Ability Type: Area, Knockup",
                    "Range: 80",
                    "Cost: 3 Omi"
                ]
            },
            {
                "name": "Ultimate  - River's Rebuke",
                "description": "Yemoja unleashes her full power creating two large walls of water that block enemy movement and projectiles. After a delay the river cascades down, damaging, trembling and slowing enemies.Yemoja gains a buff to her Omi regeneration while she is in the river field that lingers briefly after she leaves it.",
                "imageURL": require("../assets/images/Yemoja_ability_4.png"),
                "notes": [
                    "Yemoja unleashes her full power creating two large walls of water that block enemy movement and projectiles. After a delay the river cascades down, damaging, trembling and slowing enemies.\nYemoja gains a buff to her Omi regeneration while she is in the river field that lingers briefly after she leaves it.",
                    "The water walls last for 5 seconds before cascading down in the direction Yemoja is facing.",
                    "Can maintain the buff for a maximum duration of 9s.",
                    "Also reveals enemies in the area.",
                    "Damage: 240/305/370/435/500 (+70% of your Magical Power)",
                    "Initial Slow: 60% decreasing by 20% each second",
                    "Slow Duration: 3s",
                    "Omi Regeneration: 1 extra every 2 seconds",
                    "Buff Duration: 4s after leaving the area",
                    "Ability Type: Area, Buff, Damage",
                    "Range: 100",
                    "Cooldown: 140/135/130/125/120 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Ymir",
        "Attributes": {
            "Title:": "Father of the Frost Giants",
            "Pantheon:": "Norse",
            "Type:": "Melee,Magical",
            "Class:": "Guardian",
            "Pros:": "High Crowd Control, High Defense",
            "Difficulty:": "Easy",
            "Release date:": "May 31, 2012",
            "Favor:": "(Free) 0",
            "Gems:": "(Free) 0",
            "Voicelines:": "Ymir voicelines",
            "Voice actor:": "Charles Campbell",
            "Health:": "510 (+104)",
            "Mana:": "200 (+32)",
            "Speed:": "370 (+0)",
            "Range:": "12 (+0)",
            "Attack/Sec:": "0.85 (+1.2%)",
            "Damage:": "38 (+ 1.55)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "23 (+3.3)",
            "Magical:": "27 (+1.3)",
            "HP5:": "8 (+0.9)",
            "MP5:": "4.5 (+0.45)",
            "imageURL": require("../assets/images/Ymir.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Frostbite",
                "description": "All of Ymir's abilities that affect enemies apply a Debuff to the enemy called Frostbite. All of Ymir's Basic Attacks against a target afflicted by Frostbite do 100% more damage. Enemies afflicted by Frostbite deal 15% less damage. Lasts for 6s.",
                "imageURL": require("../assets/images/Ymir_ability_0.png"),
                "notes": [
                    "The debuff doesn't stack, but the duration is refreshed on each application.",
                    "Increased Damage Dealt: 100%",
                    "Decreased Damage Taken: 15%",
                    "Ability Type: Debuff"
                ]
            },
            {
                "name": "1st Ability  - Ice Wall",
                "description": "Ymir summons a wall of ice out of the ground that blocks player movement.",
                "imageURL": require("../assets/images/Ymir_ability_1.png"),
                "notes": [
                    "The wall can be deployed through map walls and can be reactivated to remove it at any time, even while under crowd control or dead.",
                    "Ymir can walk past the wall if its placed right at his feet while he's moving.",
                    "The wall can be used to block Joust Titan's attacks.",
                    "Lifetime: 3/3.5/4/4.5/5s",
                    "Ability Type: Line, Wall",
                    "Range: 70",
                    "Cost: 60 mana",
                    "Cooldown: 12/11.5/11/10.5/10 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Glacial Strike",
                "description": "Ymir smashes his club, doing damage to all enemies in front of him and Slowing them. Applies Frostbite.",
                "imageURL": require("../assets/images/Ymir_ability_2.png"),
                "notes": [
                    "Has a pre-fire time of 0.35s.",
                    "Ymir can rotate the camera during the pre-fire.",
                    "Damage: 90/160/230/300/370 (+70% of your Magical Power)",
                    "Slow: 35%",
                    "Slow Duration: 4s",
                    "Ability Type: Line, Slow, Damage",
                    "Range: 45",
                    "Cost: 55/60/65/70/75 mana",
                    "Cooldown: 8 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Frost Breath",
                "description": "Ymir uses his breath to freeze enemies in blocks of ice, doing damage and Stunning them. Applies Frostbite.",
                "imageURL": require("../assets/images/Ymir_ability_3.png"),
                "notes": [
                    "Damage: 50/90/130/170/210 (+50% of your Magical Power)",
                    "Stun: 1.25/1.5/1.75/2/2.25s",
                    "Ability Type: Cone, Stun, Damage",
                    "Range: 35",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 14 seconds"
                ]
            },
            {
                "name": "Ultimate  - Shards of Ice",
                "description": "Ymir begins to freeze the air around him, causing shards of ice to grow on his back and Slowing enemies. After a 3s channel, Ymir erupts out of his frozen state, causing shards of ice to do damage to all enemies in his range. Applies Frostbite. Cancelling the ability decreases the damage.",
                "imageURL": require("../assets/images/Ymir_ability_4.png"),
                "notes": [
                    "Frostbite is applied once on cast and then again upon detonation (up to 9s).",
                    "If Ymir dies while channeling, it will detonate dealing damage for the amount charged.",
                    "Ymir is immune to crowd control effects while using this ability.",
                    "Deals a minimum of 125/162/200/238/275 (+37% of your Magical Power) damage.",
                    "Ability must be channeled for at least 1s before it can be cancelled.",
                    "Damage: 500/650/800/950/1100 (+150% of your Magical Power)",
                    "Slow: 40%",
                    "Ability Type: Circle, Slow, Damage",
                    "Radius: 35",
                    "Cost: 80/85/90/95/100 mana",
                    "Cooldown: 90/85/80/75/70 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Yu Huang",
        "Attributes": {
            "Title:": "The Jade Emperor",
            "Pantheon:": "Chinese",
            "Type:": "Magical,Ranged",
            "Class:": "Mage",
            "Pros:": "High Area Damage",
            "Difficulty:": "Average",
            "Release date:": "April 19, 2022",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Yu Huang voicelines",
            "Voice actor:": "Cory Yee",
            "Health:": "400 (+77)",
            "Mana:": "280 (+55)",
            "Speed:": "355 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.99 (+1.2%)",
            "Damage:": "35 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "12 (+3)",
            "Magical:": "23 (+1.3)",
            "HP5:": "7 (+0.47)",
            "MP5:": "4.7 (+0.44)",
            "imageURL": require("../assets/images/Yu_Huang.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Master of the Dao",
                "description": "Yu Huang attunes himself to the Dao, giving his Basic Attacks and Abilities additional effects. He gains a stack of Dao every 3s. He may also gain 2 stacks by hitting an enemy after not taking or dealing damage for 3s. Once he has 6 or more stacks, Yu Huang becomes Attuned, allowing his Basic Attacks chain to one additional enemy.",
                "imageURL": require("../assets/images/Yu_Huang_ability_0.png"),
                "notes": [
                    "If multiple enemies are in range of the chain, it will hit the closest enemy from the target Yu Huang damages with a basic attack.",
                    "Chain Basic Attack Damage: 100%",
                    "Attunement Cost: 6 Dao",
                    "Max Stacks: 12 Dao",
                    "Ability Type: Buff",
                    "Range: 25"
                ]
            },
            {
                "name": "1st Ability  - Flames of the Phoenix",
                "description": "Yu Huang conjures four cinders of the phoenix, spreading them in an X shape. The cinders rush inward, dealing damage once as they travel. When the cinders meet, they explode in a field of flames that persists for 3s, burning enemies inside. If Yu Huang is Attuned, when the cinders explode, all enemies in the area have their Magical Protections reduced.",
                "imageURL": require("../assets/images/Yu_Huang_ability_1.png"),
                "notes": [
                    "The cinders have a range of 20.",
                    "Can deal up to 130/187/244/311/358 (+100% of your Magical Power) damage.",
                    "Enemies can only be hit by one cinder regardless if all four meet.",
                    "Cinder Damage: 25/35/45/55/65 (+25% of your Magical Power)",
                    "Initial Damage: 75/110/145/180/215 (+45% of your Magical Power)",
                    "Burn Damage: 5/7/9/11/13 (+5% of your Magical Power) every 0.5s",
                    "Burn Duration: 2s",
                    "Protection Reduction: 4/6/8/10/12 for 3s",
                    "Ability Type: Area, Debuff, Damage",
                    "Range/Radius: 55/12.5",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 9 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Dao Cultivation",
                "description": "Yu Huang begins cultivating his Dao before firing a projectile that damages and slows enemies it passes through. As it travels, it leaves behind a trail that explodes, damaging and rooting all enemies. Yu Huang can also continue charging up to 3s to earn more Dao on firing.",
                "imageURL": require("../assets/images/Yu_Huang_ability_2.png"),
                "notes": [
                    "Yu Huang generates Dao every 0.5s while channeling this ability.",
                    "Can deal up to 100/165/230/295/360 (+100% of your Magical Power) damage.",
                    "Yu Huang can cancel this ability without triggering it's cooldown and mana cost.",
                    "Projectile Damage: 50/70/90/110/130 (+40% of your Magical Power)",
                    "AoE Damage: 50/95/140/185/230 (+60% of your Magical Power)",
                    "Slow: 20% for 1s",
                    "Root Duration: 1s",
                    "Max Dao Gain: 6",
                    "Ability Type: Line, Crowd Control, Damage",
                    "Range: 60",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 13/12.5/12/11.5/11 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Celestial Flight",
                "description": "Yu Huang calls forth the Pearl Dragon from beneath him, banishing himself into the air and becoming untargetable. He then gracefully floats back down to the ground in a controlled flight, damaging enemies where he lands. While Yu Huang is floating, he may refire this ability to increase his downward momentum, causing him to fall faster. If Yu Huang is Attuned, the Pearl Dragon follows him as he descends, knocking back any enemies beneath him.",
                "imageURL": require("../assets/images/Yu_Huang_ability_3.png"),
                "notes": [
                    "Has a maximum air time of 3s and minimum of 1s.",
                    "Yu Huang is immune to crowd control for the duration.",
                    "Yu Huang cannot move through walls for the duration, but he can move through player-made walls.",
                    "Damage: 70/120/170/220/270 (+50% of your Magical Power)",
                    "Movement Speed: 15%",
                    "Ability Type: Circle, Knockup, Damage",
                    "Radius: 15",
                    "Cost: 70 mana",
                    "Cooldown: 18 seconds"
                ]
            },
            {
                "name": "Ultimate  - Dueling Dragons",
                "description": "Yu Huang manifests a huge surge of dragon-shaped energy, becoming CC immune and summoning the Pearl Dragon to oppose him. He then has 3s to aim his dragon of energy toward the Pearl Dragon, who will charge directly at it. Both dragons damage and push enemies caught in the blast. If the dragons collide, a damaging explosion occurs in the area. If Yu Huang is Attuned, the width of the dragons is increased by 50%.",
                "imageURL": require("../assets/images/Yu_Huang_ability_4.png"),
                "notes": [
                    "The dragons charge 60 units forward, have a width of 10 by default and 15 when attuned.",
                    "Yu Huang can move freely in all directions for the duration.",
                    "Can deal up to 250/365/480/595/710 (+100% of your Magical Power) damage.",
                    "Targets can only take damage from one dragon (or whichever one damages them first) regardless if both meet.",
                    "The dragons can charge through walls but cannot push enemies through them but can push enemies through player-made walls.",
                    "Push Damage: 150/225/300/375/450 (+50% of your Magical Power)",
                    "Explosion Damage: 100/140/180/220/260 (+50% of your Magical Power)",
                    "Ability Type: Area, Knockback, Damage",
                    "Range/Radius: 100/18",
                    "Cost: 100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Zeus",
        "Attributes": {
            "Title:": "God of the Sky",
            "Pantheon:": "Greek",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "High Area Damage",
            "Difficulty:": "Average",
            "Release date:": "May 31, 2012",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Zeus voicelines",
            "Voice actor:": "Christopher Sabat",
            "Health:": "380 (+71)",
            "Mana:": "245 (+44)",
            "Speed:": "360 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.95 (+0.99%)",
            "Damage:": "35 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "8 (+2.7)",
            "Magical:": "23 (+1.3)",
            "HP5:": "6 (+0.45)",
            "MP5:": "4.6 (+0.45)",
            "imageURL": require("../assets/images/Zeus.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Overcharge",
                "description": "In hand lightning bolt attacks against enemies will apply a charge. Basic Attacks against targets with charges deal increased damage. Charges last 5s.",
                "imageURL": require("../assets/images/Zeus_ability_0.png"),
                "notes": [
                    "Applies up to 90% damage increase to targets with 3 charges.",
                    "The charge duration is refreshed when Zeus deals damage (excluding Detonate Charge) to the afflicted target.",
                    "Damage Increase per Charge: 30%",
                    "Ability Type: Debuff"
                ]
            },
            {
                "name": "1st Ability  - Chain Lightning",
                "description": "Zeus fires a bolt of lightning that arcs between enemies, doing damage and applying a charge on each hit.",
                "imageURL": require("../assets/images/Zeus_ability_1.png"),
                "notes": [
                    "There is a 0.3s delay between each arc.",
                    "Can hit and bounce off of pets and deployables, but not wards, towers and phoenixes.",
                    "Has a chain radius of 30.",
                    "Damage: 40/70/100/130/160 (+50% of your Magical Power)",
                    "Arcs: 4",
                    "Slow: 20% for 2s",
                    "Ability Type: Line, Slow, Damage",
                    "Range: 55",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Aegis Assault",
                "description": "Zeus throws his shield forward dealing damage to nearby enemies and apply a charge. The shield remains for 5s, and Zeus may target it with Basic Attacks or Chain Lightning. Each Basic Attack or first Chain Lightning arc that hits the shield will deal additional static damage and apply a charge in the area. While Zeus' shield is deployed, he gains Attack and Movement Speed. Zeus may refire the ability to recall the shield early.",
                "imageURL": require("../assets/images/Zeus_ability_2.png"),
                "notes": [
                    "Has a projectile speed of 70.",
                    "Can be fired through walls.",
                    "Initial Damage: 60/105/150/195/240 (+50% of your Magical Power)",
                    "Static Damage: 55/65/75/85/95 (+30% of your Magical Power)",
                    "Attack Speed: 15/20/25/30/35%",
                    "Movement Speed: 15/17.5/20/22.5/25%",
                    "Ability Type: Circle, Buff, Damage",
                    "Range/Radius: 55/20",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Detonate Charge",
                "description": "Zeus detonates any charges that have accumulated on enemies, doing damage, multiplied by 1/1.7/2.4 depending on the number of charges.",
                "imageURL": require("../assets/images/Zeus_ability_3.png"),
                "notes": [
                    "Has a prefire of 0.3s.",
                    "Cannot be cast without at least one marked target.",
                    "Deals 85/136/187/238/289 (+42.5% of your Magical Power) damage with two charges and 120/192/264/336/408 (+60% of your Magical Power) with three.",
                    "Damage: 50/80/110/140/170 (+25% of your Magical Power)",
                    "Ability Type: Target, Damage",
                    "Cost: 60 mana",
                    "Cooldown: 10 seconds"
                ]
            },
            {
                "name": "Ultimate  - Lightning Storm",
                "description": "Zeus conjures a lightning storm, striking enemies in the area every second. Applies a charge with each hit.",
                "imageURL": require("../assets/images/Zeus_ability_4.png"),
                "notes": [
                    "Can deal up to 500/725/950/1175/1400 (+275% of your Magical Power) damage.",
                    "Zeus can move freely in all directions while deploying this ability.",
                    "Damage per Hit: 100/145/190/235/280 (+55% of your Magical Power)",
                    "Lifetime: 5s",
                    "Ability Type: Circle, Damage",
                    "Range/Radius: 55/30",
                    "Cost: 100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Zhong Kui",
        "Attributes": {
            "Title:": "The Demon Queller",
            "Pantheon:": "Chinese",
            "Type:": "Ranged,Magical",
            "Class:": "Mage",
            "Pros:": "Medium Crowd Control, High Area Damage",
            "Difficulty:": "Easy",
            "Release date:": "August 28, 2013",
            "Favor:": "5,500",
            "Gems:": "200",
            "Voicelines:": "Zhong Kui voicelines",
            "Voice actor:": "Daniel Penz",
            "Health:": "450 (+85)",
            "Mana:": "250 (+47)",
            "Speed:": "360 (+0)",
            "Range:": "55 (+0)",
            "Attack/Sec:": "0.95 (+1%)",
            "Damage:": "33 (+ 1.5)+ 20% of Magical Power",
            "Progression:": "None",
            "Physical:": "10 (+2.6)",
            "Magical:": "23 (+1.3)",
            "HP5:": "6 (+0.44)",
            "MP5:": "4.8 (+0.45)",
            "imageURL": require("../assets/images/Zhong_Kui.png")
        },
        "Abilities": [
            {
                "name": "Passive  - Demon Bag",
                "description": "Zhong Kui captures demons each time anything dies within 80 units of him and stores them in his Demon Bag, giving him additional Protections. When Recall Demons is activated, Zhong Kui gains double the Protections from his Demon Bag, but loses half the demons in the process. Zhong Kui also loses half the demons in his bag if he dies.",
                "imageURL": require("../assets/images/Zhong_Kui_ability_0.png"),
                "notes": [
                    "Stacks provide up to 39 Protections.",
                    "Protections: 1.3 per captured demon",
                    "Max Stacks: 30",
                    "Ability Type: Buff"
                ]
            },
            {
                "name": "1st Ability  - Expose Evil",
                "description": "Zhong Kui pastes a card on all enemies in front of him, marking them as a demon, Slowing and damaging them each second while they are marked. If the card is removed, 75% of the remaining damage is done instantly.",
                "imageURL": require("../assets/images/Zhong_Kui_ability_1.png"),
                "notes": [
                    "Deals up 100/150/200/250/300 (+100% of your Magical Power) damage without removing the card and 75/112.5/150/187.5/225 (+75% of your Magical Power) as remaining damage if the card is removed before the first tick of damage occurs.",
                    "Damage per Tick: 20/30/40/50/60 (+20% of your Magical Power)",
                    "Slow: 20%",
                    "Card Lifetime: 5s",
                    "Ability Type: Line, Slow, Damage",
                    "Range: 55",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 12 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Exorcism",
                "description": "Zhong Kui drives out the demons of his enemies, dealing damage as they leave the body. Demons exorcised from Enemies marked by Expose Evil will be absorbed by Zhong Kui, healing him per demon (up to 3), and will remove the card.",
                "imageURL": require("../assets/images/Zhong_Kui_ability_2.png"),
                "notes": [
                    "Can heal up to 45/120/195/270/345 health.",
                    "Damage: 75/125/175/225/275 (+50% of your Magical Power)",
                    "Heal: 15/40/65/90/115",
                    "Ability Type: Cone, Heal, Damage",
                    "Range: 35",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 10 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Book of Demons",
                "description": "When fired, the Book of Demons deals damage and Stuns enemies, stunning marked enemies for 2x the duration and removing the card. Once this ability has been ranked, the Book of Demons flies nearby Zhong Kui, firing for 50% of Zhong Kui's basic damage.",
                "imageURL": require("../assets/images/Zhong_Kui_ability_3.png"),
                "notes": [
                    "Marked targets are stunned for 2s.",
                    "Its hitbox moves clockwise around Zhong Kui.",
                    "Damage: 80/135/190/245/300 (+50% of your Magical Power)",
                    "Stun: 1s (2x for marked targets)",
                    "Ability Type: Circle, Stun, Damage",
                    "Radius: 20",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 13 seconds"
                ]
            },
            {
                "name": "Ultimate  - Recall Demons",
                "description": "Upon activation, demons pulse out from his bag at nearby players every second for 5s. They chase and accelerate over time, doing damage to enemies as they enter the body. Zhong Kui is immune to Knockback and Slows for the duration.",
                "imageURL": require("../assets/images/Zhong_Kui_ability_4.png"),
                "notes": [
                    "The stack count of Demon Bag has no effect on damage dealt nor the number of demons released.",
                    "Deals up to 400/475/550/625/700 (+125% of your Magical Power) damage and grants up to 78 Protections with a full demon bag.",
                    "Demons will also follow enemies through walls.",
                    "Damage: 80/95/110/125/140 (+25% of your Magical Power)",
                    "Ability Type: Circle, Buff, Damage",
                    "Radius: 40",
                    "Cost: 100 mana",
                    "Cooldown: 90 seconds"
                ]
            }
        ]
    }
];
//export default gods;
