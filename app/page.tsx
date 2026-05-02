export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          GDPR Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Catch GDPR Violations{' '}
          <span className="text-[#58a6ff]">Before They Ship</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your GitHub or GitLab repo and automatically scan every commit for GDPR issues — missing consent flows, unlawful data collection, and retention violations — before they reach production.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Monitoring — $17/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {['GitHub & GitLab Webhooks', 'AI-Powered Scan', 'Compliance Drift Timeline', 'Instant Slack Alerts', 'Legal Workflow Export'].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#8b949e]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Single Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$17</p>
          <p className="text-[#6e7681] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited repos',
              'AI GDPR violation detection',
              'Compliance drift dashboard',
              'Slack & email alerts',
              'Legal report exports (PDF)',
              'Priority support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does the GDPR scanning work?</h3>
            <p className="text-sm text-[#8b949e]">We receive a webhook from GitHub or GitLab on every push, then run static analysis combined with an AI model to detect patterns like unencrypted PII storage, missing consent checks, or data being retained beyond legal limits.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Does it work with private repositories?</h3>
            <p className="text-sm text-[#8b949e]">Yes. We use OAuth app tokens or deploy keys with read-only access. Your source code is scanned in an isolated environment and never stored on our servers beyond the scan window.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">What languages and frameworks are supported?</h3>
            <p className="text-sm text-[#8b949e]">We support JavaScript, TypeScript, Python, Ruby, and Go out of the box, covering popular frameworks like Next.js, Django, Rails, and Express. More languages are added regularly.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#6e7681]">
        © {new Date().getFullYear()} GDPR Compliance Drift Monitor. Built for EU-facing SaaS teams.
      </footer>
    </main>
  )
}
