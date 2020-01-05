#!/bin/bash


# gitrsm = Git Recursive SubModules.
alias gitrsm-status='git submodule status --recursive'
alias gitrsm-remote-status='git submodule foreach --recursive "git status | grep --color=always \"ahead.*commits*.\" || true && echo"'
alias gitrsm-detailed-status='git submodule foreach --recursive git status'

alias gitrsm-push='git submodule foreach --recursive git push origin master'
alias gitrsm-pull='git submodule foreach --recursive git pull origin master'
alias gitrsm-checkout-master='git submodule foreach --recursive git checkout master'
alias gitrsm-fetch='git submodule foreach --recursive git fetch origin master'
alias gitrsm-merge-origin-master='git submodule foreach --recursive git merge origin/master'
