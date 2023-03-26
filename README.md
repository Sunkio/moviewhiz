# MovieWhiz

MovieWhiz is an AI-powered web application that provides movie recommendations based on user input. The app utilizes OpenAI to generate movie suggestions tailored to the user's specific preferences, making it an essential tool for movie lovers.

![MovieWhiz Preview](preview.png)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Support](#support)

## Features

- AI-powered movie recommendations
- Customizable prompts for personalized suggestions
- Simple and intuitive user interface
- Built with Next.js and OpenAI API

## Installation

To set up MovieWhiz on your local machine, follow these instructions:

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/Sunkio/moviewhiz.git
   ```

2. Move into the project directory:

   ```
   cd moviewhiz
   ```

3. Install the required packages:

   ```
   npm install
   ```

4. Create a `.env.local` file in the root directory to store your OpenAI API key:

   ```
   touch .env.local
   ```

5. Open the file with your preferred text editor and add the following line, replacing `your_api_key` with your actual OpenAI API key:

   ```
   OPENAI_API_KEY=your_api_key
   ```

6. Start the development server:

   ```
   npm run dev
   ```

7. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

Using MovieWhiz is simple and straightforward. Simply type your movie preferences into the prompt box, such as theme, genre, actors, or who you're watching with, and click the "Generate" button.

If you don't have any specific preferences, you can leave the prompt empty, and MovieWhiz will still provide a movie recommendation.

The AI will process your input and generate a movie recommendation tailored to your preferences. Your recommended movie will be displayed in the "Your Recommendation" section.

## Contributing

Contributions are welcome! If you would like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes to your branch.
4. Push your changes to your forked repository.
5. Create a pull request, describing your changes and what they accomplish.

Please ensure your code is clean and well-documented before submitting a pull request.

## Support

If you encounter any issues or have questions about MovieWhiz, please open an issue on the GitHub repository.

Happy movie hunting!