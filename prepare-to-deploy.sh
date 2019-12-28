#!/bin/bash

# Prepare the files to be deployed, for the embedded and standalone applications.

TERMINATING_TIME=`date +%Y-%m-%dT%H_%M_%S`;
DIR_BUILDS="builds/Builds_${TERMINATING_TIME}"

DIR_DIST="dist"
ls -al ${DIR_DIST} && ls -al -h ${DIR_DIST}
md5sum ${DIR_DIST}/vendors.chunk.js ${DIR_DIST}/infraTextTailor.bundle.js

set -o xtrace
mkdir -p $DIR_BUILDS
mkdir ${DIR_BUILDS}/Text-Tailor
cp ${DIR_DIST}/vendors.chunk.js ${DIR_BUILDS}/Text-Tailor
cp ${DIR_DIST}/infraTextTailor.bundle.js ${DIR_BUILDS}/Text-Tailor

tree -h ${DIR_BUILDS}
