# JournalForge

JournalForge is an innovative journaling platform that combines personal writing with AI-powered content generation. It provides users with personalized logins, private journals, and the ability to publish their entries for others to read.

## Features

- **User Authentication**: Secure, personalized logins for each user.
- **Private Journaling**: Create and manage your personal, private journal entries.
- **AI-Powered Content Generation**: Leverage AI to help generate journal content or get writing prompts.
- **Publishing Options**: Share your journal entries with the world or keep them private.
- **Open Access**: Easy discovery and reading of published journals.

## Tech Stack

JournalForge is built using the MERN stack and integrates with the Groq API for AI-powered features:

- **MongoDB**: Database for storing user information and journal entries.
- **Express.js**: Backend framework for handling server-side logic.
- **React**: Frontend library for building the user interface.
- **Node.js**: Runtime environment for the backend.
- **Groq API**: Integration for AI-powered content generation.

## Getting Started

Use the test credentials to have a glimpse of our current version - https://journal-forge.vercel.app

```
  username : test
  password : test
```
### Prerequisites

- Node.js (v14 or later)
- MongoDB
- Groq API key

### Creating a Groq API Key

To use the AI-powered features of JournalForge, you'll need a Groq API key. Here's how to obtain one:

1. Visit the [Groq](https://console.groq.com/docs/quickstart) by clicking here and sign up for an account if you haven't already.
2. After logging in, navigate to your account settings or API section.
3. Look for an option to create a new API key or view existing keys.
4. Generate a new API key and copy it securely.
5. Keep this key confidential and use it in the `.env` file as instructed below.
6. Or you can create your own by the above given steps and its simple

### Installation and Running the App

1. Clone the repository:
   ```
   git clone https://github.com/aswathcm29/JournalForge.git
   cd JournalForge
   ```

2. Set up environment variables:
   Create a `.env` file in the `backend` directory and add the following:
   ```
   GROQ_API_KEY=your_groq_api_key
   DATABASE_URL=your_mongodb_connection_string
   SECRET_KEY=yoursecretkey
   PORT=5000
   GROQ_TOKEN=your_groq_api_key
   ```

3. Start the backend server:
   ```
   cd backend
   npm install
   npm start
   ```

4. In a new terminal, start the frontend server:
   ```
   cd frontend
   npm install
   npm start
   ```

The backend server will run on `http://localhost:5000` (or your specified port), and the frontend will be available at `http://localhost:3000`.

## Contributing

We welcome contributions from the open-source community! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) file for more details on our code of conduct, development process, and how to submit pull requests.

---

## 👀 Our Contributors

- We extend our heartfelt gratitude for your invaluable contribution to our project! Your efforts play a pivotal role in elevating this project to greater heights.
- Make sure you show some love by giving ⭐ to our repository.

<div align="center">

  <a href="https://github.com/aswathcm29/JournalForge">
    <img src="https://contrib.rocks/image?repo=aswathcm29/JournalForge&&max=100" />
  </a>
</div>

---

## License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details.

## Contact

For any questions or concerns, please open an issue on this repository or contact the maintainers directly.

Happy Journaling!
