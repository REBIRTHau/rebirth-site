/** https://formspree.io/f/mzdqggol — override via NEXT_PUBLIC_FORMSPREE_FORM_ID if needed */
const DEFAULT_FORM_ID = "mzdqggol";

export function getFormspreeEndpoint() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID?.trim() || DEFAULT_FORM_ID;
  return `https://formspree.io/f/${formId}`;
}

export async function submitInquiry(payload) {
  const endpoint = getFormspreeEndpoint();

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      brand: payload.brand,
      links: payload.links || "",
      help: payload.help,
      budget: payload.budget,
      details: payload.details || "",
      _subject: `REBIRTH inquiry — ${payload.name}`,
      _replyto: payload.email,
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const fieldError = Array.isArray(data.errors) ? data.errors[0]?.message : undefined;
    const message =
      fieldError ||
      (typeof data.error === "string" ? data.error : null) ||
      "Something went wrong. Please try again or email us directly.";
    throw new Error(message);
  }

  return data;
}
