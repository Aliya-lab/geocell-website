/**
 * Concrete Blanket (CB) copy and figures.
 * Sources: TDS Issue 1.2, Product Brochure Issue 1.2, Product Introduction Issue 1.1,
 * FAQ Issue 1.1, and Installation Guide Issue 1.1 (all 17 November 2026).
 * 7 mm ditch photographs are not a standard 6/10/15 grade and are omitted.
 * highway-step-reinforcement.jpg is omitted because the file carries a third-party watermark.
 * Thickness is published only where MANIFEST.json records it.
 */

export const cbEnquireHref = '/contact?product=concrete-blanket'

export const cbProduct = {
  name: 'Concrete Blanket',
  alsoCalled: 'Cement Blanket',
  abbreviation: 'CB',
  category: 'Geosynthetic cementitious composite mat (GCCM)',
  standfirst:
    'Concrete Blanket (CB) is a geosynthetic cementitious composite mat. It is supplied dry, in rolls. After it is placed, it is hydrated with water and hardens into a thin concrete layer. No on-site mixing of concrete is required for the standard installation.',
  alsoCalledNote:
    'In some project communications it is also called Cement Blanket; both names refer to the same product and are abbreviated CB.',
  construction:
    'The standard Concrete Blanket is uncoated. It has a cementitious core contained between two textile layers — a top fabric and a bottom fabric — and has no membrane. This is the standard range offered for general use, in thicknesses of 6 mm, 10 mm and 15 mm.',
  pvc:
    'Where a project requires a bonded membrane, a PVC-backed type can be produced to order. The standard colour is grey; colour or membrane type can be customised. Membrane-backed types are optional, are not the standard product, should be specified separately, and are not covered by the standard data sheet. Price varies with quantity and size requirements; contact us for details.',
  specScope:
    'The figures below are taken from the Concrete Blanket Technical Data Sheet, Issue 1.2 (17 November 2026). They apply only to the standard uncoated 6 mm, 10 mm and 15 mm range.',
  rollMassNote:
    'Typical dry roll masses exclude the pallet and wrapping. They are calculated from the data-sheet mass per unit area and the typical roll area. Roll size can be customised to project requirements.',
  toleranceNote:
    'Length and width are typical values. Tolerances are typically +5% / −2.5%.',
  compressiveNote:
    'Compressive strength is the strength of the cementitious mix, determined in accordance with ASTM D8329 (water/cementitious materials ratio representative of in-use hydration; specimens prepared as cubes or cylinders). It is not a compressive test on a cut specimen of the hardened mat.',
  specReference:
    'The governing GCCM material specification is ASTM D8364/D8364M-21 (reapproved 2026), Standard Specification for Geosynthetic Cementitious Composite Mat (GCCM) Materials. Thickness grades are not classified as Type I, II or III under that specification.',
  typicalValuesNote:
    'Values are typical, based on current test data, and are not a contractual warranty.',
  suitability:
    'Suitability for a given project should be confirmed by the designer against the data sheet and the project specification.',
  notStructural:
    'This product is used for surface protection and erosion control; it is not a structural reinforcing facing. Layout, fixing, and any performance requirement for the lining must be specified by the project designer. Slopes must already be geotechnically stable before the blanket is laid.',
  limits:
    'This page does not claim chemical resistance, a design life, a fire rating or an impermeability value.',
  applicationDisclaimer:
    'Application figures are based on the Company’s project experience. They are not a substitute for the data sheet and are not a contractual warranty.',
  rapidSetNote:
    'A 15-minute rapid-set type, where offered, is a special product and is not the standard 6 / 10 / 15 mm hydration time given in the installation guide.',
  installationDisclaimer:
    'Dimensions and timings are typical installation practice taken from the current installation guide. The project designer may specify different details. They are not a contractual warranty.',
  commercial:
    'Price, lead time and commercial terms are provided by the sales team against a specific enquiry.',
}

