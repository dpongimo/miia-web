/**
 * Conserve aspect ratio of the original region. Useful when shrinking/enlarging
 * images to fit into a certain area.
 *
 * @param {Number} srcWidth width of source image
 * @param {Number} srcHeight height of source image
 * @param {Number} maxWidth maximum available width
 * @param {Number} maxHeight maximum available height
 * @return {Object} { width, height }
 */
export function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
	const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

	return { width: srcWidth * ratio, height: srcHeight * ratio };
}

export function timeout(duration, context = this) {
	return new Promise(function (resolve) {
		setTimeout(resolve.bind(null, context), duration);
	});
}
