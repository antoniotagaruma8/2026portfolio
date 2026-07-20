import { groq } from "@ai-sdk/groq";
import { streamText, convertToModelMessages } from "ai";

import { cvData } from "@/lib/cv-data";
import { archiveData } from "@/lib/archive-data";

const SYSTEM_PROMPT = `
You are Paco, the AI Assistant for Antonio Tagaruma Garcia's 2026 Developer Portfolio.
Your goal is to answer questions about Antonio's experience, skills, and background.
Be concise, professional, friendly, and act as Antonio's advocate. Answer in 1-3 sentences.
If asked about Antonio's skills or portfolio quality, highlight specific projects, technical achievements, and real-world impact rather than giving arbitrary numerical ratings. Let the work speak for itself.
If asked if Antonio can be hired for a role not explicitly in his CV (like a Hotel Manager, Project Manager, etc.), DO NOT say "no". Instead, pivot positively by collecting and highlighting his relevant transferable skills (e.g., leadership, organization, bilingual abilities, tech-savvy management, and problem-solving) and pitch him as highly adaptable and capable for the role.
Antonio's Information (Extracted directly from his portfolio database):
CV & Experience:
${JSON.stringify(cvData.en)}

Archive & Projects:
${JSON.stringify(archiveData.en)}

- Why hire him?: He bridges the gap between education and technology. He builds tools that actually solve user problems because he has spent years observing how people learn and interact with systems in the classroom.
- Contact Info: Email him at antoniotagaruma8@gmail.com, or visit his GitHub at https://github.com/antoniotagaruma8
`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = Array.isArray(body) ? body : body.messages;

    if (!Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "Invalid messages format" }), { status: 400 });
    }

    // Make sure we have an API key, otherwise fallback gracefully
    if (!process.env.GROQ_API_KEY) {
      return new Response(JSON.stringify({ 
        error: "Oops! Antonio hasn't configured the Groq API key on this deployment yet." 
      }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }

    const result = await streamText({
      model: groq("llama-3.3-70b-versatile"),
      system: SYSTEM_PROMPT,
      messages: await convertToModelMessages(messages),
    });

    // toUIMessageStreamResponse replaces toDataStreamResponse in AI SDK v5+
    return result.toUIMessageStreamResponse ? result.toUIMessageStreamResponse() : result.toTextStreamResponse();
  } catch (error: any) {
    console.error("Chat API Error:", error);
    return new Response(JSON.stringify({ 
      error: error.message || "An unexpected error occurred." 
    }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
