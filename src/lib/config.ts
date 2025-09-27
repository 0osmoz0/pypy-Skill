export const config = {
  // Database
  databaseUrl: process.env.DATABASE_URL || "file:./dev.db",
  
  // NextAuth.js
  nextAuthUrl: process.env.NEXTAUTH_URL || "http://localhost:3001",
  nextAuthSecret: process.env.NEXTAUTH_SECRET || "your-secret-key-here-change-in-production",
  
  // Email Configuration
  email: {
    host: process.env.EMAIL_SERVER_HOST || "smtp.gmail.com",
    port: parseInt(process.env.EMAIL_SERVER_PORT || "587"),
    user: process.env.EMAIL_SERVER_USER || "your-email@gmail.com",
    password: process.env.EMAIL_SERVER_PASSWORD || "your-app-password",
    from: process.env.EMAIL_FROM || "your-email@gmail.com",
  }
};
