import axios from "axios";
import { LLMProvider, ChatMessage } from "../../types";
import { config } from "../../config/env";
import { llmConfig } from "../../config/llm";

export class OpenRouterService implements LLMProvider {
  private readonly apiKey = config.openrouterApiKey;
  private readonly apiUrl = "https://openrouter.ai/api/v1/chat/completions";

  async chat(message: string, history: ChatMessage[]): Promise<string> {
    if (!this.apiKey) {
      throw new Error("OpenRouter API key is not configured");
    }

    const response = await axios.post(
      this.apiUrl,
      {
        model: llmConfig.model,
        messages: [
          { role: "system", content: llmConfig.systemPrompt },
          ...history,
          { role: "user", content: message },
        ],
        temperature: llmConfig.temperature,
        max_tokens: llmConfig.maxTokens,
      },
      {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://linuxcv.dev",
          "X-Title": "linuxCV",
        },
      }
    );

    return response.data.choices?.[0]?.message?.content || "No response from AI.";
  }
}
