# react-render-utils

![npm_version](https://img.shields.io/npm/v/react-render-utils)
![license](https://img.shields.io/npm/l/react-render-utils)

---

- **[Installation](#install)**
- **[Props API](#propsapi)**

---

<a name="install"></a>

## Installation

npm

```bash
npm install react-render-utils
```

yarn

```bash
yarn add react-render-utils
```

## When

JSX for rendering if - then - else

Example 1:

```html
<When value="{isLoggedIn}" then="{<Dashboard" />} otherwise={<LoginInPage />} >
```

Example 2:

```html
<When value="{isLoggedIn}" then="{<>You are logged in</When>}"></When>
```

## Switch

JSX Switch condition.

Example 1:

```html
      <Switch
        value={userRole}
        cases={{
          admin: <AdminDashboard />,
          user: <UserDashboard />,
          Default: <GuestDashboard />, // Fallback 
        }}
      />
```

Example 2:

```html
      <Switch
        value={currentAction}
        cases={{
          profile: <ProfileForm />,
          password: <PasswordForm />,
          notifications: <NotificationSettingsForm />,
          Default: <UserDashboard />
        }}
      />
```

## Range

JSX Range condition.

Example 1:

```html
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

Example 2:

```html
<Range
  value={loyaltyPoints}
  ranges={{
    "0-100": <div>You’re a Bronze member. Earn more points for bigger rewards!</div>,
    "101-500": <div>You’re a Silver member. Keep going for Gold status!</div>,
    "501-1000": <div>You’re a Gold member. Enjoy exclusive perks and discounts!</div>,
    "1001-5000": <div>You’re a Platinum member. You’re our most valued customer!</div>,
    Default: <div>Invalid points. Please contact support for assistance.</div>,
  }}
/>
```


