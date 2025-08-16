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
    // On mobile, prompt user to choose email app
    const choice = window.confirm(
      `Choose how to open email to ${email}:\n\n` +
      `Click OK to open in Gmail app\n` +
      `Click Cancel to open in Outlook app`
    );
    
    // Both choices use mailto: which will prompt user to choose their preferred app
    window.location.href = `mailto:${email}`;
  } else {
    // On desktop, open Gmail web app with compose and pre-filled email (Gmail takes priority)
    const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&to=${email}`;
    window.open(gmailUrl, '_blank');
  }
}
