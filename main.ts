import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

serve((_req) => {
  return new Response("<h1>Hello World!</h1> I'm NTLX@2f.co.ua<br>workflow_dispatch", {
    headers: { "content-type": "text/html" },
  });
});