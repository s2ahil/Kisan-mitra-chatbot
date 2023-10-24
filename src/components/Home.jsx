import React from 'react'
import { Card } from '../components/index'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <div className='bg-purple-500 p-2'>


                <div className='mb-4 text-center text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl  lg:text-6xl dark:text-white flex items-center'>
                    <Link to="/" className='mr-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>
                    </Link>
                    Location based chatbot based on your interest</div>
            </div>
            <div className='flex gap-5 m-10 flex-wrap justify-center'>
                <Card name="Chatbot for all over india" desc="Tells you about schemes available all  over india" image="https://i.ytimg.com/vi/UHCxrI7UExU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB4QnoPVakrf3V-Wsc1kWuYLVosWA" tag1="India" tag2="Farmers scheme" btnLink="/chat/India"></Card>
                <Card name="Chatbot for Madhya Pradesh" desc="Tells you about schemes in madhya pradesh" image="https://bep-wordpress.byjusexamprep.com/wp-content/uploads/2023/08/28170756/external-image-7217.jpg" tag1="MP" tag2="Farmers scheme" btnLink="/chat/madhyaPradesh"></Card>
                <Card name='Chatbot for Gujarat' desc='Tells you about schemes in gujarat' image='https://sheatwork.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-05-at-10.58.48.jpeg' tag1='Gujarat' tag2='Farmers scheme' btnLink='/chat/Gujarat'></Card>
                <Card name='Chatbot for UttarPradesh' desc='Tells you about schemes in UttarPradesh' image='https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/2/2022/04/09140033/Agriculture-Schemes-in-Uttar-Pradesh-01.png' tag1='UP' tag2='Farmers scheme' btnLink='/chat/UttarPradesh'></Card>
                <Card name='Chatbot for Punjab' desc='Tells you about schemes in Punjab' image='https://i0.wp.com/www.governmentschemes.org/wp-content/uploads/2021/08/punjab.jpg?w=613&ssl=1' tag1='Punjab' tag2='Farmers scheme' btnLink='/chat/Punjab'></Card>
                <Card name='Chatbot for Chattisgarh' desc='Tells you about schemes in Chattisgarh' image='https://d3l793awsc655b.cloudfront.net/blog/wp-content/uploads/2023/03/Rajiv-Gandhi-Kisan-Nyay-Yojana-1.jpg' tag1='Chattisgarh' tag2='Farmers scheme' btnLink='/chat/Chattisgarh'></Card>
            
            </div>

        </div>
    )
}

export default Home
