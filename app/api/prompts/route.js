import Prompt from "@/models/prompt";
import { connectToDB } from "@/utils/database";

export const GET = async (req) => {
  try {
    await connectToDB();
    const allPrompts = await Prompt.find({}).populate("creator");
    return new Response(JSON.stringify(allPrompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch Prompts", { status: 500 });
  }
};
