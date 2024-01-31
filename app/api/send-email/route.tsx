import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST() {
  await resend.emails.send({
    from: "aDD Domain TO Resend and add email here ",
    to: "nandakrgurung123@gmail.com",
    subject: "test",
    react: <WelcomeTemplate name="Nanda" />,
  });
  return NextResponse.json({});
}
