export const lowerCaseAllWordsExceptFirstLetters = (string: string) => {
	return string.replace(/\S*/g, function (word) {
		return word.charAt(0) + word.slice(1).toLowerCase()
	})
}

export const capitalizeFirstLetter = (string: string) => {
	return string.charAt(0).toUpperCase() + string.slice(1)
}

export const splitStringInHalf = (string: string) => {
	const pieces = string.split(' ')
	const firstHalfLength = Math.round(pieces.length / 2)

	return pieces.reduce(
		(acc, cur, idx) => {
			if (idx < firstHalfLength) {
				return {
					first: acc.first + (idx != 0 ? ' ' : '') + cur,
					last: acc.last,
				}
			} else {
				return {
					first: acc.first,
					last: acc.last + (idx != firstHalfLength ? ' ' : '') + cur,
				}
			}
		},
		{ first: '', last: '' }
	)
}
