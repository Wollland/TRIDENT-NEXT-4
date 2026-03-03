
import { CallRecord, Contact, LogEntry, Status, HistoryEvent } from './types';

export const MOCK_CONTACTS: Contact[] = [
  { id: '1', name: 'Jorge S. Fernández', role: 'Agent', status: Status.Available, extension: '31', department: 'Sales', badges: ['GRP-A', 'SALES'], isYou: true },
  { id: '2', name: 'Verónica Peres', role: 'HR', status: Status.Offline, extension: '107', department: 'HR', badges: ['HR', 'ADMIN'] },
  { id: '3', name: 'David Soto de Santiago', role: 'Agent', status: Status.Offline, extension: '108', department: 'Sales', badges: ['GRP-A'] },
  { id: '4', name: 'Raúl Aguirre', role: 'Agent', status: Status.Offline, extension: '109', department: 'Support', badges: ['SUP-1', 'TECH'] },
  { id: '5', name: 'Javier López', role: 'Agent', status: Status.Offline, extension: '110', department: 'Sales', badges: ['GRP-B', 'SALES'] },
  { id: '6', name: 'Jon Angulo', role: 'Agent', status: Status.Offline, extension: '2', department: 'Support', badges: ['SUP-2'] },
  { id: '7', name: 'Erlantz Calvo', role: 'Manager', status: Status.Offline, extension: '106', department: 'Management', badges: ['MNGT', 'GRP-A'] },
  { id: '8', name: 'Asier de Felipe', role: 'Manager', status: Status.Offline, extension: '12', department: 'Management', badges: ['MNGT'] },
  { id: '9', name: 'Asier Santamaría', role: 'Agent', status: Status.Offline, extension: '89', department: 'Sales', badges: ['GRP-B'] },
  { id: '10', name: 'César Fernández', role: 'Agent', status: Status.Offline, extension: '112', department: 'Sales', badges: ['GRP-A'] },
  { id: '11', name: 'Ziortza García', role: 'Agent', status: Status.Offline, extension: '113', department: 'Sales', badges: ['SALES'] },
  { id: '12', name: 'Abiral Dahal', role: 'Agent', status: Status.Offline, extension: '114', department: 'Sales', badges: ['INTL', 'SALES'] },
  { id: '13', name: 'Aboo Koyamparambil', role: 'Agent', status: Status.Offline, extension: '115', department: 'Support', badges: ['INTL', 'SUP-1'] },
  { id: '14', name: 'Álvaro Rodríguez', role: 'Agent', status: Status.Offline, extension: '116', department: 'Sales', badges: ['GRP-C'] },
  { id: '15', name: 'Aritza Herrero', role: 'Agent', status: Status.Offline, extension: '117', department: 'Sales', badges: ['GRP-C'] },
];

