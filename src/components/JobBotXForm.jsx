"use client";
import React, { useState, useRef, useEffect } from "react";
import { 
  User, 
  Mail, 
  Upload, 
  FileText, 
  CheckCircle, 
  Loader2, 
  AlertCircle, 
  X,
  Bot,
  Sparkles,
  Zap,
  Star,
  Rocket,
  Heart,
  Trophy,
  Crown,
  Gift,
  PartyPopper,
  LogOut,
  Home
} from "lucide-react";
import { useAuth } from '@/contexts/AuthContext';

export default function ResumeUploadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const [formAnimated, setFormAnimated] = useState(false);
  const [fieldFocus, setFieldFocus] = useState({ name: false, email: false, file: false });
  const [userName, setUserName] = useState('');
  const fileInputRef = useRef(null);
  const { user, logout } = useAuth();

  // Get user name and animate form on mount
  useEffect(() => {
    if (user) {
      // Use Firebase user data first
      const displayName = user.displayName || 
                         user.email?.split('@')[0] || 
                         localStorage.getItem('userName') || 
                         'User';
      
      // Format the name properly
      if (displayName.includes('@')) {
        const nameFromEmail = displayName.split('@')[0];
        const formattedName = nameFromEmail
          .replace(/[._]/g, ' ')
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(' ');
        setUserName(formattedName);
      } else {
        setUserName(displayName);
      }
    } else {
      // Fallback to localStorage
      const storedName = localStorage.getItem('userName') || 
                        localStorage.getItem('userEmail') || 
                        'Guest';
      
      if (storedName.includes('@')) {
        const nameFromEmail = storedName.split('@')[0];
        const formattedName = nameFromEmail
          .replace(/[._]/g, ' ')
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(' ');
        setUserName(formattedName);
      } else {
        setUserName(storedName);
      }
    }
    
    setTimeout(() => setFormAnimated(true), 100);
  }, [user]);

  // Animation sequence for thank you page
  useEffect(() => {
    if (showThankYou) {
      const timeouts = [
        setTimeout(() => setAnimationStep(1), 500),
        setTimeout(() => setAnimationStep(2), 1500),
        setTimeout(() => setAnimationStep(3), 2500),
        setTimeout(() => setAnimationStep(4), 3500),
      ];
      return () => timeouts.forEach(clearTimeout);
    }
  }, [showThankYou]);

  const handleLogout = async () => {
    try {
      // Use Firebase logout function
      await logout();
      // Redirect to home page
      window.location.href = '/';
    } catch (error) {
      console.error('Logout error:', error);
      // Fallback: clear localStorage and redirect
      localStorage.removeItem('authToken');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userName');
      sessionStorage.clear();
      window.location.href = '/';
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
      const droppedFile = e.dataTransfer.files[0];
      if (validateFile(droppedFile)) {
        setFile(droppedFile);
      }
    }
  };

  const validateFile = (file) => {
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!allowedTypes.includes(file.type)) {
      setError("Please upload only PDF, DOC, or DOCX files");
      return false;
    }
    if (file.size > maxSize) {
      setError("File size must be less than 10MB");
      return false;
    }
    setError("");
    return true;
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && validateFile(selectedFile)) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please upload a file");

    setLoading(true);

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64File = reader.result.split(",")[1]; // Extract base64 data

      const formData = new FormData();
      formData.append("file", base64File);
      formData.append("fileName", file.name);
      formData.append("name", name);
      formData.append("email", email);

      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbxtc9MoYmAuxlj3kltjn9nWWmaMwVD9dOBsrTiZ75cXAyoLp9OXJHRwXbwV_A8KPRm6/exec",
          {
            method: "POST",
            body: formData,
          }
        );

        const result = await response.json();

        if (result.url) {
          setUrl(result.url);
          // Redirect to thank you page
          setTimeout(() => {
            setShowThankYou(true);
          }, 1000);
        } else {
          setError("Upload failed: " + (result.error || "Unknown error"));
        }
      } catch (err) {
        setError("Network error: " + err.message);
      }

      setLoading(false);
    };

    reader.readAsDataURL(file);
  };

  // Professional Thank You Page
  if (showThankYou) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden relative">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-white/20 rounded-full animate-pulse ${
                animationStep >= 1 ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
          
          {[Sparkles, Star, Zap, Heart].map((Icon, i) => (
            <Icon
              key={i}
              className={`absolute text-purple-400/30 animate-pulse ${
                animationStep >= 2 ? 'opacity-100' : 'opacity-0'
              }`}
              size={16 + Math.random() * 24}
              style={{
                left: `${Math.random() * 95}%`,
                top: `${Math.random() * 95}%`,
                animationDelay: `${Math.random() * 2}s`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Success Icon */}
            <div className={`mb-8 transform transition-all duration-1000 ${
              animationStep >= 0 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}>
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-6 shadow-2xl">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Main Title */}
            <div className={`mb-12 transform transition-all duration-1000 delay-300 ${
              animationStep >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
                Success! 🎉
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Your resume has been successfully uploaded and our AI is now analyzing it to find the perfect job matches for you.
              </p>
            </div>

            {/* Status Cards */}
            <div className={`grid md:grid-cols-2 gap-6 mb-12 transform transition-all duration-1000 delay-600 ${
              animationStep >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {/* Processing Card */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl">
                <div className="flex items-center justify-center mb-4">
                  <Bot className="w-8 h-8 text-blue-400 animate-bounce" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">AI Processing</h3>
                <p className="text-white/70 text-sm">
                  Our advanced AI is analyzing your resume and matching it with thousands of job opportunities.
                </p>
              </div>

              {/* Email Card */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl">
                <div className="flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-green-400 animate-pulse" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Delivery</h3>
                <p className="text-white/70 text-sm">
                  Personalized job listings will be sent to your email within 2-3 minutes.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className={`mb-12 transform transition-all duration-1000 delay-900 ${
              animationStep >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-6">What happens next?</h3>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">AI Analysis</h4>
                      <p className="text-white/70 text-sm">We extract key skills and experience from your resume</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Job Matching</h4>
                      <p className="text-white/70 text-sm">Our AI finds the best job matches on LinkedIn</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email Delivery</h4>
                      <p className="text-white/70 text-sm">Receive curated job listings in your inbox</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-1200 ${
              animationStep >= 4 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <button
                onClick={() => {
                  setShowThankYou(false);
                  setAnimationStep(0);
                  setName("");
                  setEmail("");
                  setFile(null);
                  setUrl("");
                  setError("");
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Upload className="w-5 h-5" />
                Upload Another Resume
              </button>
              
              {/* Hide "Back to Home" button on mobile since logout is in header */}
              <button
                onClick={handleLogout}
                className="hidden sm:flex bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/20 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Professional Animated Form
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-lg relative z-10">
        {/* Header */}
        <div className={`text-center mb-8 transform transition-all duration-1000 ${
          formAnimated ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
            <Bot className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Job BotX</h1>
          <p className="text-white/70">AI-Powered Career Assistant</p>
        </div>

        {/* Form Card */}
        <div className={`bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl transform transition-all duration-1000 delay-300 ${
          formAnimated ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
        }`}>
          {/* Error Message */}
          {error && (
            <div className="mb-6 bg-red-500/20 border border-red-500/30 rounded-xl p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-red-200 text-sm">{error}</p>
              </div>
              <button
                onClick={() => setError("")}
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className={`space-y-2 transform transition-all duration-700 delay-500 ${
              formAnimated ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <label className="flex items-center text-white font-medium text-sm">
                <User className={`w-4 h-4 mr-2 text-blue-400 transition-all duration-300 ${
                  fieldFocus.name ? 'scale-125' : ''
                }`} />
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setFieldFocus(prev => ({ ...prev, name: true }))}
                onBlur={() => setFieldFocus(prev => ({ ...prev, name: false }))}
                required
                className={`w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-white/15 ${
                  name ? 'border-green-400' : ''
                }`}
              />
            </div>

            {/* Email Field */}
            <div className={`space-y-2 transform transition-all duration-700 delay-700 ${
              formAnimated ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <label className="flex items-center text-white font-medium text-sm">
                <Mail className={`w-4 h-4 mr-2 text-green-400 transition-all duration-300 ${
                  fieldFocus.email ? 'scale-125' : ''
                }`} />
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFieldFocus(prev => ({ ...prev, email: true }))}
                onBlur={() => setFieldFocus(prev => ({ ...prev, email: false }))}
                required
                className={`w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:bg-white/15 ${
                  email ? 'border-green-400' : ''
                }`}
              />
            </div>

            {/* File Upload */}
            <div className={`space-y-2 transform transition-all duration-700 delay-900 ${
              formAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <label className="flex items-center text-white font-medium text-sm">
                <FileText className={`w-4 h-4 mr-2 text-purple-400 transition-all duration-300 ${
                  fieldFocus.file ? 'scale-125' : ''
                }`} />
                Resume Upload
              </label>
              
              <div
                className={`relative border-2 border-dashed rounded-xl p-6 text-center transition-all duration-300 cursor-pointer ${
                  dragActive
                    ? "border-blue-400 bg-blue-500/10"
                    : file
                    ? "border-green-400 bg-green-500/10"
                    : "border-white/30 hover:border-white/50 hover:bg-white/5"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                onMouseEnter={() => setFieldFocus(prev => ({ ...prev, file: true }))}
                onMouseLeave={() => setFieldFocus(prev => ({ ...prev, file: false }))}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileSelect}
                  className="hidden"
                  required
                />
                
                <div className="flex flex-col items-center gap-3">
                  {file ? (
                    <>
                      <CheckCircle className="w-12 h-12 text-green-400" />
                      <div>
                        <p className="text-green-300 font-medium">{file.name}</p>
                        <p className="text-white/60 text-sm">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <Upload className="w-12 h-12 text-white/60" />
                      <div>
                        <p className="text-white font-medium mb-1">
                          Drop your resume here or click to browse
                        </p>
                        <p className="text-white/60 text-sm">
                          Supports PDF, DOC, DOCX (Max 10MB)
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className={`transform transition-all duration-700 delay-1100 ${
              formAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <button
                type="submit"
                disabled={loading || !name || !email || !file}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Processing Resume...</span>
                  </>
                ) : (
                  <>
                    <Rocket className="w-5 h-5" />
                    <span>Start AI Job Search</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Info Footer */}
          <div className={`mt-6 text-center transform transition-all duration-700 delay-1300 ${
            formAnimated ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}>
            <p className="text-white/60 text-sm">
              🤖 AI will analyze your resume and find matching jobs on LinkedIn
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
