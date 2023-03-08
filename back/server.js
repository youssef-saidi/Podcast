const express = require("express");
const app = express();
const port = 3000;
const { Configuration, OpenAIApi } = require("openai");

// load API_KEY from env
const OPENAI_API_KEY = "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";

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const sendMessage = async (message) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt:message,
    temperature: 0.9,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.6,
    stop: [" Human:", " AI:"],
  });

  return response.data;
};


app.get("/", (req, res) => {
  const { q } = req.query;

  sendMessage(q).then((value) => {
    res.send(value);
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
