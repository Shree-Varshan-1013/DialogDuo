const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 2018;

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.post('/api', async (req, res) => {
    const {message} = req.body;
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
        'Of',           ' course',   ',',         ' I',         "'",
        'd',            ' be',       ' happy',    ' to',        ' help',
        ' you',         ' with',     ' career',   ' guidance',  '!',
        ' Can',         ' you',      ' tell',     ' me',        ' a',
        ' bit',         ' more',     ' about',    ' what',      ' you',
        "'",            're',        ' looking',  ' for',       '?',
        ' What',        ' are',      ' your',     ' interests', ',',
        ' values',      ',',         ' and',      ' goals',     '?',
        ' What',        ' kind',     ' of',       ' career',    ' are',
        ' you',         ' hoping',   ' to',       ' purs',      'ue',
        '?',            ' Any',      ' specific', ' industry',  ' or',
        ' job',         ' function', ' you',      "'",          're',
        ' interested',  ' in',       '?',         ' The',       ' more',
        ' information', ' you',      ' can',      ' provide',   ',',
        ' the',         ' better',   ' I',        ' can',       ' tail',
        'or',           ' my',       ' advice',   ' to',        ' your',
        ' needs',       '.',         ''
      ];
    // console.log(output);
    res.send(dummy);
});

app.listen(PORT, () => { `Server is running on port ${PORT}` })


