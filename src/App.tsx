import { Header } from "./components/Header";

import styles from "./App.module.css"

import "./globals.css"
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import { PostType } from "./components/Post";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      name: "Aaron Alves",
      role: "Desenvolvedor Full Stack",
      avatarUrl: "https://github.com/naanon.png",
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2024-11-10 20:00:00')
  },
  {
    id: 2,
    author: {
      name: "Laura Beatris",
      role: "Desenvolvedora Full Stack",
      avatarUrl: "https://github.com/LauraBeatris.png",
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2024-11-11 20:00:00')
  }
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}