// allServicesData.ts - Comprehensive data for all insurance services

export interface PolicyType {
  name: string;
  description: string;
}

export interface KeyFeature {
  title: string;
  description: string;
}

export interface AddOnCover {
  name: string;
  description: string;
}

export interface ComparisonRow {
  feature: string;
  basic: boolean;
  comprehensive: boolean;
}

export interface ServiceDetailData {
  id: string;
  serviceName: 'Health Insurance' | 'Travel Insurance' | 'Life Insurance' | 'Home Insurance' | 'Auto Insurance';
  slug: string;
  heroImage: string;
  tagline: string;
  shortDescription: string;
  whatIsInsurance: string;
  whyNeed: string;
  policyTypes: PolicyType[];
  keyFeatures: KeyFeature[];
  whyNecessary: string[];
  comparison: ComparisonRow[];
  whatIsCovered: string[];
  whatIsNotCovered: string[];
  addOnCovers: AddOnCover[];
  whyChooseProvider: KeyFeature[];
  howToBuySteps: string[];
}

export const allServicesData: ServiceDetailData[] = [
  // Health Insurance
  {
    id: 'health',
    serviceName: 'Health Insurance',
    slug: 'health-insurance',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
    tagline: 'Comprehensive Health Coverage Today',
    shortDescription: 'Protect yourself and loved ones with health insurance covering medical hospitalization and critical illnesses.',
    whatIsInsurance: 'Health Insurance is a contract that provides financial protection against medical expenses. It covers hospitalization costs, doctor fees, diagnostic tests, and other healthcare expenses, ensuring you receive quality medical care without financial burden.',
    whyNeed: 'Rising healthcare costs make health insurance essential. It protects your savings from unexpected medical emergencies and ensures access to quality healthcare when you need it most.',
    policyTypes: [
      {
        name: 'Individual Health Policy',
        description: 'Covers a single person against medical emergencies and hospitalization costs with customized coverage limits.'
      },
      {
        name: 'Family Floater Policy',
        description: 'Covers entire family under single sum insured, shared among all members with flexible coverage options.'
      },
      {
        name: 'Critical Illness Policy',
        description: 'Provides lump-sum payout upon diagnosis of specified critical illnesses like cancer, heart attack, or stroke.'
      },
      {
        name: 'Senior Citizen Policy',
        description: 'Specialized coverage for individuals above 60 years with pre-existing disease coverage and higher sum insured.'
      }
    ],
    keyFeatures: [
      {
        title: 'Cashless Hospitalization',
        description: 'Get treatment at network hospitals without paying upfront. Direct settlement with hospital.'
      },
      {
        title: 'Tax Benefits',
        description: 'Premiums paid are eligible for deduction under Section 80D of Income Tax Act up to ₹25,000.'
      },
      {
        title: 'Lifetime Renewability',
        description: 'Policies renewable for life ensuring continuous coverage as you age without re-application.'
      },
      {
        title: 'No Claim Bonus',
        description: 'Increase in sum insured for every claim-free year, rewarding healthy lifestyle.'
      },
      {
        title: 'Pre and Post Hospitalization',
        description: 'Coverage for medical expenses 30-60 days before and 60-180 days after hospitalization.'
      },
      {
        title: 'Day Care Procedures',
        description: 'Coverage for treatments that don\'t require 24-hour hospitalization like dialysis, chemotherapy.'
      }
    ],
    whyNecessary: [
      'Medical Inflation: Healthcare costs rising at 10-15% annually, making insurance crucial for financial protection.',
      'Emergency Coverage: Unexpected accidents or illnesses can drain savings; insurance provides safety net.',
      'Quality Healthcare: Access to best hospitals and doctors without worrying about costs.',
      'Tax Savings: Reduce taxable income through premium payments under Section 80D.',
      'Family Protection: Single policy can cover entire family, ensuring everyone\'s health security.',
      'Peace of Mind: Focus on recovery without financial stress during medical emergencies.'
    ],
    comparison: [
      { feature: 'Hospitalization Coverage', basic: true, comprehensive: true },
      { feature: 'Pre-existing Disease Cover', basic: false, comprehensive: true },
      { feature: 'Maternity Benefits', basic: false, comprehensive: true },
      { feature: 'Day Care Procedures', basic: true, comprehensive: true },
      { feature: 'Ambulance Charges', basic: true, comprehensive: true }
    ],
    whatIsCovered: [
      'In-patient Hospitalization: Room rent, ICU charges, doctor fees, nursing charges for minimum 24-hour stay.',
      'Pre-Hospitalization: Medical expenses 30-60 days before hospitalization including diagnostic tests.',
      'Post-Hospitalization: Follow-up treatments and expenses 60-180 days after discharge.',
      'Ambulance Charges: Emergency road ambulance costs up to specified limit.',
      'Day Care Procedures: Treatments not requiring 24-hour hospitalization like dialysis, chemotherapy.',
    ],
    whatIsNotCovered: [
      'Pre-existing diseases within initial waiting period (typically 2-4 years).',
      'Cosmetic surgery unless required due to accident or medical necessity.',
      'Treatment for injuries sustained during war, criminal activities, or self-inflicted injuries.',
      'Voluntary termination of pregnancy except for medical complications.',
      'Dental treatment unless requiring hospitalization.',
    ],
    addOnCovers: [
      { name: 'Maternity Cover', description: 'Covers expenses related to childbirth, pre-natal, and post-natal care including newborn baby cover.' },
      { name: 'Hospital Cash Allowance', description: 'Daily cash benefit for miscellaneous expenses during hospitalization period.' },
      { name: 'Reduction in Waiting Periods', description: 'Allows certain benefits to kick in sooner than standard waiting period.' },
      { name: 'Critical Illness Rider', description: 'Additional lump-sum payout for diagnosis of specified critical illnesses.' },
      { name: 'Personal Accident Cover', description: 'Coverage for accidental death or permanent disability.' },
      { name: 'Consumables Cover', description: 'Reimbursement for medical consumables like syringes, gloves, masks used during treatment.' }
    ],
    whyChooseProvider: [
      {
        title: 'Large Network of Hospitals',
        description: 'Access to 10,000+ cashless hospitals across India for seamless treatment experience.'
      },
      {
        title: 'High Claim Settlement Ratio',
        description: 'Proven track record of 98%+ claim settlement ratio ensuring quick and reliable claims.'
      },
      {
        title: 'Wellness Program Discounts',
        description: 'Earn discounts on renewal by staying active and maintaining healthy lifestyle habits.'
      }
    ],
    howToBuySteps: [
      'Get Quote: Enter your age, family details, and get instant premium quote online.',
      'Choose Plan: Select coverage amount, policy type, and add-ons based on your needs.',
      'Medical Check-up: Complete medical screening if required based on age and sum insured.',
      'Make Payment: Secure online payment through multiple payment options.',
      'Get Policy: Receive policy document instantly via email and start coverage immediately.'
    ]
  },

  // Travel Insurance
  {
    id: 'travel',
    serviceName: 'Travel Insurance',
    slug: 'travel-insurance',
    heroImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80',
    tagline: 'Travel Safe Stay Protected',
    shortDescription: 'Comprehensive travel insurance covering medical emergencies trip cancellations baggage loss and more for international travel.',
    whatIsInsurance: 'Travel Insurance provides financial protection against unforeseen events during your journey including medical emergencies abroad, trip cancellations, lost baggage, flight delays, and personal liability.',
    whyNeed: 'Travel insurance protects you from unexpected expenses during trips, ensures medical coverage abroad where your regular health insurance may not apply, and provides assistance in emergencies.',
    policyTypes: [
      {
        name: 'Single Trip Policy',
        description: 'Covers one journey for specified duration, ideal for occasional travelers with comprehensive protection.'
      },
      {
        name: 'Multi-Trip Annual Policy',
        description: 'Covers multiple trips throughout the year, suitable for frequent travelers with unlimited trips.'
      },
      {
        name: 'Student Travel Policy',
        description: 'Specialized coverage for students studying abroad including tuition fee protection and sponsor protection.'
      },
      {
        name: 'Schengen Visa Insurance',
        description: 'Meets mandatory insurance requirements for Schengen visa applications with minimum €30,000 coverage.'
      }
    ],
    keyFeatures: [
      {
        title: 'Worldwide Coverage',
        description: 'Medical and non-medical coverage valid across 150+ countries worldwide.'
      },
      {
        title: '24/7 Global Assistance',
        description: 'Round-the-clock emergency helpline and support services available globally.'
      },
      {
        title: 'Cashless Medical Treatment',
        description: 'Direct settlement with network hospitals abroad for emergency medical treatment.'
      },
      {
        title: 'Trip Cancellation Cover',
        description: 'Reimbursement for non-refundable expenses if trip is cancelled due to covered reasons.'
      },
      {
        title: 'Baggage Protection',
        description: 'Coverage for loss, theft, or damage to checked-in baggage during travel.'
      },
      {
        title: 'Personal Liability',
        description: 'Protection against legal liability for injury to third party or property damage.'
      }
    ],
    whyNecessary: [
      'Medical Emergencies Abroad: Healthcare costs in foreign countries can be extremely high without insurance.',
      'Trip Cancellations: Protect non-refundable bookings from unexpected cancellations due to illness or emergencies.',
      'Baggage Loss: Compensation for lost or delayed baggage ensuring you can continue your trip.',
      'Flight Delays: Coverage for additional expenses due to flight delays or missed connections.',
      'Emergency Evacuation: Covers cost of medical evacuation to nearest adequate facility or back home.',
      'Visa Requirements: Many countries mandate travel insurance for visa approval.'
    ],
    comparison: [
      { feature: 'Emergency Medical Coverage', basic: true, comprehensive: true },
      { feature: 'Trip Cancellation', basic: false, comprehensive: true },
      { feature: 'Baggage Loss/Delay', basic: true, comprehensive: true },
      { feature: 'Adventure Sports Cover', basic: false, comprehensive: true },
      { feature: 'Personal Liability', basic: false, comprehensive: true }
    ],
    whatIsCovered: [
      'Emergency Medical Expenses: Hospitalization and OPD expenses abroad due to illness or injury.',
      'Trip Cancellation/Interruption: Non-refundable expenses if trip cancelled due to illness, death in family.',
      'Baggage Loss/Delay: Reimbursement for permanent loss or delay of checked-in baggage.',
      'Flight Delay: Additional expenses for accommodation and meals due to flight delays over 12 hours.',
      'Personal Liability: Legal liability for accidental injury to third party or property damage.',
    ],
    whatIsNotCovered: [
      'Travel against medical advice or for purpose of receiving medical treatment.',
      'Losses resulting from civil war, nuclear risks, or acts of terrorism (unless specified).',
      'Loss/damage of baggage due to neglect or improper packing.',
      'Damage to valuables like cash, jewelry, passports unless kept in hotel safe.',
      'Pre-existing medical conditions (unless covered by specific add-on).',
    ],
    addOnCovers: [
      { name: 'Adventure Sports Cover', description: 'Coverage for medical expenses during high-risk activities like skiing, scuba diving, bungee jumping.' },
      { name: 'Home Burglary Insurance', description: 'Covers loss due to burglary at primary residence while traveling.' },
      { name: 'Increased Baggage Cover', description: 'Higher financial limit for loss or delay of checked baggage beyond standard coverage.' },
      { name: 'Golf Equipment Cover', description: 'Protection for golf equipment against loss, theft, or damage during travel.' },
      { name: 'Cruise Cover', description: 'Specialized coverage for cruise travel including cabin confinement and missed port expenses.' },
      { name: 'Pre-existing Disease Cover', description: 'Coverage for emergency medical treatment arising from pre-existing conditions.' }
    ],
    whyChooseProvider: [
      {
        title: 'Zero Deductible Options',
        description: 'Choose plans with no deductible for 100% claim payout without out-of-pocket expenses.'
      },
      {
        title: 'Global Provider Network',
        description: 'Direct settlement with major international hospitals and assistance providers worldwide.'
      },
      {
        title: 'Instant Policy Issuance',
        description: 'Get policy instantly online, perfect for last-minute travel plans and visa applications.'
      }
    ],
    howToBuySteps: [
      'Enter Travel Details: Provide destination, travel dates, number of travelers, and age details.',
      'Choose Coverage: Select policy type (single/multi-trip), coverage amount, and required add-ons.',
      'Review Quote: Compare plans and get instant premium quote based on your requirements.',
      'Make Payment: Complete secure online payment and receive policy via email immediately.',
      'Travel Protected: Carry policy document and emergency contact numbers during your trip.'
    ]
  },

  // Life Insurance
  {
    id: 'life',
    serviceName: 'Life Insurance',
    slug: 'life-insurance',
    heroImage: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80',
    tagline: 'Secure Family Financial Future',
    shortDescription: 'Comprehensive life insurance providing financial security to loved ones with guaranteed payouts in case of unfortunate demise.',
    whatIsInsurance: 'Life Insurance is a contract providing financial protection to your family in the event of your death. It ensures your dependents receive a lump-sum amount to maintain their lifestyle, pay off debts, and secure their future.',
    whyNeed: 'Life insurance ensures your family\'s financial stability even in your absence, covering daily expenses, children\'s education, loan repayments, and maintaining their standard of living.',
    policyTypes: [
      {
        name: 'Term Life Insurance',
        description: 'Pure protection plan with high coverage and low premiums. Payout only upon death during policy term.'
      },
      {
        name: 'Whole Life Insurance',
        description: 'Lifelong coverage with guaranteed payout and cash value accumulation component for savings.'
      },
      {
        name: 'Unit Linked Insurance Plan (ULIP)',
        description: 'Combination of insurance and investment with market-linked returns and life coverage.'
      },
      {
        name: 'Endowment Plan',
        description: 'Provides maturity benefit if you survive the term plus death benefit for family protection.'
      }
    ],
    keyFeatures: [
      {
        title: 'Financial Security for Family',
        description: 'Lump-sum payout ensures family can maintain lifestyle, pay mortgages, and cover education costs.'
      },
      {
        title: 'Tax Benefits',
        description: 'Premiums eligible for deduction under Section 80C, maturity tax-free under Section 10(10D).'
      },
      {
        title: 'Terminal Illness Benefit',
        description: 'Portion of sum assured paid if diagnosed with terminal illness during policy term.'
      },
      {
        title: 'Flexible Premium Payment',
        description: 'Choose premium payment frequency - monthly, quarterly, half-yearly, or annual.'
      },
      {
        title: 'Loan Against Policy',
        description: 'Borrow against policy\'s cash value for emergencies without surrendering the policy.'
      },
      {
        title: 'Riders for Enhanced Protection',
        description: 'Add riders for critical illness, accidental death, disability for comprehensive coverage.'
      }
    ],
    whyNecessary: [
      'Income Replacement: Ensures family receives regular income to maintain standard of living after your demise.',
      'Debt Repayment: Covers outstanding loans like home loan, car loan preventing burden on family.',
      'Children\'s Education: Secures funds for children\'s education and marriage expenses.',
      'Retirement Planning: Builds corpus for retirement through savings and investment components.',
      'Estate Planning: Facilitates smooth wealth transfer to next generation with tax benefits.',
      'Business Continuity: Protects business interests and provides buy-sell agreement funding.'
    ],
    comparison: [
      { feature: 'Death Benefit', basic: true, comprehensive: true },
      { feature: 'Maturity Benefit', basic: false, comprehensive: true },
      { feature: 'Cash Value Accumulation', basic: false, comprehensive: true },
      { feature: 'Loan Facility', basic: false, comprehensive: true },
      { feature: 'Flexible Premium Options', basic: false, comprehensive: true }
    ],
    whatIsCovered: [
      'Death Benefit: Full sum assured paid to nominee upon insured\'s death during policy term.',
      'Maturity Benefit: Lump-sum amount (Sum Assured + Bonus) if insured survives policy term (non-term plans).',
      'Accidental Death Benefit: Additional sum paid if death occurs due to accident.',
      'Terminal Illness Benefit: Advance payout if diagnosed with terminal illness with limited life expectancy.',
      'Disability Benefit: Waiver of future premiums if insured becomes permanently disabled.',
    ],
    whatIsNotCovered: [
      'Death by suicide within first year of policy issuance.',
      'Death resulting from drug/alcohol abuse or self-inflicted injuries.',
      'Death due to participation in criminal activities or illegal acts.',
      'Death during high-risk sports or activities (unless covered by specific rider).',
      'Death due to pre-existing conditions not disclosed during application.',
    ],
    addOnCovers: [
      { name: 'Waiver of Premium Rider', description: 'Waives all future premiums if policyholder becomes permanently disabled.' },
      { name: 'Critical Illness Rider', description: 'Lump-sum payout upon diagnosis of critical illness, separate from death benefit.' },
      { name: 'Income Benefit Rider', description: 'Regular income stream to family for fixed period after insured\'s death.' },
      { name: 'Accidental Death Benefit Rider', description: 'Additional sum assured if death occurs due to accident.' },
      { name: 'Accidental Disability Rider', description: 'Lump-sum payout if insured becomes permanently disabled due to accident.' },
      { name: 'Hospital Cash Rider', description: 'Daily cash benefit during hospitalization for medical expenses.' }
    ],
    whyChooseProvider: [
      {
        title: 'Quick Online Process',
        description: 'Easy application and instant policy issuance with minimal documentation and paperwork.'
      },
      {
        title: 'High Solvency Ratio',
        description: 'Strong financial stability with 1.75+ solvency ratio ensuring ability to meet long-term claims.'
      },
      {
        title: 'Dedicated Claim Support',
        description: 'Specialized claim support team for fast and empathetic settlement with 98%+ settlement ratio.'
      }
    ],
    howToBuySteps: [
      'Calculate Coverage: Determine required coverage based on income, liabilities, and family needs.',
      'Choose Policy Type: Select between term, whole life, ULIP based on goals and budget.',
      'Complete Application: Fill online application with personal, medical, and nominee details.',
      'Medical Screening: Undergo medical tests if required based on age and sum assured.',
      'Make Payment: Pay premium online and receive policy document instantly via email.'
    ]
  },

  // Home Insurance
  {
    id: 'home',
    serviceName: 'Home Insurance',
    slug: 'home-insurance',
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    tagline: 'Protect Home Secure Future',
    shortDescription: 'Comprehensive home insurance protecting property structure and contents from fire natural calamities burglary and unforeseen perils.',
    whatIsInsurance: 'Home Insurance provides financial protection for your home structure and contents against damages from fire, natural disasters, theft, and other covered perils. It ensures you can rebuild or repair your home without financial burden.',
    whyNeed: 'Your home is likely your biggest investment. Home insurance protects this asset from unexpected damages, provides liability coverage, and ensures financial security for your family.',
    policyTypes: [
      {
        name: 'Structure Only Policy',
        description: 'Covers building structure, walls, roof, and fixed fittings against fire and other perils.'
      },
      {
        name: 'Contents Only Policy',
        description: 'Covers household goods, furniture, electronics, and valuables inside the home.'
      },
      {
        name: 'Comprehensive Policy',
        description: 'Covers both structure and contents under single policy with additional benefits.'
      },
      {
        name: 'Tenant\'s Policy',
        description: 'Specialized coverage for renters protecting personal belongings and liability.'
      }
    ],
    keyFeatures: [
      {
        title: 'Fire and Allied Perils',
        description: 'Coverage for damage from fire, explosion, lightning, and other specified perils.'
      },
      {
        title: 'Natural Disaster Protection',
        description: 'Covers damage from earthquakes, floods, storms, cyclones, and landslides.'
      },
      {
        title: 'Burglary and Theft Coverage',
        description: 'Protection against loss or damage to contents due to forced entry and theft.'
      },
      {
        title: 'Alternative Accommodation',
        description: 'Covers temporary accommodation costs if home becomes uninhabitable.'
      },
      {
        title: 'Public Liability',
        description: 'Covers legal liability for bodily injury or property damage to third parties.'
      },
      {
        title: 'Electronic Equipment Cover',
        description: 'Protection for electronic devices against accidental damage and power surge.'
      }
    ],
    whyNecessary: [
      'Asset Protection: Safeguards your biggest investment from fire, natural disasters, and theft.',
      'Financial Security: Prevents major financial loss from unexpected home damages or destruction.',
      'Liability Coverage: Protects against legal claims if someone is injured on your property.',
      'Mortgage Requirement: Most lenders require home insurance for mortgage approval.',
      'Peace of Mind: Live worry-free knowing your home and belongings are protected.',
      'Replacement Cost: Ensures you can rebuild or repair home to original condition.'
    ],
    comparison: [
      { feature: 'Building Structure', basic: true, comprehensive: true },
      { feature: 'Contents Coverage', basic: false, comprehensive: true },
      { feature: 'Alternative Accommodation', basic: false, comprehensive: true },
      { feature: 'Public Liability', basic: false, comprehensive: true },
      { feature: 'Natural Disasters', basic: true, comprehensive: true }
    ],
    whatIsCovered: [
      'Fire and Special Perils: Fire, explosion, implosion, aircraft damage, and other specified perils.',
      'Natural Disasters: Earthquakes, floods, storms, cyclones, lightning, and landslides.',
      'Burglary and Theft: Loss or damage to contents due to forced entry and theft.',
      'Alternative Accommodation: Temporary housing costs if home becomes uninhabitable due to covered event.',
      'Electronic Equipment: Accidental damage to TVs, computers, appliances from power surge or short circuit.',
    ],
    whatIsNotCovered: [
      'Normal wear and tear, gradual deterioration due to age or lack of maintenance.',
      'Loss or damage while house is vacant for more than 30-60 consecutive days.',
      'Loss of cash, documents, or valuables unless kept in locked safe (limits apply).',
      'Damage due to faulty design, defective construction, or poor workmanship.',
      'War, nuclear risks, terrorism (unless specifically covered by add-on).',
    ],
    addOnCovers: [
      { name: 'Jewelry and Valuables Cover', description: 'Higher coverage for high-value items like jewelry, gold, silverware beyond standard limits.' },
      { name: 'Portable Equipment Cover', description: 'Covers laptops, mobile phones, cameras even outside the home premises.' },
      { name: 'Terrorism Cover', description: 'Specific add-on for enhanced protection against acts of terrorism.' },
      { name: 'Earthquake Cover', description: 'Additional coverage for earthquake damage in high-risk zones.' },
      { name: 'Flood Cover', description: 'Protection against flood damage in flood-prone areas.' },
      { name: 'Home Appliance Protection', description: 'Extended warranty and breakdown coverage for home appliances.' }
    ],
    whyChooseProvider: [
      {
        title: 'New-for-Old Policy',
        description: 'Replacement cost based on current market price, not depreciated value for faster recovery.'
      },
      {
        title: 'Hassle-Free Inspection',
        description: 'Simple digital inspection process, often not required for standard policies under certain limits.'
      },
      {
        title: 'Quick Claim Settlement',
        description: 'Specialized property claims team ensures faster turnaround with 95%+ settlement ratio.'
      }
    ],
    howToBuySteps: [
      'Property Valuation: Determine reconstruction cost of building and value of contents.',
      'Choose Coverage: Select structure only, contents only, or comprehensive policy.',
      'Add-ons Selection: Choose additional covers like earthquake, flood, valuables as needed.',
      'Property Inspection: Complete digital inspection or physical survey if required.',
      'Make Payment: Pay premium online and receive policy document via email instantly.'
    ]
  },

  // Auto Insurance
  {
    id: 'auto',
    serviceName: 'Auto Insurance',
    slug: 'auto-insurance',
    heroImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200&q=80',
    tagline: 'Smart Simple Secure Insurance',
    shortDescription: 'Comprehensive auto insurance protecting vehicle against accidents theft and third party liabilities with cashless claims and support.',
    whatIsInsurance: 'Auto Insurance is a contract protecting you financially from vehicle damages, theft, and third-party liabilities. It\'s legally mandatory and provides crucial financial protection for you, your vehicle, and others on the road.',
    whyNeed: 'Auto insurance is legally required and protects you from financial losses due to accidents, theft, or damage. It covers repair costs, third-party liabilities, and provides peace of mind while driving.',
    policyTypes: [
      {
        name: 'Third-Party Liability',
        description: 'Covers damages to third-party vehicles or injuries to people. Minimum legal requirement.'
      },
      {
        name: 'Comprehensive Coverage',
        description: 'Third-party liability plus coverage for own vehicle damage from accidents, theft, fire, natural disasters.'
      },
      {
        name: 'Standalone Own Damage',
        description: 'Covers only own vehicle damage without third-party liability (for vehicles with valid TP cover).'
      },
      {
        name: 'Pay-As-You-Drive',
        description: 'Usage-based insurance where premium depends on actual kilometers driven annually.'
      }
    ],
    keyFeatures: [
      {
        title: 'Cashless Repairs',
        description: 'Seamless cashless repairs at 5000+ network garages across India without upfront payment.'
      },
      {
        title: '24/7 Claim Assistance',
        description: 'Round-the-clock support for claims, roadside assistance, and emergency services.'
      },
      {
        title: 'No Claim Bonus',
        description: 'Discount up to 50% on renewal premium for every claim-free year.'
      },
      {
        title: 'Instant Policy Issuance',
        description: 'Get policy online in minutes with instant digital policy document.'
      },
      {
        title: 'Personal Accident Cover',
        description: 'Mandatory ₹15 lakhs personal accident cover for owner-driver included.'
      },
      {
        title: 'Depreciation Protection',
        description: 'Zero depreciation add-on ensures full claim value without depreciation deduction.'
      }
    ],
    whyNecessary: [
      'Legal Compliance: Mandatory under Motor Vehicles Act 1988; driving without insurance attracts heavy fines.',
      'Accident Coverage: Pays for vehicle repairs and third-party damages if you\'re at fault.',
      'Theft Protection: Covers vehicle replacement cost if stolen or damaged beyond repair.',
      'Natural Disaster Coverage: Protects against damage from floods, earthquakes, storms, and fires.',
      'Personal Injury Protection: Covers medical expenses for you and passengers after accident.',
      'Financial Security: Prevents large unexpected expenses from draining your savings.'
    ],
    comparison: [
      { feature: 'Third-Party Damage', basic: true, comprehensive: true },
      { feature: 'Own Damage Coverage', basic: false, comprehensive: true },
      { feature: 'Theft Coverage', basic: false, comprehensive: true },
      { feature: 'Natural Disasters', basic: false, comprehensive: true },
      { feature: 'Personal Accident', basic: true, comprehensive: true }
    ],
    whatIsCovered: [
      'Own Damage: Accidents, collisions, fire, theft, explosion, self-ignition of vehicle.',
      'Third-Party Liability: Damages to third-party vehicle, property, injury, or death.',
      'Natural Disasters: Floods, earthquakes, storms, cyclones, landslides, rockslides.',
      'Man-made Disasters: Riots, strikes, terrorism, vandalism, malicious acts.',
      'Personal Accident: ₹15 lakhs cover for owner-driver for death or permanent disability.',
    ],
    whatIsNotCovered: [
      'Driving under influence of alcohol or drugs.',
      'Engaging in illegal racing, speed tests, or reliability trials.',
      'Driving with expired policy or without valid driving license.',
      'Normal wear and tear, mechanical or electrical breakdowns.',
      'Using private vehicle for commercial purposes without appropriate coverage.',
    ],
    addOnCovers: [
      { name: 'Zero Depreciation', description: 'Full claim value for vehicle parts without depreciation deduction on claims.' },
      { name: 'Roadside Assistance', description: 'Help for breakdowns, flat tires, fuel delivery, towing services 24/7.' },
      { name: 'Engine Protection', description: 'Covers engine and gearbox damage due to water ingression or oil leakage.' },
      { name: 'Return to Invoice', description: 'Compensates full invoice value in case of total loss or theft of vehicle.' },
      { name: 'Passenger Cover', description: 'Extends personal accident coverage to all passengers in the vehicle.' },
      { name: 'NCB Protection', description: 'Protects No Claim Bonus even after making one claim in policy year.' }
    ],
    whyChooseProvider: [
      {
        title: 'Extensive Garage Network',
        description: 'Access to 5000+ certified garages nationwide for cashless claims and quality repairs.'
      },
      {
        title: 'Quick Claim Settlement',
        description: '98% claim settlement ratio with average settlement time of 7 days for hassle-free experience.'
      },
      {
        title: 'Digital First Approach',
        description: 'Complete policy purchase, renewal, and claims process online through mobile app or website.'
      }
    ],
    howToBuySteps: [
      'Enter Vehicle Details: Provide registration number or vehicle make, model, variant details.',
      'Choose Coverage: Select third-party or comprehensive coverage with required add-ons.',
      'Get Instant Quote: View premium breakdown and compare plans based on coverage.',
      'Complete KYC: Upload driving license, RC, and complete digital KYC verification.',
      'Make Payment: Pay premium online and receive policy document instantly via email.'
    ]
  }
];

// Helper function to get service by slug
export const getServiceBySlug = (slug: string): ServiceDetailData | undefined => {
  return allServicesData.find(service => service.slug === slug);
};

// Helper function to get service by ID
export const getServiceById = (id: string): ServiceDetailData | undefined => {
  return allServicesData.find(service => service.id === id);
};
