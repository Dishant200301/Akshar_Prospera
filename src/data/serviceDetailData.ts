// File: servicesDetailData.ts

import React from 'react';
import { 
  Shield, Users, Clock, Star, Globe,
  FileText, Award, Calculator,
  Phone, Mail, Home, Car, DollarSign, Wrench, Zap, Heart
} from 'lucide-react';

// --- TYPE DEFINITIONS ---

type CardType = {
  icon: React.ElementType;
  title: string;
  description: string;
};

type PlanCardType = {
  name: string;
  price: string;
  features: string[];
  popular: boolean;
};

type DestinationCardType = {
  name: string;
  coverage: string;
  icon: string;
};

type VisaCardType = {
  name: string;
  coverage: string;
  icon: string;
};

type CountryCardType = {
  name: string;
  flag: string;
  requirements: string;
};

type BenefitCardType = {
  name: string;
  icon: string;
  description: string;
};

type RiderCardType = {
  name: string;
  description: string;
};

type ProcessStepType = {
  stepNumber: number;
  title: string;
  description: string;
};

export type ServiceDetailType = {
  id: string;
  name: string;
  href: string;
  hero: {
    titlePrimary: string;
    titleGradient: string;
    titleSecondary?: string;
    subtitlePrimary: string;
    subtitleGradient: string;
    backgroundImage: string;
  };
  whyChoose: {
    titlePrimary: string;
    titleGradient: string;
    description: string;
    cards: CardType[];
  };
  plans: {
    titlePrimary: string;
    titleGradient: string;
    description: string;
    cards: PlanCardType[];
  };
  whatsIncluded: {
    titlePrimary: string;
    titleGradient: string;
    description: string;
    features: string[];
  };
  process: {
    titlePrimary: string;
    titleGradient: string;
    description: string;
    image: string;
    steps: ProcessStepType[];
  };
  destinations?: {
    titlePrimary: string;
    titleGradient: string;
    description: string;
    cards: DestinationCardType[];
  };
  emergencyInfo?: {
    titlePrimary: string;
    titleGradient: string;
    description: string;
    hotline: {
      icon: React.ElementType;
      title: string;
      number: string;
      note: string;
    };
    email: {
      icon: React.ElementType;
      title: string;
      address: string;
      note: string;
    };
  };
  visaTypes?: {
    titlePrimary: string;
    titleGradient: string;
    description: string;
    cards: VisaCardType[];
  };
  countries?: {
    titlePrimary: string;
    titleGradient: string;
    description: string;
    cards: CountryCardType[];
  };
  benefits?: {
    titlePrimary: string;
    titleGradient: string;
    description: string;
    cards: BenefitCardType[];
  };
  riders?: {
    titlePrimary: string;
    titleGradient: string;
    description: string;
    cards: RiderCardType[];
  };
};

// --- SERVICE DATA ---

