import { Agent } from '@mastra/core/agent';
import { createOpenAI } from '@ai-sdk/openai';

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL,
} as any);

export const beachDayAgent = new Agent({
  id: 'beach-day-agent',
  name: 'Beach Day Agent',
  instructions: `
    You help someone plan the perfect beach day.
    
    Be practical. If important details are missing, ask a question instead of guessing.
    Don't claim you checked live conditions of waves, crowds, or weather.
    
    If you can't verify something, give honest guidance based on general patterns.
    
    Keep replies under 5 sentences.
  `,
  model: openai(process.env.OPENAI_MODEL || 'qwen3.6-35b-a3b-instruct'),
});










