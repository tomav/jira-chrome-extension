all: tests build package

dep:
	npm i -g mocha browserify
	sudo gem install extensionator

tests:
	mocha test/

build:
	browserify src/index.js -o build/bundle.js

package:
	extensionator -d build -i jira-remaining-to-hours.pem -o jira-remaining-to-hours.crx
