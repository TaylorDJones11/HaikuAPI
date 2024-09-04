const PORT = process.env.PORT || 8000;
const express = require('express');
const app = express();
const { OpenAI } = require('openai');
require('dotenv').config();

app.get('/', (req, res) => res.send('Welcome to my Haiku API'));

app.get('/haiku', async (req, res) => {
  const authHeaders = req.headers;

  if (authHeaders.secretkey !== process.env.SECRET_KEY) {
    res.json({ message: 'You are not authorized to make this request.' });
    return;
  }

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'system', content: 'Write a haiku.' }],
      model: 'gpt-3.5-turbo',
    });
    console.log(completion.choices[0].message.content);
    res.send(completion.choices[0].message.content);
  } catch (err) {
    console.error(err);
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
