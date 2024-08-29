import { useState } from 'react';

import { Image, ImageContainer, TemporalLoader } from './styles';

type Props = {
    src: string;
    className?: string;
};

const ImageLoader = ({ src, className }: Props) => {
    const [isLoaded, setLoaded] = useState(false);
    return (
        <ImageContainer className={className}>
            <TemporalLoader isLoaded={isLoaded} />
            <Image
                src={src}
                isLoaded={isLoaded}
                onLoad={() => {
                    setLoaded(true);
                }}
            />
        </ImageContainer>
    );
};

export default ImageLoader;
