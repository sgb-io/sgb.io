const withImages = require('next-images')

module.exports = withImages({
    async exportPathMap(defaultPathMap) {
        return {
            '/': { page: '/' },
        }
    },
})
