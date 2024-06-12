import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from 'contact/components/email-template';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const { name, email, subject, message } = req.body;

    try {
        const { data, error } = await resend.emails.send({
            from: `Acme <onboarding@resend.dev>`, // `John <${email}>
            to: ['jhoncisneros11@gmail.com'],
            subject: subject,
            react: EmailTemplate({ message, name, email }) as React.ReactElement,
        });

        if (error) {
            res.status(500).json({ error });
        }

        console.log(data)

        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ error });
    }
}