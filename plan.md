# UpesiNotes Frontend MVP Sprint Plan (Mocked Backend)

## Sprint Overview
- **Duration**: 2 weeks (10 working days)
- **Team**: 2–3 frontend developers
- **Sprint Goal**: Deliver a functional frontend MVP for UpesiNotes using mocked data and API calls. Focus on markdown-first editing, basic version control UI, review workflow, and a responsive, accessible interface.
- **Methodology**: Agile (Scrum)

---

## Sprint Backlog

### User Stories

#### 1. Markdown Editor for Document Creation
- **Goal**: Allow users to create and edit documents in a markdown-first editor.
- **Tasks**:
  - Set up Next.js project.
  - Integrate Tiptap editor with real-time markdown preview.
  - Implement slash commands (e.g., `/h1`, `/code`, `/bullet`).
  - Style editor with Chakra UI or Mantine.
  - Use mock API calls to simulate saving/loading documents.
- **Acceptance Criteria**:
  - User can edit markdown content and view live preview.
  - Slash commands enhance editing experience.
  - Editor is styled and responsive.
  - Mocked document save/load flows work end-to-end.
- **Story Points**: 8  
- **Assignees**: Developer 1, Developer 2 (UI focus)

---

#### 2. Git-like Version Control UI
- **Goal**: Provide UI for viewing changes, commits, and basic branching.
- **Tasks**:
  - Implement UI for commit history and diff viewer using mock data.
  - Create message input for committing changes.
  - Simulate commit saving and version history via mocks.
  - Create UI for basic branching: create/switch branches.
- **Acceptance Criteria**:
  - Commit history displays entries with messages and timestamps.
  - Diff viewer compares two versions using mocked versions.
  - Branch switch and creation actions update mock state.
- **Story Points**: 8  
- **Assignees**: Developer 2, Developer 3

---

#### 3. Review Workflow UI
- **Goal**: Let users collaborate via comments and approvals (mocked).
- **Tasks**:
  - Implement inline commenting (e.g., with Tiptap extension or overlay).
  - Build UI for "Request Review" flow.
  - Simulate approval and merge actions with mock state.
- **Acceptance Criteria**:
  - Users can leave and view inline comments.
  - Mock review status and approval steps are visually reflected.
  - "Merge changes" updates mock document state.
- **Story Points**: 5  
- **Assignees**: Developer 1, Developer 3 (UI focus)

---

#### 4. Responsive and Intuitive UI
- **Goal**: Ensure UI works well across devices and screen sizes.
- **Tasks**:
  - Build layouts based on Figma or rough mockups.
  - Implement responsive styling using Chakra UI or Mantine.
  - Add sidebar (document list), top bar (actions).
  - Ensure accessibility (keyboard nav, ARIA).
- **Acceptance Criteria**:
  - UI works on mobile, tablet, desktop.
  - Navigation is accessible and intuitive.
  - Styling is consistent and responsive.
- **Story Points**: 5  
- **Assignees**: Developer 2 (UI/UX lead), Developer 1

---

#### 5. Simulated Auth and Document Access
- **Goal**: Allow users to “log in” and access their documents using mock data.
- **Tasks**:
  - Implement sign-in/sign-up forms.
  - Mock authentication flows with localStorage or context.
  - Display mock user documents with edit/create options.
- **Acceptance Criteria**:
  - User can “log in” with credentials.
  - Mocked document list reflects user-specific data.
  - Auth state persists through reloads using localStorage.
- **Story Points**: 3  
- **Assignees**: Developer 3

---

## Sprint Schedule

| Day        | Focus                                                                 |
|------------|------------------------------------------------------------------------|
| Day 1      | Sprint planning, setup Next.js project, mock API scaffolding          |
| Days 2–3   | Auth UI, document list, editor scaffolding                            |
| Days 4–6   | Markdown editor, version control UI, mock API integration             |
| Days 7–8   | Review flow, responsive UI, accessibility checks                      |
| Day 9      | Testing all flows, final UI polish                                    |
| Day 10     | Final testing, sprint review/demo                                     |

---

## Definition of Done
- UI features are functional using mock data (no real backend).
- Code is peer-reviewed and merged to `main`.
- Mock APIs cover all key flows (auth, documents, versions).
- README documents setup and mock behavior clearly.

---

## Risks and Mitigation

- **Risk**: Backend required for integration.
  - **Mitigation**: All features use mock data or stubbed APIs.
- **Risk**: Editor or Diff Viewer complexity.
  - **Mitigation**: Prototype these early, fallback to simpler components if needed.
- **Risk**: UI feature creep.
  - **Mitigation**: Prioritize only MVP flows and polish later.

---

## Sprint Review
- **Demo**: Walkthrough of markdown editing, version control UI, review flow, and simulated login using mock data.
- **Feedback**: Gather from design team and stakeholders.
- **Retrospective**: Evaluate sprint execution and frontend-mock strategy.

---

## Next Steps
- Prepare for backend integration in next sprint.
- Extend version control and review workflows.
- Improve real-time collaboration and user management features.

---

**Total Story Points**: 31  
**Team Capacity**: ~30–36 points (2–3 devs, 2 weeks)  
**Notes**: This MVP is frontend-only and fully mock-driven. Real backend integration and advanced features are reserved for Sprint 2.
