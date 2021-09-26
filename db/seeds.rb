# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


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

Chat.destroy_all

chat1 = Chat.create(
    body: "Imagine Tom playing 30 years in the league",
    author_id: user1.id,
    topic: "Sports"
)

chat2 = Chat.create(
    body: "The SpaceX flight taking four tourists on an extraterrestrial jaunt has also helped raise more than $130 million for children’s cancer research, and aims to bring in $200 million total.",
    author_id: user2.id,
    topic: "Finance"
)

chat3 = Chat.create(
    body: "Khabib Nurmagomedov turns 33 today.
    \n
    He once trained for a fight by swimming upstream in a freezing river",
    author_id: user1.id,
    topic: "Sports"
)

chat4 = Chat.create(
    body: "Birthday party in the endzone for Darren Waller
    \n
    Raiders and Ravens tied up at 24! ",
    author_id: user1.id,
    topic: "Sports"
)

chat5 = Chat.create(
    body: "Heading into the final, Djokovic, Federer and Nadal are all tied with 20 major titles, the most in men's singles history
    \n
    If Djokovic claims his 21st major championship, where would he fall in the GOAT conversation?",
    author_id: user1.id,
    topic: "Sports"
)

chat6 = Chat.create(
    body: "The College Football Show is here for Week 2 American football
    \n
    @jasonfitz and @HDouglas83 recap the early Saturday action, including No. 12 Oregon's win over No. 3 Ohio State, and get you ready for tonight's primetime showdown between Washington and Michigan.",
    author_id: user1.id,
    topic: "Sports"
)

chat7 = Chat.create(
    body: "Money-market funds and other financial firms can now park up to $160 billion overnight each at the Federal Reserve Bank in New York’s reverse repurchase program, double what was allowed under the earlier cap.",
    author_id: user2.id,
    topic: "Finance"
)

chat8 = Chat.create(
    body: "Behind bond market’s muted response to Federal Reserve’s rate outlook may be a message for policy makers",
    author_id: user2.id,
    topic: "Finance"
)

chat9 = Chat.create(
    body: "Exxon Mobil, Chevron and ConocoPhillips are among companies failing to report all their tax payments despite being members of the Extractive Industries Transparency Initiative, the global anti-corruption body said Wednesday",
    author_id: user3.id,
    topic: "Finance"
)

chat10 = Chat.create(
    body: "Brazil’s central bank raises its benchmark interest rate by a full percentage point for a second straight meeting in an effort to control inflation that’s soaring toward double digits.",
    author_id: user3.id,
    topic: "Finance"
)

chat11 = Chat.create(
    body: "Evergrande’s debt crisis has forced a too-big-to-fail moment. What does it mean for China and the rest of the global economy? 
    \n
    Read the Big Take",
    author_id: user3.id,
    topic: "Finance"
)




Like.destroy_all

like1 = Like.create(
    user_id: demouser.id,
    chat_id: chat2.id
)

like2 = Like.create(
    user_id: demouser.id,
    chat_id: chat5.id
)

like3 = Like.create(
    user_id: user1.id,
    chat_id: chat9.id
)