import axios from "axios";
export const askAi = async (messages) => {
  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-4o-mini",
        messages,
        temperature: 0
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const raw = response?.data?.choices?.[0]?.message?.content;

    const content = Array.isArray(raw)
      ? raw.map((p) => p?.text || "").join("")
      : raw;

    if (!content || !String(content).trim()) {
      throw new Error("AI returned empty response");
    }

    return String(content).trim();
  } catch (error) {
    const details = error?.response?.data || error?.message;
    console.error("OpenRouter Error:", details);
    throw new Error(
      typeof details === "string" ? details : JSON.stringify(details)
    );
  }
};