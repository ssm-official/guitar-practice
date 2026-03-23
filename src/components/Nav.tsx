"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Metronome" },
  { href: "/chords", label: "Chords" },
  { href: "/tuner", label: "Tuner" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-1 bg-zinc-900 rounded-xl p-1">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
            pathname === link.href
              ? "bg-zinc-700 text-white"
              : "text-zinc-400 hover:text-zinc-200"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