// Health Insurance Data
const healthInsuranceData: ServiceDetailType = {
  id: 'health-insurance',
  name: 'Health Insurance',
  href: '/services/health-insurance',
  hero: {
    titlePrimary: 'Your Health',
    titleGradient: 'Our',
    titleSecondary: 'Priority',
    subtitlePrimary: "health insurance solutions for your family's complete protection and",
    subtitleGradient: 'peace of mind',
    backgroundImage: '/image/health.jpg',
  },
  whyChoose: {
    titlePrimary: 'Why Choose Our',
    titleGradient: 'Health Insurance',
    description: 'We deliver health coverage with exceptional service and dedicated support for your family',
    cards: [
      { icon: Shield, title: 'Comprehensive Coverage', description: 'Complete protection for all your healthcare needs' },
      { icon: Users, title: 'Family Plans', description: 'Coverage for the entire family at competitive rates' },
      { icon: Clock, title: '24/7 Support', description: 'Round-the-clock assistance whenever you need it' },
      { icon: Star, title: 'Top Providers', description: 'Access to the best healthcare networks' },
    ],
  },
  plans: {
    titlePrimary: 'Choose Your',
    titleGradient: 'Health Plan',
    description: 'Flexible plans designed to meet your specific healthcare needs and budget',
    cards: [
      {
        name: 'Basic Health Plan',
        price: 'Starting from $89/month',
        features: ['Essential Medical Coverage', 'Prescription Benefits', '24/7 Support', 'Network Access', 'Telemedicine Access'],
        popular: false,
      },
      {
        name: 'Comprehensive Health Plan',
        price: 'Starting from $149/month',
        features: ['Full Medical Coverage', 'Dental & Vision', 'Mental Health Services', 'Preventive Care', 'Family Coverage'],
        popular: true,
      },
      {
        name: 'Premium Health Plan',
        price: 'Starting from $249/month',
        features: ['All Comprehensive Features', 'International Coverage', 'Concierge Services', 'Priority Support', 'Customizable Options'],
        popular: false,
      },
    ],
  },
  whatsIncluded: {
    titlePrimary: "What's Included in Your",
    titleGradient: 'Coverage',
    description: 'Comprehensive benefits designed to keep you and your family healthy',
    features: [
      '24/7 Medical Support & Consultation',
      'Comprehensive Prescription Coverage',
      'Dental & Vision Care Benefits',
      'Mental Health Services & Counseling',
      'Preventive Care & Wellness Programs',
      'Emergency Medical Transportation',
      'Specialist Referrals & Second Opinions',
      'Family Coverage Options',
    ],
  },
  process: {
    titlePrimary: 'Simple',
    titleGradient: 'Application Process',
    description: 'Get your health insurance coverage in just a few easy steps',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop',
    steps: [
      { stepNumber: 1, title: 'Get Quote', description: 'Receive a personalized quote.' },
      { stepNumber: 2, title: 'Choose Plan', description: 'Select the best coverage.' },
      { stepNumber: 3, title: 'Apply Online', description: 'Complete the application in minutes.' },
      { stepNumber: 4, title: 'Get Covered', description: 'Receive your policy.' },
    ],
  },
};

