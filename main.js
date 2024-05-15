document.getElementById('quoteBtn').addEventListener('click', function() {
    const quotes = [
        "Life is what happens when you're busy making other plans. – John Lennon",
        "Get busy living or get busy dying. – Stephen King",
        "You only live once, but if you do it right, once is enough. – Mae West",
        "Many of life’s failures are people who did not realize how close they were to success when they gave up. – Thomas A. Edison",
        "If you want to live a happy life, tie it to a goal, not to people or things. – Albert Einstein"
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
});
