# Evaluate a News Article with Natural Language Processing

## Project Description
This project provides a web-based interface that allows users to evaluate and analyze articles or blog posts using Natural Language Processing (NLP) techniques. The application determines the content's subjectivity and sentiment, providing insights into the tone and nature of the text.

---

## Features
- Input a URL to an article or blog.
- Analyze the article for sentiment (positive, negative, or neutral).
- Determine the subjectivity of the content.
- Display detailed analysis results including agreement, confidence, and more.

---

## How to Run
### Prerequisites
- Ensure you have **Node.js** and **npm** installed.

### Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/BaselTurkman/NLP-Project](https://github.com/BaselTurkman/Evaluate-a-News-Article-with-Natural-Language-Processing.git
   ```
2. Navigate to the project directory:
   ```bash
   cd NLP-Project
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run build-dev
   ```
5. Build the project for production:
   ```bash
   npm run build-prod
   ```
6. Start the server:
   ```bash
   npm start
   ```
7. Open your browser and navigate to `http://localhost:8080` to use the application.

---

## Dependencies
- **Node.js**
- **Express**
- **Webpack**
- **Aylien Text API**
- **Babel**
- **Sass**
- **Jest**

---

## Development Tools and Technologies
- **Webpack**: Module bundler used for compiling and packaging assets.
- **Babel**: JavaScript compiler to use modern JavaScript features.
- **Sass**: CSS preprocessor for styling.
- **Jest**: JavaScript testing framework.

---

## API Usage
This project uses the **Aylien API** to perform sentiment analysis and NLP operations.
Make sure to:
1. Obtain an API key from [Aylien](https://aylien.com/).
2. Create a `.env` file in the root directory and add the following:
   ```
   AYLIEN_API_KEY=your_api_key
   AYLIEN_APP_ID=your_app_id
   ```
3. Replace `your_api_key` and `your_app_id` with your actual credentials.

---

## Testing
To run tests, use the following command:
```bash
npm test
```
This project uses Jest for unit testing.

---

## License
This project is licensed under the MIT License.

---

## Contributing
Feel free to fork the repository and submit pull requests to contribute to the project.

---

## Author
Basel Turkman

---

## Acknowledgments
Special thanks to Spark, Palestine Launchpad, and Udacity for their support in AI and web development.

