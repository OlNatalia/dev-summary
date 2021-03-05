# Going back in time exercise

0. Check that your `git log --oneline --decorate --graph` has at least 2 commits (just for this one branch).

0. Check that the HEAD is currently at the most recent commit.

E.g.
```
* 1234567 (HEAD) Add a thing
* 0123456 First commit
```

We want to "take a look" (checkout) at the state of the files as we had them in the "First commit".

To do this we can use `git checkout <SHA>`

So for this example, `git checkout 0123456`

**Note:** Using `checkout` with a SHA puts you in detached HEAD state.

Any work that you do from here on (any new commits you make) will not be saved to any branch (you are detached from branches).

To see that you are in 'detached HEAD state' try `git status`.

If you make new commits from 'detached HEAD state', you are working on a *phantom branch*.

If you want to save any work from here on, you need to checkout a **new branch** and commit to it.

----

What happens if I don't create a *new* branch?
i.e. What happens if I just want to checkout an *existing* branch instead?

From a detached HEAD state, try `git checkout master` and see what the instructions say :)