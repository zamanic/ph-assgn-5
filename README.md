# 🧱 A-5 Dev Stack Builder Website

# 🧱 Dev Stack Builder

## 📝 About The Project

**Dev Stack Builder** is an interactive website that helps developers explore, compare, and build their ideal development stack. Users can browse through curated technologies across categories like Frontend, Backend, Database, Language, Styling, and DevOps — then compile their favorite picks into a personalized "Your Stack" panel.

---

## 🛠️ Technologies Used

- **React 19** — Component-based UI library
- **TypeScript** — Type-safe development
- **Vite** — Lightning-fast build tool & dev server
- **Tailwind CSS v4** — Utility-first CSS framework
- **DaisyUI v5** — UI component library for Tailwind
- **React Toastify** — Toast notification system
- **React Icons** — Icon library
- **JSON** — Static data source for technologies

---

## ✨ Key Features

### 1. Interactive Technology Explorer

Browse 12 hand-picked technologies in a responsive 3-column card layout. Each card shows the icon, badge, category chip, difficulty level, and star rating. Cards lift up with smooth hover animations.

### 2. Personal "Your Stack" Builder

Click **Add to Stack** on any card to add it to the sticky sidebar panel. The button instantly changes to "✓ Added to Stack" with a gradient style, the card gets a gradient highlighted border, and the sidebar updates with the count. Remove items individually with the ✕ button, or clear everything in one click with **Remove All** — every action fires a toast notification.

### 3. Responsive, Brand-Gradient Design

The whole site uses one shared **orange → pink → violet** brand gradient defined in a single CSS variable. The sticky navbar collapses into a hamburger menu on mobile. The hero banner has a two-tone headline and gradient CTA buttons. The footer has a brand block, social icons, and three link groups.

---

---

## ❓ React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX stands for **JavaScript XML**. It is a syntax extension for JavaScript that lets us write HTML-like code directly inside JavaScript files. In React, JSX is used because it makes describing UI structure easy and readable — it looks almost like plain HTML but gets compiled down to regular React element objects (function calls) before the browser runs it.

### 2. What is the difference between props and state?

- **Props** (short for properties) are **read-only data passed from a parent component to a child component**. The child cannot change props on its own; only the parent can update them. Props make components reusable.
- **State** is **data owned and managed inside a single component**. When state changes, React automatically re-renders that component and its children so the UI updates. Unlike props, state can be changed by the component itself using a setter function.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook that lets a functional component **own and update its own data (state)**. It returns two things in an array: the current value of the state, and a setter function to update it. When you call the setter, React re-renders the component with the new value.

In this project I used `useState` in multiple places:

- In **App.tsx**: to store `selectedIds` (which tech IDs have been added), `selectedStack` (the actual Technology objects in the user's stack), and `techPromise` (the data fetch promise, so it runs only once).
- In **Navbar.tsx**: to toggle `mobileOpen` state for the hamburger menu.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is a React Hook used for **side effects** — things that happen after a component renders, such as fetching data from an API, subscribing to events, timers, or manually changing the DOM. It accepts a callback (your effect code) and an optional **dependency array** that controls when the effect re-runs.

For loading JSON data, `useEffect` is commonly used because it lets you start the fetch **after the first render** and avoid running it on every re-render (by passing an empty dependency array `[]`). In this project I used the Suspense + `use()` pattern instead of `useEffect` + `useState` — which is the newer React way of loading data — but if you use the classic `fetch → setData` pattern, `useEffect` is the right place to put that call.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

When you render a list of elements using `.map()`, React needs a way to **know which items changed, were added, or were removed** between renders. The `key` prop is a **stable, unique identifier** for each list item that helps React's diffing algorithm match old elements to new ones correctly.

Without proper keys React can mix up component state, re-render the wrong elements, or show warnings in the console. Good keys are unique IDs from your data (like `tech.id`) — using array index as a key is only okay if the list is static and never reordered or filtered.

### 6. What is conditional rendering? Show one place you used it.

**Conditional rendering** means showing (or not showing) different parts of the UI based on a condition — just like a regular `if/else` statement, but inside JSX. Common patterns are ternaries `cond ? <A/> : <B/>`, logical AND `cond && <ShowThis/>`, and early returns from components.

I used it in many places in this project. One clear example is in the **YourStack sidebar**:

```tsx
{selectedStack.length === 0 ? (
  <div className="border-2 border-dashed ...">
    <p>Your stack is empty.</p>
  </div>
) : (
  <div className="space-y-3 mb-6">
    {selectedStack.map(tech => (
      <div key={tech.id} ...>{tech.name} ... remove button</div>
    ))}
  </div>
)}
```

When nothing is selected it shows the dashed "empty" message; when items exist it renders the stacked cards instead.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

- **Parent → Child** (data down): pass values as **props**. For example in this project, `App.tsx` is the parent and it passes `selectedIds`, `setSelectedIds`, `selectedStack`, and `setSelectedStack` as props to the `Technologies` component, which forwards them further to `TechnologyCard` and `YourStack`.

- **Child → Parent** (events / actions up): the parent passes a **setter function or a callback** as a prop, then the child calls that function when something happens. In this project, `TechnologyCard` calls `setSelectedIds([...prev, tech.id])` and `setSelectedStack([...prev, tech])` — these setters came from the grandparent `App.tsx` through props, so when the child clicks "Add to Stack" it actually **updates state in the parent**, which then re-renders everything consistently.
