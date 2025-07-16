import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { jwtDecode } from "jwt-decode";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// You may need this for decoding JWT:

export async function getUser() {
  const res = await fetch("/api/cookie/token");
  if (!res.ok) return null;
  const data = await res.json();
  const token = data.value;

  // if (!token) return null;

  try {
    const user: {
      name: string;
      phone: string;
      email: string;
      role: string;
      avatar: string;
    } = jwtDecode(token);
    return user;
  } catch (error) {
    console.error("Invalid JWT token:", error);
    return null;
  }
}
