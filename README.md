
# 🚀 Resume Checker AI

Empower your job search with intelligent, actionable resume feedback.  
Built with React, TypeScript, Vite, and AI-powered analysis.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Contact](#contact)

---

## Overview

**Resume Checker AI** is a modern web application that helps job seekers optimize their resumes for Applicant Tracking Systems (ATS) and real recruiters.  
Upload your resume (PDF), get instant feedback, and actionable tips powered by advanced AI models.

## Features

- **AI-Powered Resume Analysis:**  
	Get detailed feedback on ATS compatibility, tone, content, structure, and skills.
- **PDF Upload & Conversion:**  
	Upload your resume in PDF format; the app converts and analyzes it instantly.
- **Visual Feedback:**  
	See your resume score and improvement tips in a clean, interactive dashboard.
- **Secure & Private:**  
	Your data is processed securely; resumes are not shared or stored beyond analysis.
- **Responsive Design:**  
	Works seamlessly on desktop and mobile devices.

## Tech Stack

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS
- **State Management:** Zustand
- **Routing:** React Router
- **PDF Processing:** pdfjs-dist
- **AI Integration:** Claude Sonnet 4 (via Puter.js)
- **Deployment:** Docker-ready, cloud-friendly

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
git clone https://github.com/Ali-Adel21/resume-checker.git
cd resume-checker
npm install
```

### Development

```bash
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Docker

```bash
docker build -t resume-checker .
docker run -p 3000:3000 resume-checker
```

## Usage

1. **Sign In:** Log in securely to access resume analysis.
2. **Upload Resume:** Drag and drop your PDF resume.
3. **Get Feedback:** Instantly view your ATS score and improvement suggestions.
4. **Iterate:** Apply tips and re-upload for better results.

## Deployment

- Ready for cloud platforms (AWS, Azure, GCP, Railway, Fly.io)
- Docker support for easy containerization

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## Contact

- **Ali Adel**  
	[LinkedIn](https://www.linkedin.com/in/aliadel-dev)  
	[Email](mailto:aliasharaf4741@gmail.com)

---

> _“Built to help you land your dream job with smarter, data-driven resumes.”_
