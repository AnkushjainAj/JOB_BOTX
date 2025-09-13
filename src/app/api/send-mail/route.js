
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    // console.log("hffff")
    const { name, email, message } = await request.json();
    console.log(name, email, message)

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true, // or false for TLS/STARTTLS on port 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: "services.hirelyft@gmail.com",
      subject: `New message from ${name}`,
      text: `Email: ${email}\nName: ${name}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("sent")
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
