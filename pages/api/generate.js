import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


// the following is a serverless backend function that calls the OpenAI API
const basePromptPrefix = "Suggest a movie for movie night and where to watch it based on the following prompt: \n";
const generateAction = async (req, res) => {
    // Run first prompt
    console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

    const baseCompletion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `${basePromptPrefix}${req.body.userInput}`,
        temperature: 0.8,
        max_tokens: 250,
    });

    const basePromptOutput = baseCompletion.data.choices.pop();

    // Run second prompt
    const secondPrompt = `Take the movie suggestion below and without any spoilers, explain what this movie is about and who the main actors are. Make 
        it sound interesting so that we would actually like to watch the movie.
         Movie suggestion: ${basePromptOutput.text}
         Start your answer following the following format:
         [movie title] ([year of release]) - available on [streaming service] for [rent and/or buy or streaming]
         Then, after adding two line breaks, the movie description including actors.
         Make sure to add the two line breaks between the movie title and the description. Do not add any punctuation at the end of the first line. And do not add any spoilers!`;

    const secondPromptCompletion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `${secondPrompt}`,
        temperature: 0.85,
        max_tokens: 1250,
    });

    const secondPromptOutput = secondPromptCompletion.data.choices.pop();

    res.status(200).json({ output: secondPromptOutput });
};

export default generateAction;
