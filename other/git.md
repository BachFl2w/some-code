### cache
```
$ git config credential.helper cache
$ git push http://example.com/repo.git
Username: <type your username>
Password: <type your password>
```
### update fork
```
$ git fetch upstream
$ git checkout master
$ git rebase upstream/master
$ git push -f origin master
```
### remove commit
```
git rebase -i HEAD~n // where n is the number of last commits you want to include in interactive rebase.
// Replace pick with drop for commits you want to discard.
// Save and exit.
git push --force
```
### push commit to another branch after pushed !
```
git checkout -b test
git reset previous_commit || git reset HEAD~n
git add -A
git stash
=>>> checkout to branch need to push
git stash pop
git add -A
git commit -m "..."
git push origin HEAD -f
```
### undo git commit ammend
```terminal
# Move the current head so that it's pointing at the old commit
# Leave the index intact for redoing the commit.
# HEAD@{1} gives you "the commit that HEAD pointed at before
# it was moved to where it currently points at". Note that this is
# different from HEAD~1, which gives you "the commit that is the
# parent node of the commit that HEAD is currently pointing to."
$ git reset --soft HEAD@{1}

# commit the current tree using the commit details of the previous
# HEAD commit. (Note that HEAD@{1} is pointing somewhere different from the
# previous command. It's now pointing at the erroneously amended commit.)
$ git commit -C HEAD@{1}
```
### remove untracked files
- If you want to see which files will be deleted you can use the `-n` option before you run the actual command
```
git clean -n
```
- Then when you are comfortable (because it will delete the files for real!) use the `-f` option
```
git clean -f
```
- To remove directories, run `git clean -f -d` or `git clean -fd`
- To remove ignored files, run `git clean -f -X` or `git clean -fX`
- To remove ignored and non-ignored files, run `git clean -f -x` or `git clean -fx`
