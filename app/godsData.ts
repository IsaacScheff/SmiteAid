interface Ability {
    name: string;
    description: string;
    buffs: string[]; //could maybe more accurately be thought of as "stats" or "info"
    imageUrl: any; 
}
export enum GodClass {
    Assassin = "Assassin",
    Guardian = "Guardian",
    Hunter = "Hunter",
    Mage = "Mage",
    Warrior = "Warrior",
}
export enum Range {
    Ranged = "Ranged",
    Melee = "Melee",
}
export interface God {
    name: string;
    class: GodClass;
    range: Range;
    blurb: string;
    imageUrl: any;  // 'any' is used here for image require
    description?: string
    abilities: Ability[];
}

const gods: God[] = [
    {
        name: "Achilles",
        class: GodClass.Warrior,
        range: Range.Melee,
        blurb: "High Single Target Damage, High Mobility",
        description: "Bruiser warrior, can be anywhere from full tank to damage dealer",
        imageUrl: require('../assets/images/achilles.png'),
        abilities: [
            {
                name: "Gift of the Gods (Passive)",
                description: "Achilles adapts to the tide of Battle. While in the Fountain, Achilles can choose to wear armor, granting him bonus Health and Protections, or forgo it, granting him bonus Movement Speed and Physical Power. To swap, use Achilles' Basic Attack while the Passive targeter is active.",
                buffs: [
                    "Health Bonus: 25 +15 per Level",
                    "Protections Bonus: 5 +2 per Level",
                    "Movement Speed Bonus: 1% +.25% per Level",
                    "Physical Power Bonus: 3 +1.5 per Level",
                ],
                imageUrl: require('../assets/images/achilles_p.png'),
            },
            {
                name: "Shield of Achilles",
                description: "Achilles punches forward with the edge of his Shield, inflicting massive damage and stunning enemy targets hit by the impact. The force of his punch continues to radiate past his initial target area, dealing 70% damage to targets farther away. Lane Minions take an additional 15% damage.",
                buffs: [
                    "Damage: 100/155/210/265/320 (80% of your Physical Power)",
                    "Stun Duration: 1s",
                    "Range: 50",
                    "Cooldown: 14 seconds",
                ],
                imageUrl: require('../assets/images/achilles_1.png'),
            },
            {
                name: "Radiant Glory",
                description: "Achilles is blessed by the gods, giving him bonus Physical Power, Protections, and Crowd Control Reduction for 6 seconds. While this blessing is active, Achilles will heal himself upon successfully damaging enemies with abilities.",
                buffs: [
                    "Heal: 18/21/24/27/30",
                    "Physical Power: +6/7/8/9/10%",
                    "Crowd Control Reduction: 20%",
                    "Max Heals per Ability: 4",
                    "Protections: +10/12.5/15/17.5/20%",
                    "Cooldown: 9 seconds"
                ],
                imageUrl: require('../assets/images/achilles_2.png'),
            },
            {
                name: "Combat Dodge",
                description: "Achilles dodges his enemies' attacks before striking them in swift response. If Achilles successfully hits an enemy god with this strike, Achilles can use this ability once more before it goes on Cooldown.",
                buffs: [
                    "Damage: 65/100/135/170/205 (+45% of your Physical Power)",
                    "Range: 35",
                    "Cooldown: 12/11.5/11/10.5/10 seconds"
                ],
                imageUrl: require('../assets/images/achilles_3.png'),
            },
            {
                name: "Fatal Strike (Ultimate)",
                description: "Achilles dashes forward and attacks. While dashing, Achilles will pass through minions, stop and hit the first enemy god he encounters, dealing damage to all he hits and executing gods below 35% Health. If Achilles kills a god with this ability, he can use it again, up to 5 times. As Achilles successfully Executes his enemies, he becomes more reckless in combat and leaves his heel exposed. Achilles will become more susceptible to damage, stacking up to 5 times.",
                buffs: [
                    "Damage: 180/270/360/450/540 (100% of your Physical Power)",
                    "Execute Threshold: 35%",
                    "Damage Taken Increase: 5%",
                    "Range: 35",
                    "Cooldown: 90 seconds"
                ],
                imageUrl: require('../assets/images/achilles_ult.png'),
            },
        ]
    },
    {
        name: "Agni",
        class: GodClass.Mage,
        range: Range.Ranged,
        blurb: "High Area Damage",
        imageUrl: require('../assets/images/agni.png'),
        abilities: [
            {
                name: "Combustion (Passive)",
                description: "Hitting an enemy with a Basic Attack provides 1 stack of Combustion. Hitting an enemy god provides 2. At 4 stacks Agni's next Flame Wave or Rain Fire will ignite all enemies hit, dealing damage every .5s for 3s.",
                buffs: [
                    "Damage per Tick: 5 (+6% of your Magical Power)"
                ],
                imageUrl: require('../assets/images/agni_p.png'),
            },
            {
                name: "Noxious Fumes",
                description: "Agni summons a cloud of noxious fumes at his ground target location, doing damage every second. Firing any of Agni's abilities into the fumes detonates the gas, Stunning and damaging all enemies in the radius.",
                buffs: [
                    "Damage per Tick: 10/20/30/40/50 (+5% of your Magical Power)",
                    "Explosion Damage: 20/40/60/80/100 (+20% of your Magical Power)",
                    "Fumes Duration: 10s",
                    "Stun Duration: 1s",
                    "Range/Radius: 55/20",
                    "Cooldown: 13 seconds"
                ],
                imageUrl: require('../assets/images/agni_1.png'),
            },
            {
                name: "Flame Wave",
                description: "Agni summons a wave of fire in front of him that scorches all enemies in its path. Ignites Noxious Fumes.",
                buffs: [
                    "Damage: 100/155/210/265/320 (+65% of your Magical Power)",
                    "Range: 50",
                    "Cooldown: 15/14.5/14/13.5/13 seconds"
                ],
                imageUrl: require('../assets/images/agni_2.png'),
            },
            {
                name: "Path of Flames",
                description: "Agni blazes a path forward in a quick dash, leaving flames trailing behind him. Any enemies passing through the flames catch fire and burn for damage every .5s for 2s. Ignites Noxious Fumes. Agni is immune to Knockback while dashing.",
                buffs: [
                    "Damage per Tick: 20/30/40/50/60 (+15% of your Magical Power)",
                    "Path Duration: 3s",
                    "Range: 60",
                    "Cooldown: 16 seconds"
                ],
                imageUrl: require('../assets/images/agni_3.png'),
            },
            {
                name: "Rain Fire (Ultimate)",
                description: "Every 18 seconds, Agni gains a flaming halo that can be expended to summon a giant meteor at his ground target location. He can summon 1 every .8 seconds. Ignites Noxious Fumes.",
                buffs: [
                    "Damage: 135/175/215/255/295 (+60% of your Magical Power)",
                    "Max Halos: 3",
                    "Range/Radius: 65/20",
                    "Cooldown: Dependant on halos"
                ],
                imageUrl: require('../assets/images/agni_ult.png'),
            },
        ]
    },
    {
        name: "Ah Muzen Cab",
        class: GodClass.Hunter,
        range: Range.Ranged,
        blurb: "High Movement Speed, High Attack Speed",
        imageUrl: require('../assets/images/ah_muzen_cab.png'),
        abilities: [
            {
                name: "Bees! (Passive)",
                description: "Enemies afflicted by Bees! take damage every .5s for 2s, are revealed on the minimap, and swarm nearby enemies. Basic Attacks refresh and extend the duration of Bees! by 1s. This damage does not trigger Item effects.",
                buffs: [
                    "Damage: 9 (+5% of your Physical Power)",
                    "Radius: 20",
                    "The debuff reveals stealthed enemies."
                ],
                imageUrl: require('../assets/images/ah_muzen_cab_p.png'),
            },
            {
                name: "Hive",
                description: "Bees swarm at the ground target location, creating a new Hive that provides Movement Speed, Attack Speed and HP5 Buffs to Ah Muzen Cab. Hives reveal enemies within 30 units of them. The Hives can only be destroyed by Basic Attacks.",
                buffs: [
                    "Enemy gods can DESTROY them with one BASIC ATTACK.",
                    "HP5: 20/25/30/35/40",
                    "Movement Speed: 10/14/18/22/26%",
                    "Attack Speed: 10/20/30/40/50%",
                    "Max Hives: 7/8/9/10/11",
                    "Radius: 90",
                    "Deploy range of 55.",
                    "Cooldown: 12 seconds"

                ],
                imageUrl: require('../assets/images/ah_muzen_cab_1.png'),
            },
            {
                name: "Swarm",
                description: "Ah Muzen Cab summons a large swarm of bees that fly forward in a path in front of him, dealing damage to all enemies hit and applying Bees to them.",
                buffs: [
                    "Damage: 60/100/140/180/220 (+70% of your Physical Power)",
                    "Range: 70",
                    "Cooldown: 15/14/13/12/11 seconds"
                ],
                imageUrl: require('../assets/images/ah_muzen_cab_2.png'),
            },
            {
                name: "Honey",
                description: "Ah Muzen Cab sprays honey that lasts for 4s at a moveable ground target location, Slowing all enemies in the area. Bees from Hives within 90 units and Swarm will fly over to protect the honey, dealing damage every .5 second and applying Bees! to all enemies as they leave the honey.",
                buffs: [
                    "Damage per Tick: 13/25/37/49/61 (+15% of your Physical Power)",
                    "Slow: 20/22.5/25/27.5/30%",
                    "Maximum honey range of 70",
                    "Range/Radius: 55/10",
                    "Cooldown: 12 seconds"
                ],
                imageUrl: require('../assets/images/ah_muzen_cab_3.png'),
            },
            {
                name: "Stinger (Ultimate)",
                description: "Ah Muzen Cab fires off an enormous stinger that deals damage to all enemies in a line, sticking into the first god that is hit, applying Bees!, Slowing, Crippling, and decreasing their Physical Protections for 3 seconds. If the target dies or after 3 seconds, the stinger falls onto the ground for 4 seconds. If Ah Muzen Cab picks up his stinger, he gains a significant reduction to Stinger's Cooldown.",
                buffs: [
                    "Damage: 275/355/435/515/595 (+90% of your Physical Power)",
                    "Slow: 20%",
                    "Physical Protection Reduction: 10%",
                    "Retrieval Cooldown Reduction: 60%",
                    "Range: 70",
                    "Cooldown: 100 seconds"
                ],
                imageUrl: require('../assets/images/ah_muzen_cab_ult.png'),
            },
        ]
    },
    {
        name: "Ah Puch",
        class: GodClass.Mage,
        range: Range.Ranged,
        blurb: "High Area Damage",
        imageUrl: require('../assets/images/ah_puch.png'),
        abilities: [
            {
                name: "Hollow Ground (Passive)",
                description: "Ah Puch is closely attuned with the dead and may exhume corpses at his will. When walking over a decaying corpse, Ah Puch lowers the cooldown of Undead Surge and Corpse Explosion by 1s, restores 4% of his maximum Health and 3% of his maximum Mana.",
                buffs: [
                    "Enemy gods and the Fire Giant can destroy the corpses with 2 Basic Attacks.",
                    "Ah Puch can have up to 6 corpses (with a maximum duration of 45s) and placing more than 6 will cause the oldest ones to disappear."
                ],
                imageUrl: require('../assets/images/ah_puch_p.png'),
            },
            {
                name: "Undead Surge",
                description: "Ah Puch raises up to two decaying corpses from the underworld that surge forward exploding on anything they touch, when they reach max distance, or when Ah Puch reactivates Undead Surge dealing damage and slowing targets hit. Enemies hit also have their healing reduced by 40% for 5s. The corpses collapse after exploding remaining behind.",
                buffs: [
                    "Damage: 90/110/130/150/170 (+35% of your Magical Power)",
                    "Slow: 20/25/30/35/40%",
                    "Slow Duration: 2s",
                    "Range/Radius: 60/20",
                    "Cooldown: 11 seconds"
                ],
                imageUrl: require('../assets/images/ah_puch_1.png'),
            },
            {
                name: "Corpse Explosion",
                description: "Ah Puch causes the target area to explode dealing damage. Corpse Explosion also causes any decaying corpses in the area to explode.",
                buffs: [
                    "Initial Damage: 60/70/80/90/100 (+30% of your Magical Power)",
                    "Damage per Corpse: 55/80/105/130/155 (+25% of your Magical Power)",
                    "Range/Radius: 55/20, 25",
                    "Cooldown: 8 seconds"
                ],
                imageUrl: require('../assets/images/ah_puch_2.png'),
            },
            {
                name: "Fleeting Breath",
                description: "Ah Puch throws a charm from the underworld which awakens a decaying corpse that applies miasma to targets in an area and falls to the ground, remaining behind. Targets take damage every second. After the duration, targets take additional damage and are stunned if they were healed by an ability during the initial duration.",
                buffs: [
                    "Damage per Tick: 30/40/50/60/70 (+20% of your Magical Power)",
                    "Additional Damage: 50/100/150/200/250 (+40% of your Magical Power)",
                    "Stun Duration: 1.5s",
                    "Duration: 4s",
                    "Range/Radius: 55/13",
                    "Cooldown: 10 seconds"
                ],
                imageUrl: require('../assets/images/ah_puch_3.png'),
            },
            {
                name: "Empty the Crypts (Ultimate)",
                description: "Ah Puch unleashes an army of Wraiths from the Ninth Hell that swarm forward, damaging enemies and reducing their Healing and Damage Dealt.",
                buffs: [
                    "Damage per Wraith: 50/60/70/80/90 (+15% of your Magical Power)",
                    "Duration: 6s",
                    "Damage Reduction: 3% per Stack",
                    "Healing Reduction: 20% per Stack",
                    "Max Stacks: 3",
                    "Range: 75",
                    "Cooldown: 90 seconds"
                ],
                imageUrl: require('../assets/images/ah_puch_ult.png'),
            },
        ]
    },
    {
        name: "Amaterasu",
        class: GodClass.Warrior,
        range: Range.Melee,
        blurb: "High Mobility, High Area Damage",
        imageUrl: require('../assets/images/amaterasu.png'),
        abilities: [
            {
                name: "Illuminating Strike (Passive)",
                description: "Amaterasu illuminates enemies she hits with basic attacks. After 3 hits on the same target the enemy gains an aura, exposing their weaknesses and causing them to take more damage from all sources. Any other enemies that come near the afflicted target are weakened as well.",
                buffs: [
                    "Weakening Aura: 10% Increased Damage Taken",
                    "Stack/Aura Duration: 6s",
                    "Max Auras Possible: 3",
                    "Radius: 30",
                    "Stacks up to 30% increased damage taken."
                ],
                imageUrl: require('../assets/images/amaterasu_p.png'),
            },
            {
                name: "Divine Presence",
                description: "Amaterasu harnesses the power of her jewel, gaining Attack Speed and healing herself every second for 4 seconds. She also creats a persistent aura that buffs nearby allied gods. Every time this ability is activated the aura switches between Valor and Benevolence.",
                buffs: [
                    "Heal Per Tick: 15/25/35/45/55",
                    "Attack Speed: 15/17.5/20/22.5/25%",
                    "Benevolence Aura: 9/12/15/18/21% Move Speed",
                    "Valor Aura: 14/18/22/26/30 Bonus Power",
                    "Radius: 30",
                    "Cooldown: 9 seconds"
                ],
                imageUrl: require('../assets/images/amaterasu_1.png'),
            },
            {
                name: "Heavenly Reflection",
                description: "Amaterasu charges her mirror for 5 seconds. While the mirror is charging she takes decreased damage. By activating the ability again or at the end of 5 seconds she will fire her mirror straight ahead, dealing damage. The mirror can be charged by successfully attacking enemies or from taking damage, and will deal up to double the base damage when fully charged.",
                buffs: [
                    "Self Damage Mitigation: 7/9/11/13/15%",
                    "Mirror Damage: 70/105/140/175/210 (+60% of your Physical Power)",
                    "Full Charge Damage: 140/210/280/350/420",
                    "Range: 55",
                    "Cooldown: 12/11.5/11/10.5/10 seconds"
                ],
                imageUrl: require('../assets/images/amaterasu_2.png'),
            },
            {
                name: "Glorious Charge",
                description: "Amaterasu shines light off of her sacred blade, silencing all enemies in front of her. She then dashes forward while dealing damage, piercing through minions or stopping at the first god hit.",
                buffs: [
                    "Silence Duration: 1s",
                    "Dash Damage: 80/135/190/245/300 (+60% of your Physical Power)",
                    "Range: 55",
                    "Cooldown: 15 seconds"
                ],
                imageUrl: require('../assets/images/amaterasu_3.png'),
            },
            {
                name: "Dazzling Offense (Ultimate)",
                description: "Amaterasu focuses the power of the heavens into an impressive 3 strike combination attack. The 2nd hit will do 20% more base damage and slow enemies by 30%. The 3rd hit will do 40% more base damage and stun enemies. She must hit an enemy with the 1st hit to receive the increased damage and CC on the 2nd hit. The same rule applies to the 2nd and 3rd hits.",
                buffs: [
                    "Damage per Strike: 100/140/180/220/260 (+50% of your Physical Power)",
                    "Slow Duration: 2s",
                    "Stun Duration: 2s",
                    "Radius: 35",
                    "Cooldown: 90/85/80/75/70 seconds"
                ],
                imageUrl: require('../assets/images/amaterasu_ult.png'),
            },
        ]
    },
    {
        name: "Anhur",
        class: GodClass.Hunter,
        range: Range.Ranged,
        blurb: "High Single Target Damage",
        imageUrl: require('../assets/images/anhur.png'),
        abilities: [
            {
                name: "Enfeeble (Passive)",
                description: "Anhur's spear attacks reduce the enemy target's Physical Protection for 3 seconds.",
                buffs: [
                    "Physical Protection Debuff: 20",
                    "The debuff duration refreshes per (spear) attack."
                ],
                imageUrl: require('../assets/images/anhur_p.png'),
            },
            {
                name: "Shifting Sands",
                description: "Anhur erects an obelisk from the ground, blocking all player movement. The surrounding sands Slow enemies and increase the damage of Anhur's Basic Attacks against targets in the sands.",
                buffs: [
                    "Slow: 15/20/25/30/35%",
                    "Damage Buff: 8/11/14/17/20%",
                    "Lifetime: 7s",
                    "Range/Radius: 70/30",
                    "Cooldown: 14 seconds"
                ],
                imageUrl: require('../assets/images/anhur_1.png'),
            },
            {
                name: "Impale",
                description: "Anhur hurls his spear with great might. If the spear hits a god, they take damage and are knocked back. Gods knocked back into a wall are Stunned. Enemies hit by the pushed god take damage. The spear passes through minions, doing damage to them as well.",
                buffs: [
                    "Damage: 105/170/235/300/365 (+80% of your Physical Power)",
                    "Stun Duration: 1.1/1.2/1.3/1.4/1.5s",
                    "Range: 55",
                    "Cooldown: 12 seconds"
                ],
                imageUrl: require('../assets/images/anhur_2.png'),
            },
            {
                name: "Disperse",
                description: "Anhur leaps to his ground target location, doing damage and knocking back all enemies in the radius where he lands.",
                buffs: [
                    "Damage: 70/110/150/190/230 (+60% of your Physical Power)",
                    "Range/Radius: 55/15",
                    "Cooldown: 15/14.5/14/13.5/13 seconds",
                    "This ability's knockup and damage can be canceled if hit by CC on landing.",
                    "This ability has a setup time of 0.15s and leap time of 0.85s."
                ],
                imageUrl: require('../assets/images/anhur_3.png'),
            },
            {
                name: "Desert Fury (Ultimate)",
                description: "Summoning the fury of the desert, Anhur hunkers down and throws empowered spears that pass through everything, doing damage to all enemies in their path. He is immune to Crowd Control for the duration.",
                buffs: [
                    "Damage per Spear: 65/90/115/140/165 (+30% of your Physical Power)",
                    "Spears Thrown: 8",
                    "Range: 80",
                    "Cooldown: 90 seconds",
                    "This ability can go through walls.",
                    "Has a duration of 2s (with a 0.25s prefire and spears thrown every 0.22s)."
                ],
                imageUrl: require('../assets/images/anhur_ult.png'),
            },
        ]
    },
    {
        name: "Anubis",
        class: GodClass.Mage,
        range: Range.Ranged,
        blurb: "High Area Damage",
        imageUrl: require('../assets/images/anubis.png'),
        abilities: [
            {
                name: "Sorrow (Passive)",
                description: "All of Anubis' abilities steal Physical and Magical Protection from the target and increase his Healing obtained from Magical Lifesteal. These effects stack on every tick of Anubis' abilities. Sorrow also grants Anubis an additional 30% reduction to all Crowd Control durations.",
                buffs: [
                    "Protections Stolen Per Stack: 5",
                    "Increased Healing per Stack: 20%",
                    "Duration: 6s",
                    "Max Stacks: 3",
                    "Grants 15 Protections and 60% Lifesteal Healing bonus at max stacks."
                ],
                imageUrl: require('../assets/images/anubis_p.png'),
            },
            {
                name: "Plague of Locusts",
                description: "A plague of locusts bellows forth from Anubis' mouth, smothering all enemies in the area and doing damage every .25s for 3s. Anubis is immune to knockback while channeling and moves at 50% speed.",
                buffs: [
                    "Damage per Tick: 18/26/34/42/50 (+22% of your Magical Power)",
                    "Range: 35",
                    "Cooldown: 10 seconds",
                    "Can be cancelled early."
                ],
                imageUrl: require('../assets/images/anubis_1.png'),
            },
            {
                name: "Mummify",
                description: "Anubis fires a bandage projectile, mummifying and Stunning his target.",
                buffs: [
                    "Stun Duration: 2s",
                    "Range: 70",
                    "Cooldown: 17/16/15/14/13 seconds"
                ],
                imageUrl: require('../assets/images/anubis_2.png'),
            },
            {
                name: "Grasping Hands",
                description: "Anubis calls for help from the underworld as hands penetrate the ground and claw at his enemies, doing damage and Slowing every .5s for 2s.",
                buffs: [
                    "Damage per Tick: 25/40/55/70/85 (+35% of your Magical Power)",
                    "Slow: 25%",
                    "Range/Radius: 55/20",
                    "Cooldown: 14/13.5/13/12.5/12 seconds"
                ],
                imageUrl: require('../assets/images/anubis_3.png'),
            },
            {
                name: "Death Gaze (Ultimate)",
                description: "Anubis focuses all of his energy into a piercing gaze, doing damage to all enemies in the path, every 0.1 seconds for 3 seconds.",
                buffs: [
                    "Damage per Tick: 20/25/30/35/40 (+13% of your Magical Power)",
                    "Range: 70",
                    "Cooldown: 90/85/80/75/70 seconds",
                    "Anubis is stationary, CC immune and can rotate while casting this ability.",
                    "Can be cancelled early."
                ],
                imageUrl: require('../assets/images/anubis_ult.png'),
            },
        ]
    },
    {
        name: "Ao Kuang",
        class: GodClass.Mage,
        range: Range.Melee,
        blurb: "High Single Target Damage",
        imageUrl: require('../assets/images/ao_kuang.png'),
        abilities: [
            {
                name: "Dragon King's Sword (Passive)",
                description: "Every 10 seconds Ao Kuang gets a stack of Dragon King's Sword. With a stack available, his next non-ultimate ability that deals damage to an Enemy god has a reduced cooldown and heals Ao Kuang. Successfully executing an Enemy god with King of the Eastern Seas fully charges Dragon King's Sword.",
                buffs: [
                    "Cooldown Reduction: 2s",
                    "Max Stacks: 3",
                    "Heal: 3% of maximum Health"
                ],
                imageUrl: require('../assets/images/ao_kuang_p.png'),
            },
            {
                name: "Water Illusion",
                description: "Ao Kuang Teleports forward into Stealth, leaving behind a watery form of himself. He remains in Stealth for 5s or until he attacks or takes damage.  Ao Kuang may activate this ability again to detonate the watery form, dealing damage to nearby enemies.",
                buffs: [
                    "Damage: 70/120/170/220/270 (+70% of your Magical Power)",
                    "Range/Radius: 30/20",
                    "Cooldown: 15 seconds",
                    "The watery form automatically detonates after 5s regardless of Ao Kuang's status."
                ],
                imageUrl: require('../assets/images/ao_kuang_1.png'),
            },
            {
                name: "Dragon Call",
                description: "Ao Kuang summons 6 dragons to his side. For every successful Basic Attack Ao Kuang makes, a dragon will dive to the target dealing additional damage. This ability ends after all dragons are used, or after 10s. Ao Kuang may activate this ability again to send forward any remaining dragons in a ranged attack. The dragons damage and Slow the first enemy they hit.",
                buffs: [
                    "Attack Damage: 35/50/65/80/95 (+30% of your Magical Power) per hit",
                    "Ranged Damage: 20/25/30/35/40 (+13% of your Magical Power) per remaining dragon",
                    "Slow: 30%, for 1s + 0.25s per remaining dragon",
                    "Range: 55",
                    "Cooldown: 15/14/13/12/11 seconds"
                ],
                imageUrl: require('../assets/images/ao_kuang_2.png'),
            },
            {
                name: "Wild Storm",
                description: "Ao Kuang unleashes a storm of lightning from his sword, damaging all enemies in front of him. This hit will send a Dragon from Dragon's Call forth, dealing damage to hit targets.",
                buffs: [
                    "Damage: 90/135/180/225/270 (+40% of your Magical Power)",
                    "Range: 30",
                    "Cooldown: 6 seconds"
                ],
                imageUrl: require('../assets/images/ao_kuang_3.png'),
            },
            {
                name: "King of the Eastern Seas (Ultimate)",
                description: "Ao Kuang grabs a single target, damaging and knocking them into the air. If the target is below a Health threshold, Ao Kuang will also reveal his true form, becoming an airborne Dragon and executing them restoring Health. After transforming Ao Kuang then picks a new location to land, dealing damage to enemies within 20 units.",
                buffs: [
                    "Damage: 90/140/190/240/290 (+50% of your Magical Power)",
                    "Execute Threshold: 30%",
                    "Heal: 10/15/20/25/30% of maximum Health",
                    "Landing Damage: 100/150/200/250/300 (+50% of your Magical Power)",
                    "Range: 15",
                    "Cooldown: 100 seconds",
                    "The target can avoid being executed by cleansing the knockup effect before reaching the halfway point of going up into the air.",
                    "Ao Kuang is CC immune while he is grabbing a target, even if the ability does not result in an execute."
                ],
                imageUrl: require('../assets/images/ao_kuang_ult.png'),
            },
        ]
    },
    {
        name: "Aphrodite",
        class: GodClass.Mage,
        range: Range.Ranged,
        blurb: "High Sustain",
        imageUrl: require('../assets/images/aphrodite.png'),
        abilities: [
            {
                name: "Center of Attention (Passive)",
                description: "Aphrodite gains 4 Physical Protection and 4 Magical Protection for each friendly or enemy god within 70 feet of her.",
                buffs: [
                    "Radius: 70",
                ],
                imageUrl: require('../assets/images/aphrodite_p.png'),
            },
            {
                name: "Kiss",
                description: "Aphrodite blows a kiss to an allied god, making them her soul mate and giving them both increased movement speed. If it hits an ally, it has a reduced 1s cooldown. If the kiss hits an enemy god, they are Damaged, Stunned and Aphrodite's soul mate gets jealous, increasing their damage. Also Aphrodite's soul mate gains 50% of her MP5 and 10% of her Physical and Magical Protections.",
                buffs: [
                    "Damage: 40/60/80/100/120 (+25% of your Magical Power)",
                    "Movement Speed: 6/7/8/9/10%",
                    "Stun Duration: 1s",
                    "Jealousy Damage Increase: 5/7.5/10/12.5/15%",
                    "Jealousy Duration: 5s",
                    "Range: 55",
                    "Cooldown: 14/13.5/13/12.5/12 seconds",
                    "If Aphrodite and the linked ally are more than 70 units apart for 2s, the link is broken."
                ],
                imageUrl: require('../assets/images/aphrodite_1.png'),
            },
            {
                name: "Back Off!",
                description: "Agitated by all the attention, Aphrodite commands enemies to get away from her, doing damage around her, slowing them by 25% for 2s and knocking them back to 25 units from her.  If Aphrodite has a soul mate, an explosion originates on them in addition, dealing damage as well as slowing enemies.  If an enemy would be hit by both blasts, they will only be affected by the one originating from Aphrodite.",
                buffs: [
                    "Damage: 80/140/200/260/320 (+85% of your Magical Power)",
                    "Soul Mate Damage: 80/140/200/260/320 (+70% of your Magical Power)",
                    "Slow: 25%",
                    "Radius: 20",
                    "Cooldown: 14/13.5/13/12.5/12 seconds"
                ],
                imageUrl: require('../assets/images/aphrodite_2.png'),
            },
            {
                name: "Love Birds",
                description: "Aphrodite calls forth a flock of beautiful doves that fly forward in the area in front of her. The doves circle around all enemies in the path, damaging enemies every .5s for 3s. Aphrodite and her soul mate receive healing when cast and decreased ability cooldowns.",
                buffs: [
                    "Damage per Tick: 15/25/35/45/55 (+15% of your Magical Power)",
                    "Heal per Tick: 7/10/13/16/19 + 2 per level",
                    "Cooldown Decrease: 0.2s per Tick",
                    "Range: 70",
                    "Cooldown: 16 seconds"
                ],
                imageUrl: require('../assets/images/aphrodite_3.png'),
            },
            {
                name: "Undying Love (Ultimate)",
                description: "Aphrodite pledges undying love to herself and her soul mate, refreshing half of the original cooldown of Love Birds. While this is active, her and her soul mate are invulnerable to all damage and gain the Jealousy effect for a short duration. All Crowd Control effects are also removed when activated.",
                buffs: [
                    "Invulnerability Duration: .8/1.1/1.4/1.7/2s",
                    "Cooldown: 90 seconds",
                    "Can be used while under crowd control. Grants CC immunity."
                ],
                imageUrl: require('../assets/images/aphrodite_ult.png'),
            },
        ]
    },
    {
        name: "Apollo",
        class: GodClass.Hunter,
        range: Range.Ranged,
        blurb: "High Mobility",
        imageUrl: require('../assets/images/apollo.png'),
        abilities: [
            {
                name: "Audacity (Passive)",
                description: "After 10 successful Basic Attacks, Apollo gains Audacity, increasing his Attack Speed by 100% and his Basic Attack projectile speed for the next 5 Basic Attacks (hit or miss) he makes. Apollo also gains 1 stack of Audacity for each successful damaging ability on Enemy gods.",
                buffs: [
                    "Attack Speed Buff: 100%",
                    "Buff Duration: 5 Basic Attacks",
                    "Apollo's basic attacks while the buff is active have +20% projectile speed."
                ],
                imageUrl: require('../assets/images/apollo_p.png'),
            },
            {
                name: "So Beatiful",
                description: "Apollo strums a single chord on his lyre. It's so beautiful it hurts, and all enemies in a long range line take damage.",
                buffs: [
                    "Damage: 90/150/210/270/330 (+90% of your Physical Power)",
                    "Range: 55",
                    "Cooldown: 11 seconds",
                    "Projectile speed of 150."
                ],
                imageUrl: require('../assets/images/apollo_1.png'),
            },
            {
                name: "Serenade",
                description: "Apollo uses his amazing voice to Mesmerize all nearby enemies and bolster himself with additional protections. Any damage done breaks the effect.",
                buffs: [
                    "Mesmerize: 1.5/1.7/1.9/2.1/2.3s",
                    "Buff Lifetime: 5s",
                    "Protections: 10/15/20/25/30",
                    "Radius: 20",
                    "Cooldown: 15/14.5/14/13.5/13 seconds",
                    "Mesmerize only breaks from damage dealt by gods."
                ],
                imageUrl: require('../assets/images/apollo_2.png'),
            },
            {
                name: "The Moves",
                description: "Apollo runs forward and slides on his knees, dealing damage, knocking aside all enemies and adding a stack of Audacity for each enemy hit. At the end of the slide, the movement speed is decreased for enemies and increased for himself and allies.",
                buffs: [
                    "Damage: 70/115/160/205/250 (+60% of your Physical Power)",
                    "Movement Speed Buff/Debuff: 15/17.5/20/22.5/25%",
                    "Buff Duration: 5s",
                    "Range/Radius: 45/20",
                    "Cooldown: 15 seconds",
                    "Has a knockback strength of 250, a prefire time of 0.15s and dash time of 0.58s.",
                    "Only the dash deals damage"
                ],
                imageUrl: require('../assets/images/apollo_3.png'),
            },
            {
                name: "Across the Sky (Ultimate)",
                description: "Apollo rides his chariot across the sky, choosing when to land, dealing damage every .15s for .6s as he lands. Enemies hit by the last tick of the landing will also be knocked up.",
                buffs: [
                    "Damage per Tick: 70/95/120/145/170 (+25% of your Physical Power)",
                    "Range/Radius: 60/20",
                    "Cooldown: 110 seconds",
                    "Apollo is immune to crowd control while channeling and untargetable, but not invulnerable while in the air.",
                    "Won't go on cooldown if Apollo dies before taking off."
                ],
                imageUrl: require('../assets/images/apollo_ult.png'),
            },
        ]
    },
    {
        name: "Arachne",
        class: GodClass.Assassin,
        range: Range.Melee,
        blurb: "High Single Target Damage, Great Jungler",
        imageUrl: require('../assets/images/arachne.png'),
        abilities: [
            {
                name: "Predator (Passive)",
                description: "Arachne's Basic Attacks gain 1.25% Physical damage for every 5% of a target's missing Health.",
                buffs: [
                    ""
                ],
                imageUrl: require('../assets/images/arachne_p.png'),
            },
            {
                name: "Venemous Bite",
                description: "Upon activation, Arachne's next Basic Attack within 5s does additional damage and infects the target with Venom, dealing damage over time, lowering their healing received and healing Arachne every 0.5s for 3s.",
                buffs: [
                    "Initial Damage: 50/75/100/125/150 (+35% of your Physical Power)",
                    "Damage per Tick: 10/18/26/34/42 (+8% of your Physical Power)",
                    "Healing Reduction: 40%",
                    "Healing per Tick: 8/15/22/29/36",
                    "Cooldown: 15/14/13/12/11 seconds"
                ],
                imageUrl: require('../assets/images/arachne_1.png'),
            },
            {
                name: "Cocoon",
                description: "Arachne spindles her webbing, increasing her Attack Speed for 4s. If 3 enhanced Basic Attacks hit the same target, that target is Stunned and have their Cooldowns increased.",
                buffs: [
                    "Attack Speed: 20/30/40/50/60%",
                    "Stun Duration: 1/1.1/1.2/1.3/1.4s",
                    "Cooldown Increase: 2s",
                    "Cooldown: 14 seconds"
                ],
                imageUrl: require('../assets/images/arachne_2.png'),
            },
            {
                name: "Web",
                description: "Arachne shoots a line of Web forward. She is Immune to Slows and moves faster on Web. If the Web reaches max range a Web trap will spawn. Enemy gods who walk through the trap or get hit by the projectile are Slowed by 15%, revealed to Arachne, leave a trail of Web behind them, and are attacked by Pet Broodlings. Arachne can only have 3 Web traps or projectiles active at a time.",
                buffs: [
                    "Slow Duration: 4/4.5/5/5.5/6s",
                    "Movement Speed: 40%",
                    "Gains third broodling when ability is maxed",
                    "Broodling Damage: 20/30/40/50/60 (+20% of your Physical Power) per hit",
                    "Web Lifetime: 240s",
                    "Range: 45",
                    "Cooldown: 14/13.5/13/12.5/12 seconds",
                    "Enemies are revealed to Arachne for 8s."
                ],
                imageUrl: require('../assets/images/arachne_3.png'),
            },
            {
                name: "Night Crawler (Ultimate)",
                description: "Arachne flips up to her infinite web, hanging upside down above the lane and increasing her movement speed. She may leap off the web to deal damage to all enemies in the target area and create a large web around the target area. The web area provides the same slow to enemies and benefit to Arachne as her Web Trail. Arachne may activate Ability 1 and 2 while running on this web.",
                buffs: [
                    "Damage: 150/250/350/450/550 (110% of your Physical Power)",
                    "Duration on Web: 5s",
                    "Movement Speed: 40%",
                    "Web Radius: 25",
                    "Radius: 15",
                    "Range: 50",
                    "Cooldown: 90/85/80/75/70 seconds",
                    "Arachne is immune to crowd control and untargetable while using this ability."
                ],
                imageUrl: require('../assets/images/arachne_ult.png'),
            },
        ]
    },
    {
        name: "Ares",
        class: GodClass.Guardian,
        range: Range.Melee,
        blurb: "High Crowd Control, High Defense",
        imageUrl: require('../assets/images/ares.png'),
        abilities: [
            {
                name: "Blessed Presence (Passive)",
                description: "Each completed aura item that Ares owns grants him 40 additional Magical Power. Additionally, Ares gains bonus Basic Attack damage per level.",
                buffs: [
                    "Grants a total of 240 Magical Power when built all T3 aura items."
                ],
                imageUrl: require('../assets/images/ares_p.png'),
            },
            {
                name: "Shackles",
                description: "Chains extend from Ares' shield, doing damage to all enemies in its path. Hitting a god shackles them to Ares, Cripples them, preventing movement abilities, dealing the same damage every second while slowing them by 15% and buffing Ares. While shackled, Ares can fire another chain for free within 2s. Jungle Camps take an extra +40% damage.",
                buffs: [
                    "Minion Damage: 70/90/110/130/150 (+15% of your Magical Power)",
                    "God Damage per Tick: 20/40/60/80/100 (+15% of your Magical Power)",
                    "Speed Buff per Target Shackled: 15%",
                    "Duration: 4s",
                    "Max Shackles: 3",
                    "Range: 55",
                    "Cooldown: 15/14.5/14/13.5/13 seconds",
                    "The shackles can go through walls and are lost if either Ares or the shackled enemy move further than 65 units."
                ],
                imageUrl: require('../assets/images/ares_1.png'),
            },
            {
                name: "Bolster Defenses",
                description: "Ares strengthens the defenses of himself and all nearby allies for 6s, granting Basic Attack Damage, Protections, HP5, and reducing Crowd Control durations. For each shackled enemy, the Protection Buffs are increased.",
                buffs: [
                    "Protections: 20/25/30/35/40",
                    "CC Reduction: 30%",
                    "Basic Attack Damage: 0/5/10/15/20",
                    "Shackle Bonus: 7",
                    "HP5: 25/30/35/40/45",
                    "Radius: 35",
                    "Cooldown: 15 seconds",
                    "Cooldown begins as soon as it's been used."
                ],
                imageUrl: require('../assets/images/ares_2.png'),
            },
            {
                name: "Searing Flesh",
                description: "Flames pour forth from Ares' shield, engulfing enemies in a cone in front of him causing damage every .5s for 4s. Ares is immune to Knockback for the duration.",
                buffs: [
                    "Damage per Tick: 15/20/25/30/35 (+8% of your Magical Power)",
                    "% Max Health per Tick (Gods): 1/1/2/2/3%",
                    "% Max Health per Tick (Minions): 4%",
                    "Range: 35",
                    "Cooldown: 12 seconds",
                    "Won't go into cooldown until the effect ends."
                ],
                imageUrl: require('../assets/images/ares_3.png'),
            },
            {
                name: "No Escape (Ultimate)",
                description: "Ares throws chains out to all enemy gods in an area around him, gaining Crowd Control immunity and Damage Mitigation. All enemies hit by the chains are pulled to Ares after 2.5s, taking damage and are Stunned.",
                buffs: [
                    "Chains and pulls targets through walls.",
                    "Ares suffers a 30% Movement Speed Slow while channeling.",
                    "Radius: 35",
                    "Cooldown: 90 seconds"
                ],
                imageUrl: require('../assets/images/ares_ult.png'),
            },
        ]
    },
    {
        name: "Artemis",
        class: GodClass.Hunter,
        range: Range.Ranged,
        blurb: "High Single Target Damage",
        imageUrl: require('../assets/images/artemis.png'),
        abilities: [
            {
                name: "Still Target (Passive)",
                description: "Artemis deals 15% increased Basic Attack damage to gods and 30% to minions who are afflicted by Crowd Control.",
                buffs: [
                    "Does not include knockbacks/knockups, blinds or grabs."
                ],
                imageUrl: require('../assets/images/artemis_p.png'),
            },
            {
                name: "Transgressor's Fate",
                description: "Artemis places a trap on the ground. Enemy gods coming within 5 units of her traps activate them, Rooting, Crippling, and revealing the enemy god while dealing damage every second for 3s.",
                buffs: [
                    "Damage per Tick: 35/48/61/74/87 (+30% of your Physical Power)",
                    "Root: 2s",
                    "Max Traps: 4",
                    "Range/Radius: 40/5",
                    "Cooldown: 14/13/12/11/10 seconds"
                ],
                imageUrl: require('../assets/images/artemis_1.png'),
            },
            {
                name: "Vengeful Assault",
                description: "Artemis attacks at a furious pace, increasing her Attack and Movement Speed significantly. Additionally, Artemis cleanses herself of slows and becomes immune to Slows for 0.6s when activated.",
                buffs: [
                    "Attack Speed: 40/50/60/70/80%",
                    "Movement Speed: 25%",
                    "Duration: 3/3.5/4/4.5/5s",
                    "Cooldown: 14 seconds"
                ],
                imageUrl: require('../assets/images/artemis_2.png'),
            },
            {
                name: "Suppress the Insolent",
                description: "Artemis fires a volley into a ground target, suppressing all of her enemies. Enemies caught within the volley are damaged and are Slowed.",
                buffs: [
                    "Damage: 100/150/200/250/300 (+75% of your Physical Power)",
                    "Slow: 25%",
                    "Slow Duration: 2s",
                    "Range/Radius: 55/15",
                    "Cooldown: 9 seconds"
                ],
                imageUrl: require('../assets/images/artemis_3.png'),
            },
            {
                name: "Calydonian Boar (Ultimate)",
                description: "Artemis summons the great Calydonian Boar on her enemies, doing damage to the nearest enemy god and Stunning them, and itself. The boar is immune until it hits the first god and then continues to charge other gods for its lifetime. Artemis is also immune to Crowd Control for 1.5s.",
                buffs: [
                    "Damage: 150/220/290/360/430 (+90% of your Physical Power)",
                    "Stun: 1.1/1.2/1.3/1.4/1.5s",
                    "Boar Lifetime: 6s",
                    "Radius: 60",
                    "Cooldown: 90 seconds"
                ],
                imageUrl: require('../assets/images/artemis_ult.png'),
            },
        ]
    },
    {
        name: "Artio",
        class: GodClass.Guardian,
        range: Range.Melee,
        blurb: "High Crowd Control, High Sustain",
        imageUrl: require('../assets/images/artio.png'),
        abilities: [
            {
                name: "Decompose (Passive)",
                description: "Enemy gods hit by Artio's Druid or Bear damaging abilities will begin to decompose. This effect decreases their Physical and Magical Protections. This effect stacks.",
                buffs: [
                    "Protections Debuff Per Stack: 3%",
                    "Max Stacks: 4",
                    "Duration: 6s",
                    "Applies up to 12% Protection reduction."
                ],
                imageUrl: require('../assets/images/artio_p.png'),
            },
            {
                name: "Energy Surge (Maul Prey)",
                description: "Druid: Artio pulses out a strong wave of energy that damages enemies. She will heal herself and allies within 65 units for each enemy god hit by this ability.\nBear Form: Artio slashes twice with her claws, damaging enemies with each swipe.",
                buffs: [
                    "Druid Damage: 70/105/140/175/210 (+35% of your Magical Power)",
                    "Druid Heal: 40/60/80/100/120",
                    "Bear Damage Per Swipe: 40/70/100/130/160 (+30% of your Magical Power)",
                    "Range: 25",
                    "Cooldown: 12 seconds"
                ],
                imageUrl: require('../assets/images/artio_1.png'),
            },
            {
                name: "Entangling Vines (Ferocious Roar)",
                description: "Druid Form: Artio creates a thicket of vines around herself that cripples enemy gods and decreases their Magical or Physical Power as long as they are in the area.\nBear Form: Artio lets out a ferocious roar that Stuns all nearby enemies and increases her own Physical and Magical Protections for 4s.",
                buffs: [
                    "Druid Area Duration: 4/4.5/5/5.5/6s",
                    "Druid Power Debuff: 9/10.5/12/13.5/15%",
                    "Bear Stun Duration: 1/1.1/1.2/1.3/1.4s",
                    "Bear Self Buff: 25/30/35/40/45 Protections",
                    "Radius: 20",
                    "Cooldown: 15 seconds",
                    "Entangling Vines also persists through death."
                ],
                imageUrl: require('../assets/images/artio_2.png'),
            },
            {
                name: "Life Tap (Heavy Charge)",
                description: "Druid Form: Artio channels for 2s, draining the life from enemies. While channeling she deals damage up to 5 times and heals herself up to 5 times. Each hit increasingly Slows enemies and enemies hit all 5 times are Rooted for 1s.\nBear Form: Artio charges forward at an increased movement speed for 3s. Enemies she charges through take damage and are Slowed for 2s.",
                buffs: [
                    "Druid Damage Per Hit: 15/30/45/60/75 (+15% of your Magical Power)",
                    "Druid Heal Per Hit: 10/15/20/25/30",
                    "Druid Slow: 10%",
                    "Bear Damage: 75/120/165/210/255 (+55% of your Magical Power)",
                    "Bear Slow: 30%",
                    "Range: 55",
                    "Cooldown: 15 seconds",
                    "Artio moves 100% faster while using Heavy Charge."
                ],
                imageUrl: require('../assets/images/artio_3.png'),
            },
            {
                name: "Shapeshift (Ultimate)",
                description: "Active: Artio Shapeshifts between her Druid stance and Bear stance.\nPassive: Every time Artio hits at least 1 enemy with an ability she gains 1 stack of Invigoration. Invigoration stacks increase her Movement Speed and MP5. Stacks last 6s, and stack up to 8 times.",
                buffs: [
                    "Movement Speed Per Stack: 1/1.5/2/2.5/3%",
                    "MP5 Per Stack: 2/4/6/8/10",
                    "Cooldown: 1 second",
                    "Artio starts in druid stance and respawns in whatever stance she was currently in."
                ],
                imageUrl: require('../assets/images/artio_ult.png'),
            },
        ]
    }
    
  
    //{
    //     name: "God Template",
    //     class: GodClass.,
    //     range: Range.,
    //     blurb: "",
    //     imageUrl: require('../assets/images/.png'),
    //     abilities: [
    //         {
    //             name: " (Passive)",
    //             description: "",
    //             buffs: [
    //                 ""
    //             ],
    //             imageUrl: require('../assets/images/_p.png'),
    //         },
    //         {
    //             name: "",
    //             description: "",
    //             buffs: [
    //                 ""
    //             ],
    //             imageUrl: require('../assets/images/_1.png'),
    //         },
    //         {
    //             name: "",
    //             description: "",
    //             buffs: [
    //                 ""
    //             ],
    //             imageUrl: require('../assets/images/_2.png'),
    //         },
    //         {
    //             name: "",
    //             description: "",
    //             buffs: [
    //                 ""
    //             ],
    //             imageUrl: require('../assets/images/_3.png'),
    //         },
    //         {
    //             name: " (Ultimate)",
    //             description: "",
    //             buffs: [
    //                 ""
    //             ],
    //             imageUrl: require('../assets/images/_ult.png'),
    //         },
    //     ]
    //}
];

export default gods;
