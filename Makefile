.PHONY: serve

serve:
	bundle exec jekyll serve

update:
	bundle update --all
	bundle update --bundler --ruby
