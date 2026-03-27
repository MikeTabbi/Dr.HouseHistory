const DOCUMENSO_API_URL = process.env.DOCUMENSO_API_URL!;
const DOCUMENSO_API_KEY = process.env.DOCUMENSO_API_KEY!;

interface SendNdaResult {
  documentId: string;
  signingUrl: string;
}

// ─────────────────────────────────────────────
// Send the NDA to an applicant via Documenso
// Returns the document ID and signing URL
// ─────────────────────────────────────────────
export async function sendNdaToApplicant(
  applicantName: string,
  applicantEmail: string
): Promise<SendNdaResult> {
  const response = await fetch(`${DOCUMENSO_API_URL}/api/v1/documents/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${DOCUMENSO_API_KEY}`,
    },
    body: JSON.stringify({
      title: "House Legacy Group — Subcontractor NDA",
      signers: [
        {
          name: applicantName,
          email: applicantEmail,
          role: "SIGNER",
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`Documenso error: ${response.statusText}`);
  }

  const data = await response.json();

  return {
    documentId: data.id,
    signingUrl: data.signingUrl,
  };
}

// ─────────────────────────────────────────────
// Verify a Documenso webhook signature
// Call this in the /api/nda/webhook route
// ─────────────────────────────────────────────
export function verifyWebhookSignature(
  payload: string,
  signature: string
): boolean {
  // Documenso sends an HMAC-SHA256 signature in the header
  // Implementation depends on your Documenso webhook secret
  // TODO: implement HMAC verification when webhook secret is configured
  return signature.length > 0 && payload.length > 0;
}
