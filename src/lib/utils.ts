import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Function to handle email opening for both mobile and desktop
export function handleEmailClick(email: string) {
  // Detect if user is on mobile
  const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
    navigator.userAgent.toLowerCase()
  );

  if (isMobile) {
    // On mobile, use native mailto: which will show the system app picker
    window.location.href = `mailto:${email}`;
  } else {
    // On desktop, open Gmail web app with compose and pre-filled email (Gmail takes priority)
    const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&to=${email}`;
    window.open(gmailUrl, '_blank');
  }
}
