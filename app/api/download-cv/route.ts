import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'Fajer-AlGhanim-Graphic-Design-CV.pdf');
    if (!fs.existsSync(filePath)) {
      return new NextResponse('CV file not found', { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Fajer-AlGhanim-Graphic-Design-CV.pdf"',
        'Content-Length': fileBuffer.length.toString(),
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('Error serving CV file:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
