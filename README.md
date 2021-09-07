# Welcome to small deno project

You are going to fin a tiny blog here using Mysql and Deno

- To install dependencies run:
  - `deno cache --reload -c tsconfig.json --lock=lock.json --lock-write --unstable deps.ts`
- If you want to start docker database using Mysql, please run:
  - `docker run --name deno-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:5.6`
  - user and password are `root` and `root`

## Database

```
CREATE DATABASE `deno`;
USE `deno`;

DROP TABLE IF EXISTS `posts`;

CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `created_at` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
```

## Run using Denon

- To install denon:
  - `deno install -qAf --unstable https://deno.land/x/denon/denon.ts`
- To start the project:
  - `denon start`

## Code format using:
- `deno fmt`
- `deno lint` (this can be used in CI)

### Deno Version: 1.13.1
