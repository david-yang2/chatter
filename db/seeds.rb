# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#users
User.destroy_all

    demouser= User.create(
        username: "David",
        email: "Davd@demo.com",
        password: "DavidDemo"
    )

    user1 = User.create(
        username: "ESPN",
        email: "ESPN@test.com",
        password: "ESPN333"
    )

    user2 = User.create(
        username: "MarketWatch",
        email: "MarketWatch@test.com",
        password: "MarketWatch333"
    )

    user3 = User.create(
        username: "Bloomberg",
        email: "Bloomberg@test.com",
        password: "Bloomberg333"
    )

    user4 = User.create(
        username: "Reuters",
        email: "Reuters@test.com",
        password: "Reuters333"
    )

    user5 = User.create(
        username: "The Economist",
        email: "The_Economist@test.com",
        password: "The_Economist333"
    )

    user6 = User.create(
        username: "TechCrunch",
        email: "TechCrunch@test.com",
        password: "TechCrunch333"
    )

    user7 = User.create(
        username: "React",
        email: "React@test.com",
        password: "React333"
    )

    user8 = User.create(
        username: "JavaScript Daily",
        email: "JavaScript_Daily@test.com",
        password: "JavaScript_Daily333"
    )

    user9 = User.create(
        username: "Formula 1",
        email: "Formula_1@test.com",
        password: "Formula_1333"
    )
    
    user10 = User.create(
        username: "Fox Sports",
        email: "Fox_Sports@test.com",
        password: "Fox_Sports333"
    )

    user11 = User.create(
        username: "Joey",
        email: "Joey@test.com",
        password: "Joey333"
    )

    user12 = User.create(
        username: "Rachel",
        email: "Rachel@test.com",
        password: "Rachel333"
    )

    user13 = User.create(
        username: "Chandler",
        email: "Chandler@test.com",
        password: "Chandler333"
    )

    user14 = User.create(
        username: "Ross",
        email: "Ross@test.com",
        password: "Ross333"
    )

    user15 = User.create(
        username: "Phoebe",
        email: "Phoebe@test.com",
        password: "Phoebe333"
    )

    user16 = User.create(
        username: "Monica",
        email: "Monica@test.com",
        password: "Monica333"
    )

