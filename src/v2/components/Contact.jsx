import React, { useState } from 'react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = 'kushagra2808gupta@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  return (
    <section id="contact" className="w-full bg-[#080809] py-10 pb-24">
      <div className="max-w-3xl mx-auto px-6">

        {/* Parallel Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] font-mono font-semibold text-emerald-400 tracking-wider">04 //</span>
          <h2 className="text-sm md:text-base font-bold text-white uppercase tracking-wider font-sans">
            Get In Touch
          </h2>
          <div className="flex-1 flex flex-col gap-1">
            <div className="h-px bg-white/15 w-full" />
            <div className="h-px bg-white/5 w-full" />
          </div>
        </div>

        <p className="text-sm md:text-base text-neutral-300 mb-5 leading-relaxed">
          Whether you have a backend engineering role, an exciting open-source project,
          or just want to connect — feel free to drop me an email. I typically respond within 24 hours.
        </p>

        {/* Interactive Email Box */}
        <div className="relative group overflow-hidden border border-white/12 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/25 rounded-xl p-3.5 md:p-4 transition-all duration-300 shadow-md">
          {/* Top Line Highlight */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />

          <div className="flex items-center justify-between gap-4 flex-wrap">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 min-w-0 group/email cursor-pointer"
            >
              <div className="w-9 h-9 rounded-lg border border-white/10 bg-white/[0.04] flex items-center justify-center text-emerald-400 flex-shrink-0 group-hover/email:text-emerald-300 group-hover/email:border-white/20 transition-all">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono text-neutral-400 block uppercase tracking-wider group-hover/email:text-neutral-300 transition-colors">Direct Email</span>
                <span className="text-xs md:text-sm font-mono font-medium text-white group-hover/email:text-emerald-300 transition-colors truncate block">
                  {email}
                </span>
              </div>
            </a>

            <button
              onClick={handleCopy}
              className="px-3.5 py-1.5 rounded-lg border border-white/10 bg-white/[0.05] hover:bg-white/[0.12] hover:border-white/30 text-xs font-mono font-medium text-neutral-200 hover:text-white transition-all duration-200 flex items-center gap-2"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <span className="text-emerald-400 font-semibold">✓ Copied!</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                  </svg>
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Footer Parallel Lines & Copyright */}
        <div className="mt-12 flex flex-col gap-1">
          <div className="h-px w-full bg-white/10" />
          <div className="h-px w-full bg-white/5" />
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 mt-5">
          <span>© {new Date().getFullYear()} Kushagra Gupta</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
