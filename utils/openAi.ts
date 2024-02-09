import OpenAI from 'openai';
import 'dotenv/config'

const openai = new OpenAI({
  apiKey: "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", dangerouslyAllowBrowser: true 
});

export async function generateFaqs(cityName: string){
  
  const completion = await openai.completions.create({
    model: 'gpt-3.5-turbo-instruct',
    prompt: 'Write a tagline for an ice cream shop.'
});
console.log({completion})
  return completion;
}

