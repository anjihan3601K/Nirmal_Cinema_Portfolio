import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";

import { supabase } from "@/integrations/supabase/client";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !message.trim()) {
      toast.error("Please add your name and a short message.");
      return;
    }
    if (!emailPattern.test(email.trim())) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setSending(true);
    const { error } = await supabase.from("contact_messages").insert({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim() || null,
      message: message.trim(),
    });
    setSending(false);

    if (error) {
      toast.error("Something went wrong. Please try again or call directly.");
      return;
    }

    setSent(true);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    toast.success("Message sent — Nirmal will get back to you soon.");
  }

  const fieldClass =
    "w-full rounded-xl border border-border bg-card/80 px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 outline-none transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/20";

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-12 max-w-2xl rounded-3xl border border-border bg-card/60 p-6 text-left shadow-xl shadow-primary/5 backdrop-blur-sm sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          className={fieldClass}
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />
        <input
          className={fieldClass}
          placeholder="Your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
      </div>
      <input
        className={`${fieldClass} mt-4`}
        placeholder="Subject (casting, collaboration, script…)"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        className={`${fieldClass} mt-4 min-h-36 resize-y`}
        placeholder="Tell Nirmal about your project…"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        type="submit"
        disabled={sending}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 disabled:opacity-60"
      >
        {sending ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <Send className="h-5 w-5" />
        )}
        {sending ? "Sending…" : "Send message"}
      </button>

      {sent && (
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Thanks — your message has been delivered.
        </p>
      )}
    </form>
  );
}
