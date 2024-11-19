interface God {
    name: string;
    blurb: string;
    imageUrl: any;  // 'any' is used here for image require
    description?: string

}

const gods: God[] = [
    {
        name: "Achilles",
        blurb: "Description of Achilles here",
        imageUrl: require('../assets/images/achilles.png')
    },
    {
        name: "Agni",
        blurb: "Description of Agni here",
        imageUrl: require('../assets/images/agni.png')
    },
    {
        name: "Ah Muzen Cab",
        blurb: "Description of Muzzy Cab face here",
        imageUrl: require('../assets/images/ah_muzen_cab.png')
    },
    {
        name: "Ah Puch",
        blurb: "Description of Poochy here",
        imageUrl: require('../assets/images/ah_puch.png')
    },
    // Add more gods here
];

export default gods;
