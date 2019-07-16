// Your task is to write a function named JournalEntry which should define three parameters.

// The title of the journal entry
// The content of the journal entry
// The author of the journal entry

// The JournalEntry function should use those three parameters and return a template string that contains the following HTML structure if the following values are sent as arguments -

// "I made a function today" as the title.
// "It makes a component as a template string" as the content.
// "Melanie Baker" as the author

    // < article class="entry" >
        // <header>
            // <h2>I made a function today</h2>
        // </header>
        // <section>It makes a component as a template string</section>
        // <footer>
            // <time>Written by Melanie Baker</time>
        // </footer>
// </article >

const createJournalEntry = (title, topic, author) => {
    return `<article class="entry">
    <header>
        <h2>${title}</h2>
    </header>
    <section>${topic}</section>
    <footer>
        <time>Written by ${author}</time>
    </footer>
</article>`;
}; 

const title1 = "I made a function today";
const topic1 = "It makes a component as a template string";
const author1 = "Melanie Baker";

// console.log(createJournalEntry(title1, topic1, author1));