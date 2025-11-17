import { Phone, Mail, Users, Target, CheckCircle } from "lucide-react";

const AdvisorCard = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Your Trusted{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Insurance Advisor
              </span>
            </h2>
            
          </div>

          {/* Profile Card */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden max-w-5xl mx-auto">
            {/* Header */}
            <div className="px-6 py-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                {/* Avatar + Name */}
                <div className="flex items-center gap-6">
                  <div className="w-28 h-28 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full p-2 shadow-xl ring-4 ring-gray-100">
                    <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold">
                      AI
                    </div>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-2">
                      Arun Isamaliya
                    </h3>
                    <div className="text-xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
                      Founder & Lead Advisor
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
                  <button className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white transition-all duration-200 inline-flex items-center justify-center shadow-sm">
                    <Phone className="w-5 h-5 mr-2" /> Call Arun
                  </button>

                  <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 inline-flex items-center justify-center shadow-sm">
                    <Mail className="w-5 h-5 mr-2" /> Email Arun
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 py-6">
              {/* Description */}
              <p className="text-lg text-gray-600 mb-8 leading-relaxed text-center">
                Trusted advisor helping families across Canada and the U.S.
                choose clear, right-fit coverage.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { value: "15+", label: "Years" },
                  { value: "10k+", label: "Families" },
                  { value: "25+", label: "Team Members" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-4 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">
                      {item.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Extra Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Languages */}
                <div className="space-y-3 text-center">
                  <h5 className="text-base font-semibold text-gray-900 flex items-center justify-center gap-2">
                    <Users className="w-4 h-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent" />
                    Languages
                  </h5>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["English", "Gujarati", "Hindi"].map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center px-3 py-1.5 rounded-full border border-gray-200 bg-white text-sm text-gray-700 font-medium hover:border-blue-600 hover:text-blue-600 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Serving */}
                <div className="space-y-3 text-center">
                  <h5 className="text-base font-semibold text-gray-900 flex items-center justify-center gap-2">
                    <Target className="w-4 h-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent" />
                    Serving
                  </h5>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["Canada", "United States"].map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center px-3 py-1.5 rounded-full border border-gray-200 bg-white text-sm text-gray-700 font-medium hover:border-blue-600 hover:text-blue-600 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="space-y-3 text-center">
                  <h5 className="text-base font-semibold text-gray-900 flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent" />
                    Availability
                  </h5>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["Virtual Meetings", "In-Person"].map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center px-3 py-1.5 rounded-full border border-gray-200 bg-white text-sm text-gray-700 font-medium hover:border-blue-600 hover:text-blue-600 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Card */}
        </div>
      </div>
    </section>
  );
};

export default AdvisorCard;
