#!/bin/bash
echo "Component Name: $1"
if [ -z $1 ]
then
  echo "Please provide a component name"
  exit 1
fi
nx g @nrwl/react:component $1 --project=uswds-cl --export
nx g @nrwl/react:stories --project=uswds-cl --componentPath=$1