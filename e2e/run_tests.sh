# Cucumber tag
tag=$1

# Run cucumber tests & on failure, run postcucumber 
yarn run cucumber --profile $tag || yarn run postcucumber