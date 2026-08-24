import fs from "fs";
import path from "path";
import { translate } from "google-translate-api-x";

// Target file path on your local machine
const inputFilePath =
  "E:/personal project/interview-question/jsLatestQuestion.md";
const outputFilePath =
  "E:/personal project/interview-question/jsLatestQuestion_bangla.md";

async function translateMarkdownFile() {
  if (!fs.existsSync(inputFilePath)) {
    console.error(`File not found at: ${inputFilePath}`);
    return;
  }

  const fileContent = fs.readFileSync(inputFilePath, "utf-8");

  // 1. Protect ASCII diagrams / code boxes (┌ ─ ┐ │ etc.)
  const diagrams = [];
  let protectedContent = fileContent.replace(/[┌┬┐├┼┤└┴┘│─]+/g, (match) => {
    diagrams.push(match);
    return `ZZZDIAGRAM${diagrams.length - 1}ZZZ`;
  });

  // 2. Protect multi-line code blocks (```javascript ... ```)
  const codeBlocks = [];
  protectedContent = protectedContent.replace(/```[\s\S]*?```/g, (match) => {
    codeBlocks.push(match);
    return `\n\nZZZCODEBLOCK${codeBlocks.length - 1}ZZZ\n\n`;
  });

  // 3. Protect inline code snippets (`code`)
  const inlineCodes = [];
  protectedContent = protectedContent.replace(/`[^`]+`/g, (match) => {
    inlineCodes.push(match);
    return ` ZZZINLINECODE${inlineCodes.length - 1}ZZZ `;
  });

  // Split file into paragraphs to preserve text structure
  const chunks = protectedContent.split(/\n\n+/);
  console.log(`Translating ${chunks.length} sections from ${inputFilePath}...`);

  let translatedChunks = [];

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i].trim();
    if (!chunk) continue;

    // Skip translation for placeholders to prevent corruption
    if (/^ZZZCODEBLOCK\d+ZZZ$/.test(chunk)) {
      translatedChunks.push(chunk);
      continue;
    }

    try {
      const res = await translate(chunk, { from: "en", to: "bn" });
      translatedChunks.push(res.text);
      console.log(`Progress: ${i + 1}/${chunks.length}`);
    } catch (err) {
      console.error(`Error translating section ${i + 1}:`, err.message);
      translatedChunks.push(chunk); // Fallback to original text on failure
    }

    // Delay to respect rate limits
    await new Promise((resolve) => setTimeout(resolve, 1200));
  }

  let finalContent = translatedChunks.join("\n\n");

  // Restore inline code snippets
  inlineCodes.forEach((code, idx) => {
    finalContent = finalContent.replace(
      new RegExp(`\\s*ZZZINLINECODE${idx}ZZZ\\s*`, "g"),
      ` ${code} `,
    );
  });

  // Restore multi-line code blocks
  codeBlocks.forEach((block, idx) => {
    finalContent = finalContent.replace(
      new RegExp(`\\s*ZZZCODEBLOCK${idx}ZZZ\\s*`, "g"),
      `\n\n${block}\n\n`,
    );
  });

  // Restore ASCII diagrams
  diagrams.forEach((diagram, idx) => {
    finalContent = finalContent.replace(
      new RegExp(`ZZZDIAGRAM${idx}ZZZ`, "g"),
      diagram,
    );
  });

  fs.writeFileSync(outputFilePath, finalContent, "utf-8");
  console.log(`Success! File saved to: ${outputFilePath}`);
}

translateMarkdownFile();
