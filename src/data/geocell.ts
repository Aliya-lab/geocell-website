export interface GeocellProduct {
  id: string
  name: string
  type: string
  heights: number[]
  weldSpacings: number[]
  material: string
  tensileStrength: string
  yieldStrength: string
  weldStrength: string
  elongation: string
  cellShape: string
  color: string
  applications: string[]
}

export const geocellProducts: GeocellProduct[] = [
  {
    id: 'PCA-A',
    name: 'PCA Geocell Type A',
    type: 'A',
    heights: [50, 75],
    weldSpacings: [330, 356],
    material: 'Polymer Nano-Composite Alloy (PCA)',
    tensileStrength: '>=20 MPa',
    yieldStrength: '>=10 MPa',
    weldStrength: '>=100 N/cm',
    elongation: '>=10%',
    cellShape: 'Diamond / Pebble',
    color: 'Green',
    applications: ['Slope Protection', 'Embankment Reinforcement', 'Green Roof', 'Garden Planter'],
  },
  {
    id: 'PCA-B',
    name: 'PCA Geocell Type B',
    type: 'B',
    heights: [100],
    weldSpacings: [356, 445],
    material: 'Polymer Nano-Composite Alloy (PCA)',
    tensileStrength: '>=23 MPa',
    yieldStrength: '>=12 MPa',
    weldStrength: '>=120 N/cm',
    elongation: '>=10%',
    cellShape: 'Diamond / Pebble',
    color: 'Green',
    applications: ['Road Subgrade', 'Retaining Wall Backfill', 'Channel Lining'],
  },
  {
    id: 'PCA-C',
    name: 'PCA Geocell Type C',
    type: 'C',
    heights: [150],
    weldSpacings: [445, 600],
    material: 'Polymer Nano-Composite Alloy (PCA)',
    tensileStrength: '>=23 MPa',
    yieldStrength: '>=12 MPa',
    weldStrength: '>=120 N/cm',
    elongation: '>=10%',
    cellShape: 'Diamond / Pebble',
    color: 'Green',
    applications: ['Heavy-duty Pavement', 'Channel Lining', 'Landfill Liner Protection'],
  },
  {
    id: 'PCA-D',
    name: 'PCA Geocell Type D',
    type: 'D',
    heights: [200],
    weldSpacings: [600, 660, 712],
    material: 'Polymer Nano-Composite Alloy (PCA)',
    tensileStrength: '>=23 MPa',
    yieldStrength: '>=12 MPa',
    weldStrength: '>=150 N/cm',
    elongation: '>=10%',
    cellShape: 'Diamond / Pebble',
    color: 'Green',
    applications: ['Mining Haul Road', 'Landfill Liner Protection', 'Heavy-load Reinforcement'],
  },
]