export interface CbGrade {
  id: string
  thickness: string
  mass: string
  bulkRoll: string
  area: string
  dryRollMass: string
  minWater: string
}

export const cbGrades: CbGrade[] = [
  {
    id: '6',
    thickness: '6 mm',
    mass: '8 kg/m²',
    bulkRoll: '2 × 50 m',
    area: '100 m²',
    dryRollMass: '800 kg',
    minWater: '4.0 L/m²',
  },
  {
    id: '10',
    thickness: '10 mm',
    mass: '12.5 kg/m²',
    bulkRoll: '2 × 50 m',
    area: '100 m²',
    dryRollMass: '1,250 kg',
    minWater: '6.25 L/m²',
  },
  {
    id: '15',
    thickness: '15 mm',
    mass: '19 kg/m²',
    bulkRoll: '2 × 20 m',
    area: '40 m²',
    dryRollMass: '760 kg',
    minWater: '9.5 L/m²',
  },
]

export interface CbSpecRow {
  property: string
  method: string
  unit: string
  values: [string, string, string]
}

export const cbPhysicalRows: CbSpecRow[] = [
  { property: 'Total thickness', method: 'ASTM C1185', unit: 'mm', values: ['6', '10', '15'] },
  { property: 'Mass per unit area', method: 'ASTM D5993', unit: 'kg/m²', values: ['8', '12.5', '19'] },
  { property: 'Bulk roll size (typical)', method: '—', unit: 'm', values: ['2 × 50', '2 × 50', '2 × 20'] },
  { property: 'Area of bulk roll (typical)', method: '—', unit: 'm²', values: ['100', '100', '40'] },
  { property: 'Typical dry roll mass', method: '—', unit: 'kg', values: ['800', '1,250', '760'] },
  { property: 'Density increase on curing', method: '—', unit: '%', values: ['15–25', '15–25', '15–25'] },
]

export interface CbMechanicalRow {
  property: string
  method: string
  unit: string
  value: string
}

export const cbMechanicalRows: CbMechanicalRow[] = [
  {
    property: 'Compressive strength of the cementitious mix (28 days)',
    method: 'ASTM D8329',
    unit: 'MPa',
    value: '> 40',
  },
  { property: 'Flexural strength, MD', method: 'ASTM D8058', unit: 'MPa', value: '> 10' },
  { property: 'Flexural strength, CD', method: 'ASTM D8058', unit: 'MPa', value: '> 10' },
  { property: 'Tensile strength, MD', method: 'ASTM D6768', unit: 'kN/m', value: '> 15' },
  { property: 'Tensile strength, CD', method: 'ASTM D6768', unit: 'kN/m', value: '> 15' },
  { property: 'Final tensile strength, MD', method: 'ASTM D4885', unit: 'kN/m', value: '> 30' },
  { property: 'Final tensile strength, CD', method: 'ASTM D4885', unit: 'kN/m', value: '> 30' },
]

export const cbTypicalUses = [
  {
    title: 'Channels and ditches',
    text: 'Lining and protection of channels and ditches.',
  },
  {
    title: 'Slopes and banks',
    text: 'Slope and bank protection, used for erosion control. Slopes must already be geotechnically stable before the blanket is laid.',
  },
  {
    title: 'Ponds and reservoirs',
    text: 'Pond and reservoir lining.',
  },
  {
    title: 'Other surface protection',
    text: 'Other erosion-control or surface-protection works where a thin, rapidly placed concrete layer is required.',
  },
]

