import { LucideIcon } from 'lucide-react';

export interface AgentFeature {
  text: string;
  subtext?: string;
  highlight?: boolean;
}

export interface AgentData {
  id: number;
  title: string;
  role: string;
  description: string;
  icon: LucideIcon;
  features: AgentFeature[];
  color: string;
}