 # 🤖 Physical AI & Humanoid Robotics Textbook
 
> **A Comprehensive Guide to Building the Next Generation of Intelligent Machines**

An AI-native textbook for teaching Physical AI & Humanoid Robotics, featuring an integrated RAG chatbot, personalized learning, and Urdu translation capabilities.

## 📚 About This Project

This textbook is designed to teach a comprehensive course in **Physical AI & Humanoid Robotics**, bridging the gap between digital AI and embodied intelligence. The course covers everything from ROS 2 fundamentals to advanced vision-language-action models for humanoid robots.

### 🎯 Course Focus
- **Theme**: AI Systems in the Physical World - Embodied Intelligence
- **Goal**: Bridge the gap between the digital brain and the physical body
- **Approach**: Apply AI knowledge to control Humanoid Robots in simulated and real-world environments

## 🏗️ Built With

- **[Docusaurus](https://docusaurus.io/)** - Documentation framework
- **[Qwen](https://qwen.ai/)** - AI-powered development
- **[Spec-Kit Plus](https://github.com/panaversity/spec-kit-plus/)** - AI/Spec-driven development
- **[OpenAI ChatKit SDK](https://platform.openai.com/)** - RAG Chatbot integration
- **[FastAPI](https://fastapi.tiangolo.com/)** - Backend API
- **[Neon Serverless Postgres](https://neon.tech/)** - Database
- **[Qdrant Cloud](https://qdrant.tech/)** - Vector database for RAG
- **[Better Auth](https://www.better-auth.com/)** - Authentication system

## 📖 Course Modules

### Module 1: The Robotic Nervous System (ROS 2)
**Focus**: Middleware for robot control
- ROS 2 Nodes, Topics, and Services
- Bridging Python Agents to ROS controllers using rclpy
- Understanding URDF (Unified Robot Description Format) for humanoids

### Module 2: The Digital Twin (Gazebo & Unity)
**Focus**: Physics simulation and environment building
- Simulating physics, gravity, and collisions in Gazebo
- High-fidelity rendering and human-robot interaction in Unity
- Simulating sensors: LiDAR, Depth Cameras, and IMUs

### Module 3: The AI-Robot Brain (NVIDIA Isaac™)
**Focus**: Advanced perception and training
- NVIDIA Isaac Sim: Photorealistic simulation and synthetic data generation
- Isaac ROS: Hardware-accelerated VSLAM (Visual SLAM) and navigation
- Nav2: Path planning for bipedal humanoid movement

### Module 4: Vision-Language-Action (VLA)
**Focus**: The convergence of LLMs and Robotics
- Voice-to-Action: Using OpenAI Whisper for voice commands
- Cognitive Planning: Using LLMs to translate natural language into ROS 2 actions
- Capstone Project: The Autonomous Humanoid

## ✨ Key Features

### 🎓 Core Features (100 Points)
- ✅ **AI/Spec-Driven Book Creation**: Complete textbook built with Docusaurus and deployed to GitHub Pages
- ✅ **Integrated RAG Chatbot**: Embedded chatbot using OpenAI Agents/ChatKit SDK
- ✅ **Text Selection Q&A**: Answer questions based on user-selected text
- ✅ **FastAPI Backend**: High-performance API for chatbot operations
- ✅ **Vector Database**: Qdrant Cloud integration for semantic search
- ✅ **PostgreSQL Storage**: Neon Serverless Postgres for data persistence

### 🌟 Bonus Features (Up to 150 Extra Points)

#### 🤖 Claude Code Integration (50 Points)
- ✅ Reusable intelligence via Claude Code Subagents
- ✅ Custom Agent Skills for book development
- ✅ Automated content generation and refinement

#### 🔐 Authentication System (50 Points)
- ✅ Signup/Signin using Better Auth
- ✅ User background questionnaire (software & hardware experience)
- ✅ Personalized content based on user profile

#### 🎨 Content Personalization (50 Points)
- ✅ One-click chapter personalization button
- ✅ Dynamic content adjustment based on user background
- ✅ Adaptive difficulty levels

#### 🌐 Urdu Translation (50 Points)
- ✅ Real-time Urdu translation toggle
- ✅ Translation button at the start of each chapter
- ✅ Preserved formatting and technical terms

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ 
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/physical-ai-handbook.git
cd physical-ai-handbook/physical-ai-humanoid-robotics-textbook

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

### Environment Variables

Create a `.env` file in the root directory:

```env
# OpenAI API
OPENAI_API_KEY=your_openai_api_key

# Neon Database
DATABASE_URL=your_neon_postgres_url

# Qdrant Cloud
QDRANT_URL=your_qdrant_cloud_url
QDRANT_API_KEY=your_qdrant_api_key

# Better Auth
BETTER_AUTH_SECRET=your_auth_secret
```

## 📁 Project Structure

```
physical-ai-handbook/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions deployment
├── physical-ai-humanoid-robotics-textbook/website/
│   ├── docs/                       # Course content
│   │   ├── intro.md
│   │   ├── module-1/              # ROS 2 Fundamentals
│   │   ├── module-2/              # Digital Twin
│   │   ├── module-3/              # AI-Robot Brain
│   │   └── module-4/              # Vision-Language-Action
│   ├── src/
│   │   ├── components/            # React components
│   │   ├── css/                   # Agentic AI theme
│   │   └── pages/                 # Custom pages
│   ├── static/
│   │   └── img/                   # Custom SVG icons
│   ├── docusaurus.config.ts       # Docusaurus configuration
│   └── package.json
├── backend/                        # FastAPI backend (if applicable)
│   ├── main.py
│   ├── chatbot/
│   └── requirements.txt
└── README.md                       # This file
```

## 🎨 Design Theme

This textbook features a **futuristic Agentic AI dark theme** inspired by cutting-edge robotics interfaces:

- 🌑 **Dark navy/black background** (#0a0e27)
- 💠 **Cyan accents** (#00ffff) for highlights and interactive elements
- ✨ **Glassmorphism effects** with backdrop blur
- 🔮 **Neon glow animations** on buttons and text
- 🎯 **Custom animated SVG icons** for robotics concepts
- 🎭 **Orbitron & Rajdhani fonts** for tech aesthetics

## 🧪 Technologies Used

### Frontend
- **Framework**: Docusaurus 3.0+
- **Styling**: Custom CSS with glassmorphism
- **Fonts**: Orbitron (headings), Rajdhani (body)
- **Icons**: Custom animated SVG illustrations
- **Theme**: Agentic AI dark theme with cyan accents

### Backend
- **API**: FastAPI with async support
- **Database**: Neon Serverless Postgres
- **Vector DB**: Qdrant Cloud (free tier)
- **Authentication**: Better Auth
- **AI Integration**: OpenAI ChatKit SDK

### DevOps
- **CI/CD**: GitHub Actions
- **Hosting**: GitHub Pages
- **Version Control**: Git
- **Development**: Qwen Code + Spec-Kit Plus

## 📝 Learning Outcomes

After completing this textbook, students will be able to:

- ✅ Understand Physical AI principles and embodied intelligence
- ✅ Master ROS 2 (Robot Operating System) for robotic control
- ✅ Simulate robots with Gazebo and Unity
- ✅ Develop with NVIDIA Isaac AI robot platform
- ✅ Design humanoid robots for natural interactions
- ✅ Integrate GPT models for conversational robotics
- ✅ Deploy AI systems to physical robots

## 🤝 Contributing

This is a hackathon project developed for Panaversity. Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m '✨ Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is developed as part of the Panaversity Physical AI & Humanoid Robotics Hackathon.

## 👥 Author

**Your Name**
- GitHub: [@YOUR-USERNAME](https://github.com/YOUR-USERNAME)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)

## 🙏 Acknowledgments

- **Panaversity** - For organizing this hackathon
- **Zia Khan, Rehan, Junaid, and Wania** - Panaversity founders
- **Claude AI** - For AI-powered development assistance
- **Spec-Kit Plus** - For AI/Spec-driven development framework
- **NVIDIA** - For Isaac platform documentation
- **ROS Community** - For excellent robotics resources

## 📞 Contact

For questions or feedback about this textbook:
- Email: axkaxuzaa321op@gmail.com
- WhatsApp: +92-03161304188

## 🔗 Important Links

- 📚 **Live Book**: [https://YOUR-USERNAME.github.io/physical-ai-handbook/](https://YOUR-USERNAME.github.io/physical-ai-handbook/)
- 🐙 **GitHub Repo**: [https://github.com/YOUR-USERNAME/physical-ai-handbook](https://github.com/YOUR-USERNAME/physical-ai-handbook)
- 🎥 **Demo Video**: [YouTube Link - Under 90 seconds]
- 🌐 **Panaversity**: [https://panaversity.org](https://panaversity.org)
- 📖 **AI-Native Book**: [https://ai-native.panaversity.org](https://ai-native.panaversity.org)
---
## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎯 Goal

This textbook was created to win the "Physical AI & Humanoid Robotics Textbook" hackathon by making the most accessible, joyful, zero-cost alternative to traditional robotics education that requires expensive hardware or complex setups.
