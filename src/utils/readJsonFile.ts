import fs from 'fs'
import path from 'path'

export function readJsonFile<T>(filePath: string): T {
  const jsonPath = path.join(process.cwd(), filePath)
  const fileContents = fs.readFileSync(jsonPath, 'utf8')
  return JSON.parse(fileContents) as T
}

