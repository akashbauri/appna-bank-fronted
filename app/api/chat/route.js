export async function POST(req) {
  const { msg } = await req.json();

  return Response.json({
    reply: "AI says: " + msg
  });
}
