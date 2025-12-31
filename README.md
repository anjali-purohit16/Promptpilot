🚀 PromptPilot
PromptPilot is a comprehensive AI-powered SaaS platform that streamlines content creation. It serves as a unified dashboard where users can generate blog articles, create custom images, perform advanced photo editing, and receive AI-driven resume feedback.

**

🌟 Features
📝 AI Text Generation
AI Article Writer: Generate high-quality, formatted articles (Short, Medium, Long) on any topic using Google's Gemini model.

Blog Title Generator: Create catchy, SEO-friendly titles based on keywords and categories.

🎨 Creative Studio
AI Image Generation: Turn text prompts into stunning visuals (Realistic, Anime, 3D styles) using the ClipDrop API.

Background Removal: Instantly remove backgrounds from uploaded images using Cloudinary AI.

Object Removal: Clean up images by describing unwanted objects to remove (Generative Fill).

💼 Career Tools
Resume Reviewer: Upload a PDF resume to receive constructive, AI-powered critique and improvement suggestions.

👥 Community & Social
Discovery Feed: Publish your best creations to the public community feed.

Social Interactions: View and "Like" creations from other users.

🔐 Auth & Monetization
Secure Authentication: Powered by Clerk (Sign In/Sign Up/Profile).

Freemium Model: Smart credit system that limits free usage and reserves advanced features for Premium plans.

🛠️ Tech Stack
Frontend
Framework: React.js with Vite for lightning-fast build speeds.

Styling: Tailwind CSS for a responsive, modern UI.

Routing: React Router DOM for seamless client-side navigation.

State/Auth: Clerk SDK for user management and React Hooks for local state.

HTTP Client: Axios for API requests.

Icons: Lucide React.


Backend
Server: Node.js & Express.js.

Database: PostgreSQL (utilizing native array support for likes).

AI Services:

LLM: Google Gemini 2.0 Flash (via OpenAI SDK).

Image Gen: ClipDrop API.

Computer Vision: Cloudinary AI Transformations.

File Handling: Multer (for uploads) & PDF-Parse (for resume analysis).

🚀 Getting Started
Prerequisites
Node.js (v18+)

PostgreSQL Database

Clerk Account

Cloudinary Account

API Keys (Gemini, ClipDrop)

Environment Variables
Create a .env file in the root directory and add the following keys:

Code snippet

# Frontend (Vite)
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
VITE_BASE_URL=http://localhost:5000

# Backend
CLERK_SECRET_KEY=sk_test_...
GEMINI_API_KEY=...
CLIPDROP_API_KEY=...
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
DATABASE_URL=postgresql://...
Installation
Clone the repository

Bash

git clone https://github.com/yourusername/promptpilot.git
cd promptpilot
Install Dependencies

Bash

npm install
# or if you have separate folders for client/server:
# cd client && npm install
# cd ../server && npm install
Run the Application

Bash

# Run Frontend (in one terminal)
npm run dev

# Run Backend (in another terminal)
node server.js 
📂 Project Structure
Bash

├── src/
│   ├── assets/         # Images and icons
│   ├── components/     # Reusable UI components (Sidebar, Navbar)
│   ├── pages/          # Application views (Dashboard, WriteArticle, etc.)
│   ├── App.jsx         # Main Routing logic
│   └── main.jsx        # Entry point and Clerk Provider
├── controllers/        # Backend logic for AI and User operations
├── middlewares/        # Custom Auth middleware
├── routes/             # API Route definitions
└── index.css           # Global Tailwind styles
🤝 Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements.

📄 License
This project is licensed under the MIT License.
