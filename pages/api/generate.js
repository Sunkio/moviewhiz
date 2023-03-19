import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = "Suggest a movie for movie night and where to watch it based on the following prompt: \n";
const generateAction = async (req, res) => {
  try {
    const firstMessage = {
      role: "user",
      content: `${basePromptPrefix}${req.body.userInput}`,
    };

    const baseCompletion = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: [firstMessage],
      temperature: 0.8,
    });

    const basePromptOutput = baseCompletion.data.choices[0].message.content;

    const secondMessage = {
      role: "user",
      content: `Take the movie suggestion below and without any spoilers, explain what this movie is about and who the main actors are. Make 
      it sound interesting so that we would actually like to watch the movie.
       Movie suggestion: ${basePromptOutput}
       Start your answer following the following format:
       [movie title] ([year of release]) - available on [streaming service] for [rent and/or buy or streaming]
       Then, after adding two line breaks, the movie description including actors.
       Make sure to add the two line breaks between the movie title and the description. Do not add any punctuation at the end of the first line. And do not add any spoilers!`,
    };

    const secondPromptCompletion = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: [firstMessage, secondMessage],
      temperature: 0.85,
    });

    const secondPromptOutput = secondPromptCompletion.data.choices[0].message.content;

    res.status(200).json({ output: secondPromptOutput });
  } catch (error) {
    console.error("Error in generateAction:", error);
    res.status(500).json({ error: error.message });
  }
};

export default generateAction;