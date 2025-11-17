import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Award, Users, BriefcaseBusiness, Globe, Laptop, DollarSign, Wallet } from 'lucide-react';

interface AdvisorProfileCardProps {
    name: string;
    title: string;
    avatarInitials: string;
    experience: string;
    clientsServed: string;
    teamSize: string;
    bio: string;
    languages: string[];
    regionsServed: string[];
    availability: string;
    phoneNumber?: string;
    emailAddress?: string;
    backgroundImgSrc?: string;
}

const AdvisorProfileCard: React.FC<AdvisorProfileCardProps> = ({
    name,
    title,
    avatarInitials,
    experience,
    clientsServed,
    teamSize,
    bio,
    languages,
    regionsServed,
    availability,
    phoneNumber = "+1234567890", // Default phone number
    emailAddress = "jane.doe@example.com", // Default email
    backgroundImgSrc = "https://images.unsplash.com/photo-1510915228340-a30999086f89?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Default abstract background
}) => {
    const firstName = name.split(' ')[0];

    return (
        <motion.div
            className="relative w-full max-w-4xl mx-auto bg-gray-900/40 backdrop-filter backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50"
            // Adding a subtle hover effect for depth
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.15)", transition: { duration: 0.3 } }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Top Half - Background Image with Gradient Overlay */}
            <div
                className="relative h-48 md:h-64 rounded-t-3xl overflow-hidden"
                style={{
                    backgroundImage: `url(${backgroundImgSrc})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Dark-to-light gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>

            {/* Bottom Half - Frosted Section with Profile Details */}
            <div className="relative z-10 p-6 md:p-8 bg-white/5 backdrop-blur-sm rounded-b-3xl">
                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
                    {/* Profile Section (Left side) */}
                    <div className="flex-shrink-0 flex flex-col items-center md:items-start">
                        {/* Circular Avatar Placeholder */}
                        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center text-4xl md:text-5xl font-semibold text-white -mt-16 md:-mt-20 border-4 border-gray-900/50 shadow-lg">
                            {avatarInitials}
                        </div>
                        <div className="mt-4 text-center md:text-left">
                            {/* Name */}
                            <h2 className="text-3xl font-poppins font-bold text-white leading-tight">
                                {name}
                            </h2>
                            {/* Title */}
                            <p className="text-md text-gray-400 font-inter mt-1">
                                {title}
                            </p>
                            {/* Optional: Financial Tool Icons/Badges */}
                            <div className="flex items-center justify-center md:justify-start gap-2 mt-3 text-gray-500">
                                <DollarSign className="w-5 h-5" title="Investment Tools" />
                                <Wallet className="w-5 h-5" title="Financial Planning Software" />
                                <Laptop className="w-5 h-5" title="Virtual Consultations" />
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area: Info Row, Bio, Contact/Action */}
                    <div className="flex-grow flex flex-col pt-4 md:pt-0">
                        {/* Information Row (Center section - Metric Cards) */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            {/* Experience */}
                            <motion.div
                                className="text-center p-3 md:p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 shadow-md flex flex-col items-center justify-center"
                                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                            >
                                <Award className="w-6 h-6 text-yellow-400 mb-1" />
                                <span className="text-lg font-semibold text-white">{experience}</span>
                                <span className="text-xs text-gray-400">Experience</span>
                            </motion.div>
                            {/* Clients Served */}
                            <motion.div
                                className="text-center p-3 md:p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 shadow-md flex flex-col items-center justify-center"
                                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                            >
                                <Users className="w-6 h-6 text-blue-400 mb-1" />
                                <span className="text-lg font-semibold text-white">{clientsServed}</span>
                                <span className="text-xs text-gray-400">Families</span>
                            </motion.div>
                            {/* Team Size */}
                            <motion.div
                                className="text-center p-3 md:p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 shadow-md flex flex-col items-center justify-center"
                                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                            >
                                <BriefcaseBusiness className="w-6 h-6 text-purple-400 mb-1" />
                                <span className="text-lg font-semibold text-white">{teamSize}</span>
                                <span className="text-xs text-gray-400">Team Members</span>
                            </motion.div>
                        </div>

                        {/* Bio/Expertise Section */}
                        <p className="text-gray-300 font-light text-md leading-relaxed tracking-wide mb-6">
                            {bio}
                        </p>

                        {/* Contact and Action Section (Right side) */}
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-auto">
                            <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                                <a
                                    href={`tel:${phoneNumber}`}
                                    className="inline-flex items-center gap-2 text-white hover:text-blue-300 transition-colors"
                                >
                                    <Phone className="w-5 h-5" /> Call {firstName}
                                </a>
                                <a
                                    href={`mailto:${emailAddress}`}
                                    className="inline-flex items-center gap-2 text-white hover:text-blue-300 transition-colors"
                                >
                                    <Mail className="w-5 h-5" /> Email {firstName}
                                </a>
                            </div>
                            <motion.button
                                className="bg-white text-black font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                                whileHover={{ scale: 1.05, backgroundColor: "#E0E0E0" }} // Slightly darker white on hover
                                whileTap={{ scale: 0.95 }}
                            >
                                Get in Touch
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Additional Details (Bottom row) */}
                <div className="mt-8 pt-6 border-t border-gray-700/50 flex flex-wrap justify-between gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-gray-500" />
                        <span>Languages: {languages.join(', ')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-500" /> {/* Using Users for regions for better icon consistency */}
                        <span>Regions Served: {regionsServed.join(', ')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Laptop className="w-4 h-4 text-gray-500" />
                        <span>Availability: {availability}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AdvisorProfileCard;