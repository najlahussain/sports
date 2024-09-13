import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

import { FormData } from '@/app/constants';

export async function POST(request: NextRequest) {
  
  const data:FormData = await request.json();
  const mess = ''
  const transport = nodemailer.createTransport({
    host: "smtppro.zoho.com",
    port: 587,
    secure: false,
    
    auth: {
      user: 'marketing.spr@joyland.com.pk',
      pass: 'Rainbow@786#',
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `${data.title}`,
    text: `Message from {${data.name}} (${data.phone}) (${data.email}): \n\n${data.events != undefined ? data.events : (data.message != undefined ? data.message : "")} \n${data.address}`,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        // console.log(err)
        if (!err) {
          resolve('Email sent');
        } else {
         // console.log(err.message)
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}