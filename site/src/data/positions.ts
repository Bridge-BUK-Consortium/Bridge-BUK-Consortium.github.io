import type { StreamId } from './programme'

export type Position = {
  code: string
  type: 'PhD' | 'Postdoc'
  pillar: 'A' | 'B' | 'C'
  title: string
  focus: string
  streams: StreamId[]
  agencies: string[]
  note?: string
}

/* The open call advertises a topic pool wider than the number of funded
   places, so that the strongest applicants and the MDAs' priorities decide
   the final fifteen of each kind: 20 PhD topics for 15 PhD places and
   16 postdoctoral topics for 15 postdoctoral places. Each pillar takes five
   PhD candidates and five postdoctoral researchers. */

export const POSITIONS: Position[] = [
  // ---------------- Pillar A ----------------
  {
    code: 'A-P1',
    type: 'PhD',
    pillar: 'A',
    title: 'Hate speech detection for low-resource Nigerian languages',
    focus:
      'Build and evaluate detection models for the nine languages of RS1, with per-language error analysis at a fixed operating threshold.',
    streams: ['RS1'],
    agencies: ['NITDA', 'INEC'],
  },
  {
    code: 'A-P2',
    type: 'PhD',
    pillar: 'A',
    title: 'Do platforms moderate Nigerian-language content equally?',
    focus:
      'Run the matched-pair audit of removal rate and time to action for Nigerian-language and English content, and propose an appeal route.',
    streams: ['RS1'],
    agencies: ['NITDA', 'NCC'],
  },
  {
    code: 'A-P3',
    type: 'PhD',
    pillar: 'A',
    title: 'Online radicalisation pathways in northern Nigeria',
    focus:
      'Identify indicators that precede documented offline violence, using process tracing and network analysis under a restricted-access protocol.',
    streams: ['RS1'],
    agencies: ['ONSA'],
    note: 'Restricted-access data protocol; additional ethics clearance and safeguarding training apply.',
  },
  {
    code: 'A-P4',
    type: 'PhD',
    pillar: 'A',
    title: 'AI-generated content, deepfakes and financial and electoral integrity',
    focus:
      'Develop detection and provenance methods for synthetic media used in fraud and disinformation, and propose a labelling and liability regime.',
    streams: ['RS1', 'RS2'],
    agencies: ['NITDA', 'CBN', 'INEC'],
  },
  {
    code: 'A-P5',
    type: 'PhD',
    pillar: 'A',
    title: 'Children and harmful online content',
    focus:
      'Measure underage exposure, assess blocking and filtering, and propose a framework with parents and schools in northern Nigeria.',
    streams: ['RS5'],
    agencies: ['NITDA', 'Federal Ministry of Education'],
    note: 'Supervised jointly with the Pillar C child-safety work (C-P1). Child protection protocol applies.',
  },
  {
    code: 'A-D1',
    type: 'Postdoc',
    pillar: 'A',
    title: 'Election-period harmful speech early warning',
    focus:
      'Turn the 2027 election corpus into a repeatable monitoring method and a post-election review note for INEC.',
    streams: ['RS1'],
    agencies: ['INEC', 'NITDA'],
  },
  {
    code: 'A-D2',
    type: 'Postdoc',
    pillar: 'A',
    title: 'Content moderation governance for Nigeria',
    focus:
      'Lead the co-design workshops and draft the governance model, tested against the EU Digital Services Act and the UK Online Safety Act.',
    streams: ['RS1', 'RS6'],
    agencies: ['NITDA', 'NCC', 'FMCIDE'],
  },
  {
    code: 'A-D3',
    type: 'Postdoc',
    pillar: 'A',
    title: 'Digital literacy programme evaluation and safety toolkit',
    focus:
      'Run the matched comparison of exposed and unexposed schools and build the Month 30 toolkit in Hausa, Nigerian Pidgin and English.',
    streams: ['RS5'],
    agencies: ['UBEC', 'Federal Ministry of Education', 'NITDA'],
  },
  {
    code: 'A-D4',
    type: 'Postdoc',
    pillar: 'A',
    title: 'A Nigerian age assurance and online child safety standard',
    focus:
      'Turn the PhD work on age verification (C-P1) and child exposure (A-P5) into a technical specification and model regulations.',
    streams: ['RS4', 'RS5'],
    agencies: ['NDPC', 'NITDA'],
  },
  {
    code: 'A-D5',
    type: 'Postdoc',
    pillar: 'A',
    title: 'Gender norms and girls’ online safety',
    focus: 'Lead the focus groups in 20 schools and propose reporting routes that girls will use.',
    streams: ['RS5'],
    agencies: ['Federal Ministry of Women Affairs', 'UBEC'],
  },

  // ---------------- Pillar B ----------------
  {
    code: 'B-P1',
    type: 'PhD',
    pillar: 'B',
    title: 'Multimodal continuous authentication for trustworthy Nigerian FinTech',
    focus:
      'Combine biometric, behavioural and device signals into continuous authentication, and evaluate its security, usability and accessibility for agent banking and digital financial services.',
    streams: ['RS3'],
    agencies: ['CBN'],
  },
  {
    code: 'B-P2',
    type: 'PhD',
    pillar: 'B',
    title: 'Behavioural biometrics for continuous and risk-based authentication',
    focus:
      'Use swipe patterns, typing rhythm and device context to tell legitimate users from suspicious sessions, through a behavioural biometric prototype that stays usable.',
    streams: ['RS3'],
    agencies: ['CBN'],
  },
  {
    code: 'B-P3',
    type: 'PhD',
    pillar: 'B',
    title: 'Privacy-preserving behavioural and biometric authentication',
    focus:
      'Apply privacy by design and data minimisation to sensitive authentication data while keeping fraud-prevention capability.',
    streams: ['RS3'],
    agencies: ['CBN', 'NDPC'],
  },
  {
    code: 'B-P4',
    type: 'PhD',
    pillar: 'B',
    title: 'Offline-first authentication and self-sovereign identity for agent banking',
    focus:
      'Design and test secure offline credentials and identity verification on low-end Android phones in areas with intermittent connectivity.',
    streams: ['RS3'],
    agencies: ['CBN', 'NIMC'],
  },
  {
    code: 'B-P5',
    type: 'PhD',
    pillar: 'B',
    title: 'Inclusive and usable authentication for rural agents and underserved users',
    focus:
      'Run field studies on how literacy, connectivity and disability affect authentication, and turn the results into design recommendations for agent banking.',
    streams: ['RS3'],
    agencies: ['CBN'],
  },
  {
    code: 'B-P6',
    type: 'PhD',
    pillar: 'B',
    title: 'Adaptive governance and consumer safeguards in regulator-run sandboxes',
    focus:
      'Compare how regulator sandboxes admit innovation, and design safeguards that do not weaken consumer protection.',
    streams: ['RS6'],
    agencies: ['CBN', 'SEC', 'NITDA'],
  },
  {
    code: 'B-P7',
    type: 'PhD',
    pillar: 'B',
    title: 'Who enforces digital safety?',
    focus:
      'Map the mandates of NDPC, NITDA, NCC, CBN and FCCPC, find gaps and overlaps, and propose a coordination protocol.',
    streams: ['RS6'],
    agencies: ['FMCIDE', 'NDPC', 'NITDA', 'NCC', 'CBN', 'FCCPC'],
  },
  {
    code: 'B-D1',
    type: 'Postdoc',
    pillar: 'B',
    title: 'Trustworthy FinTech authentication integration',
    focus:
      'Integrate the findings of B-P1 to B-P5 into one secure, privacy-preserving authentication framework and validate it as a demonstrator.',
    streams: ['RS3'],
    agencies: ['CBN'],
  },
  {
    code: 'B-D2',
    type: 'Postdoc',
    pillar: 'B',
    title: 'Privacy engineering and secure digital identity',
    focus:
      'Build privacy-preserving aggregation, secure biometric processing and self-sovereign identity into the RS3 prototypes.',
    streams: ['RS3'],
    agencies: ['NDPC', 'NIMC'],
  },
  {
    code: 'B-D3',
    type: 'Postdoc',
    pillar: 'B',
    title: 'Offline zero-trust FinTech security',
    focus:
      'Develop and test secure offline transactions, cryptographic protection, device trust and account recovery for low-connectivity agent banking.',
    streams: ['RS3'],
    agencies: ['CBN'],
  },
  {
    code: 'B-D4',
    type: 'Postdoc',
    pillar: 'B',
    title: 'Cybersecurity prototyping and research testbed',
    focus:
      'Build reproducible testbeds, drawing on the Cyber360 environments, to evaluate the cluster’s authentication, privacy and FinTech security prototypes.',
    streams: ['RS3'],
    agencies: ['All pillars'],
  },
  {
    code: 'B-D5',
    type: 'Postdoc',
    pillar: 'B',
    title: 'Digital trust, regulatory innovation and authentication policy',
    focus:
      'Translate RS3 evidence into authentication standards and agent banking guidance, and examine how regulatory sandboxes can build in security, privacy and consumer safeguards.',
    streams: ['RS3', 'RS6'],
    agencies: ['CBN', 'NITDA'],
  },
  {
    code: 'B-D6',
    type: 'Postdoc',
    pillar: 'B',
    title: 'Regulatory interoperability: one consumer, many regulators',
    focus:
      'Map overlapping mandates across one digital consumer journey and propose a joint enforcement playbook.',
    streams: ['RS6'],
    agencies: ['CBN', 'NDPC', 'NITDA', 'NCC', 'FCCPC'],
  },

  // ---------------- Pillar C ----------------
  {
    code: 'C-P1',
    type: 'PhD',
    pillar: 'C',
    title: 'Privacy-preserving age verification for online platforms',
    focus:
      'Design age assurance that proves a user is an adult without revealing identity, using zero-knowledge proofs and selective disclosure, benchmarked against the UK Online Safety Act and EU practice.',
    streams: ['RS4', 'RS5'],
    agencies: ['NDPC', 'NITDA', 'National Orientation Agency'],
    note: 'Joint supervision with A-P5 and A-D4.',
  },
  {
    code: 'C-P3',
    type: 'PhD',
    pillar: 'C',
    title: 'Digital identity trust frameworks for financial inclusion',
    focus:
      'Examine how NIN, BVN and verifiable credentials can work together to widen financial inclusion without weakening privacy, and propose an assurance-level model for KYC rules.',
    streams: ['RS3', 'RS4'],
    agencies: ['CBN', 'NIMC', 'NITDA'],
  },
  {
    code: 'C-P4',
    type: 'PhD',
    pillar: 'C',
    title: 'Consumer protection in digital lending and buy-now-pay-later markets',
    focus:
      'Study predatory pricing, hidden fees, data misuse and debt harassment, and draft a conduct code with complaint and redress mechanisms.',
    streams: ['RS2'],
    agencies: ['CBN', 'FCCPC', 'NDPC'],
  },
  {
    code: 'C-P5',
    type: 'PhD',
    pillar: 'C',
    title: 'Data protection compliance costs for Nigerian SMEs and start-ups',
    focus:
      'Measure what NDPA compliance costs small firms, find where guidance is unclear, and design simplified toolkits and a tiered obligations model.',
    streams: ['RS4'],
    agencies: ['NDPC', 'NITDA'],
  },
  {
    code: 'C-P8',
    type: 'PhD',
    pillar: 'C',
    title: 'Fraud detection and consumer redress in mobile money and agency banking',
    focus:
      'Analyse fraud patterns in agent networks, including social engineering aimed at low-literacy users, and develop detection models and a standard refund and redress protocol.',
    streams: ['RS2'],
    agencies: ['CBN', 'NCC'],
  },
  {
    code: 'C-P9',
    type: 'PhD',
    pillar: 'C',
    title: 'Cross-border data flows and data localisation: a Nigerian policy model',
    focus:
      'Weigh the economic and security trade-offs of localisation against governed transfers, and propose an adequacy and certification model.',
    streams: ['RS4'],
    agencies: ['NDPC', 'NITDA'],
  },
  {
    code: 'C-P10',
    type: 'PhD',
    pillar: 'C',
    title: 'Trust in and adoption of digital payment channels',
    focus:
      'Use surveys and behavioural experiments in Kano, Jigawa and wider northern Nigeria to explain trust and distrust in digital payments, including central bank digital currency, and recommend inclusive design.',
    streams: ['RS2'],
    agencies: ['CBN', 'NITDA'],
  },
  {
    code: 'C-P12',
    type: 'PhD',
    pillar: 'C',
    title: 'Cybercrime intelligence sharing between regulators, banks and law enforcement',
    focus:
      'Design a lawful, privacy-respecting framework for sharing fraud indicators that reconciles data protection duties with security needs.',
    streams: ['RS4'],
    agencies: ['CBN', 'NDPC', 'NITDA', 'ONSA'],
  },
  {
    code: 'C-D3',
    type: 'Postdoc',
    pillar: 'C',
    title: 'NDPC enforcement analytics: complaints, breaches and deterrence',
    focus:
      'Analyse complaint and breach data with NDPC to measure enforcement effectiveness and recommend risk-based inspection priorities and penalty calibration.',
    streams: ['RS4'],
    agencies: ['NDPC'],
  },
  {
    code: 'C-D4',
    type: 'Postdoc',
    pillar: 'C',
    title: 'A consumer harm index for Nigerian digital markets',
    focus:
      'Build a repeatable index of consumer harm across digital lending, e-commerce and telecoms that regulators can share as an early-warning tool.',
    streams: ['RS2'],
    agencies: ['CBN', 'FCCPC', 'NDPC', 'NCC'],
  },
  {
    code: 'C-D5',
    type: 'Postdoc',
    pillar: 'C',
    title: 'Digital identity assurance for government services',
    focus:
      'Evaluate assurance levels across NIN, BVN and sectoral identities, and design a federated trust framework with redress when identity systems fail citizens.',
    streams: ['RS3', 'RS4'],
    agencies: ['NITDA', 'NIMC'],
  },
  {
    code: 'C-D6',
    type: 'Postdoc',
    pillar: 'C',
    title: 'Privacy-preserving analytics for financial intelligence',
    focus:
      'Develop federated learning, secure enclave and differential privacy methods that detect money laundering across institutions without centralising personal data.',
    streams: ['RS4'],
    agencies: ['NFIU', 'CBN', 'NDPC'],
  },
  {
    code: 'C-D7',
    type: 'Postdoc',
    pillar: 'C',
    title: 'Behavioural insights for online safety in low-literacy populations',
    focus:
      'Design and field-test warnings, defaults and local-language education that reduce exposure of children and vulnerable adults to scams and harmful content, with schools and community institutions.',
    streams: ['RS2', 'RS5'],
    agencies: ['NDPC', 'NITDA', 'UBEC'],
  },
]

