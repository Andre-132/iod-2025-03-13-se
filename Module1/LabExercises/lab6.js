const book = {
    title: "The Beginning of Infinity",
    description: "Explores the power of explanations to transform the world",
    author: "David Deutsch",
    pages: "487",
};

console.log("Title", book.title);
console.log("Description", book.description);
console.log("Author", book.author);
console.log("Pages", book.pages);

console.log("Book Object", book);

book.description = "An insightful novel of science and the universe.";
console.log("Updated Description:", book.description);
