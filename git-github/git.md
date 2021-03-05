# Git & GitHub

## GitHub

GitHub is home to over 36 million developers working together to host and review code, manage projects, and build software together.

## Git

### Distributed Version Control System (DVCS)

Git is an example of DVCS, commonly used for open source and commercial software development that:

- allow full access to every file, branch, and iteration of a project .
- allows every user access to a full and self-contained history of all changes.

Git lets developers see the entire timeline of their changes. 

Collaboration can happen any time while maintaining source code integrity. -Businesses using Git can break down communication barriers between teams.


## Basic Git commends

```
git init
git status
git add
git commit  -m <message>

# rename last commit (before pushing)
git commit --amend
# to save it: ctrl + x -> y -> enter

# check branch
git branch

# add new branch
git branch <new branch name>
git checkout <existing branch name>
git checkout -b <new branch name>

# merge branch to master
# possibly have to solve merge conflicts
git merge 

# rename branch
git branch -m old-name new-name

# delete branch
git branch -d branch-name

# GitHub
git remote -v
git remote --set-url

# rename remote url
git remote set-url origin git@github.com:username/repo
or 
git remote set-url origin --push https://github.com/<your-username>/<reponame>.git

# clone repo from GitHub
git clone

# push repo to GutHub
git push

# pull repo from GutHub
git pull
git fetch

```


## Add shortcut

```
# shortcut for git log

code ~/.gitconfig

[alias]
    lg = log --oneline --decorate --graph
    lga = log --oneline --decorate --graph --all

```

## Config

```
# set user data
# global
git config --global user.name "Your Name"
git config --global user.email "valid@email.com"

# local
git config user.name "Your Name"
git config user.email "valid@email.com"


# read user data
# global
git config --global user.name
git config --global user.email

or 
git config --global --list

# local
git config user.name 
git config user.email


```

## Git Config

```
[user]
	email = seb@saunier.me
	name = Sébastien Saunier
	signingkey = 85A782408741D118

[color]
  branch = auto
  diff = auto
  interactive = auto
  status = auto
  ui = auto

[color "branch"]
  current = green
  remote = yellow

[core]
  pager = less -FRSX
	editor = vim

[alias]
  co = checkout
  st = status -sb
  br = branch
  ci = commit
  fo = fetch origin
  d = !git --no-pager diff
  dt  = difftool
  stat = !git --no-pager diff --stat

```
