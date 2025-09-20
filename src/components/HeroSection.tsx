import { ArrowRight, BookOpen, Calculator, Atom, TrendingUp, Star, Users, CheckCircle, Target } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="pt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen flex items-center relative overflow-hidden">
      {/* Clean background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-yellow-500/5"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-yellow-500/15 text-yellow-400 rounded-full text-sm font-medium border border-yellow-500/30 animate-fade-in-down animation-delay-200">
                🎓 Trusted Educational Partner
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up animation-delay-400">
                Unlock Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  Full Potential
                </span>{' '}
                with Adhyan Guidance
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed animate-fade-in-up animation-delay-600">
                Whether you're struggling with math formulas, prepping for final exams, or just need help staying on top of your homework — Adhyan is here to guide you.
              </p>
              
              <div className="flex items-center space-x-2 text-lg font-medium text-yellow-400 animate-fade-in-up animation-delay-800">
                <span>🎓</span>
                <span>Helping students succeed — from brugklas to final exams!</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-1000">
              <button className="group bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 px-8 py-4 rounded-xl font-semibold hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2">
                <span>Start Your Journey</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="bg-slate-800/50 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border-2 border-yellow-500/20 hover:border-yellow-400 hover:bg-yellow-500/10 transition-all duration-200 shadow-lg hover:shadow-xl">
                View Success Stories
              </button>
            </div>
            
            <div className="flex items-center justify-start pt-8 border-t border-yellow-500/20 animate-fade-in-up animation-delay-1200">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">3+</div>
                <div className="text-sm text-gray-400">Years of Experience</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Clean & Focused */}
          <div className="relative animate-fade-in-right animation-delay-600">
            {/* Main Specialization Card */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/60 backdrop-blur-sm p-8 rounded-2xl border border-yellow-500/30 shadow-2xl">
              {/* Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                  <Target className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Our Specialization</h3>
                  <p className="text-sm text-gray-400">Tailored for your success</p>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                We specialize in tutoring for <span className="font-semibold text-yellow-400">IB Diploma</span> and <span className="font-semibold text-yellow-400">Dutch high school students</span> (VMBO, HAVO, VWO), offering personalized support in:
              </p>
              
              {/* Subjects */}
              <div className="grid grid-cols-1 gap-4 mb-8">
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-yellow-500/15 to-yellow-500/5 rounded-xl border border-yellow-500/20 animate-fade-in-left animation-delay-800">
                  <Calculator className="h-6 w-6 text-yellow-400" />
                  <div>
                    <div className="font-semibold text-white">Mathematics</div>
                    <div className="text-sm text-gray-400">Algebra, Calculus, Statistics & More</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-500/15 to-green-500/5 rounded-xl border border-green-500/20 animate-fade-in-left animation-delay-1000">
                  <Atom className="h-6 w-6 text-green-400" />
                  <div>
                    <div className="font-semibold text-white">Physics</div>
                    <div className="text-sm text-gray-400">Mechanics, Electricity, Thermodynamics</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-500/15 to-purple-500/5 rounded-xl border border-purple-500/20 animate-fade-in-left animation-delay-1200">
                  <BookOpen className="h-6 w-6 text-purple-400" />
                  <div>
                    <div className="font-semibold text-white">Chemistry</div>
                    <div className="text-sm text-gray-400">Organic, Inorganic & Physical Chemistry</div>
                  </div>
                </div>
              </div>
              
              {/* Success Metrics */}
              <div className="border-t border-yellow-500/20 pt-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="space-y-2 animate-scale-in animation-delay-1400">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    </div>
                    <div className="text-lg font-bold text-white">✓</div>
                    <div className="text-xs text-gray-400">Quality Teaching</div>
                  </div>
                  
                  <div className="space-y-2 animate-scale-in animation-delay-1600">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                      <TrendingUp className="h-5 w-5 text-blue-400" />
                    </div>
                    <div className="text-lg font-bold text-white">2.3</div>
                    <div className="text-xs text-gray-400">Grade Boost</div>
                  </div>
                  
                  <div className="space-y-2 animate-scale-in animation-delay-1800">
                    <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto">
                      <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    </div>
                    <div className="text-lg font-bold text-white">4.9</div>
                    <div className="text-xs text-gray-400">Student Rating</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Success Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full shadow-xl animate-bounce-in animation-delay-2000">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span className="font-semibold text-sm">Quality Education</span>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-500/10 rounded-full blur-xl"></div>
            <div className="absolute -top-8 -left-4 w-16 h-16 bg-blue-500/10 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}