## Asynchronous I/O Operations

1. Non-Blocking Nature: In Node.js, operations like reading from a file,
querying a database, or making an HTTP request are typically
I/O-bound and are handled asynchronously. This means the Node.js
event loop can start an I/O operation, and while waiting for the result,
continue to execute other parts of the code or handle new requests.

2. Event-Driven Architecture: When an asynchronous I/O operation is
completed, Node.js uses events or callbacks to signal the completion.
The result of the operation is then processed in a non-blocking way,
ensuring that the server remains responsive to other incoming
requests.

3. Concurrency: This model allows Node.js to handle a large number of
concurrent operations efficiently, as it does not have to create new
threads for each I/O request. The server remains responsive even
under a high load of asynchronous tasks.

## CPU-Intensive Tasks

Blocking Nature: CPU-bound tasks, like complex calculations (e.g.,
recursive Fibonacci, prime number calculation), require significant CPU time and are
processed in the main thread. This type of task blocks the event loop,
preventing Node.js from handling any other task or request until the
computation is complete.

Impact on Performance: When the main thread is busy with a
CPU-heavy task, it can't process new requests, read from a file, or
handle any I/O operations. This leads to a bottleneck, resulting in slow
response times and potentially causing the server to become
unresponsive.

## Child Process
Child processes in Node.js allow you to perform operations in
separate processes, which can be useful for CPU-intensive tasks
or when you need to interact with the system at a lower level
   - For More info read 02_childProcess.md.

1. Exec -> can run any shell command
2. execFile -> run any compiled file
3. spawn -> create a new process and run a different programs 
     c.1 -> stream the output and error stream of that process
     c.2 -> generally used for long lived process
4. fork -> create a new node process and run a different node program
    d.1 -> copy of parent node process
    d.2 -> communication between parent and child process
    d.3 IPC -> inter process communication

link: https://www.freecodecamp.org/news/node-js-child-processes-everything-you-need-to-know-e69498fe970a/

Spawn vs Fork'
Spawn ( email Communication)
Fork ( instant messaging communication)

1. https://www.juannicolas.eu/nodejs-process-nexttick-what-is-and-how-it-works/
2. https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick

## Debounce and Throttling.
1. https://medium.com/@bs903944/debounce-and-throttling-what-they-are-and-when-to-use-them-eadd272fe0be

## To avoid cross-scripting-attacks:
1. https://www.npmjs.com/package/helmet

## Read about SQL Injections:
1. https://portswigger.net/web-security/sql-injection

## Important.
1. https://nodejs.org/en/guides/dont-block-the-event-loop/
2. https://libuv.org/   -> Scaler test
3. https://docs.libuv.org/en/v1.x/design.html