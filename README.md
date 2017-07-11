# lara-react

Lara-react is just a way i found to use laravel with react js in a easy way. You are free to use this code in your projects or make it better.

# Setting up

``` git clone https://github.com/namadnuno/lara-react.git ```

``` cd lara-react ```

``` cp .env.example .env ```

``` composer install ```

``` php artisan key:generate ```

``` yarn ```

``` yarn dev ```

That's it!

# Structure

 In \resources\assets\js\ are the code that is compiled with webpack using laravel-mix to the \public\js folder.

 Here you can see:
  - bootstrap.js - where is initialized some dependencies like 'axios';
  - app.js - the core of the application where the application begins;
  - \components\ folder - where the components are located;