// Travel Insurance Data
const travelInsuranceData: ServiceDetailType = {
  id: 'travel-insurance',
  name: 'Travel Insurance',
  href: '/services/travel-insurance',
  hero: {
    titlePrimary: 'Travel Safe',
    titleGradient: 'Stay',
    titleSecondary: 'Protected',
    subtitlePrimary: 'Worldwide travel protection with comprehensive coverage for all your adventures and',
    subtitleGradient: 'destinations',
    backgroundImage: '/image/travel.jpg',
  },
  whyChoose: {
    titlePrimary: 'Why Choose Our',
    titleGradient: 'Travel Insurance',
    description: 'We provide comprehensive travel protection for every type of adventurer and destination worldwide',
    cards: [
      { icon: Globe, title: 'Worldwide Coverage', description: 'Protection wherever your journey takes you' },
      { icon: Clock, title: '24/7 Support', description: 'Round-the-clock assistance worldwide' },
      { icon: Shield, title: 'Comprehensive Protection', description: 'Coverage for all travel scenarios' },
      { icon: Star, title: 'Premium Service', description: 'Exceptional customer experience' },
    ],
  },
  plans: {
    titlePrimary: 'Choose Your',
    titleGradient: 'Travel Plan',
    description: 'Flexible plans designed for different travel styles and budgets',
    cards: [
      {
        name: 'Basic Travel Plan',
        price: 'Starting from $29/trip',
        features: ['Emergency Medical Coverage', 'Trip Cancellation', 'Baggage Protection', '24/7 Support', 'Lost Passport Assistance'],
        popular: false,
      },
      {
        name: 'Comprehensive Travel Plan',
        price: 'Starting from $59/trip',
        features: ['All Basic Features', 'Trip Interruption', 'Rental Car Coverage', 'Adventure Sports', 'Pre-existing Conditions'],
        popular: true,
      },
      {
        name: 'Premium Travel Plan',
        price: 'Starting from $99/trip',
        features: ['All Comprehensive Features', 'Concierge Services', 'Priority Support', 'Higher Coverage Limits', 'Customizable Options'],
        popular: false,
      },
    ],
  },
  whatsIncluded: {
    titlePrimary: "What's Covered in Your",
    titleGradient: 'Travel Insurance',
    description: 'Comprehensive protection for all your travel needs',
    features: [
      'Emergency Medical Coverage Worldwide',
      'Trip Cancellation & Interruption Protection',
      'Baggage & Personal Belongings Coverage',
      '24/7 Global Travel Assistance',
      'Flight Accident Coverage',
      'Rental Car Damage Protection',
      'Pre-existing Medical Condition Coverage',
      'Adventure Sports & Activities Coverage',
    ],
  },
  destinations: {
    titlePrimary: '',
    titleGradient: 'Global',
    description: 'Travel insurance that works worldwide',
    cards: [
      { name: 'Canada', coverage: 'Full Coverage', icon: '🍁' },
      { name: 'United States', coverage: 'Full Coverage', icon: '🇺🇸' },
      { name: 'Europe', coverage: 'Full Coverage', icon: '🇪🇺' },
      { name: 'Asia', coverage: 'Full Coverage', icon: '🌏' },
      { name: 'Australia', coverage: 'Full Coverage', icon: '🇦🇺' },
      { name: 'South America', coverage: 'Full Coverage', icon: '🌎' },
    ],
  },
  emergencyInfo: {
    titlePrimary: 'Need Help While',
    titleGradient: 'Traveling',
    description: 'Our 24/7 emergency assistance team is available worldwide to help you with any travel-related issues',
    hotline: {
      icon: Phone,
      title: 'Emergency Hotline',
      number: '1-800-AKSHAR-PRO',
      note: 'Available 24/7 worldwide',
    },
    email: {
      icon: Mail,
      title: 'Email Support',
      address: 'emergency@aksharprospera.com',
      note: 'Quick response guaranteed',
    },
  },
  process: {
    titlePrimary: 'Simple',
    titleGradient: 'Application Process',
    description: 'Get your travel insurance coverage in just a few easy steps',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop',
    steps: [
      { stepNumber: 1, title: 'Get Quote', description: 'Receive a personalized quote.' },
      { stepNumber: 2, title: 'Choose Plan', description: 'Select the best coverage.' },
      { stepNumber: 3, title: 'Apply Online', description: 'Complete the application in minutes.' },
      { stepNumber: 4, title: 'Get Covered', description: 'Receive your policy.' },
    ],
  },
};

