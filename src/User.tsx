const Info = {
    name : "Kisun(Kartik) sah",
    stack :["Software Developer " , "Full stack developer" , "Competative programmer"],

    Bio:"  Hello! My name is kisun(kartik ) sah  and I am currently pursuing a   Bachelor of Computer Applications (BCA). As an enthusiastic and dedicated student, I am passionate about technology and the  ever-evolving world of software development. In addition to my  academic pursuits, I am a budding Full Stack Developer. This role  allows me to blend my knowledge of front-end and back-end technologies  to create dynamic and responsive web   applications.     "  

 





}

const ProjectInfo = [
       {
    title: "CryptoTracker",
    desc :  "CoinGeckoCrypto Tracker is a comprehensive API service designed to track cryptocurrency prices and features. It offers functionality similar to CoinGecko, allowing users to fetch data on all available coins, track their prices, and analyze various features." ,
    image:"crypto.png",
    live : true ,
    technologies:["React", "npm", "tailwind css" ,"daisyUI"],
    link : "https://crypto-projet-coin-gecko.vercel.app/",
    github :"https://github.com/kisun-sah/Crypto-Projet---CoinGecko"

 },

    {
        title: "HangMan Application ",
        desc : "Hangman is a classic word-guessing game where players try to guess a hidden word by suggesting letters within a limited number of attempts. This project is a modern implementation of the game using the React library.",
        image : "hangman.png",
        live: true ,
        technologies:["React", "npm", "tailwind","daisyUI"],
        link: "https://hang-man-react-brown.vercel.app/",
        github :"https://github.com/kisun-sah/HangMan-React"
    } ,


    {
        title: "Spotify Application ",
        desc :"Sportify is a music streaming application that allows users to create accounts, log in, and enjoy a seamless music experience. The application automatically detects and organizes music files in your device, providing an easy and user-friendly interface similar to Spotify.",
        image : "spotify.png",
        live: true ,
        technologies:["Html ", "Css ", "JavaScript" ,"DOM" ,"Browser"],
        link: "https://vibspotify.freewebhostmost.com/",
        github: "https://github.com/kisun-sah/sportify-Application",
    },

    {
        title : "Tic-Toc-Toe game", 
        desc : "This is a simple Tic-Tac-Toe React game that can be played by two users. The game is built using HTML, CSS, and JavaScript.",
        image : "tiktaktok.png",
        live:true,
        technologies:["javascript","DOM"],
        link:"https://kisun-sah.github.io/Tic-Tac-Toe-game/",
        github:"https://github.com/kisun-sah/Tic-Tac-Toe-React-"
    },

    {
        title:"Lier-List Application" ,
        desc:"This is a drag and drop based tier list app that allows users to create and customize their own tier lists. Users can easily drag and drop items into different tiers, making it convenient to organize and rank various elements.",
        image:"tierlist.png",
        live: false,
        technologies:["Html ", "Css ", "JavaScript" ,"DOM"],
        github:"https://github.com/kisun-sah/Tiar_list-Application"
    },
    {
        title: "Red-Bus Clone ",
        desc: "In this project user has to clone the homepage of the popular website redbus.The homepage of redbus is not responsive by itself as they have seprate mobile web app for it, so if user wants to make it responsive then they have to think about it by their own.",
        image: "redbus.png",
        live:false,
        technologies:["Html ", "Css ", "JavaScript"],
        github :"https://github.com/kisun-sah/full-stack-project/tree/main/03%20Redbus%20Clone"


    } ,

    {
        title : "You-Tube Clone",
        desc:"it is a video play page when you go on this page we will play video  show more disscription on the  video like  like , dslike     saved &  share the video ." ,
        image : "youtube.png",
        live:false,
        github:"https://github.com/kisun-sah/full-stack-project/tree/main/You-Tube%20clone"
                             
    } ,

    {
        title: "Sanke game",
        desc:"In this Snake Game, the player controls a snake that moves around the screen, eating food to grow longer. The objective is to make the snake as long as possible without hitting the walls or colliding with its own tail. As the snake eats more food, it becomes faster and more challenging to control.",
        image:"snake.png",
        live:false,
        github:"https://github.com/kisun-sah/JavaScript-Project/tree/main/SnakeGame"
    }
]

const technologies = ["React", "Node.js", "TypeScript", "GraphQL"]
export {Info ,ProjectInfo , technologies}