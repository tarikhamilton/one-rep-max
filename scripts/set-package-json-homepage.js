import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

try {
  const filepath = path.resolve(path.dirname(__dirname), 'package.json')
  const packageJson = fs.readFileSync(filepath, 'utf8')

  fs.writeFileSync(
    filepath,
    packageJson.replace(
      /"homepage": "([\w-:/?!%$.]+)",/,
      `"homepage": "${process.env.CRA_HOMEPAGE}",`
    )
  )
} catch (exception) {
  console.error(exception)
}