// Visitor Visa Insurance Data
const visitorVisaInsuranceData: ServiceDetailType = {
  id: 'visitor-visa-insurance',
  name: 'Visitor Visa Insurance',
  href: '/services/visitor-visa-insurance',
  hero: {
    titlePrimary: 'Visitor Safety',
    titleGradient: 'While',
    titleSecondary: 'Traveling',
    subtitlePrimary: 'Specialized visitor insurance for your visa compliance and travel safety with',
    subtitleGradient: 'comprehensive coverage',
    backgroundImage: '/image/visitor.jpg',
  },
  whyChoose: {
    titlePrimary: 'Why Choose Our',
    titleGradient: 'Visitor Visa Insurance',
    description: 'We deliver specialized visitor coverage designed for visa compliance and comprehensive protection needs',
    cards: [
      { icon: FileText, title: 'Visa Compliance', description: 'Guaranteed to meet all visa requirements' },
      { icon: Globe, title: 'Global Coverage', description: 'Protection worldwide for all destinations' },
      { icon: Clock, title: '24/7 Support', description: 'Multilingual assistance anytime, anywhere' },
      { icon: Award, title: 'Expert Guidance', description: 'Professional visa and insurance support' },
    ],
  },
  plans: {
    titlePrimary: 'Choose Your',
    titleGradient: 'Visitor Insurance Plan',
    description: 'Flexible plans designed for different visa types and stay durations',
    cards: [
      {
        name: 'Basic Visitor Plan',
        price: 'Starting from $39/month',
        features: ['Visa Compliance', 'Basic Medical Coverage', 'Emergency Support', 'Documentation Help', 'Urgent Care Visits'],
        popular: false,
      },
      {
        name: 'Comprehensive Visitor Plan',
        price: 'Starting from $69/month',
        features: ['All Basic Features', 'Extended Medical Coverage', 'Family Coverage', 'Pre-existing Conditions', 'Trip Protection'],
        popular: true,
      },
      {
        name: 'Premium Visitor Plan',
        price: 'Starting from $119/month',
        features: ['All Comprehensive Features', 'Concierge Services', 'Priority Support', 'Higher Coverage Limits', 'Customizable Options'],
        popular: false,
      },
    ],
  },
  whatsIncluded: {
    titlePrimary: "What's Included in Your",
    titleGradient: 'Visitor Insurance',
    description: 'Comprehensive protection designed specifically for international visitors',
    features: [
      'Visa Application Compliance Guarantee',
      'Comprehensive Medical Coverage',
      'Emergency Medical Evacuation',
      '24/7 Multilingual Support',
      'Family Coverage Options',
      'Pre-existing Condition Coverage',
      'Trip Interruption Protection',
      'Documentation & Claims Assistance',
    ],
  },
  visaTypes: {
    titlePrimary: 'Coverage for All',
    titleGradient: 'Visa Types',
    description: 'Comprehensive protection regardless of your travel purpose',
    cards: [
      { name: 'Tourist Visa', coverage: 'Full Coverage', icon: '🏖️' },
      { name: 'Business Visa', coverage: 'Full Coverage', icon: '💼' },
      { name: 'Student Visa', coverage: 'Full Coverage', icon: '🎓' },
      { name: 'Family Visit', coverage: 'Full Coverage', icon: '👨‍👩‍👧‍👦' },
      { name: 'Medical Treatment', coverage: 'Full Coverage', icon: '🏥' },
      { name: 'Work Permit', coverage: 'Full Coverage', icon: '🔧' },
    ],
  },
  countries: {
    titlePrimary: 'Popular',
    titleGradient: 'Destinations',
    description: 'Visa insurance coverage for major international destinations',
    cards: [
      { name: 'Canada', flag: '🇨🇦', requirements: 'Super Visa, Regular Visitor' },
      { name: 'United States', flag: '🇺🇸', requirements: 'B1/B2 Visa, ESTA' },
      { name: 'United Kingdom', flag: '🇬🇧', requirements: 'Standard Visitor Visa' },
      { name: 'Schengen Area', flag: '🇪🇺', requirements: 'Schengen Visa Insurance' },
      { name: 'Australia', flag: '🇦🇺', requirements: 'Visitor Visa (Subclass 600)' },
      { name: 'UAE', flag: '🇦🇪', requirements: 'Tourist Visa Insurance' },
    ],
  },
  process: {
    titlePrimary: 'Simple',
    titleGradient: 'Application Process',
    description: 'Get your visitor visa insurance in just a few easy steps',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop',
    steps: [
      { stepNumber: 1, title: 'Get Quote', description: 'Receive a personalized quote.' },
      { stepNumber: 2, title: 'Choose Plan', description: 'Select the best coverage.' },
      { stepNumber: 3, title: 'Apply Online', description: 'Complete the application in minutes.' },
      { stepNumber: 4, title: 'Get Covered', description: 'Receive your policy.' },
    ],
  },
};

