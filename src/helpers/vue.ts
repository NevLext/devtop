import { getFileContent } from '@/helpers/file'

export const getComponentTemplate = (content: string) => {
    const startTag = '<template>'
    const endTag = '</template>'
    const start = content.indexOf(startTag)
    const end = content.indexOf(endTag)
}

export const getComponentScript = (content: string) => {
    const startTag = '<script>'
    const endTag = '</script>'
    const start = content.indexOf(startTag)
    const end = content.indexOf(endTag)
}

export const getComponentMethods = (filePath: string) => {
    const content = getFileContent(filePath)
}

// TODO:
// getComponentTemplate
// getComponentScript
// getComponentStyle
// getScriptTag (start, end, attributes)
// getStyleTag (start, end, attributes)
// getComponentType (OptionsAPI, CompositionAPI, setup)
// getComponentMethods (name, params, body)
// getComponentComputed (name, body)
// getComponentData (name, value)
