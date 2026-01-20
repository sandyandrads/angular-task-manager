# Angular Essentials Study Project

This repository contains a study project built while following the Udemy course:

**Master Angular (formerly "Angular 2") – The Complete Guide**  
https://www.udemy.com/course/the-complete-guide-to-angular-2/

## 🎬 Demo

![Demo do projeto](./src/assets/demo.gif)


## 🎯 Purpose

This project serves as a learning environment to explore Angular fundamentals and modern features introduced in Angular 16+.

It is not intended for production use — the goal is to practice, experiment, and build foundational knowledge.

---

## 📚 Topics Covered

✔ **Angular Essentials**
- Components & Templates
- Data Binding (Interpolation, Property, Event, Two-Way)
- Directives (`*ngIf`, `*ngFor`)
- Services & Dependency Injection
- Modules (feature modules & shared modules)
- Standalone Components vs Module-based Components
- Lifecycle & Template Interaction

✔ **Forms & Interaction**
- `ngModel` (two-way binding)
- `FormsModule`
- `ngSubmit` event
- Local component state

✔ **Modern Angular Features (v16+)**
- Signals (usage & limitations)
- Standalone APIs
- Inject function
- Content Projection (`ng-content`)

---

## 🛠️ Tech Stack

- **Angular** 16+
- **TypeScript**
- **CLI scaffolding**
- Browser localStorage (simple persistence)

---

## 🗂️ Project Structure

```text
src/
 ├── app/
 │   ├── header/
 │   │   └── header.component.* 
 │   ├── shared/
 │   │   ├── card/
 │   │   │   └── card.component.*
 │   │   └── shared.module.ts
 │   ├── tasks/
 │   │   ├── new-task/
 │   │   │   └── new-task.component.*
 │   │   ├── task/
 │   │   │   └── task.component.*
 │   │   ├── tasks.component.*
 │   │   ├── tasks.module.ts
 │   │   └── tasks.service.ts
 │   ├── user/
 │   │   └── user.component.*
 │   ├── app.component.*
 │   ├── app.module.ts
 │   └── dummy-users.ts
 ├── assets/
 │   └── users/
 ├── main.ts
 ├── styles.css
 └── index.html
