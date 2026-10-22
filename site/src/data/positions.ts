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
  /** A short research abstract, written like the opening of a paper. */
  abstract?: string
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
    title: 'Beyond keywords: culturally grounded hate speech detection for nine Nigerian languages',
    focus:
      'Build detection models that handle code-switching, dialect variation and implicit, coded hate, with per-language error analysis at a fixed operating threshold. Extends AfriHate and HausaHate.',
    abstract:
      'Hate speech in Nigerian online spaces is rarely written as a list of slurs. It is code-switched between Hausa, Pidgin and English, carried by proverbs, nicknames and coded references to ethnicity and religion, and it changes around elections and local conflicts. Keyword filters and models trained on English miss most of it and wrongly flag ordinary speech. This project builds hate and abusive language detection for nine Nigerian languages that reads such content in context. It extends the AfriHate and HausaHate datasets with new annotation for implicit and coded hate, studies how cultural knowledge and dialect affect model errors, and compares multilingual and Africa-centred language models under realistic conditions. Every model is reported with per-language error analysis at a fixed operating threshold, so that NITDA and INEC can see where it can be trusted and where human review is still needed. The candidate will publish the datasets, models and evaluation protocol openly.',
    streams: ['RS1'],
    agencies: ['NITDA', 'INEC'],
  },
  {
    code: 'A-P2',
    type: 'PhD',
    pillar: 'A',
    title: 'From polarisation to violence: modelling escalation in Nigerian online discourse',
    focus:
      'Detect polarising, dehumanising and extremist narratives across Nigerian languages, and test which online signals come before documented offline violence, using network analysis and process tracing under a restricted-access protocol. Builds on POLAR.',
    abstract:
      'Online polarisation does not always end in violence, but violence in Nigeria is often preceded by a visible hardening of online talk: us-versus-them framing, dehumanising language and calls to act. This project asks which of these signals can be measured reliably in Nigerian languages, and which of them come before documented offline incidents. Building on POLAR, the multilingual polarisation benchmark, the candidate will model polarising, dehumanising and extremist narratives in Hausa, Nigerian Pidgin and English, trace how they spread through networks of accounts and channels, and align them in time with incident records. Process tracing on selected cases will test whether the signals are causes, symptoms or noise. All work runs under a restricted-access protocol approved by the ethics committee, and no data that could identify individuals is released. The output is an evidence-based risk framework for ONSA and NITDA that separates genuine early warning from ordinary political disagreement.',
    streams: ['RS1'],
    agencies: ['ONSA', 'NITDA'],
    note: 'Restricted-access data protocol; additional ethics clearance and safeguarding training apply.',
  },
  {
    code: 'A-P3',
    type: 'PhD',
    pillar: 'A',
    title: 'Safe in English, unsafe in Hausa? Red-teaming large language models for Nigerian languages',
    focus:
      'Build culturally grounded safety benchmarks and red-teaming protocols for Hausa, Yoruba, Igbo and Nigerian Pidgin; measure harmful generation, refusal failures and cross-lingual safety gaps in widely used chatbots; and test mitigations.',
    abstract:
      'Millions of Nigerians now use chatbots built on large language models, often in their own languages. These models are made safe mainly through English data, and early evidence suggests that a request a model refuses in English may be answered in a low-resource language. This project measures that gap for Hausa, Yoruba, Igbo and Nigerian Pidgin. The candidate will build culturally grounded safety benchmarks with native speakers, covering harms that matter locally, such as ethnic and religious incitement, scams, health misinformation and harms to children. Community red-teaming will be used to find failures that translated English benchmarks miss. Widely used models will be evaluated for harmful generation, over-refusal and inconsistency across languages, and the project will test mitigations such as multilingual safety tuning and language-aware guardrails. The results give NITDA and NCC evidence for guidance on generative AI in Nigeria, and give developers an open benchmark to test against.',
    streams: ['RS1'],
    agencies: ['NITDA', 'NCC'],
  },
  {
    code: 'A-P4',
    type: 'PhD',
    pillar: 'A',
    title: 'Who said that? Detecting synthetic speech, text and video in low-resource languages',
    focus:
      'Develop detection and provenance methods for deepfakes and machine-generated content used in fraud and election disinformation, and propose a labelling and liability regime.',
    abstract:
      'Cloned voices that impersonate relatives or bank staff, fake audio of politicians and machine-written news in Hausa are now cheap to produce. Detection tools are trained almost entirely on English and on well-resourced voices, so they fail on Nigerian languages and accents. This project builds a Nigerian benchmark of synthetic speech, text and video in the five core languages, and develops detection and provenance methods that work on low-end phones and short, noisy clips. It builds on earlier work that detected machine-generated Hausa news with high accuracy, and extends it to audio and video. The candidate will study how synthetic media is used in fraud and in election disinformation, test how well current detectors and watermarking schemes transfer to Nigerian languages, and set out a labelling and liability regime that NITDA, CBN and INEC could adopt.',
    streams: ['RS1', 'RS5'],
    agencies: ['NITDA', 'CBN', 'INEC'],
  },
  {
    code: 'A-P5',
    type: 'PhD',
    pillar: 'A',
    title: 'What children see online: measuring and reducing exposure to harmful content in northern Nigeria',
    focus:
      'Measure underage exposure, test blocking and filtering, and propose a framework with parents and schools in northern Nigeria.',
    abstract:
      'Children in northern Nigeria are going online through shared and second-hand phones, often without parental controls or age checks, and there is almost no data on what they see. This project measures it. Working with schools, parents and the cluster’s youth survey of 2,000 students, the candidate will estimate how often children meet violent, sexual, hateful and scam content, on which platforms and in which languages. The project will then test whether blocking, filtering and age-appropriate settings work on the devices and networks children actually use. The findings feed a practical framework for parents and schools and evidence for NITDA and the Federal Ministry of Education. The work follows a strict child protection protocol and is supervised jointly with the cluster’s age assurance research.',
    streams: ['RS2'],
    agencies: ['NITDA', 'Federal Ministry of Education'],
    note: 'Supervised jointly with the Pillar C child-safety work (C-P1). Child protection protocol applies.',
  },
  {
    code: 'A-D1',
    type: 'Postdoc',
    pillar: 'A',
    title: 'Early warning at election time: a repeatable pipeline for monitoring harmful speech',
    focus:
      'Turn the 2027 election archive and the off-cycle governorship elections into a monitoring method that INEC can rerun, with a post-election review note.',
    abstract:
      'Each Nigerian election produces a surge of hateful and misleading content, but every monitoring effort so far has been built from scratch and then lost. This fellowship turns the cluster’s 2027 election archive into a repeatable pipeline that INEC and its partners can run again. The fellow will design the collection, annotation and detection steps so that they work across the four core Nigerian languages, test the pipeline on the off-cycle governorship elections, and measure how early it can flag rising harm and how many false alarms it raises. The deliverables are an open, documented monitoring method, a post-election review note for INEC, and a playbook for the next general election cycle.',
    streams: ['RS1'],
    agencies: ['INEC', 'NITDA'],
  },
  {
    code: 'A-D2',
    type: 'Postdoc',
    pillar: 'A',
    title: 'Equal moderation? Auditing platforms and designing content governance for Nigerian languages',
    focus:
      'Run the matched-pair audit of removal rate and time to action for Nigerian-language and English content, then lead the co-design workshops and draft the governance model, tested against the EU Digital Services Act and the UK Online Safety Act.',
    abstract:
      'Platforms say their rules apply equally in every language. This fellowship tests that claim for Nigeria. The fellow will run a pre-registered, matched-pair audit: comparable hateful items in Hausa, Yoruba, Igbo, Nigerian Pidgin and English are reported through the platforms’ own channels, and the study compares how often and how fast each is removed. The evidence then goes into co-design workshops with NITDA, NCC and civil society. The fellow will draft a content moderation governance model for Nigeria, setting out what platforms should be required to do, report and fix, and test it against the EU Digital Services Act and the UK Online Safety Act.',
    streams: ['RS1', 'RS4'],
    agencies: ['NITDA', 'NCC', 'FMCIDE'],
  },
  {
    code: 'A-D3',
    type: 'Postdoc',
    pillar: 'A',
    title: 'Does digital literacy work? Evaluating school programmes and co-designing a multilingual safety toolkit',
    focus:
      'Run the matched comparison of exposed and unexposed schools and build the Month 30 toolkit with students and teachers in Hausa, Yoruba, Igbo, Nigerian Pidgin and English.',
    abstract:
      'Nigeria funds digital literacy programmes in schools, but there is little evidence on whether they make students safer online. This fellowship evaluates them. Using the cluster’s youth survey, the fellow will compare schools that have received UBEC and NITDA programmes with similar schools that have not, and measure differences in risky behaviour, harm and reporting. The fellow will then co-design a safety toolkit with students and teachers in Hausa, Yoruba, Igbo, Nigerian Pidgin and English, test it in classrooms, and turn the results into curriculum recommendations for the Federal Ministry of Education.',
    streams: ['RS2'],
    agencies: ['UBEC', 'Federal Ministry of Education', 'NITDA'],
  },
  {
    code: 'A-D4',
    type: 'Postdoc',
    pillar: 'A',
    title: 'Proving age without revealing identity: a Nigerian age assurance and child safety standard',
    focus:
      'Turn the PhD work on age verification (C-P1) and child exposure (A-P5) into a technical specification and model regulations.',
    abstract:
      'Keeping children away from harmful content usually means asking everyone to prove their age, which can expose personal data and shut out people without formal identity documents. This fellowship designs a better route for Nigeria. Building on the cluster’s PhD work on privacy-preserving age verification and on children’s exposure, the fellow will set out a technical specification for age assurance that proves a user is old enough without revealing who they are, works on low-end devices, and fits the Nigeria Data Protection Act. The specification is paired with model regulations for NDPC and NITDA, benchmarked against the UK and EU approaches.',
    streams: ['RS2', 'RS6'],
    agencies: ['NDPC', 'NITDA'],
  },
  {
    code: 'A-D5',
    type: 'Postdoc',
    pillar: 'A',
    title: 'Online violence against women and girls: detection and reporting routes in Nigerian languages',
    focus:
      'Detect gendered abuse using AfriHate and BRIGHTER emotion signals, lead the focus groups in 20 schools, and design reporting routes that girls and women will use.',
    abstract:
      'Women and girls in Nigeria face online abuse that is often sexualised, shaming or threatening, and it is usually written in local languages that moderation systems do not read well. Many never report it, because reporting routes are unknown, unsafe or useless. This fellowship tackles both problems. The fellow will build detection for gendered abuse in Nigerian languages, using AfriHate and the emotion signals in BRIGHTER to separate abuse from ordinary conflict. In parallel, the fellow will lead focus groups with girls and boys in 20 schools to learn what they experience and why they do or do not report. The output is evidence and a set of reporting routes, designed with girls and women, for the Federal Ministry of Women Affairs and UBEC.',
    streams: ['RS2'],
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
    streams: ['RS4'],
    agencies: ['CBN', 'SEC', 'NITDA'],
  },
  {
    code: 'B-P7',
    type: 'PhD',
    pillar: 'B',
    title: 'Who enforces digital safety?',
    focus:
      'Map the mandates of NDPC, NITDA, NCC, CBN and FCCPC, find gaps and overlaps, and propose a coordination protocol.',
    streams: ['RS4'],
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
    streams: ['RS3', 'RS4'],
    agencies: ['CBN', 'NITDA'],
  },
  {
    code: 'B-D6',
    type: 'Postdoc',
    pillar: 'B',
    title: 'Regulatory interoperability: one consumer, many regulators',
    focus:
      'Map overlapping mandates across one digital consumer journey and propose a joint enforcement playbook.',
    streams: ['RS4'],
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
    streams: ['RS2', 'RS6'],
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
    streams: ['RS3', 'RS6'],
    agencies: ['CBN', 'NIMC', 'NITDA'],
  },
  {
    code: 'C-P4',
    type: 'PhD',
    pillar: 'C',
    title: 'Consumer protection in digital lending and buy-now-pay-later markets',
    focus:
      'Study predatory pricing, hidden fees, data misuse and debt harassment, and draft a conduct code with complaint and redress mechanisms.',
    streams: ['RS5'],
    agencies: ['CBN', 'FCCPC', 'NDPC'],
  },
  {
    code: 'C-P5',
    type: 'PhD',
    pillar: 'C',
    title: 'Data protection compliance costs for Nigerian SMEs and start-ups',
    focus:
      'Measure what NDPA compliance costs small firms, find where guidance is unclear, and design simplified toolkits and a tiered obligations model.',
    streams: ['RS6'],
    agencies: ['NDPC', 'NITDA'],
  },
  {
    code: 'C-P8',
    type: 'PhD',
    pillar: 'C',
    title: 'Fraud detection and consumer redress in mobile money and agency banking',
    focus:
      'Analyse fraud patterns in agent networks, including social engineering aimed at low-literacy users, and develop detection models and a standard refund and redress protocol.',
    streams: ['RS5'],
    agencies: ['CBN', 'NCC'],
  },
  {
    code: 'C-P9',
    type: 'PhD',
    pillar: 'C',
    title: 'Cross-border data flows and data localisation: a Nigerian policy model',
    focus:
      'Weigh the economic and security trade-offs of localisation against governed transfers, and propose an adequacy and certification model.',
    streams: ['RS6'],
    agencies: ['NDPC', 'NITDA'],
  },
  {
    code: 'C-P10',
    type: 'PhD',
    pillar: 'C',
    title: 'Trust in and adoption of digital payment channels',
    focus:
      'Use surveys and behavioural experiments in Kano, Jigawa and wider northern Nigeria to explain trust and distrust in digital payments, including central bank digital currency, and recommend inclusive design.',
    streams: ['RS5'],
    agencies: ['CBN', 'NITDA'],
  },
  {
    code: 'C-P12',
    type: 'PhD',
    pillar: 'C',
    title: 'Cybercrime intelligence sharing between regulators, banks and law enforcement',
    focus:
      'Design a lawful, privacy-respecting framework for sharing fraud indicators that reconciles data protection duties with security needs.',
    streams: ['RS6'],
    agencies: ['CBN', 'NDPC', 'NITDA', 'ONSA'],
  },
  {
    code: 'C-D3',
    type: 'Postdoc',
    pillar: 'C',
    title: 'NDPC enforcement analytics: complaints, breaches and deterrence',
    focus:
      'Analyse complaint and breach data with NDPC to measure enforcement effectiveness and recommend risk-based inspection priorities and penalty calibration.',
    streams: ['RS6'],
    agencies: ['NDPC'],
  },
  {
    code: 'C-D4',
    type: 'Postdoc',
    pillar: 'C',
    title: 'A consumer harm index for Nigerian digital markets',
    focus:
      'Build a repeatable index of consumer harm across digital lending, e-commerce and telecoms that regulators can share as an early-warning tool.',
    streams: ['RS5'],
    agencies: ['CBN', 'FCCPC', 'NDPC', 'NCC'],
  },
  {
    code: 'C-D5',
    type: 'Postdoc',
    pillar: 'C',
    title: 'Digital identity assurance for government services',
    focus:
      'Evaluate assurance levels across NIN, BVN and sectoral identities, and design a federated trust framework with redress when identity systems fail citizens.',
    streams: ['RS3', 'RS6'],
    agencies: ['NITDA', 'NIMC'],
  },
  {
    code: 'C-D6',
    type: 'Postdoc',
    pillar: 'C',
    title: 'Privacy-preserving analytics for financial intelligence',
    focus:
      'Develop federated learning, secure enclave and differential privacy methods that detect money laundering across institutions without centralising personal data.',
    streams: ['RS6'],
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

/** Leicester hosts RS3, RS4, RS5 and RS6 visits; York St John hosts RS1, RS2, RS3 and RS6. */
export function ukHost(streams: StreamId[]): string {
  const LEI: StreamId[] = ['RS3', 'RS4', 'RS5', 'RS6']
  const YSJ: StreamId[] = ['RS1', 'RS2', 'RS3', 'RS6']
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
    registration: 'Registered at one of the four Nigerian universities in the joint venture, where the primary supervisor works; co-supervisor at another member or a UK host.',
    supervision: 'A thesis committee twice a year. No supervisor carries more than three funded candidates.',
    duration: 'Month 9 to Month 36. BUK continues supervision to completion afterwards, same supervisors.',
    funding: 'Stipend and research costs, a funded three-month UK stay, one international conference presentation, a place at the annual Research School.',
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
    registration: 'Employed full time by one of the four Nigerian universities in the joint venture.',
    supervision: 'A named mentor among the experts and a development plan reviewed each quarter.',
    duration: 'Nine posts from Month 7 (30 months); six from Month 13 (24 months).',
    funding: 'A salaried fellowship, a fellowship embedded in an MDA policy unit, a presentation at a Nigerian conference, a place at the Research School.',
    ukStay: 'None. Postdocs work with their UK co-supervisors online and during the professors\u2019 visits to Nigeria.',
    outputs: 'Two working papers or datasets (the first within twelve months of starting, the second by M30), one policy brief a year.',
    recruitment: 'Opens at inception, closes Month 6.',
    eligibility: [
      'A PhD awarded, or submitted and awaiting examination, in a relevant discipline.',
      'A publication record appropriate to career stage, and the methods the topic needs.',
      'Willing to spend a period inside an MDA policy unit.',
      'At least 40 percent of places go to women.',
    ],
  },
} as const

