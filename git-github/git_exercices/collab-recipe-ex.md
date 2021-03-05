# Collaborative recipe exercise

This exercise is about pushing to the same branch as your collaborator
(and the fun walls you'll run into... resolving merge conflicts)

Setup: Two people, on two computers, side by side.

0. Person A creates a repo on GH (with a readme) and invites Person 1 as a collaborator.

0. On GH, Person A creates a file called recipe.md

0. Both people clone the repo (download the repo locally)

0. Both people work independently on the same file (on the same branch):

  - Person A works on the ingredients
  - Person 1 works on the procedure

At this point you should have different version of the same file on each computer.

0. Person A pushes their changes.

... so far so good...

0. Person 1 pushes their changes.

....

...

Uh-oh. Merge conflict.

How to resolve this merge conflict?? :o

0. Person 1 (since they were the last to try and push) should first `git pull` then resolve changes locally, then try again to `git push`