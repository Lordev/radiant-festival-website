'use client';
import { Navigation, A11y, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import useBreakpointsStore from '@/lib/store/useBreakpointStore';

export default function GallerySlider() {
	const [swiperLoaded, setSwiperLoaded] = useState(false);
	const { mobile, initializeBreakpoints } = useBreakpointsStore();

	useEffect(() => {
		const cleanup = initializeBreakpoints();
		return () => {
			cleanup();
		};
	}, [initializeBreakpoints]);

	const handleLoad = () => {
		setSwiperLoaded(true);
	};

	const buttonStyling =
		'text-white w-10 h-10 absolute cursor-pointer block transition-transform duration-2500';

	const slideContainer = 'text-center mb-16 overflow-hidden ';

	const slides =
		'w-full hover:scale-105 transform-translate duration-500 ease-in-out';

	return (
		<Swiper
			modules={[Navigation, A11y, Pagination]}
			spaceBetween={10}
			slidesPerView={!mobile ? 3 : 1}
			speed={800}
			loop={true}
			navigation={{
				nextEl: '.custom-next',
				prevEl: '.custom-prev',
			}}
			pagination={{ clickable: true }}
			className={`relative ${swiperLoaded ? ' block' : 'invisible '}`}
			id="gallery-slider"
			style={{
				margin: !mobile ? '0 -500px' : '0',
			}}
			onInit={() => handleLoad()}
		>
			<SwiperSlide className={` custom-slide ${slideContainer}`}>
				<Image
					src="/compressed/gallery-img1.webp"
					alt="club photo"
					className={slides}
					height={641}
					width={912}
				/>
			</SwiperSlide>
			<SwiperSlide className={` custom-slide ${slideContainer}`}>
				<Image
					src="/compressed/gallery-img2.webp"
					alt="club photo"
					className={slides}
					height={641}
					width={912}
				/>
			</SwiperSlide>
			<SwiperSlide className={` custom-slide ${slideContainer}`}>
				<Image
					src="/compressed/gallery-img3.webp"
					alt="club photo"
					className={slides}
					height={641}
					width={912}
				/>
			</SwiperSlide>
			<SwiperSlide className={` custom-slide ${slideContainer}`}>
				<Image
					src="/compressed/gallery-img4.webp"
					alt="club photo"
					className={slides}
					height={641}
					width={912}
				/>
			</SwiperSlide>

			{/* <div className="absolute left-0 bottom-1/2">
                <div
                    className={`custom-prev swiper-button-prev hover:-translate-x-0.5 ${buttonStyling}`}
                ></div>
            </div>
            <div className="absolute right-0 bottom-1/2">
                <div
                    className={`custom-next swiper-button-next hover:translate-x-0.5 ${buttonStyling}`}
                ></div>
            </div> */}
		</Swiper>
	);
}
