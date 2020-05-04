# Tinder Clone - Desktop version

[Build your first Rails app - blog with comments (tutorial)](https://www.youtube.com/watch?v=wbZ6yrVxScM)

create rails application

`rails new tinder-clone --database=postgresql --skip-test --skip-action-cable --skip-turbo-links`

commit inital files

```sh
git add .
git commit -m "initial commit"
```

copy `docker-compose.yml` to root of the project

```sh
cp ../other-project/docker-compose.yml .
# commit - add docker-compose
```

copy database config that is already and change database name for development and test

```sh
cp ../react-rails/config/database.yml config/database.yml
vi config/database.yml
# development db = tinder_clone_development
# test db = tinder_clone_test
# commmit - update database config
```

run docker to start postgresql and redis

```sh
docker-compose up --build
# you only need --build the first you run or when you change the docker-compose file
```

create the database and initial migration

```sh
rails db:create
rails db:migrate
```

start the server. it should run on port 3000

```sh
rails s
# localhost:3000
```

creating root route

1. go to `config/routes.rb`

- add root route `root to: "public#home"`

2. create `public` controller `app/controllers/public_controller.rb` with:

```ruby
class PublicController < ApplicationController
  def home
  end
end
```

3. create views folder for public controller `mkdir app/views/public`
4. create view file for `home` action: `touch app/views/public/home.html.erb` with:

```erb
<h1>test home</home>
```

add bootstrap and jquery

https://www.mashrurhossain.com/blog/rails6bootstrap4

https://dev.to/vvo/a-rails-6-setup-guide-for-2019-and-2020-hf5

```sh
yarn add bootstrap jquery popper.js
```

create Procfile.dev to start rails server and webpack server and run with overmind

```sh
# Procfile.dev

web: rails server
webpacker:  ./bin/webpack-dev-server

# .env
OVERMIND_PROCFILE=Procfile.dev

# in a terminal
overmind start
```

user authentication with devise

- add devise to Gemfile
- install it with `bundle install`
- setup on the project `rails g devise:install`
- add config in environments/development.rb
- add notifications to application.html.erb
- copy devise views `rails g devise:views`
- https://github.com/heartcombo/devise
