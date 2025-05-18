'use client';

import React, { JSX } from 'react';
import Link from 'next/link';

export function parseTextContent(text: string): JSX.Element[] {
  const regex = /(#\w+)|(@\w+)|(https?:\/\/[^\s]+)/g;

  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (!part) return <React.Fragment key={index}></React.Fragment>;

    if (part.startsWith("#")) {
      return (
        <span key={index} className="text-blue-500">
          {part}
        </span>
      );
    }

    if (part.startsWith("@")) {
      return (
        <Link key={index} href={`/profile/${part.slice(1)}`} className="text-green-600 hover:underline">
          {part}
        </Link>
      );
    }

    if (part.startsWith("http")) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 hover:underline"
        >
          {part}
        </a>
      );
    }

    return <span key={index}>{part}</span>;
  });
}