#chat 
Chat.destroy_all

    chat1 = Chat.create(
        body: "Imagine Tom playing 30 years in the league",
        author_id: user1.id,
        topic: "Sports",
        imagepath: "/chats/espn1.png"
    )

    chat2 = Chat.create(
        body: "Birthday party in the endzone for Darren Waller
        \n
        Raiders and Ravens tied up at 24! ",
        author_id: user1.id,
        topic: "Sports"
    )

    chat3 = Chat.create(
        body:'“First, solve the problem. Then, write the code.” – John Johnson',
        author_id: demouser.id,
        topic: "Technology"
    )

    chat4 = Chat.create(
        body: "Netflix has bought its first video game studio. The streaming media giant scooped up game creator Night School Studio and is rolling out five mobile gaming titles in select markets in Europe",
        author_id: user4.id,
        topic: "Finance"
    )

    chat5 = Chat.create(
        body: "Heading into the final, Djokovic, Federer and Nadal are all tied with 20 major titles, the most in men's singles history
        \n
        If Djokovic claims his 21st major championship, where would he fall in the GOAT conversation?",
        author_id: user1.id,
        topic: "Sports",
        imagepath: "/chats/espn2.png"
    )
    chat6 = Chat.create(
        body: "Working with Tree Data Structures: https://stackfull.dev/tree-data-structure-in-javascript (The basics of traversal both breadth first and depth first. Complete with visuals to help you get the ideas more quickly.)",
        author_id: user8.id,
        topic: "Technology",
        imagepath: "/chats/javascriptdaily1.png"
    )

    chat7 = Chat.create(
        body: "The first Rookie Rankings of the season are here! Memo 
        @ESPNNFL
        \n
        
        (via @Jeff_Legwold )",
        author_id: user1.id,
        topic: "Sports",
        imagepath: "/chats/espn3.png"
    )

    chat8 = Chat.create(
        body: "Money-market funds and other financial firms can now park up to $160 billion overnight each at the Federal Reserve Bank in New York’s reverse repurchase program, double what was allowed under the earlier cap.",
        author_id: user2.id,
        topic: "Finance",
        imagepath: "/chats/marketwatch1.png"
    )

    chat9 = Chat.create(
        body: "The SpaceX flight taking four tourists on an extraterrestrial jaunt has also helped raise more than $130 million for children’s cancer research, and aims to bring in $200 million total.",
        author_id: user2.id,
        topic: "Finance",
        imagepath: "/chats/marketwatch2.png"
    )

    chat10 = Chat.create(
        body:"We’ve seen a few questions about the status of Suspense in React 18. We have updated this roadmap issue to clarify what’s done, what’s coming in 18.0, and what’s coming after",
        author_id: user7.id,
        topic: "Technology",
        imagepath: "/chats/react1.png"
    )


    chat11 = Chat.create(
        body: "Exxon Mobil, Chevron and ConocoPhillips are among companies failing to report all their tax payments despite being members of the Extractive Industries Transparency Initiative, the global anti-corruption body said Wednesday",
        author_id: user3.id,
        topic: "Finance",
        imagepath: "/chats/bloomberg1.png"

    )

    chat12 = Chat.create(
        body:"We're working on a large-scale rearchitecture of React Native to make the framework more flexible and integrate better with native infrastructure in hybrid JavaScript/native apps.",
        author_id: user7.id,
        topic: "Technology",
        imagepath: "/chats/react2.png"
    )

    chat13 = Chat.create(
        body: "Brazil’s central bank raises its benchmark interest rate by a full percentage point for a second straight meeting in an effort to control inflation that’s soaring toward double digits.",
        author_id: user3.id,
        topic: "Finance",
        imagepath: "/chats/bloomberg2.png"
    )


    chat14 = Chat.create(
        body: "Today, we're excited to share the first early community preview of Concurrent Mode. It offers new composable primitives to help you orchestrate delightful user experiences.",
        author_id: user7.id,
        topic: "Technology",
        imagepath: "/chats/react3.png"
    )


    chat15 = Chat.create(
        body: "Evergrande’s debt crisis has forced a too-big-to-fail moment. What does it mean for China and the rest of the global economy? 
        \n
        Read the Big Take",
        author_id: user3.id,
        topic: "Finance",
        imagepath: "/chats/bloomberg3.png"
    )

    chat16 = Chat.create(
        body:'"The only way to learn a new programming language is by writing programs in it." - Dennis Ritchie',
        author_id: demouser.id,
        topic: "Technology"
    )
    chat17 = Chat.create(
        body: "Resolving ‘tension’ between high inflation and still-elevated unemployment is the most urgent issue facing the U.S. Federal Reserve right now, Fed Chair Jerome Powell said, acknowledging the central bank's two goals are in potential conflict",
        author_id: user4.id,
        topic: "Finance",
        imagepath: "/chats/reuters1.png"
    )
    
    chat18 = Chat.create(
        body:'"Testing leads to failure, and failure leads to understanding." - Burt Rutan',
        author_id: demouser.id,
        topic: "Technology"
    )

    chat19 = Chat.create(
        body: "When it rains, it pours: A looming U.S. government shutdown adds to markets' unease, amid a hawkish shift by major central banks, signs of strain in China from a power crunch and problems at Evergrande. Latest from Marketmind",
        author_id: user4.id,
        topic: "Finance",
        imagepath: "/chats/reuters2.png"
    )

    chat20 = Chat.create(
        body: "Avoiding climate disaster will depend largely on three things: reducing emissions and finding ways to remove carbon from the atmosphere, adapting to climate change; and getting the global politics right. Listen to “To a Lesser Degree”—our new podcast",
        author_id: user5.id,
        topic: "Finance",
        imagepath: "/chats/theeconomist1.png"
    )
    chat21 = Chat.create(
        body: "Behind bond market’s muted response to Federal Reserve’s rate outlook may be a message for policy makers",
        author_id: user2.id,
        topic: "Finance",
        imagepath: "/chats/marketwatch3.png"
    )

    chat22= Chat.create(
        body:"Why did shipping containers take off in the 1960s, and what has their impact been on the global economy? Listen to “Gamechangers”, a podcast series from The Economist",
        author_id: user5.id,
        topic: "Finance"
    )

    chat23 = Chat.create(
        body: "Canelo Alvarez and Caleb Plant were talkin' spicy at their kickoff press conference",
        author_id: user10.id,
        topic: "Sports",
        imagepath: "/chats/foxsports1.png"
    )

    chat24= Chat.create(
        body: "Here's everything Amazon announced this morning, from smart thermostats to security robots",
        author_id: user6.id,
        topic: "Technology",
        imagepath:"/chats/techcrunch1.png"
    )

    chat25 = Chat.create(
        body:"How to Use `Promise.all()`: https://dmitripavlutin.com/promise-all/ (Handle multiple promises at once, in parallel, and then get the result in a single aggregate array.)",
        author_id: user8.id,
        topic: "Technology",
        imagepath:"/chats/javascriptdaily2.png"
    )


    chat26 = Chat.create(
        body: "Don't forget, the React Conf CFP closes Monday! At React Conf we want to highlight what you're building with React—for your community, your family, your business. We'd love to hear and give a platform for your React Story",
        author_id: user7.id,
        topic: "Technology",
        imagepath: "/chats/react4.png"
    )


    chat27 = Chat.create(
        body:"Rendering Magical Marbles with Three.js: https://tympanus.net/codrops/2021/08/02/magical-marbles-in-three-js/ (These sorts of 3D graphics tricks are a bit over my head, but it's neat to see how they're done.)",
        author_id: user8.id,
        topic: "Technology",
        imagepath: "/chats/javascriptdaily3.png"
    )

    chat28 = Chat.create(
        body:"What an absolute emotional roller coaster of a race in Sochi on Sunday",
        author_id: user9.id,
        topic: "Sports",
        imagepath: "/chats/formula1.png"
    )

    chat29 = Chat.create(
        body:"Introducing TechCrunch+, a membership product with advice and analysis to help startups get ahead",
        author_id: user6.id,
        topic: "Technology"
    )

    chat30 = Chat.create(
        body:"Kimi was brilliantly back in the points after making his return!
        \n
        Not that you'd know from his immediate reaction...",
        author_id: user9.id,
        topic: "Sports"
    )

    chat31 = Chat.create(
        body:"Are Washington fans at least open to the possibility that Heinicke could be a legit starting QB in the NFL? Last year he did more damage against that Bucs defense than Brees, Rodgers or Mahomes. And last night I thought he played awesome.",
        author_id: user10.id,
        topic: "Sports"
    )

    chat32 = Chat.create(
        body:'"Testing leads to failure, and failure leads to understanding." - Burt Rutan',
        author_id: demouser.id,
        topic: "Technology"
    )

    chat33 = Chat.create(
        body: "Khabib Nurmagomedov turns 33 today.
        \n
        He once trained for a fight by swimming upstream in a freezing river",
        author_id: user1.id,
        topic: "Sports",
        imagepath: "/chats/espn4.png"
    )

