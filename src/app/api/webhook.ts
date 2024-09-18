// pages/api/webhook.ts

import type { NextApiRequest, NextApiResponse } from "next";

export default async function webhookHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // 1. Verify the HTTP method is POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    // 2. Extract the data from the webhook request
    const event = req.body;

    // Example: Log the event for debugging
    console.log("Sanity Webhook Event:", event);

    // 3. Revalidate the posts page (adjust the path to match your app)
    await res.revalidate("/posts");

    // Optionally, you can also revalidate other related pages
    // await res.revalidate(`/post/${event.slug.current}`);

    // 4. Send a success response back to Sanity
    res.status(200).json({ message: "Webhook received and revalidation triggered" });
  } catch (error) {
    // Handle any errors
    console.error("Error processing webhook:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