export const cbAdvantages = [
  {
    title: 'Time saving',
    text: 'Up to 95% time saving compared with conventional concrete construction.',
  },
  {
    title: 'Rapid installation',
    text: 'Two workers can typically install 400 m² per day.',
  },
  {
    title: 'Lower CO₂',
    text: 'CO₂ emissions reduced by 90% compared with conventional concrete construction.',
  },
  {
    title: 'Strength',
    text: 'Compressive and flexural strength ≥ C40 concrete.',
  },
  {
    title: 'Rapid-set type',
    text: 'A 15-minute rapid-set type is available for emergency works.',
  },
  {
    title: 'Testing',
    text: 'Tested by CTC and SGS.',
  },
  {
    title: 'International standard',
    text: 'Specified to international test methods, including ASTM D8364/D8364M.',
  },
  {
    title: 'UV ageing resistance',
    text: 'Resistant to UV ageing in service.',
  },
  {
    title: 'Non-toxic and harmless',
    text: 'Non-toxic and harmless in normal use.',
  },
]

export const cbInstallSteps = [
  { step: '1', title: 'Cut', text: 'Cut the dry material to the required size.' },
  { step: '2', title: 'Place', text: 'Lay the sheet on the prepared surface.' },
  { step: '3', title: 'Overlap', text: 'Form overlaps of at least 100 mm.' },
  {
    step: '4',
    title: 'Hydrate',
    text: 'Apply not less than 4.0 / 6.25 / 9.5 L/m²; an excess of water is recommended.',
  },
]

export const cbDownloads = [
  {
    name: 'Technical Data Sheet',
    issue: 'Issue 1.2',
    date: '17 November 2026',
    size: '77 KB',
    href: '/downloads/GCCM_ConcreteBlanket_TechnicalDataSheet_Issue1.2.pdf',
  },
  {
    name: 'Product Brochure',
    issue: 'Issue 1.2',
    date: '17 November 2026',
    size: '781 KB',
    href: '/downloads/GCCM_ConcreteBlanket_ProductBrochure_Issue1.2.pdf',
  },
  {
    name: 'Product Introduction',
    issue: 'Issue 1.1',
    date: '17 November 2026',
    size: '46 KB',
    href: '/downloads/GCCM_ConcreteBlanket_ProductIntroduction_Issue1.1.pdf',
  },
  {
    name: 'Installation Guide',
    issue: 'Issue 1.1',
    date: '17 November 2026',
    size: '76 KB',
    href: '/downloads/GCCM_ConcreteBlanket_InstallationGuide_Issue1.1.pdf',
  },
  {
    name: 'Frequently Asked Questions',
    issue: 'Issue 1.1',
    date: '17 November 2026',
    size: '63 KB',
    href: '/downloads/GCCM_ConcreteBlanket_FAQ_Issue1.1.pdf',
  },
]

export interface CbPhoto {
  src: string
  width: number
  height: number
  alt: string
  caption: string
  /** Set only when MANIFEST.json records a thickness. */
  thickness?: string
}

export interface CbGalleryGroup {
  id: string
  title: string
  photos: CbPhoto[]
}

const img = (file: string) => `/images/concrete-blanket/${file}`

