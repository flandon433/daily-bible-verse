document.addEventListener('DOMContentLoaded', () => {
    const verseElement = document.getElementById('verse');
    const dateElement = document.getElementById('date');

    const verses = [
        "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope. - Jeremiah 29:11",
        "I can do all things through him who strengthens me. - Philippians 4:13",
        "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law. - Galatians 5:22-23",
        // Add more verses here...
    ];

    function getRandomVerse() {
        const index = Math.floor(Math.random() * verses.length);
        return verses[index];
    }

    function getCurrentDate() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return now.toLocaleDateString(undefined, options);
    }

    verseElement.textContent = getRandomVerse();
    dateElement.textContent = getCurrentDate();
});
