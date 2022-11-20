# Help Ed Sing | RU Hacks 2022

Our demo video: https://www.youtube.com/watch?v=eQPiTg5-8Uo

## 🎵 Inspiration
Are you an Ed Sheeran fan? Are you the type to pay a fortune to hear him sing songs by other artists or even your own songs? Do you want to flex to your friends that Ed Sheeran gave you a shoutout even though he practically didn't? Well, this is app is for you! We all are Ed Sheeran fans and thought this application would bring joy to all other fans across the globe!
## 🤔 What it does
Users can enter words or lyrics and make Ed Sheeran sing those words/lyrics. Users can also download the generated audio file and share it with their friends!

## 😍 How we built it
Our entire web application was built using React; we designed our frontend using Figma; our backend is mainly based on node.js We used Google Cloud's speech-to-text API to classify all the words in Ed Sheeran's songs. We then stored words in buckets on a CockroachDB cluster. In our backend, to process and concatenate words send in from the client-side/user, we used FFmpeg (since our audio files were in .wav and not .mp3). We used Twilio SendGrid to send the Ed Sheeran-generated audio file to other people's emails. 
![techstack](https://cdn.discordapp.com/attachments/989949757751427117/990425587149598730/unknown.png)
## 😢 Challenges we ran into
We ran into many challenges, one of them being Cloud's speech-to-text API not understanding Ed Sheeran's accent and classifying the wrong words. Another challenge we faced was with the timestamp function from google Cloud's speech-to-text API. For some reason, words were given timestamps of .01 seconds, which was so frustrating!!! But we pulled through by adding more conditional statements and slowing down the audio as well as editing the config variable to recognize en-GB, or in other words, British accents better. I guess this portrays the digital divide and bias Cloud's speech recognition API has towards people with accents different than the American accent. Come on Google :(
## 🙌 Accomplishments that we're proud of
We are so proud that we were able to build a working product, even with the time constraint, for judges to test out(link below).
## 😎 What we learned
We learned how to use the FFmpeg software, Cloud's text-to-speech API, CockroachDB, and Twilio SendGrid.
## 😉 What's next for Help Ed Sing
Something we really wanted to work on was the cohesion of sounds  and some more similarity word embeddings to make the output/generated audio of Ed singing more natural and smooth. Perhaps Ed will get a duo.... Maybe Adele, Harry Styles?

# Our Backend
Here is a link to our backend repo https://github.com/adityabilawar/RU-Hacks-BackEnd-2022
We build our backend using express.js, node.js, cockroachDB, GCP text-to-speech API, and GCP cloud storate for buckets.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
