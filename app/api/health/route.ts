export const dynamic = "force-dynamic";

export function GET() {
  return Response.json(
    { status: "healthy", service: "tivix-technologies-site" },
    { headers: { "Cache-Control": "no-store" } },
  );
}
