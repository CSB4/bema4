# frozen_string_literal: true

source "https://rubygems.org"

git_source(:github) {|repo_name| "https://github.com/#{repo_name}" }

gem "github-pages", "~> 214", group: :jekyll_plugins

# The old version was chosen for compatibility with latest version of susy.
# For some reason, the fact that breakpoint depends on `sass ~> 3.3`
# is not a problem... Weird!
gem "sass", "~> 3.4.25"

gem "compass", "~> 1.0.3"

gem "susy", "~> 2.2.14"

gem "breakpoint", "~> 2.7.1"

group :development do
  gem 'reek', '~> 6.0.4', require: false
  gem 'rubocop', '~> 1.14.0', require: false
  gem 'solargraph', '~> 0.40.4', require: false
end
