
<h1 align="center">Api Ipda Ma Vg</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/LeoScripts/api-ipda-ma-vg?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/LeoScripts/api-ipda-ma-vg?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/LeoScripts/api-ipda-ma-vg?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/LeoScripts/api-ipda-ma-vg?color=56BEB8">

</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  Api Ipda Ma Vg 🚀 Under construction...  🚧
</h4> 

<hr> -->

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/LeoScripts" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

This project is a very simple api to start or with the necessary to store data in the DB for a later verification

## :sparkles: Features ##

:heavy_check_mark: Feature 1 receive data from the front;\
:heavy_check_mark: Feature 2 validate the sender;\
:heavy_check_mark: Feature 3 if it is the authorized one, it saves in the bank, if it is not, it returns a 401;

## :rocket: Technologies ##

The following tools were used in this project:

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [Sequelize ORM](https://sequelize.org/)
- [Mysql](https://www.mysql.com/)
- [Adminer](https://kinsta.com/pt/blog/adminer/)


## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com), [Node](https://nodejs.org/en/), [Docker](https://www.docker.com/) and [Docker-compose](https://docs.docker.com/compose/) installed.

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/LeoScripts/api-ipda-ma-vg

# Access
$ cd api-ipda-ma-vg

# Install dependencies
$ npm i

# Install images  
$ sudo docker pull mysql
$ sudo docker pull adminer

# execute images
$ sudo docker-compose up -d

# Run the project in development
$ npm run dev

# Run the project in production
$ npm start

# The server will initialize in the <http://localhost:3000>
```

## :memo: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.


Made by <a href="https://github.com/LeoScripts" target="_blank">Leandro Cavalcante</a>

&#xa0;

<a href="#top">Back to top</a>
