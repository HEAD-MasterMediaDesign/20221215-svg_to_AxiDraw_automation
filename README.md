# svg to AxiDraw microservice automation

## install dependencies

## installation

### [optional] Node version

If you have NVM installed, run this command to use the correct Node version

```
nvm use
```

### We use pipenv to manage Python version and packages dependencies

1. If you don't have Pipenv installed, install it.

2. install dependencies
```
python3 -m pipenv install
```

## how to use

```
npm start
```

Send data in JSON format, on ```http://127.0.0.1:3000```, POST method, with this format:

```json
{
  "svg": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 581.88263 830.95042' width='210mm' height='297mm'>{{SVG CONTENT HERE}}</svg>"
}
```

Actually, you need tu put ```width='210mm' height='297mm'``` attributes in svg, it's for AxiDraw paper size.

### sample

For exemple, this commande send a POST request methods to 'http://127.0.0.1:3000', with svg code. If put this code on your terminal, you can draw this sample.
(don't forget to start npm service [see above ```npm start```])

```shell
curl --location \
--request POST 'http://127.0.0.1:3000' \
--header 'Content-Type: application/json' \
--data-raw '{"svg": "<svg xmlns='\''http://www.w3.org/2000/svg'\'' viewBox='\''0 0 581.88263 830.95042'\'' width='\''210mm'\'' height='\''297mm'\''><g><g><g><g><path d='\''m252.51083,360.36437v50.98779h-10.05664v-22.0127h-22.85645v22.0127h-10.05713v-50.98779h10.05713v20.81738h22.85645v-20.81738h10.05664Z'\'' style='\''fill: none; stroke: #1d1d1b;'\''/><path d='\''m268.61386,395.10656c.5625,6.47021,4.92285,9.63477,9.56445,9.63477,3.02441,0,5.97803-1.05469,7.94727-4.36035h9.98633c-2.03906,5.62646-7.5249,11.88525-17.86328,11.88525-12.1665,0-19.26953-9.07227-19.26953-19.97266,0-11.25244,7.80615-19.62158,18.98828-19.62158,11.67432,0,18.91895,9.07227,18.56738,22.43457h-27.9209Zm.14062-6.68115h17.93359c-.21094-6.3999-4.71191-8.65039-8.79102-8.65039-3.65674,0-8.36865,2.25049-9.14258,8.65039Z'\'' style='\''fill: none; stroke: #1d1d1b;'\''/><path d='\''m312.49667,411.35217h-9.70508v-50.98779h9.70508v50.98779Z'\'' style='\''fill: none; stroke: #1d1d1b;'\''/><path d='\''m330.92148,411.35217h-9.70508v-50.98779h9.70508v50.98779Z'\'' style='\''fill: none; stroke: #1d1d1b;'\''/><path d='\''m337.10995,392.50451c0-13.29199,9.42383-19.83252,18.98828-19.83252s18.98828,6.54053,18.98828,19.83252c0,13.22168-9.42383,19.76172-18.98828,19.76172s-18.98828-6.54004-18.98828-19.76172Zm9.8457,0c0,7.94678,3.79785,12.1665,9.14258,12.1665s9.14258-4.21973,9.14258-12.1665c0-7.94727-3.79785-12.2373-9.14258-12.2373s-9.14258,4.29004-9.14258,12.2373Z'\'' style='\''fill: none; stroke: #1d1d1b;'\''/></g><g><circle cx='\''223.94131'\'' cy='\''279.84826'\'' r='\''42'\'' style='\''fill: none; stroke: #1d1d1b; stroke-miterlimit: 10;'\''/><circle cx='\''357.94131'\'' cy='\''279.84826'\'' r='\''42'\'' style='\''fill: none; stroke: #1d1d1b; stroke-miterlimit: 10;'\''/></g></g><rect x='\''.5'\'' y='\''.5'\'' width='\''580.88263'\'' height='\''829.95042'\'' style='\''fill: none; stroke: #1d1d1b;'\''/></g></g></svg>"}'
```

## whats is generated?

```./axidraw-last-output.svg``` is file to show preview of how the SVG document will plot.

## referencies

https://axidraw.com/doc/cli_api/