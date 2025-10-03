"use client";
import React, { useState, useRef } from 'react';
import { Upload, User, Mail, FileText, CheckCircle, ArrowRight, Bot, Sparkles, Loader2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const JobBotXForm = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.displayName || '',
    email: user?.email || '',
    resume: null
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (file) => {
    if (file && (file.type === 'application/pdf' || file.type.includes('document'))) {
      setFormData(prev => ({
        ...prev,
        resume: file
      }));
    } else {
      alert('Please upload a PDF or document file');
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Convert file to base64
      let resumeBase64 = "";
      if (formData.resume) {
        resumeBase64 = await toBase64(formData.resume);
      }

      const payload = {
        Name: formData.name,
        Gmail: formData.email,
        ResumeFileName: formData.resume ? formData.resume.name : "",
        ResumeType: formData.resume ? formData.resume.type : "application/pdf",
        ResumeBase64: resumeBase64,
        ResumeSize: formData.resume
          ? (formData.resume.size / (1024 * 1024)).toFixed(2) + " MB"
          : "0 MB",
      };

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxq2yX2Edz_FFHbZ2TRJRts4mikpDIILEYWiJuCY8so0_vbVkahkcuxAQ9NKo-m75wT/exec",
        {
          method: "POST",
          body: new URLSearchParams(payload),
        }
      );

      if (response.ok) {
        setIsSuccess(true);
      } else {
        throw new Error('Submission failed');
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 pt-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '700ms'}}></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-teal-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1000ms'}}></div>
        </div>

        <div className="max-w-2xl w-full relative z-10">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 text-center border border-white/20 shadow-2xl animate-scale-in">
            
            {/* Success Icon with Animation */}
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto animate-bounce-slow shadow-lg">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              {/* Ripple Effect */}
              <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full border-4 border-green-400/30 animate-ping"></div>
              <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full border-4 border-emerald-400/20 animate-ping" style={{animationDelay: '300ms'}}></div>
            </div>

            {/* Thank You Message */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
              Thank You! 🎉
            </h1>
            
            <h2 className="text-xl md:text-2xl font-semibold text-emerald-300 mb-6 animate-fade-in-up" style={{animationDelay: '200ms'}}>
              Your Job Search is Now Active
            </h2>

            {/* Main Message */}
            <div className="bg-white/5 rounded-2xl p-6 mb-8 border border-white/10 animate-fade-in-up" style={{animationDelay: '400ms'}}>
              <p className="text-white/90 text-lg mb-4 leading-relaxed">
                🚀 <strong>Job BotX is now working for you!</strong>
              </p>
              <p className="text-white/80 mb-4">
                Our AI is analyzing your resume and scraping LinkedIn for the perfect job matches based on your profile.
              </p>
              <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-xl p-4 border border-emerald-400/30">
                <p className="text-emerald-200 font-semibold text-lg">
                  📧 Your personalized job listings will be sent to your email in 
                  <span className="text-emerald-300 font-bold"> 3-4 minutes</span>
                </p>
              </div>
            </div>

            {/* Process Steps */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/5 rounded-lg p-4 animate-fade-in-up" style={{animationDelay: '600ms'}}>
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🔍</span>
                </div>
                <p className="text-white/80 text-sm">Analyzing Resume</p>
                <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full animate-progress-bar"></div>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4 animate-fade-in-up" style={{animationDelay: '700ms'}}>
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🤖</span>
                </div>
                <p className="text-white/80 text-sm">Scraping LinkedIn</p>
                <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full animate-progress-bar" style={{animationDelay: '500ms'}}></div>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4 animate-fade-in-up" style={{animationDelay: '800ms'}}>
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📊</span>
                </div>
                <p className="text-white/80 text-sm">Creating Excel Report</p>
                <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-500 h-2 rounded-full animate-progress-bar" style={{animationDelay: '1000ms'}}></div>
                </div>
              </div>
            </div>

            {/* Timer Animation */}
            <div className="bg-gradient-to-r from-emerald-600/20 to-green-600/20 rounded-2xl p-6 border border-emerald-400/30 animate-fade-in-up" style={{animationDelay: '1000ms'}}>
              <div className="flex items-center justify-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '200ms'}}></div>
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '400ms'}}></div>
              </div>
              <p className="text-emerald-200 font-medium">
                <Bot className="w-5 h-5 inline mr-2 animate-spin" />
                Processing your request... Check your email shortly!
              </p>
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-center animate-fade-in-up" style={{animationDelay: '1200ms'}}>
              <p className="text-white/60 text-sm mb-2">
                💡 <strong>Pro Tip:</strong> Check your spam folder if you don't see the email
              </p>
              <p className="text-white/60 text-sm">
                📱 You can close this page - we'll handle the rest!
              </p>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scale-in {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
          
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes progress-bar {
            from { width: 0%; }
            to { width: 100%; }
          }
          
          .animate-scale-in {
            animation: scale-in 0.6s ease-out;
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out;
          }
          
          .animate-bounce-slow {
            animation: bounce-slow 2s ease-in-out infinite;
          }
          
          .animate-progress-bar {
            animation: progress-bar 2s ease-in-out infinite;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 pt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1000ms'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '500ms'}}></div>
      </div>

      <div className="max-w-2xl w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-2xl shadow-lg">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <Sparkles className="w-6 h-6 text-yellow-400 ml-2 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Welcome to Job BotX
          </h1>
          <p className="text-white/80 text-lg">
            Let our AI find your perfect job matches from LinkedIn
          </p>
        </div>

        {/* Form */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl animate-slide-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="flex items-center text-white font-medium mb-2">
                <User className="w-5 h-5 mr-2 text-purple-300" />
                Full Name
              </label>
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                  placeholder="Enter your full name"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="flex items-center text-white font-medium mb-2">
                <Mail className="w-5 h-5 mr-2 text-blue-300" />
                Email Address
              </label>
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                  placeholder="Enter your email address"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            {/* Resume Upload */}
            <div className="space-y-2">
              <label className="flex items-center text-white font-medium mb-2">
                <FileText className="w-5 h-5 mr-2 text-emerald-300" />
                Resume Upload
              </label>
              <div
                className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
                  dragActive
                    ? 'border-emerald-400 bg-emerald-500/10 scale-105'
                    : 'border-white/30 bg-white/5 hover:bg-white/10 hover:border-white/40'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileChange(e.target.files[0])}
                  className="hidden"
                />
                
                {formData.resume ? (
                  <div className="flex items-center justify-center space-x-3 animate-fade-in">
                    <CheckCircle className="w-8 h-8 text-emerald-400" />
                    <div className="text-left">
                      <p className="text-white font-medium">{formData.resume.name}</p>
                      <p className="text-white/60 text-sm">
                        {(formData.resume.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, resume: null }))}
                      className="ml-4 text-red-400 hover:text-red-300 text-sm underline"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div>
                    <Upload className="w-12 h-12 text-white/60 mx-auto mb-4 animate-bounce" />
                    <p className="text-white/80 mb-2">
                      Drag and drop your resume here, or{' '}
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="text-emerald-400 hover:text-emerald-300 underline font-medium transition-colors"
                      >
                        browse files
                      </button>
                    </p>
                    <p className="text-white/50 text-sm">Supports PDF, DOC, DOCX (Max 10MB)</p>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !formData.name || !formData.email || !formData.resume}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-purple-500/25"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>Start Job Search</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/5 rounded-lg p-4 text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-purple-300 text-sm font-bold">1</span>
              </div>
              <p className="text-white/80 text-sm">AI analyzes your resume</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-blue-300 text-sm font-bold">2</span>
              </div>
              <p className="text-white/80 text-sm">Scrapes LinkedIn jobs</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-emerald-300 text-sm font-bold">3</span>
              </div>
              <p className="text-white/80 text-sm">Sends Excel report</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.2s both;
        }
      `}</style>
    </div>
  );
};

export default JobBotXForm;
