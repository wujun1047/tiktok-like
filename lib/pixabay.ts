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

export async function searchVideos(category: string = '') {
    const API_KEY = process.env.PIXABAY_API_KEY
    const baseUrl = 'https://pixabay.com/api/videos/'

    // 根据类别设置搜索关键词
    let q = ''
    switch (category) {
        case '舞蹈':
            q = 'dance'
            break
        case '音乐':
            q = 'music'
            break
        case '游戏':
            q = 'game'
            break
        case '美食':
            q = 'food'
            break
        case '旅行':
            q = 'travel'
            break
        case '动漫':
            q = 'animation'
            break
        case '宠物':
            q = 'pet'
            break
        case '体育':
            q = 'sports'
            break
        default:
            q = ''
    }

    const params = new URLSearchParams({
        key: API_KEY!,
        per_page: '12',
        ...(q && { q }) // 只有当有搜索词时才添加 q 参数
    })

    const response = await fetch(`${baseUrl}?${params}`)
    const data = await response.json()

    return data.hits.map((hit: PixabayVideo) => ({
        id: hit.id,
        title: hit.tags,
        coverUrl: hit.videos.medium.thumbnail,
        videoUrl: hit.videos.medium.url,
        likes: hit.likes,
        comments: hit.comments
    }))
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