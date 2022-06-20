import React from 'react'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image';
import { sanityClient } from '../sanity';

const MediumCard = ({img, title}) => {

    const imageProps = useNextSanityImage(
		sanityClient,
		img
	);

    return (
        <div className="cursor-pointer hover:scale-105 transform 
        transition duration-300 ease-out">
            <div className="relative h-80 w-80">
          {  img && <Image {...imageProps}layout="fill" className="rounded-xl"/>}
            </div>

            <h3 className="text-2xl mt-3">
                {title}
            </h3>


        </div>
    )
}

export default MediumCard
