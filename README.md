# UpesiNotes Frontend

UpesiNotes is a fast, clean platform built for professional technical writers and documentation teams. This repository contains the frontend for the UpesiNotes MVP, combining a markdown-first editor with Git-inspired version control and streamlined review workflows. It solves the pain points of slow, cluttered tools like Notion or Google Docs, delivering a focused, iterative writing experience for technical content creators.

## Features

- **Markdown-First Editor**: Write in markdown with a distraction-free, real-time preview and slash commands for quick formatting.
- **Git-Like Version Control**: Track changes with commits, view diffs, and revert to previous versions. Basic branching support for iterative drafts.
- **Review Workflow**: Add inline comments, request approvals, and merge changes with a simple, collaborative flow.
- **Responsive UI**: Built with Next.js and React for a fast, modern experience across devices.

## Tech Stack

- **Frontend**: Next.js, React, Tiptap (markdown editor), React Diff Viewer (version control diffs)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Vercel account (for deployment)
- Access to a deployed UpesiNotes backend API (contact the backend team for the API URL)

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/upesinotes-frontend.git
   cd upesinotes-frontend
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**: Create a `.env.local` file in the root directory and add:

   ```
   NEXT_PUBLIC_API_URL=http://your-backend-url:port
   ```

   Replace `your-backend-url:port` with the URL of the deployed UpesiNotes backend API (or `http://localhost:8080` for local development with a backend instance).

4. **Run the Development Server**:

   ```bash
   npm run dev
   ```

   Open `http://localhost:3000` in your browser to see the app.

5. **Deploy to Vercel**:

   - Push your code to a GitHub repository.
   - Import the repository into Vercel and set the `NEXT_PUBLIC_API_URL` environment variable in the Vercel dashboard.
   - Deploy the app and access it at the provided URL.

## Usage

1. **Create a Document**:

   - Sign in with your email (via the backend API).
   - Start a new document in the markdown editor. Use slash commands (e.g., `/h1`, `/code`) for quick formatting.

2. **Track Changes**:

   - Save changes as commits with a short message (e.g., "Updated API section").
   - View diffs to compare versions or revert to a previous commit.

3. **Collaborate**:

   - Share the document with team members.
   - Add inline comments and request approvals for changes.
   - Merge approved changes to finalize the document.

## Roadmap

The MVP is just the beginning. Future frontend features include:

- Kanban-style progress tracking (Draft → Review → Published)
- Enhanced UI for invoice generation (pending backend support)
- Integration with SDKs for embedding the editor
- AI-powered proofreading and summarization UI components
- Advanced branching and merge conflict visualization

## Contributing

We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to your fork (`git push origin feature/your-feature`).
5. Open a pull request with a clear description of your changes.

Please follow our Code of Conduct and ensure your code adheres to the project's ESLint and Prettier configurations.

## Issues

Found a bug or have a feature request? Open an issue on the GitHub Issues page. Provide as much detail as possible, including steps to reproduce bugs.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For questions or feedback, reach out via:

- Email: your.email@example.com
- X: @yourXhandle
- GitHub: yourusername

---

Built with 💻 by \[Your Name\] for technical writers everywhere.