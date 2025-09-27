import { createFileRoute } from "@tanstack/react-router";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "mock/videos.json");

function loadVideos() {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function saveVideos(videos: any) {
  fs.writeFileSync(filePath, JSON.stringify(videos, null, 2));
}

export const Route = createFileRoute("/api/videos")({
  server: {
    handlers: {
      GET: () => {
        return Response.json(loadVideos());
      },
      POST: async ({ request }) => {
        const body = await request.json();
        const videos = loadVideos();
        videos.push(body); // mutate
        saveVideos(videos);
        return Response.json({ success: true, videos });
      },
    },
  },
});
