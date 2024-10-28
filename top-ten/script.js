// Array of top young football players with details and images
const players = [
    {
        name: "Jude Bellingham",
        age: 20,
        team: "Real Madrid",
        description: "A versatile midfielder known for his leadership on the field and tactical intelligence. He has quickly become a fan favorite at Real Madrid.",
        image: "images/images.jpeg" ,
        paragraph:"Jude Victor William Bellingham (born 29 June 2003) is an English professional footballer who plays as a midfielder for La Liga club Real Madrid and the England national team. Known for his pace, dribbling, passing and composure, he is widely regarded as one of the best players in the world.[7]Bellingham joined Birmingham City as an under-8, became the club's youngest first-team player when he made his senior debut in August 2019, at the age of 16 years, 38 days, and played regularly during the 2019–20 season. He joined Borussia Dortmund in July 2020, and in his first appearance became their youngest goalscorer. Over three seasons with the club he made 132 appearances and won the 2020–21 DFB-Pokal; his performances in the 2022–23 season helped Dortmund finish as runners-up and earned him the Bundesliga Player of the Season award. Later that year he won both major awards for male footballers aged under 21: the Golden Boy, for nominees playing in Europe over the last calendar year,[8] and the Kopa Trophy, for the world's best over the previous season.[9][10] Bellingham then signed for Real Madrid for a fee of €103 million, and in his first season, was the club's top league scorer, helped them win the league title and the Champions League, and was voted La Liga Player of the Season"
    },
    {
        name: "Pedri",
        age: 21,
        team: "Barcelona",
        description: "Often hailed as one of Barcelona's most promising talents, Pedri is celebrated for his playmaking skills, vision, and ball control.",
        image: "images/pedri.jpeg" ,
        paragraph:"Pedro González López (born 25 November 2002), more commonly known as Pedri, is a Spanish professional footballer who plays as a central midfielder for La Liga club Barcelona and the Spain national team. Considered one of the best midfielders in the world, he is known for his passing, vision, and ball retention.[2][3]"
    },
    {
        name: "Jamal Musiala",
        age: 20,
        team: "Bayern Munich",
        description: "Musiala is known for his dribbling, agility, and creativity, making him one of Bayern Munich’s top young stars.",
        image: "images/musiala.jpeg" ,// Example image URL
        paragraph:"Jamal Musiala (born 26 February 2003) is a German professional footballer who plays as an attacking midfielder and winger for Bundesliga club Bayern Munich and the Germany national team. Nicknamed 'bambi' for his dribbling ability, he is known for his pace and technicality[4], and is considered one of the best players in the world.[5][12][13] Musiala has represented Germany at UEFA Euro 2020, the 2022 FIFA World Cup, and Euro 2024. He was the joint winner of Euro 2024’s Golden Boot."
    },
    {
        name: "Gavi",
        age: 19,
        team: "Barcelona",
        description: "Known for his tenacity and fearless approach to the game, Gavi has established himself as a key player in Barcelona's midfield.",
        image: "images/gavi.jpeg" ,// Example image URL
        paragraph:"Pablo Martín Páez Gavira (Spanish pronunciation: [ˈpaβlo maɾˈtim ˈpaeθ ɣaˈβiɾa];[3] born 5 August 2004), known as Gavi (pronounced [ˈɡaβi]), is a Spanish professional footballer who plays as a central midfielder for La Liga club Barcelona and the Spain national team.[4][5]In 2022, Gavi won the Golden Boy award and received the Kopa Trophy, awarded by France Football during the 2022 Ballon d'Or ceremony."
    },
    {
        name: "Florian Wirtz",
        age: 20,
        team: "Bayer Leverkusen",
        description: "A natural playmaker, Wirtz is recognized for his finishing and vision, making him one of the top young German talents.",
        image: "images/wirtz.jpeg", // Example image URL
        paragraph:"Florian Richard Wirtz (born 3 May 2003) is a German professional footballer who plays as an attacking midfielder for Bundesliga club Bayer 04 Leverkusen and the Germany national team.[3] He is regarded as one of the best young players in the world.[4][5]"
    },
    {
        name: "Bukayo Saka",
        age: 22,
        team: "Arsenal",
        description: "Saka has become an essential player for Arsenal, praised for his versatility, crossing ability, and work ethic.",
        image: "images/saka.jpeg" ,// Example image URL
        paragraph:"Bukayo Ayoyinka Temidayo Saka (born 5 September 2001) is an English professional footballer who plays as a right winger for Premier League club Arsenal and the England national team. Known for his creativity, dribbling and work rate, he is regarded as one of the best players in the world.[3][4][5][6]Saka has spent his entire first-team club career with Arsenal, where he has won an FA Cup and two FA Community Shields, progressively becoming one of Arsenal's most influential players.[7] Following both the 2020–21 and 2021–22 seasons, he was named as Arsenal's Player of the Season.[8]Saka represented England at various youth levels before making his debut for the senior team in October 2020. He was part of England's squads for UEFA Euro 2020 and 2024, which England finished as runners-up in both, and the 2022 FIFA World Cup"
    },
    {
        name: "Eduardo Camavinga",
        age: 21,
        team: "Real Madrid",
        description: "Camavinga is known for his excellent tackling and ball recovery skills in Real Madrid’s midfield.",
        image: "images/camavinga.jpeg" ,// Example image URL
        paragraph:"Eduardo Celmi Camavinga (born 10 November 2002) is a professional footballer who plays for La Liga club Real Madrid and the France national team. He is known for his tackling, versatility, and mobility. His usual positions are central or defensive midfielder[4] and left-back.[5][6]Camavinga began his career in Ligue 1 with Rennes, making his senior debut at the age of 16, and quickly established himself as a regular first-team player. In 2021, he signed for Real Madrid for a fee of €31 million, winning a La Liga and UEFA Champions League double in his first season.Born in Angola, Camavinga moved to France at a young age, eventually representing the country at under-21 level. He made his first senior appearance for the France national team in 2020 at the age of 17, becoming the nation's youngest debutant in over a century. He was part of the French squad that finished runners-up at the 2022 FIFA World Cup."
    },
    {
        name: "Ansu Fati",
        age: 21,
        team: "Brighton (on loan from Barcelona)",
        description: "Known for his pace and technical abilities, Fati is considered a top talent at Barcelona.",
        image: "images/ansu.jpeg" ,// Example image URL
        paragraph:"Anssumane Fati Vieira (born 31 October 2002) is a professional footballer who plays as a forward or winger[2] for La Liga club Barcelona. Born in Guinea-Bissau, he plays for the Spain national team."
    },
    {
        name: "Rayan Cherki",
        age: 20,
        team: "Lyon",
        description: "Cherki’s flair and creativity make him one of the most exciting young prospects in French football.",
        image: "images/cherki.jpeg" ,// Example image URL
        paragraph:"Rayan Cherki (born 3 August 2002) is a French professional footballer who plays as a central midfielder for Paris Saint-Germain club Lyon."
    },
    {
        name: "Giovanni Reyna",
        age: 21,
        team: "Borussia Dortmund",
        description: "Reyna is a versatile attacking player with a great eye for goal and chance creation.",
        image: "images/reyna.jpeg", // Example image URL
        paragraph:"Giovanni reyna (born 26 July 2002) is a professional footballer who plays as an attacking midfielder for Borussia Dortmund."
    }
];

// Function to display players on the webpage
function displayPlayers() {
    const list = document.getElementById("players-list");

    players.forEach(player => {
        const listItem = document.createElement("li");

        listItem.innerHTML = `
            <div class="player-name">${player.name} (${player.age} years old)</div>
            <div class="player-details">Team: ${player.team}</div>
            <img src="${player.image}" alt="${player.name}" class="player-image">
            <hr>
            <div class="player-description">${player.description}</div>
            <hr>
            <div class="player-paragraph">${player.paragraph}</div>
        `;

        list.appendChild(listItem);
    });
}

// Load players when the DOM is ready
document.addEventListener("DOMContentLoaded", displayPlayers);
