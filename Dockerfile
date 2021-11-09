FROM jekyll/jekyll:builder AS builder
WORKDIR /usr/src/app
COPY Gemfile* /usr/src/app/
RUN bundle install
COPY . /usr/src/app/
EXPOSE 4000
RUN jekyll build