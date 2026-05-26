import { CheckCircle2 } from 'lucide-react';

const tiers = [
  {
    title: 'Free Core Tier',
    price: '₹0',
    period: 'permanent',
    description: 'Perfect for solo practice loops.',
    features: ['3 Complete Sessions / Month', 'Full 4-Agent Panel Access', 'Standard Plain Text Reports'],
    primary: false,
    buttonText: 'Launch Free Simulator'
  },
  {
    title: 'Premium Individual',
    price: '₹299',
    period: 'month',
    description: 'For candidates targeting high-growth companies.',
    features: ['Unlimited Interview Sessions', 'Company-Specific Prep Packs', 'Rich PDF Summary History Exports', 'Predictive Evaluation Scoring'],
    primary: true,
    buttonText: 'Upgrade to Premium'
  },
  {
    title: 'College License',
    price: '₹15k – ₹50k',
    period: 'year',
    description: 'White-labeled infrastructure for placement cells.',
    features: ['Unlimited Student Provisioning', 'TPO Analytics Dashboard Suite', 'White-Label Institutional Domains', 'Dedicated Batch Performance Reports'],
    primary: false,
    buttonText: 'Contact Institution Sales'
  }
];

export default function LandingPricing() {
  return (
    <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
          Flexible Models for Every Phase
        </h2>
        <p className="text-zinc-400 text-lg">
          Start sharpening your interview responses for free, or power up your placement cell with targeted company packs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {tiers.map((tier) => (
          <div key={tier.title} className={`rounded-2xl p-8 relative flex flex-col justify-between ${tier.primary ? 'bg-zinc-900 border-2 border-indigo-500 shadow-xl shadow-indigo-500/5' : 'bg-zinc-900/40 border border-zinc-800'}`}>
            {tier.primary && (
              <div className="absolute top-0 right-6 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-md">
                Most Popular
              </div>
            )}
            <div>
              <h3 className="text-lg font-semibold text-zinc-200 mb-2">{tier.title}</h3>
              <p className="text-zinc-500 text-sm mb-6">{tier.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                <span className="text-zinc-500 text-sm font-medium"> / {tier.period}</span>
              </div>
              <ul className="space-y-3.5 text-sm text-zinc-400 mb-8 border-t border-zinc-800/60 pt-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button className={`w-full py-2.5 text-sm font-semibold rounded-lg transition ${tier.primary ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md hover:opacity-90' : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200'}`}>
              {tier.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
