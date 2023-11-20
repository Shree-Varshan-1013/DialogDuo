const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const replicate = require('./config/replicateConfig');
const dbConnect = require('./config/mongoDBConfig');
const resumeController = require('./controller/resumeController');
const PORT = process.env.PORT || 2018;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

dbConnect();

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.post('/api', async (req, res) => {
    const { message } = req.body;
    const output = await replicate.run(
        "meta/llama-2-7b-chat:13c3cdee13ee059ab779f0291d29054dab00a47dad8261375654de5540165fb0",
        {
            input: {
                top_p: 1,
                prompt: `${message} \nAssistant:`,
                max_length: 30,
                temperature: 0.5,
                repetition_penalty: 1
            }
        }
    );
    // console.log(output);
    res.send(output);
});

app.post('/api/resume', resumeController.resumeBuilder);
app.get('/api/resume/get/:email', resumeController.getResume);

// POST route for PDF generation....
app.post("/api/resume/create-pdf", resumeController.generatePDF);

  // GET route for send generated PDF to client...
app.get("/api/resume/fetch-pdf", resumeController.getGeneratePDF);

app.listen(PORT, () => { `Server is running on port ${PORT}` })


