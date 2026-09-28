import type { JSX } from "react";

export type AvatarProps = {
  name: string;
};

export function Avatar({ name }: AvatarProps): JSX.Element {
  const parts = name.trim().split(/\s+/);
  const initials =
    parts.length >= 2
      ? `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
      : name.slice(0, 2).toUpperCase();

  return (
    <div className="tweet-avatar" aria-hidden="true">
      {initials}
    </div>
  );
}
