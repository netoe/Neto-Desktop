#!/bin/bash


# gitrsm = Git Recursive SubModules.
alias gitrsm-simplified-status='git submodule status --recursive'
alias gitrsm-detailed-status='git submodule foreach --recursive git status'
alias gitrsm-local-status='git submodule foreach --recursive "git status | grep --color=always \"(new commits\|modified content)\" || true && echo"'
alias gitrsm-remote-status='git submodule foreach --recursive "git status | grep --color=always \"ahead.*commits*.\" || true && echo"'
alias gitrsm-status='git submodule foreach --recursive "git status | grep --color=always \"ahead.*commits*.\|(new commits\|modified content)\" || true && echo"'

alias gitrsm-pull='git submodule foreach --recursive git pull origin master'
alias gitrsm-raw-push='git submodule foreach --recursive git push origin master'
cmdGitPushIfNeeded='git status | grep ahead && echo Pushing from ${toplevel}/${name} && git push origin master || true'
alias gitrsm-push-works="git submodule foreach --recursive '${cmdGitPushIfNeeded}'"
alias gitrsm-checkout-master='git submodule foreach --recursive git checkout master'
alias gitrsm-fetch='git submodule foreach --recursive git fetch origin master'
alias gitrsm-merge-origin-master='git submodule foreach --recursive git merge origin/master'
