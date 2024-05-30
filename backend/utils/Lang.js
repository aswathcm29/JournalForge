const Groq = require("groq-sdk");

const groq = new Groq({
    apiKey: "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"
});

async function main(data, prompt) {
    const chatCompletion = await getGroqChatCompletion(data, prompt);
    return chatCompletion.choices[0]?.message?.content || "";
}

async function getGroqChatCompletion(data, prompt) {
    return groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: `${data} ${prompt}`
            }
        ],
        model: "llama3-8b-8192"
    });
}

module.exports = {
    main,
    getGroqChatCompletion
};
