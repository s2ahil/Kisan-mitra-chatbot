import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner';
import { Link, useParams } from "react-router-dom"
import FormatApiResponse from './FormatApiResponse';


const Chat = () => {
    const [userInput, setUserInput] = useState('');
    const [chat, setChat] = useState([]);
    const [hindiapiResponse, setApiResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [initialPrompt, sendInitialPrompt] = useState('');

    const { routeParam } = useParams();

    console.log("api response" + hindiapiResponse);


    const addMessage = (message, isUser) => {
        setChat((prevChat) => [...prevChat, { message, isUser }]);
    };

    console.log("route param" + routeParam)


    const sendRequestToAPI = async (userInput) => {
        console.log("aya ki nhi", userInput)
        if (userInput) {
            addMessage(userInput, true);
            setLoading(true);

            try {
                const response = await axios.post('https://chatbot-nit.onrender.com/json', {
                    request_data: userInput
                });

                console.log("response", response.data);

                if (response.status === 200) {
                    setApiResponse(response.data.hindi_translation);
                    addMessage(response.data.generated_text, false);
                } else {
                    console.error('API request failed');
                }
            } catch (error) {
                console.error('Error sending API request', error);
            } finally {
                setLoading(false);
            }

            setUserInput('');
        }
    };

    useEffect(() => {

        function SettingInput(initialUserInput) {
            setUserInput(initialUserInput);
            sendRequestToAPI(initialUserInput);
        }

        // When the component loads, send an initial prompt based on the routeParam
        if (routeParam === 'madhyaPradesh') {
            const initialUserInput = 'Write a notification for a new scheme for Indian farmers in Madhya Pradesh.' +
                '**Title:** New scheme for farmers in Madhya Pradesh' +
                '**Body:**' +
                'The Government of Madhya Pradesh has released a new scheme for farmers called the [scheme name]. This scheme provides [benefits of the scheme].' +
                'To learn more about the scheme and to apply, please visit [website address].';


            SettingInput(initialUserInput)

        } else if (routeParam === 'India') {
            const initialUserInput = 'Write a notification for a new scheme for Indian farmers.' +

                '** Title:** New scheme for Indian farmers' +

                '** Body:**' +

                ' The Government of India has released a new scheme for farmers called the[schemename].This scheme provides[benefits of the scheme].' +

                'To learn more about the scheme and to apply, please visit[website address].'
                ;
            SettingInput(initialUserInput)

        } else if (routeParam === 'Punjab') {
            const initialUserInput = 'Write a notification for a new scheme for Indian farmers in Punjab.'

                + '**Title:** New scheme for farmers in Punjab'

                + ' **Body:**'

                + 'The Government of Punjab has released a new scheme for farmers called the [scheme name]. This scheme provides [benefits of the scheme].'

                + 'To learn more about the scheme and to apply, please visit [website address].'
            SettingInput(initialUserInput)
        } else if (routeParam === 'UttarPradesh') {
            const initialUserInput = 'Write a notification for a new scheme for Indian farmers in Uttar Pradesh.' +

                '**Title:** New scheme for farmers in Uttar Pradesh' +

                '**Body:**' +

                'The Government of Uttar Pradesh has released a new scheme for farmers called the [scheme name]. This scheme provides [benefits of the scheme].'

                + 'To learn more about the scheme and to apply, please visit [website address].'

            SettingInput(initialUserInput)

        } else if (routeParam === 'Gujarat') {
            const initialUserInput = 'Write a notification for a new scheme for Indian farmers in Gujarat.' +

                '**Title:** New scheme for farmers in Gujarat' +

                '**Body:**' +

                'The Government of Gujarat has released a new scheme for farmers called the [scheme name]. This scheme provides [benefits of the scheme].' +

                'To learn more about the scheme and to apply, please visit [website address].'
            SettingInput(initialUserInput)
        }




    }, [routeParam]);

    return (
        <>
            <div className="flex items-center p-4 bg-purple-500">
                            <div className="flex-shrink-0 hover:bg-green-500 items-center">
                    <Link to="/home">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>
                    </Link>
                </div>
                <h1 className="flex-grow mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 text-center md:text-5xl lg:text-6xl dark:text-white">Kisan Mitra chatbot</h1>
            </div>



            <div className="flex  flex-col bg-gray-100 m-2">
                <div className="space-y-4">
                    {chat.map((message, index) => (
                        <div
                            key={index}
                            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`${message.isUser ? 'bg-blue-500 text-white font-medium m-2' : 'bg-[#202C33] text-white  font-medium m-2'
                                    } p-3 rounded-lg max-w-3/4`}
                            >
                                {message.isUser ? (
                                    message.message
                                ) : (
                                    <FormatApiResponse response={message.message} hindiapiResponse={hindiapiResponse} />
                                )}
                            </div>
                        </div>
                    ))}

                    {loading && (
                        <div className="flex justify-start">
                            <RotatingLines
                                strokeColor="grey"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width={30}
                                visible={true}
                            />
                        </div>
                    )}
                </div>


                <div className="flex items-center p-4 ">

                    <textarea
                        type="text"
                        placeholder="Type your message..."
                        className=" flex-1 p-5 m-10  bg-[#202C33] text-white focus:outline  font-medium rounded-lg"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') sendRequestToAPI(userInput);
                        }}
                    />


                    <button
                        className="p-10 bg-blue-500  text-white px-4 py-2 rounded-full ml-3 hover:bg-blue-600 w-20 h-20"
                        onClick={() => sendRequestToAPI(userInput)}
                    >
                        Send
                    </button>
                </div>
            </div>
        </>
    );
};

export default Chat;
