import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ProductStatus = "Released" | "Coming Soon" | "Beta" | "In Development";

export interface Product {
  id: number;
  name: string;
  description: string;
  status: ProductStatus;
  icon: string;
  color: string;
  learnMoreUrl: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "PrivacyGuard",
    description: "Advanced encryption and privacy tools to protect your sensitive data across devices. Features include secure notes, password management, and file encryption.",
    status: "Released",
    icon: "shield-alt",
    color: "from-primary to-blue-400",
    learnMoreUrl: "#",
  },
  {
    id: 2,
    name: "FocusTime",
    description: "A minimalist productivity app that helps you stay focused and manage your time effectively, without tracking your behavior or selling your data.",
    status: "Released",
    icon: "calendar-check",
    color: "from-purple-500 to-pink-500",
    learnMoreUrl: "#",
  },
  {
    id: 3,
    name: "SecureChat",
    description: "End-to-end encrypted messaging platform that keeps your conversations private. No data mining, no ads, just secure communication.",
    status: "Coming Soon",
    icon: "comments",
    color: "from-amber-500 to-orange-500",
    learnMoreUrl: "#",
  },
  {
    id: 4,
    name: "HealthSync",
    description: "Health and wellness tracker that keeps your sensitive health data on your device. Integrates with Apple Health while maintaining your privacy.",
    status: "Beta",
    icon: "heart",
    color: "from-green-500 to-teal-500",
    learnMoreUrl: "#",
  },
  {
    id: 5,
    name: "PrivateNotes",
    description: "A secure note-taking app with encrypted sync across your devices. Features markdown support and organizational tools.",
    status: "Released",
    icon: "file-alt",
    color: "from-rose-500 to-red-500",
    learnMoreUrl: "#",
  },
  {
    id: 6,
    name: "PrivateBrowser",
    description: "A privacy-focused web browser that blocks trackers, prevents fingerprinting, and keeps your browsing history private.",
    status: "In Development",
    icon: "globe",
    color: "from-indigo-500 to-purple-500",
    learnMoreUrl: "#",
  },
];

export const getStatusColor = (status: ProductStatus): string => {
  switch (status) {
    case "Released":
      return "bg-green-100 text-green-800";
    case "Coming Soon":
      return "bg-blue-100 text-blue-800";
    case "Beta":
      return "bg-yellow-100 text-yellow-800";
    case "In Development":
      return "bg-blue-100 text-blue-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};
