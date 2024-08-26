This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Approach
# Components
- Sidebar:
This is the main component that renders the sidebar and the dashboard.
The sidebar contains links that, when clicked, update the activeLink state to display the corresponding cards.
The Dashboard component is passed the activeLink state and the setActiveLink function as props.

- Dashboard:
This component renders the cards based on the activeLink state.
It includes a search input that filters the cards based on the search query.
A dropdown menu is also provided, which allows users to change the activeLink state and display the corresponding cards.

- State Management
The activeLink state is used to keep track of the currently selected option.
The searchQuery state is used to filter the cards based on the user's input.

- Conditional Rendering
The filteredCards array is created by mapping over the cardData array and filtering the cards based on the searchQuery.
The cards are conditionally rendered based on the activeLink state.
Assumptions Made

- Mock Data:
The cards and their corresponding data are hardcoded for demonstration purposes.
In a real-world application, this data would likely be fetched from an API or a database.

- Styling:
The styling is kept minimal for simplicity. In a production environment, more sophisticated styling would be applied.
Additional Features or Improvements

- Persistent State:
Implement local storage or a backend to persist the state of the selected option and search query between sessions.

- Enhanced Search:
Improve the search functionality to handle more complex queries, such as searching within card descriptions or other metadata.

- Dynamic Data:
Integrate with an API to fetch dynamic data for the cards instead of using hardcoded mock data.

- User Authentication:
Implement user authentication to personalize the dashboard and sidebar options based on the user's preferences and permissions.