import './App.css';
import portrait from "./louen.jpg";
import {useState} from "react";

function App() {

const multiplyText = (text) => {
    while (text.length < 300000) {
        text += " " + text;
    }
    return text
}

const [inputText, setInputText] = useState(`Have I ever told you
I want you to the bone?
Have I ever called you
When you are all alone?
And if I ever forget
To tell you how I feel
Listen to me now, babe
I want you to the bone
I want you to the bone, ooh, ooh, ooh, ooh
I want you to the bone, oh, oh, oh, oh
Maybe if you can see
What I feel through my bone
Every corner in me
There's your presence that grown
Maybe I nurture it more
By saying how I feel
But I did mean it before
I want you to the bone
I want you to-
Take me home, I'm fallin'
Love me long, I'm rollin'
Losing control, body and soul
Mind too for sure, I'm already yours
Walk you down, I'm all in
Hold you tight, you call and
I'll take control your body and soul
Mind too for sure, I'm already yours
Would that be alright?
Hey, would that be alright?
I want you to the bone, ooh, ooh, ooh, ooh
So bad I can't breathe, oh, oh, oh, oh, ooh
I want you to the bone
Of all the ones that begged to stay
I'm still longing for you
Of all the ones that cried their way
I'm still waiting on you
Maybe we seek for something that
We couldn't ever have
Maybe we choose the only love
We know we won't accept
Or maybe we're taking all the risks
For somethin' that is real
'Cause maybe the greatest love of all
Is who the eyes can't see, yeah
Take me home, I'm fallin'
Love me long, I'm rollin'
Losing control, body and soul
Mind too for sure, I'm already yours
Walk you down, I'm all in
Hold you tight, I call and
I'll take control of your body and soul
Mind too for sure, I'm already yours, oh
Oh, yes
I want you to the bone, yeah
I want you to the bone
I want you to the bone, yeah
I want you to the bone, bone, ooh
I want you to the bone`);
const [text, setText] = useState(multiplyText(inputText));
const [image, setImage] = useState(portrait);

const handleSubmit = () => {
    setText(multiplyText(inputText));
}
const handleTextChange = (inputText) => {
    setInputText(inputText);
}
const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            setImage(e.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    }
}

return (
    <div className="App">

        <div className="content-container flex flex-col lg:flex-row items-center lg:items-start w-full">
            <div className="controls max-w-max min-w-max p-4">
                <div className="shadow rounded-md overflow-hidden">
                    <div className="px-4 py-5 sm:p-6 bg-white sm:space-x-6 lg:space-x-0 space-y-6 sm:space-y-0 lg:space-y-6 flex flex-col sm:flex-row lg:block">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Image
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <label htmlFor="image"
                                           className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                            <span>Upload an image</span>
                                            <input id="image" name="image" type="file" accept="image/png, image/jpeg" className="sr-only"
                                                onChange={e => handleImageChange(e)} />
                                        </label>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        PNG, JPG, or JPEG
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="text" className="block text-sm font-medium text-gray-700">
                                Text
                            </label>
                            <div className="mt-1">
                                <textarea id="text" name="text" rows="7"
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full text-sm border border-gray-300 rounded-md resize-none"
                                    placeholder="Your message or lyrics"
                                    value={inputText}
                                    onChange={e => handleTextChange(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button type="button" id="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <div className="text-portrait-container">
                <p className="text-portrait unselectable" style={{
                        backgroundImage: `url(${image})`
                    }}>
                    {text}
                </p>
            </div>
        </div>

    </div>
);
}

export default App;
