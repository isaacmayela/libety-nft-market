import blockChainIcon from "../assets/images/icon-01.png"
import digitalArtIcon from "../assets/images/icon-02.png"
import musicArtIcon from "../assets/images/icon-03.png"
import visualWordIcon from "../assets/images/icon-04.png"
import valuableIcon from "../assets/images/icon-05.png"
import tripleIcon from "../assets/images/icon-06.png"


class UsefulFeatures{

    static categoriesItemsElements () {
        const objList = [

            {   
                id:"1",
                source:`${blockChainIcon}`,
                description: "Blockchaine"
            },
            {
                id:"2",
                source:`${digitalArtIcon}`,
                description: "Digital Art"
            },
            { 
                id:"3",
                source:`${musicArtIcon}`,
                description: "Musique Art"
            },
            {
                id:"4",
                source:`${visualWordIcon}`,
                description: "Visual World"
            },
            {   
                id:"5",
                source:`${valuableIcon}`,
                description: "Valuable"
            },
            {   
                id:"6",
                source:`${tripleIcon}`,
                description: "Triple NFT"
            }
        ]

        return objList
    }

    static cOllectionsItemsElements () {
        const objList = [
            {   source:"",
                description: "Blockchaine"
            },
            {   source:"",
                description: "Digital Art"
            },
            {   source:"",
                description: "Musique Art"
            },
            {   source:"",
                description: "Visual World"
            },
            {   source:"",
                description: "Valuable"
            },
            {   source:"",
                description: "Triple NFT"
            }
        ]

        return objList
    }

    static changeScrollBarState () {
        
    }
}

export default UsefulFeatures