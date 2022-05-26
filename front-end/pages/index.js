import Head from 'next/head'
import products from '../assets/data/products';
import Image from 'next/image';
import React from 'react';

import bearEraserImage from '../assets/images/bear-eraser.webp';
import multicolorPensImage from '../assets/images/multicolor-pens.webp';
import flowerStickerImage from '../assets/images/flower-sticker.webp';
import amongUsKeychainImage from '../assets/images/among-us-keychain.webp';
import emoticonStickersImage from '../assets/images/emoticon-stickers.webp';
import foodEraserImage from '../assets/images/food-eraser.webp';
import featherBookmarkImage from '../assets/images/feather-bookmark2.webp';
import placeholderImage from '../assets/images/image-placeholder.png';


const imageList = [ bearEraserImage, 
                    multicolorPensImage, 
                    placeholderImage, 
                    placeholderImage, 
                    placeholderImage, 
                    placeholderImage, 
                    placeholderImage,
                    placeholderImage, 
                    foodEraserImage, 
                    emoticonStickersImage, 
                    flowerStickerImage, 
                    amongUsKeychainImage, 
                    featherBookmarkImage
                  ];

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Stationery Station - by Luke</title>
        <meta name="description" content="The Stationery Station - Stationery shop for kids" />
   
      </Head>

      <main>
        <div className='flex flex-col items-center p-8 bg-cyan-300' >
          <h1 
            className='text-4xl font-bold uppercase'
          >
            the stationery station
          </h1>
          <h2 className='text-2xl'>by Luke</h2>
        </div>

        <div className="bg-white">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
                <Image
                  src={imageList[product.id]}
                  layout='fill'
                  alt={product.imageAlt}
                  className="object-cover object-center w-full h-full group-hover:opacity-75"
                  priority
                />
              </div>
              <h3 className="mt-4 text-gray-700 text-md">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>

      </main>

      <footer>

      </footer>
    </div>
  )
}
