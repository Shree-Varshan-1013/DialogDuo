const Replicate = require("replicate");

const replicate = new Replicate({
    auth: "r8_BKNtsbMFJVy7iRYQtYAoWqLyauFVUF50eUM38",
});

const model = "andreasjansson/blip-2:4b32258c42e9efd4288bb9910bc532a69727f9acd26aa08e175713a0a857a608";

const input = {
    image: "https://replicate.delivery/pbxt/IJEPmgAlL2zNBNDoRRKFegTEcxnlRhoQxlNjPHSZEy0pSIKn/gg_bridge.jpeg",
    question: "what body of water does this bridge cross?"
};
const output = await replicate.run(model, { input });

// Output:
// san francisco bay