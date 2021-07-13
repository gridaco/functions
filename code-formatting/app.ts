import express from "express";

//
import { format as format_yaml } from "./yaml-format";
import { format as format_typescript } from "./typescript-format";
import { format as format_javascript } from "./javascript-format";
import { format as format_dart } from "./dart-format";
import { format as format_html } from "./html-format";
const app = express();

app.use(express.json());

app.post("/format", (req, res) => {
  //
  const code = req.body["code"] || req.query["code"];
  const lang: string = req.body["lang"] || req.query["lang"];
  //

  if (!code || !lang) {
    return res.status(400).json({
      error: "both code and language option is required",
      code: code || "none",
      lang: lang || "none",
    });
  }

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

    case "html":
    case "HTML":
      formatted = format_html(code);
      break;
    default:
      return res.status(400).json({
        error: "can not recognize language",
        code: code,
        lang: lang,
      });
  }
  return res.json({
    lang: lang,
    code: formatted,
  });
});

app.get("/", (req, res, next) => {
  return res.json({
    message:
      "Code formatter service is running. request with POST on path '/format' - learn more about at https://github.com/gridaco/functions/tree/main/code-formatting",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

export default app;
