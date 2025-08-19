# 🎪 Radiant Festival

A modern festival website designed to showcase event details and provide a seamless ticket purchasing experience. With Stripe integration, it offers a quick and efficient way to handle payments without the need for complex e-commerce functionality, making it ideal for this type of project.

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

I started from a full Figma design that defined layout and spacing and the jungle-themed visual direction sand-toned backgrounds and a cohesive brand palette guided visual decisions. Using the design as a reference I moved straight into development and iterated directly in code, addressing UI/UX issues (timing, visibility, z-index) as they appeared and resolving animation problems during implementation. Once behavior was stable I ported the final animations to Framer Motion for consistency and fine-grained control.

Later I added a small shop/ticket flow to challenge myself, product listings and a cart (using Zustand). Payments use Stripe Checkout and are handled mostly client-side for simplicity; only minimal serverless endpoints are used to create sessions and verify payment events when needed.

Implementing payments required some backend work: creating Stripe sessions, adding webhook handlers, and building retries and logging so the frontend could remain simple.

For layout and performance I defined custom breakpoints, swapped assets per device, and audited the deployed page's LCP/CLS with Google Lighthouse. Heavy visual sections (parallax banners, galleries, sliders) were moved to client-side rendering and dynamic imports, and oversized images were compressed and converted to WebP. I also experimented with containerized deployment using Google Cloud Build (see `cloudbuild.yaml`) but deployed to Vercel for simplicity and zero cost.

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

- **Containerization**: I learned how to use Docker and Docker Compose to containerize the application, simplifying the deployment process.
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
2. Run `npm install` or `yarn` in the project directory to install the required dependencies.
3. Run `npm run start` or `yarn start` to get the project started. Or use Docker Compose to build and run the container:

   ```bash
   docker-compose up --build
   ```

4. Open [http://localhost:3000](http://localhost:3000) (or the address shown in your console) in your web browser to view the app.

## 🎥 Showcase

### Menu Interaction
- Demonstrates the interactive animated menu with smooth transitions and device-specific optimizations.

### Payment Side Menu
- Highlights the integration with Stripe for secure and seamless payment processing.

### Homepage
- Showcases the responsive design and dynamic animations that enhance the user experience.