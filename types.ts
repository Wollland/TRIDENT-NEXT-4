
export enum Status {
  Available = 'Available',
  Busy = 'Busy',
  Away = 'Away',
  Offline = 'Offline',
  OnCall = 'On Call',
  DoNotDisturb = 'DND',
  Talking = 'Talking',
  Messaging = 'Messaging outbound'
}

export interface Contact {
  id: string;
  name: string;
  role: string;
  status: Status;
  avatar?: string;
  extension: string;
  department: string;
  badges: string[];
  isYou?: boolean;
}

export interface CallRecord {
  id: string;
  type: 'call' | 'message';
  source?: 'phone' | 'whatsapp' | 'teams';
  timestamp: string;
  contactName: string;
  contactId: string;
  phoneNumber: string;
  callId: string;
  duration: string;
  direction: 'inbound' | 'outbound' | 'missed';
  flags: {
    recorded: boolean;
    hasNotes: boolean;
    verified: boolean;
    hasCrm: boolean;
    hasEmail: boolean;
    gender?: 'male' | 'female';
    sentiment?: 'positive' | 'neutral' | 'negative' | 'angry';
  };
  isBot?: boolean;
  country?: string;
  summary?: string;
  visualPrompt?: string;
  sentimentReason?: string;
  generatedImageUrl?: string;
}

export interface LogEntry {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  isYou?: boolean;
  type: 'status' | 'call_out' | 'call_in' | 'msg_out' | 'msg_in' | 'system';
  statusColor?: 'green' | 'red' | 'grey' | 'purple' | 'blue'; 
}

export interface WeatherData {
  city: string;
  temp: number;
  condition: string;
  icon: string;
}

export interface HistoryEvent {
  id: string;
  date: string;
  type: 'file' | 'video' | 'text';
  sender: string;
  isYou: boolean;
  timestamp: string;
  content: {
    fileName?: string;
    fileSize?: string;
    text?: string;
    fileType?: 'pdf' | 'video'; 
  };
  status: 'sent' | 'read' | 'received';
}
