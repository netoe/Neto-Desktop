#!/bin/bash

# Prepare the files to be deployed, for the embedded and standalone applications.

TERMINATING_TIME=`date +%Y-%m-%dT%H_%M_%S`;
DIR_BUILDS="builds/Builds_${TERMINATING_TIME}"

mkdir -p $DIR_BUILDS
DIR_DIST="dist"

mkdir ${DIR_BUILDS}/Text-Tailor
cp ${DIR_DIST}/infraTextTailor.bundle.js ${DIR_BUILDS}/Text-Tailor

tree -h ${DIR_BUILDS}
