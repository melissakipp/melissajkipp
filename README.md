# Simple! Jekyll Development Enviorment

[![Build Status](https://app.travis-ci.com/melissakipp/melissajkipp.svg?branch=main)](https://app.travis-ci.com/melissakipp/melissajkipp)

<br>
Resource: [Bret Fisher](https://github.com/BretFisher/jekyll-serve)

## Steps:

1. Create your project folder.

   ```sh
   $ mkdir <project-name>
   ```

   ```sh
   $ cd <project-name>
   ```

   <br>

2. Run Docker command **NOTE** Be sure to **_ONLY_** run this in an empty folder.

   ```sh
   $ docker run --rm -v $(pwd):/site bretfisher/jekyll new .
   ```

   _ This install basic necessities to start a Jekyll site.
   _ NOTE: `--rm` flag will remove this container once it is done installing the basic Jekyll files.
   <br>

3. Check: make sure you are still in the project folder

   ```sh
   $ pwd
   ```

   <br>

4. Make a docker-compose file

   ```sh
   $ touch docker-compose.yml
   ```

   ```sh
   $ vi docker-compose.yml
   ```

   _ <https://gist.github.com/melissakipp/33347071308a0c6e8daf78e7cf02e1a5>
   _ **NOTE**: I add a container_name to may docker-compose.yml file
   <br>

5. Once the dev container is complete there is a permission issue[^1]

   ```sh
   $ sudo chmod -R 777 .
   ```

   <br>

6. Start containter

   ```sh
   $ docker compose up
   ```

   \* **NOTE**: Adding `-d` flag so that it runs _detach_.
   <br>

7. Daily commands (make sure you are in the project folder):
   ```sh
   $ docker compose stop
   ```
   ```sh
   $ docker compose start
   ```
   ```sh
   $ docker compose restart
   ```
   \* Restart is mostly used when there are changes to the `_config.yml`

### Project Completed

Once the project is completed `$ docker compose down -v --rmi all`

- `-v` flag will remove volumes.
- `--rmi all` flag will remove all images for the project.

---

#### Tip:

`_config.yml`

```
exclude:
  - .sass-cache/
  - .jekyll-cache/
  - gemfiles/
  - Gemfile
  - Gemfile.lock
  - node_modules/
  - vendor/bundle/
  - vendor/cache/
  - vendor/gems/
  - vendor/ruby/
  - docker-compose
```

---

####TODO:

- [x] ~~Review Ruby~~
- [x] ~~Learn about Jekyll development~~
- [ ] Experiment with testing frameworks
- [ ] Learn CI/CD processes

[^1]: ISSUE: Permissions are not correct for initial container build - I am not sure how to set permission without a Dockerfile.