// Life Insurance Data
const lifeInsuranceData: ServiceDetailType = {
  id: 'life-insurance',
  name: 'Life Insurance',
  href: '/services/life-insurance',
  hero: {
    titlePrimary: 'Secure Your',
    titleGradient: 'Family',
    titleSecondary: 'Future',
    subtitlePrimary: "Reliable life insurance coverage for your family's financial security and",
    subtitleGradient: 'future protection',
    backgroundImage: '/image/life.jpg',
  },
  whyChoose: {
    titlePrimary: 'Why Choose Our',
    titleGradient: 'Life Insurance',
    description: 'We offer comprehensive life protection with flexible options designed for every stage of your journey',
    cards: [
      { icon: Heart, title: 'Family Protection', description: 'Ensure your loved ones are financially secure' },
      { icon: Calculator, title: 'Flexible Options', description: 'Customize coverage to fit your needs' },
      { icon: Award, title: 'Expert Guidance', description: 'Professional financial planning support' },
      { icon: Star, title: 'Premium Service', description: 'Exceptional customer experience' },
    ],
  },
  plans: {
    titlePrimary: 'Choose Your',
    titleGradient: 'Life Insurance Plan',
    description: 'Flexible plans designed for different life stages and financial goals',
    cards: [
      {
        name: 'Term Life Insurance',
        price: 'Starting from $25/month',
        features: ['Affordable Premiums', 'Guaranteed Death Benefit', 'Flexible Terms', 'Convertible Options', 'Terminal Illness Rider'],
        popular: false,
      },
      {
        name: 'Whole Life Insurance',
        price: 'Starting from $89/month',
        features: ['Lifetime Coverage', 'Cash Value Growth', 'Guaranteed Premiums', 'Dividend Potential', 'Estate Planning'],
        popular: true,
      },
      {
        name: 'Universal Life Insurance',
        price: 'Starting from $149/month',
        features: ['Flexible Premiums', 'Adjustable Coverage', 'Cash Value Options', 'Investment Choices', 'Tax Benefits'],
        popular: false,
      },
    ],
  },
  whatsIncluded: {
    titlePrimary: "What's Included in Your",
    titleGradient: 'Life Insurance',
    description: 'Comprehensive protection designed for long-term financial security',
    features: [
      'Flexible Coverage Amounts & Terms',
      'Cash Value Accumulation Options',
      'Family Protection & Income Replacement',
      'Tax-Advantaged Growth & Benefits',
      'Critical Illness & Disability Riders',
      'Estate Planning & Wealth Transfer',
      'Guaranteed Premiums & Benefits',
      'Professional Financial Planning Services',
    ],
  },
  benefits: {
    titlePrimary: 'Life Insurance',
    titleGradient: 'Benefits',
    description: 'Comprehensive protection that goes beyond just a death benefit',
    cards: [
      { name: 'Family Protection', icon: '👨‍👩‍👧‍👦', description: 'Ensure your family\'s financial security' },
      { name: 'Income Replacement', icon: '💰', description: 'Replace lost income for dependents' },
      { name: 'Debt Coverage', icon: '🏠', description: 'Pay off mortgages and other debts' },
      { name: 'Education Funding', icon: '🎓', description: 'Fund children\'s education expenses' },
      { name: 'Estate Planning', icon: '📋', description: 'Efficient wealth transfer strategies' },
      { name: 'Business Continuity', icon: '🏢', description: 'Protect business interests and partners' },
    ],
  },
  riders: {
    titlePrimary: 'Additional',
    titleGradient: 'Coverage Options',
    description: 'Customize your policy with optional riders for enhanced protection',
    cards: [
      { name: 'Critical Illness', description: 'Coverage for serious health conditions' },
      { name: 'Disability Income', description: 'Monthly income if you become disabled' },
      { name: 'Accidental Death', description: 'Additional benefit for accidental death' },
      { name: 'Long-term Care', description: 'Coverage for nursing home or home care' },
      { name: 'Child Protection', description: 'Coverage for children at no extra cost' },
      { name: 'Waiver of Premium', description: 'Waive premiums if you become disabled' },
    ],
  },
  process: {
    titlePrimary: 'Simple',
    titleGradient: 'Application Process',
    description: 'Get your life insurance coverage in just a few easy steps',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2000&auto=format&fit=crop',
    steps: [
      { stepNumber: 1, title: 'Get Quote', description: 'Receive a personalized quote.' },
      { stepNumber: 2, title: 'Choose Plan', description: 'Select the best coverage.' },
      { stepNumber: 3, title: 'Apply Online', description: 'Complete the application in minutes.' },
      { stepNumber: 4, title: 'Get Covered', description: 'Receive your policy.' },
    ],
  },
};

