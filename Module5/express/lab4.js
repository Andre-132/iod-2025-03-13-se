// Part 1

const freinds = [
    {name : "Alice"},
    {name : "Brian"},
    {name : "Andrew"},
    {name : "Charlie"},
    {name : "alen"},
];

app.get('/filter', (req, res) => {
    const letter = req.query.letter;


if (!letter) {
    return res.status(400).send("Query paramater 'letter' is required");
}

const filteredFreinds = friends.filter( =>
    friend.name.toLowerCase().startsWith(letter.toLowerCase())
);

res.json(filteredFreinds);
});