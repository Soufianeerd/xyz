import { useState, type FormEvent, type JSX } from "react";

export type TweetFormProps = {
  onSubmit: (content: string) => void;
};

export function TweetForm({ onSubmit }: TweetFormProps): JSX.Element {
  const [content, setContent] = useState<string>("");

  const CONTENT_MAX_LENGTH = 280;
  const remainingChars = CONTENT_MAX_LENGTH - content.length;
  const isInvalid = content.trim().length === 0 || content.length > CONTENT_MAX_LENGTH;

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (isInvalid) {
      return;
    }
    onSubmit(content.trim());
    setContent("");
  }

  return (
    <form className="tweet-form" onSubmit={handleSubmit}>
      <label htmlFor="tweet-textarea" className="visually-hidden">
        Quoi de neuf ?
      </label>
      <textarea
        id="tweet-textarea"
        className="tweet-textarea"
        placeholder="Quoi de neuf ?"
        rows={3}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="tweet-form-footer">
        <span
          className={`char-counter ${remainingChars < 0 ? "char-counter-over" : ""}`}
        >
          {remainingChars} caractères restants
        </span>
        <button
          type="submit"
          className="tweet-submit-button"
          disabled={isInvalid}
        >
          Publier
        </button>
      </div>
    </form>
  );
}
