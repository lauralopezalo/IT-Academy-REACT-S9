# Sardenya CoWorks Landing Page

This repository contains the source code for a landing page created using React, JavaScript, Axios, Styled Components, and Tailwind CSS. The landing page showcases a coworking office and provides information about its services, amenities, and pricing.

You can visit the deployed version of the landing page [here](https://sardenya-coworks-e7y1tz44p-lauralopezalo.vercel.app/).

## Features

- Responsive design: The landing page is optimized for different screen sizes, ensuring a seamless user experience across devices.
- Dynamic content: The page fetches data from a server using Axios to populate sections such as testimonials, pricing plans, and featured amenities.
- Styled Components: The project leverages Styled Components for styling, allowing for a modular and component-based approach to CSS.
- Tailwind CSS: The utility-first CSS framework Tailwind CSS is used to enhance the styling and layout of the landing page.

![screencapture-sardenya-coworks-e7y1tz44p-lauralopezalo-vercel-app-2023-07-02-17_39_34](https://github.com/lauralopezalo/sardenya-coworks/assets/109240574/7475a034-d73b-425e-8735-db88317cdc46)


## Installation

1. Clone the repository:

```
git clone https://github.com/lauralopezalo/sardenya-coworks.git
```

2. Navigate to the project directory:

```
cd sardenya-coworks
```

3. Install the dependencies:

```
npm install
```

## Usage

1. Start the development server:

```
npm start
```

2. Open a web browser and visit `http://localhost:3000` to see the landing page.

## Project Structure

The project follows a standard React project structure:

- `src/components`: Contains reusable components used in the landing page.
- `src/pages`: Contains the main pages of the application, such as Home, About, and Contact.
- `src/services`: Includes service modules responsible for fetching data from the server using Axios.
- `src/App.tsx`: The entry point of the application, where routes and layout components are defined.
- `src/index.tsx`: The root file that renders the React application.

## Customization

To customize the content and appearance of the landing page, you can modify the following files:

- `src/components`: Update or create new components to reflect your desired structure and layout.
- `src/pages`: Adjust the content of the pages according to your needs.

## Deployment

To deploy the landing page to a hosting provider, follow the steps below:

1. Build the production-ready bundle:

```
npm run build
```

2. The build artifacts will be generated in the `build` directory. You can deploy the contents of this directory to your chosen hosting provider.

For more detailed instructions on deployment, consult the documentation of your preferred hosting platform.

## Contributing

Contributions to this project are welcome. If you encounter any issues or would like to propose improvements, please open an issue or submit a pull request. Please follow the existing code style and conventions.

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for checking out this repository! If you have any questions or feedback, feel free to reach out. Happy coding!
