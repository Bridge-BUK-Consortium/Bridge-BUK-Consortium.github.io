export const PROGRAMME = {
  cluster: 'Cluster E',
  clusterTitle: 'Trust, Safety, Consumer Protection and Online Harms',
  programme: 'National Digital Economy University Led Research Programme',
  project: 'Project BRIDGE',
  client: 'Federal Ministry of Communications, Innovation and Digital Economy',
  lead: 'Bayero University, Kano',
  rfp: 'NG-FMCIDE-544880-CS-QCBS',
  projectNo: 'P508383',
  duration: '36 months · December 2026 to November 2029',
  cohort: '15 postdoctoral researchers · 15 PhD candidates',
  fibre: 'at least 90,000 km',
  email: 'clustere@buk.edu.ng',
} as const

export const PILLARS = [
  {
    id: 'A',
    name: 'Online Harms and Online Safety',
    streams: ['RS1', 'RS5'],
    lead: 'Dr. Shamsuddeen Hassan Muhammad',
    leadCode: 'K-1',
    mdas: ['NITDA', 'NCC', 'INEC', 'ONSA', 'FMCIDE', 'Federal Ministry of Education', 'UBEC'],
  },
  {
    id: 'B',
    name: 'Trust',
    streams: ['RS3', 'RS6'],
    lead: 'Assoc. Prof. Aminu Bello Usman',
    leadCode: 'K-2',
    mdas: ['CBN', 'NIMC', 'NITDA', 'NDPC', 'FMCIDE'],
  },
  {
    id: 'C',
    name: 'Consumer and Data Protection',
    streams: ['RS2', 'RS4'],
    lead: 'Dr. Muhammad Shehu Abubakar-Sadiq',
    leadCode: 'K-3',
    mdas: ['FCCPC', 'CBN', 'NDPC', 'NIMC', 'Federal Ministry of Health'],
  },
] as const

export type StreamId = 'RS1' | 'RS2' | 'RS3' | 'RS4' | 'RS5' | 'RS6'

