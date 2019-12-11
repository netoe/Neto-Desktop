#!/bin/bash

dirTarget="../releases"
TERMINATING_TIME=`date +%Y-%m-%d_%H-%M`
dirTargetLocation="${dirTarget}/releases_${TERMINATING_TIME}"

mkdir -p ${dirTargetLocation}

rsync -avm --filter '- *.ts' --filter '- *.sh' --filter '- tsconfig.json' . ${dirTargetLocation}
