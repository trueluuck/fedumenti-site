// FILE: scripts/compress-hero.mjs
import ffmpegPath from "ffmpeg-static";
import ffmpeg from "fluent-ffmpeg";
import path from "path";
import fs from "fs";

const INPUT = path.join(process.cwd(), "public", "assets", "hero-video.mp4");
const OUTPUT = path.join(process.cwd(), "public", "assets", "hero-video-720.mp4");

if (!fs.existsSync(INPUT)) {
  console.error("Input not found:", INPUT);
  process.exit(1);
}

ffmpeg()
  .setFfmpegPath(ffmpegPath)
  .input(INPUT)
  .outputOptions(["-vcodec libx264", "-crf 28", "-preset medium", "-acodec aac", "-b:a 96k"])
  .on("start", (cmd) => console.log("ffmpeg start:", cmd))
  .on("progress", (p) => {
    if (p.percent) process.stdout.write(`\r${Math.round(p.percent)}%`);
  })
  .on("error", (err) => {
    console.error("\nffmpeg error:", err);
    process.exit(1);
  })
  .on("end", () => {
    console.log("\nffmpeg finished:", OUTPUT);
  })
  .save(OUTPUT);
