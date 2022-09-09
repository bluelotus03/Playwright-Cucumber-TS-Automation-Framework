# Environment
env=$1

# Cucumber tag
tag=$2

# Run cucumber tests & on failure, run postcucumber 
yarn run cucumber:$env --profile $tag || yarn run postcucumber