 
export const authConfig = {
  callbacks: {
    async redirect(url, baseUrl) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      // Add any custom logic you need for the session callback
      // For example, you can log the user or perform additional actions
      console.log("User signed in:", user);
      return session;
    },
  },
  providers: [], // Add providers with an empty array for now
} ;