// src/types/serviceTypes.ts
import { LucideIcon } from 'lucide-react'; // Import LucideIcon type for icon components

export interface FeatureCard {
  icon: LucideIcon; // Lucide icon component itself
  title: string;
  description: string;
}

export interface PlanFeatureCard {
  name: string;
  price: string;
  features: string[];
  popular: boolean;
}

export interface TextSection {
  titlePrimary: string;
  titleGradient: string;
  description: string;
}

export interface HeroSection {
  titlePrimary: string;
  titleGradient: string;
  titleSecondary?: string; // Optional for third line in hero title
  subtitlePrimary: string;
  subtitleGradient: string;
  backgroundImage: string; // Path to the background image
}

// Specific sections for Travel Insurance
export interface DestinationCard {
  name: string;
  coverage: string;
  icon: string; // Emoji for country flag/symbol
}

export interface EmergencyInfoSection {
  titlePrimary: string;
  titleGradient: string;
  description: string;
  hotline: {
    icon: LucideIcon;
    title: string;
    number: string;
    note: string;
  };
  email: {
    icon: LucideIcon;
    title: string;
    address: string;
    note: string;
  };
}

// Specific sections for Visitor Visa Insurance
export interface VisaTypeCard {
  name: string;
  coverage: string;
  icon: string; // Emoji for visa type
}

export interface CountryDetailCard {
  name: string;
  flag: string; // Emoji for flag
  requirements: string;
}

export interface ProcessStepCard {
  stepNumber: number;
  title: string;
  description: string;
}

// Specific sections for Life Insurance
export interface BenefitCard {
  name: string;
  icon: string; // Emoji for benefit
  description: string;
}

export interface RiderCard {
  name: string;
  description: string;
}


// Main Service Detail Interface - combines all possible sections
export interface ServiceDetailType {
  id: string; // Unique ID, typically derived from href
  name: string;
  href: string; // URL path for the service page

  // Common Sections
  hero: HeroSection;
  whyChoose: TextSection & { cards: FeatureCard[] };
  plans: TextSection & { cards: PlanFeatureCard[] };
  whatsIncluded: TextSection & { features: string[] }; // This is `features` in your original code

  // Optional/Specific Sections for different services
  destinations?: TextSection & { cards: DestinationCard[] }; // For Travel Insurance
  emergencyInfo?: EmergencyInfoSection; // For Travel Insurance

  visaTypes?: TextSection & { cards: VisaTypeCard[] }; // For Visitor Visa Insurance
  countries?: TextSection & { cards: CountryDetailCard[] }; // For Visitor Visa Insurance
  process?: TextSection & { steps: ProcessStepCard[] }; // For Visitor Visa & Life Insurance (different data)

  benefits?: TextSection & { cards: BenefitCard[] }; // For Life Insurance
  riders?: TextSection & { cards: RiderCard[] }; // For Life Insurance
}