import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const configuration = new Configuration({
  organization: "org-SUPl1gSLK3tF1F32a78Daixm",
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const app = express();
app.use(bodyParser.json());
app.use(cors());

// console.log(openai);
// app.get("/", async (req, res) => {
//   const completion = await openai.createChatCompletion({
//     model: "gpt-3.5-turbo",
//     messages: [{ role: "user", content: "Hello world" }],
//   });

//   res.json({ completion: completion.data.choices[0].message });
//   // console.log(completeion.data);
// });

app.post("/", async (req, res) => {
  const { message } = req.body;
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: `${message}` }],
  });

  res.json({ completion: completion.data.choices[0].message });
  // console.log(completeion.data);
});

const PORT = 9000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`App is listening in ${PORT}`);
});
