export interface ProjectCase {
  id: string
  title: string
  location: string
  year: number
  category: string
  description: string
  productUsed: string
  image: string
}

export const cases: ProjectCase[] = [
  {
    id: 'case-1',
    title: 'Highway Embankment Protection',
    location: 'Heilongjiang, China',
    year: 2023,
    category: 'Slope Protection',
    description:
      'PCA Geocell Type B applied on 1:1.5 slope, 12m height, with vegetation establishment.',
    productUsed: 'PCA-B',
    image: '/images/case-1.webp',
  },
  {
    id: 'case-2',
    title: 'Railway Subgrade Reinforcement',
    location: 'Inner Mongolia, China',
    year: 2022,
    category: 'Road Subgrade',
    description:
      'Type C geocell used for heavy-haul railway subgrade stabilization over soft soil.',
    productUsed: 'PCA-C',
    image: '/images/case-2.webp',
  },
  {
    id: 'case-3',
    title: 'Irrigation Canal Lining',
    location: 'Xinjiang, China',
    year: 2024,
    category: 'Channel Lining',
    description: 'Type B geocell with concrete fill for anti-seepage canal lining, 5km total length.',
    productUsed: 'PCA-B',
    image: '/images/case-3.webp',
  },
  {
    id: 'case-4',
    title: 'Mine Haul Road Construction',
    location: 'Shanxi, China',
    year: 2023,
    category: 'Mining',
    description: 'Type D geocell for 200-ton haul truck access road over weak subgrade.',
    productUsed: 'PCA-D',
    image: '/images/case-4.webp',
  },
  {
    id: 'case-5',
    title: 'Riverbank Erosion Control',
    location: 'Jiangsu, China',
    year: 2024,
    category: 'Slope Protection',
    description:
      'Type A geocell with vegetated fill for riverbank protection against seasonal flooding.',
    productUsed: 'PCA-A',
    image: '/images/case-5.webp',
  },
  {
    id: 'case-6',
    title: 'Retaining Wall Backfill',
    location: 'Sichuan, China',
    year: 2022,
    category: 'Retaining Wall',
    description: 'Type C geocell reducing lateral earth pressure on 8m-high retaining wall.',
    productUsed: 'PCA-C',
    image: '/images/case-6.webp',
  },
]