export const MOCK_CALLS: CallRecord[] = [
  { 
    id: 'bot1', type: 'message', source: 'teams', timestamp: 'Now', contactName: 'THOTBrain', contactId: 'AI-AGENT', phoneNumber: 'SYSTEM', callId: 'TB-9000', duration: '-', direction: 'inbound', 
    flags: { recorded: false, hasNotes: false, verified: true, hasCrm: false, hasEmail: false, gender: undefined, sentiment: 'positive' }, 
    isBot: true, country: 'AI', 
    summary: 'System Initialization Complete. The local GPU Cluster [Node-Alpha-04] has successfully mounted the LLaMA-3-70B model. Workload distribution is currently balanced at 45% capacity. Ready to accept complex orchestration tasks including real-time translation streams and generative asset creation across all connected agent interfaces.', 
    visualPrompt: 'Cybernetic interface with glowing green data streams and node topology',
    sentimentReason: 'System optimal state',
    generatedImageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 'c1', type: 'call', source: 'phone', timestamp: '20:31:16', contactName: 'Asier de Felipe', contactId: '68472332', phoneNumber: '89093990236', callId: '3dc179a7', duration: '11:18', direction: 'inbound', 
    flags: { recorded: true, hasNotes: true, verified: true, hasCrm: true, hasEmail: true, gender: 'male', sentiment: 'angry' }, country: 'ES',
    summary: 'CRITICAL ESCALATION: The client is reporting a catastrophic failure in the "Checkout API" (Error 503) starting at 19:45 UTC. They estimate a revenue loss of approx. €15k per hour. The client specifically referenced Clause 9.2 of the SLA regarding 99.99% uptime guarantees and is demanding a full Root Cause Analysis (RCA) within 4 hours. They have threatened to withhold the Q4 payment if this is not resolved immediately. I have tagged the L3 Engineering team.',
    visualPrompt: 'Red alarming financial graph crashing downwards with warning signs',
    sentimentReason: 'Elevated volume (>85dB) and rapid speech pattern detected.',
    generatedImageUrl: 'https://images.unsplash.com/photo-1535320903710-d9cf5b3ebdb5?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 'c2', type: 'message', source: 'teams', timestamp: '19:57:03', contactName: 'Jon Angulo', contactId: '6e020b09', phoneNumber: '89093990236', callId: '3dc179a7', duration: '-', direction: 'outbound', 
    flags: { recorded: false, hasNotes: true, verified: true, hasCrm: false, hasEmail: true, gender: 'male', sentiment: 'neutral' }, country: 'ES',
    summary: 'Outbound secure transfer of the Q4 Partnership Agreement (v2.1). This revision includes the specifically requested changes to the Data Sovereignty clauses, ensuring compliance with the new EU-US Data Privacy Framework. Please review Section 4.3 regarding "Third-party Processors" and Section 7.1 on "Liability Caps". We need a signature by Friday to proceed with the provisioning.', 
    visualPrompt: 'Close up of a luxury fountain pen signing a legal document',
    sentimentReason: 'Standard professional text exchange.',
    generatedImageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 'c3', type: 'call', source: 'phone', timestamp: '19:35:30', contactName: 'Jon Angulo', contactId: '6e020b09', phoneNumber: '89093990236', callId: '3dc179a7', duration: '21:10', direction: 'inbound', 
    flags: { recorded: true, hasNotes: true, verified: true, hasCrm: true, hasEmail: true, gender: 'male', sentiment: 'neutral' }, country: 'ES',
    summary: 'Technical deep-dive session regarding the latency spikes in the eu-west-1 region. Logs indicate the issue is not at the application layer but potentially a bottleneck in the ingress load balancer configuration during high-concurrency bursts. We reviewed the Grafana dashboards together and identified a correlation between the latency usage and the backup routines running at 19:00. DevOps ticket #9923 has been created to reschedule the backups.',
    visualPrompt: 'Complex network topology diagram with server nodes',
    sentimentReason: 'Balanced tone, technical vocabulary usage.',
    generatedImageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 'c4', type: 'call', source: 'phone', timestamp: '18:49:56', contactName: 'Eduardo Cabanas', contactId: '4bea1998', phoneNumber: '89093990236', callId: '3dc179a7', duration: '11:36', direction: 'missed', 
    flags: { recorded: true, hasNotes: true, verified: true, hasCrm: true, hasEmail: true, gender: 'male', sentiment: 'angry' }, country: 'ES',
    summary: 'Missed call from Key Account (Tier 1). Voicemail analysis reveals high frustration regarding the Admin Portal login loop issue. The user mentioned they have been trying to reset the password for 30 minutes without receiving the OTP email. This is blocking their end-of-month reporting. I have manually triggered a password reset link and sent it via their alternative email.', 
    visualPrompt: 'Smartphone screen showing multiple missed call notifications with a red tint',
    sentimentReason: 'Repeated calls in short timeframe (Urgency).',
    generatedImageUrl: 'https://images.unsplash.com/photo-1614064641938-3bcee52636c4?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 'c5', type: 'message', source: 'whatsapp', timestamp: '18:34:33', contactName: 'Erlantz Calvo', contactId: '282e4336', phoneNumber: '89093990236', callId: '3dc179a7', duration: '-', direction: 'inbound', 
    flags: { recorded: true, hasNotes: true, verified: true, hasCrm: true, hasEmail: true, gender: 'male', sentiment: 'positive' }, country: 'ES',
    summary: 'Great news: The "Greenfield" project scope has been officially approved by the Steering Committee. The budget for Phase 1 (Discovery & Architecture) has been unlocked. They are excited about the proposed AI integration. We need to prepare the Statement of Work (SOW) for signature by tomorrow morning to kick off next week.', 
    visualPrompt: 'Two professionals shaking hands in a modern glass office',
    sentimentReason: 'Keywords: "Great", "Thanks", "Approved".',
    generatedImageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 'c6', type: 'call', source: 'phone', timestamp: '18:28:13', contactName: 'Asier de Felipe', contactId: '68472332', phoneNumber: '89093990236', callId: '3dc179a7', duration: '03:36', direction: 'inbound', 
    flags: { recorded: true, hasNotes: true, verified: true, hasCrm: true, hasEmail: true, gender: 'male', sentiment: 'angry' }, country: 'ES',
    summary: 'Customer called back extremely agitated. The previous ticket regarding the "Data Export" feature is still pending after 48 hours. They are threatening churn (cancellation) if they cannot export their customer list by EOD. I have escalated this to the Product Manager and flagged the account as "At Risk" in Salesforce.', 
    visualPrompt: 'Abstract representation of stress, anxiety and red warning lights',
    sentimentReason: 'Interruptions detected during agent speech.',
    generatedImageUrl: 'https://images.unsplash.com/photo-1506784926709-b2f975164485?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 'c7', type: 'call', source: 'phone', timestamp: '17:57:10', contactName: 'Asier de Felipe', contactId: '68472332', phoneNumber: '89093990236', callId: '3dc179a7', duration: '20:22', direction: 'outbound', 
    flags: { recorded: true, hasNotes: true, verified: true, hasCrm: true, hasEmail: true, gender: 'male', sentiment: 'neutral' }, country: 'ES',
    summary: 'Conducted a comprehensive demo of the new "Trident Analytics" module. The client was particularly interested in the Custom Widget configuration and the PDF export capabilities. We spent about 10 minutes configuring a sample dashboard for their "Sales Team" use case. They have requested a 14-day trial license to test it with real data.', 
    visualPrompt: 'Futuristic dashboard screen displaying analytics and pie charts',
    sentimentReason: 'Instructional pacing.',
    generatedImageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 'c8', type: 'message', source: 'whatsapp', timestamp: '17:54:32', contactName: 'Asier Santamaría', contactId: '76819ec5', phoneNumber: '89093990236', callId: '3dc179a7', duration: '-', direction: 'inbound', 
    flags: { recorded: true, hasNotes: true, verified: true, hasCrm: true, hasEmail: true, gender: 'male', sentiment: 'neutral' }, country: 'ES',
    summary: 'Inbound sales inquiry regarding the pricing structure differences between the "Pro" and "Enterprise" tiers. The lead is specifically asking about the API rate limits (1000 vs 5000 req/min) and whether the Enterprise plan includes a dedicated Customer Success Manager. I have forwarded the updated pricing PDF.', 
    visualPrompt: '3D render of pricing plans or tiered stacks of gold coins',
    sentimentReason: 'Inquiry / Question based structure.',
    generatedImageUrl: 'https://images.unsplash.com/photo-1565514020175-8501ae23dda5?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 'c9', type: 'call', source: 'phone', timestamp: '17:45:33', contactName: 'David Soto de Santiago', contactId: '76819ec5', phoneNumber: '89093990236', callId: '3dc179a7', duration: '08:26', direction: 'missed', 
    flags: { recorded: true, hasNotes: true, verified: true, hasCrm: true, hasEmail: true, gender: 'male', sentiment: 'angry' }, country: 'ES',
    summary: 'Missed interaction. Context suggests frustration with the mobile app crashing on iOS 18. Voicemail logs indicate user is unable to complete 2FA.', 
    visualPrompt: 'Glitched mobile phone screen effect',
    sentimentReason: 'Voicemail analysis: Stress markers detected.',
    generatedImageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 'c10', type: 'call', source: 'phone', timestamp: '17:42:15', contactName: 'Raúl Aguirre', contactId: '4cb466f9', phoneNumber: '89093990236', callId: '3dc179a7', duration: '03:07', direction: 'inbound', 
    flags: { recorded: true, hasNotes: true, verified: true, hasCrm: true, hasEmail: false, gender: 'male', sentiment: 'positive' }, country: 'MX',
    summary: 'Productive intro call with a new lead from Mexico City. Interest shown in the VoIP integration. Scheduled a follow-up meeting for next Tuesday with the technical team.', 
    visualPrompt: 'Map of Mexico with digital connection nodes connecting to Europe',
    sentimentReason: 'Frequent laughter and agreement markers.',
    generatedImageUrl: 'https://images.unsplash.com/photo-1518463892881-d587bf2c296a?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 'c11', type: 'call', source: 'phone', timestamp: '16:08:51', contactName: 'Asier de Felipe', contactId: '68472332', phoneNumber: '89093990236', callId: '3dc179a7', duration: '03:10', direction: 'inbound', 
    flags: { recorded: true, hasNotes: true, verified: true, hasCrm: true, hasEmail: true, gender: 'male', sentiment: 'angry' }, country: 'ES',
    summary: 'Dispute over Invoice #4002. Customer claims double charge for the "Storage Add-on". verified in Stripe dashboard - refund initiated immediately.', 
    visualPrompt: 'Close up of a calculator and invoice papers',
    sentimentReason: 'High pitch variations and negative keywords.',
    generatedImageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop'
  },
];

