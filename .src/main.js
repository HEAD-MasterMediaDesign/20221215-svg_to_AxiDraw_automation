import {createServer} from 'http'
import {writeFile, mkdir, readdir} from 'fs/promises'
import {existsSync} from 'fs'
import {exec} from 'child_process'

async function main(
    port = 3000,
    host = '127.0.0.1',
    directoryForSvgToDraw = 'svgToDraw'
) {

    const server = createServer(
         (
            request,
            response
        ) => {


            if (request.method === 'POST') {
                let body = ''

                request.on('data', (data) => {
                    body += data
                })

                request.on('end', async () => {

                    if(! existsSync(directoryForSvgToDraw)) await mkdir(directoryForSvgToDraw)

                    const fileIndex = (await readdir(directoryForSvgToDraw)).length

                    const svgStringContent = JSON.parse(body).svg

                    const svgName = `svgToPrint_${fileIndex}`

                    const svgPath = `${directoryForSvgToDraw}/${svgName}.svg`

                    await writeFile(svgPath, svgStringContent, {
                        encoding: 'utf8',
                    })

                    exec(`python3 -m pipenv run axicli ${svgPath} -vg 3 -o axidraw-last-output.svg`)

                    response.writeHead(200, {'Content-Type': 'text/html'})
                    response.end('post received')
                })
            } else {
                response.writeHead(200, {'Content-Type': 'text/html'})
                response.end(`
            <html  lang="en">
                <body style="font-family: sans-serif">
                    <h1>Error</h1>
                    <p>you need to use POST method</p>
                </body>
            </html>
            `)
            }
        }
    )

    server.listen(port, host)
    console.info(`Listening at http://${host}:${port}`)
}
main()