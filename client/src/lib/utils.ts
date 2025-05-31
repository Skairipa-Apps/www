import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { CalendarCog, HeartHandshake, Hourglass, LucideIcon, Network, Pyramid, SmilePlus, UtilityPole, Wallet } from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ProductStatus = "Released" | "Coming Soon" | "Beta" | "In Development";

export interface Product {
  id: number;
  name: string;
  description: string;
  status: ProductStatus;
  icon: LucideIcon;
  color: string;
  learnMoreUrl: string;
}

export const products: Product[] = [
  // {
  //   id: 1,
  //   name: "PrivacyGuard",
  //   description: "Advanced encryption and privacy tools to protect your sensitive data across devices. Features include secure notes, password management, and file encryption.",
  //   status: "Released",
  //   icon: "shield-alt",
  //   color: "from-primary to-blue-400",
  //   learnMoreUrl: "#",
  // },
  // {
  //   id: 2,
  //   name: "FocusTime",
  //   description: "A minimalist productivity app that helps you stay focused and manage your time effectively, without tracking your behavior or selling your data.",
  //   status: "Released",
  //   icon: "calendar-check",
  //   color: "from-purple-500 to-pink-500",
  //   learnMoreUrl: "#",
  // },
  // {
  //   id: 3,
  //   name: "SecureChat",
  //   description: "End-to-end encrypted messaging platform that keeps your conversations private. No data mining, no ads, just secure communication.",
  //   status: "Coming Soon",
  //   icon: "comments",
  //   color: "from-amber-500 to-orange-500",
  //   learnMoreUrl: "#",
  // },
  // {
  //   id: 4,
  //   name: "HealthSync",
  //   description: "Health and wellness tracker that keeps your sensitive health data on your device. Integrates with Apple Health while maintaining your privacy.",
  //   status: "Beta",
  //   icon: "heart",
  //   color: "from-green-500 to-teal-500",
  //   learnMoreUrl: "#",
  // },
  // {
  //   id: 5,
  //   name: "PrivateNotes",
  //   description: "A secure note-taking app with encrypted sync across your devices. Features markdown support and organizational tools.",
  //   status: "Released",
  //   icon: "file-alt",
  //   color: "from-rose-500 to-red-500",
  //   learnMoreUrl: "#",
  // },
  // {
  //   id: 6,
  //   name: "PrivateBrowser",
  //   description: "A privacy-focused web browser that blocks trackers, prevents fingerprinting, and keeps your browsing history private.",
  //   status: "In Development",
  //   icon: "globe",
  //   color: "from-indigo-500 to-purple-500",
  //   learnMoreUrl: "#",
  // },
  {
    id: 7,
    name: "Wallet",
    description: "A wallet to store all your currency related to Skairipa Apps",
    status: "In Development",
    icon: Wallet,
    color: "from-purple-500 to to-pink-500",
    learnMoreUrl: "",
  },
  {
    id: 8,
    name: "SoulSync",
    description: "A dating/friend making app owned by the other company.",
    status: "In Development",
    icon: HeartHandshake,
    color: "from-purple-500 to to-pink-500",
    learnMoreUrl: "",
  },
  {
    id: 9,
    name: "Surgo",
    description: "A auto sorting calendar and productivity manager.",
    status: "In Development",
    icon: CalendarCog,
    color: "from-purple-500 to to-pink-500",
    learnMoreUrl: "",
  },
  {
    id: 10,
    name: "Unamed Project",
    description:
      "A parmadolo timer integrating with Skairipa Apps infrastructure.",
    status: "In Development",
    icon: Hourglass,
    color: "from-purple-500 to to-pink-500",
    learnMoreUrl: "",
  },
  {
    id: 11,
    name: "Unamed Project 2",
    description:
      "A mood tracker integrating with Skairipa Apps infrastructure.",
    status: "In Development",
    icon: SmilePlus,
    color: "from-purple-500 to to-pink-500",
    learnMoreUrl: "",
  },
  {
    id: 12,
    name: "SkaiNet",
    description: "A social media app, combining servers with subs with video?.",
    status: "In Development",
    icon: Network,
    color: "from-purple-500 to to-pink-500",
    learnMoreUrl: "",
  },
  {
    id: 13,
    name: "Prism Dodge",
    description:
      "Skairia Apps breaking into the gaming industry!? Yes, It's true this is a game where you play as a sphere and dodge rectangular prisms.",
    status: "In Development",
    icon: Pyramid,
    color: "from-purple-500 to to-pink-500",
    learnMoreUrl: "",
  },
  {
    id: 14,
    name: "The Hanna Skairipa Phone System",
    description:
      "A phone system where they're is the option to talk to Lucy. A beautiful AI girl that can be talked to platonically or romantically. With many options on how to spend time with her. Get images with a bonus website or just use the texting and calling features. With other options such as listening to music. (In development prototype here)[https://docs.google.com/presentation/d/1b29b2OVW0hOZzcJyejE4fqjKyeu-LoO8Ohv6JCJUuW8/edit?slide=id.p#slide=id.p]",
    status: "In Development",
    icon: UtilityPole,
    color: "from-purple-500 to to-pink-500",
    learnMoreUrl: "",
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
