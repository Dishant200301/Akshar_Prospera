// serviceDetails.ts

export interface PolicyType {
  name: string;
  description: string;
}

export interface KeyFeature {
  title: string;
  description: string;
  iconSvg: string;
}

export interface InfoPoint {
    title: string;
    description: string;
}

export interface ComparisonTableRow {
    feature: string;
    values: string[]; // e.g., ['NOT_INCLUDED', 'INCLUDED'], or ['Meets Minimum', 'Exceeds Minimum']
}

export interface ProcessStep {
    title: string;
}

export interface ServiceDetail {
  serviceName: 'Health Insurance' | 'Travel Insurance' | 'Life Insurance' | 'Home Insurance' | 'Auto Insurance';
  companyName: string;

  // Sections Data
  heroTitle: string;
  shortDescription: string;
  introduction: InfoPoint;
  policyTypesTitle: string;
  policyTypes: PolicyType[];
  keyFeaturesTitle: string;
  keyFeaturesDescription: string;
  keyFeatures: KeyFeature[];
  necessityTitle: string;
  necessityPoints: InfoPoint[];
  comparisonTitle: string;
  comparisonColumns: string[];
  comparisonTable: ComparisonTableRow[];
  ctaBanner: { title: string; text: string; buttonText: string; };
  coveredTitle: string;
  coveredItems: string[];
  notCoveredTitle: string;
  notCoveredItems: string[];
  addOnsInfo: InfoPoint;
  providerInfo: InfoPoint;
  purchaseProcessTitle: string;
  purchaseProcess: ProcessStep[];
  renewalInfo: InfoPoint;
  finalCta: { title: string; text: string; buttonText: string; };
}

