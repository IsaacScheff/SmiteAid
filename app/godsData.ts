interface God {
    name: string;
    description: string;
    imageUrl: any;  // 'any' is used here for image require
}

const gods: God[] = [
    {
        name: "Achilles",
        description: "Description of Achilles here",
        imageUrl: require('../assets/images/achilles.png')
    },
    // Add more gods here
];

export default gods;
