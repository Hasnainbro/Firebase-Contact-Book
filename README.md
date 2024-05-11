# Firebase Contact App (Vite-Tailwind CSS)

This is a simple React application that allows you to manage contacts using Firebase's Cloud Firestore as the backend database. The app provides functionality to add new contacts, view existing contacts, and update contact information.

## Featureshttps://github.com/Hasnainbro/Firebase-Contact-Book/settings

* Add new contacts with name and email
* View a list of existing contacts
* Update contact information (name and email)
* Form validation for contact details

## Technologies Used

* React
* Firebase (Cloud Firestore)
* Formik (for form handling)
* Yup (for form validation)
* react-toastify (for success notifications)

## Dependencies

This project has the following dependencies: 

- `react`: Core React library
- `react-dom`: React package for working with the DOM
- `firebase`: Firebase SDK for JavaScript
- `formik`: Library for building forms in React
- `yup`: Object schema validator and object parser
- `react-toastify`: React library for adding toast notifications
- `react-icons`: Popular icons for React projects

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

  ```bash
    git clone https://github.com/Hasnainbro/Firebase-Contact-Book.git
  ```

2. Navigate to the project directory:

   ```bash
    cd Firebase-Contact-Book
   ```
3. Set up Firebase:
- Create a new project in the Firebase console
- Enable Cloud Firestore
- Create a new Web app and copy the configuration object
- Create a `config/firebase.js` file in the project and paste the configuration object

4. Start the development server:

   ```bash
    npm run dev
   ```

The app should now be running at `http://localhost:3000`.

## Usage

- Click the "+" icon in the top-right corner to open the "Add Contact" form.
- Fill in the name and email fields, and click "Add Contact" to save the new contact.
- The list of contacts will be displayed on the main page.
- To update a contact, click the pencil icon next to the contact, and the "Update Contact" form will open with the existing details pre-filled.
- Make the desired changes and click "Update Contact" to save the changes.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License].
