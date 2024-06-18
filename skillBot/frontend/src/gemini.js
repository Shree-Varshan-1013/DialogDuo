/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = "AIzaSyC1229AQkFKQxdeiDBLvAZQdTFLs-m94uY";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

export default async function run(queries) {
    const chatSession = model.startChat({
        generationConfig,
        // safetySettings: Adjust safety settings
        // See https://ai.google.dev/gemini-api/docs/safety-settings
        history: [
            {
                role: "user",
                parts: [
                    { text: "helo" },
                ],
            },
            {
                role: "model",
                parts: [
                    { text: "Hello! What can I do for you today? \n" },
                ],
            },
            {
                role: "user",
                parts: [
                    { text: "nothing\n" },
                ],
            },
            {
                role: "model",
                parts: [
                    { text: "Okay" },
                ],
            },
        ],
    });

    const result = await chatSession.sendMessage(queries);
    console.log(result.response.text());
}
