import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  // Aqui você poderia integrar com serviço como SendGrid, Nodemailer, etc.
  console.log('Mensagem recebida:', { name, email, message });

  return NextResponse.json({ success: true });
}
