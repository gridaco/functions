import { format as format_yaml } from "./yaml-format";
import { format as format_typescript } from "./typescript-format";
import { format as format_javascript } from "./javascript-format";
import { format as format_dart } from "./dart-format";
import { format as format_html } from "./html-format";

import express from "express";
const app = express();

app.post("/format", (req, res, next) => {
  //
  const { code } = req.body;
  const { lang } = req.query;
  //
  console.log("lang:code", lang, code);
  let formatted: string;
  switch (lang) {
    case "DART":
    case "Dart":
    case "dart":
      formatted = format_dart(code);
      break;
    case "js":
    case "JS":
    case "JavaScript":
    case "javascript":
    case "JAVASCRIPT":
    case "flow":
    case "Flow":
    case "FLOW":
      formatted = format_javascript(code);
      break;

    case "ts":
    case "TS":
    case "tsx":
    case "TSX":
    case "TypeScript":
    case "typescript":
    case "TYPESCRIPT":
      formatted = format_typescript(code);
      break;

    default:
      return res.status(400).json({
        error: "can not recognize language",
        code: code,
      });
  }
  return res.status(200).json({
    lang: lang,
    code: formatted,
  });
});

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

export default app;
