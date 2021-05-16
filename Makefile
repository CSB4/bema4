.PHONY: serve

serve:
	bundle exec jekyll serve

update:
	bundle update --bundler
	bundle update --all
