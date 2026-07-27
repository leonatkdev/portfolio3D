import { useState } from "react";
import { LuCheck, LuCopy, LuLoader, LuMail, LuSend } from "react-icons/lu";

import { profile, socials } from "../constants";
import { socialIcons } from "../atoms/SocialLinks";
import Section from "../atoms/Section";
import Reveal from "../atoms/Reveal";

const EMPTY_FORM = { name: "", email: "", message: "" };
const API_BASE = import.meta.env.VITE_API_BASE_URL;

const validate = ({ name, email, message }) => {
  const errors = {};
  if (!name.trim()) errors.name = "Please add your name.";
  if (!email.trim()) errors.email = "Please add your email.";
  else if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = "That email looks off.";
  if (!message.trim()) errors.message = "Tell me a little about the project.";
  return errors;
};

const Field = ({ label, error, children }) => (
  <label className="block">
    <span className="mb-2 block text-sm font-medium">{label}</span>
    {children}
    {error && (
      <span role="alert" className="mt-1.5 block text-xs text-red-500">
        {error}
      </span>
    )}
  </label>
);

const Contact = () => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [copied, setCopied] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: "" }));
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    // No backend configured? Hand the message off to the visitor's mail client.
    if (!API_BASE) {
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name}`);
      const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        }),
      });

      if (!response.ok) throw new Error("Request failed");

      setForm(EMPTY_FORM);
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 6000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something"
      description="Have a role, a product idea or a problem worth solving? Send a note and I'll reply within a couple of days."
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="card p-6">
              <p className="eyebrow">Email</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="text-base font-medium underline-offset-4 hover:text-accent hover:underline"
                >
                  {profile.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="grid h-8 w-8 place-items-center rounded-full border border-line
                             text-muted transition-colors hover:text-ink"
                >
                  {copied ? (
                    <LuCheck className="h-3.5 w-3.5 text-emerald-500" />
                  ) : (
                    <LuCopy className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <ul className="mt-4 space-y-2">
              {socials.map(({ name, handle, url, icon }) => {
                const Icon = socialIcons[icon];
                return (
                  <li key={name}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="card flex items-center gap-4 p-4 hover:border-ink/20"
                    >
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-subtle text-ink">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-medium">{name}</span>
                        <span className="block truncate text-xs text-muted">
                          {handle}
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.08}>
            <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" error={errors.name}>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="field"
                  />
                </Field>

                <Field label="Email" error={errors.email}>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="field"
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Message" error={errors.message}>
                  <textarea
                    rows="6"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What are you working on?"
                    className="field resize-none"
                  />
                </Field>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary"
                >
                  {status === "sending" ? (
                    <>
                      <LuLoader className="h-4 w-4 animate-spin" />
                      Sending
                    </>
                  ) : (
                    <>
                      <LuSend className="h-4 w-4" />
                      Send message
                    </>
                  )}
                </button>

                {status === "sent" && (
                  <p className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                    <LuCheck className="h-4 w-4" />
                    Message sent — talk soon.
                  </p>
                )}

                {status === "error" && (
                  <p className="flex items-center gap-2 text-sm text-red-500">
                    <LuMail className="h-4 w-4" />
                    Sending failed. Email me at {profile.email} instead.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
