import { AgentData } from './types';
import { Mail, Zap, MessageCircle, Share2 } from 'lucide-react';

export const AGENTS: AgentData[] = [
  {
    id: 1,
    title: "Përgjigjet me Çmime",
    role: "Agjenti 1",
    description: "Menaxhon kërkesat fillestare të çmimeve në mënyrë të menjëhershme.",
    icon: Mail,
    color: "bg-blue-500",
    features: [
      { text: "Monitoron Gmail 24/7 pa pushim" },
      { text: "Identifikon fjalët 'quote' (kuotë) ose 'price' (çmim)" },
      { text: "Nxjerr automatikisht: Emrin, Vendndodhjen, Numrin e Dritareve" },
      { text: "Përgjigjet menjëherë:", subtext: "Shembull: 'Për 8 dritare, rrezja është £4,800-£6,400. Rezervoni matjen falas këtu...'" },
      { text: "Krijon Tasks (To-Do):", subtext: "'Kuotë e re - [Emri i Klientit]'" }
    ]
  },
  {
    id: 2,
    title: "Zgjedh klientin që është prioritet",
    role: "Agjenti 2",
    description: "Filtron dhe etiketon klientët për t'u fokusuar te më të rëndësishmit.",
    icon: Zap,
    color: "bg-amber-500",
    features: [
      { text: "Lexon çdo email hyrës dhe e analizon" },
      { text: "Etiketon automatikisht klientët:", highlight: true, subtext: "🔥 Hot Lead (Urgjente/Buxhet i qartë)\n⚡ Warm Lead (Po kërkon kuotë)\n❄️ Cold Lead (Thjesht po shikon)" },
      { text: "Ju njofton në Chat vetëm për klientët 'Hot'" },
      { text: "Ju lejon të fokusoheni te shitjet më të sigurta" }
    ]
  },
  {
    id: 3,
    title: "Ndjek porositë",
    role: "Agjenti 3",
    description: "Siguron që asnjë klient të mos harrohet pas dërgimit të kuotës.",
    icon: MessageCircle,
    color: "bg-green-500",
    features: [
      { text: "Pas 3 ditësh:", subtext: "Dërgon: 'Përshëndetje [Emri], a keni ndonjë pyetje për kuotën?'" },
      { text: "Pas 7 ditësh pa përgjigje:", subtext: "Dërgon: 'Ende të interesuar? Mund ta rishikojmë kuotën.'" },
      { text: "Pas 14 ditësh pa përgjigje:", subtext: "Lëviz te dosja 'Pa Interes' (Dead Lead)" },
      { text: "Ju nuk harroni kurrë të bëni 'Follow-up'" }
    ]
  },
  {
    id: 5,
    title: "Menaxheri i Rrjeteve Sociale",
    role: "Agjenti 4",
    description: "Menaxhon rrjetet tuaja sociale",
    icon: Share2,
    color: "bg-pink-500",
    features: [
      { text: "Ju thjesht hidhni fotot në një folder në Google Drive" },
      { text: "AI shkruan postin (Caption):", subtext: "'Dritare të reja në Palmers Green. Efiçencë energjetike A-Rated! #LondonWindows'" },
      { text: "Poston automatikisht në Instagram & Facebook" },
      { text: "Planifikon 3 postime në javë në oraret më të mira" }
    ]
  }
];