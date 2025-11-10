🚐 TravelTrucks — Project Description
TravelTrucks is a frontend application for a company that provides camper van rentals. Users can browse the catalog of available vehicles, filter them by different criteria, view detailed information and reviews, and book a camper online.

🧭 Main Pages
Home Page (/) — the landing page with a banner and a button that leads to the catalog.
Catalog Page (/catalog) — a page with a list of campers, filtering options, pagination, and the ability to add items to favorites.
Camper Details Page (/catalog/:id) — a detailed page for a specific camper with full information, a gallery, reviews, and a booking form.

⚙️ Technologies
React Router DOM — page structure and routing
TypeScript — static typing
Redux Toolkit + Redux Persist — global state management
Axios — HTTP requests
CSS Modules

🧩 Application State
The application uses Redux Toolkit to manage global state. The following data is stored in the state:
List of campers
Filter settings
Favorites list — stored in localStorage via redux-persist
Filtering is implemented on the frontend: all campers are loaded from the backend, and then filters are applied on the client side.

🗂️ Main Functionality
🔍 Camper Filtering by:
Location (text input)
Camper type (select one option)
Additional features (AC, kitchen, conditioner, TV, etc.)

❤️ Favorites
Add or remove a camper from the favorites list
Favorites persist after page refresh

💬 Reviews
Display user reviews

📝 Booking Form
Users can enter their personal information and submit a booking request

🔄 Loader
A loading component is displayed during asynchronous requests

📄 Pagination
Implemented with a “Load more” button that loads additional camper cards

🧑‍💻 Developer
Natalia Mohyla
Frontend Developer (React / Next.js / TypeScript)

```
