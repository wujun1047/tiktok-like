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
            thumbnail: string
            width: number
            height: number
            size: number
        }
        medium: {
            url: string
            thumbnail: string
            width: number
            height: number
            size: number
        }
        small: {
            url: string
            thumbnail: string
            width: number
            height: number
            size: number
        }
        tiny: {
            url: string
            thumbnail: string
            width: number
            height: number
            size: number
        }
    }
    views: number
    downloads: number
    likes: number
    comments: number
    user_id: number
    user: string
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

    const url = `${baseUrl}?${params}`

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        // 确保返回正确的数据结构
        return data.hits.map((hit: PixabayVideo) => ({
            id: hit.id.toString(),
            title: hit.tags,
            coverUrl: hit.videos.medium.thumbnail,
            videoUrl: hit.videos.medium.url,
            likes: hit.likes.toString(),
            comments: hit.comments.toString()
        }));
    } catch (error) {
        console.error('Pixabay API error:', error);
        throw error;
    }
} 