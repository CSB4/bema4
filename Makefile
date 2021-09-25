.PHONY: serve
serve:
	bundle exec jekyll serve

.PHONY: update
update:
	bundle update --all
	bundle update --bundler --ruby