export const insuranceServices: ServiceDetail[] = [
  // =========================================================================================
  // AUTO INSURANCE - Data from the main image
  // =========================================================================================
  {
    serviceName: 'Auto Insurance',
    companyName: 'AutoSecure',
    heroTitle: 'Smart, Simple, and Secure Auto Insurance',
    shortDescription: 'Get comprehensive coverage that protects you on every journey. Instant quotes, easy claims, and peace of mind, all in one place.',
    
    introduction: {
      title: 'What is Auto Insurance & Why You Need It',
      description: 'Auto Insurance is a contract between you and an insurance company that protects you against financial loss in the event of an accident or theft. In exchange for your paying a premium, the insurance company agrees to pay your losses as outlined in your policy. It’s a legal requirement in most places and provides crucial financial protection for you, your vehicle, and others on the road.'
    },

    policyTypesTitle: 'Types of Auto Insurance',
    policyTypes: [
      { name: 'Third-Party Liability', description: 'Covers damages to a third party’s vehicle or property, and injury or death of a third party. This is the minimum legal requirement.' },
      { name: 'Comprehensive Coverage', description: 'Includes third-party liability plus coverage for damage to your own vehicle due to accidents, theft, fire, and natural disasters.' },
      { name: 'Collision & Own Damage', description: 'Specifically covers the cost of repairing or replacing your car after a collision, regardless of who is at fault.' },
      { name: 'Standalone Cover Options', description: 'Allows you to purchase specific covers, such as Personal Accident cover, without a full comprehensive policy.' },
    ],
    
    keyFeaturesTitle: 'Key Features & Benefits',
    keyFeaturesDescription: 'We provide a wide range of features designed to offer you the best protection and convenience, ensuring you’re covered in every situation.',
    keyFeatures: [
      { title: 'Premium Savings', description: 'Save more with competitive pricing and No Claim Bonuses.', iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.75A.75.75 0 013 4.5h.75m0 0h.75A.75.75 0 015.25 6v.75m0 0v-.75A.75.75 0 015.25 4.5h-.75m0 0h1.5m0 0h.75a.75.75 0 01.75.75v.75m0 0v-.75a.75.75 0 01.75-.75h.75m0 0h.75a.75.75 0 01.75.75v.75m0 0v-.75a.75.75 0 01.75-.75h.75a6.75 6.75 0 016.75 6.75v.75m-16.5 0v.75c0 .414.336.75.75.75h14.25c.414 0 .75-.336.75-.75v-.75" />' },
      { title: '24/7 Claim Assistance', description: 'Our team is always ready to help you with a hassle-free claim process.', iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />' },
      { title: 'Fully Online Process', description: 'Buy, manage, and renew your policy from the comfort of your home.', iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />' },
      { title: 'Nationwide Service', description: 'Access our network of services and garages no matter where you are.', iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />' },
      { title: 'Cashless Garages', description: 'Enjoy seamless, cashless repairs at thousands of network garages.', iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />' },
      { title: 'Valuable Add-ons', description: 'Enhance your policy with a variety of optional covers for complete protection.', iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />' },
    ],
    
    necessityTitle: 'Why Insurance is Necessary',
    necessityPoints: [
      { title: 'Legal Compliance:', description: 'Avoid fines and legal trouble by meeting mandatory insurance requirements.' },
      { title: 'Accident Coverage:', description: 'Pays for repairs to your vehicle and others’ if you’re at fault in an accident.' },
      { title: 'Theft & Vandalism Protection:', description: 'Covers the loss or damage if your car is stolen or vandalized.' },
      { title: 'Natural Disaster Coverage:', description: 'Protects against damage from events like floods, hail, or fire.' },
      { title: 'Personal Injury Protection:', description: 'Helps cover medical expenses for you and your passengers after an accident.' },
      { title: 'Financial Security:', description: 'Prevents a large, unexpected expense from derailing your financial stability.' },
    ],

    comparisonTitle: 'Policy Comparison: Comprehensive vs. Third-Party',
    comparisonColumns: ['Feature', 'Third-Party Liability', 'Comprehensive'],
    comparisonTable: [
        { feature: 'Damage to Your Vehicle', values: ['NOT_INCLUDED', 'INCLUDED'] },
        { feature: 'Third-Party Damage/Injury', values: ['INCLUDED', 'INCLUDED'] },
        { feature: 'Theft & Vandalism', values: ['NOT_INCLUDED', 'INCLUDED'] },
        { feature: 'Natural Disasters', values: ['NOT_INCLUDED', 'INCLUDED'] },
        { feature: 'Legal Requirement', values: ['Meets Minimum', 'Exceeds Minimum'] },
        { feature: 'Add-on Covers', values: ['NOT_INCLUDED', 'INCLUDED'] },
    ],

    ctaBanner: {
        title: 'Ready to find the perfect plan?',
        text: 'Compare our plans and get a personalized quote in minutes.',
        buttonText: 'Compare Plans'
    },

    coveredTitle: 'What is Covered',
    coveredItems: [
        'Damage from accidents, collisions, or overturning.',
        'Loss due to fire, explosion, or self-ignition.',
        'Theft, burglary, or housebreaking.',
        'Damage from natural disasters like floods, storms, and earthquakes.',
        'Liability for third-party injury, death, or property damage.',
    ],
    notCoveredTitle: 'What is Not Covered',
    notCoveredItems: [
        'Driving under the influence (DUI) of alcohol or drugs.',
        'Engaging in illegal racing or speed tests.',
        'Driving with an expired policy or without a valid license.',
        'General wear and tear, or mechanical/electrical breakdowns.',
        'Using a private vehicle for commercial purposes.',
    ],

    addOnsInfo: { title: '8. Add-on Covers', description: 'Enhance your protection with optional add-ons like Zero Depreciation, Roadside Assistance, and Engine Protection.' },
    providerInfo: { title: '9. Why Choose This Insurance Provider', description: 'Benefit from our extensive service network, seamless digital experience, and commitment to your protection.' },
    
    purchaseProcessTitle: '10. How to Buy/Renew Online',
    purchaseProcess: [
        { title: 'Enter Details' },
        { title: 'Compare Plans' },
        { title: 'Make Payment' },
        { title: 'Get Policy' },
    ],
    
    renewalInfo: { title: '10. How to Renew an Expired Policy', description: 'Learn about grace periods, NCB rules, and the simple online steps to renew your expired policy without hassle.' },
    
    finalCta: {
        title: 'Drive with Confidence. Get Insured Today.',
        text: 'Don’t wait for an emergency. Secure your peace of mind on the road with a policy that has you covered.',
        buttonText: 'Buy Policy Now'
    }
  },

  // ... (Add placeholder data for other insurance types)
];

export const getServiceDetail = (serviceName: ServiceDetail['serviceName']): ServiceDetail | undefined => {
    return insuranceServices.find(s => s.serviceName === serviceName);
};