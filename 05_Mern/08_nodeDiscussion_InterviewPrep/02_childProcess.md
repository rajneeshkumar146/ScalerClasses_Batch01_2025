## Child Process
1. Child processes in Node.js allow you to perform operations in
separate processes, which can be useful for CPU-intensive tasks
or when you need to interact with the system at a lower level.

# With a child process , we can do 4 type of things
a) Exec -> can run any shell command

it runs a command for you and then gives you the entire story (output) at once, after the task is done
When the exec method is called, it spawns a new shell and runs the command within that shell.
The exec method is typically used for short-lived processes that require a shell environment,

- The ls -lh command lists files in the current directory (ls) in a long format (-l) with human-readable file sizes (-h).
    We should see list of contents in the directory with file permissions, owner, links to the file, memory, timestamp etc
- err: If the command fails for any reason (for example, if the command is not found), the err argument will contain an error object with details about the failure.
- stdout: Standard output from the command. In this case, it will be the output of the ls -lh command.
- stderr: Standard error output from the command. If there are any error messages produced by the command, they will be in stderr