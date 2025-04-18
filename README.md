# react-render-utils

![npm_version](https://img.shields.io/npm/v/react-render-utils) ![license](https://img.shields.io/npm/l/react-render-utils)

A lightweight utility library to simplify conditional rendering in React using JSX. It provides intuitive components like `<When>`, `<Switch>`, and `<Range>` for common conditional rendering scenarios.

---

## Table of Contents

- [react-render-utils](#react-render-utils)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [npm](#npm)
    - [yarn](#yarn)
  - [Components](#components)
    - [When](#when)
      - [Authentication example](#authentication-example)
      - [Inline content example](#inline-content-example)
    - [Switch](#switch)
      - [User role permissions example](#user-role-permissions-example)
      - [UI section navigation example](#ui-section-navigation-example)
    - [Range](#range)
      - [Score grading example](#score-grading-example)
      - [Loyalty tiers example](#loyalty-tiers-example)
  - [Functions](#functions)
    - [pluralise](#pluralise)
      - [pluralise basic usage](#pluralise-basic-usage)
    - [pluraliseWithCount](#pluralisewithcount)
      - [pluraliseWithCount basic usage](#pluralisewithcount-basic-usage)
      - [Custom zero text](#custom-zero-text)
      - [Custom plural form](#custom-plural-form)
      - [Hiding the count](#hiding-the-count)
    - [Real-world examples](#real-world-examples)
  - [License](#license)

---

## Installation

Install the package via npm or yarn:

### npm

```bash
npm install react-render-utils
```

### yarn

```bash
yarn add react-render-utils
```

---

## Components

### When

The `<When>` component is ideal for simple conditional rendering like `if-then-else`.

#### Authentication example

```jsx
<When value={isLoggedIn} then={<Dashboard />} otherwise={<LoginPage />} />
```

#### Inline content example

```jsx
<When
  value={isLoggedIn}
  then={<>You are logged in</>}
  otherwise={<>Please log in</>}
/>
```

---

### Switch

The `<Switch>` component helps render one of many possible options based on a value.

#### User role permissions example

```jsx
<Switch
  value={userRole}
  cases={{
    admin: <AdminDashboard />,
    user: <UserDashboard />,
    Default: <GuestDashboard />, // Fallback
  }}
/>
```

#### UI section navigation example

```jsx
<Switch
  value={currentAction}
  cases={{
    profile: <ProfileForm />,
    password: <PasswordForm />,
    notifications: <NotificationSettingsForm />,
    Default: <UserDashboard />,
  }}
/>
```

---

### Range

The `<Range>` component simplifies range-based conditional rendering.

#### Score grading example

```jsx
<Range
  value={studentScore}
  ranges={{
    "0-50": <div>Grade: F - Needs significant improvement.</div>,
    "51-60": <div>Grade: D - Passing.</div>,
    "61-70": <div>Grade: C - Satisfactory work.</div>,
    "71-85": <div>Grade: B - Good job!</div>,
    "86-100": <div>Grade: A - Excellent performance!</div>,
    Default: <div>Invalid score. Please contact admin.</div>,
  }}
/>
```

#### Loyalty tiers example

```jsx
<Range
  value={loyaltyPoints}
  ranges={{
    "0-100": (
      <div>You're a Bronze member. Earn more points for bigger rewards!</div>
    ),
    "101-500": <div>You're a Silver member. Keep going for Gold status!</div>,
    "501-1000": (
      <div>You're a Gold member. Enjoy exclusive perks and discounts!</div>
    ),
    "1001-5000": (
      <div>You're a Platinum member. You're our most valued customer!</div>
    ),
    Default: <div>Invalid points. Please contact support for assistance.</div>,
  }}
/>
```

---

## Functions

### pluralise

Returns the singular or plural form of a word based on the count.

#### pluralise basic usage

```jsx
// Returns singular or plural form based on count
pluralise(1, "apple", "apples"); // Returns: "apple"
pluralise(2, "apple", "apples"); // Returns: "apples"
pluralise(0, "apple", "apples"); // Returns: "apples"
```

### pluraliseWithCount

Formats a count with the appropriate singular or plural form of a word.

#### pluraliseWithCount basic usage

```jsx
// With default plural (singular + 's')
pluraliseWithCount(1, "apple"); // Returns: "1 apple"
pluraliseWithCount(2, "apple"); // Returns: "2 apples"
pluraliseWithCount(0, "apple"); // Returns: "0 apples"
```

#### Custom zero text

```jsx
// Special text for zero count
pluraliseWithCount(0, "apple", "No apples"); // Returns: "No apples"
```

#### Custom plural form

```jsx
// For irregular plurals
pluraliseWithCount(1, "child", null, "children"); // Returns: "1 child"
pluraliseWithCount(2, "child", null, "children"); // Returns: "2 children"
```

#### Hiding the count

```jsx
// Just show the word without the number
pluraliseWithCount(2, "apple", null, "apples", true); // Returns: "apples"
```

### Real-world examples

```jsx
// In a component - showing item count
const items = ["item1", "item2", "item3", "item4", "item5"];
return (
  <div>You have {pluraliseWithCount(items.length, "item")} in your cart.</div>
);
// Renders: "You have 5 items in your cart"

// Empty state with zero count
const emptyCart = [];
return (
  <div>
    You have {pluraliseWithCount(emptyCart.length, "item")} in your cart.
  </div>
);
// Renders: "You have 0 items in your cart"

// Custom message for empty state
const messages = [];
return (
  <div>{pluraliseWithCount(messages.length, "message", "No new messages")}</div>
);
// Renders: "No new messages"

// Progress tracking with multiple counts
const completedTasks = ["task1", "task2"];
const totalTasks = 5;
return (
  <div>
    {pluraliseWithCount(completedTasks.length, "task")} completed,
    {pluraliseWithCount(totalTasks - completedTasks.length, "task")} remaining
  </div>
);
// Renders: "2 tasks completed, 3 tasks remaining"
```

## License

MIT
