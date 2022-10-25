import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './styles.module.scss'
import { UiText, BEM } from '@nevermined-io/styles'
import { convertLinkToGift } from '../../utils'

const b = BEM('blog', styles)

interface Post {
    title: string;
    content: string;
    pubDate: string;
}

const Blog = () => {
    const [posts, setPost] = useState<Post[]>([])

    const fetchPosts = async () => {
        const result = await axios.get<{items: Post[]}>('https://api.rss2json.com/v1/api.json', {
            params: {
                'rss_url': 'https://medium.com/feed/nevermined-io'
            }
        })

        const items = result.data.items.map(item => {
            const itemReplaced = {...item}
            itemReplaced.content = convertLinkToGift(item.content)
            return itemReplaced
        })

        setPost([...items])
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div>
            {posts.map(p => 
                <div key={p.title} className={b('content')}>
                    <UiText type='h1' className={b('title')}>{p.title}</UiText>
                    <UiText dangerouslySetInnerHTML={{__html: p.content}} className={b('content')}/>
                    <UiText type='small' className={b('pub-data')}><strong>Published:</strong> {p.pubDate}</UiText>   
                </div>    
            )}
        </div>
    )
}

export default Blog
