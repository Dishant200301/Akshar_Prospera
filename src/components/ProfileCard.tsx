// ProfileCard.tsx
import React from 'react';
import { Globe, BookOpen, TrendingUp, Shield, Star, Monitor, Phone } from 'lucide-react';

// --- Helper Components ---
// Custom SVG for Grouped People icon (for "Families" metric)
const GroupedPeopleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

// Custom SVG for Single Person icon (for "Team Members" metric)
const SinglePersonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

// Metric Pill component (e.g., "10+ Years", "2k+ Families")
interface MetricProps {
  metric: {
    value: string;
    label: string;
    icon: React.ElementType;
    color: string;
  };
}

const MetricPill: React.FC<MetricProps> = ({ metric }) => {
  const Icon = metric.icon;
  return (
    <div className="flex items-start gap-3 p-3 sm:p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
      <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-gradient-primary text-white">
        <Icon className="w-5 h-5" />
      </div>
      <div className="truncate">
        <div className="font-bold text-sm sm:text-base text-gray-900">{metric.value}</div>
        <p className="text-xs text-gray-500 truncate">{metric.label}</p>
      </div>
    </div>
  );
};

// --- Data Structure Interface ---
interface AdvisorProfileData {
  name: string;
  title: string;
  avatarInitials: string;
  imageBgUrl: string;
  languages: string;
  regions: string;
  availability: string;
  contactEmail: string;
  contactNumber: string; // Changed to contactNumber to match "Call Jane"
  ctaText: string;
  metrics: { value: string; label: string; icon: React.ElementType; color: string }[];
}

// --- Mock Data (Jane Doe) ---
const JANE_DOE_PROFILE: AdvisorProfileData = {
  name: 'Jane Doe',
  title: 'Senior Wealth Consultant',
  avatarInitials: 'JD',
  // Using a more suitable background image similar to the original reference
  imageBgUrl: 'https://images.unsplash.com/photo-1490650070775-802521c7849e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  languages: 'English, Spanish',
  regions: 'Europe, United States',
  availability: 'Virtual Meetings',
  contactEmail: 'jane@example.com',
  contactNumber: '+1 555 123 4567',
  ctaText: 'Get in Touch',
  metrics: [
    { value: '10+ ', label: 'Years', icon: Star, color: 'text-yellow-500' },
    { value: '2k+ ', label: 'Families', icon: GroupedPeopleIcon, color: 'text-gray-900' },
    { value: '5+ ', label: 'Team Members', icon: SinglePersonIcon, color: 'text-gray-900' },
  ],
};