export const MOCK_LOGS: LogEntry[] = [
  { id: 'l1', timestamp: '09:08:58', user: 'Jorge S. Fernández', isYou: true, action: 'Available', type: 'status', statusColor: 'green' },
  { id: 'l2', timestamp: '09:04:16', user: 'Fabian Sica', action: 'Available', type: 'status', statusColor: 'green' },
  { id: 'l3', timestamp: '09:04:15', user: 'Fabian Sica', action: 'Message sent', type: 'msg_out', statusColor: 'purple' },
  { id: 'l4', timestamp: '09:04:11', user: 'Fabian Sica', action: 'Available', type: 'status', statusColor: 'green' },
  { id: 'l5', timestamp: '08:06:50', user: 'Robert Grüttner', action: 'Available', type: 'status', statusColor: 'green' },
  { id: 'l6', timestamp: '08:06:49', user: 'Robert Grüttner', action: 'Message received', type: 'msg_in', statusColor: 'blue' },
  { id: 'l7', timestamp: '08:06:34', user: 'Robert Grüttner', action: 'Available', type: 'status', statusColor: 'green' },
  { id: 'l8', timestamp: '03:00:00', user: 'Oscar Romero', action: 'Out of work', type: 'system', statusColor: 'grey' },
  { id: 'l9', timestamp: '03:00:00', user: 'Jorge S. Fernández', isYou: true, action: 'Out of work', type: 'system', statusColor: 'grey' },
  { id: 'l10', timestamp: '22:24:32', user: 'Jorge S. Fernández', isYou: true, action: 'Idle', type: 'system', statusColor: 'grey' },
  { id: 'l11', timestamp: '22:21:08', user: 'Robert Grüttner', action: 'Out of work', type: 'system', statusColor: 'grey' },
  { id: 'l12', timestamp: '20:54:02', user: 'Boris Decker', action: 'Call outbound', type: 'call_out', statusColor: 'green' },
  { id: 'l13', timestamp: '20:42:53', user: 'Asier de Felipe', action: 'Out of work', type: 'system', statusColor: 'grey' },
  { id: 'l14', timestamp: '20:42:44', user: 'Asier de Felipe', action: 'Available', type: 'status', statusColor: 'green' },
  { id: 'l15', timestamp: '20:42:44', user: 'Jorge S. Fernández', isYou: true, action: 'Available', type: 'status', statusColor: 'green' },
  { id: 'l16', timestamp: '20:31:34', user: 'Jon Angulo', action: 'Out of work', type: 'system', statusColor: 'grey' },
  { id: 'l17', timestamp: '20:31:25', user: 'Asier de Felipe', action: 'Call inbound', type: 'call_in', statusColor: 'purple' },
];

