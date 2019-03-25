1. create a script that will support the following input parameters
- tz
- proxy ip
- proxy port

2. the script in step 1 will create a docker with Google Chrome browser installed on it.

3. the docker will run the Google Chrome browser with the following configuration:
- headless mode
- timezone according to the "tz" param value from step 1
- proxy settings according to the proxy ip & proxy port from step1

4. the running headless Google Chrome browser will forward the display (X11 forwarding) to the real machine display for showing the rendered content
the X Server display on the real machine can be achieved by using vcxsrv or xming.

tz = bash timezone value