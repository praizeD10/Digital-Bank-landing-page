import React from "react";
import imageCurrency from"./assets/image-currency.jpg"
import imageConfetti from"./assets/image-confetti.jpg"
import imagePlane from"./assets/image-plane.jpg"
import imageRestaurant from"./assets/image-restaurant.jpg"

const Article = () => {
    return (
        <div className='py-15 bg-[#FAFAFA]'>
            <div className='max-w-6xl mx-auto px-6 '>
                <h2 className="text-4xl text-[#2D314D] py-5 pb-10">
                    Latest Articles
                </h2>

                <div className="flex gap-5">
                    <div>
                        <img className="w-full h-48 rounded-b-sm" src={imageCurrency} alt="Article 1" />
                        <p className="py-3 text-gray-400 px-4 text-xs">By Ikenna</p>
                        <h5 className="text-[#2D314D] px-4">Recieve money in any currency with no fees</h5>
                        <p className="text-gray-400 px-4 text-sm">The world is getting smaller and we're becoming more mobile.
                            so why should you be forced to recieve money in a single..
                        </p>
                    </div>

                    <div>
                        <img className="w-full h-48 object-cover" src={imageRestaurant} alt="Article 2" />
                        <p className="py-3 text-gray-400 px-4 text-xs">By Ikenna</p>
                        <h5 className="text-[#2D314D] px-4">Treat yourself without worrying about money</h5>
                        <p className="text-gray-400 px-4 text-sm">Our single budgeting feature allows you to separate out your 
                            spending and set realistic limits each month. That means you...
                        </p>
                    </div>

                    <div>
                        <img className="w-full h-48 object-cover" src={imagePlane} alt="Article 3" />
                        <p className="py-3 text-gray-400 px-4 text-xs">By Ikenna</p>
                        <h5 className="text-[#2D314D] px-4">Take your Digitalbank card whenever you go</h5>
                        <p className="text-gray-400 px-4 text-sm"> We want ou to enjoy your travels. This is why we don't charge any fees
                            on purchases while you're abroad. We'll even.....
                        </p>
                    </div>

                    <div>
                        <img className="w-full h-48 object-cover" src={imageConfetti} alt="Article 4" />
                        <p className="py-3 text-gray-400 px-4 text-xs">By Ikenna</p>
                        <h5 className="text-[#2D314D] px-4">Our invite-only Beta accounts are now live!</h5>
                        <p className="text-gray-400 px-4 text-sm"> After a lot of hard work by the whole teamd, we're excited to launch our closed beta. It's
                            easy to request an invite through 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article