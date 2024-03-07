import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
// import { default as OpenAIApi } from "openai";

import OpenAI from "openai";

import { checkApiLimit, incrementApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const configuration = {
  apiKey: process.env.OPENAI_API_KEY,
  Languages: "pt-br",
};

const openai = new OpenAI(configuration);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = "512x512" } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse("OpenAI API Key not configured.", {
        status: 500,
      });
    }

    if (!prompt) {
      return new NextResponse("Prompt are required", { status: 400 });
    }

    if (!amount) {
      return new NextResponse("Amount are required", { status: 400 });
    }

    if (!resolution) {
      return new NextResponse("Resolution are required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse(
        "Free trial has expired. Please upgrade to pro.",
        { status: 403 }
      );
    }

    const response = await openai.images.generate({
      // model: "dall-e-3",
      prompt,
      n: parseInt(amount, 10),
      size: resolution,
    });

    if (!isPro) {
      await incrementApiLimit();
    }

    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.log("[IMAGE_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
