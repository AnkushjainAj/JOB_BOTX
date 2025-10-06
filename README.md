# 🤖 Job BotX - AI-Powered Career Assistant

<div align="center">

![Job BotX Logo](https://img.shields.io/badge/Job%20BotX-AI%20Career%20Assistant-blue?style=for-the-badge&logo=robot)

**Transform your job search with AI-powered resume analysis and personalized job matching**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-Auth-orange?style=flat-square&logo=firebase)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

[🚀 Live Demo](#) • [📖 Documentation](#features) • [🐛 Report Bug](#contributing) • [✨ Request Feature](#contributing)

</div>

---

## 🌟 Overview

Job BotX is a cutting-edge AI-powered career assistant that revolutionizes the job search experience. Upload your resume, and our advanced AI analyzes your skills, experience, and qualifications to find personalized job matches on LinkedIn and other platforms.

### ✨ Key Highlights

- 🤖 **AI-Powered Analysis** - Advanced resume parsing and skill extraction
- 🎯 **Smart Job Matching** - Personalized job recommendations based on your profile
- 📧 **Automated Delivery** - Job listings delivered directly to your email
- 🔐 **Secure Authentication** - Google OAuth integration for seamless login
- 📱 **Responsive Design** - Beautiful UI that works on all devices
- ⚡ **Real-time Processing** - Instant resume analysis and job matching

---

## 🚀 Features

### 🎨 **Modern User Interface**
- **Animated Form Components** - Smooth, professional animations and transitions
- **Glass Morphism Design** - Modern frosted glass effects with backdrop blur
- **Interactive Elements** - Hover effects, focus states, and micro-interactions
- **Mobile-First Design** - Fully responsive across all device sizes

### 🔐 **Authentication & Security**
- **Google OAuth Integration** - Secure login with Firebase Authentication
- **Session Management** - Automatic token handling and user state persistence
- **Protected Routes** - Secure access to job form and user data
- **Logout Functionality** - Clean session termination and redirect

### 📄 **Resume Processing**
- **Multi-Format Support** - PDF, DOC, DOCX file uploads (up to 10MB)
- **Drag & Drop Interface** - Intuitive file upload experience
- **Real-time Validation** - Instant file type and size validation
- **Progress Indicators** - Visual feedback during upload and processing

### 🎯 **AI Job Matching**
- **Skill Extraction** - AI analyzes resume for key skills and experience
- **Job Discovery** - Searches LinkedIn and job boards for relevant positions
- **Personalized Results** - Matches based on your specific qualifications
- **Email Delivery** - Curated job listings sent to your inbox in 2-3 minutes

### 🎉 **User Experience**
- **Success Animations** - Engaging thank you page with celebration effects
- **Status Updates** - Real-time processing status and timeline
- **User Dashboard** - Clean interface showing user name and logout options
- **Error Handling** - Graceful error messages and recovery options

---

## 🛠️ Tech Stack

### **Frontend**
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://reactjs.org/)** - Component-based UI library
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### **Authentication**
- **[Firebase Auth](https://firebase.google.com/products/auth)** - Google OAuth integration
- **[Context API](https://reactjs.org/docs/context.html)** - Global state management

### **Backend Integration**
- **[Google Apps Script](https://script.google.com/)** - Resume processing and storage
- **[Google Sheets API](https://developers.google.com/sheets/api)** - Data management
- **[Email Integration](https://developers.google.com/gmail/api)** - Automated job delivery

### **Deployment**
- **[Vercel](https://vercel.com/)** - Seamless Next.js deployment
- **[Google Cloud](https://cloud.google.com/)** - Backend services and APIs

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Firebase project** with Google OAuth enabled
- **Google Apps Script** deployment for backend processing

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/job-botx.git
   cd job-botx/hyreLyft
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   
   # Google Apps Script
   NEXT_PUBLIC_GOOGLE_SCRIPT_URL=your_script_deployment_url
   ```

4. **Firebase Setup**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Google Authentication
   - Add your domain to authorized domains
   - Copy configuration to `.env.local`

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
hyreLyft/
├── 📁 src/
│   ├── 📁 app/                    # Next.js App Router
│   │   ├── 📁 job-form/          # Job form page
│   │   ├── layout.js             # Root layout
│   │   └── page.js               # Home page
│   ├── 📁 components/            # React components
│   │   ├── 📁 sections/          # Page sections
│   │   ├── AuthProtectedContent.jsx
│   │   ├── JobBotXForm.jsx       # Main form component
│   │   ├── Navbar.jsx            # Navigation bar
│   │   └── Footer.jsx            # Footer component
│   ├── 📁 contexts/              # React contexts
│   │   └── AuthContext.js        # Authentication context
│   ├── 📁 lib/                   # Utility libraries
│   │   └── firebase.js           # Firebase configuration
│   └── 📁 styles/                # Global styles
├── 📁 public/                    # Static assets
├── 📄 .env.local                 # Environment variables
├── 📄 next.config.js             # Next.js configuration
├── 📄 tailwind.config.js         # Tailwind CSS configuration
└── 📄 package.json               # Dependencies and scripts
```

---

## 🎯 Usage

### **For Job Seekers**

1. **🔐 Sign In**
   - Click "Sign in with Google" on the homepage
   - Authorize the application to access your basic profile

2. **📄 Upload Resume**
   - Navigate to the job form page
   - Enter your full name and email address
   - Upload your resume (PDF, DOC, or DOCX format)

3. **🤖 AI Processing**
   - Our AI analyzes your resume for skills and experience
   - Searches job boards for relevant opportunities
   - Matches positions based on your qualifications

4. **📧 Receive Results**
   - Personalized job listings delivered to your email
   - Typically arrives within 2-3 minutes
   - Check both inbox and spam folders

### **For Developers**

1. **🔧 Customize Components**
   - Modify form fields in `JobBotXForm.jsx`
   - Update styling with Tailwind CSS classes
   - Add new animations and interactions

2. **🔌 Extend Functionality**
   - Add new authentication providers
   - Integrate additional job boards
   - Implement user dashboard features

3. **🚀 Deploy**
   - Push to GitHub repository
   - Connect to Vercel for automatic deployment
   - Configure environment variables in deployment settings

---

## 🎨 Customization

### **Styling**
- **Colors**: Modify the gradient themes in `tailwind.config.js`
- **Animations**: Add custom animations in component files
- **Layout**: Adjust spacing and sizing with Tailwind utilities

### **Features**
- **File Types**: Update accepted formats in `JobBotXForm.jsx`
- **Validation**: Modify form validation rules
- **Email Templates**: Customize job delivery email format

### **Branding**
- **Logo**: Replace logo in the header component
- **Colors**: Update brand colors throughout the application
- **Copy**: Modify text content and messaging

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### **🐛 Bug Reports**
- Use the GitHub issue tracker
- Include detailed reproduction steps
- Provide browser and device information

### **✨ Feature Requests**
- Describe the proposed feature
- Explain the use case and benefits
- Consider implementation complexity

### **💻 Code Contributions**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **[Next.js Team](https://nextjs.org/)** - For the amazing React framework
- **[Tailwind CSS](https://tailwindcss.com/)** - For the utility-first CSS framework
- **[Firebase](https://firebase.google.com/)** - For authentication and backend services
- **[Lucide](https://lucide.dev/)** - For the beautiful icon library
- **[Vercel](https://vercel.com/)** - For seamless deployment platform

---

## 📞 Support

- **📧 Email**: support@jobbotx.com
- **💬 Discord**: [Join our community](#)
- **📖 Documentation**: [View full docs](#)
- **🐛 Issues**: [GitHub Issues](https://github.com/yourusername/job-botx/issues)

---

<div align="center">

**Made with ❤️ by the Job BotX Team**

[⭐ Star this repo](https://github.com/yourusername/job-botx) • [🐦 Follow us on Twitter](#) • [💼 LinkedIn](#)

</div>

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