/** Leicester hosts RS2, RS3, RS4 and RS6 visits; York St John hosts RS1, RS3, RS4 and RS5. */
export function ukHost(streams: StreamId[]): string {
  const LEI: StreamId[] = ['RS2', 'RS3', 'RS4', 'RS6']
  const YSJ: StreamId[] = ['RS1', 'RS3', 'RS4', 'RS5']
  const l = streams.some((s) => LEI.includes(s))
  const y = streams.some((s) => YSJ.includes(s))
  if (l && y) return 'University of Leicester or York St John University'
  if (l) return 'University of Leicester'
  if (y) return 'York St John University'
  return 'University of Leicester or York St John University'
}

export const TERMS = {
  PhD: {
    label: 'PhD studentship',
    places: 15,
    topics: 20,
    registration: 'Registered at Bayero University, Kano. Primary supervisor at a JV member, co-supervisor at another.',
    supervision: 'A thesis committee twice a year. No supervisor carries more than three funded candidates.',
    duration: 'Month 9 to Month 36. BUK continues supervision to completion afterwards, same supervisors.',
    funding: 'Stipend and research costs, a funded three-month UK stay, conference travel in Years 2 and 3, a place at the annual Research School.',
    ukStay: 'Three months at Leicester or York St John in Months 13 to 15, before the proposal defence.',
    outputs: 'A thesis, a conference paper by M24, a journal paper submitted by M33, one policy brief a year.',
    recruitment: 'Opens at inception, closes Month 9.',
    eligibility: [
      'A good Master’s degree in a relevant discipline, meeting BUK postgraduate admission requirements.',
      'Resident in Nigeria for fieldwork and analysis. Nigerian and international applicants both considered.',
      'A Nigerian core language (Hausa, Yoruba, Igbo or Nigerian Pidgin) is an advantage, and essential for language technology and fieldwork topics.',
      'At least 40 percent of places go to women.',
    ],
  },
  Postdoc: {
    label: 'Postdoctoral fellowship',
    places: 15,
    topics: 16,
    registration: 'Employed full time by BUK (8), ADUSTECH (3), FUT Babura (2) or Northwest (2).',
    supervision: 'A named mentor among the experts and a development plan reviewed each quarter.',
    duration: 'At least 24 months, from Month 6.',
    funding: 'A salaried fellowship, a funded three-month UK stay, a fellowship embedded in an MDA policy unit, conference travel, a place at the Research School.',
    ukStay: 'Three months at Leicester or York St John, most in Months 7 to 9.',
    outputs: 'Two working papers or datasets (M18 and M30), one policy brief a year.',
    recruitment: 'Opens at inception, closes Month 6.',
    eligibility: [
      'A PhD awarded, or submitted and awaiting examination, in a relevant discipline.',
      'A publication record appropriate to career stage, and the methods the topic needs.',
      'Willing to spend three months at the UK host and a period inside an MDA policy unit.',
      'At least 40 percent of places go to women.',
    ],
  },
} as const

