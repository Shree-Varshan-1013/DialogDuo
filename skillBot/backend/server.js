const express = require('express');
const PORT = process.env.PORT || 2018;
const Replicate = require("replicate");

const app = express();

app.use(express.json());

const replicate = new Replicate({
    auth: "r8_BKNtsbMFJVy7iRYQtYAoWqLyauFVUF50eUM38",
});

const main = async() => {
    const output = await replicate.run(
        "meta/llama-2-70b-chat:e951f18578850b652510200860fc4ea62b3b16fac280f83ff32282f87bbd2e48",
        {
            input: {
                top_p: 1,
                prompt: "User: How are you.\nAssistant:",
                max_length: 50,
                temperature: 0.5,
                repetition_penalty: 1
            }
        }
    );
    console.log(output);
}

main();

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(PORT, () => { `Server is running on port ${PORT}` })


