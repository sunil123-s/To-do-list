# 📝 Todo List Application

This is a simple Todo List application built with React and Redux. The application allows users to add, update, and remove todo items.

## 🚀 Usage

### Add a Todo:
- Enter a task in the input field.
- Click the "Add" button to add the task to the list.

### Update a Todo:
- Click the "Update" button next to the task you want to update.
- Modify the text in the input field that appears.
- Click "Save" to update the task or "Cancel" to discard changes.

### Remove a Todo:
- Click the "Remove" button next to the task you want to delete.

## 🧩 Components

### Mainpage
This component is the main interface of the application. It includes:
- An input field to add new todo items.
- A list of current todo items with options to update or remove each item.

## 🔄 State Management

The application uses Redux for state management. The state is managed in the `TodoSlice` using Redux Toolkit.

### Slices
- **TodoSlice.js:** Manages the state of todo items, including adding, updating, and removing items.

### Store
- **appStore.js:** Configures the Redux store, combining all slices.

## 🎨 Styling

The application uses Tailwind CSS for styling.

- **App.css:** Contains the Tailwind CSS import and custom styles for the application.

