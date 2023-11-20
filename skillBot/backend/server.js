const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
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
    // const output = await replicate.run(
    //     "meta/llama-2-7b-chat:13c3cdee13ee059ab779f0291d29054dab00a47dad8261375654de5540165fb0",
    //     {
    //         input: {
    //             top_p: 1,
    //             prompt: `${message} \nAssistant:`,
    //             max_length: 30,
    //             temperature: 0.5,
    //             repetition_penalty: 1
    //         }
    //     }
    // );
    const dummy = [
        'Of', ' course', ',', ' I', "'",
        'd', ' be', ' happy', ' to', ' help',
        ' you', ' with', ' career', ' guidance', '!',
        ' Can', ' you', ' tell', ' me', ' a',
        ' bit', ' more', ' about', ' what', ' you',
        "'", 're', ' looking', ' for', '?',
        ' What', ' are', ' your', ' interests', ',',
        ' values', ',', ' and', ' goals', '?',
        ' What', ' kind', ' of', ' career', ' are',
        ' you', ' hoping', ' to', ' purs', 'ue',
        '?', ' Any', ' specific', ' industry', ' or',
        ' job', ' function', ' you', "'", 're',
        ' interested', ' in', '?', ' The', ' more',
        ' information', ' you', ' can', ' provide', ',',
        ' the', ' better', ' I', ' can', ' tail',
        'or', ' my', ' advice', ' to', ' your',
        ' needs', '.', ''
    ];
    // console.log(output);
    res.send(dummy);
});

app.post('/api/resume', resumeController.resumeBuilder);
app.get('/api/resume/get/:email', resumeController.getResume);

// POST route for PDF generation....
app.post("/api/resume/create-pdf", resumeController.generatePDF,(req, res) => {
    pdf.create(pdfTemplate(req.body), options).toFile("Resume.pdf", (err) => {
      if (err) {
        console.log(err);
        res.send(Promise.reject());
      } else res.send(Promise.resolve());
    });
  });

  // GET route -> send generated PDF to client...
app.get("/api/resume/fetch-pdf", resumeController.getGeneratePDF, (req, res) => {
    const file = `${__dirname}/Resume.pdf`;
    res.download(file);
  });

app.listen(PORT, () => { `Server is running on port ${PORT}` })


