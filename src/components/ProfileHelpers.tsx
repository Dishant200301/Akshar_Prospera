import React from 'react';
import { Star, Mail } from 'lucide-react';

interface Metric {
    value: string;
    label: string;
    icon: React.ElementType;
    color: string;
}

// Custom Icon: Grouped People (Matches the 2k+ Families icon)
const GroupedPeopleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm8 2h-1.33c-1.16 0-2.22-.5-3.04-1.33h-3.26c-.82.83-1.88 1.33-3.04 1.33H8c-2.67 0-8 1.34-8 4v2h24v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
);

// Custom Icon: Single Person (Matches the 5+ Team Members icon)
const SinglePersonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
);

// Custom Metric Pill Component (Reusable)
const MetricPill: React.FC<{ metric: Metric }> = ({ metric }) => {
    const Icon = metric.icon;
    return (
        <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl border border-gray-200 bg-white/50 shadow-sm
                        transition-all duration-300 hover:scale-[1.03] cursor-default">
            <div className="flex items-center space-x-2">
                <Icon className={`w-5 h-5 ${metric.color}`} />
                <span className="text-lg font-extrabold text-gray-900 leading-none">{metric.value}</span>
            </div>
            <span className="text-xs text-gray-500 uppercase tracking-wider mt-1">{metric.label}</span>
        </div>
    );
};

export { GroupedPeopleIcon, SinglePersonIcon, MetricPill };