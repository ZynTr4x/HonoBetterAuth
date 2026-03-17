import { Hono } from "hono";
import { auth } from "./auth.js"; 
import { serve } from "@hono/node-server";

const app = new Hono();
app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));
serve(app);

app.get("/", (c) => c.text("Hello World!"));

app.get("/api/hello", (c) => {
  const response: Hello = {
    ok: true,
    message: "Hello Hono!"
  } 
  return c.json(response);
})

app.get("/api/hello1", (c) => {
  const response: Hello = {
    ok: true,
    message: "Hello Hono!1"
  } 
  return c.json(response);
})


interface Hello {
  ok: boolean;
  message: string;
}