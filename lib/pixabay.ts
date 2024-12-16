const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY
const PIXABAY_API_URL = 'https://pixabay.com/api/videos'

export interface PixabayVideo {
    id: number
    pageURL: string
    type: string
    tags: string
    duration: number
    picture_id: string
    videos: {
        large: {
            url: string
            width: number
            height: number
        }
        medium: {
            url: string
            width: number
            height: number
        }
        small: {
            url: string
            width: number
            height: number
        }
    }
    views: number
    downloads: number
    likes: number
    comments: number
    user_id: number
    user: string
    userImageURL: string
}

export interface PixabayResponse {
    total: number
    totalHits: number
    hits: PixabayVideo[]
}

export async function searchVideos(query: string = '', page: number = 1) {
    try {
        const response = await fetch(
            `${PIXABAY_API_URL}/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(
                query
            )}&page=${page}&per_page=20`
        )

        if (!response.ok) {
            throw new Error('Failed to fetch videos')
        }

        const data: PixabayResponse = await response.json()

        return data.hits.map(video => {
            // 使用 small 视频和对应的缩略图
            const videoData = video.videos.small

            return {
                id: video.id,
                title: video.tags.split(',')[0],
                videoUrl: videoData.url,
                coverUrl: videoData.thumbnail, // 使用对应的缩略图
                likes: formatNumber(video.likes),
                comments: formatNumber(video.comments)
            }
        })
    } catch (error) {
        console.error('Error fetching videos:', error)
        return []
    }
}

function formatNumber(num: number): string {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M'
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k'
    }
    return num.toString()
} 