// Home Insurance Data
const homeInsuranceData: ServiceDetailType = {
  id: 'home-insurance',
  name: 'Home Insurance',
  href: '/services/home-insurance',
  hero: {
    titlePrimary: 'Protect Your',
    titleGradient: 'Biggest',
    titleSecondary: 'Investment',
    subtitlePrimary: "Comprehensive home insurance to safeguard your property and possessions from",
    subtitleGradient: 'unexpected events',
    backgroundImage: '/image/home.jpg',
  },
  whyChoose: {
    titlePrimary: 'Why Choose Our',
    titleGradient: 'Home Insurance',
    description: 'Tailored policies providing robust protection and quick claim settlements',
    cards: [
      { icon: Home, title: 'Dwelling Coverage', description: 'Protect the structure of your home' },
      { icon: DollarSign, title: 'Affordable Rates', description: 'Competitive premiums with maximum coverage' },
      { icon: Clock, title: '24/7 Claims', description: 'Fast, hassle-free claims processing' },
      { icon: Wrench, title: 'Personal Property', description: 'Coverage for contents and valuables' },
    ],
  },
  plans: {
    titlePrimary: 'Choose Your',
    titleGradient: 'Home Protection Plan',
    description: 'Select the perfect coverage for your house, condo, or rental property',
    cards: [
      {
        name: 'Standard Home Plan',
        price: 'Starting from $49/month',
        features: ['Fire & Theft Coverage', 'Liability Protection', 'Personal Property', 'Dwelling Structure', 'Guest Medical Protection'],
        popular: false,
      },
      {
        name: 'Enhanced Home Plan',
        price: 'Starting from $79/month',
        features: ['All Standard Features', 'Water Backup', 'Replacement Cost Coverage', 'Extended Coverage Limits', 'Identity Theft'],
        popular: true,
      },
      {
        name: 'Premium Home Plan',
        price: 'Starting from $129/month',
        features: ['All Enhanced Features', 'High Value Items', 'Zero Deductible Options', 'Emergency Living Expenses', 'Ordinance or Law Coverage'],
        popular: false,
      },
    ],
  },
  whatsIncluded: {
    titlePrimary: "Key Features of",
    titleGradient: 'Our Home Coverage',
    description: 'Comprehensive protection for your home and personal belongings',
    features: [
      'Dwelling & Other Structures Coverage',
      'Personal Property Protection (Contents)',
      'Loss of Use / Additional Living Expenses',
      'Personal Liability Coverage',
      'Medical Payments to Others',
      'Identity Theft Protection Option',
      'Scheduled Personal Property Endorsement',
      'Guaranteed Replacement Cost Option',
    ],
  },
  process: {
    titlePrimary: 'Simple',
    titleGradient: 'Application Process',
    description: 'Get your home insurance coverage in just a few easy steps',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop',
    steps: [
      { stepNumber: 1, title: 'Get Quote', description: 'Receive a personalized quote.' },
      { stepNumber: 2, title: 'Choose Plan', description: 'Select the best coverage.' },
      { stepNumber: 3, title: 'Apply Online', description: 'Complete the application in minutes.' },
      { stepNumber: 4, title: 'Get Covered', description: 'Receive your policy.' },
    ],
  },
};

