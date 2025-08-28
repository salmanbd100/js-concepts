# 🧠 What is Strict Mode?

Strict mode is a way to opt-in to a restricted version of JavaScript. It
was introduced in ECMAScript 5 (ES5, 2009) to fix silent errors and
enforce safer coding practices.

You enable it with:

```javascript
"use strict";
```

Can be declared at the top of a file (script-wide).

Or inside a function (function-wide).

---

## ⚡ Why Strict Mode Exists?

JavaScript was originally very forgiving:

- Typos in variables would create globals automatically.
- Assignments to read-only properties were ignored silently.
- `this` in functions would default to `window` (or global).

➡️ Strict mode was introduced to catch mistakes early and make JS more
predictable.

---

## 🚨 Key Differences in Strict Mode

### 1. No accidental globals

Without strict mode:

```javascript
x = 10; // No var/let/const
console.log(x); // 10 (becomes global!)
```

With strict mode:

```javascript
"use strict";
x = 10; // ❌ ReferenceError: x is not defined
```

### 2. this in functions

Without strict mode:

```javascript
function foo() {
  console.log(this);
}
foo(); // logs: Window (in browsers)
```

With strict mode:

```javascript
"use strict";
function foo() {
  console.log(this);
}
foo(); // logs: undefined ✅ safer
```

### 3. Duplicate parameter names not allowed

```javascript
function sum(a, a, b) {
  // ❌ SyntaxError in strict mode
  return a + b;
}
```

### 4. Silent errors become visible

Without strict mode:

```javascript
const obj = {};
obj.x = 10; // works fine
Object.defineProperty(obj, "y", { value: 20, writable: false });
obj.y = 30; // ❌ silently ignored
```

With strict mode:

```javascript
"use strict";
obj.y = 30; // ❌ TypeError: Cannot assign to read only property
```

### 5. Reserved keywords are protected

```javascript
"use strict";
let public = 123; // ❌ SyntaxError
let private = 456; // ❌ SyntaxError
```

---

## ✅ Benefits of Strict Mode

- Helps catch bugs earlier.
- Prevents unsafe practices.
- Prepares code for future ECMAScript versions.
- Encourages better coding habits.

---

## 🧾 Quick Checklist for Interviews

- `"use strict"` introduced in **ES5**.
- Disallows **implicit globals**.
- Changes how **this** works (`undefined` in functions).
- Prevents **duplicate params & reserved keywords**.
- Throws errors instead of **silently failing**.
