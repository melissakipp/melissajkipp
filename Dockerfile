FROM jekyll/jekyll:builder AS builder
WORKDIR /usr/src/app
COPY Gemfile* /usr/src/app/
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        build-essential \
    && gem install bundler \
    && bundle config set --local deployment 'true' \
    && apt-get remove -y build-essential \
    && apt-get autoremove -y \
    && rm -rf /var/lib/apt/lists/*
COPY . /usr/src/app/
EXPOSE 4000