export const cbGallery: CbGalleryGroup[] = [
  {
    id: 'ditches',
    title: 'Irrigation and drainage ditches',
    photos: [
      { src: img('ditch-repair-1.jpg'), width: 1080, height: 1440, alt: 'Concrete Blanket lining a drainage ditch', caption: 'Ditch lining and repair' },
      { src: img('ditch-repair-2.jpg'), width: 1080, height: 1440, alt: 'Concrete Blanket on the sides of a drainage ditch', caption: 'Ditch lining and repair' },
      { src: img('ditch-repair-3.jpg'), width: 1440, height: 1080, alt: 'Concrete Blanket used to line a ditch', caption: 'Ditch lining and repair' },
      { src: img('ditch-repair-4.jpg'), width: 1080, height: 1440, alt: 'Concrete Blanket ditch lining along a watercourse', caption: 'Ditch lining and repair' },
      { src: img('ditch-repair-5.jpg'), width: 1440, height: 1080, alt: 'Concrete Blanket placed in a drainage ditch', caption: 'Ditch lining and repair' },
      { src: img('ditch-repair-6.jpg'), width: 1440, height: 1080, alt: 'Concrete Blanket surface protection in a ditch', caption: 'Ditch lining and repair' },
    ],
  },
  {
    id: 'slope',
    title: 'Slope protection',
    photos: [
      {
        src: img('neimenggu-slope-protection.jpg'),
        width: 1920,
        height: 873,
        alt: 'Concrete Blanket laid on a slope for surface protection',
        caption: 'Slope protection',
      },
    ],
  },
  {
    id: 'dam',
    title: 'Dam surface protection',
    photos: [
      {
        src: img('cb10-dam-reinforcement.jpg'),
        width: 1152,
        height: 576,
        alt: 'Concrete Blanket dam surface protection, 10 mm',
        caption: 'Dam surface protection',
        thickness: '10 mm',
      },
      {
        src: img('lianyungang-dam-reinforcement.jpg'),
        width: 1702,
        height: 1276,
        alt: 'Concrete Blanket on a dam face',
        caption: 'Dam surface protection',
      },
    ],
  },
  {
    id: 'pipe',
    title: 'Pipe drainage',
    photos: [
      {
        src: img('pipe-drainage-system.jpg'),
        width: 1080,
        height: 1440,
        alt: 'Concrete Blanket inside a pipe drainage system',
        caption: 'Pipe drainage protection',
      },
    ],
  },
  {
    id: 'reservoir',
    title: 'Reservoir lining',
    photos: [
      {
        src: img('reservoir.jpg'),
        width: 1702,
        height: 1276,
        alt: 'Concrete Blanket used for reservoir lining',
        caption: 'Reservoir lining',
      },
    ],
  },
  {
    id: 'coastal',
    title: 'Coastal and tidal protection',
    photos: [
      {
        src: img('coastal-applications.jpg'),
        width: 1273,
        height: 579,
        alt: 'Concrete Blanket on a coastal surface',
        caption: 'Coastal surface protection',
      },
      {
        src: img('tidal-flat-protection.jpg'),
        width: 1200,
        height: 800,
        alt: 'Concrete Blanket being placed on a tidal flat',
        caption: 'Tidal-flat surface protection',
      },
    ],
  },
  {
    id: 'oil-field',
    title: 'Oil field',
    photos: [
      {
        src: img('dongying-oil-field-dam.jpg'),
        width: 1920,
        height: 1080,
        alt: 'Concrete Blanket around oil-field equipment',
        caption: 'Oil-field surface protection',
      },
      {
        src: img('dongying-oil-field-reinforcement-1.jpg'),
        width: 1920,
        height: 1440,
        alt: 'Concrete Blanket on an oil-field berm',
        caption: 'Oil-field surface protection',
      },
      {
        src: img('dongying-oil-field-reinforcement-2.jpg'),
        width: 1920,
        height: 1440,
        alt: 'Concrete Blanket being placed on an oil-field surface',
        caption: 'Oil-field surface protection',
      },
    ],
  },
  {
    id: 'mine-tailings',
    title: 'Mine-tailings drainage ditches',
    photos: [
      {
        src: img('mine-tailings-drainage-ditch-1.jpg'),
        width: 1078,
        height: 1920,
        alt: 'Concrete Blanket lining a mine-tailings drainage ditch',
        caption: 'Mine-tailings drainage ditch',
      },
      {
        src: img('mine-tailings-drainage-ditch-2.jpg'),
        width: 1440,
        height: 1920,
        alt: 'Concrete Blanket along a mine-tailings drainage ditch',
        caption: 'Mine-tailings drainage ditch',
      },
      {
        src: img('mine-tailings-drainage-ditch-3.jpg'),
        width: 1440,
        height: 1080,
        alt: 'Concrete Blanket in a mine-tailings drainage ditch',
        caption: 'Mine-tailings drainage ditch',
      },
    ],
  },
]

export const cbHeroImage = {
  src: img('neimenggu-slope-protection.jpg'),
  width: 1920,
  height: 873,
  alt: 'Concrete Blanket laid on a slope for surface protection',
}
