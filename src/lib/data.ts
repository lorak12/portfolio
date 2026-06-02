export interface Project {
  id: string;
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  result: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  aboutParagraphs: string[];
  skills: SkillCategory[];
  process: ProcessStep[];
  projects: Project[];
  testimonials: Testimonial[];
  contact: {
    email: string;
    github: string;
    linkedin: string;
  };
}

export const portfolioData: PortfolioData = {
  name: "Karol Stróż",
  title: "Fullstack Developer",
  bio: "Tworzę nowoczesne, wydajne i dopracowane aplikacje internetowe. Specjalizuję się w technologiach opartych na ekosystemie Reacta i Next.js, łącząc dbałość o detale wizualne z solidną architekturą backendową.",
  aboutParagraphs: [
    "Moja przygoda z programowaniem zaczęła się kilka lat temu od pasji do tworzenia rzeczy, które działają sprawnie i wyglądają estetycznie. Jako programista łączę świat frontendu i backendu (Fullstack), kładąc szczególny nacisk na dopracowany interfejs użytkownika (UI/UX) oraz wydajność.",
    "Mimo młodego wieku, dzięki stałemu rozwojowi i realizacji projektów komercyjnych jako freelancer, nauczyłem się patrzeć na kod przez pryzmat wartości dla biznesu. Dbam o to, aby moje aplikacje były nie tylko nowoczesne technologicznie, ale przede wszystkim intuicyjne dla użytkowników i łatwe w utrzymaniu."
  ],
  skills: [
    {
      category: "Frontend & UI",
      items: ["React", "Next.js 16 (App Router)", "Tailwind CSS", "TypeScript", "HTML5 / CSS3"]
    },
    {
      category: "Backend & Bazy danych",
      items: ["Supabase", "PostgreSQL", "MongoDB", "Prisma ORM", "REST APIs"]
    },
    {
      category: "Integracje & Bezpieczeństwo",
      items: ["Stripe (płatności online)", "NextAuth (bezpieczne logowanie)"]
    },
    {
      category: "Narzędzia & Wdrożenie",
      items: ["Git", "GitHub", "Vercel", "Figma (analiza UI/UX)"]
    }
  ],
  process: [
    {
      step: 1,
      title: "Analiza i Planowanie",
      description: "Rozmawiamy o Twoich potrzebach biznesowych. Analizuję wymagania i pomagam dobrać najlepsze rozwiązania technologiczne."
    },
    {
      step: 2,
      title: "Projektowanie UI/UX",
      description: "Tworzę lub analizuję makiety w Figmie, dbając o to, by interfejs był intuicyjny i responsywny (działał dobrze na telefonach i komputerach)."
    },
    {
      step: 3,
      title: "Prace programistyczne",
      description: "Koduję aplikację przy użyciu Next.js i Tailwind CSS. Integruję bazy danych, systemy płatności (Stripe) oraz dbam o bezpieczeństwo danych."
    },
    {
      step: 4,
      title: "Optymalizacja i Testy",
      description: "Sprawdzam wydajność aplikacji, optymalizuję SEO i czas ładowania strony."
    },
    {
      step: 5,
      title: "Wdrożenie i Wsparcie",
      description: "Publikuję projekt na stabilnym hostingu i tłumaczę, jak z niego korzystać."
    }
  ],
  projects: [
    {
      id: "saas-booking",
      title: "SaaS TicketFlow",
      subtitle: "System rezerwacji online zintegrowany z płatnościami Stripe i bazą Supabase.",
      challenge: "Klient potrzebował systemu sprzedaży biletów, który wytrzyma nagłe obciążenie i pozwoli na szybką finalizację transakcji.",
      solution: "Zaimplementowałem aplikację w oparciu o Next.js 16 i Tailwind CSS. Do obsługi transakcji wykorzystałem Stripe, a zarządzanie bazą danych powierzyłem Supabase (PostgreSQL) przy użyciu Prisma ORM.",
      result: "Strona ładuje się bardzo szybko, a integracja ze Stripe umożliwiła skrócenie procesu zakupowego do kilkunastu sekund.",
      technologies: ["Next.js 16", "Tailwind CSS", "Supabase", "Stripe", "Prisma"],
      demoUrl: "https://ticketflow-demo.vercel.app",
      githubUrl: "https://github.com/lorak12/ticketflow"
    },
    {
      id: "admin-panel",
      title: "CMS Hub Admin Panel",
      subtitle: "Bezpieczny panel do zarządzania treścią i użytkownikami z różnymi poziomami uprawnień.",
      challenge: "Stworzenie bezpiecznego panelu do zarządzania treścią i użytkownikami z różnymi poziomami uprawnień.",
      solution: "Integracja NextAuth do bezpiecznej autoryzacji (Google/GitHub/Email) oraz MongoDB jako elastycznej bazy danych. Interfejs oparty na komponentach Reacta zapewnił płynne działanie bez przeładowywania strony.",
      result: "Strona zapewnia pełną kontrolę dostępu i zarządza setkami wpisów w ułamkach sekund bez odczuwalnych opóźnień.",
      technologies: ["React", "Next.js 16", "NextAuth", "MongoDB", "Tailwind CSS"],
      demoUrl: "https://cmshub-demo.vercel.app",
      githubUrl: "https://github.com/lorak12/cms-hub"
    }
  ],
  testimonials: [
    {
      quote: "Karol wykazał się dużym profesjonalizmem podczas pracy nad naszą stroną. Zaproponował nowoczesne rozwiązania, a komunikacja przebiegała bez żadnych zastrzeżeń. Projekt został oddany na czas.",
      author: "Jan Kowalski",
      role: "CEO w TechStart"
    },
    {
      quote: "Świetny kontakt i bardzo dobre zrozumienie naszych potrzeb biznesowych. Aplikacja działa sprawnie, a kod jest czytelny i łatwy do dalszego rozwoju.",
      author: "Anna Nowak",
      role: "Founder w ShopStyle"
    }
  ],
  contact: {
    email: "karolstroz34@gmail.com",
    github: "https://github.com/lorak12",
    linkedin: "https://linkedin.com/in/karolstroz"
  }
};