// Auto Insurance Data
const autoInsuranceData: ServiceDetailType = {
  id: 'auto-insurance',
  name: 'Auto Insurance',
  href: '/services/auto-insurance',
  hero: {
    titlePrimary: 'Drive with',
    titleGradient: 'Confidence',
    titleSecondary: 'Protection',
    subtitlePrimary: "Customizable auto insurance plans for full protection on the road and",
    subtitleGradient: 'peace of mind',
    backgroundImage: '/image/auto.jpg',
  },
  whyChoose: {
    titlePrimary: 'Why Choose Our',
    titleGradient: 'Auto Insurance',
    description: 'Flexible options, great rates, and reliable support when you need it most.',
    cards: [
      { icon: Car, title: 'Collision Coverage', description: 'Cover damage to your vehicle from an accident' },
      { icon: DollarSign, title: 'Competitive Rates', description: 'Maximum savings with personalized discounts' },
      { icon: Clock, title: '24/7 Roadside', description: 'Immediate assistance anytime, anywhere' },
      { icon: Zap, title: 'Quick Claims', description: 'Fast and fair claim settlement process' },
    ],
  },
  plans: {
    titlePrimary: 'Choose Your',
    titleGradient: 'Auto Policy',
    description: 'Liability, Comprehensive, and Full Coverage plans to match your driving needs',
    cards: [
      {
        name: 'Basic Liability Plan',
        price: 'Starting from $35/month',
        features: ['State Minimum Liability', 'Property Damage Coverage', 'Basic Roadside Assistance', 'Glass Coverage', 'Towing Service'],
        popular: false,
      },
      {
        name: 'Comprehensive Plan',
        price: 'Starting from $75/month',
        features: ['Increased Liability Limits', 'Collision Coverage', 'Comprehensive Coverage', 'Rental Reimbursement', 'Personal Injury Protection'],
        popular: true,
      },
      {
        name: 'Premium Full Coverage',
        price: 'Starting from $130/month',
        features: ['High Liability Limits', 'Zero Deductibles', 'New Car Replacement', 'Accident Forgiveness', 'GAP Coverage'],
        popular: false,
      },
    ],
  },
  whatsIncluded: {
    titlePrimary: "Core",
    titleGradient: 'Coverages',
    description: 'Essential components included in a typical auto insurance policy',
    features: [
      'Bodily Injury Liability',
      'Property Damage Liability',
      'Collision Coverage',
      'Comprehensive Coverage (Theft, Vandalism)',
      'Uninsured/Underinsured Motorist',
      'Personal Injury Protection (PIP)',
      'Medical Payments Coverage',
      'Rental Car Reimbursement Option',
    ],
  },
  process: {
    titlePrimary: 'Simple',
    titleGradient: 'Application Process',
    description: 'Get your auto insurance coverage in just a few easy steps',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop',
    steps: [
      { stepNumber: 1, title: 'Get Quote', description: 'Receive a personalized quote.' },
      { stepNumber: 2, title: 'Choose Plan', description: 'Select the best coverage.' },
      { stepNumber: 3, title: 'Apply Online', description: 'Complete the application in minutes.' },
      { stepNumber: 4, title: 'Get Covered', description: 'Receive your policy.' },
    ],
  },
};

// Export all service details as an array and a map for easy lookup
export const allServiceDetails: ServiceDetailType[] = [
  healthInsuranceData,
  travelInsuranceData,
  visitorVisaInsuranceData,
  lifeInsuranceData,
  homeInsuranceData,
  autoInsuranceData,
];

export const serviceDetailsMap: Record<string, ServiceDetailType> = allServiceDetails.reduce((acc, service) => {
  acc[service.href] = service;
  return acc;
}, {} as Record<string, ServiceDetailType>);