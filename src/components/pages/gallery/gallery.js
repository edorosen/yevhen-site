import { useState } from 'react';
import { LightBox } from 'react-lightbox-pack';
import { Wrapper, Img } from './styles';
import "react-lightbox-pack/dist/index.css";
import data from './data.json';

const Gallery = () => {
    // State
    const [toggle, setToggle] = useState(false);
    const [sIndex, setSIndex] = useState(0);

    // Handler
    const lightBoxHandler = (state, sIndex) => {
        setToggle(state);
        setSIndex(sIndex);
    };

    return (
        <Wrapper>
            {data.map((item, index) => (
                <>
                    <Img
                        key={item.id}
                        src={item.image}
                        alt={item.title}
                        onClick={() => {
                            lightBoxHandler(true, index);
                        }}
                    />
                </>
            ))}

            <LightBox
                state={toggle}
                event={lightBoxHandler}
                data={data}
                imageWidth="60vw"
                imageHeight="70vh"
                thumbnailHeight={50}
                thumbnailWidth={50}
                setImageIndex={setSIndex}
                imageIndex={sIndex}
            />
        </Wrapper>
    );
}

export default Gallery;