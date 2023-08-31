import {
    getDirectoryChildren,
    getDirectoryContent,
    getDirectoryItemParent,
    getFileLineCount
} from '@/helpers/file'

describe('Files helper', () => {
    test('getDirectoryContent()', () => {
        const expected = JSON.stringify([
            { isDirectory: false, path: 'tests/a/b.txt' },
            { isDirectory: false, path: 'tests/a/c.txt' },
            { isDirectory: true, path: 'tests/a/d' },
            { isDirectory: false, path: 'tests/a/d/e.txt' },
            { isDirectory: true, path: 'tests/a/d/f' },
            { isDirectory: false, path: 'tests/a/d/f/g.txt' },
            { isDirectory: false, path: 'tests/a/test.vue' }
        ])
        const content = JSON.stringify(getDirectoryContent('./tests/a'))
        expect(content).toBe(expected)
    })

    test('getDirectoryItemParent()', () => {
        const expected = 'tests/a'
        const parent = getDirectoryItemParent('tests/a/b.txt')
        expect(parent).toBe(expected)
    })

    test('getDirectoryChildren()', () => {
        const expected = JSON.stringify([
            { isDirectory: false, path: 'tests/a/d/e.txt' },
            { isDirectory: true, path: 'tests/a/d/f' }
        ])
        const children = JSON.stringify(getDirectoryChildren('tests/a/d'))
        expect(children).toBe(expected)
    })

    test('getFileLineCount()', () => {
        const lines = getFileLineCount('tests/a/b.txt')
        expect(lines).toBe(8)
    })
})