export const SELECTION = [
  'We publish the open call within a month of signing the contract. It appears here, on the Project BRIDGE programme site, and through each institution.',
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
  { institution: 'Bayero University, Kano', role: 'Registers PhD candidates; employs postdocs; primary supervision', postdocs: '8', phds: '8', streams: 'RS1, RS4, RS5, RS6' },
  { institution: 'Aliko Dangote University of Science and Technology, Wudil', role: 'Registers PhD candidates; employs postdocs; primary supervision', postdocs: '3', phds: '3', streams: 'RS3, RS5' },
  { institution: 'Federal University of Technology, Babura', role: 'Registers PhD candidates; employs postdocs; primary supervision', postdocs: '2', phds: '2', streams: 'RS2, RS3' },
  { institution: 'Northwest University, Kano', role: 'Registers PhD candidates; employs postdocs; primary supervision', postdocs: '2', phds: '2', streams: 'RS2, RS4' },
  { institution: 'University of Leicester', role: 'Hosts three-month research stays for PhD candidates', postdocs: '', phds: '7', streams: 'RS3, RS4, RS5, RS6' },
  { institution: 'York St John University', role: 'Hosts three-month research stays for PhD candidates', postdocs: '', phds: '8', streams: 'RS1, RS2, RS3, RS6' },
]

export const TRAINING = [
  { name: 'Cluster E research seminar', when: 'Monthly, Months 7 to 36 (30 seminars)', detail: 'Online, 60 minutes. Two cohort members present work in progress; a professor is discussant; open to the other clusters. Written feedback is recorded in each development plan.' },
  { name: 'Professorial public lectures', when: 'One per professor each year (27 in total)', detail: 'Held at the professor’s own institution, streamed and recorded. Audience of academics, students, MDA officials and the public.' },
  { name: 'Cluster E Research School', when: 'Annually, two weeks', detail: 'Residential, for the whole cohort plus 20 external places. Methods, data protection and policy writing.' },
  { name: 'National conference', when: 'Months 12, 24 and 34', detail: 'Abuja. Cohort posters and demonstrations, with findings presented to the MDAs that will use them.' },
  { name: 'Policy labs', when: 'Quarterly', detail: 'Closed sessions of about 25 people. Postdocs draft the brief. One brief and one decision each.' },
  { name: 'External conferences', when: 'Years 2 and 3', detail: 'Each cohort member presents at least one paper at a regional or international conference.' },
]
