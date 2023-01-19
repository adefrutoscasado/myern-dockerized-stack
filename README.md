<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h2>MyERN Dockerized Stack</h2>
  <br />

[![Mysql][Mysql]][Mysql-url]
[![Express][Express]][Express-url]
[![React][React.js]][React-url]
[![Nodejs][Node.js]][Node-url]
[![Docker][Docker]][Docker-url]

  <p>
    <br />
    <a href="https://github.com/adefrutoscasado/myern-dockerized-stack/issues">Report Bug</a>
    ·
    <a href="https://github.com/adefrutoscasado/myern-dockerized-stack/issues">Request Feature</a>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <!-- <li><a href="#license">License</a></li> -->
    <li><a href="#contact">Contact</a></li>
    <!-- <li><a href="#acknowledgments">Acknowledgments</a></li> -->
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project implements the main features to deploy a MyERN stack application.

- No `create-react-app` clones. A minimal webpack config is provided. No hacks to configure!
- Node modules managed entirely by docker. Package version integrity across developers and environments. Including IDE access to node modules.
- Docker versioning for easy deploys and rollbacks.
- Database migrations.


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

You must have following software installed in your System:
- `docker`
- `docker-compose`



### Installation

1. Clone the repo:
    ```sh
    git clone https://github.com/adefrutoscasado/myern-dockerized-stack.git
    ```
2. Start the container:
    ```sh
    cd myern-dockerized-stack/docker
    docker-compose -f docker-compose-dev.yml up
    ```
    Or, to keep logs separate, start each service individually in different terminals:

    ```sh
    cd myern-dockerized-stack/docker
    docker-compose -f docker-compose-dev.yml up database
    docker-compose -f docker-compose-dev.yml up backend
    docker-compose -f docker-compose-dev.yml up frontend
    ```
    Frontend will be served at [localhost:3010](localhost:3010)


<!-- USAGE EXAMPLES -->
## Usage (under construction)

- Installing a package:

In order to share a similar environment across team, packages are managed inside the container. This is important, since different machines, node versions or packages can behave differently. Never execute `npm install package` by yourself, since it would be running under your local node installation. Instead, add the package to the `package.json` and then run:

```bash
docker-compose -f docker-compose-dev.yml build backend
# or
docker-compose -f docker-compose-dev.yml build frontend
```

After this, starting the containuer will dump the updated node modules to your local machine, so your IDE will be able to access it.

- Resetting database:

To reset the database completely use following command (**data will be lost**):
```
docker-compose -f docker-compose-dev.yml down -v --remove-orphans
```


<!-- ROADMAP -->
## Roadmap

- &#x2610; Backend
  - &#x2611; Hot reload at development
  - &#x2611; Package version integrity
  - &#x2611; Database migrations
  - &#x2611; Production docker compose
  - &#x2610; Create upload file endpoint
- &#x2610; Frontend
  - &#x2611; Hot reload at development
  - &#x2611; Package version integrity
  - &#x2611; Production docker compose
- &#x2610; Docker registry instructions (Docker versioning)
- &#x2610; Usage instructions

See the [open issues](https://github.com/adefrutoscasado/myern-dockerized-stack/issues) for a full list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.



<!-- CONTACT -->
## Contact

Project Link: [https://github.com/adefrutoscasado/myern-dockerized-stack](https://github.com/adefrutoscasado/myern-dockerized-stack)



<!-- ACKNOWLEDGMENTS -->
<!-- ## Acknowledgments

* []()
* []()
* []() -->



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
<!-- [contributors-shield]: https://img.shields.io/github/contributors/adefrutoscasado/myern-dockerized-stack.svg?style=for-the-badge
[contributors-url]: https://github.com/adefrutoscasado/myern-dockerized-stack/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/adefrutoscasado/myern-dockerized-stack.svg?style=for-the-badge
[forks-url]: https://github.com/adefrutoscasado/myern-dockerized-stack/network/members

[stars-shield]: https://img.shields.io/github/stars/adefrutoscasado/myern-dockerized-stack.svg?style=for-the-badge
[stars-url]: https://github.com/adefrutoscasado/myern-dockerized-stack/stargazers

[issues-shield]: https://img.shields.io/github/issues/adefrutoscasado/myern-dockerized-stack.svg?style=for-the-badge
[issues-url]: https://github.com/adefrutoscasado/myern-dockerized-stack/issues

[license-shield]: https://img.shields.io/github/license/adefrutoscasado/myern-dockerized-stack.svg?style=for-the-badge
[license-url]: https://github.com/adefrutoscasado/myern-dockerized-stack/blob/master/LICENSE.txt

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

[Node.js]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/

[Mysql]: https://img.shields.io/badge/mysql-00758f.svg?style=for-the-badge&logo=mysql&logoColor=white
[Mysql-url]: https://www.mysql.com/

[Docker]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/

[Express]: https://img.shields.io/badge/express-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express-url]: https://expressjs.com/