export const SELECTION = [
  'The open call is published within a month of contract signature — here, on the Project BRIDGE programme site, and through each institution.',
  'Apply to a named topic, or propose a closely aligned one.',
  'The pillar’s supervisors shortlist, interview and select, keeping a ranked reserve list per topic.',
  'BUK School of Postgraduate Studies handles PhD admission; each university makes its own postdoctoral appointments.',
  'If a researcher leaves, the reserve list fills the place within two months.',
]

export const RECRUITMENT_POOL = [
  'HausaNLP',
  'Arewa Data Science Academy',
  'Masakhane',
  'Black in AI',
]

export const COHORT_ALLOCATION = [
  { institution: 'Bayero University, Kano', role: 'Registers all PhD candidates; employs postdocs; primary supervision', postdocs: '8', phds: '15 registered (8 primary)', streams: 'RS1, RS2, RS4, RS6' },
  { institution: 'Aliko Dangote University of Science and Technology, Wudil', role: 'Employs postdocs; primary supervision', postdocs: '3', phds: '3 primary', streams: 'RS2, RS3' },
  { institution: 'Federal University of Technology, Babura', role: 'Employs postdocs; primary supervision', postdocs: '2', phds: '2 primary', streams: 'RS3, RS5' },
  { institution: 'Northwest University, Kano', role: 'Employs postdocs; primary supervision', postdocs: '2', phds: '2 primary', streams: 'RS5, RS6' },
  { institution: 'University of Leicester', role: 'Hosts three-month research stays', postdocs: '8', phds: '7', streams: 'RS2, RS3, RS4, RS6' },
  { institution: 'York St John University', role: 'Hosts three-month research stays', postdocs: '7', phds: '8', streams: 'RS1, RS3, RS4, RS5' },
]

export const TRAINING = [
  { name: 'Cluster E research seminar', when: 'Monthly, Months 7 to 36 (30 seminars)', detail: 'Online, 60 minutes. Two cohort members present work in progress; a professor is discussant; open to the other clusters. Written feedback is recorded in each development plan.' },
  { name: 'Professorial public lectures', when: 'One per professor each year (27 in total)', detail: 'Held at the professor’s own institution, streamed and recorded. Audience of academics, students, MDA officials and the public.' },
  { name: 'Cluster E Research School', when: 'Annually, two weeks', detail: 'Residential, for the whole cohort plus 20 external places. Methods, data protection and policy writing.' },
  { name: 'National conference', when: 'Months 12, 24 and 34', detail: 'Abuja. Cohort posters and demonstrations, with findings presented to the MDAs that will use them.' },
  { name: 'Policy labs', when: 'Quarterly', detail: 'Closed sessions of about 25 people. Postdocs draft the brief. One brief and one decision each.' },
  { name: 'External conferences', when: 'Years 2 and 3', detail: 'Each cohort member presents at least one paper at a regional or international conference.' },
]
