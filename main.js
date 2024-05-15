document.getElementById('quoteBtn').addEventListener('click', function() {
    const quotes = [
        "Life is what happens when you're busy making other plans\n John Lennon",
        "Get busy living or get busy dying. \n Stephen King",
        "You only live once, but if you do it right, once is enough. \n Mae West",
        "Many of life’s failures are people who did not realize how close they were to success when they gave up. \n Thomas A. Edison",
        "If you want to live a happy life, tie it to a goal, not to people or things. \n Albert Einstein"
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
});
