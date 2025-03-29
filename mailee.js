const compliments = [
    "you're amazing just the way you are mailee :)",
    "your smile blooms like a beautiful flower <3",
    "your laugh is really cute in the calls (what is our today's topic? is it indians? LMAO)",
    "your eyes are so gorgeous ✨✨✨",
    "you have amazing heart and kind, always concerned about the smallest details to not hurt it",
    "i love talking with you mailee",
    "you're actually hardworking in impressive way (your standoffs are crazy 👀)",
    "your eyes color my whole world 💖",
    "you're really smart, love hearing you talking about planes (CRJ 200 is your favorite i think so thats the background)",
    "best pilot in secret ✨",
    "you have a really cute smile that i adore mailee, anything to draw that smile 🌹",
    "everything about you is perfect mailee :)",
    "never would ask wdyll because omg you're stunning 🥰",
    "it still makes me giggle when i think about how you make 'tsk' noise when i compliment you in call, its super cute",
    "you're quite brave and strong one for handling days alone without lauryn (IM SORRY FOR THE OTHER DAY I WAS TIRED)",
    "your 'jordan guy' is quite obsessed with you (made a whole tiny website for you hehe)",
    "you could easily change someone's world just with your smile mailee 💖",
    "i love your hair, it looks really adorable too",
    "never told you this one (idk if you will see this) but you actually gave me confidence to wear glasses, i thought i'd look bad but you never judged, thank you :)",
    "i'd genuinely do anything to make you happy and comfort you because you deserve all the love",
    "you're really talented like hello piano and baker? AND A PILOT TOO",
    "i'd never forget the first time we finished our first called, you were soooooo adorable asking if i still like you and didnt find you weird, quite adorable hehe :)",
    "patiently waiting for the day i see you so i can spoil you with everything",
    "you're really funny, i find myself laughing constantly when we talk about everything",
    "are you a microwave? because you make me go mmmmmmmmmm (lauryn would never know this one)",
    "physical threats (lauryn would never know this one too)",
    "you're actually creative in alot of ways, it makes me happy seeing you try recreating the drawings hehehe (saddam's hussein LMAO)",
    "*draws flower because you were sad about the crush*",
    "the most amazing woman in the world 💖",
    "i appreciate every bit of you, i guess i became the crazy you were scared to show 😭",
    "hopefully you will see this but ilysm mailee :)",
    "lauryn, this is for mailee, what are you doing here?! (cant actually know who's seeing this but just incase)",
    "100m$ as we agreed (still underpaid hehe)",
];
fetch("https://dog.ceo/api/breed/collie/images/random")
    .then(response => response.json())
    .then(data => {
        const elm = document.getElementById('collie');
        elm.src = data.message;
    })
document.getElementById("compliment").innerHTML = compliments[Math.floor(Math.random() * compliments.length)];
