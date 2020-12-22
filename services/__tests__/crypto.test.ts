import { Crypto } from '..'

test('Should encrypt text successfully', () => {
	const text = 'hello world'
	const cypher = Crypto.encrypt('hello world')
	const decryptedText = Crypto.decrypt(cypher)

	expect(text).not.toMatch(cypher)
	expect(text).toMatch(decryptedText)
})
