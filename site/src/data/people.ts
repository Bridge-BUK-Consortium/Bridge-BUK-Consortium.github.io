export type Person = {
  code: string
  name: string
  institution: string
  group: 'Key Expert' | 'Professorial Lead' | 'Non-Key Expert' | 'UK Professorial Lead' | 'Research Staff'
  title: string
  /** Abridged line shown on the card. The full `role` and `bio` live in the modal. */
  summary: string
  role: string
  months?: number
  bio?: string
  /** File in public/team/. Members without one get an initials tile. */
  photo?: string
}

export const PEOPLE: Person[] = [
  {
    code: 'K-1',
    name: 'Dr. Shamsuddeen Hassan Muhammad',
    photo: 'team/shamsuddeen.jpg',
    institution: 'Bayero University, Kano',
    group: 'Key Expert',
    title: 'Team Lead, and leads Pillar A',
    summary:
      'Leads the cluster and Pillar A, and is accountable for every deliverable.',
    role: 'Accountable for all deliverables; leads Pillar A (Online Harms and Online Safety): RS1 and RS2; chairs the pillar leads’ meeting; principal interface with the Client.',
    months: 15,
    bio: 'Senior Lecturer in the Department of Software Engineering and the authorised representative of the joint venture. Principal investigator on AfriHate and NaijaSenti, and on the NaijaHate award from the National AI Research Scheme.',
  },
  {
    code: 'K-2',
    name: 'Assoc. Prof. Aminu Bello Usman',
    photo: 'team/aminu.jpg',
    institution: 'York St John University',
    group: 'Key Expert',
    title: 'Senior Research Specialist, and leads Pillar B',
    summary:
      'Leads Pillar B and owns information security, ethics and the MDA training programme.',
    role: 'Leads Pillar B (Trust): RS3 and RS4; information security and ethics owner; leads the MDA training programme; contributes Cyber360 and deepfake awareness materials to the RS2 digital literacy evaluation.',
    months: 6.25,
    bio: 'Director of the Cybersecurity Research Group at York St John, working on trust-based systems, data privacy and biometric security.',
  },
  {
    code: 'K-3',
    name: 'Dr. Muhammad Shehu Abubakar-Sadiq',
    photo: 'team/shehu.jpg',
    institution: 'University of Leicester',
    group: 'Key Expert',
    title: 'Senior Research Specialist, and leads Pillar C',
    summary:
      'Leads Pillar C and co-leads the self-sovereign identity work in RS3.',
    role: 'Leads Pillar C (Consumer and Data Protection): RS5 and RS6; co-leads RS3 with K-2 on the self-sovereign identity module; Leicester visit coordinator with Prof. Anjum.',
    months: 7.25,
    bio: 'Teaching Fellow in Cyber Security in the School of Computing and Mathematical Sciences at Leicester. Works on self-sovereign identity, GDPR-compliant privacy systems and fraud prevention, with links to the Surrey Centre for Cyber Security (DECaDE) and INESC TEC Porto.',
  },
  {
    code: 'K-4',
    name: 'Assoc. Prof. Khalid Haruna',
    photo: 'team/khalid.jpg',
    institution: 'Federal University of Technology, Babura',
    group: 'Key Expert',
    title: 'Data and Analytics Specialist, and deputy Team Lead',
    summary:
      'Leads data and analytics for all six streams, and the annual Research School.',
    role: 'Data management plan; survey design; dataset curation; results measurement; leads the annual Research School; supervises the Babura cohort.',
    months: 9,
    bio: 'Associate Professor of data science and analytics, and FUT Babura’s named senior academic. Leads the Data and Analytics function serving all six streams.',
  },
  {
    code: 'K-5',
    name: 'Maryam Ibrahim Mukhtar',
    photo: 'team/maryam.jpg',
    institution: 'Bayero University, Kano',
    group: 'Key Expert',
    title: 'Project Administrator',
    summary:
      'Runs the workplan, the finances and the thirty-strong cohort register.',
    role: 'Workplan and deliverable tracking; financial reporting; cohort administration and the cohort register; PIU liaison; coordinates cohort recruitment.',
    months: 18,
    bio: 'Lecturer I at BUK since 2014 and project manager on ten funded research awards since 2021.',
  },
  {
    code: 'N-1',
    name: 'Prof. Muhammad Yahuza Bello',
    photo: 'team/yahuza.jpg',
    institution: 'Bayero University, Kano',
    group: 'Professorial Lead',
    title: 'Professorial Lead, and chairs the Quality Panel',
    summary:
      'Former Vice Chancellor of BUK. Chairs the Quality Panel and the annual cohort review.',
    role: 'Academic leadership and quality assurance; chairs the Quality Panel that reviews every deliverable; chairs the annual review of cohort progress for all thirty researchers; leads the Mid-Term Review and Final Report with the Team Lead.',
    months: 4.5,
    bio: 'Tenth Vice Chancellor of Bayero University, Kano (2015 to 2020), after serving as Head of Mathematical Sciences, Dean of Science, Director of Information Technology, Dean of Postgraduate Studies and Deputy Vice Chancellor (Academics). PhD in Mathematics, University of Arkansas. Founded the study of Computer Science at BUK in 1990, now a Faculty with more than 1,500 graduates. Research in artificial intelligence.',
  },
  {
    code: 'N-2',
    name: 'Prof. Bashir Shehu Galadanci',
    photo: 'team/bashir.jpg',
    institution: 'Bayero University, Kano',
    group: 'Non-Key Expert',
    title: 'Policy and governance lead, and co-leads RS4',
    summary:
      'Leads the cluster’s policy work and edits all eighteen policy briefs.',
    role: 'Drafts the Policy Engagement Plan; edits all 18 policy briefs; co-leads RS4; co-leads the annual training for MDA officials; chairs the policy programme of the annual national conference.',
    months: 5.75,
    bio: 'Professor of Software Engineering at BUK and first Dean of its Faculty of Computer Science and Information Technology. Former Kano State Commissioner for Science and Technology and Special Adviser to the Governor on Education and ICT. Sat on the federal Telecommunications Sector Reform Steering and Implementation Committee and served TETFund on the National Research Fund.',
  },
  {
    code: 'N-3',
    name: 'Dr. Ibrahim Said Ahmad',
    photo: 'team/ibrahim.jpg',
    institution: 'Bayero University, Kano',
    group: 'Non-Key Expert',
    title: 'Dataset and annotation lead',
    summary:
      'Leads datasets and annotation across every stream.',
    role: 'Dataset and annotation lead for all streams (AfriHate, NaijaSenti, BRIGHTER); RS5 phishing corpus co-lead; deputises K-4 for datasets.',
  },
  {
    code: 'N-4',
    name: 'Assoc. Prof. Abdulrauf Garba Sharifai',
    institution: 'Northwest University, Kano',
    group: 'Non-Key Expert',
    title: 'RS5 co-lead',
    summary:
      'Deep learning for phishing and intrusion detection; co-leads RS5.',
    role: 'Deep learning for phishing and intrusion detection; RS5 co-lead; Northwest cohort supervisor.',
  },
  {
    code: 'N-5',
    name: 'Prof. Salisu Mamman Abdulrahman',
    photo: 'team/salisu.jpg',
    institution: 'Aliko Dangote University of Science and Technology, Wudil',
    group: 'Non-Key Expert',
    title: 'ADUSTECH’s named professor, and co-leads RS4',
    summary:
      'ADUSTECH’s named professor; co-leads RS4 and leads the Wudil cohort.',
    role: 'Machine learning for RS3 and RS5; co-leads RS4; leads the Wudil cohort of three postdocs and three PhD candidates and mentors its postdocs; reviews Wudil outputs before the Quality Panel.',
    months: 8,
  },
  {
    code: 'N-6',
    name: 'Dr. Hadiza Ali Umar',
    photo: 'team/hadiza.jpg',
    institution: 'Bayero University, Kano',
    group: 'Non-Key Expert',
    title: 'RS6 survey co-lead',
    summary:
      'Data analytics and AI policy; co-leads the RS6 survey.',
    role: 'Data analytics and AI policy; RS6 survey co-lead; deputises K-4 for surveys.',
  },
  {
    code: 'N-7',
    name: 'Dr. Jaafar Zubairu Maitama',
    photo: 'team/jaafar.jpg',
    institution: 'Bayero University, Kano',
    group: 'Non-Key Expert',
    title: 'RS1 co-lead',
    summary:
      'NLP and predictive modelling; co-leads RS1 and builds the data pipelines.',
    role: 'NLP and predictive modelling; RS1 co-lead; data pipelines; deputises K-1 for RS1.',
  },
  {
    code: 'N-8',
    name: 'Dr. Saratu Yusuf Ilu',
    photo: 'team/saratu.jpg',
    institution: 'Bayero University, Kano',
    group: 'Non-Key Expert',
    title: 'Cross-Cluster Focal Point',
    summary:
      'Cross-Cluster Focal Point, leading the synthesis inputs to the other clusters.',
    role: 'Software engineering; leads the cross-cluster synthesis inputs (D-6).',
  },
  {
    code: 'N-9',
    name: 'Dr. Saminu Aliyu Kiri',
    photo: 'team/saminu.jpg',
    institution: 'Bayero University, Kano',
    group: 'Non-Key Expert',
    title: 'Research administration support',
    summary:
      'Research administration and finance liaison across the joint venture.',
    role: 'Research administration; finance liaison with the joint venture partners; deputises K-5.',
  },
  {
    code: 'N-10',
    name: 'Sanah Abdullah Muaz',
    photo: 'team/sanah.jpg',
    institution: 'Bayero University, Kano',
    group: 'Non-Key Expert',
    title: 'Annotation lead',
    summary:
      'Deep learning and sentiment analysis; leads the annotation teams.',
    role: 'Deep learning and sentiment analysis; annotation lead.',
  },
  {
    code: 'N-11',
    name: 'Prof. Muhammad Nuruddeen',
    institution: 'Bayero University, Kano, Department of Public Law',
    group: 'Non-Key Expert',
    title: 'Legal and regulatory analyst, and co-leads RS4 and RS6',
    summary:
      'Professor of ICT Law. Drafts the model regulatory code and leads the NDPA enforcement audit.',
    role: 'Codes the NDPA Enforcement Case Tracker; leads the comparative analysis of the EU, UK, Kenya, India and South Africa; drafts the model regulatory code; writes the FCCPC and CBN regulatory gap analysis; tests the moderation governance model against the EU Digital Services Act and the UK Online Safety Act.',
    months: 5,
    bio: 'Professor of ICT Law, Head of the Department of Public Law from 2021 to 2025, and coordinator of the LLM in ICT Law since 2019. PhD on e-commerce and consumer protection law, Universiti Utara Malaysia. Two years of legislative drafting at the Kano State House of Assembly.',
  },
  {
    code: 'N-12',
    name: 'Dr. Baffa Kabiru Gwadabe',
    institution: 'Bayero University, Kano',
    group: 'Non-Key Expert',
    title: 'Social scientist, and co-leads RS2',
    summary:
      'The cluster’s economist. Designs and runs all three large national surveys.',
    role: 'Designs and pilots the three large surveys with K-4; designs the discrete choice experiment and usability protocol for the RS3 agent study; runs the focus group and interview programmes in RS1, RS2, RS4 and RS5; trains the enumerators.',
    months: 5,
    bio: 'Senior Lecturer in Economics with a PhD from Ahmadu Bello University, Zaria. Fieldwork in northern Nigeria for the Sasakawa Africa Association, USAID Markets II, an ILO study of Nigeria’s micro pension scheme, and research on learning poverty in Kaduna State.',
  },
  {
    code: 'N-13',
    name: 'Prof. Ishola Dada Muraina',
    institution: 'Northwest University, Kano, Faculty of Computing',
    group: 'Non-Key Expert',
    title: 'Northwest’s named professor, and co-leads RS5',
    summary:
      'Northwest’s named professor; co-leads RS5 and links it to the NCC.',
    role: 'Co-leads RS5 with K-3 and Assoc. Prof. Sharifai; leads the Northwest cohort of two postdocs and two PhD candidates; reviews Northwest’s RS2, RS4 and RS5 outputs; links RS5 to the Nigerian Communications Commission.',
    months: 10,
    bio: 'Professor in the Department of Information and Communication Technology and Director of ICT since 2022. PhD in Information Technology, Universiti Utara Malaysia. Leads an NCC grant on real-time analytics for telecommunications quality of service and a TETFund institution-based research grant.',
  },
  {
    code: 'N-14',
    name: 'Prof. Ashiq Anjum',
    institution: 'University of Leicester',
    group: 'UK Professorial Lead',
    title: 'Leicester’s professorial lead',
    summary:
      'Leicester’s professorial lead and academic host for seven visiting PhD candidates.',
    role: 'Academic host and co-supervisor for the seven PhD candidates visiting Leicester; advises Pillar C on scaling the RS5 fraud detection API and on federated learning where data cannot leave a regulator or bank; reviews visit outputs; represents Leicester on the Consortium Steering Committee.',
    months: 2,
    bio: 'Professor of Distributed Systems and Director of Enterprise and Impact in the School of Computing and Mathematical Sciences. Leads two EPSRC projects on AI-driven digital twins, is AI lead for METEOR at Space Park Leicester, and has worked for twenty years with CERN on distributed analytics for the Large Hadron Collider.',
  },
  {
    code: 'N-15',
    name: 'Prof. Theocharis Kyriacou',
    institution: 'York St John University',
    group: 'UK Professorial Lead',
    title: 'York St John’s professorial lead',
    summary:
      'York St John’s professorial lead and academic host for eight visiting PhD candidates.',
    role: 'Academic host and co-supervisor for the eight PhD candidates visiting York St John; advises RS1 on explainable detection models and RS2 on the digital literacy curriculum recommendations; reviews visit outputs.',
    months: 3,
    bio: 'Professor of Artificial Intelligence since 2026, after joining York St John in 2025. Previously eighteen years at Keele University, rising to Reader, with posts as Interim Head of School and Director of Education. Senior Fellow of the Higher Education Academy. Principal Investigator of GivEducation projects on AI tools for curriculum design in schools and of a Knowledge Transfer Partnership with Bentley Motors; has taken four doctoral candidates to completion as primary supervisor.',
  },
  {
    code: 'S-1',
    name: 'Dr. Idris Abdulmumin',
    institution: 'HausaNLP',
    group: 'Research Staff',
    title: 'Research Engineer',
    summary:
      'Builds and runs the data, training and evaluation pipelines behind the cluster’s language models and datasets.',
    role: 'Research Engineer for Pillar A and the Data and Analytics function: builds and maintains the annotation, model training and evaluation pipelines for RS1 and RS2; prepares datasets and models for release with K-4; supports the postdoctoral researchers and PhD candidates on reproducible code.',
    bio: 'Natural language processing researcher and member of HausaNLP. Co-author of AfriHate (NAACL 2025) and AfriSenti (EMNLP 2023), two of the datasets the cluster builds on.',
  },
]

