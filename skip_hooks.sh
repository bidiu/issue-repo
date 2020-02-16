#!/bin/sh
git rev-parse -q --verify MERGE_HEAD
git_merge_not_in_progress=$?

git rev-parse -q --verify REBASE_HEAD
git_rebase_not_in_progress=$?

# https://gmurphey.github.io/2013/02/02/ignoring-git-hooks-when-rebasing.html#.XjsoMxNKjNJ
branch_name=$(git branch | grep '*' | sed 's/* //')

# later remove this when applying to all branches
# if [ "$branch_name" != 'experimental/lint' -a "$branch_name" != 'feature/publicapi' ]; then
#   echo "Seems that you aren't on branch experimental/lint or feature/publicapi. The pre-commit hooks (such as lint) have been skipped"
#   exit 0
# fi

if [ $git_merge_not_in_progress -eq 1 -a $git_rebase_not_in_progress -eq 1 -a "$branch_name" != '(no branch)' ]; then
  yarn run precommit
else
  echo 'Seems that you are rebasing or merging with merge conflicts. The pre-commit hooks (such as lint) have been skipped for you.'
fi
