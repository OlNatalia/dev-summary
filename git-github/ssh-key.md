# SSH key for Git & GitHub   :key:

## :running: step by step setup


1. Checking for existing SSH keys

```
    ls -al ~/.ssh
```

2. Generating a new SSH key

```
    ssh-keygen -t rsa -C your-email@mail.com
```

3. Double check if the key was generated

```
    ls -al ~/.ssh
```

4. Go to the .ssh folder and copy the **public key**

```
    cat ~/.ssh/id_rsa.pub

or:
    cd ~/.ssh 	(or cd .ssh/)
```

5. Go to GitHub account and put the copied public key there

Settings → SSH → New SSH    
→ Title: e.g. My SSH Key  
→ Key: paste the copied key here    
→ Add SSH key


6. go back to console and add private key
Adding your private SSH key to the ssh-agent

```
    eval ssh-agent -s
```
(it shows you something like that: … echo Agent 2950;)

```
    ssh-add ~/.ssh/id_rsa
```

give password (that you created at the beginning when generating ssh key)

7. check the authentication:

```
    ssh -T git@github.com
```

or you can test if everything work well by e.g. cloning a repository from GitHub to your local 

8. That’s it  :smile: You have done it.
