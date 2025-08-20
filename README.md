# 🎪 Radiant Festival

A demo website for a festival event in the Netherlands. Built to showcase event details and provide a simple ticket purchasing flow powered by Stripe.

## 📦 Tech Stack

- `Next.js`
- `TypeScript`
- `Tailwind CSS`
- `Framer Motion`
- `Stripe`
- `Zustand`

## 🚀 Features

- **Interactive Animated Menu**: A complex navigation menu with precise timing, smooth transitions, and device-specific optimizations.
- **Responsive Design**: Custom breakpoints for optimized loading and display across devices, including mobile-specific asset handling.
- **Stripe Integration**: Secure payment processing with server-side webhook handling for real-time updates.
- **Dynamic Animations**: Scroll-triggered and performance-optimized animations using Framer Motion.

## 🛠️ Process

I started from a full, static Figma design that defined layout, spacing and the brand palette. The visual direction is jungle-themed with sand-toned backgrounds to keep a cohesive vibe.

I moved straight into development and iterated in code. As the UI came together I fixed issues that only showed up in the browser visibility problems, z-index conflicts, and animation timing, and resolved those during development before porting stable animations to Framer Motion.

Later I added a small shop/ticket flow as a challenge. The flow is intentionally simple: Stripe Checkout on the client with minimal serverless endpoints to create sessions and verify webhooks.

For performance I focused first: swapping assets per breakpoint, moving heavy visual sections to client-side with dynamic imports, and compressing large images to WebP.

## 📚 What I Learned

During this project, I've picked up important skills and a better understanding of complex ideas, which improved my logical thinking.

### 🧠 State Management with Zustand

- **Logical Thinking**: Implementing Zustand for state management taught me how to efficiently manage global state in a React application. I learned how to structure state and actions for scalability.

### 💳 Stripe Integration

- **Payment Systems**: Integrating Stripe helped me understand the flow of payment processing, from creating sessions to handling webhooks securely.

### 🎨 Responsive Design

- **CSS and Tailwind**: I improved my skills in creating responsive layouts using Tailwind CSS, ensuring the website looks great on all devices.

### 🎥 Animations with Framer Motion

- **Dynamic UI**: Using Framer Motion allowed me to create smooth animations, enhancing the user experience and making the website more interactive.

### 🔄 Docker and Deployment

- **Cloud Deployment Experimentation**: Experimented with Google Cloud Build and a containerized deployment (see `cloudbuild.yaml` in the project), but deployed to Vercel for simplicity and zero cost.

### 📈 Overall Growth

Each part of this project helped me understand more about building scalable web applications, integrating third-party services, and improving user experience. It was more than just creating a website; it was about solving real-world problems and enhancing my development skills.

## 💭 How can it be improved?

- **Enhanced Store**: Expand the store to include merchandise and parking passes.
- **Dedicated Lineup Page**: Create a detailed page for lineup stages and schedules.
- **Interactive Map**: Add a map feature to help attendees navigate the festival grounds.

## 🚦 Running the Project

To run the project in your local environment, follow these steps:

1. Clone the repository to your local machine.
2. Run `npm install` in the project directory to install the required dependencies.
3. Run `npm run dev` to get the project started. Or use `docker-compose up --build` to build and run the container:
4. Open [http://localhost:3000](http://localhost:3000) (or the address shown in your console) in your web browser to view the app.

## 🎥 Showcase

### Homepage

https://github.com/user-attachments/assets/3ad535db-21d3-43e1-aab1-ddc0e6411d99

### Payment Side Menu

https://github.com/user-attachments/assets/326ce9e9-5925-4e7e-a8bb-c80cbbb5494e

### Menu Interaction

https://github.com/user-attachments/assets/3000ed51-3e23-4058-a7f5-2451b887ecb1
