# Development environment setup

Make sure you have [Node](https://nodejs.org/en/) installed and npm works

```
npm
```

## Install pnpm and dotenv-cli

Check if you already have them

```
pnpm -v
```

```
dotenv
```

Install pnpm using npm

```
npm i -g pnpm
```

Install dotenv-cli using npm

```
npm i -g dotenv-cli
```

## Install project dependencies

Go into the project root and run

```
pnpm i
```

## Development and test database setup

### Installing Postgres

Check if you have a [Postgres](https://www.postgresql.org/) database already
running

```
sudo systemctl status postgresql
```

If you get some output with `Active: active(exited)`, you can skip over to
setting it up.

On debian-based distros this installs the database service

```
sudo apt-get -y install postgresql
```

[Here are some more installation instructions for other platforms.](https://www.postgresql.org/download/)

### Setting up the database

After installing the service, access it with

```
sudo -u postgres psql
```

Update the password to something you'll remember for at least 4 minutes

```
ALTER ROLE postgres WITH PASSWORD '<database_password>';
```

Exit the database with

```
\q
```

## .env setup

This project uses environment variables for config, mainly the database
connection. These variables are stored in files named `.env.<environment>`. For
example, in development the project reads the variables from `.env.development`.

Here are the development and test .env setups, you need to fill in the values
yourself. Use the database_password from the previous section. The database name
can be anything you want.

.env.development:

```
DATABASE_URL="postgresql://postgres:<database_password>@localhost:5432/<development_database_name>"
```

.env.test:

```
DATABASE_URL="postgresql://postgres:<database_password>@localhost:5432/<test_database_name>"
```

## Start the development environment

Start developing with

```
pnpm run dev
```

And open the program at http://localhost:3000