export const INSTITUTIONS = [
  {
    name: 'Bayero University, Kano',
    short: 'BUK',
    country: 'Nigeria',
    role: 'Lead JV partner',
    focus: 'Online harms, NLP, AI safety, hate speech detection, programme management',
    detail:
      'Federal university, 1977. Hosts the National Cybersecurity Centre (NITDA, 2025) and the NCC Centre of Excellence. Home of HausaNLP and the Arewa Data Science Academy. Grants from the Lacuna Fund, Google Research, Oracle, Wellcome Trust and the National AI Research Scheme.',
    postdocs: 8,
    phds: '8 registered',
    streams: 'RS1, RS4, RS5, RS6',
    url: 'https://www.buk.edu.ng',
  },
  {
    name: 'Aliko Dangote University of Science and Technology, Wudil',
    short: 'ADUSTECH',
    country: 'Nigeria',
    role: 'JV partner',
    focus: 'AI, machine learning, data-driven systems',
    detail:
      'Kano State university 40 km from BUK, shortlisted as Kano University of Science and Technology. Doctoral and MSc programmes in AI and data science; 200 workstations across four laboratories, plus embedded network and hardware labs.',
    postdocs: 3,
    phds: '3 registered',
    streams: 'RS3, RS5',
    url: 'https://www.adustech.edu.ng',
  },
  {
    name: 'Federal University of Technology, Babura',
    short: 'FUT Babura',
    country: 'Nigeria',
    role: 'JV partner',
    focus: 'Recommender systems, data analytics, cybersecurity',
    detail:
      'New federal university of technology in Jigawa State. Five School of Computing laboratories (computer science, networking, cyber security, software engineering, hardware) and fibre to every building. Reaches underserved communities in Jigawa.',
    postdocs: 2,
    phds: '2 registered',
    streams: 'RS2, RS3',
  },
  {
    name: 'Northwest University, Kano',
    short: 'Northwest',
    country: 'Nigeria',
    role: 'JV partner',
    focus: 'Deep learning, computer vision, cybersecurity',
    detail:
      'Kano State university with a Faculty of Computing. Holds NCC and TETFund research grants (2022). Publishes on blockchain trust, public-sector fraud, and intrusion and phishing detection.',
    postdocs: 2,
    phds: '2 registered',
    streams: 'RS2, RS4',
  },
  {
    name: 'University of Leicester',
    short: 'Leicester',
    country: 'United Kingdom',
    role: 'Sub-consultant',
    focus: 'Cybersecurity, privacy, self-sovereign identity, fraud prevention',
    detail:
      'School of Computing and Mathematical Sciences: cybersecurity, information security, digital forensics. Hosts seven PhD research stays. Contributes K-3 and Prof. Ashiq Anjum.',
    postdocs: 0,
    phds: '7 research stays',
    streams: 'RS3, RS4, RS5, RS6',
    url: 'https://le.ac.uk',
  },
  {
    name: 'York St John University',
    short: 'York St John',
    country: 'United Kingdom',
    role: 'Sub-consultant',
    focus: 'Cybersecurity, trust systems, data privacy, FinTech security',
    detail:
      'Hosts the Cybersecurity Research Group and the Cyber360 platform: trust-based systems, data privacy, biometric security. Hosts eight PhD research stays. Contributes K-2 and Prof. Theocharis Kyriacou.',
    postdocs: 0,
    phds: '8 research stays',
    streams: 'RS1, RS2, RS3, RS6',
    url: 'https://www.yorksj.ac.uk',
  },
]

export const PLATFORMS = [
  { name: 'VigilSentinel', detail: 'Cybersecurity operations platform' },
  { name: 'Wazobia Invoice', detail: 'Offline-first financial management for low-connectivity settings' },
  { name: 'SPIDVerify', detail: 'Identity verification and Know-Your-Customer compliance' },
  { name: 'NaijaSafe', detail: 'Online safety in the age of generative AI' },
]
