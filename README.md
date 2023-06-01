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

# Generate app key

php artisan key:generate

# Database migration

php artisan migrate:fresh --seed

# Install npm dependencies

Run: npm install & npm run dev

# Storage Link

php artisan storage:link

# Run the project

php artisan serve

# Finished

## Admin Login Credential

<p>Email: admin@gmail.com</p>
<p>Password: 123456</p>
