const database = {
    heroes: [
        {
            id: 1,
            name: "Iron Man",
            power: "Money"
        },
        {
            id: 2,
            name: "Thor",
            power: "Thunder"
        },
        {
            id: 3,
            name: "Hulk",
            power: "Strength"
        },
        {
            id: 4,
            name: "Captain America",
            power: "Super soldier serum"
        },
    
    ],
    villains: [
        {
            id:1,
            name: "Thanos",
            power: "Power"
        },

        {   id:2,
            name: "Loki",
            power: "Mischief"

        },        
        {
            id:3,
            name: "Mysterio",
            power: "Illusion"
        },

        {   id:4,
            name: "Venom",
            power: "Strength"

        },        
    
    
    ]

}
 


export const getHeroes = () => {
    return database.heroes.map(hero=>({...hero}))
 }

export const getVillains = () => {
    return database.villains.map(villain=>({...villain}))
}