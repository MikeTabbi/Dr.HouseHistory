import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);
const FROM = "House Legacy Group <noreply@houselegacygroup.com>";

export async function sendWelcomeEmail(to: string, name: string) {
  return resend.emails.send({
    from: FROM,
    to,
    subject: "Welcome to House Legacy Group",
    html: `<p>Hi ${name}, thanks for registering. Please verify your email to continue.</p>`,
  });
}

export async function sendSubmissionConfirmation(to: string, name: string) {
  return resend.emails.send({
    from: FROM,
    to,
    subject: "Application Received — NDA Coming Next",
    html: `<p>Hi ${name}, we received your application. Check your email shortly to sign your NDA.</p>`,
  });
}

export async function sendNdaLink(to: string, name: string, ndaLink: string) {
  return resend.emails.send({
    from: FROM,
    to,
    subject: "Action Required: Sign Your NDA",
    html: `<p>Hi ${name}, please <a href="${ndaLink}">click here to review and sign your NDA</a>.</p>`,
  });
}

export async function sendNdaConfirmation(to: string, name: string) {
  return resend.emails.send({
    from: FROM,
    to,
    subject: "NDA Signed — Application Under Review",
    html: `<p>Hi ${name}, your NDA has been signed. We will review your application and be in touch soon.</p>`,
  });
}

export async function sendStatusUpdate(
  to: string,
  name: string,
  status: "approved" | "rejected"
) {
  const subject =
    status === "approved"
      ? "You've Been Approved — Next Steps"
      : "Application Update from House Legacy Group";

  const html =
    status === "approved"
      ? `<p>Hi ${name}, congratulations! You have been approved. We will reach out with next steps.</p>`
      : `<p>Hi ${name}, thank you for applying. At this time we are unable to move forward, but we appreciate your interest.</p>`;

  return resend.emails.send({ from: FROM, to, subject, html });
}

export async function sendTaskAssigned(to: string, name: string) {
  return resend.emails.send({
    from: FROM,
    to,
    subject: "New Task Assigned",
    html: `<p>Hi ${name}, you have been assigned a new task. Log in to your dashboard to view it.</p>`,
  });
}
