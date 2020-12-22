import { AES, enc } from 'crypto-js'
import { config } from 'dotenv'

config()

class CryptoService {
	private readonly secret: string = process.env.NEXT_PUBLIC_CRYPTO_SECRET

	encrypt(text: string): string {
		return AES.encrypt(JSON.stringify(text), this.secret).toString()
	}

	decrypt(cipher: string): string {
		const bytes = AES.decrypt(cipher, this.secret)
		return JSON.parse(bytes.toString(enc.Utf8))
	}
}

export default new CryptoService()
