import { copyFileSync } from 'fs'
import { join } from 'path'

const srcDir = 'C:\\Users\\shinaj\\.gemini\\antigravity-ide\\brain\\86dc20ac-0e02-49cd-b4f5-9d42808458d7'
const destDir = 'C:\\Users\\shinaj\\Desktop\\Self_Report\\public'

const files = [
  ['ccc_compliance_graphic_1784447341872.png', 'ccc_compliance.png'],
  ['ad_automation_flow_1784447348042.png', 'ad_automation.png'],
  ['nura_ai_illustration_1784447354604.png', 'nura_ai.png'],
]

for (const [src, dest] of files) {
  copyFileSync(join(srcDir, src), join(destDir, dest))
  console.log(`Copied ${src} → ${dest}`)
}
console.log('All images copied successfully.')
