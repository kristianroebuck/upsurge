import express from 'express';
import bodyParser from 'body-parser';
import {
  computeS3SignatureV2,
  computeS3SignatureV4
} from './s3';


const app = express();
const jsonParser = bodyParser.json();

app.post('/sign-auth-v2', jsonParser, (req, res) => {
  const stringToSign = req.body.stringToSign;

  if (!stringToSign) {
    res.status(400).send('Did not recieve a string to sign');
  } else {
    res.send(computeS3SignatureV2(stringToSign));
  }
});

app.post('/sign-auth-v4', jsonParser, (req, res) => {
  const stringToSign = req.body.stringToSign;

  if (!stringToSign) {
    res.status(400).send('Did not recieve a string to sign');
  } else {
    res.set({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*'
    }).send(computeS3SignatureV4(stringToSign));
  }
});


export default app;