export const MOCK_HISTORY: HistoryEvent[] = [
  { 
    id: 'h1', date: '15/10/2025', type: 'file', sender: 'Jorge S. Fernández', isYou: true, timestamp: '0:09', status: 'read',
    content: { fileName: 'El_Futuro_de_la_IA_De_la_Nube_a_la_Soberanía.pdf', fileSize: '74.3 KB', fileType: 'pdf' } 
  },
  { 
    id: 'h2', date: '16/10/2025', type: 'file', sender: 'Jorge S. Fernández', isYou: true, timestamp: '0:21', status: 'read',
    content: { fileName: 'Evolución_de_RAG_De_lo_Básico_a_lo_Jerárquico.pdf', fileSize: '2.8 MB', fileType: 'pdf' } 
  },
  { 
    id: 'h3', date: '16/10/2025', type: 'file', sender: 'Jorge S. Fernández', isYou: true, timestamp: '0:39', status: 'read',
    content: { fileName: 'Informe_Tecnico_Avatar_Faktorya.pdf', fileSize: '58.2 KB', fileType: 'pdf' } 
  },
  { 
    id: 'h4', date: '16/10/2025', type: 'file', sender: 'Jorge S. Fernández', isYou: true, timestamp: '1:11', status: 'read',
    content: { fileName: 'informe_tecnico_utopia_ai.pdf', fileSize: '103.5 KB', fileType: 'pdf' } 
  },
  { 
    id: 'h5', date: '30/10/2025', type: 'file', sender: 'Jorge S. Fernández', isYou: true, timestamp: '0:32', status: 'read',
    content: { fileName: 'deepseek_ocr_vectorizacion_avanzada_20251029223135.pdf', fileSize: '3.2 MB', fileType: 'pdf' } 
  },
  { 
    id: 'h6', date: '02/11/2025', type: 'video', sender: 'Jorge S. Fernández', isYou: true, timestamp: '14:34', status: 'read',
    content: { fileType: 'video' } 
  },
  { 
    id: 'h7', date: '11/11/2025', type: 'file', sender: 'Jorge S. Fernández', isYou: true, timestamp: '0:35', status: 'read',
    content: { fileName: 'ANALYTA_Code_Execution_vs_MCP_Server_Tradicional2.pdf', fileSize: '3.6 MB', fileType: 'pdf' } 
  },
  { 
    id: 'h8', date: '12/11/2025', type: 'file', sender: 'Jorge S. Fernández', isYou: true, timestamp: '0:42', status: 'read',
    content: { fileName: 'Arquitectura_Segura_Separación_MCP_Server_y_Backend.pdf', fileSize: '189.2 KB', fileType: 'pdf' } 
  }
];
