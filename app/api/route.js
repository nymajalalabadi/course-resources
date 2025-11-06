export async function GET(request) {
    return new Response('Hello!');
}

export async function POST(request) {
    const body = await request.json();
    return new Response(JSON.stringify(body));
}

