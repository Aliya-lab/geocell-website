import { Section } from '@/components/ui/Section'

const features = [
  {
    title: 'High Tensile Strength',
    description:
      'Tensile strength >=20 MPa with PCA nano-composite alloy, exceeding industry standards by 30%.',
    icon: (
      <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-eco-forest-800">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Eco-Friendly Material',
    description:
      'Manufactured from recyclable polymer composite, enabling green vegetation growth on installed surfaces.',
    icon: (
      <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-eco-forest-800">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Long Service Life',
    description:
      'UV-resistant and chemically stable in pH 3-12 environments, with 50+ year design life in typical conditions.',
    icon: (
      <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-eco-forest-800">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export function FeaturesSection() {
  return (
    <Section className="bg-pearl-grey" id="features">
      <h2 className="text-3xl font-heading font-bold text-slate-rock-700 text-center mb-4">
        Why Choose Our Geocell
      </h2>
      <p className="text-slate-rock-500 text-center mb-12 max-w-xl mx-auto">
        Engineered for performance, durability, and environmental responsibility
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white rounded-card shadow-card p-8 text-center hover:shadow-card-hover transition-shadow duration-200"
          >
            <div className="flex justify-center mb-5">{feature.icon}</div>
            <h3 className="font-heading font-semibold text-xl text-slate-rock-700 mb-3">
              {feature.title}
            </h3>
            <p className="text-slate-rock-500 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