#likes
Like.destroy_all

    like1 = Like.create(user_id: demouser.id, chat_id: chat27.id)
    like2 = Like.create(user_id: demouser.id, chat_id: chat6.id)
    like3 = Like.create(user_id: demouser.id, chat_id: chat10.id)
    like4 = Like.create(user_id: demouser.id, chat_id: chat7.id)
    like5 = Like.create(user_id: demouser.id, chat_id: chat15.id)
    like6 = Like.create(user_id: demouser.id, chat_id: chat25.id)
    like7 = Like.create(user_id: demouser.id, chat_id: chat33.id)
    like8 = Like.create(user_id: demouser.id, chat_id: chat12.id)
    like9 = Like.create(user_id: demouser.id, chat_id: chat5.id)
    like10 = Like.create(user_id: demouser.id, chat_id: chat26.id)


    like11 = Like.create(user_id: user11.id, chat_id: chat2.id)
    like12 = Like.create(user_id: user11.id, chat_id: chat15.id)
    like13 = Like.create(user_id: user11.id, chat_id: chat18.id)
    like14 = Like.create(user_id: user11.id, chat_id: chat13.id)
    like15 = Like.create(user_id: user11.id, chat_id: chat20.id)
    like16 = Like.create(user_id: user11.id, chat_id: chat33.id)
    like17 = Like.create(user_id: user11.id, chat_id: chat12.id)
    like18 = Like.create(user_id: user11.id, chat_id: chat25.id)
    like19 = Like.create(user_id: user11.id, chat_id: chat6.id)
    like20 = Like.create(user_id: user11.id, chat_id: chat27.id)
    
    like21 = Like.create(user_id: user12.id, chat_id: chat12.id)
    like22 = Like.create(user_id: user12.id, chat_id: chat10.id)
    like23 = Like.create(user_id: user12.id, chat_id: chat6.id)
    like24 = Like.create(user_id: user12.id, chat_id: chat13.id)
    like25 = Like.create(user_id: user12.id, chat_id: chat20.id)
    like26 = Like.create(user_id: user12.id, chat_id: chat31.id)
    like27 = Like.create(user_id: user12.id, chat_id: chat22.id)
    like28 = Like.create(user_id: user12.id, chat_id: chat23.id)
    like29 = Like.create(user_id: user12.id, chat_id: chat6.id)
    like30 = Like.create(user_id: user12.id, chat_id: chat17.id)

    like31 = Like.create(user_id: user13.id, chat_id: chat27.id)
    like32 = Like.create(user_id: user13.id, chat_id: chat11.id)
    like33 = Like.create(user_id: user13.id, chat_id: chat18.id)
    like34 = Like.create(user_id: user13.id, chat_id: chat13.id)
    like35 = Like.create(user_id: user13.id, chat_id: chat21.id)
    like36 = Like.create(user_id: user13.id, chat_id: chat33.id)
    like37 = Like.create(user_id: user13.id, chat_id: chat3.id)
    like38 = Like.create(user_id: user13.id, chat_id: chat1.id)
    like39 = Like.create(user_id: user13.id, chat_id: chat8.id)
    like40 = Like.create(user_id: user13.id, chat_id: chat4.id)

    like41 = Like.create(user_id: user14.id, chat_id: chat32.id)
    like42 = Like.create(user_id: user14.id, chat_id: chat13.id)
    like43 = Like.create(user_id: user14.id, chat_id: chat6.id)
    like44 = Like.create(user_id: user14.id, chat_id: chat27.id)
    like45 = Like.create(user_id: user14.id, chat_id: chat21.id)
    like46 = Like.create(user_id: user14.id, chat_id: chat31.id)
    like47 = Like.create(user_id: user14.id, chat_id: chat26.id)
    like48 = Like.create(user_id: user14.id, chat_id: chat25.id)
    like49 = Like.create(user_id: user14.id, chat_id: chat7.id)
    like50 = Like.create(user_id: user14.id, chat_id: chat17.id)

    like61 = Like.create(user_id: user15.id, chat_id: chat22.id)
    like62 = Like.create(user_id: user15.id, chat_id: chat16.id)
    like63 = Like.create(user_id: user15.id, chat_id: chat10.id)
    like64 = Like.create(user_id: user15.id, chat_id: chat11.id)
    like65 = Like.create(user_id: user15.id, chat_id: chat9.id)
    like66 = Like.create(user_id: user15.id, chat_id: chat23.id)
    like67 = Like.create(user_id: user15.id, chat_id: chat19.id)
    like68 = Like.create(user_id: user15.id, chat_id: chat25.id)
    like69 = Like.create(user_id: user15.id, chat_id: chat7.id)
    like70 = Like.create(user_id: user15.id, chat_id: chat27.id)

    like71 = Like.create(user_id: user16.id, chat_id: chat28.id)
    like72 = Like.create(user_id: user16.id, chat_id: chat25.id)
    like73 = Like.create(user_id: user16.id, chat_id: chat18.id)
    like74 = Like.create(user_id: user16.id, chat_id: chat19.id)
    like75 = Like.create(user_id: user16.id, chat_id: chat4.id)
    like76 = Like.create(user_id: user16.id, chat_id: chat5.id)
    like77 = Like.create(user_id: user16.id, chat_id: chat6.id)
    like78 = Like.create(user_id: user16.id, chat_id: chat27.id)
    like79 = Like.create(user_id: user16.id, chat_id: chat7.id)
    like80 = Like.create(user_id: user16.id, chat_id: chat11.id)

    
