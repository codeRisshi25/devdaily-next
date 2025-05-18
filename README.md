# DevDaily - Social Media for Developers

!DevDaily

A modern, accessible social platform built specifically for developers to share updates, connect with peers, and engage with the tech community.

## Features

- 🔐 Secure authentication with Clerk
- 🖼️ Image uploads with UploadThing
- 💬 Post creation and commenting
- ♥️ Like and save posts
- 👤 User profiles with customizable bios
- 👥 Follow/unfollow users
- 🔔 Real-time notifications
- 🌓 Dark/light mode
- 📱 Responsive design for all devices

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Authentication**: Clerk
- **Database**: Prisma with your preferred DB
- **File Storage**: UploadThing
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- A database (PostgreSQL recommended)
- Git

### Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/devdaily-next.git
cd devdaily-next
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a .env file in the root directory with the following variables:

```
```
# Database
DATABASE_URL="postgresql://username:password@host:port/database?sslmode=require"

# Clerk Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# UploadThing
UPLOADTHING_TOKEN=your_uploadthing_token
```
```

4. **Set up the database**

```bash
npx prisma generate
npx prisma db push
```

5. **Run the development server**

```bash
npm run dev
```

6. **Open your browser**

Visit [http://localhost:3000](http://localhost:3000) to see the application running.

## Database Schema

![alt text](image.png)

## Ongoing Development

The project is under active development with the following features planned:

### To-Do
- [ ] Add support for hashtags and post tagging
- [ ] Implement direct messaging
- [ ] Add code snippet sharing with syntax highlighting
- [ ] Create developer-specific profile fields (skills, GitHub integration)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Clerk](https://clerk.dev/) for authentication
- [UploadThing](https://uploadthing.com/) for file uploads
- [Vercel](https://vercel.com/) for hosting recommendations

---

Built with ❤️ by Risshi