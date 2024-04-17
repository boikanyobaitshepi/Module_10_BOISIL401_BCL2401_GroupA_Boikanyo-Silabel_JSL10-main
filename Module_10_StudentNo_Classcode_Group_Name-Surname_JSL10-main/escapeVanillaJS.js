document.addEventListener("DOMContentLoaded", () => {
    // Attach an event listener to the 'solveRoom1' button
    document.getElementById("solveRoom1").addEventListener("click", () => {
        //fetch data from the "books.json" file
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                //find the most recent book
                const mostRecentBook = findMostRecentBook(books);
                // Display the title of the most recent book
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });
   // Attach an event listener to the 'solveRoom2' button
    document.getElementById("solveRoom2").addEventListener("click", () => {
        //Create a set of Javascript concepts
        const jsConcepts = new Set(['closure', 'scope', 'hoisting', 'async']);
        // Create a set of React concepts
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
        // find the intersection of the two sets
        const commonConcepts = findIntersection(jsConcepts, reactConcepts);
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });

    // Attach the event listener to the "solveroom3" button
    document.getElementById("solveRoom3").addEventListener("click", () => {
        //fetch data from the "directions.json" file
        fetch('directions.json') 
            .then(response => response.json())
            .then(directions => {
                //navigate the labyrinth
                return navigateLabyrinth(directions);
            })
                    .then(message => {
                        // Display the congratulatory message
                        document.getElementById("room3Result").textContent = message;
                    });
            });
    });
// find the most recent book
function findMostRecentBook(books) {
    // Return the most recent published date
    return books.reduce((mostRecent, book) => (new Date(book.published) > new Date(mostRecent.published)) ? book : mostRecent);
}
// find the intersection of two sets
function findIntersection(setA, setB) {
    // Return a new set containing the intersection of setA and setB
    const intersection = new Set([...setA].filter(item => setB.has(item)));
    return intersection;
}

// Navigate the labyrinth
async function navigateLabyrinth(directions) {
    //iterate over each direction in the directions array
    for (let direction of directions) {
        // Wait for 1 second before moving to the next step
 
       await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Navigating: ${direction.step}`);
    }
    //Return the congratulatory message
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}