export const STREAMS: {
  id: StreamId
  pillar: 'A' | 'B' | 'C'
  title: string
  summary: string
  questions: string[]
  outputs: { month: string; name: string }[]
  mdas: string[]
}[] = [
  {
    id: 'RS1',
    pillar: 'A',
    title: 'Online harms, hate speech and content moderation',
    summary:
      'Detection models for Nigerian languages, an audit of how platforms moderate them, and a governance model for content moderation.',
    questions: [
      'Which hate speech patterns rise around elections, and which detection models are accurate enough for moderation use?',
      'Do platforms act on Nigerian-language hate speech as often and as fast as on English, and what appeal route is appropriate?',
      'Which online indicators precede documented offline violence, and can they be observed ethically?',
      'How do synthetic media and coordinated inauthentic behaviour spread in Nigerian-language spaces, and can they be detected?',
    ],
    outputs: [
      { month: 'M6', name: 'AfriHate v2.0, the 2027 election corpus in four core languages' },
      { month: 'M12', name: 'AfriHate v2.1, five further Nigerian languages' },
      { month: 'M24', name: 'Detection models for nine Nigerian languages' },
      { month: 'M24', name: 'Platform moderation audit' },
      { month: 'M30', name: 'Deepfake benchmark' },
      { month: 'M36', name: 'Moderation governance model' },
      { month: 'M36', name: 'Radicalisation risk framework' },
    ],
    mdas: ['NITDA', 'NCC', 'INEC', 'ONSA'],
  },
  {
    id: 'RS5',
    pillar: 'A',
    title: 'Youth online safety and digital literacy',
    summary:
      'What harms Nigerian adolescents meet online, whether the UBEC and NITDA literacy programmes work, and safety materials in Nigerian languages.',
    questions: [
      'Which harms are most common among students in rural and urban schools?',
      'Do the UBEC and NITDA programmes change online behaviour?',
      'How do gender norms shape what girls experience and whether they report it?',
    ],
    outputs: [
      { month: 'M14', name: 'Youth online harms baseline' },
      { month: 'M24', name: 'Literacy programme evaluation' },
      { month: 'M30', name: 'Safety toolkit in Hausa and Nigerian Pidgin' },
      { month: 'M36', name: 'Curriculum recommendations' },
    ],
    mdas: ['Federal Ministry of Education', 'UBEC'],
  },
  {
    id: 'RS3',
    pillar: 'B',
    title: 'Secure and privacy-preserving authentication for FinTech',
    summary:
      'Continuous, multimodal authentication for Nigerian FinTech, so rural users, informal workers and persons with disabilities depend less on static credentials.',
    questions: [
      'Can behavioural biometrics cut fraud in agent banking while staying usable for low-literacy agents?',
      'What stops informal workers adopting self-sovereign identity, and can verification work offline on low-end devices?',
      'How do rural users trade off security steps against convenience in mobile money authentication?',
    ],
    outputs: [
      { month: 'M12', name: 'Behavioural biometric prototype' },
      { month: 'M24', name: 'Offline digital identity module' },
      { month: 'M30', name: 'Field study with 300 rural agents' },
      { month: 'M36', name: 'Agent banking authentication guidance note' },
    ],
    mdas: ['CBN', 'NIMC', 'NDPC'],
  },
  {
    id: 'RS6',
    pillar: 'B',
    title: 'Regulatory innovation and adaptive governance',
    summary:
      'Trust and safety regulation compared across five jurisdictions, the gaps and overlaps between Nigerian regulators, and safeguards for sandboxes.',
    questions: [
      'Which provisions of the EU Digital Services Act, the UK Online Safety Act and Kenyan, Indian and South African practice can Nigeria adopt?',
      'Do the mandates of NDPC, NITDA, NCC, CBN and FCCPC leave gaps or overlaps in digital safety enforcement?',
      'How can sandboxes admit innovation without weakening consumer protection?',
    ],
    outputs: [
      { month: 'M12', name: 'Comparative regulatory report' },
      { month: 'M24', name: 'Institutional capacity assessment' },
      { month: 'M30', name: 'Sandbox governance mechanism' },
      { month: 'M36', name: 'Model regulatory code' },
    ],
    mdas: ['NITDA', 'NDPC', 'CBN', 'FMCIDE'],
  },
  {
    id: 'RS2',
    pillar: 'C',
    title: 'Consumer protection in digital markets',
    summary:
      'Online fraud and consumer harm in digital markets, phishing detection in Nigerian languages, and whether redress reaches women, youth and rural traders.',
    questions: [
      'How do phishing and deceptive lending target low-literacy users, and can they be detected automatically in Nigerian languages?',
      'Which consumer harms are most common in WhatsApp trade and social commerce?',
      'Do existing dispute mechanisms resolve complaints from rural women traders?',
    ],
    outputs: [
      { month: 'M9', name: 'Nigerian Phishing Corpus' },
      { month: 'M18', name: 'Fraud detection API prototype' },
      { month: 'M27', name: 'Consumer harm taxonomy' },
      { month: 'M36', name: 'Recommendations to CBN and FCCPC' },
    ],
    mdas: ['FCCPC', 'CBN'],
  },
  {
    id: 'RS4',
    pillar: 'C',
    title: 'Trust, privacy and data protection frameworks',
    summary:
      'How the NDPA is enforced across sectors, a privacy-preserving architecture for health data, and public trust in digital identity.',
    questions: [
      'Is the NDPA enforced consistently across banking, health and telecoms, and where are the gaps?',
      'What architecture lets health systems share data within the NDPA?',
      'Do citizens trust government digital identity more or less than private FinTech KYC, and why?',
    ],
    outputs: [
      { month: 'M6', name: 'NDPA Enforcement Case Tracker' },
      { month: 'M24', name: 'Health data sharing prototype' },
      { month: 'M30', name: 'National trust survey, n = 3,000' },
      { month: 'M36', name: 'NDPC reform recommendations' },
    ],
    mdas: ['NDPC', 'NIMC', 'Federal Ministry of Health'],
  },
]

