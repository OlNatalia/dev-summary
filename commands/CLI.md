# CLI

## Command Line Interface (Command Line Input)

(for Linux)

## Basic Keyboard Shortcuts 

command             | description
--------------------|----------
**Ctrl + Alt + T**  | Open Terminal
**Ctrl + C**        | Interrupt (kill) the current process running
**Ctrl + L**        | Clean terminal
**Ctrl + Shift + C** | Copy
**Ctrl + Shift + V** | Paste
**q**                | Quiet  back to the command prompt

---

## Directory Operations

command             | description
--------------------|----------
**pwd**             | Show current directory
**ls**              | List files
**mkdir** folderName  | Make directory
**rmdir** folderName  | Remove directory
**cd** folderName   | Change directory
**cd ..**           | Go up one level directory
**tree**            | Lists all files or directories graphically in the current directory

---

## File Operations

command             | description
--------------------|----------
**touch** fileName      | Create file
**cp** file1 file2      | Copy file1 to file2
**mv** file1 file2      | Move file1 to file2
**rm** fileName         | Delete file
**rm -ri** folder        | Delete folder with each file in (always use **-i** for more safety)
**cat** file1 file2     | Concat​ enate files and output
**file** file1          | Get type of file1
**less** file1          | View and paginate file1 (in the command prompt)
**more** file1          | View and paginate file1
**head** file1          | Show first 10 lines of file1
**tail** file1          | Show last 10 lines of file1
**echo**                | Output status text to the screen or a file
**nano** fileName       | simple terminal-based text editor
**code** fileName       | Open file1 in editor e.g. Visual Code Studio
**code .**              | Open current directory
**code ..**             | Open parent directory


---

## Bash Commands

command             | description
--------------------|----------
**uname -a**        | Show system and kernel
**mount**           | Show mounted filesy​ stems
**date**            | Show system date
**uptime**          | Show uptime
**whoami**          | Show your username
**man command**     | Show manual for command

---

### Examples

#### echo **>** vs **>>**

**>**   overwrite everything in a file

**>>** append something to a file

```
echo "new text to overwrite old text" > file.md

echo "some text to append to the file" >> file.md
```

#### tree - show all (also hidden) content graphically
```
tree -aL 2
```
