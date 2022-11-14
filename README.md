# EasyPeasy

EasyPeasy is an online community for sharing quick and easy recipes. This is my first full-stack web application inspired by some recipe apps I used, such as Cookpad, Tasty and VegKit. I mocked some of their features for practice purpose, and gave it a minimalist look at the front end.

[Click here](https://easy-peasy-recipe.herokuapp.com/easypeasy) to enter EasyPeasy.

You may use the following login details if you like:

Username: **DessertMaster**

Password: 1111

I hope you enjoy browsing/using it as much as I enjoy making it! :)

## Snapshot

![Homepage.png](/public/README-image/EasyPeasy-Home.png)

![Userpage.png](/public/README-image/Easy-Peasy-userpage.png)

![Showpage.png](/public/README-image/EasyPeasy-showpage.png)

![SmallScreenLoginPage.png](/public/README-image/EasyPeasy-mobile-login.png)

## Tech used

Front-end: EJS, CSS, Bootstrap, Javascript, DOM

Back-end: Node.js, Express, MongoDB, Mongoose, Cloudinary

Deploy using Heroku.

## Features

1. Mobile-friendly responsive design
2. Users can easily sign up for an account
3. Users can publish their own recipes
4. Users can view all available recipes, but can only edit and delete their own
5. Users can view their own user page with all their recipes once login
6. Clean recipe layout for optimal reading experience
7. Clean and effective editing/creating page for the convenience of adding pictures and multiple ingredients/methods

## Planning and Development

Initial planning for a CRUD web app:

![Planning.png](/public/README-image/Planning.png)

To help myself keep track of the project scale and development, I set up an excel table based on CRUD (Create, Read, Update, Destroy) and map the URL, EJS files and Mongoose methods according to each functionality. During implementation, I was able to stick to this planning and add a few more functionality to it - user signup, login/logout and individual user’s page.

## Improvement Ideas

1. Add a search functionality - search recipes according to name, creator and keywords in ingredients!
2. Add sorting functionality to sort according to cook time - best function for busy people!
3. Allow user to upload videos: first need to be on Youtube, then use the url entered by user to display video on recipe show page
4. Add a review session for each recipe

## Acknowledgement

Thanks to Dido, Mandy and Hugh @General Assembly for pointing me to the right directions and resources when I get stuck. A special thank to Yixuan for introducing more git tools to me, now I am able to better manage my project using git branches, merge, issues and the project kanban. 

Thanks to my inspiration apps, sites and the recipes they provided: Cookpad, Tasty, VegKit, Woolworth Recipes.
