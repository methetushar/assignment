# Steps to set up Assignment Project

## Create a .env file

Copy .env.example

# Change database connection

<p>DB_CONNECTION=mysql</p>
<p>DB_DATABASE=your_database</p>
<p>DB_USERNAME=root</p>
<p>DB_PASSWORD=</p>

# Install composer dependencies

composer install

# Install npm dependencies

Run: npm install & npm run dev

# Generate app key

php artisan key:generate

# Storage Link

php artisan storage:link

# Run the project

php artisan serve

# Finished
