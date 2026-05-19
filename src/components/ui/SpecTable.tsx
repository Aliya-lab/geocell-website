import { GeocellProduct } from '@/data/geocell'

interface SpecRow {
  label: string
  values: string[]
  critical?: boolean
  numeric?: boolean
}

interface SpecTableProps {
  products: GeocellProduct[]
  showAll?: boolean
}

function MobileSpecCard({ product }: { product: GeocellProduct }) {
  const rows: SpecRow = {
    label: '',
    values: [],
    critical: false,
    numeric: false,
  }
  return (
    <div className="bg-white border border-slate-rock-50 rounded-card shadow-card p-4 mb-4">
      <div className="font-heading font-semibold text-lg text-slate-rock-700 mb-3">
        {product.name}
      </div>
      <div className="space-y-2">
        {[
          { label: 'Cell Height', value: product.heights.map((h) => `${h} mm`).join(', ') },
          { label: 'Weld Spacing', value: product.weldSpacings.map((w) => `${w} mm`).join(', ') },
          { label: 'Material', value: product.material },
          { label: 'Tensile Strength', value: product.tensileStrength, critical: true },
          { label: 'Yield Strength', value: product.yieldStrength },
          { label: 'Weld Strength', value: product.weldStrength, critical: true },
          { label: 'Elongation at Break', value: product.elongation },
          { label: 'Cell Shape', value: product.cellShape },
          { label: 'Color', value: product.color },
        ].map((row) => (
          <div
            key={row.label}
            className={`flex justify-between items-start text-sm ${
              row.critical ? 'border-l-[3px] border-l-eco-forest-800 pl-2' : ''
            }`}
          >
            <span className="font-medium text-slate-rock-600 min-w-[120px]">{row.label}</span>
            <span className={`text-slate-rock-800 font-data text-right ${row.critical ? 'font-semibold' : ''}`}>
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function SpecTable({ products, showAll = false }: SpecTableProps) {
  const displayProducts = showAll ? products : [products[0]]

  if (displayProducts.length === 1) {
    const p = displayProducts[0]
    const rows = [
      { label: 'Cell Height', value: p.heights.map((h) => `${h} mm`).join(', '), critical: false, numeric: true },
      { label: 'Weld Spacing', value: p.weldSpacings.map((w) => `${w} mm`).join(', '), critical: false, numeric: true },
      { label: 'Material', value: p.material, critical: false },
      { label: 'Tensile Strength', value: p.tensileStrength, critical: true, numeric: true },
      { label: 'Yield Strength', value: p.yieldStrength, critical: false, numeric: true },
      { label: 'Weld Strength', value: p.weldStrength, critical: true, numeric: true },
      { label: 'Elongation at Break', value: p.elongation, critical: false, numeric: true },
      { label: 'Cell Shape', value: p.cellShape, critical: false },
      { label: 'Color', value: p.color, critical: false },
    ]

    return (
      <div className="overflow-hidden print:break-inside-avoid">
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-rock-700">
                <th className="text-left text-white font-heading font-bold text-sm px-4 py-3 w-1/3">Parameter</th>
                <th className="text-left text-white font-heading font-bold text-sm px-4 py-3 w-2/3">Value</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={row.label}
                  className={`${idx % 2 === 0 ? 'bg-white' : 'bg-slate-rock-50'} hover:bg-eco-forest-100 transition-colors duration-150 ${row.critical ? 'border-l-[3px] border-l-eco-forest-800' : ''}`}
                >
                  <td className="px-4 py-3 font-medium text-slate-rock-700">{row.label}</td>
                  <td className={`px-4 py-3 text-right font-data ${row.numeric ? 'font-semibold' : ''} ${row.critical ? 'text-slate-rock-900' : 'text-slate-rock-600'}`}>
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden">
          <MobileSpecCard product={p} />
        </div>
      </div>
    )
  }

  // Comparison table (all products side by side)
  const allRows = [
    { label: 'Cell Height', key: 'heights', critical: false, numeric: true, format: (v: number[]) => v.map((h) => `${h} mm`).join(', ') },
    { label: 'Weld Spacing', key: 'weldSpacings', critical: false, numeric: true, format: (v: number[]) => v.map((w) => `${w} mm`).join(', ') },
    { label: 'Material', key: 'material', critical: false },
    { label: 'Tensile Strength', key: 'tensileStrength', critical: true, numeric: true },
    { label: 'Yield Strength', key: 'yieldStrength', critical: false, numeric: true },
    { label: 'Weld Strength', key: 'weldStrength', critical: true, numeric: true },
    { label: 'Elongation at Break', key: 'elongation', critical: false, numeric: true },
    { label: 'Cell Shape', key: 'cellShape', critical: false },
    { label: 'Color', key: 'color', critical: false },
  ]

  return (
    <div className="overflow-hidden print:break-inside-avoid">
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-rock-700">
              <th className="text-left text-white font-heading font-bold text-sm px-4 py-3">Parameter</th>
              {displayProducts.map((p) => (
                <th key={p.id} className="text-center text-white font-heading font-bold text-sm px-4 py-3">
                  {p.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allRows.map((row, idx) => (
              <tr
                key={row.key}
                className={`${idx % 2 === 0 ? 'bg-white' : 'bg-slate-rock-50'} hover:bg-eco-forest-100 transition-colors duration-150 ${row.critical ? 'border-l-[3px] border-l-eco-forest-800' : ''}`}
              >
                <td className="px-4 py-3 font-medium text-slate-rock-700">{row.label}</td>
                {displayProducts.map((p) => {
                  const raw = (p as unknown as Record<string, unknown>)[row.key]
                  const val = row.format ? row.format(raw as number[]) : String(raw)
                  return (
                    <td key={p.id} className={`px-4 py-3 text-center font-data ${row.numeric ? 'font-semibold text-slate-rock-900' : 'text-slate-rock-600'}`}>
                      {val}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: stack as cards */}
      <div className="md:hidden space-y-4">
        {displayProducts.map((p) => (
          <MobileSpecCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
