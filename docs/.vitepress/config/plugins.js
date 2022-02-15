import path from 'path'
import fs from 'fs'
import MarkdownIt from 'markdown-it'
import mdContainer from 'markdown-it-container'
import { highlight } from '../utils/highlight'
import { docRoot } from '../utils/paths'

const localMd = MarkdownIt()
const scriptSetupRE = /<\s*script[^>]*\bsetup\b[^>]*/


export const mdPlugin = (md) => {
    md.use(mdContainer, 'demo', {
        validate(params) {
            return !!params.trim().match(/^demo\s*(.*)$/)
        },

        render(tokens, idx) {
            const data = md.__data
            const hoistedTags = data.hoistedTags || (data.hoistedTags = [])

            const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
            if (tokens[idx].nesting === 1 /* means the tag is opening */) {
                const description = m && m.length > 1 ? m[1] : ''
                const sourceFileToken = tokens[idx + 2]
                let source = ''
                let sourceFile = ''
                if (sourceFileToken.children) {
                    sourceFile = sourceFileToken.children[0].content
                }

                if (sourceFileToken.type === 'inline') {
                    source = fs.readFileSync(
                        path.resolve(docRoot, 'examples', `${sourceFile}.vue`),
                        'utf-8'
                    )
                    const existingScriptIndex = hoistedTags.findIndex((tag) =>
                        scriptSetupRE.test(tag)
                    )
                    if (existingScriptIndex === -1) {
                        hoistedTags.push(`
                        <script setup>
                        const demos = import.meta.globEager('../../examples/${
                        sourceFile.split('/')[0]
                        }/*.vue')
                        </script>`)
                    }
                }
                if (!source) throw new Error(`Incorrect source file: ${sourceFile}`)

                return `<Demo :demos="demos" source="${encodeURIComponent(
                highlight(source, 'vue')
                )}" path="${sourceFile}" raw-source="${encodeURIComponent(
                source
                )}" description="${encodeURIComponent(localMd.render(description))}">`
            } else {
                return '</Demo>'
            }
        }
    })
}