export const PHASES = [
  {
    id: 'Phase 0',
    name: 'Inception',
    months: 'Month 1',
    points: [
      'Kick-off with the PIU and alignment with the Quality Assurance Firm',
      'MDA introductions and policy focal points',
      'Ethics applications, data management plan, information security policy',
      'Cohort recruitment opens',
      'Inception Report (D-1)',
    ],
  },
  {
    id: 'Phase 1',
    name: 'Foundations',
    months: 'Months 2 to 12',
    points: [
      'Cohort recruited',
      'Datasets extended, instruments piloted, first survey waves',
      'First prototypes, comparative and legal analyses',
      'First six policy briefs, first policy lab, first MDA training',
      'National conference and Annual Progress Report 1',
    ],
  },
  {
    id: 'Phase 2',
    name: 'Evidence and prototypes',
    months: 'Months 13 to 24',
    points: [
      'Main fieldwork, whole cohort in Nigeria',
      'Detection models and fraud tools released',
      'Platform audit and institutional capacity assessment',
      'Mid-Term Review at Month 18, with course corrections',
      'National conference and Annual Progress Report 2',
    ],
  },
  {
    id: 'Phase 3',
    name: 'Synthesis and policy',
    months: 'Months 25 to 36',
    points: [
      'Year 3 workplan revised after the Mid-Term Review',
      'National trust survey, analysis and theses',
      'Governance frameworks, model codes, safety toolkit',
      'Third national conference at Month 34',
      'Datasets curated and delivered, Final Report (D-8)',
    ],
  },
]

export const DELIVERABLES = [
  { id: 'D-1', name: 'Inception Report', timing: 'Month 1', content: 'Design, theory of change, workplan, risk and results frameworks, policy engagement, data management, ethics, recruitment.' },
  { id: 'D-2', name: 'Quarterly Reports', timing: '12 · within 30 days of quarter end', content: 'Status, outputs, expenditure, risks.' },
  { id: 'D-3', name: 'Mid-Term Review', timing: 'Month 18', content: 'Progress, output quality, governance, course corrections.' },
  { id: 'D-4', name: 'Interim Outputs', timing: 'Ongoing', content: 'Working papers, datasets, analytical notes, prototypes.' },
  { id: 'D-5', name: 'Policy Briefs', timing: '18 · six by M12, M24, M36', content: 'Actionable notes written for a named agency.' },
  { id: 'D-6', name: 'Synthesis Inputs', timing: 'Periodic', content: 'Contributions to the cross-cluster synthesis.' },
  { id: 'D-7', name: 'Annual Progress Reports', timing: '3 · within 30 days of year end', content: 'Outputs, budget, risks, policy engagement.' },
  { id: 'D-8', name: 'Final Report', timing: 'Within 45 days of completion', content: 'Consolidated outputs, cleaned datasets with codebooks, recommendations.' },
]

export const PRINCIPLES = [
  { name: 'Evidence for named decisions', detail: 'Every question names the agency, the instrument and the decision it serves.' },
  { name: 'Nigerian languages first', detail: 'Hausa, Yoruba, Igbo, Nigerian Pidgin and English, with native-speaker annotation and fieldwork in all six zones.' },
  { name: 'Start from existing assets', detail: 'AfriHate, NaijaHate, NaijaSenti and AfriSenti supply the data. VigilSentinel, Wazobia Invoice, SPIDVerify and NaijaSafe supply the testbeds.' },
  { name: 'Inclusion by design', detail: 'Samples oversample underserved groups. Findings are disaggregated. Every brief carries actions for them.' },
  { name: 'Open and replicable', detail: 'Pre-registered protocols, versioned code and codebooks, datasets released with each study.' },
  { name: 'Safeguards with owners', detail: 'Ethics, data protection, child protection, annotator welfare, SEA/SH and cybersecurity each have a named owner and a document.' },
]