// --- Profile Card Component ---
const ProfileCard: React.FC = () => {
  const profile = JANE_DOE_PROFILE;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4 sm:p-6 font-sans antialiased">
      
      <div 
        className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl 
                   bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100"
      >
        
        {/* HEADER SECTION: Background Image with Blurred Overlay and Hexagonal Pattern */}
        <div 
          className="relative h-48 sm:h-56 md:h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${profile.imageBgUrl})` }}
        >
          {/* Responsive gradient overlay + subtle hex pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-primary/40 opacity-40 sm:opacity-60" />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='86.6' viewBox='0 0 100 86.6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L100 28.87L100 57.73L50 86.6L0 57.73L0 28.87L50 0Z' fill='none' stroke='%23ffffff' stroke-opacity='0.06' stroke-width='1'/%3E%3C/svg%3E")`,
                backgroundSize: '80px 70px',
              }}
            />
          </div>

          {/* Profile Info Overlay (Avatar, Name, Title, Icons) */}
          <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-6 pb-0 flex flex-col sm:flex-row items-start sm:items-end space-y-4 sm:space-x-4 sm:space-y-0">
            
            {/* Avatar Initials - positioned to slightly overlap the section below */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-primary border-4 border-white shadow-lg flex items-center justify-center"
                          // text-2xl sm:text-3xl font-extrabold text-white flex-shrink-0 z-20 
                          // -mb-10 sm:-mb-12 ml-2 sm:ml-0" 
            >
              {profile.avatarInitials}
            </div>

            {/* Name, Title, and Tool Badges */}
            <div className="flex-grow min-w-0 mt-4 sm:mt-0 text-white z-10 pl-2 sm:pl-0">
              <h1 className="text-2xl sm:text-3xl font-extrabold leading-snug truncate bg-clip-text text-transparent bg-gradient-primary">
                {profile.name}
              </h1>
              <h2 className="text-md sm:text-lg font-medium opacity-90">
                {profile.title}
              </h2>
              
              {/* Tool Badges (e.g., Growth, Security) */}
              <div className="flex space-x-3 mt-2" role="list">
                <span role="listitem" aria-label="Financial Growth"><TrendingUp className="w-5 h-5 text-white opacity-80" aria-hidden="true" /></span>
                <span role="listitem" aria-label="Protected Strategies"><Shield className="w-5 h-5 text-white opacity-80" aria-hidden="true" /></span>
              </div>
            </div>
          </div>
        </div>

        {/* BODY SECTION: Metrics, Details, Contact & Action */}
        <div className="p-6 sm:p-8 pt-16 sm:pt-20 rounded-b-3xl"> {/* Padding-top compensates for overlapping avatar */}
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* LEFT/CENTER COLUMN: Metrics and Additional Details */}
            <div className="lg:col-span-2 flex flex-col space-y-6">

                {/* Information Row (Metrics) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> {/* Responsive grid for metrics */}
                    {profile.metrics.map((metric, index) => (
                        <MetricPill key={index} metric={metric} />
                    ))}
                </div>

                {/* Additional Details (Languages, Regions, Availability) */}
                <div className="flex flex-col space-y-2 text-sm text-gray-600 pt-4 border-t border-gray-100 mt-6">
                    <div className="flex items-start sm:items-center space-x-2 sm:space-x-4 flex-wrap gap-y-2">
                        <div className="flex items-center space-x-2 flex-shrink-0">
                            <BookOpen className="w-4 h-4 text-gray-500" />
                            <span className="font-medium">Languages: <strong className="font-semibold">{profile.languages}</strong></span>
                        </div>
                        <div className="flex items-center space-x-2 flex-shrink-0">
                            <Globe className="w-4 h-4 text-gray-500" />
                            <span className="font-medium">Regions Served: <strong className="font-semibold">{profile.regions}</strong></span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 pt-1">
                        <Monitor className="w-4 h-4 text-gray-500" />
                        <span className="font-medium">Availability: <strong className="font-semibold">{profile.availability}</strong></span>
                    </div>
                </div>
            </div>

            {/* RIGHT COLUMN: Contact and Action Section */}
            <div className="flex flex-col space-y-4 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-gray-100 lg:pl-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Contact and Action</h3>

                {/* Secondary Contact Button (Call Jane) */}
                <a 
                    href={`tel:${profile.contactNumber.replace(/[^0-9+]/g, '')}`} // Cleans up number for `tel:` link
                    className="flex items-center justify-center w-full px-4 py-2.5 bg-gray-100 text-blue-600 font-semibold rounded-full 
                             transition-all duration-300 hover:bg-gray-200 shadow-sm hover:shadow-md"
                >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Jane
                </a>

                {/* Primary CTA Button ("Get in Touch") with glowing hover effect */}
                <a 
                    href="#get-in-touch" 
                    className="group flex items-center justify-center w-full px-8 py-2.5 bg-gray-900 text-white font-bold rounded-full shadow-lg 
                             transition-all duration-300 transform hover:scale-[1.02] 
                             relative overflow-hidden"
                    // Inline styles for dynamic box-shadow glow on hover
                    style={{
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)' // Default subtle shadow
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(37, 99, 235, 0.5), 0 0 0 6px rgba(37, 99, 235, 0.3)'; // Blue glow on hover
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)'; // Revert to default shadow
                    }}
                >
                    <span className="relative">{profile.ctaText}</span>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;