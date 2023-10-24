import WelcomTemplate from "@/emails/WelcomTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    await resend.emails.send({
        from : 'p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDhOF5YtCGCsZ2HEyjvMUHWnqZBoS8CC+z91VZEj150LUpqIC4m7UhbaFBRixi/k7mrd6T/0l/ZaIko3Vh1qC4z1eCKogr/keCh26bANoGLUajQFTLli7SvbtkUKpyWAGRD6q47yj0Z/XkUp6RnYerWvdRznZnw54rdLbyDbwhn2wIDAQAB',
        to: 'm.reza.alirad75@gmail.com',
        subject: 'shetopsky',
        react: <WelcomTemplate name="Mohammadreza" />
    });

    return NextResponse.json({});
}